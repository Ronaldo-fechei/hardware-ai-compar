import type { NextRequest } from "next/server";
import { isPinterestConfigured, salvarToken, trocarCodePorToken } from "@/lib/pinterest";
import { STATE_COOKIE, pagina, recusaSeNaoForAdmin } from "../shared";

/**
 * Callback do OAuth do Pinterest.
 *
 * O Pinterest redireciona para cá depois que o administrador autoriza o
 * aplicativo, passando `?code=` (código de autorização, uso único) e
 * `?state=` (o valor que enviamos em /pinterest/autorizar).
 *
 * O `code` NÃO é registrado em log nem devolvido na página: é uma credencial
 * de curta duração e log é lugar onde credencial não deve passar. O mesmo
 * vale para o token que ele vira — quem precisa dele é o servidor, pelo
 * Supabase.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const erro = searchParams.get("error");

  if (erro) {
    return pagina(
      "Autorização não concluída",
      "O Pinterest informou que a autorização foi recusada ou cancelada. Você pode tentar de novo em /pinterest/autorizar.",
      400,
    );
  }

  if (!code || !state) {
    return pagina(
      "Requisição incompleta",
      "Esta página só funciona como retorno da autorização do Pinterest. Faltaram os parâmetros esperados na URL.",
      400,
    );
  }

  if (!isPinterestConfigured()) {
    return pagina(
      "Integração não configurada",
      "Faltam as variáveis PINTEREST_APP_ID e PINTEREST_APP_SECRET neste ambiente.",
      503,
    );
  }

  const recusa = await recusaSeNaoForAdmin();
  if (recusa) return recusa;

  // O `state` precisa ser o mesmo que saiu daqui. Diferente (ou ausente,
  // porque o cookie expirou) significa que este retorno não pertence ao
  // fluxo que começamos.
  const esperado = req.cookies.get(STATE_COOKIE)?.value;

  if (!esperado || esperado !== state) {
    return pagina(
      "Autorização expirada",
      "Não reconhecemos esta resposta do Pinterest. Comece de novo em /pinterest/autorizar.",
      400,
    );
  }

  try {
    const token = await trocarCodePorToken(code);
    await salvarToken(token);
  } catch {
    // A mensagem do erro pode carregar o código; fica fora da página.
    return pagina(
      "Não foi possível concluir",
      "A troca do código pelo token falhou. Confira PINTEREST_APP_ID, PINTEREST_APP_SECRET e o endereço de retorno registrado no painel do Pinterest, e tente de novo.",
      502,
    );
  }

  const ok = pagina(
    "Autorização recebida",
    "A conta do Pinterest está conectada e o token ficou guardado. Já dá para publicar Pins pela API.",
    200,
  );
  ok.cookies.set(STATE_COOKIE, "", { path: "/pinterest", maxAge: 0 });
  return ok;
}
