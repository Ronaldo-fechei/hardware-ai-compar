import Link from "next/link";
import type { GuiaFerramenta } from "@/content/ferramentas";

// Conteúdo editorial fixo, renderizado no servidor, exibido abaixo de cada
// ferramenta interativa. Explica o que a ferramenta faz, como interpretar o
// resultado e quais são as limitações — com FAQ em dados estruturados.
export function ToolGuide({ guia }: { guia: GuiaFerramenta }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guia.faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };

  return (
    <article className="mx-auto mt-16 max-w-3xl space-y-10 text-left text-[15px] leading-relaxed text-gray-300">
      {guia.secoes.map((s) => (
        <section key={s.titulo}>
          <h2 className="mb-3 text-2xl font-bold text-white">{s.titulo}</h2>
          <div className="space-y-3">
            {s.paragrafos?.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {s.passos && (
              <ol className="list-decimal space-y-2 pl-5">
                {s.passos.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ol>
            )}
            {s.itens && (
              <ul className="list-disc space-y-2 pl-5">
                {s.itens.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <section>
        <h2 className="mb-4 text-2xl font-bold text-white">Perguntas frequentes</h2>
        <div className="space-y-5">
          {guia.faq.map((f) => (
            <div key={f.pergunta}>
              <h3 className="font-semibold text-white">{f.pergunta}</h3>
              <p className="mt-1">{f.resposta}</p>
            </div>
          ))}
        </div>
      </section>

      {guia.leiaTambem.length > 0 && (
        <section className="border-t border-white/10 pt-6">
          <h2 className="mb-3 text-lg font-semibold text-white">Leia também</h2>
          <ul className="space-y-2">
            {guia.leiaTambem.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand-primary hover:underline">
                  {l.titulo} →
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-gray-500">
            Os resultados das ferramentas são estimativas e não substituem testes em hardware real.
            Veja como avaliamos na nossa{" "}
            <Link href="/metodologia" className="text-brand-primary hover:underline">
              metodologia
            </Link>
            .
          </p>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </article>
  );
}
