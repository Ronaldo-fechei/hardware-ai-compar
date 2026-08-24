import type { MetadataRoute } from "next";
import { CATEGORIAS } from "@/lib/hardware-data";
import { ARTIGOS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const revisaoEditorial = "2026-07-16T12:00:00-03:00";

  const estaticas: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: revisaoEditorial, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/catalogo`, lastModified: revisaoEditorial, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/montar`, lastModified: revisaoEditorial, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gargalo`, lastModified: revisaoEditorial, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/builds`, lastModified: revisaoEditorial, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: revisaoEditorial, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/sobre`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/metodologia`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/transparencia`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/contato`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/privacidade`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE_URL}/autores/ronaldo-bueno`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.6 },
  ];

  // Páginas de categoria (/comparar/{slug}) — hub que lista todos os
  // produtos daquela categoria com links reais para cada ficha.
  const categorias: MetadataRoute.Sitemap = CATEGORIAS.filter((c) => c.disponivel).map((c) => ({
    url: `${SITE_URL}/comparar/${c.slug}`,
    lastModified: revisaoEditorial,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // As fichas /produto/ NÃO entram mais no sitemap: são 230 páginas geradas a
  // partir do mesmo template, com pouco texto único e link de afiliado. Essa
  // proporção (230 template x 16 artigos) é o que o AdSense classificou como
  // "conteúdo de baixo valor". Elas continuam navegáveis e continuam recebendo
  // link interno — apenas saem do índice, via robots:{index:false} no
  // generateMetadata de app/produto/[slug]/page.tsx.

  const artigos: MetadataRoute.Sitemap = ARTIGOS.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.dataAtualizacao || a.dataPublicacao).toISOString(),
    changeFrequency: "monthly" as const,
    priority: a.destaque ? 0.8 : 0.65,
  }));

  return [...estaticas, ...categorias, ...artigos];
}
