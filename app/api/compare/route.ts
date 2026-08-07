import { NextResponse } from "next/server";
import { generateComparison, hasApiKey } from "@/lib/claude";
import { mockComparison } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import { chaveComparacao, lerCache, gravarCache } from "@/lib/ia-cache";
import type { CompareRequestBody, ComparisonResult } from "@/lib/types";

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

  const ctx = await resolveLimit();
  const bloqueio = await checkLimit(ctx);
  if (bloqueio) return bloqueio;

  // ── Cache: o custo de IA é por PAR de produtos, não por visita. ──
  const slug = chaveComparacao(query);
  const doCache = await lerCache<ComparisonResult>(slug);
  if (doCache) {
    const hit = NextResponse.json(doCache, { headers: { "X-Cache": "HIT" } });
    await consumeLimit(ctx, hit);
    return hit;
  }

  // Gera a comparação (IA real ou modo demonstração).
  let result;
  let ehSimulado = false;
  if (!hasApiKey()) {
    result = mockComparison(query);
    ehSimulado = true;
  } else {
    try {
      result = await generateComparison(query);
    } catch (err) {
      console.error("Erro na comparação por IA:", err);
      result = mockComparison(query);
      result.veredito =
        "[Não foi possível consultar a IA agora — exibindo dados simulados] " +
        result.veredito;
      ehSimulado = true;
    }
  }

  // Só entra no cache o que veio da IA de verdade. Gravar um resultado
  // simulado o congelaria para todos os visitantes seguintes.
  if (!ehSimulado) await gravarCache(slug, query, result.titulo, result);

  const res = NextResponse.json(result, {
    headers: { "X-Cache": ehSimulado ? "BYPASS" : "MISS" },
  });
  await consumeLimit(ctx, res);
  return res;
}
