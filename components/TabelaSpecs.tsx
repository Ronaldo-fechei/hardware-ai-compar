'use client'
import type { Produto } from '@/types/hardware'

interface Props {
  prodA: Produto
  prodB: Produto
  menorMelhor: string[]
}

export function TabelaSpecs({ prodA, prodB, menorMelhor }: Props) {
  const keys = Object.keys(prodA.specs)

  return (
    <>
      <p className="mb-2 font-mono text-[9px] uppercase tracking-[2px]" style={{ color: 'var(--muted)' }}>
        // especificações técnicas
      </p>
      <div
        className="overflow-hidden rounded-xl border"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        {keys.map((key, i) => {
          const v1 = prodA.specs[key]
          const v2 = prodB.specs[key]
          const isNum = typeof v1 === 'number' && typeof v2 === 'number'
          const lowerBetter = menorMelhor.includes(key)

          let best1 = false, best2 = false, pct1 = 50, pct2 = 50
          if (isNum) {
            best1 = lowerBetter ? (v1 as number) < (v2 as number) : (v1 as number) > (v2 as number)
            best2 = !best1
            const max = Math.max(v1 as number, v2 as number)
            pct1 = Math.round(((v1 as number) / max) * 100)
            pct2 = Math.round(((v2 as number) / max) * 100)
          }

          return (
            <div
              key={key}
              className="grid transition-colors hover:bg-[var(--surface2)]"
              style={{
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < keys.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              {/* Valor A */}
              <div className="flex items-center justify-end p-3">
                {isNum ? (
                  <div className="flex w-full items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: best1 ? 'var(--accent)' : 'var(--muted)' }}>
                      {v1}
                    </span>
                    <div className="flex-1 h-[3px] rounded overflow-hidden" style={{ background: 'var(--border)' }}>
                      <div
                        className="h-full rounded transition-all duration-700"
                        style={{
                          width: `${pct1}%`,
                          background: best1 ? 'var(--accent)' : 'var(--muted)',
                          opacity: best1 ? 1 : 0.4,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold text-sm">{v1}</span>
                )}
              </div>

              {/* Label */}
              <div
                className="flex items-center justify-center p-3 text-center font-mono text-[10px] uppercase tracking-[0.5px]"
                style={{
                  color: 'var(--label)',
                  borderLeft: '1px solid var(--border)',
                  borderRight: '1px solid var(--border)',
                }}
              >
                {key}
              </div>

              {/* Valor B */}
              <div className="flex items-center justify-start p-3">
                {isNum ? (
                  <div className="flex w-full flex-row-reverse items-center gap-2">
                    <span className="font-semibold text-sm" style={{ color: best2 ? 'var(--accent)' : 'var(--muted)' }}>
                      {v2}
                    </span>
                    <div className="flex-1 h-[3px] rounded overflow-hidden" style={{ background: 'var(--border)' }}>
                      <div
                        className="h-full rounded transition-all duration-700"
                        style={{
                          width: `${pct2}%`,
                          background: best2 ? 'var(--accent)' : 'var(--muted)',
                          opacity: best2 ? 1 : 0.4,
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <span className="font-semibold text-sm">{v2}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
