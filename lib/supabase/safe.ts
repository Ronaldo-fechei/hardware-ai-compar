/**
 * Chamadas ao Supabase que NUNCA podem derrubar a página.
 *
 * Contexto: em 24/08/2026 o site inteiro caiu com 504
 * MIDDLEWARE_INVOCATION_TIMEOUT. Causa: `supabase.auth.getUser()` era chamado
 * em toda requisição — no middleware e no AuthNav do layout raiz — sem timeout
 * e sem try/catch. Quando o Supabase demora a responder (projeto pausado,
 * instabilidade, variável de ambiente errada), a renderização fica presa até a
 * Vercel matar a função, e o visitante recebe 504 em qualquer URL.
 *
 * Sessão de usuário é um extra. Conteúdo é o produto. Se o extra falhar, a
 * página tem que aparecer mesmo assim — como se o visitante estivesse deslogado.
 */

const TIMEOUT_PADRAO_MS = 2500

export async function comTimeout<T>(
  promessa: Promise<T>,
  ms: number = TIMEOUT_PADRAO_MS,
): Promise<T | null> {
  let timer: ReturnType<typeof setTimeout> | undefined
  try {
    return await Promise.race([
      promessa,
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), ms)
      }),
    ])
  } catch {
    // Erro de rede, credencial inválida, projeto pausado — segue deslogado.
    return null
  } finally {
    if (timer) clearTimeout(timer)
  }
}
