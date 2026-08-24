import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // ANTES: rodava em tudo, menos arquivos estáticos. Resultado: toda visita a
  // uma página pública dependia do Supabase responder, e uma instabilidade lá
  // virava 504 no site inteiro (foi o que aconteceu em 24/08/2026).
  //
  // AGORA: só nas rotas que de fato têm sessão de usuário. Home, blog,
  // comparadores e fichas de produto não passam por aqui — carregam mesmo com
  // o Supabase fora do ar, e carregam mais rápido.
  matcher: [
    "/login/:path*",
    "/historico/:path*",
    "/admin/:path*",
    "/redefinir-senha/:path*",
    "/auth/:path*",
    "/api/checkout/:path*",
  ],
};
