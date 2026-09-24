/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // A autoria deixou de ser uma "equipe" genérica e passou a ser uma
      // pessoa. 301 para não perder os links que já apontam para a URL antiga
      // e para não deixar uma página órfã no índice.
      {
        source: '/autores/equipe-besthard',
        destination: '/autores/ronaldo-bueno',
        permanent: true,
      },
      // A política completa mora em /privacidade desde o início e é essa URL
      // que está no sitemap e nos links internos. /politica-de-privacidade é o
      // endereço que plataformas externas (Pinterest, AdSense) esperam, então
      // ele responde aqui em vez de duplicar o mesmo texto em duas URLs.
      {
        source: '/politica-de-privacidade',
        destination: '/privacidade',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
