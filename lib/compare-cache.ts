// ============================================================
//  Cache de comparações — o custo de IA passa a ser por PAR de
//  produtos, não por visita. A primeira pessoa que compara
//  "RTX 4060 vs RX 7700 XT" paga a chamada; todas as seguintes
//  (em qualquer ordem, com ou sem acento) leem do banco.
// ============================================================

import { createAdminClient } from "@/lib/supabase/admin";
import type { ComparisonResult } from "@/lib/types";

/** Minúsculas, sem acento, não-alfanumérico vira hífen. */
const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Chave canônica do par. Ordenar alfabeticamente é o que faz
 * "A vs B" e "B vs A" caírem na mesma linha do cache.
 */
export const canonicalSlug = (a: string, b: string) =>
  [norm(a), norm(b)].sort().join("-vs-");

// Separadores aceitos entre os dois lados da comparação.
const SEPARADOR = /\s+(?:vs\.?|versus|contra|×|x)\s+/i;

/**
 * Deriva a chave a partir do texto digitado. Quando não dá para
 * identificar os dois lados, usa o texto inteiro normalizado —
 * o cache ainda pega repetições idênticas, só não unifica a ordem.
 */
export function chaveDaBusca(query: string): string {
  const partes = query
    .split(SEPARADOR)
    .map((p) => p.trim())
    .filter(Boolean);
  if (partes.length === 2) return canonicalSlug(partes[0], partes[1]);
  return norm(query);
}

/** Por quanto tempo uma comparação continua válida. */
const DIAS_VALIDADE = Number(process.env.CACHE_DIAS) || 30;

/** Busca no cache. Retorna null se não existe, expirou ou o banco não responde. */
export async function lerCache(slug: string): Promise<ComparisonResult | null> {
  const db = createAdminClient();
  if (!db) return null;

  const validoDesde = new Date(
    Date.now() - DIAS_VALIDADE * 24 * 60 * 60 * 1000,
  ).toISOString();

  try {
    const { data, error } = await db
      .from("comparison_cache")
      .select("result")
      .eq("slug", slug)
      .gte("updated_at", validoDesde)
      .maybeSingle();

    if (error || !data) return null;

    // Conta o acerto para dar visibilidade da economia (best-effort).
    db.rpc("bump_cache_hit", { p_slug: slug }).then(
      () => {},
      () => {},
    );

    return data.result as ComparisonResult;
  } catch {
    return null;
  }
}

/** Grava (ou atualiza) uma comparação no cache. Nunca lança. */
export async function gravarCache(
  slug: string,
  query: string,
  result: ComparisonResult,
): Promise<void> {
  const db = createAdminClient();
  if (!db) return;

  try {
    await db.from("comparison_cache").upsert(
      {
        slug,
        query,
        titulo: result.titulo,
        result,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "slug" },
    );
  } catch {
    // Falha de cache nunca pode quebrar a resposta ao usuário.
  }
}
