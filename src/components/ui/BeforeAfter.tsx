"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ICONS, type IconName } from "./icons";

export interface BeforeAfterRow {
  aspect: string;
  before: { icon: IconName; label: string; detail: string };
  after: { icon: IconName; label: string; detail: string };
}

/**
 * Before-and-after comparison.
 *
 * Desktop shows both states across a divider. Small screens get a switch, so
 * neither column is squeezed to an unreadable width.
 */
export function BeforeAfter({
  rows,
  beforeLabel,
  afterLabel,
  beforeHeading,
  afterHeading,
  switchLabel,
}: {
  rows: BeforeAfterRow[];
  beforeLabel: string;
  afterLabel: string;
  beforeHeading: string;
  afterHeading: string;
  switchLabel: string;
}) {
  const [side, setSide] = useState<"before" | "after">("after");

  return (
    <div>
      <div
        role="tablist"
        aria-label={switchLabel}
        className="mb-6 grid grid-cols-2 gap-2 lg:hidden"
      >
        {(["before", "after"] as const).map((s) => (
          <button
            key={s}
            role="tab"
            type="button"
            aria-selected={side === s}
            onClick={() => setSide(s)}
            className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
              side === s
                ? "border-brand-700 bg-brand-700 text-white"
                : "border-ink-200 bg-white text-ink-700"
            }`}
          >
            {s === "before" ? beforeLabel : afterLabel}
          </button>
        ))}
      </div>

      {/* Column headings, desktop only */}
      <div className="mb-4 hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <p className="text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
          {beforeHeading}
        </p>
        <span className="w-5" />
        <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
          {afterHeading}
        </p>
      </div>

      <ul className="space-y-4">
        {rows.map((row) => {
          const BeforeIcon = ICONS[row.before.icon];
          const AfterIcon = ICONS[row.after.icon];
          return (
            <li
              key={row.aspect}
              className="grid items-stretch gap-3 lg:grid-cols-[1fr_auto_1fr] lg:gap-6"
            >
              <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase lg:hidden">
                {row.aspect}
              </p>

              {/* Before */}
              <div
                className={`${side === "before" ? "block" : "hidden"} h-full rounded-xl border border-ink-200 bg-ink-50 p-5 lg:block`}
              >
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-white text-ink-500 ring-1 ring-ink-200">
                    <BeforeIcon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-800">
                      {row.before.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {row.before.detail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 text-gold-400 rtl:rotate-180"
                />
              </div>

              {/* After */}
              <div
                className={`${side === "after" ? "block" : "hidden"} h-full rounded-xl border border-brand-200 bg-brand-50 p-5 lg:block`}
              >
                <div className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <AfterIcon aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">
                      {row.after.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-700">
                      {row.after.detail}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
