import { notFound } from 'next/navigation'
import { getCategoriaConfig, getProdutosByCategoria } from '@/lib/hardware-data'
import { ComparadorClient } from '@/components/ComparadorClient'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ categoria: string }>
  searchParams: Promise<{ a?: string; b?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params
  const cat = getCategoriaConfig(categoria)
  if (!cat) return { title: 'BestHard' }
  return {
    title: `Comparar ${cat.label} — BestHard`,
    description: cat.subtitle,
  }
}

export default async function ComparadorPage({ params, searchParams }: Props) {
  const [{ categoria }, query] = await Promise.all([params, searchParams])
  const cat = getCategoriaConfig(categoria)
  if (!cat) notFound()

  const produtos = getProdutosByCategoria(categoria)

  // slugs vindos da URL: /comparar/processadores?a=amd-ryzen-7-7800x3d&b=intel-core-i7-14700k
  const slugA = query.a || produtos[0]?.slug
  const slugB = query.b || produtos[1]?.slug

  return (
    <ComparadorClient
      categoria={cat}
      produtos={produtos}
      slugA={slugA}
      slugB={slugB}
    />
  )
}
