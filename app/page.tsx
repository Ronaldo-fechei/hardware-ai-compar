import Link from "next/link";
import ComparePanel from "@/components/ComparePanel";
import { BannerDestaques } from "@/components/BannerDestaques";
import PlanButton from "@/components/PlanButton";
import type { Plan } from "@/lib/plans";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";

const RECURSOS = [
  {
    icon: "🧠",
    titulo: "Comparação inteligente",
    desc: "A IA estima desempenho, FPS, consumo, temperatura e custo-benefício de qualquer hardware.",
  },
  {
    icon: "📊",
    titulo: "Gráficos interativos",
    desc: "Barras comparativas e radar de desempenho para enxergar as diferenças num relance.",
  },
  {
    icon: "⚖️",
    titulo: "Veredito humano",
    desc: "Explicações claras de qual produto vale mais a pena para o seu uso.",
  },
  {
    icon: "🎯",
    titulo: "Melhor para cada uso",
    desc: "Saiba o ideal para jogos, trabalho, streaming e inteligência artificial.",
  },
];

// Tipo (categoria) no singular, para o cabeçalho dos cards de produto.
const TIPO_LABEL: Record<string, string> = {
  processadores: "Processador",
  gpus: "Placa de Vídeo",
  monitores: "Monitor",
  memorias: "Memória RAM",
  ssds: "SSD",
  coolers: "Cooler",
  fontes: "Fonte",
  gabinetes: "Gabinete",
};

const RANKINGS: { titulo: string; itens: string[] }[] = [
  {
    titulo: "🏆 Top GPUs",
    itens: ["RTX 4090", "RTX 4080 Super", "RX 7900 XTX", "RTX 4070 Ti Super"],
  },
  {
    titulo: "⚙️ Top Processadores",
    itens: ["Ryzen 7 9800X3D", "Core i9 14900K", "Ryzen 9 7950X3D", "Core i7 14700K"],
  },
  {
    titulo: "💾 Top SSDs",
    itens: ["Samsung 990 Pro", "WD Black SN850X", "Crucial T705", "Kingston KC3000"],
  },
];

const PLANOS: {
  id: Plan;
  nome: string;
  preco: string;
  periodo: string;
  destaque: boolean;
  recursos: string[];
  cta: string;
}[] = [
  {
    id: "free",
    nome: "Gratuito",
    preco: "R$ 0",
    periodo: "/mês",
    destaque: false,
    recursos: ["3 comparações por dia", "Gráficos básicos", "Veredito da IA"],
    cta: "Começar grátis",
  },
  {
    id: "pro",
    nome: "Pro",
    preco: "R$ 19",
    periodo: "/mês",
    destaque: true,
    recursos: [
      "Comparações ilimitadas",
      "IA avançada",
      "Simulador de gargalo",
      "Histórico ilimitado",
    ],
    cta: "Assinar Pro",
  },
  {
    id: "premium",
    nome: "Premium",
    preco: "R$ 49",
    periodo: "/mês",
    destaque: false,
    recursos: [
      "Tudo do Pro",
      "Acesso à API",
      "Exportação em PDF",
      "Comparações em massa",
    ],
    cta: "Assinar Premium",
  },
];

