'use client'

import { useEffect, useState } from 'react'

interface Props {
  /** Data-alvo em ISO 8601, com fuso (ex.: 2026-11-19T00:00:00-03:00). */
  alvo: string
}

const UM_DIA_MS = 86_400_000

/**
 * Contador de dias até o lançamento.
 *
 * É um componente de cliente de propósito: o cálculo depende de "agora", e a
 * home pode ser servida em cache — se o número fosse calculado no servidor,
 * ficaria congelado no dia em que a página foi gerada. Antes da hidratação (e
 * para quem está sem JavaScript) mostra só a data, que nunca fica errada.
 */
export function Gta6Countdown({ alvo }: Props) {
  const [dias, setDias] = useState<number | null>(null)

  useEffect(() => {
    const calcular = () => Math.ceil((new Date(alvo).getTime() - Date.now()) / UM_DIA_MS)
    setDias(calcular())
    const id = setInterval(() => setDias(calcular()), 60 * 60 * 1000)
    return () => clearInterval(id)
  }, [alvo])

  let texto = '19 nov 2026'
  if (dias !== null) {
    if (dias > 1) texto = `Faltam ${dias} dias · 19 nov`
    else if (dias === 1) texto = 'Falta 1 dia · 19 nov'
    else texto = 'Já disponível nos consoles'
  }

  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-white/90 backdrop-blur-md">
      <span aria-hidden="true" className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38e7ff]" />
      <span suppressHydrationWarning>{texto}</span>
      <span className="hidden text-white/50 sm:inline">· PS5 e Xbox</span>
    </span>
  )
}
