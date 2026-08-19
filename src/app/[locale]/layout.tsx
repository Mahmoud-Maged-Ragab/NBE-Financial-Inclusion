import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "../globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LOCALES, LOCALE_META } from "@/lib/i18n/config";
import { getCommon, requireLocale } from "@/lib/i18n/dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Arabic UI face — Cairo reads well at small sizes and has a full Arabic set. */
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: {
      default: isArabic ? "الشمول المالي في مصر" : "Financial Inclusion in Egypt",
      template: isArabic
        ? "%s · الشمول المالي في مصر"
        : "%s · Financial Inclusion in Egypt",
    },
    description: isArabic
      ? "أموالك. مستقبلك. وصولك. دليل تفاعلي قائم على البيانات حول الشمول المالي في مصر، مستند إلى البنك الدولي والبنك المركزي المصري وصندوق النقد الدولي."
      : "Your money. Your future. Your access. An interactive, data-driven guide to financial inclusion in Egypt, sourced from the World Bank, the Central Bank of Egypt and the IMF.",
    openGraph: {
      title: isArabic
        ? "الشمول المالي في مصر"
        : "Financial Inclusion in Egypt",
      description: isArabic
        ? "أموالك. مستقبلك. وصولك."
        : "Your money. Your future. Your access.",
      type: "website",
      locale: isArabic ? "ar_EG" : "en",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale: raw } = await params;
  const locale = requireLocale(raw);
  const dict = getCommon(locale);
  const meta = LOCALE_META[locale];

  return (
    <html
      lang={meta.htmlLang}
      dir={meta.dir}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}
    >
      <body
        className={`flex min-h-full flex-col ${locale === "ar" ? "font-arabic" : ""}`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:start-3 focus:z-[60] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          {dict.site.skipToContent}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
