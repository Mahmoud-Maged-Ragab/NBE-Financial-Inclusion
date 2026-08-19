"use client";

import { useId, useState } from "react";
import { Banknote, Smartphone } from "lucide-react";

export interface Situation {
  id: string;
  label: string;
  prompt: string;
  cash: string;
  digital: string;
}

export interface ScenarioLabels {
  choose: string;
  listName: string;
  cashTitle: string;
  digitalTitle: string;
  disclaimer: string;
}

/**
 * Compares a cash-only and a digitally connected version of the same business
 * across a set of everyday situations.
 */
export function BusinessScenario({
  situations,
  labels,
}: {
  situations: Situation[];
  labels: ScenarioLabels;
}) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const s = situations[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const forward = e.key === "ArrowDown" || e.key === "ArrowRight";
    const next = forward
      ? (active + 1) % situations.length
      : (active - 1 + situations.length) % situations.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-8">
      <div>
        <p className="mb-3 text-sm font-medium text-ink-600">{labels.choose}</p>
        <ul
          role="tablist"
          aria-label={labels.listName}
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="flex flex-col gap-2"
        >
          {situations.map((item, i) => (
            // Removed from the accessibility tree so tablist owns the tabs.
            <li key={item.id} role="presentation">
              <button
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`${baseId}-panel`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                className={`w-full rounded-lg border px-4 py-3 text-start text-sm font-medium transition-colors ${
                  i === active
                    ? "border-brand-700 bg-brand-700 text-white"
                    : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
      >
        <div className="rounded-xl border border-ink-200 bg-ink-50 p-5">
          <p className="text-sm leading-relaxed text-ink-700">{s.prompt}</p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-ink-200 bg-white p-6">
            <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-800">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-ink-100 text-ink-600">
                <Banknote aria-hidden="true" className="size-4" />
              </span>
              {labels.cashTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.cash}</p>
          </div>

          <div className="rounded-xl border border-brand-200 bg-brand-50 p-6">
            <p className="flex items-center gap-2.5 text-sm font-semibold text-ink-900">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white">
                <Smartphone aria-hidden="true" className="size-4" />
              </span>
              {labels.digitalTitle}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              {s.digital}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-ink-500">
          {labels.disclaimer}
        </p>
      </div>
    </div>
  );
}
