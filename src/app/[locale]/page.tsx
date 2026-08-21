import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Quote, ShieldCheck, X } from "lucide-react";
import { EgyptHeroArt } from "@/components/ui/EgyptHeroArt";
import {
  Container,
  Rule,
  Section,
  SectionHeader,
} from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StatCard } from "@/components/ui/Card";
import {
  SelectableCards,
  type SelectableItem,
} from "@/components/ui/SelectableCards";
import { BeforeAfter, type BeforeAfterRow } from "@/components/ui/BeforeAfter";
import { JourneyStrip, type JourneyStep } from "@/components/ui/JourneyStrip";
import { TrustSection } from "@/components/ui/TrustSection";
import { AboutProject } from "@/components/ui/AboutProject";
import { VideoLibrary } from "@/components/ui/VideoLibrary";
import { ImpactStatCard } from "@/components/ui/ImpactStatCard";
import { StepList, type Step } from "@/components/ui/StepList";
import { Faq } from "@/components/ui/Faq";
import { CTA } from "@/components/ui/PageHero";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SourceBadge } from "@/components/ui/SourceBadge";
import { CONTEXT, EGYPT_HEADLINE } from "@/lib/data";
import { beginnerRank, VIDEOS } from "@/data/videos";
import { LATEST_NBE } from "@/lib/nbeImpact";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

