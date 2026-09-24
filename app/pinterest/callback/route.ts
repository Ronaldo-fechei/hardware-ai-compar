import { NextResponse } from "next/server";

/**
 * Callback do OAuth do Pinterest.
 *
 * O Pinterest redireciona para cá depois que o titular da conta autoriza o
 * aplicativo, passando `?code=` (código de autorização, uso único) e `?state=`
 * (o valor que enviamos no início do fluxo, para conferir que a resposta é
 * nossa).
 *
 * Por enquanto esta rota só confirma o recebimento. A troca do `code` pelo
 * access token acontece em um passo posterior, no servidor, junto com a
 * validação do `state`.
 *
 * O `code` NÃO é registrado em log nem devolvido na página: é uma credencial
 * de curta duração e log é lugar onde credencial não deve passar.
 */

function pagina(titulo: string, mensagem: string, status: number) {
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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const erro = searchParams.get("error");

  if (erro) {
    return pagina(
      "Autorização não concluída",
      "O Pinterest informou que a autorização foi recusada ou cancelada. Você pode tentar novamente a partir do painel.",
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

  return pagina(
    "Autorização recebida",
    "O Pinterest confirmou a autorização da conta. A troca do código pelo token de acesso será feita no próximo passo da integração.",
    200,
  );
}
