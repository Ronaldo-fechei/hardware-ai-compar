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
  "kingston-a400-240gb": "https://s.shopee.com.br/3g293Pm6sc",
  "kingston-nv3-500gb": "https://s.shopee.com.br/3qLZFilTXf",
  "kingston-fury-beast-8gb-ddr4-3200": "https://s.shopee.com.br/2g9brZpuuS",
  "xpg-gammix-d35-16gb-ddr4-3200": "https://s.shopee.com.br/2qT23spHZV",
  "lg-24ms500-b": "https://s.shopee.com.br/30mSGBoeEY",
  "logitech-k120": "https://s.shopee.com.br/70Ib1YmDPm",
  "redragon-kumara-k552": "https://s.shopee.com.br/7Ac1Drla4p",
};

export function linkShopee(slug: string): string | undefined {
  return SHOPEE_LINKS[slug];
}
