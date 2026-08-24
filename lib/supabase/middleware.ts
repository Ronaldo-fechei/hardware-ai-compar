import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseEnv, isSupabaseConfigured } from "./config";
import { comTimeout } from "./safe";

/**
 * Atualiza a sessão do Supabase (mantém o login válido).
 *
 * Roda apenas nas rotas que realmente precisam de sessão — veja o matcher em
 * middleware.ts na raiz. Páginas públicas (home, blog, comparar, produto) não
 * passam mais por aqui: são mais rápidas e não dependem do Supabase estar no ar.
 *
 * E mesmo nas rotas em que roda, a chamada tem timeout: se o Supabase não
 * responder, a requisição segue sem sessão em vez de estourar 504.
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  if (!isSupabaseConfigured()) return response;

  const { url, anonKey } = getSupabaseEnv();

  try {
    const supabase = createServerClient(url!, anonKey!, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    });

    // Renova os tokens. Com teto de tempo: sessão é extra, página é o produto.
    await comTimeout(supabase.auth.getUser());
  } catch {
    // Nunca deixa um problema de auth derrubar a navegação.
  }

  return response;
}
