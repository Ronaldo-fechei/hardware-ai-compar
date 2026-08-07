// ============================================================
//  Cache das ferramentas de IA — o custo passa a ser por
//  COMBINAÇÃO pedida, não por visita. A primeira pessoa paga a
//  chamada; as seguintes leem do banco.
//
//  Cada ferramenta usa um prefixo próprio na chave, para que
//  nunca haja colisão entre elas.
// ============================================================

import { createAdminClient } from "@/lib/supabase/admin";

/** Minúsculas, sem acento, não-alfanumérico vira hífen. */
export const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/**
 * Chave canônica de um PAR sem ordem definida (A vs B === B vs A).
 * Ordenar alfabeticamente é o que faz as duas formas caírem na mesma linha.
 */
export const canonicalSlug = (a: string, b: string) =>
  [norm(a), norm(b)].sort().join("-vs-");

// ── Chaves por ferramenta ───────────────────────────────────

// Separadores aceitos entre os dois lados de uma comparação escrita.
const SEPARADOR = /\s+(?:vs\.?|versus|contra|×|x)\s+/i;

/**
 * Comparador: deriva a chave do texto livre digitado. Sem separador
 * reconhecível, usa o texto inteiro normalizado.
 */
export function chaveComparacao(query: string): string {
  const partes = query
    .split(SEPARADOR)
    .map((p) => p.trim())
    .filter(Boolean);
  const base =
    partes.length === 2 ? canonicalSlug(partes[0], partes[1]) : norm(query);
  return `comparar:${base}`;
}

/**
 * Gargalo: CPU e GPU são papéis DIFERENTES, então aqui não se ordena —
 * "CPU x GPU" não é a mesma pergunta que "GPU x CPU".
 */
export function chaveGargalo(cpu: string, gpu: string, resolucao: string) {
  return `gargalo:${norm(cpu)}--${norm(gpu)}--${norm(resolucao)}`;
}

/** Arredonda o orçamento para BAIXO na centena — nunca sugere acima do bolso. */
export function arredondaOrcamento(v: number) {
  return Math.max(500, Math.floor(v / 100) * 100);
}

/** Montagem: orçamento (em centenas) + uso + resolução. */
export function chaveMontagem(orcamento: number, uso: string, resolucao: string) {
  return `montar:${arredondaOrcamento(orcamento)}--${norm(uso)}--${norm(resolucao)}`;
}

/** Assinatura de uma build, incluindo o nome (que aparece no resultado). */
const assinaturaBuild = (b: {
  nome: string;
  cpu: string;
  gpu: string;
  ram: string;
  armazenamento: string;
}) => [b.nome, b.cpu, b.gpu, b.ram, b.armazenamento].map(norm).join("_");

/** Comparação de builds: duas montagens, sem ordem definida. */
export function chaveBuilds(
  a: Parameters<typeof assinaturaBuild>[0],
  b: Parameters<typeof assinaturaBuild>[0],
) {
  return `builds:${[assinaturaBuild(a), assinaturaBuild(b)].sort().join("-vs-")}`;
}

// ── Leitura e escrita ───────────────────────────────────────

/** Por quanto tempo um resultado continua válido. */
const DIAS_VALIDADE = Number(process.env.CACHE_DIAS) || 30;

/** Busca no cache. Retorna null se não existe, expirou ou o banco não responde. */
export async function lerCache<T>(slug: string): Promise<T | null> {
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

    return data.result as T;
  } catch {
    return null;
  }
}

/** Grava (ou atualiza) um resultado no cache. Nunca lança. */
export async function gravarCache(
  slug: string,
  query: string,
  titulo: string,
  result: unknown,
): Promise<void> {
  const db = createAdminClient();
  if (!db) return;

  try {
    await db.from("comparison_cache").upsert(
      {
        slug,
        query,
        titulo,
        result,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "slug" },
    );
  } catch {
    // Falha de cache nunca pode quebrar a resposta ao usuário.
  }
}
