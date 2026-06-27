"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CATALOG, type CatalogItem } from "@/lib/catalog";
import type { ComparisonResult } from "@/lib/types";
import { saveComparison } from "@/lib/history";
import ComparisonResultView from "./ComparisonResultView";

const COLORS = ["#00E5FF", "#7B2FFF"];

interface Selecionado {
  name: string;
  specs: string[];
  icon: string;
}

export default function CatalogCompare() {
  const [slotA, setSlotA] = useState<Selecionado | null>(null);
  const [slotB, setSlotB] = useState<Selecionado | null>(null);
  const [picker, setPicker] = useState<"A" | "B" | null>(null);
  const [catId, setCatId] = useState(CATALOG[0].id);
  const [busca, setBusca] = useState("");

  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [limite, setLimite] = useState(false);
  const [result, setResult] = useState<ComparisonResult | null>(null);

  const cat = CATALOG.find((c) => c.id === catId) ?? CATALOG[0];
  const itens = useMemo(
    () =>
      cat.items.filter((i) =>
        i.name.toLowerCase().includes(busca.trim().toLowerCase()),
      ),
    [cat, busca],
  );

  function escolher(item: CatalogItem) {
    const sel: Selecionado = { name: item.name, specs: item.specs, icon: cat.icon };
    if (picker === "A") setSlotA(sel);
    else if (picker === "B") setSlotB(sel);
    setPicker(null);
  }

  async function comparar() {
    if (!slotA || !slotB) return;
    const query = `${slotA.name} vs ${slotB.name}`;
    setLoading(true);
    setErro(null);
    setLimite(false);
    setResult(null);
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      if (res.status === 429 && data.limite) {
        setLimite(true);
        setErro(data.error);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Falha na comparação.");
      setResult(data as ComparisonResult);
      saveComparison(query, data as ComparisonResult).catch(() => {});
    } catch (e) {
      setErro(e instanceof Error ? e.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Slots A e B */}
      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <Slot
          rotulo="Produto A"
          cor={COLORS[0]}
          sel={slotA}
          onPick={() => setPicker("A")}
        />
        <div className="text-center text-2xl font-black text-gray-500">VS</div>
        <Slot
          rotulo="Produto B"
          cor={COLORS[1]}
          sel={slotB}
          onPick={() => setPicker("B")}
        />
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={comparar}
          disabled={!slotA || !slotB || loading}
          className="btn-primary"
        >
          {loading ? "Comparando…" : "Comparar com IA"}
        </button>
      </div>

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
          <p className="animate-pulse-slow">A IA está comparando os produtos…</p>
        </div>
      )}

      {result && !loading && (
        <div className="mt-8">
          <ComparisonResultView result={result} />
        </div>
      )}

      {/* Modal de seleção */}
      {picker && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setPicker(null)}
        >
          <div
            className="glass-card flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden p-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabeçalho */}
            <div className="flex items-center justify-between border-b border-white/10 p-4">
              <h3 className="font-semibold text-white">
                Escolher {picker === "A" ? "Produto A" : "Produto B"}
              </h3>
              <button
                onClick={() => setPicker(null)}
                className="rounded-lg px-2 text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Categorias */}
            <div className="flex gap-2 overflow-x-auto border-b border-white/10 p-3">
              {CATALOG.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setCatId(c.id);
                    setBusca("");
                  }}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-sm transition ${
                    c.id === catId
                      ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-black"
                      : "border border-white/10 bg-white/5 text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{c.icon}</span> {c.label}
                </button>
              ))}
            </div>

            {/* Busca */}
            <div className="p-3">
              <input
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder={`Buscar em ${cat.label}…`}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-brand-primary/50"
              />
            </div>

            {/* Lista */}
            <div className="grid grid-cols-1 gap-2 overflow-y-auto p-3 pt-0 sm:grid-cols-2">
              {itens.length === 0 ? (
                <p className="col-span-full py-8 text-center text-sm text-gray-500">
                  Nada encontrado.
                </p>
              ) : (
                itens.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => escolher(item)}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-brand-primary/50 hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 text-2xl">
                      {cat.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold text-white">
                        {item.name}
                      </span>
                      <span className="mt-1 flex flex-wrap gap-1">
                        {item.specs.map((s) => (
                          <span
                            key={s}
                            className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </span>
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Slot({
  rotulo,
  cor,
  sel,
  onPick,
}: {
  rotulo: string;
  cor: string;
  sel: Selecionado | null;
  onPick: () => void;
}) {
  return (
    <button
      onClick={onPick}
      className="glass-card flex min-h-[120px] w-full flex-col items-center justify-center gap-2 p-5 text-center transition hover:border-brand-primary/40"
      style={{ boxShadow: sel ? `0 0 30px -16px ${cor}` : undefined }}
    >
      <span className="text-[10px] uppercase tracking-wider" style={{ color: cor }}>
        {rotulo}
      </span>
      {sel ? (
        <>
          <span className="text-3xl">{sel.icon}</span>
          <span className="font-bold text-white">{sel.name}</span>
          <span className="flex flex-wrap justify-center gap-1">
            {sel.specs.map((s) => (
              <span
                key={s}
                className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-gray-300"
              >
                {s}
              </span>
            ))}
          </span>
          <span className="mt-1 text-xs text-brand-primary">trocar</span>
        </>
      ) : (
        <>
          <span className="text-3xl text-gray-600">+</span>
          <span className="text-sm text-gray-400">Clique para escolher</span>
        </>
      )}
    </button>
  );
}
