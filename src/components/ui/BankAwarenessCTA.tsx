import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { locale as rootLocale } from "next/root-params";
import { Container } from "./Section";
import { getCommon } from "@/lib/i18n/dictionary";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n/config";

/**
 * The consistent closing call to action used at the end of the major pages.
 *
 * Deliberately informational: it points at explanations, not at products, and
 * carries the site's educational disclaimer.
 */
export async function BankAwarenessCTA() {
  const current = ((await rootLocale()) ?? DEFAULT_LOCALE) as Locale;
  const dict = getCommon(current);
  const cta = dict.cta.bankAwareness;

  const links = [
    { href: "/banking", label: cta.exploreBanking, primary: true },
    { href: "/digital-finance", label: cta.learnDigital, primary: false },
    { href: "/egypt-vs-kenya", label: cta.compare, primary: false },
  ];

  return (
    <section className="bg-brand-900 text-white">
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {cta.title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-pretty text-brand-100">
            {cta.description}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((l) => (
            <Link
              key={l.href}
              href={localePath(current, l.href)}
              className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors ${
                l.primary
                  ? "bg-white text-brand-800 hover:bg-gold-200"
                  : "border border-white/30 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {l.label}
              {l.primary ? (
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              ) : null}
            </Link>
          ))}
        </div>

        <p className="mt-8 flex max-w-2xl items-start gap-2.5 text-xs leading-relaxed text-brand-200">
          <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {dict.disclaimer.short}
        </p>
      </Container>
    </section>
  );
}
