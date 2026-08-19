import { ICONS, type IconName } from "./icons";

export interface JourneyStep {
  icon: IconName;
  label: string;
}

/**
 * Compact left-to-right progression used in the hero: the path a person's money
 * can take, from cash through to wider financial opportunities.
 *
 * Static and server-rendered — it is a diagram, not a control.
 */
export function JourneyStrip({
  steps,
  tone = "dark",
}: {
  steps: JourneyStep[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";

  return (
    <ol className="flex flex-wrap items-stretch gap-2 sm:gap-3">
      {steps.map((step, i) => {
        const Icon = ICONS[step.icon];
        const isLast = i === steps.length - 1;
        return (
          <li key={step.label} className="flex items-center gap-2 sm:gap-3">
            <div
              className={`flex min-w-[104px] flex-1 flex-col items-center gap-2 rounded-xl border px-3 py-4 text-center sm:min-w-[128px] ${
                dark
                  ? isLast
                    ? "border-gold-400/50 bg-gold-400/10"
                    : "border-white/15 bg-white/5"
                  : isLast
                    ? "border-gold-300 bg-gold-100/60"
                    : "border-ink-200 bg-white"
              }`}
            >
              <span
                className={`inline-flex size-9 items-center justify-center rounded-lg ${
                  dark
                    ? isLast
                      ? "bg-gold-400/20 text-gold-300"
                      : "bg-white/10 text-brand-100"
                    : isLast
                      ? "bg-gold-400/20 text-gold-600"
                      : "bg-brand-50 text-brand-700"
                }`}
              >
                <Icon aria-hidden="true" className="size-4.5" />
              </span>
              <span
                className={`text-xs leading-tight font-medium ${
                  dark ? "text-white" : "text-ink-900"
                }`}
              >
                {step.label}
              </span>
            </div>

            {!isLast ? (
              <span
                aria-hidden="true"
                className={`hidden text-lg sm:block ${
                  dark ? "text-white/30" : "text-ink-300"
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
