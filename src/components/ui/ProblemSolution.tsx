import { ArrowRight } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface ProblemSolutionItem {
  icon: IconName;
  problem: string;
  solution: string;
}

/**
 * Pairs each barrier with a recognised response, so the page reads as a route
 * forward rather than a list of complaints.
 */
export function ProblemSolution({
  title,
  items,
  problemLabel,
  solutionLabel,
  accent = false,
}: {
  title: string;
  items: ProblemSolutionItem[];
  problemLabel: string;
  solutionLabel: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-xl border p-6 sm:p-8 ${
        accent ? "border-brand-200 bg-brand-50" : "border-ink-200 bg-white"
      }`}
    >
      <h3 className="text-2xl font-semibold text-ink-900">{title}</h3>

      <ul className="mt-6 space-y-6">
        {items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <li key={item.problem} className="flex gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-200">
                <Icon aria-hidden="true" className="size-4.5" />
              </span>

              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                  {problemLabel}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-ink-900">
                  {item.problem}
                </p>

                <p className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.12em] text-brand-600 uppercase">
                  <ArrowRight
                    aria-hidden="true"
                    className="size-3 rtl:rotate-180"
                  />
                  {solutionLabel}
                </p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-600">
                  {item.solution}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
