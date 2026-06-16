// Definição dos planos. Os preços ficam no servidor (nunca confie no cliente).

export type Plan = "free" | "pro" | "premium";

export interface PlanInfo {
  id: Plan;
  nome: string;
  preco: number; // em reais/mês
}

export const PLANS: Record<Exclude<Plan, "free">, PlanInfo> = {
  pro: { id: "pro", nome: "Pro", preco: 19 },
  premium: { id: "premium", nome: "Premium", preco: 49 },
};

/** Limite de comparações por dia no plano grátis (configurável por env). */
export function freeDailyLimit(): number {
  const n = Number(process.env.FREE_DAILY_LIMIT);
  return Number.isFinite(n) && n > 0 ? n : 3;
}

/** Data de hoje no fuso de Brasília, no formato YYYY-MM-DD. */
export function todayBR(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
  }).format(new Date());
}
