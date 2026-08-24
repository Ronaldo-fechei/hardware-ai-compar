import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { COMPARADORES } from '@/content/comparadores'
import {
  IntroComparador,
  ConteudoComparadorSecoes,
  faqJsonLd,
} from '@/components/ConteudoComparador'
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure'
// import { FerramentaComparacao } from '@/components/...'  <- o seu componente atual

type Props = { params: Promise<{ categoria: string }> }

export function generateStaticParams() {
  return Object.keys(COMPARADORES).map((categoria) => ({ categoria }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params
  const dados = COMPARADORES[categoria]
  if (!dados) return { title: 'Categoria não encontrada' }

  return {
    title: `${dados.titulo} — ${dados.subtitulo}`,
    description: dados.intro[0].slice(0, 155),
    alternates: { canonical: `/comparar/${categoria}` },
  }
}

export default async function PaginaComparador({ params }: Props) {
  const { categoria } = await params
  const dados = COMPARADORES[categoria]
  if (!dados) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(dados)) }}
      />

      <main className="px-4 py-12">
        {/* 1. Conteúdo ANTES da ferramenta — é o que o Googlebot lê primeiro */}
        <IntroComparador dados={dados} />

        {/* 2. A ferramenta que já existe hoje */}
        <div className="mx-auto mt-12 max-w-5xl">
          {/* <FerramentaComparacao categoria={categoria} /> */}
        </div>

        {/* 3. O grosso do texto */}
        <ConteudoComparadorSecoes dados={dados} />

        {/* 4. Só agora o comercial — um aviso, no fim */}
        <div className="mx-auto mt-16 max-w-3xl">
          <AffiliateDisclosure />
        </div>
      </main>
    </>
  )
}
