import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/content'   // ajuste o import ao seu projeto

const BASE = 'https://besthard.com.br'

/**
 * Sitemap enxuto: só entra o que tem conteúdo editorial real.
 *
 * As ~430 páginas /produto/ saem daqui e recebem robots:{index:false}
 * no generateMetadata delas. Elas continuam navegáveis pelo usuário —
 * apenas deixam de ser candidatas a índice.
 *
 * Antes: 459 URLs (3,7% com conteúdo original)
 * Depois: ~45 URLs (100% com conteúdo original)
 */

const PAGINAS_ESTATICAS = [
  { path: '', priority: 1.0 },
  { path: '/blog', priority: 0.9 },
  { path: '/catalogo', priority: 0.7 },
  { path: '/montar', priority: 0.8 },
  { path: '/gargalo', priority: 0.8 },
  { path: '/builds', priority: 0.8 },
  { path: '/sobre', priority: 0.6 },
  { path: '/metodologia', priority: 0.7 },
  { path: '/transparencia', priority: 0.6 },
  { path: '/autores', priority: 0.6 },
  { path: '/contato', priority: 0.4 },
  { path: '/privacidade', priority: 0.4 },
] as const

export const CATEGORIAS_COMPARADOR = [
  'processadores', 'gpus', 'monitores', 'memorias', 'ssds', 'coolers',
  'fontes', 'gabinetes', 'mouses', 'teclados', 'headsets',
] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const agora = new Date()

  return [
    ...PAGINAS_ESTATICAS.map(({ path, priority }) => ({
      url: `${BASE}${path}`,
      lastModified: agora,
      changeFrequency: 'weekly' as const,
      priority,
    })),

    ...CATEGORIAS_COMPARADOR.map((categoria) => ({
      url: `${BASE}/comparar/${categoria}`,
      lastModified: agora,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),

    ...posts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.atualizadoEm ?? post.publicadoEm),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  ]
}
