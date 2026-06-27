import type { ComparisonResult } from "@/lib/types";
import RadarChart from "./RadarChart";
import BarCompare from "./BarCompare";

const COLORS = ["#00E5FF", "#7B2FFF"];

/** Renderização do resultado de uma comparação (reutilizada na busca e no catálogo). */
export default function ComparisonResultView({
  result,
}: {
  result: ComparisonResult;
}) {
  const nomes = result.itens.map((i) => i.name);

  return (
    <div className="animate-fade-up space-y-6">
      {result.demo && (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-center text-sm text-amber-300">
          ⚠️ Modo demonstração (dados simulados). Configure a chave da Anthropic
          para análises reais.
        </div>
      )}

      <h2 className="text-center text-2xl font-bold gradient-text sm:text-3xl">
        {result.titulo}
      </h2>

      {/* Cabeçalho dos itens: nota + preço */}
      <div className="grid gap-4 sm:grid-cols-2">
        {result.itens.map((item, i) => (
          <div
            key={i}
            className="glass-card flex items-center justify-between p-5"
            style={{ boxShadow: `0 0 30px -16px ${COLORS[i % COLORS.length]}` }}
          >
            <div className="min-w-0">
              <span
                className="text-xs font-semibold uppercase tracking-wider"
                style={{ color: COLORS[i % COLORS.length] }}
              >
                {item.category}
              </span>
              <h3 className="truncate text-xl font-bold text-white">{item.name}</h3>
              <p className="mt-1 text-sm text-gray-400">{item.precoFaixa}</p>
            </div>
            <div className="ml-3 shrink-0 text-right">
              <div
                className="text-3xl font-black"
                style={{ color: COLORS[i % COLORS.length] }}
              >
                {item.notaGeral}
              </div>
              <div className="text-[10px] uppercase text-gray-500">nota geral</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabela de atributos específicos da categoria */}
      {result.atributos?.length > 0 && (
        <div className="glass-card overflow-hidden p-0">
          <div className="grid grid-cols-3 gap-2 border-b border-white/10 p-4">
            <span className="text-xs uppercase tracking-wide text-gray-500">
              Atributo
            </span>
            {nomes.map((nome, i) => (
              <span
                key={i}
                className="truncate text-right text-sm font-semibold sm:text-center"
                style={{ color: COLORS[i % COLORS.length] }}
              >
                {nome}
              </span>
            ))}
          </div>
          {result.atributos.map((attr, idx) => (
            <div
              key={idx}
              className="grid grid-cols-3 gap-2 border-b border-white/5 px-4 py-3 text-sm last:border-0 odd:bg-white/[0.02]"
            >
              <span className="text-gray-400">{attr.label}</span>
              {result.itens.map((_, i) => (
                <span
                  key={i}
                  className="text-right font-medium text-white sm:text-center"
                >
                  {attr.valores[i] ?? "—"}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Veredito da IA */}
      <div className="glass-card p-5">
        <h3 className="mb-2 flex items-center gap-2 font-semibold text-brand-primary">
          <span>🧠</span> Veredito da IA
        </h3>
        <p className="leading-relaxed text-gray-200">{result.veredito}</p>
      </div>

      {/* Gráficos */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card p-5">
          <h3 className="mb-4 font-semibold text-white">Comparativo visual</h3>
          <BarCompare criterios={result.criterios} nomes={nomes} />
        </div>
        <div className="glass-card p-5">
          <h3 className="mb-4 font-semibold text-white">Radar de desempenho</h3>
          <RadarChart criterios={result.criterios} nomes={nomes} />
        </div>
      </div>

      {/* Recomendações por uso (adequadas à categoria) */}
      {result.recomendacoes?.length > 0 && (
        <div className="glass-card p-5">
          <h3 className="mb-4 font-semibold text-white">Melhor para cada caso</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {result.recomendacoes.map((rec, i) => (
              <div
                key={i}
                className="rounded-lg border border-white/10 bg-white/5 p-3 text-center"
              >
                <div className="text-[10px] uppercase tracking-wide text-gray-500">
                  {rec.uso}
                </div>
                <div className="mt-0.5 text-sm font-semibold text-brand-primary">
                  {rec.item}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
