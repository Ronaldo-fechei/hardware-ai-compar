import Image from "next/image";
import Link from "next/link";
import { ProdutoThumb } from "@/components/ProdutoThumb";
import { buscaAmazon } from "@/lib/afiliados";
import { PRODUTOS_ENRIQUECIDOS } from "@/lib/hardware-data";

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
  },
  {
    slug: "kingston-fury-beast-32gb-ddr5-6000",
    papel: "Memória",
    motivo: "32 GB evitam aperto com o jogo, sistema, navegador e aplicativos em segundo plano.",
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

const ROCKSTAR_RELEASE_URL =
  "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026";
const ROCKSTAR_GAME_URL = "https://www.rockstargames.com/VI";

export function Gta6LaunchFeature() {
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-8">
        <div className="relative isolate min-h-[590px] overflow-hidden rounded-[28px] border border-white/10 bg-[#080912] shadow-[0_30px_100px_rgba(0,0,0,0.55)] sm:min-h-[620px]">
          <Image
            src="/gta6-pc-hero.png"
            alt="Cidade tropical iluminada por néons ao anoitecer, com palmeiras e um carro esportivo"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[64%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,15,0.98)_0%,rgba(5,7,15,0.9)_34%,rgba(5,7,15,0.36)_66%,rgba(5,7,15,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,7,15,0.82)_0%,transparent_45%)]" />

          <div className="relative z-10 flex min-h-[590px] max-w-[670px] flex-col justify-center px-6 py-14 sm:min-h-[620px] sm:px-12 lg:px-16">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
              <span className="rounded-full border border-[#ff4d9d]/40 bg-[#ff4d9d]/15 px-3 py-1.5 text-[#ff82bb]">
                Especial GTA VI
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                19 nov 2026 · consoles
              </span>
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[#38e7ff]">
              Guia de preparação BestHard
            </p>
            <h1 className="text-balance text-4xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Seu PC está preparado para o{" "}
              <span className="bg-gradient-to-r from-[#ff4d9d] via-[#ff8a5b] to-[#3de7ff] bg-clip-text text-transparent">
                jogo do ano?
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              GTA VI chega aos consoles no fim de 2026. A versão de PC ainda não foi anunciada,
              mas já dá para montar uma máquina forte, equilibrada e pronta para Vice City quando
              ela finalmente desembarcar no computador.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pc-ideal-gta6"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#ff4d9d] to-[#ff8059] px-6 py-3.5 text-sm font-black text-white shadow-[0_14px_38px_rgba(255,77,157,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(255,77,157,0.42)]"
              >
                Ver o PC ideal para GTA VI <span aria-hidden="true" className="ml-2">↓</span>
              </a>
              <a
                href="#comparar"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-[#38e7ff]/60 hover:bg-[#38e7ff]/10"
              >
                Comparar componentes
              </a>
            </div>

            <p className="mt-6 max-w-lg text-xs leading-relaxed text-white/50">
              Projeção editorial — não representa requisitos oficiais da Rockstar Games.
            </p>
          </div>
        </div>
      </section>

      <article id="pc-ideal-gta6" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-16 sm:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ff6cae]">
            Análise atualizada em 31 de agosto de 2026
          </p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
            O PC que montaríamos hoje para jogar GTA VI no lançamento para PC
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-400 sm:text-lg">
            A Rockstar confirmou GTA VI para 19 de novembro de 2026 no PlayStation 5 e Xbox
            Series X|S. Até agora, não anunciou versão, data ou requisitos para PC. Por isso, esta
            configuração não é uma promessa de desempenho: é uma recomendação preventiva para
            quem busca jogar em 1440p, qualidade alta ou ultra e cerca de 60 fps, com espaço para
            tecnologias de reconstrução de imagem quando o port chegar.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ff4d9d]/20 bg-[#ff4d9d]/[0.07] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#ff82bb]">Confirmado</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Lançamento em 19/11/2026 para PS5 e Xbox Series X|S.
            </p>
          </div>
          <div className="rounded-2xl border border-[#38e7ff]/20 bg-[#38e7ff]/[0.06] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#73efff]">Ainda não confirmado</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Data da versão de PC, requisitos, resolução e taxa de quadros.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-white/70">Nossa meta</p>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              1440p em alta qualidade, 60 fps como alvo e boa margem de VRAM.
            </p>
          </div>
        </div>

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
            {BUILD_GTA6.map((item) => {
              const produto = PRODUTOS_ENRIQUECIDOS.find((p) => p.slug === item.slug);
              if (!produto) return null;

              return (
                <div
                  key={item.slug}
                  className="group rounded-2xl border border-white/10 bg-[#111318] p-5 transition hover:-translate-y-0.5 hover:border-[#ff4d9d]/35 hover:shadow-[0_18px_55px_rgba(0,0,0,0.35)]"
                >
                  <div className="flex items-start gap-4">
                    <ProdutoThumb produto={produto} size={56} radius={12} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#ff82bb]">
                        {item.papel}
                      </p>
                      <h4 className="mt-1 text-lg font-black text-white">{produto.nome}</h4>
                      <p className="mt-2 text-sm leading-6 text-gray-400">{item.motivo}</p>
                    </div>
                    <span className="rounded-lg bg-white/[0.05] px-2 py-1 font-mono text-xs font-bold text-[#73efff]">
                      {produto.score}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-4">
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
          </div>
        </section>

        <div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] p-5 text-sm leading-7 text-gray-300">
          <strong className="text-amber-200">O que ainda falta:</strong> esta seleção pressupõe uma
          placa-mãe AM5 compatível, como uma B650, além do sistema operacional. Como requisitos de
          PC ainda não existem, recomendamos esperar o anúncio oficial antes de trocar uma máquina
          que já seja forte. Se você comprar agora, priorize GPU com pelo menos 16 GB de VRAM, 32 GB
          de RAM e SSD NVMe de 2 TB — são as partes com maior chance de continuar adequadas.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Seu PC está preparado para o jogo do ano? PC ideal para GTA VI",
            description:
              "Projeção do PC ideal para jogar GTA VI quando a versão para computador for anunciada.",
            datePublished: "2026-08-31",
            dateModified: "2026-08-31",
            author: { "@type": "Organization", name: "Equipe Editorial BestHard" },
            publisher: { "@type": "Organization", name: "BestHard" },
            image: "https://www.besthard.com.br/gta6-pc-hero.png",
            mainEntityOfPage: "https://www.besthard.com.br/#pc-ideal-gta6",
          }),
        }}
      />
    </>
  );
}
