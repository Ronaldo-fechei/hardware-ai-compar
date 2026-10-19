import { createAdminClient } from "@/lib/supabase/admin";
import { getSiteUrl } from "@/lib/supabase/config";

/**
 * Integração com a API do Pinterest (v5).
 *
 * A BestHard publica Pins na própria conta Business (@martinsstore011) para
 * divulgar os artigos do site. Não há "login com Pinterest" para visitantes:
 * existe UM token, o da nossa conta, autorizado uma vez pelo administrador
 * e guardado no Supabase.
 */

const API = "https://api.pinterest.com/v5";

/** Permissões pedidas: ler o perfil, criar e ler Pins e pastas. */
export const ESCOPOS = [
  "user_accounts:read",
  "boards:read",
  "boards:write",
  "pins:read",
  "pins:write",
].join(",");

export function isPinterestConfigured(): boolean {
  return Boolean(process.env.PINTEREST_APP_ID && process.env.PINTEREST_APP_SECRET);
}

/**
 * Endereço de retorno registrado no painel do Pinterest. Precisa bater
 * caractere por caractere com o que está lá, senão o Pinterest recusa a
 * autorização.
 */
export function redirectUri(): string {
  return `${getSiteUrl().replace(/\/$/, "")}/pinterest/callback`;
}

/** URL para onde mandamos o administrador iniciar a autorização. */
export function authorizeUrl(state: string): string {
  const params = new URLSearchParams({
    client_id: process.env.PINTEREST_APP_ID!,
    redirect_uri: redirectUri(),
    response_type: "code",
    scope: ESCOPOS,
    state,
  });
  return `https://www.pinterest.com/oauth/?${params}`;
}

interface RespostaToken {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
  refresh_token_expires_in?: number;
  scope?: string;
}

/** Cabeçalho de autenticação do app (client_id:client_secret em base64). */
function authBasic(): string {
  const par = `${process.env.PINTEREST_APP_ID}:${process.env.PINTEREST_APP_SECRET}`;
  return `Basic ${Buffer.from(par).toString("base64")}`;
}

async function pedirToken(corpo: URLSearchParams): Promise<RespostaToken> {
  const res = await fetch(`${API}/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: authBasic(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: corpo,
    cache: "no-store",
  });

  if (!res.ok) {
    // A resposta de erro pode conter o código enviado; não vai para log.
    throw new Error(`Pinterest respondeu ${res.status} ao emitir o token.`);
  }
  return (await res.json()) as RespostaToken;
}

/** Troca o `code` recebido no callback por um access token. */
export async function trocarCodePorToken(code: string): Promise<RespostaToken> {
  return pedirToken(
    new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri(),
    }),
  );
}

/** Renova o access token a partir do refresh token guardado. */
export async function renovarToken(refresh: string): Promise<RespostaToken> {
  return pedirToken(
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh,
    }),
  );
}

function emSegundos(segundos?: number): string | null {
  if (!segundos) return null;
  return new Date(Date.now() + segundos * 1000).toISOString();
}

/** Grava (ou substitui) o token da conta. Exige a chave de serviço. */
export async function salvarToken(t: RespostaToken): Promise<void> {
  const admin = createAdminClient();
  if (!admin) throw new Error("SUPABASE_SERVICE_ROLE_KEY não configurada.");

  const { error } = await admin.from("pinterest_token").upsert({
    id: 1,
    access_token: t.access_token,
    refresh_token: t.refresh_token ?? null,
    scope: t.scope ?? ESCOPOS,
    expires_at: emSegundos(t.expires_in),
    refresh_expires_at: emSegundos(t.refresh_token_expires_in),
    updated_at: new Date().toISOString(),
  });
  if (error) throw new Error(`Não foi possível guardar o token: ${error.message}`);
}

interface TokenGuardado {
  access_token: string;
  refresh_token: string | null;
  expires_at: string | null;
}

/**
 * Devolve um access token válido, renovando quando estiver perto de vencer.
 * Retorna null quando a conta ainda não foi autorizada.
 */
export async function getAccessToken(): Promise<string | null> {
  const admin = createAdminClient();
  if (!admin) return null;

  const { data } = await admin
    .from("pinterest_token")
    .select("access_token, refresh_token, expires_at")
    .eq("id", 1)
    .maybeSingle();

  const guardado = data as TokenGuardado | null;
  if (!guardado) return null;

  // Renova com cinco minutos de folga, para não usar um token que vence no
  // meio da chamada seguinte.
  const vence = guardado.expires_at ? Date.parse(guardado.expires_at) : null;
  const perto = vence !== null && vence - Date.now() < 5 * 60 * 1000;

  if (perto && guardado.refresh_token) {
    const novo = await renovarToken(guardado.refresh_token);
    // O Pinterest nem sempre devolve um refresh novo; mantemos o atual.
    await salvarToken({ ...novo, refresh_token: novo.refresh_token ?? guardado.refresh_token });
    return novo.access_token;
  }

  return guardado.access_token;
}
