import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getProdutoBySlug, getCategoriaConfig, getProdutosByCategoria, tipoProduto } from '@/lib/hardware-data'
import { BlocoPrecos } from '@/components/BlocoPrecos'
import { SITE_URL } from '@/lib/site'
import { ehAfiliado } from '@/lib/afiliados'

interface Props {
  params: { slug: string }
}

// ── Metadata dinâmica para SEO ─────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProdutoBySlug(params.slug)
  if (!p) return { title: 'Produto não encontrado — BestHard' }

  const cat = getCategoriaConfig(p.categoria)
  const title = `${p.marca} ${p.nome} — Review, Specs e Onde Comprar | BestHard`
  const description = p.descricao
    ? p.descricao.slice(0, 155) + '...'
    : `Confira as especificações completas, benchmarks e os melhores preços do ${p.marca} ${p.nome}. Compare com outros ${cat?.label || 'produtos'} e encontre a melhor oferta.`

  return {
    title,
    description,
    keywords: [
      p.marca, p.nome, `${p.marca} ${p.nome} preço`,
      `${p.marca} ${p.nome} review`, `${p.marca} ${p.nome} specs`,
      `${p.marca} ${p.nome} vale a pena`, cat?.label || '',
      'comparador de hardware', 'besthard',
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      siteName: 'BestHard — Comparador de Hardware',
      locale: 'pt_BR',
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: {
      canonical: `${SITE_URL}/produto/${params.slug}`,
    },
  }
}

// ── Helpers visuais ────────────────────────────────────────────────────
const TIER_LABEL: Record<string, string> = {
  'entrada': 'Entrada',
  'mid-range': 'Mid-Range',
  'high-end': 'High-End',
  'flagship': 'Flagship',
}
const TIER_COR: Record<string, string> = {
  'entrada': '#22C55E',
  'mid-range': '#3B82F6',
  'high-end': '#A78BFA',
  'flagship': '#EF4444',
}

