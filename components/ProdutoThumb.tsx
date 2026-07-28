import { getCategoriaConfig } from '@/lib/hardware-data'
import type { Produto } from '@/types/hardware'

interface Props {
  produto: Pick<Produto, 'imagem' | 'categoria' | 'marca' | 'nome'>
  size?: number
  radius?: number
}

/**
 * Miniatura do produto: mostra a foto (campo `imagem`) quando existir,
 * senão usa o ícone da categoria como reserva. Aceita URLs de imagem de
 * afiliado (ex: SiteStripe da Amazon) via <img> simples.
 */
export function ProdutoThumb({ produto, size = 40, radius = 8 }: Props) {
  const cat = getCategoriaConfig(produto.categoria)
  return (
    <span
      className="flex flex-shrink-0 items-center justify-center overflow-hidden"
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        // Foto de produto sempre em fundo branco (padrão das lojas); ícone no fundo escuro.
        background: produto.imagem ? '#ffffff' : 'var(--surface2)',
        border: '1px solid var(--border)',
        padding: produto.imagem ? Math.round(size * 0.08) : 0,
      }}
    >
      {produto.imagem ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={produto.imagem}
          alt={`${produto.marca} ${produto.nome}`}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      ) : (
        <span style={{ fontSize: size * 0.45 }}>{cat?.icon ?? '🔧'}</span>
      )}
    </span>
  )
}
