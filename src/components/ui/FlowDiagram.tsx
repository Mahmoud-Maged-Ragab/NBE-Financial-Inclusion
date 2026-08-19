"use client";

import { useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface FlowStep {
  id: string;
  icon: IconName;
  label: string;
  detail: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  caption?: string;
  /** Template such as "Stage {current} of {total}". */
  stageLabel: string;
}

/**
 * A left-to-right progression (top-to-bottom on small screens) where each stage
 * can be selected to read what it involves.
 */
export function FlowDiagram({
  steps,
  caption,
  stageLabel,
}: FlowDiagramProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const forward = e.key === "ArrowRight" || e.key === "ArrowDown";
    const next = forward
      ? (active + 1) % steps.length
      : (active - 1 + steps.length) % steps.length;
    setActive(next);
    document.getElementById(`${baseId}-step-${next}`)?.focus();
  };

  return (
    <div>
      <ol
        role="tablist"
        aria-label={caption ?? stageLabel}
        onKeyDown={onKeyDown}
        className="flex flex-col gap-2 lg:flex-row lg:items-stretch"
      >
        {steps.map((step, i) => {
          const Icon = ICONS[step.icon];
          const selected = i === active;
          return (
            <li
              key={step.id}
              // The list item sits between the tablist and its tabs, so it is
              // removed from the accessibility tree to keep the roles valid.
              role="presentation"
              className="flex items-center gap-2 lg:flex-1"
            >
              <button
                id={`${baseId}-step-${i}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`flex w-full flex-1 flex-col items-center gap-2.5 rounded-xl border px-4 py-5 text-center transition-[background-color,border-color,transform] duration-300 ${
                  selected
                    ? "-translate-y-0.5 border-brand-700 bg-brand-700 text-white"
                    : "border-ink-200 bg-white text-ink-800 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                <span
                  className={`inline-flex size-10 items-center justify-center rounded-full ${
                    selected
                      ? "bg-white/15 text-white"
                      : "bg-brand-50 text-brand-700"
                  }`}
                >
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <span className="text-sm leading-tight font-semibold">
                  {step.label}
                </span>
              </button>

              {i < steps.length - 1 ? (
                <ChevronRight
                  aria-hidden="true"
                  className="size-5 shrink-0 rotate-90 text-ink-300 lg:rotate-0 lg:rtl:rotate-180"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-step-${active}`}
        className="mt-6 rounded-xl border border-ink-200 bg-ink-50 p-6"
      >
        <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
          {stageLabel
            .replace("{current}", String(active + 1))
            .replace("{total}", String(steps.length))}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900">
          {steps[active].label}
        </h3>
        <p className="mt-2 max-w-3xl leading-relaxed text-pretty text-ink-700">
          {steps[active].detail}
        </p>
      </div>

      {caption ? (
        <p className="mt-3 text-sm text-ink-500">{caption}</p>
      ) : null}
    </div>
  );
}
