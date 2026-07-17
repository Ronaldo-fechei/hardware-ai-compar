import { getProdutoBySlug, getCategoriaConfig, tipoProduto } from '@/lib/hardware-data'
import { ehAfiliado, buscaAmazon } from '@/lib/afiliados'

// ⭐ Produtos em destaque no banner — troque os slugs para mudar as ofertas.
const DESTAQUES = [
  'amd-ryzen-7-7800x3d',
  'nvidia-geforce-rtx-4080-super',
  'crucial-t705-2tb',
  'corsair-rm850e-850w',
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
            const cat = getCategoriaConfig(p.categoria)
            const menor = (p.precos || [])
              .filter((x) => x.disponivel && ehAfiliado(x.loja))
              .sort((a, b) => a.preco - b.preco)[0]
            const link = buscaAmazon(`${p.marca} ${p.nome}`)
            return (
              <a
                key={p.slug}
                href={link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="group flex flex-col rounded-xl border p-3 transition-all hover:-translate-y-[2px]"
                style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-lg"
                    style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
                  >
                    {cat?.icon ?? '🔧'}
                  </span>
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
                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    {menor ? (
                      <>
                        <span className="font-mono text-[15px] font-bold" style={{ color: 'var(--accent)' }}>
                          {formatBRL(menor.preco)}
                        </span>
                        <p className="text-[9px]" style={{ color: 'var(--muted)' }}>referência; confirme na loja</p>
                      </>
                    ) : (
                      <span className="text-[11px]" style={{ color: 'var(--label)' }}>Ver preço</span>
                    )}
                  </div>
                  <span
                    className="flex-shrink-0 rounded-lg px-3 py-[6px] text-[10px] font-bold transition-opacity group-hover:opacity-85"
                    style={{ background: 'var(--accent)', color: '#0A0C10' }}
                  >
                    Comprar →
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
