import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail } from "@/lib/admin";

/** Cookie onde guardamos o `state` entre o início do fluxo e o callback. */
export const STATE_COOKIE = "pinterest_oauth_state";

/**
 * Página simples de retorno. O fluxo de autorização é usado por uma pessoa
 * só, algumas vezes na vida, então não vale carregar o layout do site.
 */
export function pagina(titulo: string, mensagem: string, status: number) {
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, nofollow" />
    <title>${titulo} — BestHard</title>
    <style>
      body { margin: 0; min-height: 100vh; display: grid; place-items: center;
             background: #0b0e14; color: #e6e8ee;
             font-family: system-ui, -apple-system, "Segoe UI", sans-serif; }
      main { max-width: 32rem; padding: 2rem; text-align: center; }
      h1 { font-size: 1.5rem; margin: 0 0 .75rem; letter-spacing: -.5px; }
      p { margin: 0 0 1.25rem; line-height: 1.6; color: #9aa3b2; font-size: .95rem; }
      a { color: #00e5ff; font-weight: 600; text-decoration: none; }
    </style>
  </head>
  <body>
    <main>
      <h1>${titulo}</h1>
      <p>${mensagem}</p>
      <a href="/">Voltar para a BestHard</a>
    </main>
  </body>
</html>`;

  return new NextResponse(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

/**
 * Só o administrador autoriza a conta.
 *
 * Sem esta checagem, qualquer visitante poderia percorrer o fluxo com a
 * própria conta do Pinterest e sobrescrever o token guardado — a partir daí
 * a BestHard publicaria no perfil dele, não no nosso.
 *
 * Devolve null quando pode seguir, ou a resposta de recusa.
 */
export async function recusaSeNaoForAdmin() {
  const supabase = await createClient();
  if (!supabase) {
    return pagina(
      "Login indisponível",
      "Este fluxo exige uma conta de administrador e o Supabase não está configurado neste ambiente.",
      503,
    );
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdminEmail(user.email)) {
    return pagina(
      "Acesso restrito",
      "Só um administrador da BestHard pode autorizar a conta do Pinterest. Entre com a conta de administrador e tente de novo.",
      403,
    );
  }

  return null;
}
