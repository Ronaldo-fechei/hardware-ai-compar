import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { authorizeUrl, isPinterestConfigured } from "@/lib/pinterest";
import { STATE_COOKIE, pagina, recusaSeNaoForAdmin } from "../shared";

/**
 * Início da autorização: manda o administrador para o Pinterest.
 *
 * Gera um `state` aleatório, guarda em cookie e o envia junto. O Pinterest
 * devolve o mesmo valor no callback, e é assim que sabemos que a resposta
 * veio do fluxo que nós começamos, e não de um link que alguém montou.
 */
export async function GET() {
  if (!isPinterestConfigured()) {
    return pagina(
      "Integração não configurada",
      "Faltam as variáveis PINTEREST_APP_ID e PINTEREST_APP_SECRET neste ambiente.",
      503,
    );
  }

  const recusa = await recusaSeNaoForAdmin();
  if (recusa) return recusa;

  const state = randomUUID();
  const res = NextResponse.redirect(authorizeUrl(state));
  res.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/pinterest",
    maxAge: 10 * 60,
  });
  return res;
}
