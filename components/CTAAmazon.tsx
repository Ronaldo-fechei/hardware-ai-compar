import { buscaAmazon } from '@/lib/afiliados'

interface Props {
  /** Termo de busca na Amazon (define o que aparece na loja). */
  termo?: string
  /** Título opcional acima do botão. */
  titulo?: string
  /** Texto de apoio opcional. */
  texto?: string
}

/**
 * Chamada para ação da Amazon com o link de afiliado (busca com a tag).
 * Usada em pontos de tráfego (fim de artigos, etc.) para gerar cliques.
 */
export function CTAAmazon({
  termo = 'hardware para PC gamer',
  titulo = 'Ofertas de hardware na Amazon',
  texto = 'Confira preços atuais e novidades direto na loja.',
}: Props) {
  const link = buscaAmazon(termo)
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-4 rounded-xl border px-5 py-4"
      style={{ background: 'rgba(255,153,0,0.06)', borderColor: 'rgba(255,153,0,0.25)' }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-2xl flex-shrink-0">📦</span>
        <div className="min-w-0">
          <p className="font-mono text-[8px] font-bold uppercase tracking-[1px]" style={{ color: '#FF9900' }}>Publicidade</p>
          <p className="text-[14px] font-bold" style={{ color: 'var(--text)' }}>{titulo}</p>
          <p className="text-[11px]" style={{ color: 'var(--muted)' }}>{texto}</p>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="flex-shrink-0 rounded-lg px-5 py-[10px] text-[12px] font-bold transition-opacity hover:opacity-85"
        style={{ background: '#FF9900', color: '#fff' }}
      >
        Ver ofertas na Amazon →
      </a>
    </div>
  )
}
