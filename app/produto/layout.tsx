import type { Metadata } from "next";

/**
 * As 230 fichas em /produto/ ficam FORA do índice do Google.
 *
 * Motivo: são páginas geradas a partir de um único template, com pouco texto
 * único e link de afiliado. Contra 16 artigos editoriais, essa proporção é o
 * que o AdSense classificou como "conteúdo de baixo valor" em besthard.com.br.
 *
 * `follow: true` mantém os links da página sendo seguidos, então a navegação
 * interna continua valendo. As fichas seguem acessíveis para quem navega —
 * elas só deixam de disputar espaço no índice com o conteúdo editorial.
 *
 * O robots.txt continua liberando /produto/ de propósito: se o Googlebot for
 * bloqueado, ele nunca lê a tag noindex e as páginas ficam presas no índice.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
};

export default function ProdutoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto max-w-5xl px-2 py-6">{children}</div>;
}
