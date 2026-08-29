import { ArrowDown } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface ProblemItem {
  id: string;
  icon: IconName;
  title: string;
  body: string;
}

/**
 * One barrier, stated plainly and briefly.
 *
 * Kept visually quieter than the solution cards further down the page — the
 * problems are the setup, not the point.
 */
export function ProblemCard({ item }: { item: ProblemItem }) {
  const Icon = ICONS[item.icon];
  return (
    <div className="flex h-full gap-4 rounded-xl border border-ink-200 bg-white p-5 transition-colors duration-300 hover:border-ink-300">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-600">
        <Icon aria-hidden="true" className="size-4.5" />
      </span>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-ink-900">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
          {item.body}
        </p>
      </div>
    </div>
  );
}

export interface SolutionItem {
  id: string;
  icon: IconName;
  title: string;
  body: string;
  /** What changes for a person if this is done. */
  helps: string;
  /** Anchor to the fuller treatment further down the page, where there is one. */
  href?: string;
}

/**
 * A proposed answer: what it is, and what it changes for someone.
 *
 * The "how it helps" row is separated by a rule so the benefit can be read on
 * its own, which is how most people scan a grid of ten cards.
 */
export function SolutionCard({
  item,
  index,
  helpsLabel,
  moreLabel,
}: {
  item: SolutionItem;
  index: number;
  helpsLabel: string;
  moreLabel: string;
}) {
  const Icon = ICONS[item.icon];
  return (
    <div className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <span className="tabular text-sm font-semibold text-gold-500">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-balance text-ink-900">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.body}</p>

      <div className="mt-auto pt-5">
        <div className="border-t border-ink-100 pt-4">
          <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-600 uppercase">
            {helpsLabel}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-ink-700">
            {item.helps}
          </p>
        </div>

        {item.href ? (
          <a
            href={item.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            {moreLabel}
            <ArrowDown aria-hidden="true" className="size-3.5" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
