import { NextResponse } from "next/server";
import { generateBuildAssistant, hasApiKey } from "@/lib/claude";
import { mockAssistant } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import type { AssistantRequestBody } from "@/lib/types";

export const maxDuration = 60;

export async function POST(req: Request) {
  let body: AssistantRequestBody;
  try {
    body = (await req.json()) as AssistantRequestBody;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const orcamento = Math.round(Number(body.orcamento) || 0);
  const uso = (body.uso || "").trim();
  const resolucao = (body.resolucao || "1080p").trim();

  if (orcamento < 500) {
    return NextResponse.json(
      { error: "Informe um orçamento de pelo menos R$ 500." },
      { status: 400 },
    );
  }
  if (!uso) {
    return NextResponse.json(
      { error: "Diga para que você vai usar o PC." },
      { status: 400 },
    );
  }

  const ctx = await resolveLimit();
  const bloqueio = await checkLimit(ctx);
  if (bloqueio) return bloqueio;

  let result;
  if (!hasApiKey()) {
    result = mockAssistant(orcamento, uso, resolucao);
  } else {
    try {
      result = await generateBuildAssistant(orcamento, uso, resolucao);
    } catch (err) {
      console.error("Erro no assistente de montagem:", err);
      result = mockAssistant(orcamento, uso, resolucao);
      result.veredito = "[IA indisponível — dados simulados] " + result.veredito;
    }
  }

  const res = NextResponse.json(result);
  await consumeLimit(ctx, res);
  return res;
}
