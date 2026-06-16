import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import BuildAssistant from "@/components/BuildAssistant";

export const metadata: Metadata = {
  title: "Assistente de Montagem — Monte seu PC com IA",
  description:
    "Diga seu orçamento e para que vai usar: a IA monta uma configuração completa, compatível e com preços do mercado brasileiro.",
};

export default function MontarPage() {
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
            Monte seu <span className="gradient-text">PC ideal</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Diga quanto você tem e para que vai usar. A IA monta uma configuração
            completa, compatível e equilibrada.
          </p>
          <div className="mt-10 text-left">
            <BuildAssistant />
          </div>
        </section>
      </div>
    </main>
  );
}
