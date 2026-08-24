/**
 * PATCH — next.config.mjs (ou .js)
 *
 * Consolida o domínio em besthard.com.br (sem www), que é o que está
 * registrado no AdSense. Hoje o sitemap.xml aponta para www. e o site
 * responde nos dois — o Google pode estar vendo 918 URLs em vez de 459.
 *
 * Depois de aplicar: Vercel -> Settings -> Domains ->
 *   besthard.com.br  = Primary
 *   www.besthard.com.br = Redirect to besthard.com.br (308)
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.besthard.com.br' }],
        destination: 'https://besthard.com.br/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
