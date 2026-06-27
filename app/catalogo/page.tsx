import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import CatalogCompare from "@/components/CatalogCompare";

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
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-black">
              ⚡
            </span>
            <span>
              Best<span className="gradient-text">Hard</span>
            </span>
          </Link>
          <AuthNav />
        </nav>

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
        </section>
      </div>
    </main>
  );
}
