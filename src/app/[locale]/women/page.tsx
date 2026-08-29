import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard, StatCard } from "@/components/ui/Card";
import { TrendChart } from "@/components/charts/TrendChart";
import { ComparisonBars } from "@/components/charts/BarChart";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import type { SourceId } from "@/lib/sources";
import { WOMEN_STATS, WOMEN_TREND } from "@/lib/data";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/women">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "women");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/women"),
  };
}

export default async function WomenPage({
  params,
}: PageProps<"/[locale]/women">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "women");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Headline -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.headline.eyebrow}
            title={t.headline.title}
            description={t.headline.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WOMEN_STATS.map((s, i) => (
            <Reveal key={s.label.en} delay={i * 80}>
              <StatCard
                value={s.value}
                unit={s.unit}
                decimals={s.decimals}
                label={s.label[locale]}
                detail={s.detail?.[locale]}
                source={s.source}
                emphasis={i === 0}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Trend -------- */}
      <Section muted>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <Card>
              <h3 className="mb-2 text-base font-semibold text-ink-900">
                {t.trend.chartTitle}
              </h3>
              <p className="mb-6 text-sm text-ink-600">{t.trend.chartNote}</p>
              <TrendChart
                data={WOMEN_TREND as unknown as Record<string, number>[]}
                xKey="year"
                series={[
                  {
                    key: "value",
                    label: t.trend.seriesLabel,
                    color: "var(--color-brand-600)",
                  },
                ]}
                max={60}
                caption={t.trend.caption}
              />
              <div className="mt-5">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeader
              eyebrow={t.trend.eyebrow}
              title={t.trend.title}
              description={t.trend.description}
            />
            <p className="mt-6 leading-relaxed text-ink-700">{t.trend.body1}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.trend.body2}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <SourceBadge source="cbeInclusion2026" />
              <SourceBadge source="findexApi" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- The gap -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.gap.eyebrow}
            title={t.gap.title}
            description={t.gap.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <Card>
              <ComparisonBars
                rows={[
                  {
                    metric: t.gap.rows.egypt2024,
                    left: 40.2,
                    right: 46.0,
                    note: t.gap.rows.egypt2024Note,
                  },
                  {
                    metric: t.gap.rows.egypt2021,
                    left: 24.2,
                    right: 30.6,
                    note: t.gap.rows.egypt2021Note,
                  },
                  {
                    metric: t.gap.rows.kenya,
                    left: 86.5,
                    right: 93.9,
                    note: t.gap.rows.kenyaNote,
                  },
                ]}
                leftLabel={c.ui.women}
                rightLabel={c.ui.men}
                leftColor="var(--color-gold-500)"
                rightColor="var(--color-brand-600)"
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <p className="leading-relaxed text-ink-700">{t.gap.body1}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.gap.body2}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.gap.body3}</p>
            <div className="mt-6">
              <SourceBadge source="findex2025" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- Dimensions -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.dimensions.eyebrow}
            title={t.dimensions.title}
            description={t.dimensions.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.dimensions.items.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <FeatureCard
                icon={ICONS[d.icon as keyof typeof ICONS]}
                title={d.title}
              >
                {d.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <Card className="mt-8 border-gold-200 bg-gold-100/50">
            <p className="leading-relaxed text-pretty text-ink-800">
              <strong className="font-semibold">
                {t.dimensions.note.label}
              </strong>{" "}
              {t.dimensions.note.body}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* -------- Policy -------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.policy.eyebrow}
              title={t.policy.title}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5">
              {t.policy.items.map((item) => (
                <Card key={item.title}>
                  <h3 className="text-base font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {item.body}
                  </p>
                  <div className="mt-4">
                    <SourceBadge source={item.source as SourceId} />
                  </div>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/small-business"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/egypt-vs-kenya"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
