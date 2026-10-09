import Image from "next/image";
import Link from "next/link";
import { AvisoAfiliado } from "@/components/AvisoAfiliado";
import { Gta6Countdown } from "@/components/Gta6Countdown";
import { ProdutoThumb } from "@/components/ProdutoThumb";
import { buscaAmazon, ehAfiliado } from "@/lib/afiliados";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";

type Produto = (typeof PRODUTOS_ENRIQUECIDOS)[number];

// ─────────────────────────────────────────────────────────────────────────────
//  Build recomendada. Só entram produtos que já existem no catálogo do site
//  (lib/hardware-data.ts): para trocar uma peça, mude o slug aqui.
//  O item com `gpu: true` é a peça trocável nos "caminhos de placa de vídeo".
// ─────────────────────────────────────────────────────────────────────────────
const BUILD_GTA6 = [
  {
    slug: "amd-ryzen-7-7800x3d",
    papel: "Processador",
    motivo: "O 3D V-Cache ajuda em mundos abertos, física e grande volume de NPCs.",
  },
  {
    slug: "nvidia-geforce-rtx-4080-super",
    papel: "Placa de vídeo",
    motivo: "16 GB de VRAM e folga para ray tracing, DLSS e texturas em alta resolução.",
    gpu: true,
  },
  {
    slug: "kingston-fury-beast-32gb-ddr5-6000",
    papel: "Memória",
    motivo: "32 GB evitam aperto com o jogo, o sistema, o navegador e os apps em segundo plano.",
  },
  {
    slug: "wd-black-sn850x-2tb",
    papel: "Armazenamento",
    motivo: "SSD NVMe rápido e espaçoso para streaming de mapa e uma instalação provavelmente grande.",
  },
  {
    slug: "corsair-rm850e-850w",
    papel: "Fonte",
    motivo: "850 W, padrão ATX 3.0 e margem segura para uma GPU de alto desempenho.",
  },
  {
    slug: "thermalright-peerless-assassin-120-se",
    papel: "Refrigeração",
    motivo: "Cooler de torre dupla com excelente custo-benefício para manter clocks estáveis.",
  },
  {
    slug: "corsair-4000d-airflow",
    papel: "Gabinete",
    motivo: "Bom fluxo de ar e espaço para placas de vídeo grandes e futuras atualizações.",
  },
] as const;

// Três caminhos: muda só a placa de vídeo, o resto da build é o mesmo.
const CAMINHOS_GPU = [
  {
    slug: "nvidia-geforce-rtx-4070-super",
    rotulo: "Equilíbrio",
    foco: "1440p em qualidade alta, com ajustes pontuais",
    nota: "Tem 12 GB de VRAM, abaixo da nossa referência de 16 GB: texturas no máximo podem pedir ajuste.",
  },
  {
    slug: "nvidia-geforce-rtx-4080-super",
    rotulo: "Ideal",
    foco: "1440p em alta ou ultra, com 60 fps como meta",
    nota: "É a base da build acima: 16 GB de VRAM e boa margem para DLSS e ray tracing.",
    recomendado: true,
  },
  {
    slug: "nvidia-geforce-rtx-4090",
    rotulo: "Sem limites",
    foco: "4K e ray tracing pesado",
    nota: "24 GB de VRAM e 450 W de consumo: confira o espaço no gabinete. Só faz sentido com monitor 4K.",
  },
] as const;

const STATS = [
  { valor: "1440p", rotulo: "resolução-alvo" },
  { valor: "60 fps", rotulo: "meta de quadros" },
  { valor: "16 GB", rotulo: "VRAM de referência" },
  { valor: "32 GB", rotulo: "RAM DDR5" },
] as const;

const ROCKSTAR_RELEASE_URL =
  "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026";
const ROCKSTAR_GAME_URL = "https://www.rockstargames.com/VI";

const LANCAMENTO_ISO = "2026-11-19T00:00:00-03:00";
const GUIA_COMPLETO_HREF = "/blog/pc-para-rodar-gta-6-requisitos-2026";

