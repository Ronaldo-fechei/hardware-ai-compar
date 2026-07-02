// ============================================================
//  Links de afiliados — configuração centralizada.
//  As tags/IDs ficam em variáveis de ambiente (NEXT_PUBLIC_*),
//  então você ativa cada programa SEM mexer no código:
//  basta preencher a variável na Vercel e refazer o deploy.
//
//  - Amazon:  NEXT_PUBLIC_AMAZON_TAG  (ex: besthard-20)
//  - Awin (KaBuM/Pichau/Terabyte/Mercado Livre — programas via Awin):
//      NEXT_PUBLIC_AWIN_AFFID            (seu ID de publisher)
//      NEXT_PUBLIC_AWIN_MID_KABUM        (merchant ID da loja)
//      NEXT_PUBLIC_AWIN_MID_PICHAU
//      NEXT_PUBLIC_AWIN_MID_TERABYTE
//      NEXT_PUBLIC_AWIN_MID_MERCADOLIVRE
//
//  Sem nenhuma configuração, os links viram o endereço limpo da loja
//  (sem as tags de exemplo) — funcionam normal, só não geram comissão.
// ============================================================

import type { PrecoLoja } from "@/types/hardware";

const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "";
const AWIN_AFFID = process.env.NEXT_PUBLIC_AWIN_AFFID || "";

const AWIN_MID: Partial<Record<PrecoLoja["loja"], string | undefined>> = {
  kabum: process.env.NEXT_PUBLIC_AWIN_MID_KABUM,
  pichau: process.env.NEXT_PUBLIC_AWIN_MID_PICHAU,
  terabyte: process.env.NEXT_PUBLIC_AWIN_MID_TERABYTE,
  mercadolivre: process.env.NEXT_PUBLIC_AWIN_MID_MERCADOLIVRE,
};

// Parâmetros "placeholder" que vêm nos dados de exemplo — removidos quando
// não há um programa real configurado, deixando o link limpo.
const PARAMS_EXEMPLO = ["tag", "utm_source", "utm_medium", "ref", "aff"];

function ajustarParams(
  url: string,
  set?: { key: string; value: string },
): string {
  try {
    const u = new URL(url);
    for (const p of PARAMS_EXEMPLO) u.searchParams.delete(p);
    if (set && set.value) u.searchParams.set(set.key, set.value);
    return u.toString();
  } catch {
    return url;
  }
}

/** Converte a URL da loja no link de afiliado (se configurado). */
export function linkAfiliado(loja: PrecoLoja["loja"], url: string): string {
  // Amazon: basta a tag no parâmetro ?tag=
  if (loja === "amazon") {
    return ajustarParams(url, AMAZON_TAG ? { key: "tag", value: AMAZON_TAG } : undefined);
  }

  // Lojas via Awin: envolve o link de destino num "deep link" da Awin.
  const mid = AWIN_MID[loja];
  const destino = ajustarParams(url);
  if (AWIN_AFFID && mid) {
    return `https://www.awin1.com/cread.php?awinmid=${mid}&awinaffid=${AWIN_AFFID}&ued=${encodeURIComponent(destino)}`;
  }
  return destino;
}

/** Há pelo menos um programa de afiliado configurado? */
export function temAfiliados(): boolean {
  return Boolean(AMAZON_TAG || AWIN_AFFID);
}

/**
 * Lojas onde o BestHard é afiliado. Só essas aparecem nas caixas de preço.
 * (Amazon já ativa; KaBuM/Pichau/Terabyte aparecem e passam a gerar comissão
 * assim que os IDs da Awin forem preenchidos nas variáveis de ambiente.)
 */
export const LOJAS_AFILIADAS: PrecoLoja["loja"][] = [
  "amazon",
  "kabum",
  "pichau",
  "terabyte",
];

/** Verdadeiro se a loja é um parceiro afiliado (deve ser exibida nos preços). */
export function ehAfiliado(loja: PrecoLoja["loja"]): boolean {
  return LOJAS_AFILIADAS.includes(loja);
}

/**
 * Gera um link de BUSCA da Amazon já com a tag de afiliado, a partir do nome
 * do produto. A busca cai numa página filtrada mostrando o produto, e a
 * comissão fica isolada no seu link (a tag vai na URL). Funciona para todos os
 * produtos sem depender de scraping nem de ASIN fixo.
 */
export function buscaAmazon(termo: string): string {
  const base = `https://www.amazon.com.br/s?k=${encodeURIComponent(termo.trim())}`;
  return linkAfiliado("amazon", base);
}
