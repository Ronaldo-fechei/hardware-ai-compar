import type { SupabaseClient } from "@supabase/supabase-js";
import { todayBR, PLANS } from "./plans";

/** E-mail é admin? Definido pela env ADMIN_EMAILS (separados por vírgula). */
export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const lista = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return lista.includes(email.toLowerCase());
}

export interface AdminStats {
  totalUsuarios: number;
  porPlano: { free: number; pro: number; premium: number };
  totalComparacoes: number;
  comparacoesHoje: number;
  usoHoje: number;
  receitaMensal: number;
  recentes: { titulo: string; created_at: string }[];
}

async function contar(
  admin: SupabaseClient,
  tabela: string,
  filtros?: (q: any) => any,
): Promise<number> {
  let q = admin.from(tabela).select("id", { count: "exact", head: true });
  if (filtros) q = filtros(q);
  const { count } = await q;
  return count ?? 0;
}

export async function getAdminStats(admin: SupabaseClient): Promise<AdminStats> {
  const inicioHoje = `${todayBR()}T00:00:00-03:00`;

  const [
    totalUsuarios,
    free,
    pro,
    premium,
    totalComparacoes,
    comparacoesHoje,
    usoHoje,
    recentesRes,
  ] = await Promise.all([
    contar(admin, "profiles"),
    contar(admin, "profiles", (q) => q.eq("plan", "free")),
    contar(admin, "profiles", (q) => q.eq("plan", "pro")),
    contar(admin, "profiles", (q) => q.eq("plan", "premium")),
    contar(admin, "comparisons"),
    contar(admin, "comparisons", (q) => q.gte("created_at", inicioHoje)),
    contar(admin, "usage_log", (q) => q.eq("usage_date", todayBR())),
    admin
      .from("comparisons")
      .select("titulo, created_at")
      .order("created_at", { ascending: false })
      .limit(8),
  ]);

  const receitaMensal = pro * PLANS.pro.preco + premium * PLANS.premium.preco;

  return {
    totalUsuarios,
    porPlano: { free, pro, premium },
    totalComparacoes,
    comparacoesHoje,
    usoHoje,
    receitaMensal,
    recentes: (recentesRes.data ?? []) as { titulo: string; created_at: string }[],
  };
}
