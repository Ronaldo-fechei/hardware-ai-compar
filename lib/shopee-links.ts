/**
 * Links gerados na Central de Afiliados Shopee.
 * As correspondências foram validadas por item e usam o Sub-ID `besthardsite`.
 */
export const SHOPEE_LINKS: Readonly<Record<string, string>> = {
  "amd-ryzen-5-5600": "https://s.shopee.com.br/9pcmF3PUTB",
  "amd-radeon-rx-6600": "https://s.shopee.com.br/6VMKKXq7aZ",
  "corsair-rm750e-750w": "https://s.shopee.com.br/6ffkWqpUFc",
  "corsair-cx650-650w": "https://s.shopee.com.br/6pzAj9oquf",
  "deepcool-ak400": "https://s.shopee.com.br/70IavSoDZi",
};

export function linkShopee(slug: string): string | undefined {
  return SHOPEE_LINKS[slug];
}