const JOURNEY_ICONS = [
  "banknote",
  "landmark",
  "qrCode",
  "piggyBank",
  "trendingUp",
] as const;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "home");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/"),
  };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "home");
  const videos = getContent(locale, "videos");
  const nbe = getContent(locale, "nbeImpact");
  const basics = getContent(locale, "basics");
  const c = getCommon(locale);

  /** Three videos for the home preview, in the same beginner-first order. */
  const homeVideos = [...VIDEOS]
    .sort((a, b) => beginnerRank(a, locale) - beginnerRank(b, locale))
    .slice(0, 3);

  const journey: JourneyStep[] = t.hero.journey.map((label, i) => ({
    label,
    icon: JOURNEY_ICONS[i],
  }));

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-brand-950 text-white">
        <EgyptHeroArt className="absolute inset-0 size-full object-cover opacity-90" />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/90 to-brand-950/40 rtl:bg-gradient-to-l"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            {/* <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-brand-100">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-gold-400"
              />
              {t.hero.badge}
            </p> */}
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-brand-100 sm:text-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localePath(locale, "/understanding")}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-gold-200"
              >
                {t.hero.primaryCta}
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
                />
              </Link>
              <a
                href="#why-a-bank-account"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>

          <div className="mt-14">
            <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-gold-300 uppercase">
              {t.hero.journeyLabel}
            </p>
            <JourneyStrip steps={journey} />
          </div>
        </Container>
      </section>

      {/* ---------------- New to banking? ---------------- */}
      <Section muted id="new-to-banking">
        <Reveal>
          <SectionHeader
            eyebrow={basics.startHere.eyebrow}
            title={basics.preview.title}
            description={basics.preview.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <StepList steps={basics.startHere.steps as Step[]} />
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex justify-center">
            <Link
              href={localePath(locale, "/basics")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {basics.startHere.cta}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Core message ---------------- */}
      <section className="border-b border-ink-200 bg-white">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <blockquote className="mx-auto flex max-w-4xl gap-5">
              <Quote
                aria-hidden="true"
                className="mt-1 size-8 shrink-0 text-gold-400 rtl:scale-x-[-1]"
              />
              <p className="text-xl leading-relaxed text-balance text-ink-900 sm:text-2xl">
                {t.message.quote}
              </p>
            </blockquote>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Why open a bank account ---------------- */}
      <Section id="why-a-bank-account">
        <Reveal>
          <SectionHeader
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            description={t.why.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.why.cards as SelectableItem[]}
            ariaLabel={t.why.title}
            columns={3}
          />
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-ink-500">
            {t.why.note}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- Imagine without an account ---------------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.imagine.eyebrow}
            title={t.imagine.title}
            description={t.imagine.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <BeforeAfter
            rows={t.imagine.rows as BeforeAfterRow[]}
            beforeLabel={t.imagine.beforeLabel}
            afterLabel={t.imagine.afterLabel}
            beforeHeading={t.imagine.beforeHeading}
            afterHeading={t.imagine.afterHeading}
            switchLabel={t.imagine.switchLabel}
          />
        </Reveal>
      </Section>

      {/* ---------------- Financial inclusion, in one line ---------------- */}
      <Section>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
              {basics.inclusion.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
              {basics.inclusion.title}
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-balance text-ink-900">
              {basics.inclusion.simple}
            </p>
            <p className="mt-4 leading-relaxed text-pretty text-ink-600">
              {basics.inclusion.includes}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-ink-200 bg-white p-6 text-start">
              <h3 className="text-base font-semibold text-ink-900">
                {basics.inclusion.whyTitle}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">
                {basics.inclusion.why}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- What is financial inclusion ---------------- */}
      <Section muted>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.what.eyebrow}
              title={t.what.title}
              description={t.what.description}
            />
            <Rule className="mt-8" />
            <p className="mt-8 leading-relaxed text-ink-700">{t.what.body1}</p>
            <p className="mt-4 leading-relaxed text-ink-700">{t.what.body2}</p>

            <div className="mt-8 rounded-xl border border-ink-200 bg-white p-6">
              <p className="text-sm text-ink-600">{t.what.globalLabel}</p>
              <p className="mt-2 text-2xl font-semibold text-brand-700">
                <AnimatedCounter
                  value={CONTEXT.globalAccount.value}
                  suffix="%"
                />{" "}
                <span className="text-base font-normal text-ink-700">
                  {CONTEXT.globalAccount.label[locale]}
                </span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {t.what.globalNote}
              </p>
              <div className="mt-4">
                <SourceBadge source="findex2025" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pt-4">
              <p className="mb-4 text-sm font-medium text-ink-600">
                {t.what.pillarsIntro}
              </p>
              <SelectableCards
                items={t.what.pillars as SelectableItem[]}
                ariaLabel={t.what.pillarsLabel}
                columns={2}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Why it matters ---------------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={t.matter.eyebrow}
            title={t.matter.title}
            description={t.matter.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.matter.items as SelectableItem[]}
            ariaLabel={t.matter.label}
            columns={4}
          />
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink-500">
            {t.matter.sourcesNote}{" "}
            <Link
              href={localePath(locale, "/sources")}
              className="font-medium text-brand-700 underline underline-offset-4"
            >
              {t.matter.sourcesLink}
            </Link>{" "}
            {t.matter.sourcesNoteEnd}
          </p>
        </Reveal>
      </Section>

      {/* ---------------- Egypt headline figures ---------------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.stats.eyebrow}
            title={t.stats.title}
            description={t.stats.description}
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {EGYPT_HEADLINE.map((s, i) => (
            <Reveal key={s.label[locale]} delay={i * 80}>
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

      {/* ---------------- NBE impact preview ---------------- */}
      <Section>
        <Reveal>
          <SectionHeader
            eyebrow={nbe.preview.eyebrow}
            title={nbe.preview.title}
            description={nbe.preview.description}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_NBE.slice(0, 3).map((stat, i) => (
            <Reveal key={stat.label.en} delay={i * 80}>
              <ImpactStatCard
                stat={stat}
                locale={locale}
                latestLabel={nbe.latestLabel}
                emphasis={i === 0}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-10 flex justify-center">
            <Link
              href={localePath(locale, "/nbe-impact")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              {nbe.preview.cta}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Staying safe ---------------- */}
      <Section muted>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={basics.safety.eyebrow}
              title={basics.safety.title}
              description={basics.safety.description}
            />
            <Link
              href={localePath(locale, "/basics") + "#safety"}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-700"
            >
              {basics.safety.watchTitle}
              <ArrowRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
              />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border-2 border-brand-700 bg-brand-700 p-7 text-white">
              <h3 className="flex items-center gap-2.5 text-lg font-semibold">
                <ShieldCheck aria-hidden="true" className="size-5 text-gold-300" />
                {basics.safety.neverTitle}
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {basics.safety.never.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <X
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-gold-300"
                    />
                    <span className="text-brand-50">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-relaxed text-brand-100">
                {basics.safety.neverNote}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Quick questions ---------------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={basics.faq.eyebrow}
              title={basics.faq.title}
              description={basics.faq.description}
            />
          </Reveal>
          <Reveal delay={100}>
            <Faq items={basics.faq.items.slice(0, 6)} />
          </Reveal>
        </div>
      </Section>

      {/* ---------------- Videos preview ---------------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={videos.preview.eyebrow}
            title={videos.preview.title}
            description={videos.preview.description}
            align="center"
          />
        </Reveal>

        <div className="mt-12">
          <VideoLibrary
            videos={homeVideos}
            locale={locale}
            dict={videos}
            compact
          />
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Link
              href={localePath(locale, "/videos")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-700 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              {videos.preview.cta}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------- Trust ---------------- */}
      <TrustSection muted={false} />

      {/* ---------------- Path through the site ---------------- */}
      <Section muted>
        <Reveal>
          <SectionHeader
            eyebrow={t.path.eyebrow}
            title={t.path.title}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.path.cards.map((card, i) => (
            <Reveal key={card.step} delay={i * 90}>
              <div className="h-full rounded-xl border border-ink-200 bg-white p-7">
                <span className="tabular text-sm font-semibold text-gold-500">
                  {card.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-ink-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {card.body}
                </p>
                <ul className="mt-5 space-y-2 border-t border-ink-100 pt-5">
                  {card.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={localePath(locale, l.href)}
                        className="group inline-flex items-center gap-2 text-sm font-medium text-brand-700 hover:text-brand-800"
                      >
                        {c.items[l.key as keyof typeof c.items].label}
                        <ArrowRight
                          aria-hidden="true"
                          className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------------- Team preview ---------------- */}
      {/* Commented out. To bring it back, restore these imports:
            import { TeamGrid } from "@/components/ui/TeamGrid";
            import { TEAM_MEMBERS, TEAM_PREVIEW_COUNT } from "@/lib/teamMembers";
          and this line in the component:
            const team = getContent(locale, "team"); */}
      {/* <Section muted id="team">
        <Reveal>
          <SectionHeader
            eyebrow={team.preview.eyebrow}
            title={team.preview.title}
            description={team.preview.description}
            align="center"
          />
        </Reveal>

        <TeamGrid
          members={TEAM_MEMBERS.slice(0, TEAM_PREVIEW_COUNT)}
          locale={locale}
          columns={3}
          labels={{
            university: team.grid.university,
            major: team.grid.major,
          }}
          ariaLabel={team.grid.ariaLabel}
          emptyMessage={team.grid.empty}
          className="mt-12"
        />

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Link
              href={localePath(locale, "/team")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-6 py-3.5 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
            >
              {team.preview.cta}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Section> */}

      <AboutProject />

      <CTA
        title={t.finalCta.title}
        description={t.finalCta.description}
        primary={{
          href: localePath(locale, "/understanding"),
          label: t.finalCta.primary,
        }}
        secondary={{
          href: localePath(locale, "/banking"),
          label: t.finalCta.secondary,
        }}
      />
    </>
  );
}
