import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import BuildAssistant from "@/components/BuildAssistant";
import { ToolGuide } from "@/components/ToolGuide";
import { GUIA_MONTAR } from "@/content/ferramentas";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Monte seu PC — Assistente de configuração por orçamento",
  description:
    "Diga seu orçamento e para que vai usar: a IA monta uma configuração completa, compatível e com preços do mercado brasileiro.",
  alternates: { canonical: `${SITE_URL}/montar` },
};

export default function MontarPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative">

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
          <ToolGuide guia={GUIA_MONTAR} />
        </section>
      </div>
    </main>
  );
}
