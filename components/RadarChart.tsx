import type { ComparisonCriterion } from "@/lib/types";

const COLORS = ["#00E5FF", "#7B2FFF"];

interface Props {
  criterios: ComparisonCriterion[];
  nomes: string[];
}

/** Gráfico de radar em SVG puro (sem dependências externas). */
export default function RadarChart({ criterios, nomes }: Props) {
  const size = 320;
  const center = size / 2;
  const radius = size / 2 - 50;
  const n = criterios.length;
  if (n < 3) return null;

  const numSeries = Math.max(...criterios.map((c) => c.scores.length), 0);

  // Coordenada de um ponto no radar dado o índice do eixo e o valor 0-100.
  const point = (i: number, value: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (value / 100) * radius;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
  };

  // Anéis de grade (25/50/75/100).
  const rings = [0.25, 0.5, 0.75, 1].map((f) =>
    Array.from({ length: n }, (_, i) => point(i, f * 100).join(",")).join(" "),
  );

  return (
    <div className="flex flex-col items-center">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[340px]">
        {/* grade */}
        {rings.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
        ))}
        {/* eixos + rótulos */}
        {criterios.map((c, i) => {
          const [x, y] = point(i, 100);
          const [lx, ly] = point(i, 122);
          return (
            <g key={i}>
              <line
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth={1}
              />
              <text
                x={lx}
                y={ly}
                fill="#9ca3af"
                fontSize="9"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {c.label.length > 16 ? c.label.slice(0, 15) + "…" : c.label}
              </text>
            </g>
          );
        })}
        {/* séries (um polígono por item) */}
        {Array.from({ length: numSeries }, (_, s) => {
          const pts = criterios
            .map((c, i) => point(i, c.scores[s] ?? 0).join(","))
            .join(" ");
          const color = COLORS[s % COLORS.length];
          return (
            <polygon
              key={s}
              points={pts}
              fill={color}
              fillOpacity={0.18}
              stroke={color}
              strokeWidth={2}
            />
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {nomes.map((nome, i) => (
          <span key={i} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS[i % COLORS.length] }}
            />
            {nome}
          </span>
        ))}
      </div>
    </div>
  );
}
