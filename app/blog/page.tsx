import Link from 'next/link'
import type { Metadata } from 'next'
import { getArtigos, getArtigosDestaque } from '@/lib/blog-data'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog — Guias, Comparativos e Builds | BestHard',
  description: 'Guias completos de hardware, comparativos de processadores, GPUs e monitores, e builds de PC gamer para todos os orçamentos.',
  alternates: { canonical: `${SITE_URL}/blog` },
}

const CAT_COR: Record<string, string> = {
  guias: '#00E5FF',
  comparativos: '#A78BFA',
  builds: '#34D399',
  noticias: '#FB923C',
}
const CAT_LABEL: Record<string, string> = {
  guias: 'Guia',
  comparativos: 'Comparativo',
  builds: 'Build',
  noticias: 'Notícia',
}

function formatData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function BlogPage() {
  const artigos = getArtigos()
  const destaques = getArtigosDestaque().slice(0, 2)
  const demais = artigos.filter(a => !destaques.find(d => d.slug === a.slug))

  return (
    <div className="pb-16">

      {/* HERO */}
      <div className="px-8 pt-8 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
        <p className="font-mono text-[10px] uppercase tracking-[2px] mb-2" style={{ color: 'var(--accent)' }}>
          // blog besthard
        </p>
        <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ letterSpacing: '-1.5px' }}>
          Guias, comparativos e builds
        </h1>
        <p className="text-sm" style={{ color: 'var(--label)' }}>
          Conteúdo técnico para você montar o setup ideal e não desperdiçar dinheiro.
        </p>
      </div>

      {/* DESTAQUES */}
      <div className="px-8 pt-6 pb-2">
        <p className="font-mono text-[9px] uppercase tracking-[2px] mb-4" style={{ color: 'var(--muted)' }}>
          // em destaque
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {destaques.map(a => {
            const cor = CAT_COR[a.categoria] || 'var(--accent)'
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group relative overflow-hidden rounded-xl border p-6 transition-all hover:-translate-y-1"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                {/* Barra colorida topo */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: cor }} />

                {/* Badge categoria */}
                <span
                  className="inline-block mb-3 rounded px-2 py-[2px] font-mono text-[9px] font-bold uppercase"
                  style={{ background: cor + '18', color: cor, border: `1px solid ${cor}40` }}
                >
                  {CAT_LABEL[a.categoria]}
                </span>

                <h2 className="text-[17px] font-bold mb-2 leading-snug" style={{ letterSpacing: '-0.5px' }}>
                  {a.titulo}
                </h2>
                <p className="text-[12px] mb-4 leading-relaxed" style={{ color: 'var(--label)' }}>
                  {a.subtitulo}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                      {formatData(a.dataPublicacao)}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                      · {a.tempoLeitura} min
                    </span>
                  </div>
                  <span
                    className="text-[12px] font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: cor }}
                  >
                    Ler artigo →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* DEMAIS ARTIGOS */}
        <p className="font-mono text-[9px] uppercase tracking-[2px] mb-4" style={{ color: 'var(--muted)' }}>
          // todos os artigos
        </p>
        <div className="space-y-3">
          {demais.map(a => {
            const cor = CAT_COR[a.categoria] || 'var(--accent)'
            return (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex items-center gap-5 rounded-xl border px-5 py-4 transition-all hover:-translate-y-px"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <div
                  className="w-1 self-stretch rounded-full flex-shrink-0"
                  style={{ background: cor }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="rounded px-[6px] py-[1px] font-mono text-[8px] font-bold uppercase"
                      style={{ background: cor + '18', color: cor }}
                    >
                      {CAT_LABEL[a.categoria]}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
                      {formatData(a.dataPublicacao)} · {a.tempoLeitura} min
                    </span>
                  </div>
                  <p className="text-[14px] font-bold" style={{ letterSpacing: '-0.3px' }}>{a.titulo}</p>
                  <p className="text-[12px] mt-[2px]" style={{ color: 'var(--label)' }}>{a.subtitulo}</p>
                </div>
                <span
                  className="text-[12px] font-bold flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cor }}
                >
                  Ler →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
