import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "./Section";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
}

/** Shared hero band for every interior page. */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="grid-field absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-24 -end-24 size-96 rounded-full bg-brand-700/40 blur-3xl"
      />
      <Container className="relative py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <div className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-brand-100">
          {description}
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}

interface CTAProps {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export function CTA({ title, description, primary, secondary }: CTAProps) {
  return (
    <section className="bg-brand-900 text-white">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-pretty text-brand-100">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-gold-200"
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
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
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
