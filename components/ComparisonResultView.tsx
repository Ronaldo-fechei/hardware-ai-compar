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

      {/* Cards dos itens */}
      <div className="grid gap-4 sm:grid-cols-2">
        {result.itens.map((item, i) => (
          <div
            key={i}
            className="glass-card p-5"
            style={{ boxShadow: `0 0 30px -16px ${COLORS[i % COLORS.length]}` }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: COLORS[i % COLORS.length] }}
                >
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white">{item.name}</h3>
              </div>
              <div className="text-right">
                <div
                  className="text-3xl font-black"
                  style={{ color: COLORS[i % COLORS.length] }}
                >
                  {item.notaGeral}
                </div>
                <div className="text-[10px] uppercase text-gray-500">nota geral</div>
              </div>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <Metric label="FPS médio" value={fmt(item.fpsEstimado)} />
              <Metric label="Consumo" value={fmtW(item.consumoW)} />
              <Metric label="Temperatura" value={fmtC(item.tempC)} />
              <Metric label="Preço" value={item.precoFaixa} />
            </dl>
          </div>
        ))}
      </div>

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
          <BarCompare
            criterios={result.criterios}
            nomes={result.itens.map((i) => i.name)}
          />
        </div>
        <div className="glass-card p-5">
          <h3 className="mb-4 font-semibold text-white">Radar de desempenho</h3>
          <RadarChart
            criterios={result.criterios}
            nomes={result.itens.map((i) => i.name)}
          />
        </div>
      </div>

      {/* Melhor para */}
      <div className="glass-card p-5">
        <h3 className="mb-4 font-semibold text-white">Melhor para cada uso</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          <BestFor emoji="🎮" label="Jogos" value={result.melhorPara.jogos} />
          <BestFor emoji="💼" label="Trabalho" value={result.melhorPara.trabalho} />
          <BestFor emoji="📹" label="Streaming" value={result.melhorPara.streaming} />
          <BestFor emoji="🤖" label="IA" value={result.melhorPara.ia} />
          <BestFor
            emoji="💰"
            label="Custo-benefício"
            value={result.melhorPara.customBeneficio}
          />
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/5 p-2">
      <dt className="text-[10px] uppercase tracking-wide text-gray-500">{label}</dt>
      <dd className="font-semibold text-white">{value}</dd>
    </div>
  );
}

function BestFor({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
      <div className="text-xl">{emoji}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">
        {label}
      </div>
      <div className="mt-0.5 text-sm font-semibold text-brand-primary">{value}</div>
    </div>
  );
}

const fmt = (n: number | null) => (n == null ? "—" : `${n}`);
const fmtW = (n: number | null) => (n == null ? "—" : `${n} W`);
const fmtC = (n: number | null) => (n == null ? "—" : `${n} °C`);
