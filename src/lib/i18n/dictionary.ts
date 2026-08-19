import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./config";
import { common } from "./content/common";
import { home } from "./content/home";
import { understanding } from "./content/understanding";
import { banking } from "./content/banking";
import { egypt } from "./content/egypt";
import { ruralUrban } from "./content/rural-urban";
import { challenges } from "./content/challenges";
import { digitalFinance } from "./content/digital-finance";
import { fintech } from "./content/fintech";
import { women } from "./content/women";
import { smallBusiness } from "./content/small-business";
import { egyptVsIndia } from "./content/egypt-vs-india";
import { future } from "./content/future";
import { sources } from "./content/sources";

/**
 * Content is grouped per page so each page pulls only what it renders.
 * All of it stays on the server — pages are Server Components, so the
 * dictionaries never reach the client bundle.
 */
const PAGES = {
  common,
  home,
  understanding,
  banking,
  egypt,
  ruralUrban,
  challenges,
  digitalFinance,
  fintech,
  women,
  smallBusiness,
  egyptVsIndia,
  future,
  sources,
} as const;

type Pages = typeof PAGES;
type PageKey = keyof Pages;

/** Resolves one page's dictionary for a locale, 404ing on an unknown locale. */
export function getContent<K extends PageKey>(
  locale: string,
  page: K,
): Pages[K][Locale] {
  if (!isLocale(locale)) notFound();
  return PAGES[page][locale];
}

/** Shared strings: navigation, footer, CTAs and UI labels. */
export function getCommon(locale: string) {
  return getContent(locale, "common");
}

/** Narrows a route param to a supported locale, 404ing otherwise. */
export function requireLocale(locale: string): Locale {
  if (!isLocale(locale)) notFound();
  return locale;
}
