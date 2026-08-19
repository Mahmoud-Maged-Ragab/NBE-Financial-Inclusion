import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { NextStep } from "@/components/ui/NextStep";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card, FeatureCard, StatCard } from "@/components/ui/Card";
import { FlowDiagram, type FlowStep } from "@/components/ui/FlowDiagram";
import { BeforeAfter, type BeforeAfterRow } from "@/components/ui/BeforeAfter";
import { BarChart } from "@/components/charts/BarChart";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { BankAwarenessCTA } from "@/components/ui/BankAwarenessCTA";
import { ICONS } from "@/components/ui/icons";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/digital-finance">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "digitalFinance");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/digital-finance"),
  };
}

export default async function DigitalFinancePage({
  params,
}: PageProps<"/[locale]/digital-finance">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "digitalFinance");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      />

      {/* -------- Phone as gateway -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.gateway.eyebrow}
            title={t.gateway.title}
            description={t.gateway.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <FlowDiagram
            steps={t.gateway.steps as FlowStep[]}
            stageLabel={c.ui.stageOf}
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6">
            <SourceBadge source="findexApi" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Banking vs wallets -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.wallets.eyebrow}
            title={t.wallets.title}
            description={t.wallets.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            { d: t.wallets.banking, icon: "laptop", accent: false },
            { d: t.wallets.wallet, icon: "smartphone", accent: true },
          ].map((panel) => {
            const Icon = ICONS[panel.icon as keyof typeof ICONS];
            return (
              <Reveal key={panel.d.title}>
                <div
                  className={`h-full rounded-xl border p-6 sm:p-8 ${
                    panel.accent
                      ? "border-brand-200 bg-brand-50"
                      : "border-ink-200 bg-white"
                  }`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-700 text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-ink-900">
                    {panel.d.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-700">
                    {panel.d.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {panel.d.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-ink-700">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-400"
                        />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-500">
            {t.wallets.note}
          </p>
        </Reveal>
      </Section>

      {/* -------- The wider journey -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.journey.eyebrow}
            title={t.journey.title}
            description={t.journey.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <FlowDiagram
            steps={t.journey.steps as FlowStep[]}
            stageLabel={c.ui.stageOf}
          />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-6">
            <SourceBadge source="findexApi" />
          </div>
        </Reveal>
      </Section>

      {/* -------- Where Egypt sits -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.position.eyebrow}
            title={t.position.title}
            description={t.position.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <StatCard
              value={84.6}
              unit="%"
              decimals={1}
              label={t.position.stats.phone.label}
              detail={t.position.stats.phone.detail}
              source="findexApi"
              emphasis
            />
          </Reveal>
          <Reveal delay={80}>
            <StatCard
              value={55.7}
              unit="%"
              decimals={1}
              label={t.position.stats.smartphone.label}
              detail={t.position.stats.smartphone.detail}
              source="findexApi"
            />
          </Reveal>
          <Reveal delay={160}>
            <StatCard
              value={28.2}
              unit="%"
              decimals={1}
              label={t.position.stats.digital.label}
              detail={t.position.stats.digital.detail}
              source="findexApi"
            />
          </Reveal>
          <Reveal delay={240}>
            <StatCard
              value={18.5}
              unit="%"
              decimals={1}
              label={t.position.stats.pay.label}
              detail={t.position.stats.pay.detail}
              source="findexApi"
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Card className="mt-8">
            <h3 className="mb-6 text-base font-semibold text-ink-900">
              {t.position.chartTitle}
            </h3>
            <BarChart
              data={[
                {
                  label: t.position.chartRows.utilityAny,
                  value: 51.5,
                  color: "var(--color-brand-600)",
                },
                {
                  label: t.position.chartRows.utilityCash,
                  value: 48.4,
                  color: "var(--color-data-6)",
                  note: t.position.chartRows.utilityCashNote,
                },
                {
                  label: t.position.chartRows.wagesCash,
                  value: 26.5,
                  color: "var(--color-data-6)",
                },
                {
                  label: t.position.chartRows.wagesAccount,
                  value: 8.8,
                  color: "var(--color-brand-600)",
                },
              ]}
              caption={c.ui.adults15}
            />
            <div className="mt-6">
              <SourceBadge source="findexApi" />
            </div>
          </Card>
        </Reveal>
      </Section>

      {/* -------- Before / after -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.beforeAfter.eyebrow}
            title={t.beforeAfter.title}
            description={t.beforeAfter.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <BeforeAfter
            rows={t.beforeAfter.rows as BeforeAfterRow[]}
            beforeLabel={t.beforeAfter.beforeLabel}
            afterLabel={t.beforeAfter.afterLabel}
            beforeHeading={t.beforeAfter.beforeHeading}
            afterHeading={t.beforeAfter.afterHeading}
            switchLabel={t.beforeAfter.switchLabel}
          />
        </Reveal>
        <Reveal delay={140}>
          <Card className="mt-8 border-gold-200 bg-gold-100/50">
            <p className="leading-relaxed text-pretty text-ink-800">
              <strong className="font-semibold">{t.caution.label}</strong>{" "}
              {t.caution.body}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* -------- The rails -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.rails.eyebrow}
            title={t.rails.title}
            description={t.rails.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.rails.items.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <FeatureCard
                icon={ICONS[r.icon as keyof typeof ICONS]}
                title={r.title}
              >
                {r.body}
              </FeatureCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-2">
            <SourceBadge source="cbeInclusion2025" />
            <SourceBadge source="instapay" />
          </div>
        </Reveal>
      </Section>

      <NextStep
        title={t.cta.title}
        description={t.cta.description}
        primary={{
          href: localePath(locale, "/fintech"),
          label: t.cta.primary,
        }}
        secondary={{
          href: localePath(locale, "/banking"),
          label: t.cta.secondary,
        }}
      />

      <BankAwarenessCTA />
    </>
  );
}
