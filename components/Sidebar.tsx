'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { CategoriaConfig } from '@/types/hardware'

interface Props { categorias: CategoriaConfig[] }

export function Sidebar({ categorias }: Props) {
  const pathname = usePathname()

  return (
    <aside
      className="sticky top-[52px] flex h-[calc(100vh-52px)] w-[220px] flex-shrink-0 flex-col overflow-y-auto border-r"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="p-3 pb-2">
        <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[2px]" style={{ color: 'var(--muted)' }}>
          Comparar Hardware
        </p>
        <nav className="flex flex-col gap-[2px]">
          {categorias.map((cat) => {
            const href = cat.disponivel ? `/comparar/${cat.slug}` : '#'
            const isActive = pathname === `/comparar/${cat.slug}`
            return (
              <Link key={cat.slug} href={href}
                className="group relative flex items-center gap-[10px] rounded-[9px] px-[10px] py-[9px] transition-colors"
                style={{ background: isActive ? 'var(--surface2)' : 'transparent', cursor: cat.disponivel ? 'pointer' : 'default' }}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-r"
                    style={{ background: cat.cor }} />
                )}
                <span className="w-5 text-center text-base">{cat.icon}</span>
                <span className="flex-1 truncate text-[12px] font-semibold"
                  style={{ color: isActive ? cat.cor : 'var(--text)' }}>
                  {cat.label}
                </span>
                <span className="flex-shrink-0 rounded px-[5px] py-[1px] font-mono text-[9px]"
                  style={{
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    color: cat.disponivel ? 'var(--accent)' : 'var(--muted)',
                  }}>
                  {cat.disponivel ? '4' : 'breve'}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mx-3 my-2 h-px" style={{ background: 'var(--border)' }} />

      <div className="p-3 pb-2">
        <p className="mb-2 px-1 font-mono text-[9px] uppercase tracking-[2px]" style={{ color: 'var(--muted)' }}>
          Blog
        </p>
        {[
          { icon: '🏆', label: 'Melhor CPU 2026',   href: '/blog/melhor-processador-para-jogos-2026' },
          { icon: '🛠️', label: 'Build R$ 3.000',     href: '/blog/monte-pc-gamer-r3000-2026' },
          { icon: '🖥️', label: 'Melhor Monitor',     href: '/blog/melhor-monitor-gamer-2026' },
          { icon: '💡', label: 'Build Xeon Barato',  href: '/blog/build-xeon-x99-custo-beneficio-2026' },
          { icon: '📖', label: 'Ver todos →',        href: '/blog' },
        ].map(({ icon, label, href }) => {
          const isActive = pathname === href
          return (
            <Link key={href} href={href}
              className="flex items-center gap-[10px] rounded-[9px] px-[10px] py-[8px] transition-colors hover:bg-[var(--surface2)]"
              style={{ background: isActive ? 'var(--surface2)' : 'transparent' }}
            >
              <span className="w-5 text-center text-sm">{icon}</span>
              <span className="text-[12px] font-semibold" style={{ color: isActive ? 'var(--accent)' : 'var(--label)' }}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>

      <div className="mt-auto p-3">
        <div className="rounded-[9px] p-3 text-[10px] leading-relaxed"
          style={{ background: 'rgba(0,229,255,.05)', border: '1px solid rgba(0,229,255,.15)', color: 'var(--label)' }}>
          <strong style={{ color: 'var(--accent)' }}>💡 Dica</strong><br />
          Clique em qualquer categoria para comparar dois produtos lado a lado.
        </div>
      </div>
    </aside>
  )
}
