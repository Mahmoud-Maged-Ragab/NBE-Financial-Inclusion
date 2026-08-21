import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Question and answer list.
 *
 * Built on native `<details>`, so it opens and closes without JavaScript and
 * screen readers announce the expanded state for free. Browser find-in-page
 * also reaches answers inside closed items.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-ink-200 overflow-hidden rounded-xl border border-ink-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-start transition-colors hover:bg-ink-50 [&::-webkit-details-marker]:hidden">
            <span className="text-base font-medium text-ink-900">{item.q}</span>
            <ChevronDown
              aria-hidden="true"
              className="size-5 shrink-0 text-ink-400 transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-ink-600">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
