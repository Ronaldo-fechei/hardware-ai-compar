import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import CatalogCompare from "@/components/CatalogCompare";
import { CATEGORIAS } from "@/lib/hardware-data";

export const metadata: Metadata = {
  title: "Catálogo — Escolha e Compare Hardware",
  description:
    "Escolha produtos de uma lista por categoria (placas de vídeo, processadores, SSDs, notebooks, consoles) e compare com inteligência artificial.",
};

export default function CatalogoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative">

        <section className="mx-auto max-w-4xl px-6 pb-20 pt-6 text-center">
          <h1 className="text-3xl font-black sm:text-5xl">
            Comparar pelo <span className="gradient-text">catálogo</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Sem digitar: clique numa categoria, escolha o produto da lista, e
            compare A vs B com a IA.
          </p>
          <div className="mt-10 text-left">
            <CatalogCompare />
          </div>

          {/* Navegação por categoria — cada link leva à ficha completa
              (com todos os produtos) daquela categoria. */}
          <div className="mt-16 text-left">
            <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
              Ou explore todos os produtos por categoria
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIAS.filter((c) => c.disponivel).map((c) => (
                <Link
                  key={c.slug}
                  href={`/comparar/${c.slug}`}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition hover:border-brand-primary/50 hover:text-white"
                >
                  <span>{c.icon}</span> {c.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
