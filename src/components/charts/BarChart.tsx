interface BarDatum {
  label: string;
  value: number;
  color?: string;
  note?: string;
}

interface BarChartProps {
  data: BarDatum[];
  unit?: string;
  max?: number;
  caption?: string;
}

/**
 * Horizontal bars with the value labelled directly on each row.
 * Bars wipe in from the left once an ancestor `Reveal` becomes visible.
 */
export function BarChart({
  data,
  unit = "%",
  max = 100,
  caption,
}: BarChartProps) {
  return (
    <figure className="m-0">
      <ul className="space-y-5">
        {data.map((d, i) => (
          <li key={d.label}>
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium text-ink-800">
                {d.label}
              </span>
              <span className="tabular shrink-0 text-sm font-semibold text-brand-700">
                {d.value}
                {unit}
              </span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink-100">
              <div
                className="chart-wipe h-full rounded-full"
                style={
                  {
                    width: `${Math.min((d.value / max) * 100, 100)}%`,
                    background: d.color ?? "var(--color-brand-600)",
                    "--grow-delay": `${i * 90}ms`,
                  } as React.CSSProperties
                }
              />
            </div>
            {d.note ? (
              <p className="mt-1.5 text-xs text-ink-500">{d.note}</p>
            ) : null}
          </li>
        ))}
      </ul>
      {caption ? (
        <figcaption className="mt-5 text-sm text-ink-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

interface ComparisonBarsProps {
  rows: {
    metric: string;
    left: number;
    right: number;
    unit?: string;
    note?: string;
  }[];
  leftLabel: string;
  rightLabel: string;
  leftColor?: string;
  rightColor?: string;
  max?: number;
}

/** Paired bars for two-way comparisons such as Egypt against India. */
export function ComparisonBars({
  rows,
  leftLabel,
  rightLabel,
  leftColor = "var(--color-brand-600)",
  rightColor = "var(--color-gold-500)",
  max = 100,
}: ComparisonBarsProps) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        {[
          { label: leftLabel, color: leftColor },
          { label: rightLabel, color: rightColor },
        ].map((l) => (
          <span
            key={l.label}
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-700"
          >
            <span
              aria-hidden="true"
              className="size-2.5 rounded-full"
              style={{ background: l.color }}
            />
            {l.label}
          </span>
        ))}
      </div>

      <ul className="space-y-7">
        {rows.map((r, i) => {
          const unit = r.unit ?? "%";
          return (
            <li key={r.metric}>
              <p className="mb-2.5 text-sm font-medium text-ink-800">
                {r.metric}
              </p>

              {[
                { label: leftLabel, value: r.left, color: leftColor },
                { label: rightLabel, value: r.right, color: rightColor },
              ].map((bar, bi) => (
                <div key={bar.label} className="mb-1.5 flex items-center gap-3">
                  <span className="w-12 shrink-0 text-xs text-ink-500">
                    {bar.label}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-ink-100">
                    <div
                      className="chart-wipe h-full rounded-full"
                      style={
                        {
                          width: `${Math.min((bar.value / max) * 100, 100)}%`,
                          background: bar.color,
                          "--grow-delay": `${i * 70 + bi * 110}ms`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                  <span className="tabular w-14 shrink-0 text-end text-sm font-semibold text-ink-800">
                    {bar.value}
                    {unit}
                  </span>
                </div>
              ))}

              {r.note ? (
                <p className="mt-2 border-s-2 border-gold-300 ps-3 text-xs leading-relaxed text-ink-600">
                  {r.note}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
