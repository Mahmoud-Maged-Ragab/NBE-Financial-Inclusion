import { AnimatedCounter } from "./AnimatedCounter";
import { SourceBadge } from "./SourceBadge";
import type { DatedStat } from "@/lib/nbeImpact";
import type { Locale } from "@/lib/i18n/config";

interface ImpactStatCardProps {
  stat: DatedStat;
  locale: Locale;
  /** Green fill, for the leading figure in a group. */
  emphasis?: boolean;
}

/**
 * A single NBE figure with the year it describes and its citation.
 *
 * The year sits beside the number rather than only inside the source badge,
 * so a 2023 result can never be mistaken for a current one.
 */
export function ImpactStatCard({
  stat,
  locale,
  emphasis = false,
}: ImpactStatCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-xl border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)] ${
        emphasis
          ? "border-brand-700 bg-brand-700 text-white"
          : "border-ink-200 bg-white"
      }`}
    >
      <div className="flex items-baseline gap-3">
        <span
          className={`text-4xl font-semibold tracking-tight sm:text-5xl ${
            emphasis ? "text-white" : "text-brand-700"
          }`}
        >
          <AnimatedCounter
            value={stat.value}
            decimals={stat.decimals ?? 0}
            suffix={stat.unit ?? ""}
          />
        </span>
        <span
          className={`tabular shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
            emphasis ? "bg-white/15 text-brand-50" : "bg-ink-100 text-ink-600"
          }`}
        >
          {stat.year}
        </span>
      </div>

      <p
        className={`mt-3 text-sm font-medium ${
          emphasis ? "text-brand-50" : "text-ink-900"
        }`}
      >
        {stat.label[locale]}
      </p>

      {stat.detail ? (
        <p
          className={`mt-2 text-sm leading-relaxed ${
            emphasis ? "text-brand-100" : "text-ink-600"
          }`}
        >
          {stat.detail[locale]}
        </p>
      ) : null}

      <div className="mt-auto pt-4">
        <SourceBadge
          source={stat.source}
          className={emphasis ? "border-white/25 bg-white/10 text-brand-50" : ""}
        />
      </div>
    </div>
  );
}
