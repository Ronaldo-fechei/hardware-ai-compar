import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getUserPlan, countUsageToday, recordUsage } from "@/lib/usage";
import { freeDailyLimit, todayBR, type Plan } from "@/lib/plans";
import { isAdminEmail } from "@/lib/admin";

const COOKIE = "hwai_usage";

export interface LimitContext {
  supabase: ReturnType<typeof createClient>;
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
  const supabase = createClient();
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
    const raw = cookies().get(COOKIE)?.value;
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

/** Retorna uma resposta 429 se o limite foi atingido, ou null se pode seguir. */
export async function checkLimit(
  ctx: LimitContext,
): Promise<NextResponse | null> {
  if (!ctx.ehGratis) return null;

  if (ctx.userId && ctx.supabase) {
    const usados = await countUsageToday(ctx.supabase, ctx.userId);
    if (usados >= ctx.limite) return limiteResposta(ctx);
  } else if (ctx.cookieCount >= ctx.limite) {
    return limiteResposta(ctx);
  }
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

function limiteResposta(ctx: LimitContext) {
  return NextResponse.json(
    {
      error: `Você atingiu o limite de ${ctx.limite} comparações por dia do plano grátis.`,
      limite: true,
      plano: ctx.plano,
    },
    { status: 429 },
  );
}
