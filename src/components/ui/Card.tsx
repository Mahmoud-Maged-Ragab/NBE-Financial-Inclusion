import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedCounter } from "./AnimatedCounter";
import { SourceBadge } from "./SourceBadge";
import type { SourceId } from "@/lib/sources";

export function Card({
  children,
  className = "",
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border border-ink-200 bg-white p-6 ${
        interactive
          ? "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface StatCardProps {
  value: number;
  unit?: string;
  decimals?: number;
  label: string;
  detail?: string;
  source: SourceId;
  /** Optional override; the badge otherwise shows the source period. */
  period?: string;
  emphasis?: boolean;
}

/** A single figure with its label and its citation. */
export function StatCard({
  value,
  unit = "",
  decimals = 0,
  label,
  detail,
  source,
  period,
  emphasis = false,
}: StatCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-xl border p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)] ${
        emphasis
          ? "border-brand-700 bg-brand-700 text-white"
          : "border-ink-200 bg-white"
      }`}
    >
      <div
        className={`text-4xl font-semibold tracking-tight sm:text-5xl ${
          emphasis ? "text-white" : "text-brand-700"
        }`}
      >
        <AnimatedCounter value={value} decimals={decimals} suffix={unit} />
      </div>
      <p
        className={`mt-3 text-sm font-medium ${
          emphasis ? "text-brand-50" : "text-ink-900"
        }`}
      >
        {label}
      </p>
      {detail ? (
        <p
          className={`mt-2 text-sm leading-relaxed ${
            emphasis ? "text-brand-100" : "text-ink-600"
          }`}
        >
          {detail}
        </p>
      ) : null}
      <div className="mt-auto pt-4">
        <SourceBadge
          source={source}
          period={period}
          className={emphasis ? "border-white/25 bg-white/10 text-brand-50" : ""}
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  children,
  className = "",
}: FeatureCardProps) {
  return (
    <Card interactive className={`group h-full ${className}`}>
      <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink-900">{title}</h3>
      <div className="mt-2 text-sm leading-relaxed text-ink-600">
        {children}
      </div>
    </Card>
  );
}
