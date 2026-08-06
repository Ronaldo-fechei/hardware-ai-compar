import { getProdutoBySlug, tipoProduto } from '@/lib/hardware-data'
import { ehAfiliado } from '@/lib/afiliados'
import { ProdutoThumb } from '@/components/ProdutoThumb'
import { BotoesLojas } from '@/components/BotoesLojas'
import { AvisoAfiliado } from '@/components/AvisoAfiliado'

// ⭐ Produtos em destaque no banner — custo-benefício / preços populares.
// Troque os slugs para mudar as ofertas.
const DESTAQUES = [
  'amd-ryzen-5-5600',
  'amd-radeon-rx-6600',
  'kingston-nv2-1tb',
  'corsair-vengeance-lpx-16gb-ddr4-3200',
]

function formatBRL(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function BannerDestaques() {
  const produtos = DESTAQUES.map(getProdutoBySlug).filter(Boolean) as NonNullable<
    ReturnType<typeof getProdutoBySlug>
  >[]
  if (produtos.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div
        className="rounded-2xl border p-5"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        {/* Cabeçalho */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🔥</span>
            <div>
              <h2 className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>
                Ofertas em destaque
              </h2>
              <p className="font-mono text-[9px] uppercase tracking-[1.5px]" style={{ color: 'var(--muted)' }}>
                selecionados pelo BestHard
              </p>
            </div>
          </div>
          <span
            className="rounded px-2 py-[3px] font-mono text-[9px] font-bold uppercase"
            style={{ background: 'rgba(0,229,255,.1)', color: 'var(--accent)' }}
          >
            Publi • afiliado
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((p) => {
            const menor = (p.precos || [])
              .filter((x) => x.disponivel && ehAfiliado(x.loja))
              .sort((a, b) => a.preco - b.preco)[0]
            const termo = `${p.marca} ${p.nome}`
            return (
              <div
                key={p.slug}
                className="flex flex-col rounded-xl border p-3"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <ProdutoThumb produto={p} size={40} radius={9} />
                  {p.tier && (
                    <span
                      className="rounded px-[6px] py-[2px] font-mono text-[8px] font-bold uppercase"
                      style={{ background: 'var(--surface2)', color: 'var(--label)' }}
                    >
                      {p.tier}
                    </span>
                  )}
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--accent)' }}>{tipoProduto(p.categoria)}</span> · {p.marca}
                </p>
                <p className="mb-2 line-clamp-2 text-[13px] font-bold leading-tight" style={{ color: 'var(--text)' }}>
                  {p.nome}
                </p>
                <div className="mt-auto">
                  <div className="mb-2 min-w-0">
                    {menor ? (
                      <>
                        <span className="font-mono text-[15px] font-bold" style={{ color: 'var(--accent)' }}>
                          {formatBRL(menor.preco)}
                        </span>
                        <span className="ml-1 text-[9px]" style={{ color: 'var(--muted)' }}>a partir de</span>
                      </>
                    ) : (
                      <span className="text-[11px]" style={{ color: 'var(--label)' }}>Ver preço nas lojas</span>
                    )}
                  </div>
                  <BotoesLojas termo={termo} />
                </div>
              </div>
            )
          })}
        </div>

        <AvisoAfiliado />
      </div>
    </section>
  )
}
