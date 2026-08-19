import type { SourceId } from "./sources";
import type { Locale } from "./i18n/config";

/**
 * Verified figures used across the site.
 *
 * Rules for this file:
 *  - No estimated, rounded-for-effect or illustrative numbers.
 *  - Every entry carries the source id it came from.
 *  - Findex percentages are the share of adults aged 15+ unless stated.
 *
 * Labels are localised; the numbers themselves are language-independent.
 */

type L = Record<Locale, string>;

export interface Stat {
  value: number;
  /** Rendered suffix, e.g. "%" or "M". */
  unit?: string;
  label: L;
  detail?: L;
  source: SourceId;
  decimals?: number;
}

/* ------------------------------------------------------------------
   Headline indicators — Egypt
   ------------------------------------------------------------------ */

export const EGYPT_HEADLINE: Stat[] = [
  {
    value: 77.6,
    unit: "%",
    label: {
      en: "Financial inclusion rate",
      ar: "معدل الشمول المالي",
    },
    detail: {
      en: "Share of Egyptians aged 15+ holding an active transactional account, on the Central Bank of Egypt's definition.",
      ar: "نسبة المصريين من عمر 15 عامًا فأكثر ممن يملكون حساب معاملات نشطًا، وفق تعريف البنك المركزي المصري.",
    },
    source: "cbeInclusion2025",
    decimals: 1,
  },
  {
    value: 54.7,
    unit: "M",
    label: {
      en: "Citizens with active accounts",
      ar: "مواطنًا يملكون حسابات نشطة (بالمليون)",
    },
    detail: {
      en: "Out of an eligible population of 70.5 million Egyptians aged 15 and above.",
      ar: "من إجمالي 70.5 مليون مصري من عمر 15 عامًا فأكثر.",
    },
    source: "cbeInclusion2025",
    decimals: 1,
  },
  {
    value: 43.1,
    unit: "%",
    label: {
      en: "Account ownership (World Bank)",
      ar: "امتلاك الحسابات (البنك الدولي)",
    },
    detail: {
      en: "The World Bank's survey-based measure, which counts a bank or mobile money account held by the respondent.",
      ar: "المقياس المبني على المسح لدى البنك الدولي، ويحصي الحساب البنكي أو محفظة الهاتف التي يملكها المستجيب نفسه.",
    },
    source: "findex2025",
    decimals: 1,
  },
  {
    value: 219,
    unit: "%",
    label: {
      en: "Growth in inclusion since 2016",
      ar: "نمو الشمول المالي منذ 2016",
    },
    detail: {
      en: "Increase in the CBE financial inclusion rate between 2016 and 2025.",
      ar: "الزيادة في معدل الشمول المالي وفق البنك المركزي بين 2016 و2025.",
    },
    source: "cbeInclusion2025",
  },
];

/** Account ownership over time, World Bank Global Findex survey waves. */
export const ACCOUNT_OWNERSHIP_SERIES: {
  year: number;
  egypt: number;
  india: number;
}[] = [
  { year: 2011, egypt: 9.7, india: 35.2 },
  { year: 2014, egypt: 14.1, india: 53.1 },
  { year: 2017, egypt: 32.8, india: 79.9 },
  { year: 2021, egypt: 27.4, india: 77.5 },
  { year: 2024, egypt: 43.1, india: 89.0 },
];

