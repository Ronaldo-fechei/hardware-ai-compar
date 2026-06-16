"use client";

import { createClient } from "@/lib/supabase/client";
import type { ComparisonResult, StoredComparison } from "./types";

const LS_KEY = "hwai_historico";
const LS_LIMIT = 50;

// ---------- localStorage (fallback / modo demo) ----------

function lsRead(): StoredComparison[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LS_KEY);
    return raw ? (JSON.parse(raw) as StoredComparison[]) : [];
  } catch {
    return [];
  }
}

function lsWrite(items: StoredComparison[]) {
  try {
    window.localStorage.setItem(LS_KEY, JSON.stringify(items.slice(0, LS_LIMIT)));
  } catch {
    /* armazenamento cheio ou indisponível — ignora */
  }
}

// ---------- API pública ----------

/** Salva uma comparação. Usa a nuvem se o usuário estiver logado. */
export async function saveComparison(
  query: string,
  result: ComparisonResult,
): Promise<void> {
  const supabase = createClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      await supabase.from("comparisons").insert({
        user_id: user.id,
        query,
        titulo: result.titulo,
        result,
      });
      return;
    }
  }

  // Sem login → salva neste navegador.
  const entry: StoredComparison = {
    id: crypto.randomUUID(),
    query,
    titulo: result.titulo,
    result,
    created_at: new Date().toISOString(),
    cloud: false,
  };
  lsWrite([entry, ...lsRead().filter((e) => e.query !== query)]);
}

/** Lista o histórico (nuvem se logado, senão navegador). */
export async function listComparisons(): Promise<StoredComparison[]> {
  const supabase = createClient();
  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase
        .from("comparisons")
        .select("id, query, titulo, result, created_at")
        .order("created_at", { ascending: false })
        .limit(LS_LIMIT);
      return (data ?? []).map((r) => ({ ...r, cloud: true })) as StoredComparison[];
    }
  }
  return lsRead();
}

/** Remove uma comparação do histórico. */
export async function deleteComparison(item: StoredComparison): Promise<void> {
  if (item.cloud) {
    const supabase = createClient();
    if (supabase) await supabase.from("comparisons").delete().eq("id", item.id);
    return;
  }
  lsWrite(lsRead().filter((e) => e.id !== item.id));
}
