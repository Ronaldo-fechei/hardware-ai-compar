import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getArtigoBySlug, getArtigosRelacionados } from '@/lib/blog-data'
import { getProdutoBySlug } from '@/lib/hardware-data'
import { CTAAmazon } from '@/components/CTAAmazon'
import { SITE_URL } from '@/lib/site'
import { buscaAmazon } from '@/lib/afiliados'

interface Props { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArtigoBySlug(params.slug)
  if (!a) return { title: 'Artigo não encontrado' }
  return {
    title: `${a.titulo} | BestHard`,
    description: a.descricao,
    keywords: a.tags,
    openGraph: {
      title: a.titulo, description: a.descricao, type: 'article',
      publishedTime: a.dataPublicacao,
      modifiedTime: a.dataAtualizacao,
      authors: [a.autor],
      siteName: 'BestHard — Comparador de Hardware',
      locale: 'pt_BR',
    },
    twitter: { card: 'summary_large_image', title: a.titulo, description: a.descricao },
    alternates: { canonical: `${SITE_URL}/blog/${params.slug}` },
  }
}

const CAT_COR: Record<string, string> = {
  guias: '#00E5FF', comparativos: '#A78BFA', builds: '#34D399', noticias: '#FB923C',
}
const CAT_LABEL: Record<string, string> = {
  guias: 'Guia', comparativos: 'Comparativo', builds: 'Build', noticias: 'Notícia',
}

function formatData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

