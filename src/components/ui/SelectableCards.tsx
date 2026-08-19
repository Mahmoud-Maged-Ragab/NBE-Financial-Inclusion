"use client";

import { useId, useState } from "react";
import { ICONS, type IconName } from "./icons";

export interface SelectableItem {
  id: string;
  icon: IconName;
  title: string;
  summary: string;
  detail: string;
  points?: string[];
}

interface SelectableCardsProps {
  items: SelectableItem[];
  /** Accessible name for the tablist. */
  ariaLabel: string;
  /** Cards per row on large screens. */
  columns?: 2 | 3 | 4;
}

/**
 * A row of cards where selecting one opens a detail panel beneath.
 * Implemented as a tablist so keyboard and screen reader users get the same
 * behaviour as pointer users.
 */
export function SelectableCards({
  items,
  ariaLabel,
  columns = 4,
}: SelectableCardsProps) {
  const [active, setActive] = useState(0);
  const baseId = useId();

  const cols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2 lg:grid-cols-4";

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % items.length
        : (active - 1 + items.length) % items.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  const current = items[active];

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
        className={`grid grid-cols-1 gap-4 ${cols}`}
      >
        {items.map((item, i) => {
          const selected = i === active;
          const Icon = ICONS[item.icon];
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`h-full rounded-xl border p-6 text-start transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)] ${
                selected
                  ? "border-brand-700 bg-brand-700 text-white shadow-[0_12px_32px_-12px_rgba(15,70,52,0.4)]"
                  : "border-ink-200 bg-white hover:border-brand-200"
              }`}
            >
              <span
                className={`inline-flex size-11 items-center justify-center rounded-lg transition-colors ${
                  selected
                    ? "bg-white/15 text-white"
                    : "bg-brand-50 text-brand-700"
                }`}
              >
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span
                className={`mt-4 block text-lg font-semibold ${
                  selected ? "text-white" : "text-ink-900"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`mt-1.5 block text-sm leading-relaxed ${
                  selected ? "text-brand-100" : "text-ink-600"
                }`}
              >
                {item.summary}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-6 rounded-xl border border-ink-200 bg-ink-50 p-6 sm:p-8"
      >
        <h3 className="text-xl font-semibold text-ink-900">{current.title}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-pretty text-ink-700">
          {current.detail}
        </p>
        {current.points ? (
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {current.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-ink-700">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400"
                />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
