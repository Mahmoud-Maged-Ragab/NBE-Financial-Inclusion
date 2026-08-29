import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard, StatCard } from "@/components/ui/Card";
import { FlowDiagram, type FlowStep } from "@/components/ui/FlowDiagram";
import {
  BusinessScenario,
  type Situation,
} from "@/components/ui/BusinessScenario";
import { ComparisonBars } from "@/components/charts/BarChart";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import type { SourceId } from "@/lib/sources";
import { SME_STATS } from "@/lib/data";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/small-business">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "smallBusiness");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/small-business"),
  };
}

export default async function SmallBusinessPage({
  params,
}: PageProps<"/[locale]/small-business">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "smallBusiness");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Scale -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.scale.eyebrow}
            title={t.scale.title}
            description={t.scale.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SME_STATS.map((s, i) => (
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

        <Reveal delay={120}>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
            <Card>
              <h3 className="mb-6 text-base font-semibold text-ink-900">
                {t.scale.chartTitle}
              </h3>
              <ComparisonBars
                rows={[
                  {
                    metric: t.scale.rows.business,
                    left: 3.6,
                    right: 7.5,
                    note: t.scale.rows.businessNote,
                  },
                  { metric: t.scale.rows.formal, left: 56.1, right: 81.9 },
                  {
                    metric: t.scale.rows.saved,
                    left: 23.0,
                    right: 70.2,
                    note: t.scale.rows.savedNote,
                  },
                ]}
                leftLabel={c.ui.egypt}
                rightLabel={c.ui.kenya}
                max={85}
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>

            <div className="lg:pt-4">
              <p className="leading-relaxed text-ink-700">{t.scale.body1}</p>
              <p className="mt-4 leading-relaxed text-ink-700">
                {t.scale.body2}
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                {t.scale.body3}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* -------- Growth chain -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.chain.eyebrow}
            title={t.chain.title}
            description={t.chain.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <FlowDiagram
            steps={t.chain.steps as FlowStep[]}
            stageLabel={c.ui.stageOf}
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6 flex flex-wrap gap-2">
            <SourceBadge source="findexApi" />
            <SourceBadge source="msmeda" />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-500">
            {t.chain.note}
          </p>
        </Reveal>
      </Section>

      {/* -------- Scenario -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.scenario.eyebrow}
            title={t.scenario.title}
            description={t.scenario.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <Card className="p-6 sm:p-8">
            <BusinessScenario
              situations={t.scenario.situations as Situation[]}
              labels={t.scenario.labels}
            />
          </Card>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6 flex flex-wrap gap-2">
            <SourceBadge source="findexApi" />
            <SourceBadge source="pwcShadow" />
            <SourceBadge source="oecdSme" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Segments -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.segments.eyebrow}
            title={t.segments.title}
            description={t.segments.description}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.segments.items.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <FeatureCard
                icon={ICONS[s.icon as keyof typeof ICONS]}
                title={s.title}
              >
                {s.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Policy -------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.policy.eyebrow}
              title={t.policy.title}
            />
            <p className="mt-6 leading-relaxed text-ink-700">
              {t.policy.intro}
            </p>
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
          href: localePath(locale, "/egypt-vs-kenya"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/future"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