function ArticleSchema({ artigo }: { artigo: ReturnType<typeof getArtigoBySlug> }) {
  if (!artigo) return null
  const schema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: artigo.titulo, description: artigo.descricao,
    datePublished: artigo.dataPublicacao, dateModified: artigo.dataAtualizacao || artigo.dataPublicacao,
    author: { '@type': 'Organization', name: artigo.autor },
    publisher: { '@type': 'Organization', name: 'BestHard', url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${artigo.slug}`,
    keywords: artigo.tags.join(', '),
    inLanguage: 'pt-BR',
  }
  const faqSchema = artigo.faq?.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: artigo.faq.map(f => ({
      '@type': 'Question', name: f.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: f.resposta },
    })),
  } : null
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </>
  )
}

function RenderSecao({ secao }: { secao: any }) {
  switch (secao.tipo) {

    case 'intro':
      return (
        <p className="text-[15px] leading-relaxed font-medium"
          style={{ color: 'var(--label)', borderLeft: '3px solid var(--accent)', paddingLeft: '16px' }}>
          {secao.texto}
        </p>
      )

    case 'h2':
      return (
        <div>
          <h2 className="text-xl font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>{secao.titulo}</h2>
          {secao.texto && <p className="text-[14px] leading-relaxed" style={{ color: 'var(--label)' }}>{secao.texto}</p>}
        </div>
      )

    case 'h3':
      return (
        <div>
          <h3 className="text-[16px] font-bold mb-2">{secao.titulo}</h3>
          {secao.texto && <p className="text-[14px] leading-relaxed" style={{ color: 'var(--label)' }}>{secao.texto}</p>}
        </div>
      )

    case 'paragrafo':
      return <p className="text-[14px] leading-relaxed" style={{ color: 'var(--label)' }}>{secao.texto}</p>

    case 'lista':
      return (
        <ul className="space-y-2">
          {(secao.itens || []).map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-[14px]" style={{ color: 'var(--label)' }}>
              <span className="mt-[3px] flex-shrink-0 font-bold" style={{ color: 'var(--accent)' }}>→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'tabela':
      return (
        <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
          <table className="w-full text-[13px]">
            <thead>
              <tr style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
                {(secao.colunas || []).map((col: string, i: number) => (
                  <th key={i} className="px-4 py-3 text-left font-mono text-[10px] uppercase tracking-[0.5px]"
                    style={{ color: 'var(--label)' }}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody style={{ background: 'var(--surface)' }}>
              {(secao.linhas || []).map((linha: string[], ri: number) => (
                <tr key={ri} className="hover:bg-[var(--surface2)] transition-colors"
                  style={{ borderBottom: ri < secao.linhas.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  {linha.map((cel: string, ci: number) => (
                    <td key={ci} className="px-4 py-3"
                      style={{
                        color: ri === secao.linhas.length - 1 ? 'var(--accent)'
                          : ci === 0 ? 'var(--text)' : 'var(--label)',
                        fontWeight: ri === secao.linhas.length - 1 || ci === 0 ? 700 : 400,
                      }}>{cel}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'destaque': {
      const cfgs: Record<string, { bg: string; border: string; cor: string }> = {
        dica:         { bg: 'rgba(0,229,255,.06)',  border: 'rgba(0,229,255,.2)',  cor: '#00E5FF' },
        aviso:        { bg: 'rgba(239,68,68,.06)',  border: 'rgba(239,68,68,.2)',  cor: '#EF4444' },
        recomendacao: { bg: 'rgba(34,197,94,.06)',  border: 'rgba(34,197,94,.2)',  cor: '#22C55E' },
        novidade:     { bg: 'rgba(167,139,250,.06)',border: 'rgba(167,139,250,.2)',cor: '#A78BFA' },
      }
      const cfg = cfgs[secao.destaqueTipo || 'dica']
      return (
        <div className="rounded-xl px-5 py-4" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
          <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text)' }}>{secao.texto}</p>
        </div>
      )
    }

    case 'afiliado': {
      const produto = getProdutoBySlug(secao.produtoSlug)
      if (!produto || !produto.precos?.length) return null
      const ofertaAmazon = produto.precos.find((p: any) => p.disponivel && p.loja === 'amazon')
      const linkAmazon = buscaAmazon(`${produto.marca} ${produto.nome}`)
      const cor = '#FF9900'
      return (
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
          <div className="px-5 py-3 flex items-center justify-between"
            style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[1.5px]" style={{ color: 'var(--muted)' }}>{produto.marca}</p>
              <p className="text-[14px] font-bold">{produto.nome}</p>
            </div>
            <Link href={`/produto/${produto.slug}`}
              className="text-[11px] font-semibold hover:opacity-70 transition-opacity"
              style={{ color: 'var(--accent)' }}>
              Ver análise completa →
            </Link>
          </div>
          <div className="px-5 py-4 flex items-center justify-between" style={{ background: 'var(--surface)' }}>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[1px] mb-1" style={{ color: 'var(--muted)' }}>
                Publicidade • Oferta na Amazon
              </p>
              {ofertaAmazon ? (
                <>
                  <p className="font-mono text-xl font-bold" style={{ color: 'var(--accent)', letterSpacing: '-1px' }}>
                    {ofertaAmazon.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  {ofertaAmazon.parcelamento && (
                    <p className="text-[11px]" style={{ color: 'var(--label)' }}>ou {ofertaAmazon.parcelamento}</p>
                  )}
                </>
              ) : (
                <p className="text-[13px] font-semibold" style={{ color: 'var(--label)' }}>Consultar preço atual</p>
              )}
            </div>
            <a href={linkAmazon} target="_blank" rel="noopener noreferrer sponsored"
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-[13px] font-bold hover:-translate-y-px hover:opacity-90 transition-all"
              style={{ background: cor, color: '#fff' }}>
              Ver na Amazon →
            </a>
          </div>
        </div>
      )
    }

    case 'cta':
      return (
        <div className="py-2">
          <Link href={secao.ctaHref || '/'}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-[13px] font-bold transition-all hover:-translate-y-px hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#0A0C10' }}>
            {secao.ctaTexto || 'Saiba mais →'}
          </Link>
        </div>
      )

    case 'adsense':
      return (
        <div className="rounded-xl flex items-center justify-center"
          style={{ height: '90px', background: 'var(--surface)', border: '1px dashed var(--border)' }}>
          <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
            [ Google AdSense — 728×90 — {secao.anuncioId} ]
          </span>
        </div>
      )

    default: return null
  }
}

export default function ArtigoPage({ params }: Props) {
  const artigo = getArtigoBySlug(params.slug)
  if (!artigo) notFound()

  const relacionados = getArtigosRelacionados(params.slug, 3)
  const cor = CAT_COR[artigo.categoria] || 'var(--accent)'

  return (
    <>
      <ArticleSchema artigo={artigo} />
      <article className="pb-16">

        {/* BREADCRUMB */}
        <div className="px-8 pt-6 pb-1">
          <nav className="flex items-center gap-2 font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
            <Link href="/" className="hover:text-[var(--label)] transition-colors">Home</Link>
            <span style={{ opacity: 0.3 }}>/</span>
            <Link href="/blog" className="hover:text-[var(--label)] transition-colors">Blog</Link>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: cor }}>{CAT_LABEL[artigo.categoria]}</span>
          </nav>
        </div>

        {/* HERO */}
        <div className="px-8 pt-4 pb-7" style={{ borderBottom: '1px solid var(--border)' }}>
          <span className="inline-block mb-4 rounded px-2 py-[3px] font-mono text-[9px] font-bold uppercase"
            style={{ background: cor + '18', color: cor, border: `1px solid ${cor}40` }}>
            {CAT_LABEL[artigo.categoria]}
          </span>
          <h1 className="text-3xl font-bold mb-3 md:text-4xl" style={{ letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            {artigo.titulo}
          </h1>
          <p className="text-[15px] mb-5" style={{ color: 'var(--label)' }}>{artigo.subtitulo}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
              📅 Publicado em {formatData(artigo.dataPublicacao)}
            </span>
            {artigo.dataAtualizacao && (
              <span className="font-mono text-[11px]" style={{ color: 'var(--accent)' }}>
                🔄 Atualizado em {formatData(artigo.dataAtualizacao)}
              </span>
            )}
            <span className="font-mono text-[11px]" style={{ color: 'var(--muted)' }}>
              ⏱ {artigo.tempoLeitura} min de leitura
            </span>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {artigo.tags.map(tag => (
              <span key={tag} className="rounded-full px-3 py-[3px] font-mono text-[9px]"
                style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="px-8 pt-8 max-w-3xl space-y-8">
          {artigo.conteudo.map((secao, i) => <RenderSecao key={i} secao={secao} />)}

          {/* FAQ */}
          {artigo.faq && artigo.faq.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-4" style={{ letterSpacing: '-0.5px' }}>Perguntas frequentes</h2>
              <div className="space-y-3">
                {artigo.faq.map((item, i) => (
                  <div key={i} className="rounded-xl p-5"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <p className="text-[14px] font-bold mb-2" style={{ letterSpacing: '-0.3px' }}>{item.pergunta}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: 'var(--label)' }}>{item.resposta}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA AMAZON (afiliado) */}
          <CTAAmazon />

          {/* ARTIGOS RELACIONADOS */}
          {relacionados.length > 0 && (
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '32px' }}>
              <p className="font-mono text-[9px] uppercase tracking-[2px] mb-4" style={{ color: 'var(--muted)' }}>
                // leia também
              </p>
              <div className="space-y-3">
                {relacionados.map(rel => {
                  const relCor = CAT_COR[rel.categoria] || 'var(--accent)'
                  return (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`}
                      className="group flex items-center gap-4 rounded-xl border px-5 py-4 transition-all hover:-translate-y-px"
                      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                      <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: relCor }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold" style={{ letterSpacing: '-0.3px' }}>{rel.titulo}</p>
                        <p className="text-[11px] mt-[2px]" style={{ color: 'var(--muted)' }}>
                          {rel.tempoLeitura} min · {formatData(rel.dataPublicacao)}
                          {rel.dataAtualizacao && ` · Atualizado ${formatData(rel.dataAtualizacao)}`}
                        </p>
                      </div>
                      <span className="text-[12px] font-bold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: relCor }}>Ler →</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
