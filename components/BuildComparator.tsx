"use client";

import { useState } from "react";
import Link from "next/link";
import type { BuildInput, BuildsResult } from "@/lib/types";
import BarCompare from "./BarCompare";

const VAZIA = (nome: string): BuildInput => ({
  nome,
  cpu: "",
  gpu: "",
  ram: "",
  armazenamento: "",
});

const COLORS = ["#00E5FF", "#7B2FFF"];

export default function BuildComparator() {
  const [buildA, setBuildA] = useState<BuildInput>(VAZIA("Build A"));
  const [buildB, setBuildB] = useState<BuildInput>(VAZIA("Build B"));
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [limite, setLimite] = useState(false);
  const [r, setR] = useState<BuildsResult | null>(null);

  async function comparar(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro(null);
    setLimite(false);
    try {
      const res = await fetch("/api/builds", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ buildA, buildB }),
      });
      const data = await res.json();
      if (res.status === 429 && data.limite) {
        setLimite(true);
        setErro(data.error);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Falha na comparação.");
      setR(data as BuildsResult);
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      <form onSubmit={comparar} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <BuildForm build={buildA} setBuild={setBuildA} cor={COLORS[0]} />
          <BuildForm build={buildB} setBuild={setBuildB} cor={COLORS[1]} />
        </div>
        <div className="flex justify-center">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Comparando…" : "Comparar builds com IA"}
          </button>
        </div>
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
          <p className="animate-pulse-slow">A IA está avaliando as duas montagens…</p>
        </div>
      )}

      {r && !loading && (
        <div className="mt-8 animate-fade-up space-y-5">
          {r.demo && (
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center text-sm text-amber-300">
              ⚠️ Modo demonstração (dados simulados). Configure a chave da Anthropic
              para análises reais.
            </div>
          )}

          <div className="text-center">
            <span className="text-sm text-gray-400">🏆 Vencedora: </span>
            <span className="text-xl font-bold gradient-text">{r.vencedor}</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {r.builds.map((b, i) => (
              <div
                key={i}
                className={`glass-card p-5 ${
                  b.nome === r.vencedor ? "ring-1 ring-brand-primary/50" : ""
                }`}
                style={{ boxShadow: `0 0 30px -16px ${COLORS[i % COLORS.length]}` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{b.nome}</h3>
                  <div
                    className="text-3xl font-black"
                    style={{ color: COLORS[i % COLORS.length] }}
                  >
                    {b.notaFinal}
                  </div>
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <Metric label="Preço" value={b.precoEstimado} />
                  <Metric label="FPS médio" value={b.fpsEstimado == null ? "—" : `${b.fpsEstimado}`} />
                  <Metric label="Consumo" value={b.consumoW == null ? "—" : `${b.consumoW} W`} />
                  <Metric label="Upgrade futuro" value={`${b.potencialUpgrade}%`} />
                </dl>
                <p className="mt-3 text-sm text-gray-400">{b.resumo}</p>
              </div>
            ))}
          </div>

          <div className="glass-card p-5">
            <h3 className="mb-4 font-semibold text-white">Comparativo</h3>
            <BarCompare
              criterios={r.criterios}
              nomes={r.builds.map((b) => b.nome)}
            />
          </div>

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

function BuildForm({
  build,
  setBuild,
  cor,
}: {
  build: BuildInput;
  setBuild: (b: BuildInput) => void;
  cor: string;
}) {
  const set = (campo: keyof BuildInput) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setBuild({ ...build, [campo]: e.target.value });

  return (
    <div className="glass-card p-5" style={{ boxShadow: `0 0 30px -18px ${cor}` }}>
      <input
        value={build.nome}
        onChange={set("nome")}
        className="mb-3 w-full bg-transparent text-lg font-bold text-white outline-none"
      />
      <div className="space-y-2.5">
        <Input label="Processador" value={build.cpu} onChange={set("cpu")} ph="Ex: Ryzen 5 7600" />
        <Input label="Placa de vídeo" value={build.gpu} onChange={set("gpu")} ph="Ex: RTX 4060" />
        <Input label="Memória RAM" value={build.ram} onChange={set("ram")} ph="Ex: 16GB DDR5 6000MHz" />
        <Input
          label="Armazenamento"
          value={build.armazenamento}
          onChange={set("armazenamento")}
          ph="Ex: SSD NVMe 1TB"
        />
      </div>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  ph,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ph: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs text-gray-500">{label}</span>
      <input
        value={value}
        onChange={onChange}
        placeholder={ph}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-primary/50"
      />
    </label>
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
