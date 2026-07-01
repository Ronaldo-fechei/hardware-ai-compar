'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { CategoriaConfig, Produto } from '@/types/hardware'
import { ScoreCard } from './ScoreCard'
import { TabelaSpecs } from './TabelaSpecs'
import { BlocoPrecos } from './BlocoPrecos'

interface Props {
  categoria: CategoriaConfig
  produtos: Produto[]
  slugA: string
  slugB: string
}

export function ComparadorClient({ categoria, produtos, slugA, slugB }: Props) {
  const router = useRouter()
  const [selA, setSelA] = useState(slugA)
  const [selB, setSelB] = useState(slugB)
  const [subcatAtiva, setSubcatAtiva] = useState('Todos')

  const prodA = produtos.find((p) => p.slug === selA)
  const prodB = produtos.find((p) => p.slug === selB)
  const mesmoSelecionado = selA === selB

  function handleComparar() {
    router.push(`/comparar/${categoria.slug}?a=${selA}&b=${selB}`)
  }

  return (
    <div>
      {/* HEADER */}
      <div className="px-8 pb-5 pt-7">
        <nav className="mb-2 flex items-center gap-2 font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
          <a href="/" className="hover:text-[var(--label)] transition-colors">Home</a>
          <span style={{ opacity: 0.3 }}>/</span>
          <span style={{ color: 'var(--accent)' }}>{categoria.label}</span>
        </nav>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Comparar {categoria.label}
        </h1>
        <p className="mt-1 text-sm" style={{ color: 'var(--label)' }}>{categoria.subtitle}</p>
      </div>

      {/* SUBCATEGORY TABS */}
      <div className="flex gap-2 overflow-x-auto px-8 pb-5">
        {categoria.subcats.map((sub) => (
          <button
            key={sub}
            onClick={() => setSubcatAtiva(sub)}
            className="flex-shrink-0 rounded-full border px-4 py-[6px] text-[11px] font-semibold transition-all"
            style={{
              background: subcatAtiva === sub ? 'rgba(0,229,255,.1)' : 'var(--surface)',
              borderColor: subcatAtiva === sub ? 'var(--accent)' : 'var(--border)',
              color: subcatAtiva === sub ? 'var(--accent)' : 'var(--label)',
            }}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* SELETOR */}
      <div className="px-8">
        <div
          className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-xl border p-3"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <div className="flex flex-1 flex-col gap-1">
            <label className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
              Produto A
            </label>
            <select
              value={selA}
              onChange={(e) => setSelA(e.target.value)}
              className="bg-transparent text-[13px] font-semibold outline-none cursor-pointer"
              style={{ color: 'var(--text)' }}
            >
              {produtos.map((p) => (
                <option key={p.slug} value={p.slug} style={{ background: 'var(--surface2)' }}>
                  {p.marca} {p.nome}
                </option>
              ))}
            </select>
          </div>

          <span
            className="flex-shrink-0 rounded px-[10px] py-[3px] font-mono text-[10px]"
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--muted)' }}
          >
            VS
          </span>

          <div className="flex flex-1 flex-col gap-1">
            <label className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
              Produto B
            </label>
            <select
              value={selB}
              onChange={(e) => setSelB(e.target.value)}
              className="bg-transparent text-[13px] font-semibold outline-none cursor-pointer"
              style={{ color: 'var(--text)' }}
            >
              {produtos.map((p) => (
                <option key={p.slug} value={p.slug} style={{ background: 'var(--surface2)' }}>
                  {p.marca} {p.nome}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleComparar}
            className="flex-shrink-0 rounded-lg px-5 py-[11px] text-[12px] font-bold transition-all hover:-translate-y-px hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#0A0C10' }}
          >
            Comparar →
          </button>
        </div>
      </div>

      {/* RESULTADO */}
      <div className="px-8 pb-16">
        {mesmoSelecionado ? (
          <div className="py-16 text-center">
            <p className="text-4xl mb-3 opacity-30">⚠️</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Selecione dois produtos <strong style={{ color: 'var(--label)' }}>diferentes</strong>.
            </p>
          </div>
        ) : prodA && prodB ? (
          <>
            {/* SCORE CARDS */}
            <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <ScoreCard produto={prodA} isWinner={prodA.score >= prodB.score} />
              <div className="px-2 text-center font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                <strong className="block text-xl font-bold" style={{ color: 'var(--border)' }}>VS</strong>
                {categoria.label}
              </div>
              <ScoreCard produto={prodB} isWinner={prodB.score > prodA.score} />
            </div>

            {/* 🛒 BLOCO DE PREÇOS COM AFILIADOS (3 melhores) */}
            <BlocoPrecos
              prodA={prodA}
              prodB={prodB}
              scoreA={prodA.score}
              scoreB={prodB.score}
            />

            {/* TABELA DE SPECS */}
            <div className="mt-6">
              <TabelaSpecs prodA={prodA} prodB={prodB} menorMelhor={categoria.menorMelhor} />
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-4xl mb-3 opacity-30">⚡</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Selecione dois produtos acima e clique em{' '}
              <strong style={{ color: 'var(--label)' }}>Comparar</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
