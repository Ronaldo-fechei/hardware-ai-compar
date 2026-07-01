'use client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function Header({ children }: { children?: React.ReactNode }) {
  const router = useRouter()

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = (e.currentTarget.elements.namedItem('q') as HTMLInputElement).value.toLowerCase()
    const mapa: Record<string, string> = {
      ryzen: 'processadores', intel: 'processadores', i5: 'processadores',
      i7: 'processadores', i9: 'processadores', xeon: 'processadores',
      rtx: 'gpus', rx: 'gpus', 'placa de video': 'gpus',
      monitor: 'monitores', oled: 'monitores', ips: 'monitores',
      ram: 'memorias', ddr: 'memorias',
      ssd: 'ssds', nvme: 'ssds',
    }
    for (const [key, cat] of Object.entries(mapa)) {
      if (q.includes(key)) { router.push(`/comparar/${cat}`); return }
    }
    router.push('/')
  }

  return (
    <header
      className="sticky top-0 z-50 flex h-[52px] items-center justify-between border-b px-5 gap-4"
      style={{ background: 'rgba(10,12,16,.95)', borderColor: 'var(--border)', backdropFilter: 'blur(12px)' }}
    >
      <Link href="/" className="flex items-center gap-2 text-[17px] font-bold flex-shrink-0" style={{ letterSpacing: '-0.5px' }}>
        <span className="h-[7px] w-[7px] rounded-full" style={{ background: 'var(--accent)', animation: 'pulse 2s infinite' }} />
        Best<span style={{ color: 'var(--accent)' }}>Hard</span>
      </Link>

      <form onSubmit={handleSearch}
        className="flex flex-1 max-w-[380px] overflow-hidden rounded-lg border"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <input
          name="q"
          type="text"
          placeholder="Buscar hardware... ex: RTX 4070, Ryzen 7..."
          className="flex-1 bg-transparent px-3 py-2 text-xs outline-none"
          style={{ color: 'var(--text)' }}
        />
        <button type="submit" className="px-3 text-sm transition-colors" style={{ color: 'var(--muted)' }}>
          ⌕
        </button>
      </form>

      <nav className="flex items-center gap-1 flex-shrink-0">
        <Link href="/blog"
          className="px-3 py-[6px] rounded-lg text-[12px] font-semibold transition-colors hover:bg-[var(--surface2)]"
          style={{ color: 'var(--label)' }}>
          Blog
        </Link>
        <Link href="/comparar/processadores"
          className="px-3 py-[6px] rounded-lg text-[12px] font-semibold transition-colors"
          style={{ background: 'rgba(0,229,255,.1)', color: 'var(--accent)' }}>
          Comparar →
        </Link>
        {/* Botão de login/conta (preservado do projeto atual) */}
        {children}
      </nav>
    </header>
  )
}
