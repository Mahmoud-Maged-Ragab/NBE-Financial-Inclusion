"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Play, Search, X } from "lucide-react";
import {
  beginnerRank,
  getEmbedUrl,
  getThumbnail,
  getYouTubeId,
  VIDEO_CATEGORIES,
  type Video,
  type VideoCategory,
  type VideoLanguage,
} from "@/data/videos";
import type { VideosDict } from "@/lib/i18n/content/videos";
import type { Locale } from "@/lib/i18n/config";

interface VideoLibraryProps {
  videos: Video[];
  locale: Locale;
  dict: VideosDict;
  /**
   * Grid only — no search box, filters or result count. Used by the home
   * page preview, where the controls would be noise.
   */
  compact?: boolean;
}

/** One video with the fields for the reading language already chosen. */
interface Localized {
  video: Video;
  title: string;
  description: string;
  publisher: string;
  category: string;
  languageLabel: string;
}

type LanguageFilter = "all" | VideoLanguage;
type CategoryFilter = "all" | VideoCategory;

/**
 * The searchable, filterable video grid.
 *
 * Cards are poster frames, not players: no iframe exists until the reader
 * opens one, so the page never loads dozens of YouTube embeds at once. At
 * most one iframe is mounted at a time — the one inside the open modal.
 */
