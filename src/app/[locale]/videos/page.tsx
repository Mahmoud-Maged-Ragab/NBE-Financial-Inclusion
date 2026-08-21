import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FeaturedVideo } from "@/components/ui/FeaturedVideo";
import { VideoLibrary } from "@/components/ui/VideoLibrary";
import { AboutProject } from "@/components/ui/AboutProject";
import { VIDEOS } from "@/data/videos";
import { getContent, requireLocale } from "@/lib/i18n/dictionary";
import { languageAlternates, localePath } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/videos">): Promise<Metadata> {
  const { locale } = await params;
  const t = getContent(locale, "videos");
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: languageAlternates("/videos"),
  };
}

export default async function VideosPage({
  params,
}: PageProps<"/[locale]/videos">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const t = getContent(locale, "videos");

  // Prefer the featured video spoken in the reader's language.
  const featured =
    VIDEOS.find((v) => v.featured && v.language === locale) ??
    VIDEOS.find((v) => v.featured);

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

      {/* -------- Start here -------- */}
      {featured ? (
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-center lg:gap-14">
            <Reveal>
              <SectionHeader
                eyebrow={t.featured.eyebrow}
                title={t.featured.title}
                description={t.featured.body}
              />
            </Reveal>
            <Reveal delay={120}>
              <FeaturedVideo video={featured} locale={locale} dict={t} />
            </Reveal>
          </div>
        </Section>
      ) : null}

      {/* -------- Library -------- */}
      <Section muted id="library">
        <Reveal>
          <SectionHeader
            eyebrow={t.library.eyebrow}
            title={t.library.title}
            description={t.library.description}
          />
        </Reveal>

        <div className="mt-10">
          <VideoLibrary videos={VIDEOS} locale={locale} dict={t} />
        </div>

        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-500">
            {t.note}
          </p>
        </Reveal>
      </Section>

      {/* -------- Bridge to the NBE impact page -------- */}
      <section className="bg-brand-900 text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-pretty text-brand-100">
              {t.cta.description}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/nbe-impact")}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-brand-800 transition-colors hover:bg-gold-200"
            >
              {t.cta.primary}
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
              />
            </Link>
            <Link
              href={localePath(locale, "/understanding")}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {t.cta.secondary}
            </Link>
          </div>
        </div>
      </section>

      <AboutProject muted />
    </>
  );
}
