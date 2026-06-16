import { NextResponse } from "next/server";
import { generateComparison, hasApiKey } from "@/lib/claude";
import { mockComparison } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import type { CompareRequestBody } from "@/lib/types";

export const maxDuration = 60;

export async function POST(req: Request) {
  let body: CompareRequestBody;
  try {
    body = (await req.json()) as CompareRequestBody;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const query = (body.query || "").trim();
  if (!query) {
    return NextResponse.json(
      { error: "Digite o que você quer comparar." },
      { status: 400 },
    );
  }

  // Limite diário (plano grátis).
  const ctx = await resolveLimit();
  const bloqueio = await checkLimit(ctx);
  if (bloqueio) return bloqueio;

  // Gera a comparação (IA real ou modo demonstração).
  let result;
  if (!hasApiKey()) {
    result = mockComparison(query);
  } else {
    try {
      result = await generateComparison(query);
    } catch (err) {
      console.error("Erro na comparação por IA:", err);
      result = mockComparison(query);
      result.veredito =
        "[Não foi possível consultar a IA agora — exibindo dados simulados] " +
        result.veredito;
    }
  }

  const res = NextResponse.json(result);
  await consumeLimit(ctx, res);
  return res;
}
