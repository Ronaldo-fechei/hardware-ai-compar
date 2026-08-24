import type { ConteudoComparador } from '@/content/comparadores'

/**
 * Renderiza o conteúdo editorial de uma categoria de comparador.
 *
 * ORDEM NA PÁGINA — importa para o AdSense:
 *   1. <h1> + subtítulo
 *   2. <IntroComparador />        <- conteúdo antes de qualquer coisa comercial
 *   3. a ferramenta de comparação (os dropdowns que já existem)
 *   4. <ConteudoComparador />     <- o grosso do texto
 *   5. <BlocoCompra />            <- só aqui, no fim
 *
 * A intro vai ANTES da ferramenta de propósito: o Googlebot lê a página de
 * cima para baixo e a primeira coisa que ele encontra hoje é um <select>.
 */

export function IntroComparador({ dados }: { dados: ConteudoComparador }) {
  return (
    <header className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{dados.titulo}</h1>
      <p className="mt-2 text-lg text-zinc-400">{dados.subtitulo}</p>
      <div className="prose prose-invert mt-6 max-w-none">
        {dados.intro.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </header>
  )
}

export function ConteudoComparadorSecoes({ dados }: { dados: ConteudoComparador }) {
  return (
    <div className="mx-auto mt-16 max-w-3xl space-y-16">

      <section>
        <h2 className="text-2xl font-bold">Como ler a ficha técnica</h2>
        <dl className="mt-6 space-y-5">
          {dados.comoLer.map(({ termo, texto }) => (
            <div key={termo} className="border-l-2 border-zinc-700 pl-4">
              <dt className="font-semibold text-zinc-100">{termo}</dt>
              <dd className="mt-1 text-zinc-300">{texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Os erros mais comuns nessa compra</h2>
        <ol className="mt-6 space-y-5">
          {dados.erros.map(({ titulo, texto }, i) => (
            <li key={titulo} className="flex gap-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-sm font-bold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-zinc-100">{titulo}</h3>
                <p className="mt-1 text-zinc-300">{texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold">O que esperar de cada faixa de preço</h2>
        <p className="mt-2 text-sm text-zinc-500">
          Valores de referência no mercado brasileiro. Confirme o preço do dia antes de decidir.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="py-3 pr-4 font-semibold">Faixa</th>
                <th className="py-3 font-semibold">O que esperar</th>
              </tr>
            </thead>
            <tbody>
              {dados.faixas.map(({ faixa, oQueEsperar }) => (
                <tr key={faixa} className="border-b border-zinc-800 align-top">
                  <td className="py-4 pr-4 font-medium whitespace-nowrap">{faixa}</td>
                  <td className="py-4 text-zinc-300">{oQueEsperar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Como calculamos a nota</h2>
        <p className="mt-4 text-zinc-300">{dados.comoPontuamos}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
        <div className="mt-6 space-y-6">
          {dados.faq.map(({ p, r }) => (
            <div key={p}>
              <h3 className="font-semibold text-zinc-100">{p}</h3>
              <p className="mt-1 text-zinc-300">{r}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

/** JSON-LD de FAQ — elegível a rich result e reforça que a página tem conteúdo. */
export function faqJsonLd(dados: ConteudoComparador) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dados.faq.map(({ p, r }) => ({
      '@type': 'Question',
      name: p,
      acceptedAnswer: { '@type': 'Answer', text: r },
    })),
  }
}
