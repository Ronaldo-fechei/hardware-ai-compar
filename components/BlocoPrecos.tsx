'use client'
import type { Produto, PrecoLoja } from '@/types/hardware'
import { linkAfiliado } from '@/lib/afiliados'

const LOJAS: Record<PrecoLoja['loja'], { nome: string; emoji: string; cor: string; bg: string }> = {
  amazon:       { nome: 'Amazon',        emoji: '📦', cor: '#FF9900', bg: 'rgba(255,153,0,0.08)' },
  kabum:        { nome: 'KaBuM!',        emoji: '🛒', cor: '#FF6500', bg: 'rgba(255,101,0,0.08)' },
  pichau:       { nome: 'Pichau',        emoji: '⚡', cor: '#00B4D8', bg: 'rgba(0,180,216,0.08)' },
  terabyte:     { nome: 'Terabyte',      emoji: '💻', cor: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
  mercadolivre: { nome: 'Mercado Livre', emoji: '🛍️', cor: '#FFE600', bg: 'rgba(255,230,0,0.08)' },
}

function formatBRL(v: number) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function trackAfiliado(slug: string, loja: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'click_afiliado', {
      produto_slug: slug, loja, event_category: 'monetizacao',
    })
  }
}

// ── Card individual de preços ───────────────────────────────────────────
function CardPreco({ produto, isWinner, fullWidth }: {
  produto: Produto; isWinner?: boolean; fullWidth?: boolean
}) {
  const disponiveis = (produto.precos || [])
    .filter(p => p.disponivel)
    .sort((a, b) => a.preco - b.preco)
  const indisponiveis = (produto.precos || []).filter(p => !p.disponivel)
  if (disponiveis.length === 0 && indisponiveis.length === 0) return null
  const menor = disponiveis[0]

  return (
    <div
      className={`rounded-xl border overflow-hidden ${fullWidth ? 'w-full' : 'flex-1 min-w-0'}`}
      style={{ background: 'var(--surface)', borderColor: isWinner ? 'var(--accent)' : 'var(--border)' }}
    >
      {/* Cabeçalho */}
      {!fullWidth && (
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ background: 'var(--surface2)', borderBottom: '1px solid var(--border)' }}
        >
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[1.5px] mb-[2px]" style={{ color: 'var(--label)' }}>
              {produto.marca}
            </p>
            <p className="text-[13px] font-bold truncate" style={{ letterSpacing: '-0.3px' }}>
              {produto.nome}
            </p>
          </div>
          {isWinner && (
            <span
              className="flex-shrink-0 ml-2 rounded px-2 py-[2px] font-mono text-[9px] font-bold uppercase"
              style={{ background: 'var(--accent)', color: '#0A0C10' }}
            >
              ✓ Vencedor
            </span>
          )}
        </div>
      )}

      {/* Melhor preço */}
      {menor && (
        <div className="px-4 py-3" style={{ borderBottom: '1px solid var(--border)' }}>
          <p className="font-mono text-[9px] uppercase tracking-[1px] mb-1" style={{ color: 'var(--muted)' }}>
            Melhor preço encontrado
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-2xl font-bold" style={{ color: 'var(--accent)', letterSpacing: '-1px' }}>
              {formatBRL(menor.preco)}
            </span>
            <span className="text-[11px]" style={{ color: 'var(--muted)' }}>à vista</span>
          </div>
          {menor.parcelamento && (
            <p className="text-[11px] mt-[2px]" style={{ color: 'var(--label)' }}>
              ou {menor.parcelamento} sem juros
            </p>
          )}
        </div>
      )}

      {/* Lista de lojas */}
      <div className="p-2 flex flex-col gap-[5px]">
        {disponiveis.map((item) => {
          const loja = LOJAS[item.loja]
          const isMenor = item.preco === menor?.preco
          return (
            <a
              key={item.loja}
              href={linkAfiliado(item.loja, item.url)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center gap-3 rounded-lg px-3 py-[9px] transition-all hover:-translate-y-px group"
              style={{
                background: isMenor ? loja.bg : 'transparent',
                border: `1px solid ${isMenor ? loja.cor + '40' : 'var(--border)'}`,
              }}
              onClick={() => trackAfiliado(produto.slug, item.loja)}
            >
              <span className="text-[15px] w-5 text-center flex-shrink-0">{loja.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-[6px] flex-wrap">
                  <span className="text-[12px] font-semibold" style={{ color: loja.cor }}>{loja.nome}</span>
                  {isMenor && (
                    <span className="rounded px-[5px] py-[1px] font-mono text-[8px] font-bold uppercase"
                      style={{ background: loja.cor + '20', color: loja.cor }}>menor preço</span>
                  )}
                  {item.frete === 'gratis' && (
                    <span className="rounded px-[5px] py-[1px] font-mono text-[8px]"
                      style={{ background: 'rgba(34,197,94,.15)', color: '#22C55E' }}>frete grátis</span>
                  )}
                  {item.frete === 'prime' && (
                    <span className="rounded px-[5px] py-[1px] font-mono text-[8px]"
                      style={{ background: 'rgba(255,153,0,.15)', color: '#FF9900' }}>✦ Prime</span>
                  )}
                </div>
                {item.parcelamento && (
                  <p className="text-[10px] mt-[1px]" style={{ color: 'var(--muted)' }}>{item.parcelamento}</p>
                )}
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="font-mono text-[13px] font-bold" style={{ color: isMenor ? loja.cor : 'var(--text)' }}>
                  {formatBRL(item.preco)}
                </span>
                <span
                  className="rounded-lg px-3 py-[5px] text-[10px] font-bold transition-opacity group-hover:opacity-85"
                  style={{ background: loja.cor, color: loja.cor === '#FFE600' ? '#0A0C10' : '#fff' }}
                >
                  Comprar →
                </span>
              </div>
            </a>
          )
        })}

        {/* Indisponíveis */}
        {indisponiveis.map(item => (
          <div key={item.loja}
            className="flex items-center gap-3 rounded-lg px-3 py-[9px] opacity-40"
            style={{ border: '1px solid var(--border)' }}
          >
            <span className="text-[15px] w-5 text-center">{LOJAS[item.loja].emoji}</span>
            <span className="text-[12px] flex-1" style={{ color: 'var(--muted)' }}>{LOJAS[item.loja].nome}</span>
            <span className="text-[11px]" style={{ color: 'var(--muted)' }}>Sem estoque</span>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="px-4 pb-3">
        <p className="text-[9px] leading-relaxed" style={{ color: 'var(--muted)', opacity: 0.6 }}>
          * Links de afiliado — ao comprar você apoia o BestHard sem custo extra para você.
          Preços verificados periodicamente e podem variar.
        </p>
      </div>
    </div>
  )
}

// ── Componente exportado ───────────────────────────────────────────────
interface Props {
  prodA: Produto
  prodB: Produto
  scoreA: number
  scoreB: number
  singleMode?: boolean   // modo página individual — exibe só um produto
}

export function BlocoPrecos({ prodA, prodB, scoreA, scoreB, singleMode }: Props) {
  const temPrecos = (prodA.precos?.length ?? 0) > 0 || (!singleMode && (prodB.precos?.length ?? 0) > 0)
  if (!temPrecos) return null

  return (
    <div className="mt-4">
      {/* Header */}
      {!singleMode && (
        <>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
            <div className="flex items-center gap-2">
              <span className="text-sm">🛒</span>
              <span className="font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'var(--accent)' }}>
                // onde comprar
              </span>
            </div>
            <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          </div>
          <p className="text-[12px] text-center mb-4" style={{ color: 'var(--muted)' }}>
            Compare os preços nas principais lojas e encontre a melhor oferta agora
          </p>
        </>
      )}

      {/* Cards */}
      {singleMode ? (
        <CardPreco produto={prodA} fullWidth />
      ) : (
        <div className="flex gap-4">
          <CardPreco produto={prodA} isWinner={scoreA >= scoreB} />
          <CardPreco produto={prodB} isWinner={scoreB > scoreA} />
        </div>
      )}

      {/* AdSense placeholder */}
      <div
        className="mt-4 rounded-xl flex items-center justify-center"
        style={{ height: '90px', background: 'var(--surface)', border: '1px dashed var(--border)' }}
      >
        <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
          [ Google AdSense — 728×90 ]
        </span>
      </div>
    </div>
  )
}
