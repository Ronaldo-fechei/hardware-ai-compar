import type { ComparisonCriterion } from "@/lib/types";

const COLORS = ["#00E5FF", "#7B2FFF"];

interface Props {
  criterios: ComparisonCriterion[];
  nomes: string[];
}

/** Barras comparativas (0 a 100) por critério. */
export default function BarCompare({ criterios, nomes }: Props) {
  return (
    <div className="space-y-5">
      {criterios.map((c, i) => (
        <div key={i}>
          <div className="mb-1.5 flex items-center justify-between text-sm">
            <span className="text-gray-300">{c.label}</span>
          </div>
          <div className="space-y-1.5">
            {c.scores.map((score, s) => {
              const color = COLORS[s % COLORS.length];
              const melhor = score === Math.max(...c.scores);
              return (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-28 shrink-0 truncate text-xs text-gray-400">
                    {nomes[s] ?? `Item ${s + 1}`}
                  </span>
                  <div className="relative h-5 flex-1 overflow-hidden rounded-md bg-white/5">
                    <div
                      className="flex h-full items-center justify-end rounded-md px-2 text-[10px] font-bold text-black transition-all duration-700"
                      style={{
                        width: `${score}%`,
                        background: `linear-gradient(90deg, ${color}aa, ${color})`,
                        boxShadow: melhor ? `0 0 14px ${color}88` : "none",
                      }}
                    >
                      {score}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
