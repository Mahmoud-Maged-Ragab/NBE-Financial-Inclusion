"use client";

import { useState } from "react";
import { ChevronDown, CircleAlert, Lightbulb, Target } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface Challenge {
  id: string;
  icon: IconName;
  title: string;
  problem: string;
  why: string;
  solution: string;
  /** Optional sourced figure that anchors the challenge. */
  figure?: { value: string; label: string };
}

/**
 * Problem → why it matters → possible solution, one challenge at a time.
 * Built as a disclosure list so it degrades to readable stacked content.
 */
export interface ChallengeLabels {
  problem: string;
  why: string;
  solution: string;
}

export function ChallengeList({
  items,
  labels,
}: {
  items: Challenge[];
  labels: ChallengeLabels;
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);

  return (
    <ul className="space-y-3">
      {items.map((item, index) => {
        const Icon = ICONS[item.icon];
        const isOpen = open === item.id;
        return (
          <li
            key={item.id}
            className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
              isOpen
                ? "border-brand-300 bg-white"
                : "border-ink-200 bg-white hover:border-brand-200"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`challenge-${item.id}`}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-center gap-4 px-5 py-5 text-start sm:px-6"
              >
                <span
                  className={`inline-flex size-11 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isOpen
                      ? "bg-brand-700 text-white"
                      : "bg-brand-50 text-brand-700"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="tabular me-2 text-xs font-semibold text-gold-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold text-ink-900 sm:text-lg">
                    {item.title}
                  </span>
                </span>

                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            <div id={`challenge-${item.id}`} hidden={!isOpen}>
              <div className="border-t border-ink-100 px-5 py-6 sm:px-6">
                {item.figure ? (
                  <div className="mb-6 inline-flex items-baseline gap-3 rounded-lg bg-brand-50 px-4 py-3">
                    <span className="tabular text-2xl font-semibold text-brand-700">
                      {item.figure.value}
                    </span>
                    <span className="text-sm text-ink-700">
                      {item.figure.label}
                    </span>
                  </div>
                ) : null}

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      Icon: CircleAlert,
                      heading: labels.problem,
                      body: item.problem,
                      accent: "text-ink-900",
                    },
                    {
                      Icon: Target,
                      heading: labels.why,
                      body: item.why,
                      accent: "text-ink-900",
                    },
                    {
                      Icon: Lightbulb,
                      heading: labels.solution,
                      body: item.solution,
                      accent: "text-brand-700",
                    },
                  ].map((col) => (
                    <div key={col.heading}>
                      <p
                        className={`flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase ${col.accent}`}
                      >
                        <col.Icon aria-hidden="true" className="size-4" />
                        {col.heading}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                        {col.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
