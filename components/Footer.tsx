import Link from 'next/link'

export function Footer() {
  const ano = new Date().getFullYear()
  return (
    <footer
      className="border-t px-8 py-5 flex items-center justify-between flex-wrap gap-3"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-bold" style={{ color: 'var(--text)' }}>BestHard</span>
        <span className="text-[12px]" style={{ color: 'var(--muted)' }}>© {ano} besthard.com.br</span>
      </div>
      <nav className="flex items-center gap-5">
        {[
          { label: 'Blog', href: '/blog' },
          { label: 'Privacidade', href: '/privacidade' },
          { label: 'Contato', href: 'mailto:contato@besthard.com.br' },
        ].map(({ label, href }) => (
          <Link key={href} href={href}
            className="text-[12px] transition-colors hover:text-[var(--text)]"
            style={{ color: 'var(--muted)' }}>
            {label}
          </Link>
        ))}
      </nav>
      <p className="text-[10px] w-full mt-1" style={{ color: 'var(--muted)', opacity: 0.6 }}>
        Como participante do Programa de Associados da Amazon, sou remunerado pelas compras qualificadas efetuadas.
        Alguns links do Mercado Livre também podem gerar comissão. Preços estão sujeitos a alteração pelas lojas.
      </p>
    </footer>
  )
}
