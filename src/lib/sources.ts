import type { Locale } from "./i18n/config";

/**
 * Central citation registry.
 *
 * Every statistic shown anywhere on this site references a source id from this
 * file. The Sources page is generated from this registry, so a figure cannot
 * appear on the site without being traceable to a published source.
 *
 * Publication titles are kept in the language they were published in, which is
 * standard citation practice. Everything around them — publisher, period and
 * explanatory notes — is localised.
 */

export type SourceCategory =
  | "worldBank"
  | "cbe"
  | "nbe"
  | "imf"
  | "government"
  | "academic"
  | "other";

type L = Record<Locale, string>;

export interface Source {
  id: string;
  /** Short label rendered inside inline citation badges. */
  short: L;
  publisher: L;
  /** Title as published. */
  title: string;
  url: string;
  category: SourceCategory;
  /** Reference period of the underlying data, not the publication date. */
  period: L;
  note?: L;
}

export const SOURCES = {
  findex2025: {
    id: "findex2025",
    short: {
      en: "World Bank Global Findex 2025",
      ar: "المؤشر العالمي للشمول المالي 2025",
    },
    publisher: { en: "World Bank", ar: "البنك الدولي" },
    title:
      "The Global Findex Database 2025: Connectivity and Financial Inclusion in the Digital Economy",
    url: "https://www.worldbank.org/en/publication/globalfindex",
    category: "worldBank",
    period: {
      en: "Survey fieldwork 2024, published 2025",
      ar: "العمل الميداني للمسح في 2024، ونُشر في 2025",
    },
    note: {
      en: "Demand-side household survey of roughly 145,000 adults across 141 economies. All figures are the share of adults aged 15 and above.",
      ar: "مسح للأسر من جانب الطلب شمل نحو 145 ألف بالغ في 141 اقتصادًا. جميع الأرقام تمثل نسبة البالغين من عمر 15 عامًا فأكثر.",
    },
  },
  findexApi: {
    id: "findexApi",
    short: {
      en: "World Bank Global Findex database",
      ar: "قاعدة بيانات المؤشر العالمي للشمول المالي",
    },
    publisher: { en: "World Bank", ar: "البنك الدولي" },
    title: "Global Findex Database — indicator API (source 28)",
    url: "https://databank.worldbank.org/source/global-financial-inclusion",
    category: "worldBank",
    period: { en: "2011 – 2024 survey waves", ar: "موجات المسح 2011 – 2024" },
    note: {
      en: "Disaggregated indicators (rural/urban, gender, income group, education) retrieved directly from the World Bank indicator API.",
      ar: "مؤشرات مفصّلة (ريف/حضر، النوع، شريحة الدخل، التعليم) مأخوذة مباشرة من واجهة بيانات البنك الدولي.",
    },
  },
  wdiRural: {
    id: "wdiRural",
    short: { en: "World Bank WDI", ar: "مؤشرات التنمية العالمية" },
    publisher: { en: "World Bank", ar: "البنك الدولي" },
    title: "World Development Indicators — Rural population (% of total)",
    url: "https://data.worldbank.org/indicator/SP.RUR.TOTL.ZS?locations=EG",
    category: "worldBank",
    period: { en: "2024", ar: "2024" },
  },
  cbeInclusion2025: {
    id: "cbeInclusion2025",
    short: { en: "Central Bank of Egypt", ar: "البنك المركزي المصري" },
    publisher: { en: "Central Bank of Egypt", ar: "البنك المركزي المصري" },
    title:
      "Financial inclusion indicators and the Second Financial Inclusion Strategy (2026–2030)",
    url: "https://www.cbe.org.eg/en/financial-inclusion/data-measurement-and-reports",
    category: "cbe",
    period: { en: "As of December 2025", ar: "حتى ديسمبر 2025" },
    note: {
      en: "The CBE measures ownership of any active transactional account — bank accounts, Egypt Post accounts, mobile wallets and prepaid cards. This is a broader definition than the World Bank Global Findex survey, which is why the two headline rates differ.",
      ar: "يقيس البنك المركزي المصري امتلاك أي حساب معاملات نشط — حسابات بنكية، وحسابات البريد المصري، ومحافظ الهاتف المحمول، والبطاقات مسبقة الدفع. وهو تعريف أوسع من مسح البنك الدولي، ولهذا يختلف المعدلان الرئيسيان.",
    },
  },
  cbeStrategy: {
    id: "cbeStrategy",
    short: {
      en: "CBE Financial Inclusion Strategy",
      ar: "استراتيجية الشمول المالي",
    },
    publisher: { en: "Central Bank of Egypt", ar: "البنك المركزي المصري" },
    title: "National Financial Inclusion Strategy (2022–2025)",
    url: "https://www.cbe.org.eg/en/financial-inclusion/financial-inclusion-strategy",
    category: "cbe",
    period: { en: "2022–2025", ar: "2022–2025" },
  },
  cbeMsme: {
    id: "cbeMsme",
    short: {
      en: "CBE — MSME finance",
      ar: "تمويل المشروعات — البنك المركزي",
    },
    publisher: { en: "Central Bank of Egypt", ar: "البنك المركزي المصري" },
    title: "Facilitating Access to Finance for MSMEs",
    url: "https://www.cbe.org.eg/en/msmes-entrepreneurship/msmes/facilitating-access-to-finance",
    category: "cbe",
    period: {
      en: "Regulatory framework, current",
      ar: "الإطار التنظيمي الساري",
    },
  },
  cbeFintech: {
    id: "cbeFintech",
    short: { en: "FinTech Egypt (CBE)", ar: "فينتك مصر (البنك المركزي)" },
    publisher: {
      en: "Central Bank of Egypt — FinTech Egypt",
      ar: "البنك المركزي المصري — فينتك مصر",
    },
    title: "FinTech Egypt Landscape Report",
    url: "https://fintech-egypt.com/FinTech-Egypt-Landscape-Report/",
    category: "cbe",
    period: {
      en: "Ecosystem mapping, 2023",
      ar: "مسح منظومة القطاع، 2023",
    },
  },
  egx: {
    id: "egx",
    short: { en: "Egyptian Exchange", ar: "البورصة المصرية" },
    publisher: { en: "The Egyptian Exchange (EGX)", ar: "البورصة المصرية" },
    title:
      "Listed company disclosures — Fawry for Banking Technology and Electronic Payments (FWRY)",
    url: "https://www.egx.com.eg/en/homepage.aspx",
    category: "government",
    period: { en: "Listed since 2019", ar: "مقيدة منذ 2019" },
  },
  instapay: {
    id: "instapay",
    short: {
      en: "InstaPay / Egyptian Banks Company",
      ar: "إنستاباي / شركة البنوك المصرية",
    },
    publisher: {
      en: "Egyptian Banks Company for Technological Advancement (EBC)",
      ar: "شركة البنوك المصرية للتقدم التكنولوجي",
    },
    title: "Instant Payment Network and the InstaPay application",
    url: "https://www.instapay.eg/",
    category: "other",
    period: { en: "Launched 2022", ar: "أُطلقت في 2022" },
  },
  imfFas: {
    id: "imfFas",
    short: {
      en: "IMF Financial Access Survey",
      ar: "مسح الوصول المالي — صندوق النقد",
    },
    publisher: {
      en: "International Monetary Fund",
      ar: "صندوق النقد الدولي",
    },
    title: "Financial Access Survey — geographical outreach indicators",
    url: "https://data.imf.org/en/datasets/IMF.STA:FAS",
    category: "imf",
    period: { en: "2024 round", ar: "جولة 2024" },
    note: {
      en: "Supply-side data reported by national authorities: branches, ATMs and agent networks per 100,000 adults.",
      ar: "بيانات من جانب العرض تُبلغ عنها السلطات الوطنية: الفروع وماكينات الصراف وشبكات الوكلاء لكل 100 ألف بالغ.",
    },
  },
  imfFasHighlights: {
    id: "imfFasHighlights",
    short: { en: "IMF FAS 2024 Highlights", ar: "أبرز نتائج مسح 2024" },
    publisher: {
      en: "International Monetary Fund",
      ar: "صندوق النقد الدولي",
    },
    title: "Financial Access Survey 2024 Highlights: Marking 15 Years",
    url: "https://www.imf.org/en/news/articles/2024/10/30/pr-24400-imf-releases-the-2024-financial-access-survey-results",
    category: "imf",
    period: { en: "Published October 2024", ar: "نُشر في أكتوبر 2024" },
  },
  msmeda: {
    id: "msmeda",
    short: { en: "MSMEDA", ar: "جهاز تنمية المشروعات" },
    publisher: {
      en: "Micro, Small and Medium Enterprise Development Agency (MSMEDA), Egypt",
      ar: "جهاز تنمية المشروعات المتوسطة والصغيرة ومتناهية الصغر، مصر",
    },
    title: "MSME contribution to the Egyptian economy",
    url: "https://www.msmeda.org.eg/",
    category: "government",
    period: { en: "Reported 2024", ar: "معلن في 2024" },
    note: {
      en: "Figures stated publicly by MSMEDA leadership and reported by Ahram Online.",
      ar: "أرقام أعلنتها قيادة الجهاز ونقلتها بوابة الأهرام.",
    },
  },
  sisEgypt: {
    id: "sisEgypt",
    short: {
      en: "Egypt State Information Service",
      ar: "الهيئة العامة للاستعلامات",
    },
    publisher: {
      en: "Egypt State Information Service",
      ar: "الهيئة العامة للاستعلامات، مصر",
    },
    title: "Financial inclusion coverage and national strategy announcements",
    url: "https://www.sis.gov.eg/",
    category: "government",
    period: { en: "2025–2026", ar: "2025–2026" },
  },
  egyptVision2030: {
    id: "egyptVision2030",
    short: { en: "Egypt Vision 2030", ar: "رؤية مصر 2030" },
    publisher: {
      en: "Ministry of Planning and Economic Development, Egypt",
      ar: "وزارة التخطيط والتنمية الاقتصادية، مصر",
    },
    title: "Egypt Vision 2030 — Sustainable Development Strategy",
    url: "https://mped.gov.eg/EgyptVision",
    category: "government",
    period: { en: "Strategy horizon to 2030", ar: "أفق الاستراتيجية حتى 2030" },
  },
  ilo: {
    id: "ilo",
    short: { en: "ILO", ar: "منظمة العمل الدولية" },
    publisher: {
      en: "International Labour Organization",
      ar: "منظمة العمل الدولية",
    },
    title: "Informal economy diagnostic study in Egypt",
    url: "https://www.ilo.org/sites/default/files/2025-04/Informality%20EN.pdf",
    category: "other",
    period: { en: "Published 2025", ar: "نُشرت في 2025" },
  },
  pwcShadow: {
    id: "pwcShadow",
    short: { en: "PwC Middle East", ar: "بي دبليو سي الشرق الأوسط" },
    publisher: { en: "PwC Middle East", ar: "بي دبليو سي الشرق الأوسط" },
    title: "Shedding light on the shadow economy in Egypt",
    url: "https://www.pwc.com/m1/en/publications/shedding-light-on-egypts-shadow-economy.html",
    category: "other",
    period: { en: "Published 2023", ar: "نُشرت في 2023" },
  },
  oecdSme: {
    id: "oecdSme",
    short: { en: "OECD", ar: "منظمة التعاون والتنمية" },
    publisher: { en: "OECD", ar: "منظمة التعاون الاقتصادي والتنمية" },
    title: "SME and Entrepreneurship Policy in Egypt",
    url: "https://www.oecd.org/en/publications/sme-and-entrepreneurship-policy-in-egypt_195d9c43-en.html",
    category: "academic",
    period: { en: "Published 2024", ar: "نُشرت في 2024" },
  },
  pmjdy: {
    id: "pmjdy",
    short: {
      en: "PMJDY, Government of India",
      ar: "برنامج جان دان، حكومة الهند",
    },
    publisher: {
      en: "Department of Financial Services, Government of India",
      ar: "إدارة الخدمات المالية، حكومة الهند",
    },
    title:
      "Pradhan Mantri Jan Dhan Yojana — National Mission for Financial Inclusion",
    url: "https://pmjdy.gov.in/",
    category: "other",
    period: { en: "As of July 2026", ar: "حتى يوليو 2026" },
    note: {
      en: "Progress figures published by the Department of Financial Services and the Press Information Bureau.",
      ar: "أرقام التقدم المنشورة من إدارة الخدمات المالية ومكتب الإعلام الصحفي.",
    },
  },
  npciUpi: {
    id: "npciUpi",
    short: { en: "NPCI", ar: "المؤسسة الوطنية للمدفوعات بالهند" },
    publisher: {
      en: "National Payments Corporation of India",
      ar: "المؤسسة الوطنية للمدفوعات في الهند",
    },
    title: "Unified Payments Interface (UPI) product statistics",
    url: "https://www.npci.org.in/what-we-do/upi/product-statistics",
    category: "other",
    period: { en: "FY 2024–25", ar: "السنة المالية 2024–25" },
  },
  hassouba: {
    id: "hassouba",
    short: { en: "Hassouba (2024)", ar: "حسوبة (2024)" },
    publisher: {
      en: "Review of Economics and Political Science",
      ar: "مجلة مراجعة الاقتصاد والعلوم السياسية",
    },
    title: "Financial inclusion in Egypt: the road ahead",
    url: "https://doi.org/10.1108/REPS-06-2022-0034",
    category: "academic",
    period: {
      en: "Peer reviewed, published 2024",
      ar: "محكَّمة، نُشرت في 2024",
    },
  },
  escwa: {
    id: "escwa",
    short: { en: "UN ESCWA", ar: "الإسكوا" },
    publisher: {
      en: "UN Economic and Social Commission for Western Asia",
      ar: "لجنة الأمم المتحدة الاقتصادية والاجتماعية لغربي آسيا",
    },
    title: "Financial inclusion in the Arab region",
    url: "https://www.unescwa.org/news/escwa-warns-nearly-65-adults-arab-region-still-unbanked-amid-sdg-push",
    category: "other",
    period: { en: "Published 2025", ar: "نُشرت في 2025" },
  },
  gsma: {
    id: "gsma",
    short: { en: "GSMA", ar: "جي إس إم إيه" },
    publisher: {
      en: "GSMA Mobile for Development",
      ar: "جي إس إم إيه — الهاتف المحمول من أجل التنمية",
    },
    title: "Mobile money gender gap — evidence from Findex 2025",
    url: "https://www.gsma.com/solutions-and-impact/connectivity-for-good/mobile-for-development/programme/mobile-money/progress-in-closing-the-mobile-money-gender-gap-has-stalled-latest-evidence-from-findex-2025/",
    category: "other",
    period: { en: "Published 2025", ar: "نُشرت في 2025" },
  },
  nbeEsg2023: {
    id: "nbeEsg2023",
    short: {
      en: "NBE Progress ESG Report 2023",
      ar: "تقرير التقدم البيئي والاجتماعي والحوكمي للبنك الأهلي 2023",
    },
    publisher: {
      en: "National Bank of Egypt",
      ar: "البنك الأهلي المصري",
    },
    title: "2023 National Bank of Egypt Progress ESG Report",
    url: "https://www.nbe.com.eg/AssetsManager/10495ea7-5582-4a8d-b288-e16eddf8dc83.pdf",
    category: "nbe",
    period: {
      en: "Reporting year 2023, figures as at 31 December 2023",
      ar: "السنة المشمولة بالتقرير 2023، والأرقام كما في 31 ديسمبر 2023",
    },
    note: {
      en: "NBE's own sustainability and ESG disclosure. All NBE programme figures on this site — individuals reached, villages, students, branches, ATMs — are reproduced from this report and describe 2023 only.",
      ar: "إفصاح البنك الأهلي المصري عن الاستدامة والمعايير البيئية والاجتماعية والحوكمية. جميع أرقام برامج البنك على هذا الموقع — الأفراد الذين تم الوصول إليهم والقرى والطلاب والفروع وماكينات الصراف — منقولة عن هذا التقرير وتخص عام 2023 فقط.",
    },
  },
  nbeBulletin2025: {
    id: "nbeBulletin2025",
    short: {
      en: "NBE Economic Bulletin, June 2025",
      ar: "النشرة الاقتصادية للبنك الأهلي، يونيو 2025",
    },
    publisher: {
      en: "National Bank of Egypt",
      ar: "البنك الأهلي المصري",
    },
    title: "NBE Economic Bulletin — 2nd issue / June 2025, Volume 75",
    url: "https://www.nbe.com.eg/AssetsManager/ccd7024c-87a6-4e0f-b038-cb1a5b27610c.pdf",
    category: "nbe",
    period: {
      en: "Indicators as at end of 2024, published June 2025",
      ar: "مؤشرات حتى نهاية 2024، ونُشرت في يونيو 2025",
    },
    note: {
      en: "An NBE publication reporting national indicators that the bulletin itself attributes to the Central Bank of Egypt. These are Egypt-wide rates, not NBE customer figures.",
      ar: "منشور صادر عن البنك الأهلي المصري يعرض مؤشرات قومية ينسبها المنشور نفسه إلى البنك المركزي المصري. وهي معدلات على مستوى مصر كلها وليست أرقام عملاء البنك الأهلي.",
    },
  },
  nbeYouTube: {
    id: "nbeYouTube",
    short: {
      en: "NBE official YouTube channel",
      ar: "قناة البنك الأهلي المصري الرسمية على يوتيوب",
    },
    publisher: {
      en: "National Bank of Egypt",
      ar: "البنك الأهلي المصري",
    },
    title: "National Bank of Egypt — official YouTube channel",
    url: "https://www.youtube.com/c/nbe",
    category: "nbe",
    period: { en: "Accessed August 2026", ar: "تم الاطلاع في أغسطس 2026" },
    note: {
      en: "Source of the NBE-published videos embedded on the Videos page. Videos are embedded from the publisher's own channel and are not hosted on this site.",
      ar: "مصدر مقاطع الفيديو المنشورة من البنك الأهلي والمضمّنة في صفحة الفيديوهات. تُعرض المقاطع من قناة الناشر نفسه ولا تُستضاف على هذا الموقع.",
    },
  },
  cbeYouTube: {
    id: "cbeYouTube",
    short: {
      en: "CBE official YouTube channel",
      ar: "قناة البنك المركزي المصري الرسمية على يوتيوب",
    },
    publisher: {
      en: "Central Bank of Egypt",
      ar: "البنك المركزي المصري",
    },
    title: "Central Bank of Egypt — official YouTube channel",
    url: "https://www.youtube.com/@CentralBankofEgypt",
    category: "cbe",
    period: { en: "Accessed August 2026", ar: "تم الاطلاع في أغسطس 2026" },
    note: {
      en: "Source of the CBE-published videos embedded on the Videos page.",
      ar: "مصدر مقاطع الفيديو المنشورة من البنك المركزي والمضمّنة في صفحة الفيديوهات.",
    },
  },
} as const satisfies Record<string, Source>;

export type SourceId = keyof typeof SOURCES;

export const SOURCE_LIST: readonly Source[] = Object.values(SOURCES);

export const SOURCE_CATEGORIES: readonly SourceCategory[] = [
  "worldBank",
  "cbe",
  "nbe",
  "imf",
  "government",
  "academic",
  "other",
];

export function getSource(id: SourceId): Source {
  return SOURCES[id];
}
