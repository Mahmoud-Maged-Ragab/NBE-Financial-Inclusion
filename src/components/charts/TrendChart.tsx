interface SeriesConfig {
  key: string;
  label: string;
  color: string;
}

interface TrendChartProps {
  data: Record<string, number>[];
  /** Property holding the x value (a year). */
  xKey: string;
  series: SeriesConfig[];
  caption: string;
  /** Upper bound of the y axis. */
  max?: number;
  unit?: string;
}

const W = 720;
const H = 340;
const PAD = { top: 24, right: 24, bottom: 44, left: 44 };

/**
 * Multi-series line chart drawn as plain SVG.
 *
 * The path animates in via the `.chart-draw` class once an ancestor `Reveal`
 * marks itself shown. A text summary is provided for screen readers.
 */
export function TrendChart({
  data,
  xKey,
  series,
  caption,
  max = 100,
  unit = "%",
}: TrendChartProps) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const xs = data.map((d) => d[xKey]);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);

  const x = (v: number) =>
    PAD.left + ((v - xMin) / (xMax - xMin || 1)) * innerW;
  const y = (v: number) => PAD.top + innerH - (v / max) * innerH;

  const ticks = [0, 25, 50, 75, 100].filter((t) => t <= max);

  const summary = series
    .map(
      (s) =>
        `${s.label}: ${data
          .map((d) => `${d[xKey]}, ${d[s.key]}${unit}`)
          .join("; ")}`,
    )
    .join(". ");

  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full min-w-[520px]"
          role="img"
          aria-label={`${caption}. ${summary}`}
        >
          {/* horizontal grid */}
          {ticks.map((t) => (
            <g key={t}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y(t)}
                y2={y(t)}
                stroke="var(--color-ink-200)"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 10}
                y={y(t)}
                textAnchor="end"
                dominantBaseline="middle"
                className="tabular"
                fontSize={12}
                fill="var(--color-ink-500)"
              >
                {t}
                {unit}
              </text>
            </g>
          ))}

          {/* x axis labels */}
          {data.map((d) => (
            <text
              key={`x-${d[xKey]}`}
              x={x(d[xKey])}
              y={H - PAD.bottom + 22}
              textAnchor="middle"
              className="tabular"
              fontSize={12}
              fill="var(--color-ink-500)"
            >
              {d[xKey]}
            </text>
          ))}

          {series.map((s, si) => {
            const path = data
              .map((d, i) => `${i === 0 ? "M" : "L"}${x(d[xKey])},${y(d[s.key])}`)
              .join(" ");

            return (
              <g key={s.key}>
                <path
                  d={path}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="chart-draw"
                  style={
                    {
                      "--dash": 2000,
                      transitionDelay: `${si * 220}ms`,
                    } as React.CSSProperties
                  }
                />
                {data.map((d) => (
                  <circle
                    key={`${s.key}-${d[xKey]}`}
                    cx={x(d[xKey])}
                    cy={y(d[s.key])}
                    r={4}
                    fill="#fff"
                    stroke={s.color}
                    strokeWidth={2.5}
                  >
                    <title>{`${s.label} ${d[xKey]}: ${d[s.key]}${unit}`}</title>
                  </circle>
                ))}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        {series.map((s) => (
          <span
            key={s.key}
            className="inline-flex items-center gap-2 text-sm text-ink-700"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full"
              style={{ background: s.color }}
            />
            {s.label}
          </span>
        ))}
      </div>

      <figcaption className="mt-3 text-sm text-ink-500">{caption}</figcaption>
    </figure>
  );
}
