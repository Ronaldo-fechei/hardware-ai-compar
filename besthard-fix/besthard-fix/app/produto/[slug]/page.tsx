/**
 * PATCH — app/produto/[slug]/page.tsx
 *
 * Não substitua o arquivo inteiro. Copie APENAS o generateMetadata abaixo
 * por cima do seu, mantendo o resto do componente como está.
 *
 * O que muda: robots.index passa a false. A página continua existindo,
 * continua navegável, continua passando autoridade pelos links internos
 * (follow: true) — mas sai do índice do Google.
 */
import type { Metadata } from 'next'
import { getProduto } from '@/lib/produtos'   // ajuste ao seu projeto

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const produto = await getProduto(slug)

  if (!produto) return { title: 'Produto não encontrado | BestHard' }

  return {
    title: `${produto.nome} — ficha técnica e preço | BestHard`,
    description: produto.resumo,

    // ---- A correção ----
    robots: {
      index: false,      // fora do índice do Google
      follow: true,      // links da página continuam sendo seguidos
      googleBot: { index: false, follow: true },
    },
    // --------------------

    alternates: { canonical: `https://besthard.com.br/produto/${slug}` },
    openGraph: {
      title: produto.nome,
      description: produto.resumo,
      url: `https://besthard.com.br/produto/${slug}`,
      type: 'website',
    },
  }
}
