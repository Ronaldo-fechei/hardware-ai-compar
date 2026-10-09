'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'besthard-theme'

type Tema = 'dark' | 'light'

function temaAtual(): Tema {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

/**
 * Botão de tema claro/escuro.
 *
 * O tema fica em `<html data-theme="...">` e a preferência em localStorage.
 * Quem aplica o tema ANTES da primeira pintura (para a página não piscar) é o
 * script inline do app/layout.tsx; este componente só alterna e persiste.
 *
 * O ícone é escolhido por CSS (globals.css, `.theme-toggle`), não por estado,
 * para não haver diferença entre servidor e cliente na hidratação. O estado
 * abaixo serve apenas para o texto de acessibilidade do botão.
 */
export function ThemeToggle() {
  const [tema, setTema] = useState<Tema | null>(null)

  useEffect(() => {
    setTema(temaAtual())

    // Mantém várias abas abertas em sincronia.
    const aoMudarEmOutraAba = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      const novo: Tema = e.newValue === 'light' ? 'light' : 'dark'
      document.documentElement.dataset.theme = novo
      setTema(novo)
    }
    window.addEventListener('storage', aoMudarEmOutraAba)
    return () => window.removeEventListener('storage', aoMudarEmOutraAba)
  }, [])

  function alternar() {
    const novo: Tema = temaAtual() === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = novo
    setTema(novo)
    try {
      window.localStorage.setItem(STORAGE_KEY, novo)
    } catch {
      // Navegador com armazenamento bloqueado: o tema vale só nesta visita.
    }
  }

  const rotulo =
    tema === 'light' ? 'Ativar tema escuro' : tema === 'dark' ? 'Ativar tema claro' : 'Alternar tema'

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={rotulo}
      title={rotulo}
      className="theme-toggle flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border transition-colors hover:bg-[var(--surface2)]"
      style={{ borderColor: 'var(--border)', color: 'var(--label)' }}
    >
      {/* Sol: aparece no tema escuro (clicar leva ao claro) */}
      <svg className="ti-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* Lua: aparece no tema claro (clicar leva ao escuro) */}
      <svg className="ti-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  )
}
