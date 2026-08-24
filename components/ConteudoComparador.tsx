import type { ConteudoComparador } from '@/content/comparadores'

/**
 * Conteúdo editorial das páginas /comparar/[categoria].
 *
 * Antes, essas 11 páginas eram só o <ComparadorClient /> com ~200 palavras.
 * O Googlebot não indexa valor que só existe dentro de um <select>: ele lê
 * texto. Cada categoria agora tem 700-1.100 palavras próprias.
 *
 * A intro vem ANTES da ferramenta de propósito — é a primeira coisa que o
 * rastreador encontra ao abrir a página.
 */

export function IntroComparador({ dados }: { dados: ConteudoComparador }) {
  return (
    <header className="border-b px-6 py-10 md:px-8" style={{ borderColor: 'var(--border)' }}>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[2px]" style={{ color: 'var(--accent)' }}>
        // guia de compra
      </p>
      <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl" style={{ letterSpacing: '-1.5px' }}>
        {dados.titulo}
      </h1>
      <p className="mt-3 max-w-3xl text-[15px] font-semibold" style={{ color: 'var(--text)' }}>
        {dados.subtitulo}
      </p>
      <div className="mt-5 max-w-3xl space-y-4 text-[14px] leading-relaxed" style={{ color: 'var(--label)' }}>
        {dados.intro.map((p, i) => <p key={i}>{p}</p>)}
      </div>
    </header>
  )
}

export function ConteudoComparadorSecoes({ dados }: { dados: ConteudoComparador }) {
  return (
    <div
      className="max-w-3xl space-y-12 px-6 py-12 text-[14px] leading-relaxed md:px-8"
      style={{ color: 'var(--label)' }}
    >
      <section>
        <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
          Como ler a ficha técnica
        </h2>
        <dl className="space-y-4">
          {dados.comoLer.map(({ termo, texto }) => (
            <div key={termo} className="border-l-2 pl-4" style={{ borderColor: 'var(--border)' }}>
              <dt className="font-semibold" style={{ color: 'var(--text)' }}>{termo}</dt>
              <dd className="mt-1">{texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
          Os erros mais comuns nessa compra
        </h2>
        <ol className="space-y-4">
          {dados.erros.map(({ titulo, texto }, i) => (
            <li key={titulo} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded font-mono text-[11px] font-bold"
                style={{ background: 'var(--surface2)', color: 'var(--accent)' }}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{titulo}</h3>
                <p className="mt-1">{texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-1 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
          O que esperar de cada faixa de preço
        </h2>
        <p className="mb-4 font-mono text-[10px]" style={{ color: 'var(--muted)' }}>
          Referências do mercado brasileiro — confirme o preço do dia antes de decidir.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b" style={{ borderColor: 'var(--border)' }}>
                <th className="py-2 pr-4 font-mono text-[10px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
                  Faixa
                </th>
                <th className="py-2 font-mono text-[10px] uppercase tracking-[1px]" style={{ color: 'var(--muted)' }}>
                  O que esperar
                </th>
              </tr>
            </thead>
            <tbody>
              {dados.faixas.map(({ faixa, oQueEsperar }) => (
                <tr key={faixa} className="border-b align-top" style={{ borderColor: 'var(--border)' }}>
                  <td className="whitespace-nowrap py-3 pr-4 font-semibold" style={{ color: 'var(--text)' }}>
                    {faixa}
                  </td>
                  <td className="py-3">{oQueEsperar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
          Como calculamos a nota
        </h2>
        <p>{dados.comoPontuamos}</p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.5px' }}>
          Perguntas frequentes
        </h2>
        <div className="space-y-5">
          {dados.faq.map(({ p, r }) => (
            <div key={p}>
              <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{p}</h3>
              <p className="mt-1">{r}</p>
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
