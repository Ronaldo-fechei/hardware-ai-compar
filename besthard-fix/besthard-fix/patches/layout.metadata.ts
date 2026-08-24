/**
 * PATCH — app/layout.tsx
 *
 * Adicione metadataBase ao export metadata do layout raiz. Sem isso, o
 * Next resolve URLs relativas de OG/canonical contra o host da request —
 * o que gera canonical em www quando alguém entra por www.
 */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://besthard.com.br'),

  title: {
    default: 'BestHard — comparador de hardware para PC',
    template: '%s | BestHard',
  },
  description:
    'Compare placas de vídeo, processadores, SSDs e periféricos com preço do mercado brasileiro e recomendação por orçamento.',

  alternates: { canonical: '/' },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}
