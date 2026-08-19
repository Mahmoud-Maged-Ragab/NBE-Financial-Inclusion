import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { SOURCE_CATEGORIES, SOURCE_LIST } from "@/lib/sources";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sources">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "sources");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/sources"),
  };
}

export default async function SourcesPage({
  params,
}: PageProps<"/[locale]/sources">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "sources");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Method -------- */}
      {/* <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <SectionHeader eyebrow={t.method.eyebrow} title={t.method.title} />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-5 sm:grid-cols-2">
              {t.method.items.map((m) => (
                <Card key={m.t} className="h-full">
                  <h3 className="text-base font-semibold text-ink-900">
                    {m.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {m.b}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </Section> */}

      {/* -------- The sources -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={`${SOURCE_LIST.length} ${t.list.eyebrowSuffix}`}
            title={t.list.title}
            description={t.list.description}
          />
        </Reveal>

        <div className="mt-12 space-y-12">
          {SOURCE_CATEGORIES.map((category) => {
            const items = SOURCE_LIST.filter((s) => s.category === category);
            if (items.length === 0) return null;

            return (
              <Reveal key={category} as="section">
                <div className="flex items-baseline gap-4">
                  <h2 className="text-xl font-semibold text-ink-900">
                    {t.categories[category]}
                  </h2>
                  <span aria-hidden="true" className="h-px flex-1 bg-ink-200" />
                  <span className="tabular text-sm text-ink-500">
                    {items.length}
                  </span>
                </div>

                <ul className="mt-5 space-y-4">
                  {items.map((s) => (
                    <li key={s.id}>
                      <Card interactive>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0">
                            <h3
                              lang="en"
                              dir="ltr"
                              className="text-base font-semibold text-ink-900 rtl:text-end"
                            >
                              {s.title}
                            </h3>
                            <p className="mt-1 text-sm text-ink-600">
                              {s.publisher[locale]}
                            </p>
                            <p className="mt-2 inline-block rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700">
                              {s.period[locale]}
                            </p>
                            {s.note ? (
                              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-600">
                                {s.note[locale]}
                              </p>
                            ) : null}
                          </div>

                          <a
                            href={s.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-ink-200 px-4 py-2.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
                          >
                            {c.ui.visitSource}
                            <ExternalLink
                              aria-hidden="true"
                              className="size-3.5"
                            />
                            <span className="sr-only">
                              — {s.title} {c.ui.opensInNewTab}
                            </span>
                          </a>
                        </div>
                      </Card>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* -------- Limitations -------- */}
      {/* <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.limits.eyebrow}
            title={t.limits.title}
            description={t.limits.description}
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.limits.items.map((item, i) => (
            <Reveal key={item.t} delay={i * 70}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-ink-900">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {item.b}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section> */}

      <BankAwarenessCTA />
    </>
  );
}
