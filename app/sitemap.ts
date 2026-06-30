import type { MetadataRoute } from "next";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";
import { ARTIGOS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date().toISOString();

  const estaticas: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: agora, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/catalogo`, lastModified: agora, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/montar`, lastModified: agora, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/gargalo`, lastModified: agora, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/builds`, lastModified: agora, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: agora, changeFrequency: "daily", priority: 0.9 },
  ];

  const produtos: MetadataRoute.Sitemap = PRODUTOS_ENRIQUECIDOS.map((p) => ({
    url: `${SITE_URL}/produto/${p.slug}`,
    lastModified: agora,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const artigos: MetadataRoute.Sitemap = ARTIGOS.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.dataAtualizacao || a.dataPublicacao).toISOString(),
    changeFrequency: "monthly" as const,
    priority: a.destaque ? 0.8 : 0.65,
  }));

  return [...estaticas, ...artigos, ...produtos];
}
