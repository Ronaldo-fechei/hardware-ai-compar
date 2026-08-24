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
    ];
  },
};

module.exports = nextConfig;