/** Who is included, and who is left out — Egypt, Findex 2024. */
export const EGYPT_GAPS: {
  group: L;
  a: { label: L; value: number };
  b: { label: L; value: number };
  insight: L;
}[] = [
  {
    group: { en: "Income", ar: "الدخل" },
    a: {
      label: { en: "Poorest 40%", ar: "الأفقر 40%" },
      value: 33.1,
    },
    b: {
      label: { en: "Richest 60%", ar: "الأغنى 60%" },
      value: 49.8,
    },
    insight: {
      en: "The widest single gap in the Egyptian data: 16.7 percentage points between the poorest 40% and the richest 60%.",
      ar: "أوسع فجوة منفردة في البيانات المصرية: 16.7 نقطة مئوية بين الأفقر 40% والأغنى 60%.",
    },
  },
  {
    group: { en: "Education", ar: "التعليم" },
    a: {
      label: {
        en: "Primary education or less",
        ar: "تعليم ابتدائي أو أقل",
      },
      value: 38.5,
    },
    b: {
      label: {
        en: "Secondary education or more",
        ar: "تعليم ثانوي أو أعلى",
      },
      value: 48.3,
    },
    insight: {
      en: "Adults with secondary education or more are almost 10 percentage points more likely to hold an account.",
      ar: "احتمال امتلاك حساب لدى الحاصلين على تعليم ثانوي فأعلى يزيد بنحو 10 نقاط مئوية.",
    },
  },
  {
    group: { en: "Location", ar: "المكان" },
    a: { label: { en: "Rural", ar: "الريف" }, value: 39.3 },
    b: { label: { en: "Urban", ar: "الحضر" }, value: 45.3 },
    insight: {
      en: "A 6 percentage point rural–urban gap, in a country where most people live in rural areas.",
      ar: "فجوة قدرها 6 نقاط مئوية بين الريف والحضر، في بلد يعيش أغلب سكانه في الريف.",
    },
  },
  {
    group: { en: "Gender", ar: "النوع" },
    a: { label: { en: "Women", ar: "النساء" }, value: 40.2 },
    b: { label: { en: "Men", ar: "الرجال" }, value: 46.0 },
    insight: {
      en: "A 5.7 percentage point gender gap — narrower than the wider MENA region, but still present.",
      ar: "فجوة بين الجنسين قدرها 5.7 نقطة مئوية — أضيق من متوسط منطقة الشرق الأوسط وشمال أفريقيا، لكنها قائمة.",
    },
  },
];

