import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserPlan, recordUsage } from "@/lib/usage";
import { freeDailyLimit, todayBR, type Plan } from "@/lib/plans";
import { isAdminEmail } from "@/lib/admin";

const COOKIE = "hwai_usage";

export interface LimitContext {
  supabase: Awaited<ReturnType<typeof createClient>>;
  userId: string | null;
  plano: Plan;
  ehGratis: boolean;
  cookieCount: number;
  hoje: string;
  limite: number;
}

/** Descobre usuário, plano e uso atual antes de gerar qualquer coisa. */
export async function resolveLimit(): Promise<LimitContext> {
  const limite = freeDailyLimit();
  const hoje = todayBR();
  const supabase = await createClient();
  let userId: string | null = null;
  let plano: Plan = "free";
  let isAdmin = false;

  if (supabase) {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      userId = user.id;
      plano = await getUserPlan(supabase, user.id);
      // Administradores têm uso ilimitado (para testes e suporte).
      isAdmin = isAdminEmail(user.email);
    }
  }

  let cookieCount = 0;
  if (!userId) {
    const raw = (await cookies()).get(COOKIE)?.value;
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as { date: string; count: number };
        if (parsed.date === hoje) cookieCount = parsed.count;
      } catch {
        /* cookie inválido */
      }
    }
  }

  return {
    supabase,
    userId,
    plano,
    ehGratis: plano === "free" && !isAdmin,
    cookieCount,
    hoje,
    limite,
  };
}

/**
 * O BestHard é gratuito e sem limite de uso — o site se mantém com comissões
 * de afiliado, não com assinatura. Esta função nunca bloqueia; o registro de
 * uso segue ativo em `consumeLimit` apenas para estatísticas internas.
 */
export async function checkLimit(
  _ctx: LimitContext,
): Promise<NextResponse | null> {
  return null;
}

/** Registra o consumo após uma geração bem-sucedida. */
export async function consumeLimit(
  ctx: LimitContext,
  res: NextResponse,
): Promise<void> {
  if (!ctx.ehGratis) return;

  if (ctx.userId && ctx.supabase) {
    await recordUsage(ctx.supabase, ctx.userId);
  } else {
    res.cookies.set(
      COOKIE,
      JSON.stringify({ date: ctx.hoje, count: ctx.cookieCount + 1 }),
      { httpOnly: true, sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 2 },
    );
  }
}