function brl(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

/** Menor preço de referência numa loja afiliada (a mesma regra dos cards da home). */
function precoReferencia(p: Produto): number | null {
  const menor = (p.precos ?? [])
    .filter((x) => x.disponivel && ehAfiliado(x.loja))
    .sort((a, b) => a.preco - b.preco)[0];
  return menor ? menor.preco : null;
}

function vram(p: Produto): string {
  return String(p.specs["VRAM"] ?? "");
}

export function Gta6LaunchFeature() {
  const itens = BUILD_GTA6.map((cfg) => ({
    cfg,
    produto: PRODUTOS_ENRIQUECIDOS.find((p) => p.slug === cfg.slug),
  })).filter((i): i is { cfg: (typeof BUILD_GTA6)[number]; produto: Produto } => Boolean(i.produto));

  // Total só é exibido quando TODAS as peças têm preço de referência: um total
  // com peça faltando seria um número enganosamente baixo.
  const precos = itens.map((i) => precoReferencia(i.produto));
  const totalCompleto = precos.every((v): v is number => v !== null);
  const totalBuild = totalCompleto ? (precos as number[]).reduce((a, b) => a + b, 0) : null;
  const precoGpuBase = itens.find((i) => "gpu" in i.cfg && i.cfg.gpu)?.produto;
  const baseSemGpu =
    totalBuild !== null && precoGpuBase ? totalBuild - (precoReferencia(precoGpuBase) ?? 0) : null;

  return (
    <>
      {/* ───────────────────────── BANNER (primeira dobra) ───────────────────────── */}
      <section
        aria-labelledby="gta6-banner-title"
        className="on-dark relative"
      >
        <div className="relative isolate overflow-hidden border-b border-white/10 bg-[#080912]">
          <Image
            src="/gta6-pc-hero.png"
            alt="Cidade tropical iluminada por néons ao anoitecer, com palmeiras e um carro esportivo"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[88%_center] sm:object-center"
          />
          {/* Escurecimento: horizontal no desktop (texto à esquerda), vertical no celular (texto embaixo). */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.9)_38%,rgba(5,7,15,0.42)_64%,rgba(5,7,15,0.06)_100%)] sm:block" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,7,15,0.97)_0%,rgba(5,7,15,0.82)_46%,rgba(5,7,15,0.05)_100%)] sm:bg-[linear-gradient(0deg,rgba(5,7,15,0.7)_0%,transparent_42%)]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#ff4d9d]/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto flex min-h-[600px] w-full max-w-6xl flex-col justify-end px-6 pb-8 pt-44 sm:min-h-[600px] sm:justify-center sm:py-16 lg:min-h-[640px]">
            <div className="max-w-[700px]">
              <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] sm:text-xs">
                <span className="rounded-full border border-[#ff4d9d]/40 bg-[#ff4d9d]/15 px-3 py-1.5 text-[#ff82bb]">
                  Especial GTA VI
                </span>
                <Gta6Countdown alvo={LANCAMENTO_ISO} />
              </div>

              <p className="mb-3 font-mono text-xs uppercase tracking-[0.26em] text-[#38e7ff]">
                Guia de preparação BestHard
              </p>
              <h2
                id="gta6-banner-title"
                className="text-balance text-[2.35rem] font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl"
              >
                Seu PC está preparado para o{" "}
                <span className="bg-gradient-to-r from-[#ff4d9d] via-[#ff8a5b] to-[#3de7ff] bg-clip-text text-transparent">
                  jogo do ano?
                </span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                GTA VI chega aos consoles em 19 de novembro. No PC ainda não há data, mas quem se
                prepara agora escolhe melhor e não paga caro por impulso. Veja a build que
                montaríamos, só com peças que já comparamos aqui.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#pc-ideal-gta6"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ff4d9d] to-[#ff8059] px-6 py-3.5 text-sm font-black text-white shadow-[0_14px_38px_rgba(255,77,157,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(255,77,157,0.42)]"
                >
                  Ver o PC ideal para GTA VI <span aria-hidden="true" className="ml-2">↓</span>
                </a>
                <Link
                  href="/gargalo"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-[#38e7ff]/60 hover:bg-[#38e7ff]/10"
                >
                  Testar o meu PC
                </Link>
              </div>

              <ul className="mt-7 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4" aria-label="Metas da build">
                {STATS.map((s) => (
                  <li
                    key={s.rotulo}
                    className="rounded-xl border border-white/10 bg-black/35 px-3 py-2.5 backdrop-blur-md"
                  >
                    <span className="block text-lg font-black leading-none text-white">{s.valor}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/55">
                      {s.rotulo}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 max-w-lg text-xs leading-relaxed text-white/50">
                Projeção editorial. Não representa requisitos oficiais da Rockstar Games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── ARTIGO ───────────────────────── */}
      <article
        id="pc-ideal-gta6"
        className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20"
      >
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ff6cae]">
            Análise atualizada em 9 de outubro de 2026
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
            O PC que montaríamos hoje para jogar GTA VI no lançamento para PC
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            A Rockstar confirmou GTA VI para 19 de novembro de 2026 no PlayStation 5 e no Xbox
            Series X|S. Para PC não há anúncio de versão, data nem requisitos, e nem o modo de
            60 fps nos consoles foi confirmado. Por isso, esta configuração não é uma promessa de
            desempenho: é uma projeção para quem quer jogar em 1440p, qualidade alta ou ultra,
            com 60 fps como meta e espaço para tecnologias de reconstrução de imagem quando o
            port chegar.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ff4d9d]/20 bg-[#ff4d9d]/[0.07] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff82bb]">Confirmado</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Lançamento em 19/11/2026 para PS5 e Xbox Series X|S, segundo a Rockstar.
            </p>
          </div>
          <div className="rounded-2xl border border-[#38e7ff]/20 bg-[#38e7ff]/[0.06] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#73efff]">Ainda não confirmado</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Versão de PC, data, requisitos oficiais, resolução e taxa de quadros.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">Nossa meta</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              1440p em alta qualidade, 60 fps como alvo e boa margem de VRAM.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-white/70">
            E quando chega ao PC?
          </p>
          <p className="mt-2 text-sm leading-7 text-gray-400">
            Ninguém sabe ainda. Como referência histórica, GTA V chegou ao PC cerca de 19 meses
            depois dos consoles (set/2013 → abr/2015) e Red Dead Redemption 2, pouco mais de um
            ano depois (out/2018 → nov/2019). Se a Rockstar repetir o padrão, o PC ficaria para
            2027. É uma projeção nossa, não um anúncio.
          </p>
        </div>

        {/* ───────── Build recomendada ───────── */}
        <section aria-labelledby="build-gta6-title" className="mt-14">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38e7ff]">
                Build recomendada
              </p>
              <h3 id="build-gta6-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Potência com margem, sem cair no exagero
              </h3>
            </div>
            <Link href="/builds" className="text-sm font-semibold text-[#73efff] hover:underline">
              Abrir comparador de builds →
            </Link>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {itens.map(({ cfg, produto }) => {
              const preco = precoReferencia(produto);
              return (
                <div
                  key={cfg.slug}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-[#111318] p-5 transition hover:-translate-y-0.5 hover:border-[#ff4d9d]/35 hover:shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-4">
                    <ProdutoThumb produto={produto} size={56} radius={12} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff82bb]">
                        {cfg.papel}
                      </p>
                      <h4 className="mt-1 text-lg font-black text-white">{produto.nome}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-400">{cfg.motivo}</p>
                    </div>
                    <span
                      title="Nota BestHard"
                      className="rounded-lg bg-white/[0.05] px-2 py-1 font-mono text-xs font-bold text-[#73efff]"
                    >
                      {produto.score}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                    {preco !== null && (
                      <span className="mr-auto text-xs text-gray-500">
                        referência{" "}
                        <span className="font-mono text-sm font-bold text-white">{brl(preco)}</span>
                      </span>
                    )}
                    <Link
                      href={"/produto/" + produto.slug}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-gray-200 transition hover:border-white/30 hover:bg-white/5"
                    >
                      Ver ficha técnica
                    </Link>
                    <a
                      href={buscaAmazon(produto.nome)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="rounded-lg bg-[#ff4d9d] px-3 py-2 text-xs font-black text-white transition hover:bg-[#ff68ab]"
                    >
                      Conferir na Amazon ↗
                    </a>
                  </div>
                </div>
              );
            })}

            {totalBuild !== null && (
              <div className="flex flex-col justify-center rounded-2xl border border-[#38e7ff]/25 bg-[#38e7ff]/[0.06] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#73efff]">
                  Total estimado das {itens.length} peças
                </p>
                <p className="mt-2 font-mono text-3xl font-black text-white">{brl(totalBuild)}</p>
                <p className="mt-2 text-xs leading-5 text-gray-400">
                  Soma dos preços de referência da Amazon no catálogo. Não inclui placa-mãe AM5
                  (como uma B650), Windows nem periféricos. Os valores mudam: confira na loja.
                </p>
              </div>
            )}
          </div>

          <AvisoAfiliado />
        </section>

        {/* ───────── Caminhos de placa de vídeo ───────── */}
        {baseSemGpu !== null && (
          <section aria-labelledby="gpu-paths-title" className="mt-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#38e7ff]">
              Ajuste ao seu bolso
            </p>
            <h3 id="gpu-paths-title" className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Mesma build, três placas de vídeo
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
              A placa de vídeo é a peça que mais muda o preço e o desempenho. Trocando só ela, o
              restante da lista continua valendo.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {CAMINHOS_GPU.map((c) => {
                const gpu = PRODUTOS_ENRIQUECIDOS.find((p) => p.slug === c.slug);
                if (!gpu) return null;
                const precoGpu = precoReferencia(gpu);
                const destaque = "recomendado" in c && c.recomendado;
                return (
                  <div
                    key={c.slug}
                    className={
                      "flex flex-col rounded-2xl border p-5 " +
                      (destaque
                        ? "border-[#ff4d9d]/50 bg-[#ff4d9d]/[0.07] shadow-[0_0_40px_-12px_rgba(255,77,157,0.5)]"
                        : "border-white/10 bg-[#111318]")
                    }
                  >
                    <div className="flex min-h-[22px] items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#ff82bb]">
                        {c.rotulo}
                      </span>
                      {destaque && (
                        <span className="rounded-full bg-[#ff4d9d] px-2 py-0.5 text-[10px] font-black uppercase text-white">
                          Nossa escolha
                        </span>
                      )}
                    </div>
                    <h4 className="mt-3 text-lg font-black text-white">{gpu.nome}</h4>
                    <p className="mt-1 font-mono text-xs text-[#73efff]">{vram(gpu)}</p>
                    <p className="mt-3 text-sm leading-6 text-gray-300">{c.foco}</p>
                    <p className="mt-2 flex-1 text-xs leading-5 text-gray-500">{c.nota}</p>
                    {precoGpu !== null && (
                      <div className="mt-4 border-t border-white/10 pt-4">
                        <p className="text-xs text-gray-500">build completa (sem placa-mãe)</p>
                        <p className="font-mono text-xl font-black text-white">
                          {brl(baseSemGpu + precoGpu)}
                        </p>
                      </div>
                    )}
                    <a
                      href={buscaAmazon(gpu.nome)}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center rounded-lg border border-white/15 px-3 py-2 text-xs font-bold text-white transition hover:border-[#ff4d9d]/60 hover:bg-[#ff4d9d]/10"
                    >
                      Ver {gpu.nome} na Amazon ↗
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-6 text-gray-500">
              Se encontrar a GeForce RTX 5080 (geração atual, 16 GB de VRAM) por um preço próximo
              ao da RTX 4080 Super, ela é a opção mais atual para quem vai esperar o port de PC.
            </p>
          </section>
        )}

        <div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5 text-sm leading-7 text-gray-300">
          <strong className="text-amber-200">Antes de comprar:</strong> a seleção pressupõe uma
          placa-mãe AM5 compatível, como uma B650, além do sistema operacional. Como os requisitos
          de PC ainda não existem, recomendamos esperar o anúncio oficial antes de trocar uma
          máquina que já seja forte. Se for comprar agora, priorize GPU com pelo menos 16 GB de
          VRAM, 32 GB de RAM e SSD NVMe de 2 TB: são as partes com maior chance de continuar
          adequadas.
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-black text-white">Por que esta configuração faz sentido?</h3>
            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base">
              <p>
                Mundos abertos costumam pressionar processador, memória e armazenamento ao mesmo
                tempo. O Ryzen 7 7800X3D oferece ótimo desempenho em jogos sem exigir o consumo de
                uma CPU de produtividade extrema. Na parte gráfica, a RTX 4080 Super entrega 16 GB
                de VRAM e recursos de reconstrução de imagem, combinação mais prudente para um jogo
                denso, com iluminação avançada e longa distância de visão.
              </p>
              <p>
                Os 32 GB de DDR5 dão folga para o sistema e aplicativos paralelos. Já o SN850X de
                2 TB reduz a chance de falta de espaço e atende bem a jogos que carregam cenário de
                forma contínua. Fonte, cooler e gabinete foram escolhidos para sustentar desempenho
                por horas, e não apenas produzir um número alto em teste rápido.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/gargalo"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ff4d9d] to-[#ff8059] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                Meu PC aguenta? Testar o gargalo
              </Link>
              <Link
                href="/montar"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-[#38e7ff]/60 hover:bg-[#38e7ff]/10"
              >
                Montar com ajuda da IA
              </Link>
              <Link
                href={GUIA_COMPLETO_HREF}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-[#73efff] hover:underline"
              >
                Guia completo de requisitos →
              </Link>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">Fontes oficiais</p>
            <ul className="mt-4 space-y-4 text-sm leading-6">
              <li>
                <a
                  href={ROCKSTAR_RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#73efff]"
                >
                  Rockstar Newswire: lançamento em 19 de novembro de 2026 ↗
                </a>
              </li>
              <li>
                <a
                  href={ROCKSTAR_GAME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#73efff]"
                >
                  Página oficial: plataformas anunciadas para GTA VI ↗
                </a>
              </li>
            </ul>
            <p className="mt-5 border-t border-white/10 pt-5 text-xs leading-6 text-gray-500">
              Os links de compra são patrocinados. O BestHard pode receber comissão, sem alterar o
              preço para você. Especificações e disponibilidade podem mudar até o lançamento no PC.
            </p>
          </aside>
        </section>
      </article>
    </>
  );
}
