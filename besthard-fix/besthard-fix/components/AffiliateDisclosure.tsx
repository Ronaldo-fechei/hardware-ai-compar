import Link from 'next/link'

/**
 * ETAPA 6 — densidade de afiliado.
 *
 * Hoje as páginas repetem avisos de comissão em vários pontos. Isso engorda
 * a página sem entregar nada e reforça a leitura de "site feito pra vender".
 *
 * Regra nova: UM aviso, no topo, discreto. Nada mais.
 */
export function AffiliateDisclosure() {
  return (
    <p className="rounded-md bg-zinc-900/60 px-3 py-2 text-xs text-zinc-500">
      Alguns links desta página são de afiliado. Se você comprar por eles, a
      BestHard recebe comissão sem custo extra pra você — e isso não muda o que
      recomendamos. Detalhes em{' '}
      <Link href="/transparencia" className="underline hover:text-zinc-300">
        transparência
      </Link>
      .
    </p>
  )
}
