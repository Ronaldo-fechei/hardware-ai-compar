"use client";

import { useState } from "react";
import Link from "next/link";
import type { BottleneckResult } from "@/lib/types";

const RESOLUCOES = ["1080p", "1440p", "4K"];

function corGargalo(p: number): string {
  if (p < 10) return "#22c55e"; // verde
  if (p < 25) return "#eab308"; // amarelo
  return "#ef4444"; // vermelho
}

export default function BottleneckSimulator() {
  const [cpu, setCpu] = useState("");
  const [gpu, setGpu] = useState("");
  const [resolucao, setResolucao] = useState("1080p");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [limite, setLimite] = useState(false);
  const [r, setR] = useState<BottleneckResult | null>(null);

  async function simular(e: React.FormEvent) {
    e.preventDefault();
    if (!cpu.trim() || !gpu.trim()) return;
    setLoading(true);
    setErro(null);
    setLimite(false);
    try {
      const res = await fetch("/api/bottleneck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cpu, gpu, resolucao }),
      });
      const data = await res.json();
      if (res.status === 429 && data.limite) {
        setLimite(true);
        setErro(data.error);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Falha na simulação.");
      setR(data as BottleneckResult);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form onSubmit={simular} className="glass-card space-y-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <Campo label="Processador (CPU)">
            <input
              value={cpu}
              onChange={(e) => setCpu(e.target.value)}
              placeholder="Ex: Ryzen 5 5600"
              className="campo"
            />
          </Campo>
          <Campo label="Placa de vídeo (GPU)">
            <input
              value={gpu}
              onChange={(e) => setGpu(e.target.value)}
              placeholder="Ex: RTX 4070"
              className="campo"
            />
          </Campo>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm text-gray-400">Resolução:</span>
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
          <button type="submit" disabled={loading} className="btn-primary ml-auto">
            {loading ? "Calculando…" : "Calcular gargalo"}
          </button>
        </div>
      </form>

      <style jsx global>{`
        .campo {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.625rem 1rem;
          color: white;
          outline: none;
        }
        .campo:focus {
          border-color: rgba(0, 229, 255, 0.5);
        }
      `}</style>

      {limite ? (
        <LimiteCTA msg={erro} />
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
          <p className="animate-pulse-slow">Analisando o equilíbrio do conjunto…</p>
        </div>
      )}

      {r && !loading && (
        <div className="mt-8 animate-fade-up space-y-5">
          {r.demo && <DemoAviso />}

          {/* Gargalo principal */}
          <div className="glass-card p-6 text-center">
            <div className="text-sm uppercase tracking-wide text-gray-400">
              Gargalo estimado
            </div>
            <div
              className="my-2 text-6xl font-black"
              style={{ color: corGargalo(r.gargaloPercent) }}
            >
              {r.gargaloPercent}%
            </div>
            <div className="text-sm text-gray-300">
              Componente limitante:{" "}
              <span className="font-bold text-white">{r.componenteLimitante}</span>
            </div>
            <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${r.gargaloPercent}%`,
                  background: corGargalo(r.gargaloPercent),
                }}
              />
            </div>
            <div className="mt-1 text-xs text-gray-500">
              {r.cpu} + {r.gpu} · {r.resolucao}
            </div>
          </div>

          {/* Jogos x Produtividade */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Cenario titulo="🎮 Em jogos" dado={r.emJogos} />
            <Cenario titulo="💼 Em produtividade" dado={r.emProdutividade} />
          </div>

          {/* Veredito */}
          <div className="glass-card p-5">
            <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand-primary">
              🧠 Veredito
            </h3>
            <p className="leading-relaxed text-gray-200">{r.veredito}</p>
          </div>

          {/* Recomendações */}
          <div className="glass-card p-5">
            <h3 className="mb-3 font-semibold text-white">Recomendações</h3>
            <ul className="space-y-2">
              {r.recomendacoes.map((rec, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-brand-primary">→</span> {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function Campo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-gray-400">{label}</span>
      {children}
    </label>
  );
}

function Cenario({
  titulo,
  dado,
}: {
  titulo: string;
  dado: { percent: number; descricao: string };
}) {
  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-white">{titulo}</h3>
        <span className="text-lg font-bold" style={{ color: corGargalo(dado.percent) }}>
          {dado.percent}%
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full"
          style={{ width: `${dado.percent}%`, background: corGargalo(dado.percent) }}
        />
      </div>
      <p className="mt-3 text-sm text-gray-400">{dado.descricao}</p>
    </div>
  );
}

function DemoAviso() {
  return (
    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center text-sm text-amber-300">
      ⚠️ Modo demonstração (dados simulados). Configure a chave da Anthropic para
      análises reais.
    </div>
  );
}

function LimiteCTA({ msg }: { msg: string | null }) {
  return (
    <div className="mt-4 rounded-xl border border-brand-secondary/40 bg-brand-secondary/10 p-5 text-center">
      <p className="text-sm text-gray-100">{msg}</p>
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
  );
}
