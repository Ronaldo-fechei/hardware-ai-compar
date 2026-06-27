"use client";

import { useState } from "react";
import Link from "next/link";
import type { ComparisonResult } from "@/lib/types";
import { saveComparison } from "@/lib/history";
import ComparisonResultView from "./ComparisonResultView";

const EXEMPLOS = [
  "RTX 4060 vs RX 7700 XT",
  "Ryzen 7 7800X3D vs Core i7 14700K",
  "Samsung 990 Pro vs WD Black SN850X",
  "PS5 vs Xbox Series X",
];

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

      {/* Atalho para o catálogo */}
      <div className="mt-3 text-center">
        <Link
          href="/catalogo"
          className="text-sm text-gray-400 transition hover:text-brand-primary"
        >
          Prefere escolher de uma lista? Use o <span className="text-brand-primary">catálogo de produtos →</span>
        </Link>
      </div>

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
        <div className="mt-8">
          <ComparisonResultView result={result} />
        </div>
      )}
    </div>
  );
}
