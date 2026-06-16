import { NextResponse } from "next/server";
import { getPreApproval, isMpConfigured } from "@/lib/mercadopago";
import { createAdminClient } from "@/lib/supabase/admin";

// Mercado Pago notifica este endpoint quando uma assinatura muda de estado.
export async function POST(req: Request) {
  if (!isMpConfigured()) {
    return NextResponse.json({ received: true });
  }

  // O Mercado Pago manda o id ora no corpo, ora na query string.
  const url = new URL(req.url);
  let id = url.searchParams.get("id") || url.searchParams.get("data.id");
  let type = url.searchParams.get("type") || url.searchParams.get("topic");

  try {
    const body = (await req.json()) as {
      type?: string;
      action?: string;
      data?: { id?: string };
    };
    type = type || body.type || null;
    id = id || body.data?.id || null;
  } catch {
    /* sem corpo JSON — usa só a query */
  }

  // Só tratamos eventos de assinatura.
  if (!id || (type && !type.includes("preapproval"))) {
    return NextResponse.json({ received: true });
  }

  try {
    const pre = await getPreApproval().get({ id });
    const ref = pre.external_reference || "";
    const [userId, plan] = ref.split(":");
    const admin = createAdminClient();

    if (admin && userId && (plan === "pro" || plan === "premium")) {
      if (pre.status === "authorized") {
        // Válido por ~1 mês (com folga). Renovado a cada cobrança aprovada.
        const expira = new Date();
        expira.setDate(expira.getDate() + 33);
        await admin
          .from("profiles")
          .update({
            plan,
            plan_expires_at: expira.toISOString(),
            mp_preapproval_id: id,
            updated_at: new Date().toISOString(),
          })
          .eq("id", userId);
      } else if (pre.status === "cancelled" || pre.status === "paused") {
        await admin
          .from("profiles")
          .update({ plan: "free", updated_at: new Date().toISOString() })
          .eq("id", userId);
      }
    }
  } catch (err) {
    console.error("Erro no webhook do Mercado Pago:", err);
  }

  // Sempre 200 para o Mercado Pago não ficar reenviando.
  return NextResponse.json({ received: true });
}
