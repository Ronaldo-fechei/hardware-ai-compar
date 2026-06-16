"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { StoredComparison } from "@/lib/types";
import { listComparisons, deleteComparison } from "@/lib/history";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import BarCompare from "@/components/BarCompare";

export default function HistoricoPage() {
  const [itens, setItens] = useState<StoredComparison[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [aberto, setAberto] = useState<string | null>(null);

  async function carregar() {
    setCarregando(true);
    setItens(await listComparisons());
    setCarregando(false);
  }

  useEffect(() => {
    carregar();
  }, []);

  async function remover(item: StoredComparison) {
    await deleteComparison(item);
    setItens((prev) => prev.filter((e) => e.id !== item.id));
  }

  const algumNaNuvem = itens.some((i) => i.cloud);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-400 hover:text-white">
            ← Início
          </Link>
          {isSupabaseConfigured() && !algumNaNuvem && (
            <Link
              href="/login"
              className="text-sm text-brand-primary hover:underline"
            >
              Entrar para salvar na nuvem →
            </Link>
          )}
        </div>

        <h1 className="text-3xl font-bold">
          Seu <span className="gradient-text">histórico</span>
        </h1>
        <p className="mt-2 text-sm text-gray-400">
          {algumNaNuvem
            ? "Comparações salvas na sua conta (nuvem)."
            : "Comparações salvas neste navegador. Faça login para sincronizar na nuvem."}
        </p>

        {carregando ? (
          <div className="mt-10 flex justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
          </div>
        ) : itens.length === 0 ? (
          <div className="glass-card mt-8 p-10 text-center text-gray-400">
            <p className="text-lg">Nenhuma comparação ainda.</p>
            <Link href="/" className="btn-primary mt-4 inline-block">
              Fazer primeira comparação
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-3">
            {itens.map((item) => (
              <div key={item.id} className="glass-card overflow-hidden">
                <div className="flex items-center justify-between gap-3 p-4">
                  <button
                    onClick={() => setAberto(aberto === item.id ? null : item.id)}
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{item.titulo}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] ${
                          item.cloud
                            ? "bg-brand-primary/20 text-brand-primary"
                            : "bg-white/10 text-gray-400"
                        }`}
                      >
                        {item.cloud ? "☁ nuvem" : "💻 navegador"}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-gray-500">
                      {new Date(item.created_at).toLocaleString("pt-BR")}
                    </div>
                  </button>
                  <button
                    onClick={() => remover(item)}
                    className="rounded-lg px-2 py-1 text-sm text-gray-500 transition hover:bg-red-500/10 hover:text-red-400"
                    title="Remover"
                  >
                    🗑
                  </button>
                </div>

                {aberto === item.id && (
                  <div className="border-t border-white/10 p-4">
                    <p className="mb-4 text-sm leading-relaxed text-gray-300">
                      {item.result.veredito}
                    </p>
                    <BarCompare
                      criterios={item.result.criterios}
                      nomes={item.result.itens.map((i) => i.name)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
