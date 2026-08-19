import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Section";

/**
 * Light "continue reading" strip placed above the dark closing CTA, so a page
 * can point at the next step in the journey without two heavy bands stacking.
 */
export function NextStep({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="border-t border-ink-200 bg-white">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-balance text-ink-900">
              {title}
            </h2>
            <p className="mt-2 leading-relaxed text-pretty text-ink-600">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {primary.label}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-lg border border-ink-200 px-6 py-3.5 text-sm font-semibold text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-700"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
