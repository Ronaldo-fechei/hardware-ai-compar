import type { MetadataRoute } from "next";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";
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
    { url: `${SITE_URL}/autores/equipe-besthard`, lastModified: revisaoEditorial, changeFrequency: "yearly", priority: 0.5 },
  ];

  const produtos: MetadataRoute.Sitemap = PRODUTOS_ENRIQUECIDOS.map((p) => ({
    url: `${SITE_URL}/produto/${p.slug}`,
    lastModified: revisaoEditorial,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  const artigos: MetadataRoute.Sitemap = ARTIGOS.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(a.dataAtualizacao || a.dataPublicacao).toISOString(),
    changeFrequency: "monthly" as const,
    priority: a.destaque ? 0.8 : 0.65,
  }));

  return [...estaticas, ...artigos, ...produtos];
}
