import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { AUTORES } from '@/content/autores'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(AUTORES).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const autor = AUTORES[slug]
  if (!autor) return { title: 'Autor não encontrado' }

  return {
    title: `${autor.nome} — ${autor.cargo}`,
    description: autor.bioCurta,
    alternates: { canonical: `/autores/${slug}` },
    openGraph: {
      title: autor.nome,
      description: autor.bioCurta,
      url: `/autores/${slug}`,
      type: 'profile',
      images: [autor.foto],
    },
  }
}

export default async function PaginaAutor({ params }: Props) {
  const { slug } = await params
  const autor = AUTORES[slug]
  if (!autor) notFound()

  // Schema.org Person — é assim que o Google liga artigo -> pessoa.
  // sameAs só com links que existem de verdade.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `https://besthard.com.br/autores/${slug}#person`,
    name: autor.nome,
    jobTitle: autor.cargo,
    description: autor.bioCurta,
    image: `https://besthard.com.br${autor.foto}`,
    url: `https://besthard.com.br/autores/${slug}`,
    knowsAbout: autor.especialidades,
    sameAs: Object.values(autor.links).filter(
      (u): u is string => Boolean(u) && u.startsWith('http'),
    ),
    worksFor: {
      '@type': 'Organization',
      name: 'BestHard',
      url: 'https://besthard.com.br',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-12">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <Image
            src={autor.foto}
            alt={`Foto de ${autor.nome}`}
            width={128}
            height={128}
            className="h-32 w-32 rounded-full object-cover ring-2 ring-white/10"
            priority
          />
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{autor.nome}</h1>
            <p className="mt-1 text-lg text-zinc-400">{autor.cargo}</p>
            <p className="mt-2 text-sm text-zinc-500">
              Escrevendo na BestHard desde{' '}
              {new Date(`${autor.desde}-01`).toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
              })}
            </p>
          </div>
        </header>

        <div className="prose prose-invert mt-10 max-w-none">
          {autor.bio.trim().split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Especialidades
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {autor.especialidades.map((e) => (
              <li
                key={e}
                className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-200"
              >
                {e}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 border-t border-zinc-800 pt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
            Contato
          </h2>
          <ul className="mt-3 flex flex-wrap gap-4 text-sm">
            {autor.links.linkedin && (
              <li><a href={autor.links.linkedin} rel="me noopener" target="_blank" className="underline">LinkedIn</a></li>
            )}
            {autor.links.github && (
              <li><a href={autor.links.github} rel="me noopener" target="_blank" className="underline">GitHub</a></li>
            )}
            {autor.links.instagram && (
              <li><a href={autor.links.instagram} rel="me noopener" target="_blank" className="underline">Instagram</a></li>
            )}
            {autor.links.email && (
              <li><a href={`mailto:${autor.links.email}`} className="underline">{autor.links.email}</a></li>
            )}
          </ul>
        </section>

        <p className="mt-10 text-sm text-zinc-500">
          Como a BestHard produz e revisa o conteúdo:{' '}
          <Link href="/metodologia" className="underline">metodologia</Link> ·{' '}
          <Link href="/transparencia" className="underline">transparência</Link>
        </p>
      </article>
    </>
  )
}
