import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

/**
 * /produto (sem slug) não é uma página de verdade.
 *
 * Este arquivo era uma cópia antiga de app/produto/[slug]/page.tsx — o mesmo
 * componente, esperando um `slug` que nesta rota nunca chega. Quem abrisse
 * besthard.com.br/produto pegava erro.
 *
 * Agora ele só encaminha para o catálogo, que é o lugar certo para quem quer
 * navegar pelos produtos.
 */
export const metadata: Metadata = {
  title: 'Catálogo de hardware — BestHard',
  robots: { index: false, follow: true },
}

export default function ProdutoIndexPage() {
  redirect('/catalogo')
}