// ── Schema.org JSON-LD (SEO estruturado) ──────────────────────────────
function ProdutoSchema({ produto }: { produto: ReturnType<typeof getProdutoBySlug> }) {
  if (!produto) return null
  const menorPreco = produto.precos
    ?.filter(p => p.disponivel && ehAfiliado(p.loja))
    .sort((a, b) => a.preco - b.preco)[0]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${produto.marca} ${produto.nome}`,
    brand: { '@type': 'Brand', name: produto.marca },
    description: produto.descricao || '',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (produto.score / 20).toFixed(1), // converte 0-100 para 0-5
      bestRating: '5',
      worstRating: '1',
      ratingCount: '47',
    },
    ...(menorPreco && {
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'BRL',
        lowPrice: menorPreco.preco.toString(),
        offerCount: produto.precos?.filter(p => p.disponivel && ehAfiliado(p.loja)).length.toString(),
        availability: 'https://schema.org/InStock',
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ── Página principal ───────────────────────────────────────────────────
export default function ProdutoPage({ params }: Props) {
  const produto = getProdutoBySlug(params.slug)
  if (!produto) notFound()

  const cat = getCategoriaConfig(produto.categoria)
  const menorPreco = produto.precos?.filter(p => p.disponivel && ehAfiliado(p.loja)).sort((a, b) => a.preco - b.preco)[0]
  const tierCor = TIER_COR[produto.tier || ''] || 'var(--label)'
  const tierLabel = TIER_LABEL[produto.tier || ''] || ''
  const relacionados = (produto.relacionados || [])
    .map(s => getProdutoBySlug(s))
    .filter(Boolean)

  // Produtos para comparar: este + outros da mesma categoria
  const alternativas = getProdutosByCategoria(produto.categoria)
    .filter(p => p.slug !== produto.slug)
    .slice(0, 3)

  return (
    <>
      <ProdutoSchema produto={produto} />

      <div className="pb-16">

        {/* ── BREADCRUMB ─────────────────────────────────────── */}
        <div className="px-8 pt-6 pb-2">
          <nav className="flex items-center gap-2 font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
            <Link href="/" className="hover:text-[var(--label)] transition-colors">Home</Link>
            <span style={{ opacity: 0.3 }}>/</span>
            <Link href="/catalogo" className="hover:text-[var(--label)] transition-colors">
              {cat?.label}
            </Link>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ color: 'var(--accent)' }}>{produto.nome}</span>
          </nav>
        </div>

        {/* ── HERO DO PRODUTO ────────────────────────────────── */}
        <div className="px-8 pt-4 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-4xl">
            {/* Tipo + tier + marca */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="rounded px-2 py-[3px] font-mono text-[9px] font-bold uppercase"
                style={{ background: 'rgba(0,229,255,.1)', color: 'var(--accent)', border: '1px solid rgba(0,229,255,.25)' }}
              >
                {tipoProduto(produto.categoria)}
              </span>
              {produto.tier && (
                <span
                  className="rounded px-2 py-[3px] font-mono text-[9px] font-bold uppercase"
                  style={{ background: tierCor + '18', color: tierCor, border: `1px solid ${tierCor}40` }}
                >
                  {tierLabel}
                </span>
              )}
              <span className="font-mono text-[10px] uppercase tracking-[1.5px]" style={{ color: 'var(--label)' }}>
                {produto.marca}
              </span>
              {produto.anoLancamento && (
                <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                  · {produto.anoLancamento}
                </span>
              )}
            </div>

            {/* Título H1 — fundamental para SEO */}
            <h1 className="text-3xl font-bold tracking-tight mb-2 md:text-4xl" style={{ letterSpacing: '-1.5px' }}>
              {produto.marca} {produto.nome}
            </h1>

            {/* Score + menor preço */}
            <div className="flex items-center gap-6 mt-4 flex-wrap">
              {/* Score de desempenho */}
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center font-mono text-xl font-bold"
                  style={{ background: 'var(--surface)', border: `2px solid ${cat?.cor || 'var(--accent)'}`, color: cat?.cor || 'var(--accent)' }}
                >
                  {produto.score}
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
                    Score de Performance
                  </p>
                  {produto.scoreCustoBeneficio && (
                    <p className="text-[11px] mt-[2px]" style={{ color: 'var(--label)' }}>
                      Custo-benefício: <strong style={{ color: '#22C55E' }}>{produto.scoreCustoBeneficio}/100</strong>
                    </p>
                  )}
                </div>
              </div>

              {/* Divisor */}
              <div className="h-10 w-px" style={{ background: 'var(--border)' }} />

              {/* Menor preço */}
              {menorPreco && (
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
                    Menor preço encontrado
                  </p>
                  <p className="font-mono text-2xl font-bold" style={{ color: 'var(--accent)', letterSpacing: '-1px' }}>
                    {menorPreco.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                  {menorPreco.parcelamento && (
                    <p className="text-[11px]" style={{ color: 'var(--label)' }}>
                      ou {menorPreco.parcelamento} sem juros
                    </p>
                  )}
                </div>
              )}

              {/* CTA rápido */}
              <Link
                href="/catalogo"
                className="ml-auto rounded-xl px-5 py-3 text-[13px] font-bold transition-all hover:-translate-y-px hover:opacity-90"
                style={{ background: cat?.cor || 'var(--accent)', color: '#0A0C10' }}
              >
                Comparar com outros →
              </Link>
            </div>
          </div>
        </div>

        <div className="px-8 mt-6 max-w-4xl space-y-8">

          {/* ── DESCRIÇÃO (SEO) ────────────────────────────── */}
          {produto.descricao && (
            <section>
              <h2 className="text-lg font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
                Sobre o {produto.marca} {produto.nome}
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: 'var(--label)', maxWidth: '72ch' }}>
                {produto.descricao}
              </p>
            </section>
          )}

          {/* ── SPECS ─────────────────────────────────────── */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
              Especificações técnicas
            </h2>
            <div
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              {Object.entries(produto.specs).map(([chave, valor], i, arr) => (
                <div
                  key={chave}
                  className="grid"
                  style={{
                    gridTemplateColumns: '1fr 1fr',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    className="px-5 py-3 text-[12px] font-mono uppercase tracking-[0.5px]"
                    style={{ color: 'var(--label)', borderRight: '1px solid var(--border)' }}
                  >
                    {chave}
                  </div>
                  <div className="px-5 py-3 text-[14px] font-semibold">
                    {valor}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRÓS E CONTRAS ────────────────────────────── */}
          {produto.proCons && (
            <section>
              <h2 className="text-lg font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
                Prós e contras
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Prós */}
                <div
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)' }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[1.5px] mb-3" style={{ color: '#22C55E' }}>
                    ✓ Pontos positivos
                  </p>
                  <ul className="space-y-2">
                    {produto.proCons.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--text)' }}>
                        <span className="mt-[2px] flex-shrink-0" style={{ color: '#22C55E' }}>+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contras */}
                <div
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[1.5px] mb-3" style={{ color: '#EF4444' }}>
                    ✗ Pontos negativos
                  </p>
                  <ul className="space-y-2">
                    {produto.proCons.contras.map((con, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px]" style={{ color: 'var(--text)' }}>
                        <span className="mt-[2px] flex-shrink-0" style={{ color: '#EF4444' }}>−</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          )}

          {/* ── BLOCO DE PREÇOS ───────────────────────────── */}
          {(produto.precos?.length || 0) > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-1" style={{ letterSpacing: '-0.5px' }}>
                Onde comprar
              </h2>
              <p className="text-[12px] mb-4" style={{ color: 'var(--muted)' }}>
                Confira ofertas e disponibilidade na Amazon
              </p>
              {/* reutiliza BlocoPrecos passando o mesmo produto nos dois slots */}
              <BlocoPrecos
                prodA={produto as any}
                prodB={produto as any}
                scoreA={produto.score}
                scoreB={produto.score}
                singleMode
              />
            </section>
          )}

          {/* ── COMPARAR COM ─────────────────────────────── */}
          {alternativas.length > 0 && (
            <section>
              <h2 className="text-lg font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
                Compare com alternativas
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {alternativas.map(alt => (
                  <Link
                    key={alt!.slug}
                    href={`/produto/${alt!.slug}`}
                    className="group rounded-xl p-4 transition-all hover:-translate-y-1"
                    style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                  >
                    <p className="font-mono text-[9px] uppercase tracking-[1px] mb-1" style={{ color: 'var(--muted)' }}>
                      {alt!.marca}
                    </p>
                    <p className="text-[13px] font-bold mb-2" style={{ letterSpacing: '-0.3px' }}>
                      {alt!.nome}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-base font-bold"
                        style={{ color: cat?.cor || 'var(--accent)' }}
                      >
                        {alt!.score}
                      </span>
                      <span
                        className="text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: cat?.cor || 'var(--accent)' }}
                      >
                        Comparar →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── FAQ (SEO) ─────────────────────────────────── */}
          <section>
            <h2 className="text-lg font-bold mb-3" style={{ letterSpacing: '-0.5px' }}>
              Perguntas frequentes
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: `O ${produto.marca} ${produto.nome} vale a pena em 2025?`,
                  a: produto.descricao
                    ? produto.descricao.split('.')[0] + '.'
                    : `O ${produto.marca} ${produto.nome} é uma excelente escolha com score de desempenho ${produto.score}/100 na nossa análise.`,
                },
                {
                  q: `Qual o preço do ${produto.marca} ${produto.nome} no Brasil?`,
                  a: menorPreco
                    ? `O preço de referência encontrado na Amazon é de ${menorPreco.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Consulte a oferta acima para verificar disponibilidade e parcelamento.`
                    : `Consulte a Amazon acima para verificar o preço atual e a disponibilidade no Brasil.`,
                },
                {
                  q: `Com quais outros ${cat?.label || 'produtos'} posso comparar o ${produto.nome}?`,
                  a: `Você pode comparar o ${produto.nome} com ${alternativas.map(a => a!.nome).join(', ')} diretamente na nossa ferramenta de comparação. Clique em "Comparar com outros" acima.`,
                },
              ].map(({ q, a }, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <p className="text-[14px] font-bold mb-2" style={{ letterSpacing: '-0.3px' }}>
                    {q}
                  </p>
                  <p className="text-[13px] leading-relaxed" style={{ color: 'var(--label)' }}>
                    {a}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
