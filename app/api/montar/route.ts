import { NextResponse } from "next/server";
import { generateBuildAssistant, hasApiKey } from "@/lib/claude";
import { mockAssistant } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import {
  chaveMontagem,
  arredondaOrcamento,
  lerCache,
  gravarCache,
} from "@/lib/ia-cache";
import type { AssistantRequestBody, AssistantResult } from "@/lib/types";

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

  // Orçamento arredondado para BAIXO na centena: aumenta muito o reaproveitamento
  // do cache e garante que a montagem nunca passe do bolso de quem pediu.
  // Usamos o mesmo valor na IA e na chave, então o que aparece na tela confere.
  const orcamentoUsado = arredondaOrcamento(orcamento);

  // ── Cache: custo por combinação orçamento+uso+resolução. ──
  const slug = chaveMontagem(orcamentoUsado, uso, resolucao);
  const doCache = await lerCache<AssistantResult>(slug);
  if (doCache) {
    const hit = NextResponse.json(doCache, { headers: { "X-Cache": "HIT" } });
    await consumeLimit(ctx, hit);
    return hit;
  }

  let result;
  let ehSimulado = false;
  if (!hasApiKey()) {
    result = mockAssistant(orcamentoUsado, uso, resolucao);
    ehSimulado = true;
  } else {
    try {
      result = await generateBuildAssistant(orcamentoUsado, uso, resolucao);
    } catch (err) {
      console.error("Erro no assistente de montagem:", err);
      result = mockAssistant(orcamentoUsado, uso, resolucao);
      result.veredito = "[IA indisponível — dados simulados] " + result.veredito;
      ehSimulado = true;
    }
  }

  // Resultado simulado nunca entra no cache.
  if (!ehSimulado) {
    await gravarCache(
      slug,
      `R$ ${orcamentoUsado} · ${uso} · ${resolucao}`,
      `Montagem R$ ${orcamentoUsado} · ${uso} · ${resolucao}`,
      result,
    );
  }

  const res = NextResponse.json(result, {
    headers: { "X-Cache": ehSimulado ? "BYPASS" : "MISS" },
  });
  await consumeLimit(ctx, res);
  return res;
}
