import type { SupabaseClient } from "@supabase/supabase-js";
import type { Plan } from "./plans";
import { todayBR } from "./plans";

/** Descobre o plano atual do usuário (free se não tiver perfil ou expirou). */
export async function getUserPlan(
  supabase: SupabaseClient,
  userId: string,
): Promise<Plan> {
  const { data } = await supabase
    .from("profiles")
    .select("plan, plan_expires_at")
    .eq("id", userId)
    .maybeSingle();

  if (!data) return "free";
  const plano = (data.plan as Plan) ?? "free";
  if (plano === "free") return "free";

  // Pagos: válido enquanto não expirar (ou sem data de expiração).
  const exp = data.plan_expires_at ? new Date(data.plan_expires_at) : null;
  if (exp && exp.getTime() < Date.now()) return "free";
  return plano;
}

/** Conta quantas comparações o usuário fez hoje (fuso de Brasília). */
export async function countUsageToday(
  supabase: SupabaseClient,
  userId: string,
): Promise<number> {
  const { count } = await supabase
    .from("usage_log")
    .select("id", { count: "exact", head: true })
    .eq("user_id", userId)
    .eq("usage_date", todayBR());
  return count ?? 0;
}

/** Registra uma comparação consumida hoje. */
export async function recordUsage(
  supabase: SupabaseClient,
  userId: string,
): Promise<void> {
  await supabase
    .from("usage_log")
    .insert({ user_id: userId, usage_date: todayBR() });
}
