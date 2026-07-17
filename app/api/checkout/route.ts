import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getPreApproval, isMpConfigured } from "@/lib/mercadopago";
import { getSiteUrl } from "@/lib/supabase/config";
import { PLANS, type Plan } from "@/lib/plans";

export async function POST(req: Request) {
  // Pagamento configurado?
  if (!isMpConfigured()) {
    return NextResponse.json(
      { error: "Pagamento ainda não configurado neste site." },
      { status: 503 },
    );
  }

  // Precisa estar logado (para associar a assinatura à conta).
  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Login indisponível (configure o Supabase)." },
      { status: 503 },
    );
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Faça login primeiro." }, { status: 401 });
  }

  // Plano válido?
  const { plan } = (await req.json().catch(() => ({}))) as { plan?: Plan };
  if (plan !== "pro" && plan !== "premium") {
    return NextResponse.json({ error: "Plano inválido." }, { status: 400 });
  }
  const info = PLANS[plan];

  try {
    const pre = await getPreApproval().create({
      body: {
        reason: `BestHard — Plano ${info.nome}`,
        external_reference: `${user.id}:${plan}`,
        payer_email: user.email!,
        back_url: `${getSiteUrl()}/?assinatura=sucesso`,
        status: "pending",
        auto_recurring: {
          frequency: 1,
          frequency_type: "months",
          transaction_amount: info.preco,
          currency_id: "BRL",
        },
      },
    });

    const initPoint = pre.init_point || (pre as { sandbox_init_point?: string }).sandbox_init_point;
    if (!initPoint) throw new Error("Mercado Pago não retornou link de pagamento.");
    return NextResponse.json({ init_point: initPoint });
  } catch (err) {
    console.error("Erro ao criar assinatura no Mercado Pago:", err);
    return NextResponse.json(
      { error: "Não foi possível iniciar o pagamento. Tente novamente." },
      { status: 502 },
    );
  }
}
