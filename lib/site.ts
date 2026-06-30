// URL base do site (para SEO: canonical, sitemap, robots, Open Graph).
// Usa a variável NEXT_PUBLIC_SITE_URL; cai para o endereço atual da Vercel.
// Quando o domínio besthard.com.br for ligado, basta atualizar a variável.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://hardware-ai-compar.vercel.app";
