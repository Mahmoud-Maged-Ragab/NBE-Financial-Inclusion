"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { getEmbedUrl, getThumbnail, type Video } from "@/data/videos";
import type { VideosDict } from "@/lib/i18n/content/videos";
import type { Locale } from "@/lib/i18n/config";

interface FeaturedVideoProps {
  video: Video;
  locale: Locale;
  dict: VideosDict;
}

/**
 * The "Start Here" player.
 *
 * Shows a poster frame until the reader presses play — the iframe is only
 * mounted at that point, so nothing is requested from YouTube on page load.
 */
export function FeaturedVideo({ video, locale, dict }: FeaturedVideoProps) {
  const [playing, setPlaying] = useState(false);

  const title = locale === "ar" ? video.titleAr : video.title;
  const publisher = locale === "ar" ? video.publisherAr : video.publisher;
  const languageLabel =
    video.language === "ar" ? dict.filters.ar : dict.filters.en;
  const thumbnail = getThumbnail(video);
  const embedUrl = getEmbedUrl(video);

  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-200 bg-white">
      <div className="relative aspect-video w-full bg-ink-950">
        {playing && embedUrl ? (
          <iframe
            src={`${embedUrl}&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="size-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            disabled={!embedUrl}
            className="group absolute inset-0 size-full disabled:cursor-not-allowed"
          >
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="object-cover opacity-90 transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
              />
            ) : null}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-20 items-center justify-center rounded-full bg-white/95 text-brand-800 shadow-xl transition-transform duration-300 group-hover:scale-110">
                <Play
                  aria-hidden="true"
                  className="size-7 translate-x-1 rtl:-translate-x-1"
                />
              </span>
            </span>
            <span className="sr-only">
              {dict.featured.watch} — {title}
            </span>
          </button>
        )}
      </div>

      <figcaption className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-base font-semibold text-ink-900">{title}</p>
          <p className="mt-1 text-sm text-ink-600">
            <span className="sr-only">{dict.card.publishedBy}: </span>
            {publisher} · {languageLabel}
          </p>
        </div>
        <a
          href={video.url}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-700 underline-offset-4 hover:underline"
        >
          {dict.modal.openOnYouTube}
          <ExternalLink aria-hidden="true" className="size-3.5" />
        </a>
      </figcaption>
    </figure>
  );
}