/** Digital readiness versus digital usage — the core Egyptian paradox. */
export const EGYPT_DIGITAL_FUNNEL: Stat[] = [
  {
    value: 84.6,
    unit: "%",
    label: { en: "Own a mobile phone", ar: "يملكون هاتفًا محمولًا" },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 55.7,
    unit: "%",
    label: {
      en: "Main phone is a smartphone",
      ar: "هاتفهم الأساسي هاتف ذكي",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 43.1,
    unit: "%",
    label: { en: "Have an account", ar: "يملكون حسابًا" },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 28.2,
    unit: "%",
    label: {
      en: "Have a digitally enabled account",
      ar: "يملكون حسابًا مفعَّلًا رقميًا",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 18.5,
    unit: "%",
    label: {
      en: "Pay with a card or phone",
      ar: "يدفعون ببطاقة أو هاتف",
    },
    source: "findexApi",
    decimals: 1,
  },
];

/** How Egyptians use — or do not use — formal finance. */
export const EGYPT_USAGE: { value: number; label: L; tone: "good" | "bad" | "mixed" }[] =
  [
    {
      value: 13.8,
      label: {
        en: "Saved at a financial institution or mobile money account",
        ar: "ادّخروا لدى مؤسسة مالية أو محفظة إلكترونية",
      },
      tone: "good",
    },
    {
      value: 10.4,
      label: {
        en: "Borrowed formally from a bank or mobile money provider",
        ar: "اقترضوا رسميًا من بنك أو مقدم خدمة محفظة",
      },
      tone: "good",
    },
    {
      value: 38.4,
      label: {
        en: "Borrowed from family or friends",
        ar: "اقترضوا من الأهل أو الأصدقاء",
      },
      tone: "mixed",
    },
    {
      value: 48.4,
      label: {
        en: "Pay utility bills in cash only",
        ar: "يسددون فواتير المرافق نقدًا فقط",
      },
      tone: "bad",
    },
    {
      value: 26.5,
      label: {
        en: "Receive wages in cash only",
        ar: "يتقاضون أجورهم نقدًا فقط",
      },
      tone: "bad",
    },
    {
      value: 27.6,
      label: {
        en: "Sent or received domestic remittances",
        ar: "أرسلوا أو تلقوا تحويلات محلية",
      },
      tone: "good",
    },
  ];

/** Self-reported barriers among Egyptian adults who have no account. */
export const EGYPT_BARRIERS: { label: L; value: number }[] = [
  {
    label: {
      en: "Not enough money to use an account",
      ar: "لا يوجد مال كافٍ لاستخدام حساب",
    },
    value: 90.1,
  },
  {
    label: {
      en: "Financial services are too expensive",
      ar: "الخدمات المالية مرتفعة التكلفة",
    },
    value: 20.4,
  },
  {
    label: {
      en: "Someone else in the family already has one",
      ar: "يوجد بالفعل حساب لأحد أفراد الأسرة",
    },
    value: 16.9,
  },
];

/* ------------------------------------------------------------------
   Women
   ------------------------------------------------------------------ */

export const WOMEN_STATS: Stat[] = [
  {
    value: 71.4,
    unit: "%",
    label: {
      en: "Women's financial inclusion rate in Egypt",
      ar: "معدل الشمول المالي للمرأة في مصر",
    },
    detail: {
      en: "Up from 19.1% in 2016 — a 316% increase on the CBE measure.",
      ar: "ارتفاعًا من 19.1% في 2016 — بزيادة 316% وفق مقياس البنك المركزي.",
    },
    source: "cbeInclusion2025",
    decimals: 1,
  },
  {
    value: 40.2,
    unit: "%",
    label: {
      en: "Egyptian women with an account",
      ar: "نساء مصريات يملكن حسابًا",
    },
    detail: {
      en: "World Bank survey measure, against 46.0% of Egyptian men.",
      ar: "وفق مسح البنك الدولي، مقابل 46.0% من الرجال المصريين.",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 5.7,
    unit: "pp",
    label: {
      en: "Gender gap in account ownership",
      ar: "الفجوة بين الجنسين في امتلاك الحسابات",
    },
    detail: {
      en: "Percentage point difference between Egyptian men and women.",
      ar: "الفارق بالنقاط المئوية بين الرجال والنساء في مصر.",
    },
    source: "findexApi",
    decimals: 1,
  },
  {
    value: 77,
    unit: "%",
    label: {
      en: "Women worldwide with an account",
      ar: "نساء حول العالم يملكن حسابًا",
    },
    detail: {
      en: "The global gender gap has narrowed to 4 percentage points.",
      ar: "تقلصت الفجوة العالمية بين الجنسين إلى 4 نقاط مئوية.",
    },
    source: "findex2025",
  },
];

/**
 * Account ownership among Egyptian women, Findex survey waves.
 * The 2011 wave has no published female figure for Egypt, so the series
 * starts at 2014.
 */
export const WOMEN_TREND: { year: number; value: number }[] = [
  { year: 2014, value: 9.3 },
  { year: 2017, value: 27.0 },
  { year: 2021, value: 24.2 },
  { year: 2024, value: 40.2 },
];

/* ------------------------------------------------------------------
   Small business
   ------------------------------------------------------------------ */

export const SME_STATS: Stat[] = [
  {
    value: 43,
    unit: "%",
    label: {
      en: "Of Egypt's GDP comes from MSMEs",
      ar: "من الناتج المحلي المصري مصدره المشروعات الصغيرة",
    },
    source: "msmeda",
  },
  {
    value: 90,
    unit: "%",
    label: {
      en: "Of Egypt's private sector is MSMEs",
      ar: "من القطاع الخاص المصري مشروعات صغيرة",
    },
    source: "msmeda",
  },
  {
    value: 25,
    unit: "%",
    label: {
      en: "Of bank lending portfolios directed to MSMEs",
      ar: "من محافظ إقراض البنوك موجهة للمشروعات الصغيرة",
    },
    detail: {
      en: "A regulatory target set by the Central Bank of Egypt, with at least 10% for small enterprises.",
      ar: "مستهدف تنظيمي حدده البنك المركزي المصري، بما لا يقل عن 10% للمشروعات الصغيرة.",
    },
    source: "cbeMsme",
  },
  {
    value: 3.6,
    unit: "%",
    label: {
      en: "Of adults borrowed to start or run a business",
      ar: "من البالغين اقترضوا لبدء مشروع أو تشغيله",
    },
    detail: {
      en: "Against 11.8% of adults in India.",
      ar: "مقابل 11.8% من البالغين في الهند.",
    },
    source: "findexApi",
    decimals: 1,
  },
];

/* ------------------------------------------------------------------
   Egypt vs India
   ------------------------------------------------------------------ */

export interface ComparisonRow {
  metric: L;
  egypt: number;
  india: number;
  unit: string;
  note?: L;
}

export const EGYPT_INDIA_COMPARISON: ComparisonRow[] = [
  {
    metric: { en: "Account ownership", ar: "امتلاك الحسابات" },
    egypt: 43.1,
    india: 89.0,
    unit: "%",
  },
  {
    metric: { en: "Rural account ownership", ar: "امتلاك الحسابات في الريف" },
    egypt: 39.3,
    india: 89.9,
    unit: "%",
    note: {
      en: "In India rural account ownership is higher than urban — the reverse of Egypt.",
      ar: "في الهند تفوق نسبة امتلاك الحسابات في الريف نظيرتها في الحضر — عكس الحال في مصر.",
    },
  },
  {
    metric: { en: "Women with an account", ar: "النساء اللاتي يملكن حسابًا" },
    egypt: 40.2,
    india: 89.2,
    unit: "%",
    note: {
      en: "India has effectively closed its gender gap; Egyptian women trail men by 5.7 points.",
      ar: "أغلقت الهند فجوتها بين الجنسين فعليًا، بينما تتخلف النساء في مصر عن الرجال بـ5.7 نقطة.",
    },
  },
  {
    metric: { en: "Digitally enabled account", ar: "حساب مفعَّل رقميًا" },
    egypt: 28.2,
    india: 31.1,
    unit: "%",
  },
  {
    metric: { en: "Pay with a card or phone", ar: "الدفع ببطاقة أو هاتف" },
    egypt: 18.5,
    india: 27.7,
    unit: "%",
  },
  {
    metric: {
      en: "Saved at a financial institution",
      ar: "الادخار لدى مؤسسة مالية",
    },
    egypt: 13.8,
    india: 27.0,
    unit: "%",
  },
  {
    metric: { en: "Borrowed formally", ar: "الاقتراض الرسمي" },
    egypt: 10.4,
    india: 15.1,
    unit: "%",
  },
  {
    metric: {
      en: "Utility bills paid in cash only",
      ar: "فواتير المرافق المسددة نقدًا فقط",
    },
    egypt: 48.4,
    india: 25.1,
    unit: "%",
  },
  {
    metric: { en: "Own a mobile phone", ar: "امتلاك هاتف محمول" },
    egypt: 84.6,
    india: 66.5,
    unit: "%",
    note: {
      en: "Egypt leads India on device ownership — the constraint is not the handset.",
      ar: "تتقدم مصر على الهند في امتلاك الأجهزة — فالقيد ليس في الهاتف.",
    },
  },
  {
    metric: {
      en: "Main phone is a smartphone",
      ar: "الهاتف الأساسي هاتف ذكي",
    },
    egypt: 55.7,
    india: 42.0,
    unit: "%",
  },
];

/* ------------------------------------------------------------------
   Context figures
   ------------------------------------------------------------------ */

export const CONTEXT = {
  ruralShare: {
    value: 56.7,
    label: {
      en: "of Egyptians live in rural areas",
      ar: "من المصريين يعيشون في الريف",
    },
    source: "wdiRural" as SourceId,
  },
  branchDensity: {
    value: 6.56,
    label: {
      en: "commercial bank branches per 100,000 adults in Egypt",
      ar: "فرعًا مصرفيًا تجاريًا لكل 100 ألف بالغ في مصر",
    },
    source: "imfFas" as SourceId,
  },
  informalGdp: {
    value: 40,
    label: {
      en: "of Egyptian GDP is estimated to sit in the informal economy",
      ar: "من الناتج المحلي المصري يُقدَّر وقوعه في الاقتصاد غير الرسمي",
    },
    source: "pwcShadow" as SourceId,
  },
  globalAccount: {
    value: 79,
    label: {
      en: "of adults worldwide now hold an account",
      ar: "من البالغين حول العالم يملكون حسابًا",
    },
    source: "findex2025" as SourceId,
  },
  unbanked: {
    value: 1.3,
    label: {
      en: "billion adults worldwide remain unbanked",
      ar: "مليار بالغ حول العالم ما زالوا خارج النظام المصرفي",
    },
    source: "findex2025" as SourceId,
  },
  menaAccount: {
    value: 53,
    label: {
      en: "account ownership across the Middle East and North Africa",
      ar: "نسبة امتلاك الحسابات في الشرق الأوسط وشمال أفريقيا",
    },
    source: "findex2025" as SourceId,
  },
} as const;
