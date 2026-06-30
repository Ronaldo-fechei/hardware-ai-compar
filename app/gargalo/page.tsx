import type { Metadata } from "next";
import Link from "next/link";
import AuthNav from "@/components/AuthNav";
import BottleneckSimulator from "@/components/BottleneckSimulator";

export const metadata: Metadata = {
  title: "Simulador de Gargalo (Bottleneck) CPU + GPU",
  description:
    "Descubra o gargalo entre seu processador e placa de vídeo. Estimativa por IA do componente limitante em jogos e produtividade.",
};

export default function GargaloPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 aurora" />
      <div className="relative">

        <section className="mx-auto max-w-4xl px-6 pb-20 pt-6 text-center">
          <h1 className="text-3xl font-black sm:text-5xl">
            Simulador de <span className="gradient-text">gargalo</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Veja se o seu processador e a sua placa de vídeo estão equilibrados —
            ou se um está segurando o outro.
          </p>
          <div className="mt-10 text-left">
            <BottleneckSimulator />
          </div>
        </section>
      </div>
    </main>
  );
}
