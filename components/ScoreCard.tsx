import type { Produto } from '@/types/hardware'

interface Props {
  produto: Produto
  isWinner: boolean
}

export function ScoreCard({ produto, isWinner }: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-xl border p-5 text-center transition-all"
      style={{
        background: 'var(--surface)',
        borderColor: isWinner ? 'var(--accent)' : 'var(--border)',
        opacity: isWinner ? 1 : 0.72,
      }}
    >
      {/* barra topo vencedor */}
      {isWinner && (
        <div className="absolute left-0 right-0 top-0 h-[3px]" style={{ background: 'var(--accent)' }} />
      )}

      {/* badge vencedor */}
      {isWinner && (
        <span
          className="absolute right-3 top-3 rounded px-2 py-[2px] font-mono text-[9px] font-bold uppercase"
          style={{ background: 'var(--accent)', color: '#0A0C10' }}
        >
          ✓ Vencedor
        </span>
      )}

      <p className="mb-[6px] font-mono text-[9px] uppercase tracking-[1.5px]" style={{ color: 'var(--label)' }}>
        {produto.marca}
      </p>
      <p className="mb-4 text-base font-bold" style={{ letterSpacing: '-0.3px' }}>
        {produto.nome}
      </p>
      <p
        className="font-mono text-[42px] font-bold leading-none"
        style={{ color: isWinner ? 'var(--accent)' : 'var(--muted)' }}
      >
        {produto.score}
      </p>
      <p className="mt-[5px] font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
        Score de Performance
      </p>
    </div>
  )
}
