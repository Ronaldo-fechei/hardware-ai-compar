import Link from 'next/link'

interface EditorialPageProps {
  eyebrow: string
  title: string
  description: string
  updatedAt: string
  children: React.ReactNode
}

export function EditorialPage({ eyebrow, title, description, updatedAt, children }: EditorialPageProps) {
  return (
    <div className="pb-16">
      <header className="border-b px-6 py-10 md:px-8" style={{ borderColor: 'var(--border)' }}>
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'var(--accent)' }}>
          {eyebrow}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl" style={{ letterSpacing: '-1.5px' }}>
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed" style={{ color: 'var(--label)' }}>
          {description}
        </p>
        <p className="mt-4 font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
          Última revisão editorial: {updatedAt}
        </p>
      </header>

      <div className="max-w-3xl space-y-9 px-6 py-9 text-[14px] leading-relaxed md:px-8" style={{ color: 'var(--label)' }}>
        {children}

        <nav className="flex flex-wrap gap-4 border-t pt-6" style={{ borderColor: 'var(--border)' }} aria-label="Páginas institucionais">
          <Link href="/sobre" className="font-semibold" style={{ color: 'var(--accent)' }}>Sobre</Link>
          <Link href="/metodologia" className="font-semibold" style={{ color: 'var(--accent)' }}>Metodologia</Link>
          <Link href="/transparencia" className="font-semibold" style={{ color: 'var(--accent)' }}>Transparência</Link>
          <Link href="/contato" className="font-semibold" style={{ color: 'var(--accent)' }}>Contato</Link>
          <Link href="/privacidade" className="font-semibold" style={{ color: 'var(--accent)' }}>Privacidade</Link>
        </nav>
      </div>
    </div>
  )
}

export function EditorialSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export function EditorialList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="flex items-start gap-3">
          <span aria-hidden="true" className="mt-[2px] font-bold" style={{ color: 'var(--accent)' }}>→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
