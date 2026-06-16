import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import BuildComparator from "@/components/BuildComparator";

export const metadata: Metadata = {
  title: "Comparador de Builds — Build A vs Build B",
  description:
    "Monte duas configurações de PC e compare preço, FPS, consumo, potencial de upgrade e nota final com inteligência artificial.",
};

export default function BuildsPage() {
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
              Hardware<span className="gradient-text">AI</span>
            </span>
          </Link>
          <AuthNav />
        </nav>

        <section className="mx-auto max-w-4xl px-6 pb-20 pt-6 text-center">
          <h1 className="text-3xl font-black sm:text-5xl">
            Comparador de <span className="gradient-text">builds</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Monte duas configurações completas e descubra qual entrega mais por
            menos — preço, FPS, consumo e potencial de upgrade.
          </p>
          <div className="mt-10 text-left">
            <BuildComparator />
          </div>
        </section>
      </div>
    </main>
  );
}
