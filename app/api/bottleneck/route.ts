import { NextResponse } from "next/server";
import { generateBottleneck, hasApiKey } from "@/lib/claude";
import { mockBottleneck } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import { chaveGargalo, lerCache, gravarCache } from "@/lib/ia-cache";
import type { BottleneckRequestBody, BottleneckResult } from "@/lib/types";

export const maxDuration = 60;

export async function POST(req: Request) {
  let body: BottleneckRequestBody;
  try {
    body = (await req.json()) as BottleneckRequestBody;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const cpu = (body.cpu || "").trim();
  const gpu = (body.gpu || "").trim();
  const resolucao = (body.resolucao || "1080p").trim();
  if (!cpu || !gpu) {
    return NextResponse.json(
      { error: "Informe o processador e a placa de vídeo." },
      { status: 400 },
    );
  }

  const ctx = await resolveLimit();
  const bloqueio = await checkLimit(ctx);
  if (bloqueio) return bloqueio;

  // ── Cache: custo por combinação CPU+GPU+resolução, não por visita. ──
  const slug = chaveGargalo(cpu, gpu, resolucao);
  const doCache = await lerCache<BottleneckResult>(slug);
  if (doCache) {
    const hit = NextResponse.json(doCache, { headers: { "X-Cache": "HIT" } });
    await consumeLimit(ctx, hit);
    return hit;
  }

  let result;
  let ehSimulado = false;
  if (!hasApiKey()) {
    result = mockBottleneck(cpu, gpu, resolucao);
    ehSimulado = true;
  } else {
    try {
      result = await generateBottleneck(cpu, gpu, resolucao);
    } catch (err) {
      console.error("Erro no simulador de gargalo:", err);
      result = mockBottleneck(cpu, gpu, resolucao);
      result.veredito = "[IA indisponível — dados simulados] " + result.veredito;
      ehSimulado = true;
    }
  }

  // Resultado simulado nunca entra no cache — congelaria dados falsos.
  if (!ehSimulado) {
    await gravarCache(
      slug,
      `${cpu} + ${gpu} @ ${resolucao}`,
      `${cpu} + ${gpu} · ${resolucao}`,
      result,
    );
  }

  const res = NextResponse.json(result, {
    headers: { "X-Cache": ehSimulado ? "BYPASS" : "MISS" },
  });
  await consumeLimit(ctx, res);
  return res;
}
