import { notFound } from 'next/navigation'
import { getCategoriaConfig, getProdutosByCategoria } from '@/lib/hardware-data'
import { ComparadorClient } from '@/components/ComparadorClient'
import type { Metadata } from 'next'

interface Props {
  params: { categoria: string }
  searchParams: { a?: string; b?: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoriaConfig(params.categoria)
  if (!cat) return { title: 'BestHard' }
  return {
    title: `Comparar ${cat.label} — BestHard`,
    description: cat.subtitle,
  }
}

export default function ComparadorPage({ params, searchParams }: Props) {
  const cat = getCategoriaConfig(params.categoria)
  if (!cat) notFound()

  const produtos = getProdutosByCategoria(params.categoria)

  // slugs vindos da URL: /comparar/processadores?a=amd-ryzen-7-7800x3d&b=intel-core-i7-14700k
  const slugA = searchParams.a || produtos[0]?.slug
  const slugB = searchParams.b || produtos[1]?.slug

  return (
    <ComparadorClient
      categoria={cat}
      produtos={produtos}
      slugA={slugA}
      slugB={slugB}
    />
  )
}
