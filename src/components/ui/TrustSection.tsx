import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { locale as rootLocale } from "next/root-params";
import { Section, SectionHeader } from "./Section";
import { Reveal } from "./Reveal";
import { getCommon } from "@/lib/i18n/dictionary";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/lib/i18n/config";

/** "Learn from reliable sources" — the credibility block. */
export async function TrustSection({ muted = true }: { muted?: boolean }) {
  const current = ((await rootLocale()) ?? DEFAULT_LOCALE) as Locale;
  const dict = getCommon(current);

  return (
    <Section muted={muted}>
      <Reveal>
        <SectionHeader
          eyebrow={dict.trust.eyebrow}
          title={dict.trust.title}
          description={dict.trust.description}
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {dict.trust.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 80}>
            <div className="h-full rounded-xl border border-ink-200 bg-white p-6">
              <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <BadgeCheck aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {item.role}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-8 text-center">
          <Link
            href={localePath(current, "/sources")}
            className="group inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            {dict.trust.seeAll}
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
