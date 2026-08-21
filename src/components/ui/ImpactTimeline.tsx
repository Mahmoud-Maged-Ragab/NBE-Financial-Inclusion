import { Reveal } from "./Reveal";
import { SourceBadge } from "./SourceBadge";
import type { TimelineEntry } from "@/lib/nbeImpact";
import type { Locale } from "@/lib/i18n/config";

interface ImpactTimelineProps {
  entries: TimelineEntry[];
  locale: Locale;
  className?: string;
}

/**
 * A vertical timeline of dated, sourced milestones.
 *
 * The spine sits on the inline start edge, so it moves to the right-hand side
 * under RTL without any direction-specific markup.
 */
export function ImpactTimeline({
  entries,
  locale,
  className = "",
}: ImpactTimelineProps) {
  return (
    <ol className={`relative ${className}`}>
      {/* The spine, drawn behind the markers. */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 start-[7px] w-px bg-ink-200"
      />

      {entries.map((entry, i) => (
        <li key={`${entry.year}-${i}`} className="relative ps-8 pb-10 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-1.5 start-0 size-[15px] rounded-full border-2 border-brand-700 bg-white"
          />
          <Reveal delay={i * 70}>
            <p className="tabular text-sm font-semibold text-gold-500">
              {entry.year}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-ink-900">
              {entry.title[locale]}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
              {entry.body[locale]}
            </p>
            <div className="mt-3">
              <SourceBadge source={entry.source} />
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
