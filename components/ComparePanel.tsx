"use client";

import { useState } from "react";
import Link from "next/link";
import type { ComparisonResult } from "@/lib/types";
import { saveComparison } from "@/lib/history";
import RadarChart from "./RadarChart";
import BarCompare from "./BarCompare";

const EXEMPLOS = [
  "RTX 4060 vs RX 7700 XT",
  "Ryzen 7 7800X3D vs Core i7 14700K",
  "Samsung 990 Pro vs WD Black SN850X",
  "PS5 vs Xbox Series X",
];

const COLORS = ["#00E5FF", "#7B2FFF"];

export default function ComparePanel() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [limite, setLimite] = useState(false);
  const [result, setResult] = useState<ComparisonResult | null>(null);

  async function comparar(q: string) {
    const texto = q.trim();
    if (!texto) return;
    setLoading(true);
    setErro(null);
    setLimite(false);
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: texto }),
      });
      const data = await res.json();
      if (res.status === 429 && data.limite) {
        setLimite(true);
        setErro(data.error);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Falha na comparação.");
      setResult(data as ComparisonResult);
      // Salva no histórico (nuvem se logado, senão neste navegador).
      saveComparison(texto, data as ComparisonResult).catch(() => {});
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Barra de busca */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          comparar(query);
        }}
        className="glass-card flex flex-col gap-3 p-2 shadow-glow sm:flex-row sm:items-center sm:p-2"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Ex: "RTX 4060 vs RX 7700 XT"'
          className="w-full flex-1 bg-transparent px-4 py-3 text-lg text-white outline-none placeholder:text-gray-500"
        />
        <button type="submit" disabled={loading} className="btn-primary shrink-0">
          {loading ? "Analisando…" : "Comparar com IA"}
        </button>
      </form>

      {/* Exemplos rápidos */}
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {EXEMPLOS.map((ex) => (
          <button
            key={ex}
            onClick={() => {
              setQuery(ex);
              comparar(ex);
            }}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 transition hover:border-brand-primary/50 hover:text-white"
          >
            {ex}
          </button>
        ))}
      </div>

      {limite ? (
        <div className="mt-4 rounded-xl border border-brand-secondary/40 bg-brand-secondary/10 p-5 text-center">
          <p className="text-sm text-gray-100">{erro}</p>
          <p className="mt-1 text-xs text-gray-400">
            Faça upgrade para comparações ilimitadas — ou volte amanhã. 🚀
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/login" className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:border-brand-primary/50">
              Entrar
            </Link>
            <a href="#planos" className="btn-primary text-sm">
              Ver planos
            </a>
          </div>
        </div>
      ) : (
        erro && (
          <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center text-sm text-red-300">
            {erro}
          </p>
        )
      )}

      {loading && (
        <div className="mt-8 flex flex-col items-center gap-3 text-gray-400">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
          <p className="animate-pulse-slow">A IA está analisando os componentes…</p>
        </div>
      )}

      {result && !loading && (
        <div className="mt-8 animate-fade-up space-y-6">
          {result.demo && (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center text-sm text-amber-300">
              ⚠️ Modo demonstração (dados simulados). Configure a chave da
              Anthropic para análises reais.
            </div>
          )}

          <h2 className="text-center text-2xl font-bold gradient-text sm:text-3xl">
            {result.titulo}
          </h2>

          {/* Cards dos itens */}
          <div className="grid gap-4 sm:grid-cols-2">
            {result.itens.map((item, i) => (
              <div
                key={i}
                className="glass-card p-5"
                style={{ boxShadow: `0 0 30px -16px ${COLORS[i % COLORS.length]}` }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: COLORS[i % COLORS.length] }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  </div>
                  <div className="text-right">
                    <div
                      className="text-3xl font-black"
                      style={{ color: COLORS[i % COLORS.length] }}
                    >
                      {item.notaGeral}
                    </div>
                    <div className="text-[10px] uppercase text-gray-500">
                      nota geral
                    </div>
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Metric label="FPS médio" value={fmt(item.fpsEstimado)} />
                  <Metric label="Consumo" value={fmtW(item.consumoW)} />
                  <Metric label="Temperatura" value={fmtC(item.tempC)} />
                  <Metric label="Preço" value={item.precoFaixa} />
                </dl>
              </div>
            ))}
          </div>

          {/* Veredito da IA */}
          <div className="glass-card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand-primary">
              <span>🧠</span> Veredito da IA
            </h3>
            <p className="leading-relaxed text-gray-200">{result.veredito}</p>
          </div>

          {/* Gráficos */}
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="glass-card p-5">
              <h3 className="mb-4 font-semibold text-white">Comparativo visual</h3>
              <BarCompare
                criterios={result.criterios}
                nomes={result.itens.map((i) => i.name)}
              />
            </div>
            <div className="glass-card p-5">
              <h3 className="mb-4 font-semibold text-white">Radar de desempenho</h3>
              <RadarChart
                criterios={result.criterios}
                nomes={result.itens.map((i) => i.name)}
              />
            </div>
          </div>

          {/* Melhor para */}
          <div className="glass-card p-5">
            <h3 className="mb-4 font-semibold text-white">Melhor para cada uso</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              <BestFor emoji="🎮" label="Jogos" value={result.melhorPara.jogos} />
              <BestFor emoji="💼" label="Trabalho" value={result.melhorPara.trabalho} />
              <BestFor emoji="📹" label="Streaming" value={result.melhorPara.streaming} />
              <BestFor emoji="🤖" label="IA" value={result.melhorPara.ia} />
              <BestFor
                emoji="💰"
                label="Custo-benefício"
                value={result.melhorPara.customBeneficio}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-2">
      <dt className="text-[10px] uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="font-semibold text-white">{value}</dd>
    </div>
  );
}

function BestFor({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-xl">{emoji}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold text-brand-primary">{value}</div>
    </div>
  );
}

const fmt = (n: number | null) => (n == null ? "—" : `${n}`);
const fmtW = (n: number | null) => (n == null ? "—" : `${n} W`);
const fmtC = (n: number | null) => (n == null ? "—" : `${n} °C`);
