import { buscaAmazon, buscaMercadoLivre, buscaShopee } from '@/lib/afiliados'

const LOJAS = [
  { nome: 'Amazon', cor: '#FF9900', texto: '#fff', link: buscaAmazon },
  { nome: 'Mercado Livre', cor: '#FFE600', texto: '#2D3277', link: buscaMercadoLivre },
  { nome: 'Shopee', cor: '#EE4D2D', texto: '#fff', link: buscaShopee },
]

/**
 * Três botões de compra (Amazon, Mercado Livre, Shopee), cada um com link de
 * afiliado (busca com a tag/id de cada loja). `termo` é o que será buscado.
 */
export function BotoesLojas({ termo, tamanho = 'sm' }: { termo: string; tamanho?: 'sm' | 'md' }) {
  const pad = tamanho === 'md' ? 'px-3 py-[7px] text-[11px]' : 'px-2.5 py-[5px] text-[10px]'
  return (
    <div className="flex flex-wrap gap-1.5">
      {LOJAS.map((l) => (
        <a
          key={l.nome}
          href={l.link(termo)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`rounded-md font-bold transition-opacity hover:opacity-85 ${pad}`}
          style={{ background: l.cor, color: l.texto }}
        >
          {l.nome}
        </a>
      ))}
    </div>
  )
}
