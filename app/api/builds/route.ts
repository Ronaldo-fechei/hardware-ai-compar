import { NextResponse } from "next/server";
import { generateBuildCompare, hasApiKey } from "@/lib/claude";
import { mockBuilds } from "@/lib/mock";
import { resolveLimit, checkLimit, consumeLimit } from "@/lib/limit";
import { chaveBuilds, lerCache, gravarCache } from "@/lib/ia-cache";
import type { BuildsRequestBody, BuildInput, BuildsResult } from "@/lib/types";

export const maxDuration = 60;

function limpaBuild(b: BuildInput | undefined, padrao: string): BuildInput {
  return {
    nome: (b?.nome || padrao).trim(),
    cpu: (b?.cpu || "").trim(),
    gpu: (b?.gpu || "").trim(),
    ram: (b?.ram || "").trim(),
    armazenamento: (b?.armazenamento || "").trim(),
  };
}

export async function POST(req: Request) {
  let body: BuildsRequestBody;
  try {
    body = (await req.json()) as BuildsRequestBody;
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const buildA = limpaBuild(body.buildA, "Build A");
  const buildB = limpaBuild(body.buildB, "Build B");

  const temConteudo = (b: BuildInput) => b.cpu || b.gpu || b.ram || b.armazenamento;
  if (!temConteudo(buildA) || !temConteudo(buildB)) {
    return NextResponse.json(
      { error: "Preencha pelo menos um componente em cada build." },
      { status: 400 },
    );
  }

  const ctx = await resolveLimit();
  const bloqueio = await checkLimit(ctx);
  if (bloqueio) return bloqueio;

  // ── Cache: as duas montagens sem ordem definida (A vs B === B vs A).
  //    O nome de cada build entra na chave, porque ele aparece no resultado.
  const slug = chaveBuilds(buildA, buildB);
  const doCache = await lerCache<BuildsResult>(slug);
  if (doCache) {
    const hit = NextResponse.json(doCache, { headers: { "X-Cache": "HIT" } });
    await consumeLimit(ctx, hit);
    return hit;
  }

  let result;
  let ehSimulado = false;
  if (!hasApiKey()) {
    result = mockBuilds(buildA, buildB);
    ehSimulado = true;
  } else {
    try {
      result = await generateBuildCompare(buildA, buildB);
    } catch (err) {
      console.error("Erro no comparador de builds:", err);
      result = mockBuilds(buildA, buildB);
      result.veredito = "[IA indisponível — dados simulados] " + result.veredito;
      ehSimulado = true;
    }
  }

  // Resultado simulado nunca entra no cache.
  if (!ehSimulado) {
    const rotulo = `${buildA.nome} vs ${buildB.nome}`;
    await gravarCache(slug, rotulo, rotulo, result);
  }

  const res = NextResponse.json(result, {
    headers: { "X-Cache": ehSimulado ? "BYPASS" : "MISS" },
  });
  await consumeLimit(ctx, res);
  return res;
}
