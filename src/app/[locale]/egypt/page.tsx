import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, StatCard } from "@/components/ui/Card";
import { TrendChart } from "@/components/charts/TrendChart";
import { BarChart } from "@/components/charts/BarChart";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import {
  ACCOUNT_OWNERSHIP_SERIES,
  EGYPT_BARRIERS,
  EGYPT_DIGITAL_FUNNEL,
  EGYPT_GAPS,
  EGYPT_HEADLINE,
  EGYPT_USAGE,
} from "@/lib/data";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

const TONE_COLOR = {
  good: "var(--color-brand-600)",
  mixed: "var(--color-gold-500)",
  bad: "var(--color-data-6)",
} as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/egypt">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "egypt");
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: languageAlternates("/egypt"),
  };
}

export default async function EgyptPage({
  params,
}: PageProps<"/[locale]/egypt">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "egypt");
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
          {EGYPT_HEADLINE.map((s, i) => (
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
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-600">
            {t.headline.note}{" "}
            <Link
              href={localePath(locale, "/understanding") + "#measurement"}
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              {t.headline.noteLink}
            </Link>
            .
          </p>
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
                  key: "kenya",
                  label: c.ui.kenya,
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

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {t.trend.periods.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <Card
                className={`h-full ${p.accent ? "border-brand-200 bg-brand-50" : ""}`}
              >
                <h3 className="text-base font-semibold text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {p.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- The usage gap -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.funnel.eyebrow}
            title={t.funnel.title}
            description={t.funnel.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <Reveal>
            <Card>
              <ul className="space-y-1">
                {EGYPT_DIGITAL_FUNNEL.map((step, i) => (
                  <li key={step.label.en}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium text-ink-800">
                        {step.label[locale]}
                      </span>
                      <span className="tabular shrink-0 text-lg font-semibold text-brand-700">
                        <AnimatedCounter
                          value={step.value}
                          decimals={1}
                          suffix="%"
                        />
                      </span>
                    </div>
                    <div className="mt-2 mb-4 h-9 w-full overflow-hidden rounded-md bg-ink-100">
                      <div
                        className="chart-wipe h-full rounded-md"
                        style={
                          {
                            width: `${step.value}%`,
                            background: `color-mix(in srgb, var(--color-brand-700) ${100 - i * 14}%, var(--color-brand-300))`,
                            "--grow-delay": `${i * 110}ms`,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pt-6">
              <p className="text-lg leading-relaxed text-pretty text-ink-700">
                {t.funnel.body1Pre}{" "}
                <strong className="font-semibold text-ink-900">84.6%</strong>{" "}
                {t.funnel.body1Mid}{" "}
                <strong className="font-semibold text-ink-900">55.7%</strong>{" "}
                {t.funnel.body1Post}
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                {t.funnel.body2}
              </p>
              <p className="mt-4 leading-relaxed text-ink-700">
                {t.funnel.body3}
              </p>
              <div className="mt-6 rounded-lg border border-gold-200 bg-gold-100/50 p-5">
                <p className="text-sm leading-relaxed text-ink-800">
                  {t.funnel.compareNote}{" "}
                  <Link
                    href={localePath(locale, "/egypt-vs-kenya")}
                    className="font-medium text-brand-700 underline underline-offset-4"
                  >
                    {t.funnel.compareLink}
                  </Link>{" "}
                  {t.funnel.compareNoteEnd}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- Who is left out -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.gaps.eyebrow}
            title={t.gaps.title}
            description={t.gaps.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {EGYPT_GAPS.map((gap, i) => {
            const spread = Math.round((gap.b.value - gap.a.value) * 10) / 10;
            return (
              <Reveal key={gap.group.en} delay={i * 80}>
                <Card className="h-full">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-ink-900">
                      {gap.group[locale]}
                    </h3>
                    <span className="shrink-0 rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700">
                      {c.ui.ppGap.replace("{value}", String(spread))}
                    </span>
                  </div>
                  <div className="mt-5">
                    <BarChart
                      data={[
                        {
                          label: gap.a.label[locale],
                          value: gap.a.value,
                          color: "var(--color-brand-300)",
                        },
                        {
                          label: gap.b.label[locale],
                          value: gap.b.value,
                          color: "var(--color-brand-700)",
                        },
                      ]}
                    />
                  </div>
                  <p className="mt-5 border-s-2 border-gold-300 ps-3 text-sm leading-relaxed text-ink-600">
                    {gap.insight[locale]}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <div className="mt-6">
            <SourceBadge source="findexApi" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Usage and barriers -------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.usage.eyebrow}
              title={t.usage.title}
              description={t.usage.description}
            />
            <Card className="mt-8">
              <BarChart
                data={EGYPT_USAGE.map((u) => ({
                  label: u.label[locale],
                  value: u.value,
                  color: TONE_COLOR[u.tone],
                }))}
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
            <p className="mt-6 leading-relaxed text-ink-700">{t.usage.body}</p>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeader
              eyebrow={t.barriers.eyebrow}
              title={t.barriers.title}
              description={t.barriers.description}
            />
            <Card className="mt-8">
              <BarChart
                data={EGYPT_BARRIERS.map((b) => ({
                  label: b.label[locale],
                  value: b.value,
                  color: "var(--color-brand-600)",
                }))}
                caption={t.barriers.caption}
              />
              <div className="mt-6">
                <SourceBadge source="findexApi" />
              </div>
            </Card>
            <p className="mt-6 leading-relaxed text-ink-700">
              {t.barriers.body1}
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              {t.barriers.body2}
            </p>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/rural-urban"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/challenges"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
