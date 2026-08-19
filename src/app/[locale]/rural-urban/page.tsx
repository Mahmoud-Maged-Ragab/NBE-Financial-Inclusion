import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, StatCard } from "@/components/ui/Card";
import { EgyptMap, type MapRegion } from "@/components/ui/EgyptMap";
import {
  ProblemSolution,
  type ProblemSolutionItem,
} from "@/components/ui/ProblemSolution";
import { BarChart } from "@/components/charts/BarChart";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/rural-urban">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "ruralUrban");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/rural-urban"),
  };
}

export default async function RuralUrbanPage({
  params,
}: PageProps<"/[locale]/rural-urban">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "ruralUrban");
  const c = getCommon(locale);
  const g = t.income.groups;

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- The headline gap -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.gap.eyebrow}
            title={t.gap.title}
            description={t.gap.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <StatCard
              value={39.3}
              unit="%"
              decimals={1}
              label={t.gap.stats.rural.label}
              detail={t.gap.stats.rural.detail}
              source="findexApi"
            />
          </Reveal>
          <Reveal delay={80}>
            <StatCard
              value={45.3}
              unit="%"
              decimals={1}
              label={t.gap.stats.urban.label}
              detail={t.gap.stats.urban.detail}
              source="findexApi"
            />
          </Reveal>
          <Reveal delay={160}>
            <StatCard
              value={56.7}
              unit="%"
              decimals={1}
              label={t.gap.stats.ruralShare.label}
              detail={t.gap.stats.ruralShare.detail}
              source="wdiRural"
              emphasis
            />
          </Reveal>
          <Reveal delay={240}>
            <StatCard
              value={6.56}
              decimals={2}
              label={t.gap.stats.branches.label}
              detail={t.gap.stats.branches.detail}
              source="imfFas"
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-8 rounded-xl border border-gold-200 bg-gold-100/50 p-6">
            <p className="leading-relaxed text-pretty text-ink-800">
              <strong className="font-semibold">{t.gap.callout.label}</strong>{" "}
              {t.gap.callout.body}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* -------- Map -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.map.eyebrow}
            title={t.map.title}
            description={t.map.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <Card className="p-6 sm:p-8">
            <EgyptMap
              regions={t.map.regions as MapRegion[]}
              labels={t.map.labels}
            />
          </Card>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-4 text-sm text-ink-500">{t.map.note}</p>
        </Reveal>
      </Section>

      {/* -------- Problem → solution -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.solutions.eyebrow}
            title={t.solutions.title}
            description={t.solutions.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ProblemSolution
              title={t.solutions.ruralTitle}
              items={t.solutions.rural as ProblemSolutionItem[]}
              problemLabel={c.ui.problem}
              solutionLabel={c.ui.possibleSolution}
              accent
            />
          </Reveal>
          <Reveal delay={100}>
            <ProblemSolution
              title={t.solutions.urbanTitle}
              items={t.solutions.urban as ProblemSolutionItem[]}
              problemLabel={c.ui.problem}
              solutionLabel={c.ui.possibleSolution}
            />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">
            {t.solutions.caveat}
          </p>
        </Reveal>
      </Section>

      {/* -------- Stay safe -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.safety.eyebrow}
            title={t.safety.title}
            description={t.safety.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.safety.risks.map((risk) => {
                const Icon = ICONS[risk.icon as keyof typeof ICONS];
                return (
                  <Card key={risk.title} interactive className="h-full">
                    <span className="inline-flex size-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink-900">
                      {risk.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {risk.body}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-xl border-2 border-data-6/30 bg-white p-6 sm:p-8">
              <p className="flex items-center gap-3 text-lg font-semibold text-ink-900">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-data-6/10 text-data-6">
                  <ShieldAlert aria-hidden="true" className="size-5" />
                </span>
                {t.safety.neverTitle}
              </p>
              <ul className="mt-5 grid gap-3">
                {t.safety.never.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-lg bg-ink-50 px-4 py-3 text-sm font-medium text-ink-900"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-data-6/15 text-xs font-bold text-data-6"
                    >
                      ×
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-ink-700">
                {t.safety.neverNote}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- Income is the stronger predictor -------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.income.eyebrow}
              title={t.income.title}
              description={t.income.description}
            />
            <p className="mt-6 leading-relaxed text-ink-700">{t.income.body1}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.income.body2}</p>
          </Reveal>

          <Reveal delay={120}>
            <Card>
              <h3 className="mb-6 text-base font-semibold text-ink-900">
                {t.income.chartTitle}
              </h3>
              <BarChart
                data={[
                  {
                    label: g.poorest,
                    value: 33.1,
                    color: "var(--color-data-6)",
                  },
                  { label: g.rural, value: 39.3, color: "var(--color-brand-400)" },
                  { label: g.women, value: 40.2, color: "var(--color-brand-400)" },
                  {
                    label: g.national,
                    value: 43.1,
                    color: "var(--color-gold-500)",
                  },
                  { label: g.urban, value: 45.3, color: "var(--color-brand-600)" },
                  { label: g.men, value: 46.0, color: "var(--color-brand-600)" },
                  {
                    label: g.secondary,
                    value: 48.3,
                    color: "var(--color-brand-700)",
                  },
                  {
                    label: g.richest,
                    value: 49.8,
                    color: "var(--color-brand-700)",
                  },
                ]}
                caption={t.income.chartCaption}
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/challenges"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/digital-finance"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
