import Image from 'next/image'
import Link from 'next/link'
import { AUTORES, AUTOR_PADRAO } from '@/content/autores'

type Props = {
  autorSlug?: string
  publicadoEm: string   // ISO: '2026-01-10'
  atualizadoEm?: string
  tempoLeitura?: number
}

/**
 * Byline com rosto, nome clicável e datas reais.
 * Vai no TOPO de todo artigo — logo abaixo do H1, antes do primeiro parágrafo.
 *
 * Substitui a assinatura "Equipe Editorial BestHard". É a diferença entre
 * o Google ver um site de afiliado e ver uma publicação.
 */
export function AuthorByline({
  autorSlug,
  publicadoEm,
  atualizadoEm,
  tempoLeitura,
}: Props) {
  const autor = (autorSlug && AUTORES[autorSlug]) || AUTOR_PADRAO
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })

  return (
    <div className="flex items-center gap-3 border-y border-zinc-800 py-4">
      <Link href={`/autores/${autor.slug}`}>
        <Image
          src={autor.foto}
          alt={autor.nome}
          width={44}
          height={44}
          className="h-11 w-11 rounded-full object-cover"
        />
      </Link>
      <div className="text-sm leading-tight">
        <p>
          Por{' '}
          <Link href={`/autores/${autor.slug}`} className="font-semibold hover:underline">
            {autor.nome}
          </Link>
          <span className="text-zinc-500"> · {autor.cargo}</span>
        </p>
        <p className="mt-0.5 text-zinc-500">
          <time dateTime={publicadoEm}>Publicado em {fmt(publicadoEm)}</time>
          {atualizadoEm && atualizadoEm !== publicadoEm && (
            <> · <time dateTime={atualizadoEm}>atualizado em {fmt(atualizadoEm)}</time></>
          )}
          {tempoLeitura ? ` · ${tempoLeitura} min de leitura` : null}
        </p>
      </div>
    </div>
  )
}

/**
 * JSON-LD do artigo, com author apontando para o @id da Person.
 * Chame dentro do page.tsx do post.
 */
export function articleJsonLd({
  titulo, descricao, slug, publicadoEm, atualizadoEm, autorSlug, imagem,
}: {
  titulo: string; descricao: string; slug: string
  publicadoEm: string; atualizadoEm?: string; autorSlug?: string; imagem?: string
}) {
  const autor = (autorSlug && AUTORES[autorSlug]) || AUTOR_PADRAO
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: titulo,
    description: descricao,
    datePublished: publicadoEm,
    dateModified: atualizadoEm ?? publicadoEm,
    mainEntityOfPage: `https://besthard.com.br/blog/${slug}`,
    image: imagem ? `https://besthard.com.br${imagem}` : undefined,
    author: {
      '@type': 'Person',
      '@id': `https://besthard.com.br/autores/${autor.slug}#person`,
      name: autor.nome,
      url: `https://besthard.com.br/autores/${autor.slug}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BestHard',
      url: 'https://besthard.com.br',
    },
  }
}
