import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, ShieldAlert, X } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader, Rule } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { StepList, type Step } from "@/components/ui/StepList";
import {
  SelectableCards,
  type SelectableItem,
} from "@/components/ui/SelectableCards";
import { FlowDiagram, type FlowStep } from "@/components/ui/FlowDiagram";
import { PersonExamples } from "@/components/ui/PersonExamples";
import { Glossary } from "@/components/ui/Glossary";
import { Faq } from "@/components/ui/Faq";
import { AboutProject } from "@/components/ui/AboutProject";
import { ICONS, type IconName } from "@/components/ui/icons";
import { getContent, getCommon, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/basics">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "basics");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/basics"),
  };
}

export default async function BasicsPage({
  params,
}: PageProps<"/[locale]/basics">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "basics");
  const c = getCommon(locale);

  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={
          <>
            <p>{t.hero.description}</p>
            <p className="mt-3">{t.hero.lead}</p>
          </>
        }
      />

      {/* -------- Six short answers -------- */}
      <Section id="start-here">
        <Reveal>
          <SectionHeader
            eyebrow={t.startHere.eyebrow}
            title={t.startHere.title}
            description={t.startHere.description}
            align="center"
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <StepList steps={t.startHere.steps as Step[]} />
        </Reveal>
      </Section>

      {/* -------- Banking basics -------- */}
      <Section muted id="banking-basics">
        <Reveal>
          <SectionHeader
            eyebrow={t.basics.eyebrow}
            title={t.basics.title}
            description={t.basics.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <SelectableCards
            items={t.basics.cards as SelectableItem[]}
            ariaLabel={t.basics.label}
            columns={4}
          />
        </Reveal>
      </Section>

      {/* -------- The journey -------- */}
      <Section id="how-it-works">
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
            caption={t.journey.caption}
            stageLabel={c.ui.stageOf}
          />
        </Reveal>
      </Section>

      {/* -------- What is financial inclusion -------- */}
      <Section muted id="what-is-financial-inclusion">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.inclusion.eyebrow}
              title={t.inclusion.title}
            />
            <Rule className="mt-8" />
            <p className="mt-8 text-xl leading-relaxed text-balance text-ink-900">
              {t.inclusion.simple}
            </p>
            <p className="mt-4 leading-relaxed text-ink-700">
              {t.inclusion.includes}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <Card className="bg-white">
                <h3 className="text-lg font-semibold text-ink-900">
                  {t.inclusion.whyTitle}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-700">
                  {t.inclusion.why}
                </p>
              </Card>
              <Card className="bg-white">
                <h3 className="text-lg font-semibold text-ink-900">
                  {t.inclusion.notTitle}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-700">
                  {t.inclusion.not}
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------- Real people -------- */}
      <Section id="examples">
        <Reveal>
          <SectionHeader
            eyebrow={t.examples.eyebrow}
            title={t.examples.title}
            description={t.examples.description}
          />
        </Reveal>
        <div className="mt-12">
          <PersonExamples
            items={t.examples.items}
            withoutLabel={t.examples.withoutLabel}
            withLabel={t.examples.withLabel}
          />
        </div>
      </Section>

      {/* -------- Words -------- */}
      <Section muted id="words">
        <Reveal>
          <SectionHeader
            eyebrow={t.glossary.eyebrow}
            title={t.glossary.title}
            description={t.glossary.description}
          />
        </Reveal>
        <Reveal delay={100} className="mt-12">
          <Glossary terms={t.glossary.terms} />
        </Reveal>
      </Section>

      {/* -------- Safety -------- */}
      <Section id="safety">
        <Reveal>
          <SectionHeader
            eyebrow={t.safety.eyebrow}
            title={t.safety.title}
            description={t.safety.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-10">
          <Reveal>
            <div className="h-full rounded-xl border-2 border-brand-700 bg-brand-700 p-7 text-white">
              <h3 className="text-lg font-semibold">{t.safety.neverTitle}</h3>
              <ul className="mt-5 space-y-3">
                {t.safety.never.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <X
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-gold-300"
                    />
                    <span className="text-brand-50">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-relaxed text-brand-100">
                {t.safety.neverNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-lg font-semibold text-ink-900">
              {t.safety.watchTitle}
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {t.safety.watch.map((item) => {
                const Icon = ICONS[item.icon as IconName];
                return (
                  <li
                    key={item.t}
                    className="rounded-xl border border-ink-200 bg-white p-5"
                  >
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <h4 className="mt-3 text-sm font-semibold text-ink-900">
                      {item.t}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {item.b}
                    </p>
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 flex items-start gap-2.5 rounded-lg bg-ink-50 px-4 py-3.5 text-sm leading-relaxed text-ink-700">
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-600"
              />
              {t.safety.calm}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* -------- FAQ -------- */}
      <Section muted id="faq">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <SectionHeader
              eyebrow={t.faq.eyebrow}
              title={t.faq.title}
              description={t.faq.description}
            />
          </Reveal>
          <Reveal delay={100}>
            <Faq items={t.faq.items} />
          </Reveal>
        </div>
      </Section>

      {/* -------- Where next -------- */}
      <Section id="next">
        <Reveal>
          <SectionHeader
            eyebrow={t.next.eyebrow}
            title={t.next.title}
            description={t.next.description}
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.next.cards.map((card, i) => {
            const Icon = ICONS[card.icon as IconName];
            return (
              <Reveal key={card.href} delay={i * 90}>
                <Link
                  href={localePath(locale, card.href)}
                  className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {card.body}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-brand-700">
                    {card.cta}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={140}>
          <p className="mx-auto mt-10 flex max-w-3xl items-start gap-2.5 text-sm leading-relaxed text-ink-500">
            <ShieldAlert
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-gold-500"
            />
            {t.disclaimer}
          </p>
        </Reveal>
      </Section>

      <AboutProject muted />
    </>
  );
}