export function VideoLibrary({
  videos,
  locale,
  dict,
  compact = false,
}: VideoLibraryProps) {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState<LanguageFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [open, setOpen] = useState<Localized | null>(null);

  const localize = useMemo(
    () =>
      (video: Video): Localized => ({
        video,
        title: locale === "ar" ? video.titleAr : video.title,
        description:
          locale === "ar" ? video.descriptionAr : video.description,
        publisher: locale === "ar" ? video.publisherAr : video.publisher,
        category: dict.categories[video.category],
        languageLabel: video.language === "ar" ? dict.filters.ar : dict.filters.en,
      }),
    [locale, dict],
  );

  /**
   * Ordered for a beginner: videos in the reader's own language first, then
   * the ones published by NBE and the Central Bank, then the most basic
   * topics. An Arabic reader meets Arabic videos without touching a filter.
   */
  const items = useMemo(() => {
    const all = videos.map(localize);
    const needle = query.trim().toLowerCase();

    const matched = all.filter((item) => {
      if (language !== "all" && item.video.language !== language) return false;
      if (category !== "all" && item.video.category !== category) return false;
      if (needle === "") return true;
      return [
        item.title,
        item.description,
        item.category,
        item.publisher,
        item.video.source,
        // Search both languages so an Arabic query finds an English card too.
        item.video.title,
        item.video.titleAr,
        item.video.publisher,
        item.video.publisherAr,
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });

    return matched.sort(
      (a, b) => beginnerRank(a.video, locale) - beginnerRank(b.video, locale),
    );
  }, [videos, localize, query, language, category, locale]);

  const filtered = query !== "" || language !== "all" || category !== "all";

  function reset() {
    setQuery("");
    setLanguage("all");
    setCategory("all");
  }

  const count =
    items.length === 1
      ? dict.filters.resultsOne
      : dict.filters.resultsMany.replace("{count}", String(items.length));

  return (
    <div>
      {compact ? null : (
        <>
      {/* ---------- Search ---------- */}
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 start-4 size-4 -translate-y-1/2 text-ink-400"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.filters.search}
          aria-label={dict.filters.searchLabel}
          className="w-full rounded-lg border border-ink-200 bg-white py-3.5 ps-11 pe-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none"
        />
      </div>

      {/* ---------- Filters ---------- */}
      <div className="mt-5 flex flex-col gap-4">
        <FilterRow label={dict.filters.language}>
          <Chip
            active={language === "all"}
            onClick={() => setLanguage("all")}
            label={dict.filters.all}
          />
          <Chip
            active={language === "en"}
            onClick={() => setLanguage("en")}
            label={dict.filters.en}
          />
          <Chip
            active={language === "ar"}
            onClick={() => setLanguage("ar")}
            label={dict.filters.ar}
          />
        </FilterRow>

        <FilterRow label={dict.filters.category}>
          <Chip
            active={category === "all"}
            onClick={() => setCategory("all")}
            label={dict.filters.allTopics}
          />
          {VIDEO_CATEGORIES.map((key) => (
            <Chip
              key={key}
              active={category === key}
              onClick={() => setCategory(key)}
              label={dict.categories[key]}
            />
          ))}
        </FilterRow>
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-ink-200 pt-5">
        <p aria-live="polite" className="text-sm text-ink-500">
          {count}
        </p>
        {filtered ? (
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            {dict.filters.clear}
          </button>
        ) : null}
      </div>
        </>
      )}

      {/* ---------- Grid ---------- */}
      {items.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed border-ink-200 bg-ink-50 px-6 py-14 text-center">
          <p className="text-base font-semibold text-ink-900">
            {dict.empty.title}
          </p>
          <p className="mt-2 text-sm text-ink-600">{dict.empty.body}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 rounded-lg border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-brand-700 transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            {dict.empty.reset}
          </button>
        </div>
      ) : (
        <ul
          className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${compact ? "" : "mt-8"}`}
          aria-label={dict.library.title}
        >
          {items.map((item) => (
            <li key={item.video.id} className="h-full">
              <VideoCard item={item} dict={dict} onOpen={() => setOpen(item)} />
            </li>
          ))}
        </ul>
      )}

      {open ? (
        <VideoModal item={open} dict={dict} onClose={() => setOpen(null)} />
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="shrink-0 text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-brand-700 bg-brand-700 text-white"
          : "border-ink-200 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-700"
      }`}
    >
      {label}
    </button>
  );
}

/* ------------------------------------------------------------------ */

function VideoCard({
  item,
  dict,
  onOpen,
}: {
  item: Localized;
  dict: VideosDict;
  onOpen: () => void;
}) {
  const { video } = item;
  const thumbnail = getThumbnail(video);
  const embeddable = getEmbedUrl(video) !== null;

  const body = (
    <>
      <div className="relative aspect-video w-full overflow-hidden bg-ink-900">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover opacity-90 transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
          />
        ) : null}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-lg transition-transform duration-300 group-hover:scale-110">
            {embeddable ? (
              <Play aria-hidden="true" className="size-5 translate-x-0.5 rtl:-translate-x-0.5" />
            ) : (
              <ExternalLink aria-hidden="true" className="size-5" />
            )}
          </span>
        </span>
        <span className="absolute top-3 start-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          {item.languageLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
          {item.category}
        </p>
        <h3 className="mt-2 text-base leading-snug font-semibold text-balance text-ink-900">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          {item.description}
        </p>
        <p className="mt-auto border-t border-ink-100 pt-4 text-xs text-ink-500">
          <span className="sr-only">{dict.card.publishedBy}: </span>
          {item.publisher}
        </p>
      </div>
    </>
  );

  const shell =
    "group flex h-full w-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white text-start transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_12px_32px_-12px_rgba(15,70,52,0.25)]";

  // A publisher that blocks embedding gets a plain link out, not a dead player.
  if (!embeddable) {
    return (
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer noopener"
        className={shell}
      >
        {body}
        <span className="sr-only">
          — {dict.card.watchOriginal} {item.title}
        </span>
      </a>
    );
  }

  return (
    <button type="button" onClick={onOpen} className={shell}>
      {body}
      <span className="sr-only">
        — {dict.card.play}, {dict.card.opensPlayer}
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */

function VideoModal({
  item,
  dict,
  onClose,
}: {
  item: Localized;
  dict: VideosDict;
  onClose: () => void;
}) {
  const { video } = item;
  const embedUrl = getEmbedUrl(video);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape closes, the page behind stays put, and focus starts on Close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  const youTubeId = getYouTubeId(video.url);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${dict.modal.label}: ${item.title}`}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink-950/80 backdrop-blur-sm"
      />

      <div className="relative flex max-h-[90dvh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-ink-200 p-4 sm:p-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.12em] text-brand-600 uppercase">
              {item.category}
            </p>
            <h2 className="mt-1 text-base font-semibold text-ink-900 sm:text-lg">
              {item.title}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            <X aria-hidden="true" className="size-4" />
            {dict.modal.close}
          </button>
        </div>

        <div className="overflow-y-auto">
          {embedUrl ? (
            <div className="aspect-video w-full bg-ink-950">
              {/* Mounted only now, so this is the page's only iframe. */}
              <iframe
                src={embedUrl}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="size-full border-0"
              />
            </div>
          ) : (
            <div className="p-6">
              <p className="text-sm text-ink-600">{dict.modal.notEmbeddable}</p>
            </div>
          )}

          <div className="p-5">
            <p className="text-sm leading-relaxed text-ink-700">
              {item.description}
            </p>

            <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink-100 pt-5 text-sm sm:grid-cols-4">
              <Meta label={dict.modal.source} value={item.publisher} />
              <Meta label={dict.modal.language} value={item.languageLabel} />
              <Meta label={dict.modal.category} value={item.category} />
              <Meta label={dict.modal.platform} value={video.source} />
            </dl>

            {youTubeId ? (
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                {dict.modal.openOnYouTube}
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            ) : (
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
              >
                {dict.card.watchOriginal}
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs text-ink-500">{label}</dt>
      <dd className="mt-0.5 font-medium text-ink-900">{value}</dd>
    </div>
  );
}
