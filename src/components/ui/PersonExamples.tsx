import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ICONS, type IconName } from "./icons";

export interface PersonExample {
  id: string;
  icon: string;
  who: string;
  without: string;
  with: string;
}

interface PersonExamplesProps {
  items: PersonExample[];
  withoutLabel: string;
  withLabel: string;
}

/**
 * Short before-and-after sketches of everyday situations.
 *
 * The two halves sit side by side on wide screens and stack on narrow ones,
 * with the arrow rotating under RTL so the direction of change still reads
 * correctly.
 */
export function PersonExamples({
  items,
  withoutLabel,
  withLabel,
}: PersonExamplesProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => {
        const Icon = ICONS[item.icon as IconName];
        return (
          <li key={item.id}>
            <Reveal delay={(i % 3) * 70}>
              <div className="group rounded-xl border border-ink-200 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.2)]">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold text-ink-900">
                    {item.who}
                  </h3>
                </div>

                <div className="mt-5 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
                  <div className="rounded-lg bg-ink-50 p-4">
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-500 uppercase">
                      {withoutLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {item.without}
                    </p>
                  </div>

                  <ArrowRight
                    aria-hidden="true"
                    className="mx-auto size-5 shrink-0 rotate-90 text-gold-500 sm:rotate-0 rtl:sm:rotate-180"
                  />

                  <div className="rounded-lg bg-brand-50 p-4">
                    <p className="text-xs font-semibold tracking-[0.12em] text-brand-700 uppercase">
                      {withLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">
                      {item.with}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}
