'use client'

import { useEffect, useRef, useState } from 'react'

type Loja = { nome: string; url: string; preco?: string }

/**
 * ETAPA 6 — botões de compra só depois de conteúdo útil.
 *
 * Regra do AdSense: a página tem que valer a visita mesmo se o leitor não
 * clicar em nada. Este componente não renderiza os botões enquanto o leitor
 * não passou por conteúdo real (por padrão, ~300 palavras acima dele).
 *
 * Uso:
 *   <BlocoCompra lojas={lojas} />   // coloque DEPOIS do texto, nunca antes
 *
 * E limite a 2 blocos por página. Se você tem 3+, o terceiro sai.
 */
export function BlocoCompra({
  lojas,
  titulo = 'Onde comprar',
}: {
  lojas: Loja[]
  titulo?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisivel(true),
      { rootMargin: '200px' },
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  if (!lojas.length) return null

  return (
    <div ref={ref} className="my-8 rounded-lg border border-zinc-800 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
        {titulo}
      </h3>
      <p className="mt-1 text-xs text-zinc-500">
        Preços mudam com frequência — confirme na loja antes de fechar.
      </p>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {visivel &&
          lojas.map((loja) => (
            <li key={loja.nome}>
              <a
                href={loja.url}
                target="_blank"
                rel="sponsored nofollow noopener"
                className="flex items-center justify-between rounded-md bg-zinc-800 px-4 py-3 text-sm font-medium transition hover:bg-zinc-700"
              >
                <span>{loja.nome}</span>
                {loja.preco && <span className="text-zinc-400">{loja.preco}</span>}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}
