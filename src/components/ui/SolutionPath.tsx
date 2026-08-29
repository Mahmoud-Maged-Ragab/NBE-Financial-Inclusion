import { ArrowRight } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface SolutionPathItem {
  id: string;
  icon: IconName;
  problem: string;
  solution: string;
  benefit: string;
}

export interface SolutionPathLabels {
  problem: string;
  solution: string;
  benefit: string;
}

/**
 * Problem → solution → benefit, read across on wide screens and down on narrow
 * ones. The arrows are decorative; the reading order carries the meaning, so
 * the sequence still makes sense when they are not rendered.
 *
 * The arrow flips with the writing direction rather than being mirrored by a
 * separate Arabic asset.
 */
export function SolutionPath({
  items,
  labels,
}: {
  items: SolutionPathItem[];
  labels: SolutionPathLabels;
}) {
  return (
    <ol className="space-y-4">
      {items.map((item) => {
        const Icon = ICONS[item.icon];
        return (
          <li
            key={item.id}
            className="rounded-xl border border-ink-200 bg-white p-5 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_12px_32px_-16px_rgba(15,70,52,0.25)] sm:p-6"
          >
            <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {/* Problem */}
              <div className="flex items-start gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-600">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                    {labels.problem}
                  </p>
                  <p className="mt-0.5 text-sm font-medium text-ink-900">
                    {item.problem}
                  </p>
                </div>
              </div>

              <Arrow />

              {/* Solution */}
              <div className="rounded-lg bg-brand-50 px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-700 uppercase">
                  {labels.solution}
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink-900">
                  {item.solution}
                </p>
              </div>

              <Arrow />

              {/* Benefit */}
              <div className="rounded-lg border border-gold-200 bg-gold-100/50 px-4 py-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-gold-600 uppercase">
                  {labels.benefit}
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink-900">
                  {item.benefit}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** Points across the row on wide screens, and down the stack on narrow ones. */
function Arrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="mx-auto size-4 rotate-90 text-ink-300 md:rotate-0 md:rtl:rotate-180"
    />
  );
}
