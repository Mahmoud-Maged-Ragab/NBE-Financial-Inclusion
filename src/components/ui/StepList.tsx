import { ICONS, type IconName } from "./icons";

export interface Step {
  icon: IconName;
  title: string;
  body: string;
}

/**
 * A numbered sequence of steps, used for the account-opening process and the
 * "how a bank can help" journey. Vertical on small screens, a connected row on
 * large ones.
 */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => {
        const Icon = ICONS[step.icon];
        return (
          <li
            key={step.title}
            className="group relative h-full rounded-xl border border-ink-200 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span className="tabular text-sm font-semibold text-gold-500">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold text-ink-900">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {step.body}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

/** Emphasised note used for safety and "check with the bank" callouts. */
export function Callout({
  icon,
  title,
  children,
  tone = "gold",
}: {
  icon: IconName;
  title: string;
  children: React.ReactNode;
  tone?: "gold" | "brand";
}) {
  const Icon = ICONS[icon];
  return (
    <div
      className={`rounded-xl border p-6 ${
        tone === "gold"
          ? "border-gold-200 bg-gold-100/50"
          : "border-brand-200 bg-brand-50"
      }`}
    >
      <p className="flex items-center gap-2.5 text-base font-semibold text-ink-900">
        <span
          className={`inline-flex size-9 shrink-0 items-center justify-center rounded-lg ${
            tone === "gold"
              ? "bg-gold-400/25 text-gold-600"
              : "bg-brand-700 text-white"
          }`}
        >
          <Icon aria-hidden="true" className="size-4" />
        </span>
        {title}
      </p>
      <div className="mt-3 text-sm leading-relaxed text-ink-700">
        {children}
      </div>
    </div>
  );
}
