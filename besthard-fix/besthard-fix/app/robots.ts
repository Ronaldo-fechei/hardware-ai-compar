import type { MetadataRoute } from 'next'

/**
 * IMPORTANTE: nenhum Disallow em /produto/.
 *
 * Bloquear no robots.txt impediria o Googlebot de rastrear a página —
 * e sem rastrear, ele nunca lê a tag noindex. O resultado seria as 430
 * páginas continuarem indexadas indefinidamente, que é exatamente o
 * oposto do que precisamos.
 *
 * Rastrear + noindex = sai do índice. Bloquear = fica preso no índice.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/go/'],   // /go/ = redirect de afiliado
      },
    ],
    sitemap: 'https://besthard.com.br/sitemap.xml',
    host: 'https://besthard.com.br',
  }
}
