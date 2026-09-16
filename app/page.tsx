import type { Metadata } from "next";
import Link from "next/link";
import ComparePanel from "@/components/ComparePanel";
import { ProdutoThumb } from "@/components/ProdutoThumb";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";
import { ehAfiliado } from "@/lib/afiliados";
import { getArtigos } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

function formatarData(iso: string) {
  return new Date(iso + "T12:00:00-03:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const RECURSOS = [
  {
    icon: "🧠",
    titulo: "Comparação lado a lado",
    desc: "Desempenho, FPS estimado, consumo e custo-benefício de dois produtos, com a explicação de cada diferença.",
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

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ assinatura?: string }>;
}) {
  const query = await searchParams;
  const assinaturaOk = query?.assinatura === "sucesso";
  const guias = getArtigos().slice(0, 6);
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
        {/* HERO EDITORIAL */}
        <section className="mx-auto max-w-6xl px-6 pb-6 pt-12 sm:pt-16">
          <p className="font-mono text-xs uppercase tracking-[2px] text-brand-primary">
            Guias, comparativos e ferramentas
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            Escolha as peças do seu PC <span className="gradient-text">sem gastar à toa</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-gray-400">
            O BestHard explica, em português e com preços do mercado brasileiro, qual processador,
            placa de vídeo, SSD ou fonte faz sentido para o seu uso — e quando não vale a pena
            trocar. Cada guia informa a data de revisão, as fontes consultadas e quem escreveu.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/blog" className="btn-primary rounded-xl px-6 py-3 font-semibold">
              Ler os guias
            </Link>
            <a
              href="#comparar"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-gray-200 hover:border-brand-primary/50"
            >
              Comparar componentes
            </a>
          </div>
        </section>

        {/* GUIAS RECENTES */}
        <section id="guias" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold">
              Guias <span className="gradient-text">recentes</span>
            </h2>
            <Link href="/blog" className="text-sm text-brand-primary hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {guias.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="glass-card group flex flex-col p-6 transition hover:shadow-glow"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                  {a.categoria}
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-white">{a.titulo}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-400">{a.descricao}</p>
                <p className="mt-4 text-xs text-gray-500">
                  {a.autor} · {formatarData(a.dataAtualizacao || a.dataPublicacao)} ·{" "}
                  {a.tempoLeitura} min de leitura
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ESPECIAL GTA VI */}
        <section className="mx-auto max-w-6xl px-6 py-6">
          <Link
            href="/blog/pc-para-rodar-gta-6-requisitos-2026"
            className="glass-card group block p-6 transition hover:shadow-glow"
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
              Especial GTA VI
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Que PC vai rodar GTA VI? O que já foi confirmado e o que ainda é projeção
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              O jogo chega aos consoles em 19 de novembro de 2026 e a versão de PC ainda não tem data
              nem requisitos oficiais. Explicamos o que dá para planejar agora sem desperdiçar dinheiro.
            </p>
            <span className="mt-3 inline-block text-sm text-brand-primary">Ler o guia →</span>
          </Link>
        </section>

        {/* COMPARADOR */}
        <section id="comparar" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-16 pt-10 text-center sm:pt-16">
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            Compare dois componentes{" "}
            <span className="gradient-text">lado a lado</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Placas de vídeo, processadores, SSDs, notebooks e PCs. Desempenho,
            FPS, consumo, custo-benefício e um veredito humano — em segundos.
          </p>

          <div className="mt-10">
            <ComparePanel />
          </div>
        </section>

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
            Ferramentas <span className="gradient-text">gratuitas</span>
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
                  Informe orçamento, uso e resolução e receba uma configuração equilibrada.
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
                .filter((x) => x.disponivel && ehAfiliado(x.loja))
                .sort((a, b) => a.preco - b.preco)[0];
              return (
                <Link
                  key={p.slug}
                  href={`/produto/${p.slug}`}
                  className="glass-card group p-5 transition hover:shadow-glow"
                >
                  <div className="flex items-start gap-3">
                    <ProdutoThumb produto={p} size={44} radius={10} />
                    <div className="min-w-0 flex-1">
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
                      referência de{" "}
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

        {/* GRATUITO */}
        <section id="gratuito" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="mb-3 text-center text-3xl font-bold">
            O BestHard é <span className="gradient-text">gratuito</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-400">
            Sem plano, sem limite de comparações e sem cadastro obrigatório. O site se mantém com
            comissões de afiliado quando você compra pelas lojas parceiras — e o preço para você
            é exatamente o mesmo.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="glass-card p-6">
              <div className="text-2xl">♾️</div>
              <h3 className="mt-3 font-semibold text-white">Tudo liberado</h3>
              <p className="mt-2 text-sm text-gray-400">
                Comparações ilimitadas, gráficos, veredito da IA, simulador de gargalo e montagem
                de PC. Nada fica atrás de assinatura.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="text-2xl">🔓</div>
              <h3 className="mt-3 font-semibold text-white">Sem cadastro</h3>
              <p className="mt-2 text-sm text-gray-400">
                Use direto, sem criar conta. O login existe só para quem quiser sincronizar o
                histórico entre dispositivos.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="text-2xl">⚖️</div>
              <h3 className="mt-3 font-semibold text-white">Comissão não compra ranking</h3>
              <p className="mt-2 text-sm text-gray-400">
                Nenhuma loja ou fabricante paga por nota, posição ou recomendação. Se o produto é
                ruim, a gente escreve que é ruim.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <a href="#comparar" className="btn-primary rounded-xl px-8 py-3 font-semibold">
              Comparar hardware agora
            </a>
            <a
              href="/transparencia"
              className="text-sm text-gray-400 underline-offset-4 hover:text-brand-primary hover:underline"
            >
              Como o BestHard ganha dinheiro →
            </a>
          </div>

          <p className="mt-10 text-center text-xs text-gray-500">
            É loja, integrador ou criador de conteúdo e precisa de API, exportação em PDF ou
            comparações em massa?{" "}
            <a href="/contato" className="text-brand-primary hover:underline">
              Fale com a gente
            </a>
            .
          </p>
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
              "Guias, comparativos e ferramentas para escolher componentes de PC.",
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
