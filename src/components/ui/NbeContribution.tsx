import { Landmark } from "lucide-react";
import { SourceBadge } from "./SourceBadge";
import { ICONS, type IconName } from "./icons";
import type { SourceId } from "@/lib/sources";

/**
 * What NBE reports doing about the solution just described.
 *
 * Every point in `points` is reproduced from a published NBE document, and the
 * panel always carries its sources — the page states what a bank says about
 * itself, so the citation belongs beside the claim rather than in a footnote.
 */
export function NbeContribution({
  label,
  points,
  note,
  sources,
}: {
  label: string;
  points: string[];
  /** Caveat shown under the points, e.g. why a figure is from 2023. */
  note?: string;
  sources: SourceId[];
}) {
  return (
    <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 sm:p-7">
      <p className="flex items-center gap-2.5 text-sm font-semibold text-brand-800">
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white">
          <Landmark aria-hidden="true" className="size-4" />
        </span>
        {label}
      </p>

      <ul className="mt-5 space-y-3">
        {points.map((point) => (
          <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink-700">
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {note ? (
        <p className="mt-5 border-t border-brand-200 pt-4 text-xs leading-relaxed text-ink-600">
          {note}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {sources.map((source) => (
          <SourceBadge key={source} source={source} />
        ))}
      </div>
    </div>
  );
}

/**
 * A country-wide figure shown beside NBE's own work.
 *
 * Held in a visually separate, neutral panel because these are Central Bank of
 * Egypt indicators covering every provider — reading one as an NBE achievement
 * would misstate it.
 */
export function NationalNote({
  label,
  body,
  source,
}: {
  label: string;
  body: string;
  source: SourceId;
}) {
  return (
    <div className="rounded-xl border border-ink-200 bg-white p-5">
      <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">{body}</p>
      <div className="mt-4">
        <SourceBadge source={source} />
      </div>
    </div>
  );
}

export interface ContributionItem {
  id: string;
  icon: IconName;
  title: string;
  problem: string;
  solution: string;
  /** What NBE reports doing — sourced. */
  nbe: string;
  /** What that changes for a person. */
  helps: string;
  source: SourceId;
}

export interface ContributionLabels {
  problem: string;
  solution: string;
  nbe: string;
  helps: string;
}

/**
 * One contribution area answered in four steps: the problem, the recognised
 * response, what NBE reports doing, and what it changes for a person.
 *
 * The NBE step is the only one given a filled background, so a reader can tell
 * at a glance which sentence is a sourced claim about the bank and which are
 * the general argument around it.
 */
export function ContributionCard({
  item,
  labels,
}: {
  item: ContributionItem;
  labels: ContributionLabels;
}) {
  const Icon = ICONS[item.icon];
  return (
    <div className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <h3 className="mt-2 text-lg font-semibold text-balance text-ink-900">
          {item.title}
        </h3>
      </div>

      <dl className="mt-5 space-y-4 border-t border-ink-100 pt-5">
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
            {labels.problem}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-600">
            {item.problem}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
            {labels.solution}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-600">
            {item.solution}
          </dd>
        </div>
        <div className="rounded-lg bg-brand-50 p-4">
          <dt className="text-[11px] font-semibold tracking-[0.12em] text-brand-700 uppercase">
            {labels.nbe}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-800">
            {item.nbe}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.12em] text-gold-600 uppercase">
            {labels.helps}
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-700">
            {item.helps}
          </dd>
        </div>
      </dl>

      <div className="mt-auto pt-5">
        <SourceBadge source={item.source} />
      </div>
    </div>
  );
}