export default function Home({
  searchParams,
}: {
  searchParams: { assinatura?: string };
}) {
  const assinaturaOk = searchParams?.assinatura === "sucesso";
  return (
    <div className="relative overflow-hidden">
      {/* fundo grade tech */}
      <div className="pointer-events-none absolute inset-0 bg-grid-tech bg-[size:48px_48px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 aurora" />

      {assinaturaOk && (
        <div className="relative mx-auto mt-4 max-w-2xl px-6">
          <div className="rounded-xl border border-brand-primary/40 bg-brand-primary/10 p-4 text-center text-sm text-gray-100">
            ✅ Pagamento recebido! Assim que o Mercado Pago confirmar, seu plano
            será ativado automaticamente. Pode levar alguns instantes.
          </div>
        </div>
      )}

      <div className="relative">
        {/* HERO + COMPARADOR */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 text-center sm:pt-16">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-brand-primary" />
            Powered by Claude AI
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Compare qualquer hardware com{" "}
            <span className="gradient-text">inteligência artificial</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Placas de vídeo, processadores, SSDs, notebooks e PCs. Desempenho,
            FPS, consumo, custo-benefício e um veredito humano — em segundos.
          </p>

          <div className="mt-10">
            <ComparePanel />
          </div>
        </section>

        {/* BANNER DE PRODUTOS EM DESTAQUE (afiliados) */}
        <BannerDestaques />

        {/* RECURSOS */}
        <section id="recursos" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Tudo que você precisa para <span className="gradient-text">decidir</span>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECURSOS.map((r) => (
              <div key={r.titulo} className="glass-card p-6 transition hover:shadow-glow">
                <div className="text-3xl">{r.icon}</div>
                <h3 className="mt-3 font-semibold text-white">{r.titulo}</h3>
                <p className="mt-2 text-sm text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FERRAMENTAS */}
        <section id="ferramentas" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Ferramentas <span className="gradient-text">inteligentes</span>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/catalogo"
              className="glass-card group flex items-start gap-4 p-6 transition hover:shadow-glow"
            >
              <span className="text-4xl">📂</span>
              <span>
                <span className="flex items-center gap-2 text-lg font-semibold text-white">
                  Catálogo de produtos
                  <span className="text-brand-primary transition group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  Escolha de uma lista por categoria e compare, sem digitar.
                </span>
              </span>
            </Link>
            <Link
              href="/montar"
              className="glass-card group flex items-start gap-4 p-6 transition hover:shadow-glow"
            >
              <span className="text-4xl">🤖</span>
              <span>
                <span className="flex items-center gap-2 text-lg font-semibold text-white">
                  Monte seu PC
                  <span className="text-brand-primary transition group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  Diga seu orçamento e a IA monta a configuração ideal pra você.
                </span>
              </span>
            </Link>
            <Link
              href="/gargalo"
              className="glass-card group flex items-start gap-4 p-6 transition hover:shadow-glow"
            >
              <span className="text-4xl">🧩</span>
              <span>
                <span className="flex items-center gap-2 text-lg font-semibold text-white">
                  Simulador de gargalo
                  <span className="text-brand-primary transition group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  Descubra se sua CPU e GPU estão equilibradas.
                </span>
              </span>
            </Link>
            <Link
              href="/builds"
              className="glass-card group flex items-start gap-4 p-6 transition hover:shadow-glow"
            >
              <span className="text-4xl">🛠️</span>
              <span>
                <span className="flex items-center gap-2 text-lg font-semibold text-white">
                  Comparador de builds
                  <span className="text-brand-primary transition group-hover:translate-x-1">→</span>
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  Monte duas configurações e veja qual vale mais a pena.
                </span>
              </span>
            </Link>
          </div>
        </section>

        {/* PRODUTOS EM DESTAQUE */}
        <section id="produtos" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Produtos em <span className="gradient-text">destaque</span>
          </h2>
          <p className="mb-10 text-center text-gray-400">
            Fichas completas com specs, prós e contras e onde comprar.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUTOS_ENRIQUECIDOS.slice(0, 6).map((p) => {
              const menor = (p.precos || [])
                .filter((x) => x.disponivel)
                .sort((a, b) => a.preco - b.preco)[0];
              return (
                <Link
                  key={p.slug}
                  href={`/produto/${p.slug}`}
                  className="glass-card group p-5 transition hover:shadow-glow"
                >
                  <div className="flex items-start justify-between">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-brand-primary/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-primary">
                          {TIPO_LABEL[p.categoria] ?? p.categoria}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">
                          {p.marca}
                        </span>
                      </div>
                      <h3 className="mt-1 truncate text-lg font-bold text-white">{p.nome}</h3>
                    </div>
                    <span className="ml-2 shrink-0 text-2xl font-black gradient-text">
                      {p.score}
                    </span>
                  </div>
                  {menor && (
                    <p className="mt-3 text-sm text-gray-400">
                      a partir de{" "}
                      <span className="font-semibold text-brand-primary">
                        {menor.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </p>
                  )}
                  <span className="mt-2 inline-block text-xs text-brand-primary opacity-0 transition group-hover:opacity-100">
                    Ver ficha completa →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* RANKINGS */}
        <section id="rankings" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Rankings <span className="gradient-text">globais</span>
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {RANKINGS.map((rk) => (
              <div key={rk.titulo} className="glass-card p-6">
                <h3 className="mb-4 font-semibold text-white">{rk.titulo}</h3>
                <ol className="space-y-2">
                  {rk.itens.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-lg bg-white/5 p-2.5 text-sm"
                    >
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-brand-primary to-brand-secondary text-xs font-bold text-black">
                        {i + 1}
                      </span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section id="planos" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-3 text-center text-3xl font-bold">
            Planos para cada <span className="gradient-text">necessidade</span>
          </h2>
          <p className="mb-10 text-center text-gray-400">
            Comece grátis. Faça upgrade quando precisar de mais poder.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {PLANOS.map((p) => (
              <div
                key={p.nome}
                className={`glass-card relative p-6 ${
                  p.destaque ? "border-brand-primary/50 shadow-glow" : ""
                }`}
              >
                {p.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary px-3 py-1 text-xs font-bold text-black">
                    Mais popular
                  </span>
                )}
                <h3 className="font-semibold text-white">{p.nome}</h3>
                <div className="mt-2 flex items-end gap-1">
                  <span className="text-4xl font-black gradient-text">{p.preco}</span>
                  <span className="mb-1 text-sm text-gray-500">{p.periodo}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-gray-300">
                  {p.recursos.map((r) => (
                    <li key={r} className="flex items-center gap-2">
                      <span className="text-brand-primary">✓</span> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <PlanButton plan={p.id} label={p.cta} destaque={p.destaque} />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* SEO: dados estruturados */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "BestHard",
            applicationCategory: "Utility",
            operatingSystem: "Web",
            description:
              "Comparador de hardware de computador com inteligência artificial.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
          }),
        }}
      />
    </div>
  );
}
