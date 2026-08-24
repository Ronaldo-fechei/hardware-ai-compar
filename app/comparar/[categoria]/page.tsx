import { notFound } from 'next/navigation'
import { getCategoriaConfig, getProdutosByCategoria } from '@/lib/hardware-data'
import { ComparadorClient } from '@/components/ComparadorClient'
import { COMPARADORES } from '@/content/comparadores'
import {
  IntroComparador,
  ConteudoComparadorSecoes,
  faqJsonLd,
} from '@/components/ConteudoComparador'
import { SITE_URL } from '@/lib/site'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ categoria: string }>
  searchParams: Promise<{ a?: string; b?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params
  const cat = getCategoriaConfig(categoria)
  if (!cat) return { title: 'BestHard' }

  const conteudo = COMPARADORES[categoria]

  return {
    title: conteudo ? `${conteudo.titulo} — ${conteudo.subtitulo}` : `Comparar ${cat.label} — BestHard`,
    description: conteudo ? conteudo.intro[0].slice(0, 155) : cat.subtitle,
    alternates: { canonical: `${SITE_URL}/comparar/${categoria}` },
  }
}

export default async function ComparadorPage({ params, searchParams }: Props) {
  const [{ categoria }, query] = await Promise.all([params, searchParams])
  const cat = getCategoriaConfig(categoria)
  if (!cat) notFound()

  const produtos = getProdutosByCategoria(categoria)
  const conteudo = COMPARADORES[categoria]

  // slugs vindos da URL: /comparar/processadores?a=amd-ryzen-7-7800x3d&b=intel-core-i7-14700k
  const slugA = query.a || produtos[0]?.slug
  const slugB = query.b || produtos[1]?.slug

  return (
    <>
      {conteudo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(conteudo)) }}
        />
      )}

      {/* 1. Texto ANTES da ferramenta — primeira coisa que o rastreador lê */}
      {conteudo && <IntroComparador dados={conteudo} />}

      {/* 2. A ferramenta de comparação */}
      <ComparadorClient
        categoria={cat}
        produtos={produtos}
        slugA={slugA}
        slugB={slugB}
      />

      {/* 3. O grosso do conteúdo editorial */}
      {conteudo && <ConteudoComparadorSecoes dados={conteudo} />}
    </>
  )
}
