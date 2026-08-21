import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { TrendChart } from "@/components/charts/TrendChart";
import { ComparisonBars } from "@/components/charts/BarChart";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { EgyptFlag, IndiaFlag } from "@/components/ui/Flags";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import type { SourceId } from "@/lib/sources";
import {
  ACCOUNT_OWNERSHIP_SERIES,
  EGYPT_INDIA_COMPARISON,
} from "@/lib/data";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/egypt-vs-india">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "egyptVsIndia");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/egypt-vs-india"),
  };
}

export default async function EgyptVsIndiaPage({
  params,
}: PageProps<"/[locale]/egypt-vs-india">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "egyptVsIndia");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      >
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-4">
            <EgyptFlag className="h-11 w-auto rounded shadow-lg" />
            <div>
              <p className="text-sm text-brand-200">{c.ui.egypt}</p>
              <p className="tabular text-3xl font-semibold">
                <AnimatedCounter value={43.1} decimals={1} suffix="%" />
              </p>
            </div>
          </div>
          <div className="h-12 w-px bg-white/20" aria-hidden="true" />
          <div className="flex items-center gap-4">
            <IndiaFlag className="h-11 w-auto rounded shadow-lg" />
            <div>
              <p className="text-sm text-brand-200">{c.ui.india}</p>
              <p className="tabular text-3xl font-semibold">
                <AnimatedCounter value={89.0} decimals={1} suffix="%" />
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-brand-200">
            {t.hero.caption}
          </p>
        </div>
      </PageHero>

      {/* -------- The thesis -------- */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold tracking-[0.16em] text-brand-600 uppercase">
              {t.thesis.eyebrow}
            </p>
            <blockquote className="mt-6">
              <p className="text-2xl leading-relaxed text-balance text-ink-900 sm:text-3xl">
                {t.thesis.quote}
              </p>
            </blockquote>
            <p className="mt-8 leading-relaxed text-pretty text-ink-600">
              {t.thesis.body}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* -------- Trend -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.trend.eyebrow}
            title={t.trend.title}
            description={t.trend.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <Card>
            <TrendChart
              data={
                ACCOUNT_OWNERSHIP_SERIES as unknown as Record<string, number>[]
              }
              xKey="year"
              series={[
                {
                  key: "egypt",
                  label: c.ui.egypt,
                  color: "var(--color-brand-600)",
                },
                {
                  key: "india",
                  label: c.ui.india,
                  color: "var(--color-gold-500)",
                },
              ]}
              caption={t.trend.caption}
            />
            <div className="mt-5">
              <SourceBadge source="findexApi" />
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* -------- Full comparison -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.comparison.eyebrow}
            title={t.comparison.title}
            description={t.comparison.description}
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <Card className="p-6 sm:p-8">
            <ComparisonBars
              rows={EGYPT_INDIA_COMPARISON.map((r) => ({
                metric: r.metric[locale],
                left: r.egypt,
                right: r.india,
                unit: r.unit,
                note: r.note?.[locale],
              }))}
              leftLabel={c.ui.egypt}
              rightLabel={c.ui.india}
            />
            <div className="mt-8">
              <SourceBadge source="findexApi" />
            </div>
          </Card>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Card className="border-brand-200 bg-brand-50">
              <h3 className="text-lg font-semibold text-ink-900">
                {t.comparison.egyptLeads.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">
                {t.comparison.egyptLeads.body}
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-ink-900">
                {t.comparison.indiaLeads.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">
                {t.comparison.indiaLeads.body}
              </p>
            </Card>
          </div>
        </Reveal>
      </Section>

      {/* -------- The reversal -------- */}
      <Section muted>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.reversal.eyebrow}
              title={t.reversal.title}
              description={t.reversal.description}
            />
            <p className="mt-6 leading-relaxed text-ink-700">
              {t.reversal.body1}
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              {t.reversal.body2}
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              {t.reversal.body3}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <Card>
              <h3 className="mb-6 text-base font-semibold text-ink-900">
                {t.reversal.chartTitle}
              </h3>
              <ComparisonBars
                rows={[
                  { metric: t.reversal.rows.phone, left: 84.6, right: 66.5 },
                  {
                    metric: t.reversal.rows.smartphone,
                    left: 55.7,
                    right: 42.0,
                  },
                  {
                    metric: t.reversal.rows.account,
                    left: 43.1,
                    right: 89.0,
                    note: t.reversal.rows.accountNote,
                  },
                  { metric: t.reversal.rows.pay, left: 18.5, right: 27.7 },
                ]}
                leftLabel={c.ui.egypt}
                rightLabel={c.ui.india}
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* -------- What India did -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.mechanism.eyebrow}
            title={t.mechanism.title}
            description={t.mechanism.description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.mechanism.items.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]">
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                  <div className="mt-auto pt-4">
                    <SourceBadge source={item.source as SourceId} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <Card className="mt-8 border-gold-200 bg-gold-100/50">
            <p className="leading-relaxed text-pretty text-ink-800">
              <strong className="font-semibold">
                {t.mechanism.note.label}
              </strong>{" "}
              {t.mechanism.note.body}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* -------- Caveats -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.caveats.eyebrow}
            title={t.caveats.title}
            description={t.caveats.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {t.caveats.items.map((cv, i) => (
            <Reveal key={cv.t} delay={i * 80}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-ink-900">{cv.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {cv.b}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap gap-2">
            <SourceBadge source="findexApi" />
            <SourceBadge source="cbeInclusion2026" />
            <SourceBadge source="pmjdy" />
          </div>
        </Reveal>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{ href: localePath(locale, "/future"), label: t.cta.primary }}
        secondary={{
          href: localePath(locale, "/sources"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
