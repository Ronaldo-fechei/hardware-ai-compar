"use client";

import { useState } from "react";
import Link from "next/link";
import type { AssistantResult } from "@/lib/types";

const USOS = ["Jogos", "Trabalho/Produtividade", "Streaming", "Edição de vídeo", "IA", "Uso geral"];
const RESOLUCOES = ["1080p", "1440p", "4K"];

export default function BuildAssistant() {
  const [orcamento, setOrcamento] = useState("5000");
  const [uso, setUso] = useState("Jogos");
  const [resolucao, setResolucao] = useState("1080p");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [limite, setLimite] = useState(false);
  const [r, setR] = useState<AssistantResult | null>(null);

  async function montar(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro(null);
    setLimite(false);
    try {
      const res = await fetch("/api/montar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orcamento: Number(orcamento), uso, resolucao }),
      });
      const data = await res.json();
      if (res.status === 429 && data.limite) {
        setLimite(true);
        setErro(data.error);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Falha ao montar.");
      setR(data as AssistantResult);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form onSubmit={montar} className="glass-card space-y-5 p-6">
        <label className="block">
          <span className="mb-1.5 block text-sm text-gray-400">
            Orçamento (R$)
          </span>
          <input
            type="number"
            min={500}
            step={100}
            value={orcamento}
            onChange={(e) => setOrcamento(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-lg text-white outline-none focus:border-brand-primary/50"
          />
        </label>

        <div>
          <span className="mb-2 block text-sm text-gray-400">Para que vai usar?</span>
          <div className="flex flex-wrap gap-2">
            {USOS.map((u) => (
              <button
                key={u}
                type="button"
                onClick={() => setUso(u)}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  uso === u
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-black"
                    : "border border-white/10 bg-white/5 text-gray-300"
                }`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-2 block text-sm text-gray-400">Resolução alvo</span>
          <div className="flex flex-wrap gap-2">
            {RESOLUCOES.map((res) => (
              <button
                key={res}
                type="button"
                onClick={() => setResolucao(res)}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  resolucao === res
                    ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-black"
                    : "border border-white/10 bg-white/5 text-gray-300"
                }`}
              >
                {res}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? "Montando…" : "Montar meu PC com IA"}
        </button>
      </form>

      {limite ? (
        <div className="mt-4 rounded-xl border border-brand-secondary/40 bg-brand-secondary/10 p-5 text-center">
          <p className="text-sm text-gray-100">{erro}</p>
          <p className="mt-1 text-xs text-gray-400">
            Faça upgrade para uso ilimitado — ou volte amanhã. 🚀
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link
              href="/login"
              className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:border-brand-primary/50"
            >
              Entrar
            </Link>
            <Link href="/#planos" className="btn-primary text-sm">
              Ver planos
            </Link>
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
          <p className="animate-pulse-slow">Selecionando as melhores peças para você…</p>
        </div>
      )}

      {r && !loading && (
        <div className="mt-8 animate-fade-up space-y-5">
          {r.demo && (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center text-sm text-amber-300">
              ⚠️ Modo demonstração (dados simulados). Configure a chave da Anthropic
              para montar com a IA.
            </div>
          )}

          {/* Cabeçalho com total */}
          <div className="glass-card flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <div className="text-sm text-gray-400">
                {r.uso} · {r.resolucao}
                {r.fpsEstimado != null && ` · ~${r.fpsEstimado} FPS`}
              </div>
              <div className="text-xs text-gray-500">
                Orçamento: R$ {r.orcamento.toLocaleString("pt-BR")}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black gradient-text">{r.precoTotal}</div>
              <div className="text-[10px] uppercase text-gray-500">total estimado</div>
            </div>
          </div>

          {/* Lista de componentes */}
          <div className="glass-card overflow-hidden">
            {r.componentes.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-white/5 p-4 last:border-0"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wide text-gray-500">
                    {c.categoria}
                  </div>
                  <div className="font-semibold text-white">{c.nome}</div>
                </div>
                <div className="font-semibold text-brand-primary">{c.preco}</div>
              </div>
            ))}
          </div>

          {/* Compatibilidade */}
          <div className="glass-card p-5">
            <h3 className="mb-2 font-semibold text-white">✅ Compatibilidade</h3>
            <p className="text-sm text-gray-300">{r.compatibilidade}</p>
          </div>

          {/* Upgrades futuros */}
          <div className="glass-card p-5">
            <h3 className="mb-3 font-semibold text-white">🔧 Upgrades futuros</h3>
            <ul className="space-y-2">
              {r.upgradesFuturos.map((u, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-primary">→</span> {u}
                </li>
              ))}
            </ul>
          </div>

          {/* Veredito */}
          <div className="glass-card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand-primary">
              🧠 Veredito da IA
            </h3>
            <p className="leading-relaxed text-gray-200">{r.veredito}</p>
          </div>
        </div>
      )}
    </div>
  );
}
