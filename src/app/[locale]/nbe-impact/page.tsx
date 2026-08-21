import Link from "next/link";
import type { Metadata } from "next";
import { ShieldAlert } from "lucide-react";
import { PageHero, CTA } from "@/components/ui/PageHero";
import { Section, SectionHeader, Rule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { ImpactStatCard } from "@/components/ui/ImpactStatCard";
import { ImpactTimeline } from "@/components/ui/ImpactTimeline";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { NBELogo } from "@/components/ui/NBELogo";
import { AboutProject } from "@/components/ui/AboutProject";
import { ICONS, type IconName } from "@/components/ui/icons";
import {
  NATIONAL_CONTEXT,
  NBE_INCLUSION_STATS,
  NBE_INCLUSIVE_BANKING,
  NBE_INITIATIVES,
  NBE_SCALE,
  NBE_TIMELINE,
} from "@/lib/nbeImpact";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/nbe-impact">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "nbeImpact");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/nbe-impact"),
  };
}

export default async function NbeImpactPage({
  params,
}: PageProps<"/[locale]/nbe-impact">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "nbeImpact");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
      >
        <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-4 sm:max-w-lg">
          <NBELogo alt={c.project.logoAlt} size="md" plate className="shrink-0" />
          <div className="min-w-0 text-sm">
            <p className="font-semibold text-white">{c.project.createdBy}</p>
            <p className="mt-0.5 text-brand-100">{c.project.org}</p>
          </div>
        </div>
      </PageHero>

      {/* -------- Standing disclaimer -------- */}
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto w-full max-w-6xl px-5 py-5 sm:px-8">
          <p className="flex max-w-4xl items-start gap-2.5 text-xs leading-relaxed text-ink-600">
            <ShieldAlert
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-gold-500"
            />
            {t.disclaimer}
          </p>
        </div>
      </section>

      {/* -------- Programme results, 2023 -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.programmes.eyebrow}
            title={t.programmes.title}
            description={t.programmes.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NBE_INCLUSION_STATS.map((stat, i) => (
            <Reveal key={stat.label.en} delay={(i % 3) * 80}>
              <ImpactStatCard stat={stat} locale={locale} emphasis={i === 0} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Network -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.scale.eyebrow}
            title={t.scale.title}
            description={t.scale.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NBE_SCALE.map((stat, i) => (
            <Reveal key={stat.label.en} delay={(i % 4) * 80}>
              <ImpactStatCard stat={stat} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Customer base -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.base.eyebrow}
            title={t.base.title}
            description={t.base.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NBE_INCLUSIVE_BANKING.map((stat, i) => (
            <Reveal key={stat.label.en} delay={(i % 4) * 80}>
              <ImpactStatCard stat={stat} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Timeline -------- */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.timeline.eyebrow}
              title={t.timeline.title}
              description={t.timeline.description}
            />
          </Reveal>
          <ImpactTimeline entries={NBE_TIMELINE} locale={locale} />
        </div>
      </Section>

      {/* -------- Initiatives -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.initiatives.eyebrow}
            title={t.initiatives.title}
            description={t.initiatives.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {NBE_INITIATIVES.map((item, i) => {
            const Icon = ICONS[item.icon as IconName];
            return (
              <Reveal key={item.id} delay={(i % 2) * 80}>
                <Card interactive className="group h-full">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-balance text-ink-900">
                      {item.title[locale]}
                    </h3>
                  </div>

                  <dl className="mt-5 space-y-4 border-t border-ink-100 pt-5">
                    <div>
                      <dt className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
                        {t.initiatives.what}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">
                        {item.what[locale]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
                        {t.initiatives.why}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">
                        {item.why[locale]}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
                        {t.initiatives.who}
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed text-ink-700">
                        {item.who[locale]}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <SourceBadge source={item.source} />
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* -------- Youth -------- */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.youth.eyebrow}
              title={t.youth.title}
              description={t.youth.body}
            />
            <Rule className="mt-8" />
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <p className="leading-relaxed text-ink-700">{t.youth.why}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {t.youth.extra}
              </p>
              <div className="mt-5">
                <SourceBadge source="nbeEsg2023" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* -------- Rural -------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.rural.eyebrow}
              title={t.rural.title}
              description={t.rural.body}
            />
            <Rule className="mt-8" />
          </Reveal>
          <Reveal delay={100}>
            <Card className="h-full">
              <p className="leading-relaxed text-ink-700">{t.rural.why}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                {t.rural.extra}
              </p>
              <div className="mt-5">
                <SourceBadge source="nbeEsg2023" />
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* -------- Women -------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.women.eyebrow}
            title={t.women.title}
            description={t.women.body}
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-3xl leading-relaxed text-ink-700">
            {t.women.why}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {t.women.points.map((point, i) => (
            <Reveal key={point.t} delay={(i % 2) * 80}>
              <Card className="h-full">
                <h3 className="text-base font-semibold text-ink-900">
                  {point.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {point.b}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- National context -------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.national.eyebrow}
            title={t.national.title}
            description={t.national.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NATIONAL_CONTEXT.map((stat, i) => (
            <Reveal key={stat.label.en} delay={(i % 3) * 80}>
              <ImpactStatCard stat={stat} locale={locale} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* -------- Sources -------- */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.sources.eyebrow}
              title={t.sources.title}
              description={t.sources.description}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-4">
              <SourceBadge source="nbeEsg2023" />
              <SourceBadge source="nbeBulletin2025" />
              <Link
                href={localePath(locale, "/sources")}
                className="mt-2 text-sm font-medium text-brand-700 underline underline-offset-4"
              >
                {t.sources.seeAll}
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <AboutProject />

      <CTA
        title={t.cta.title}
        description={t.cta.description}
        primary={{ href: localePath(locale, "/egypt"), label: t.cta.primary }}
        secondary={{
          href: localePath(locale, "/videos"),
          label: t.cta.secondary,
        }}
      />
    </>
  );
}
