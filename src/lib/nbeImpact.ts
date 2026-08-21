import type { Stat } from "./data";
import type { SourceId } from "./sources";
import type { Locale } from "./i18n/config";

/**
 * NBE's contribution to financial inclusion, as published by NBE itself.
 *
 * Rules for this file — the same rules the rest of the site follows:
 *  - Nothing here is estimated, rounded for effect, or inferred.
 *  - Every figure is reproduced from a published NBE document and carries
 *    the source id and the year the figure describes.
 *  - NBE's own programme results are kept strictly separate from Egypt's
 *    national indicators. The national rates below are Central Bank of
 *    Egypt indicators that NBE reprints in its Economic Bulletin; they
 *    describe the whole country and are NOT NBE achievements.
 *
 * Primary sources:
 *  - 2023 National Bank of Egypt Progress ESG Report  (`nbeEsg2023`)
 *  - NBE Economic Bulletin, 2nd issue / June 2025     (`nbeBulletin2025`)
 */

type L = Record<Locale, string>;

/** A figure plus the year it describes, so nothing is read as "current". */
export interface DatedStat extends Stat {
  /** Year or period the figure refers to, shown beside the number. */
  year: string;
}

/* ------------------------------------------------------------------
   Financial inclusion programmes — 2023
   ------------------------------------------------------------------ */

export const NBE_INCLUSION_STATS: DatedStat[] = [
  {
    value: 15000,
    unit: "+",
    year: "2023",
    label: {
      en: "Individuals reached",
      ar: "فرد تم الوصول إليهم",
    },
    detail: {
      en: "Reached through financial literacy sessions and community outreach under the Haya Karima initiative.",
      ar: "تم الوصول إليهم من خلال جلسات التثقيف المالي والتوعية المجتمعية ضمن مبادرة حياة كريمة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 163,
    year: "2023",
    label: {
      en: "Villages reached",
      ar: "قرية تم الوصول إليها",
    },
    detail: {
      en: "Villages covered by financial literacy sessions under the Haya Karima initiative.",
      ar: "قرى شملتها جلسات التثقيف المالي ضمن مبادرة حياة كريمة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 4000,
    year: "2023",
    label: {
      en: "University students reached",
      ar: "طالب جامعي تم الوصول إليهم",
    },
    detail: {
      en: "Students who attended financial literacy sessions covering saving, budgeting and available financial products.",
      ar: "طلاب حضروا جلسات تثقيف مالي تناولت الادخار وإعداد الميزانية والمنتجات المالية المتاحة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 4,
    year: "2023",
    label: {
      en: "Universities involved",
      ar: "جامعات مشاركة",
    },
    detail: {
      en: "Cairo, Helwan, Beni Suef and Menoufiya universities.",
      ar: "جامعات القاهرة وحلوان وبني سويف والمنوفية.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 720000,
    year: "2023",
    label: {
      en: "Previously unbanked customers integrated",
      ar: "عميل غير متعامل مع البنوك سابقًا تم دمجهم",
    },
    detail: {
      en: "Brought into the formal financial sector through the deployment of Meeza prepaid unified cards.",
      ar: "تم دمجهم في القطاع المالي الرسمي من خلال طرح بطاقات ميزة الموحدة مسبقة الدفع.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 42000,
    year: "2023",
    label: {
      en: "Individuals engaged on observance days",
      ar: "فرد تم التواصل معهم في المناسبات العالمية",
    },
    detail: {
      en: "Engaged through targeted financial education programmes tied to global observance days.",
      ar: "تم التواصل معهم عبر برامج تثقيف مالي موجهة مرتبطة بالمناسبات العالمية.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   Reach and network — as at 31 December 2023
   ------------------------------------------------------------------ */

export const NBE_SCALE: DatedStat[] = [
  {
    value: 657,
    year: "2023",
    label: { en: "Branches nationwide", ar: "فرعًا على مستوى الجمهورية" },
    detail: {
      en: "Roughly 47% in Greater Cairo and 20% in Upper Egypt, with the rest across Alexandria, the Delta, Canal and Sharqia.",
      ar: "نحو 47% في القاهرة الكبرى و20% في صعيد مصر، والباقي موزع على الإسكندرية والدلتا والقناة والشرقية.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 6797,
    year: "2023",
    label: { en: "ATMs", ar: "ماكينة صراف آلي" },
    detail: {
      en: "Including 1,238 designed for visually impaired customers and 34 accessible to wheelchair users.",
      ar: "منها 1,238 مصممة لخدمة ضعاف البصر و34 مهيأة لمستخدمي الكراسي المتحركة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 20,
    unit: "M+",
    year: "2023",
    label: { en: "Customers served", ar: "مليون عميل" },
    detail: {
      en: "NBE reports a market share of 44% of Egypt's banking sector.",
      ar: "يفيد البنك بأن حصته السوقية تبلغ 44% من القطاع المصرفي المصري.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 6,
    year: "2023",
    label: { en: "Bus branches", ar: "فرع متنقل (أتوبيس)" },
    detail: {
      en: "Mobile branches alongside 38 electronic service branches and 42 solar-powered branches.",
      ar: "فروع متنقلة إلى جانب 38 فرع خدمة إلكترونية و42 فرعًا يعمل بالطاقة الشمسية.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   Who NBE's customer base reaches — 2023
   ------------------------------------------------------------------ */

export const NBE_INCLUSIVE_BANKING: DatedStat[] = [
  {
    value: 41,
    unit: "%",
    year: "2023",
    label: { en: "of NBE customers are women", ar: "من عملاء البنك من النساء" },
    detail: {
      en: "NBE reports 4 million female liabilities customers.",
      ar: "يفيد البنك بوجود 4 ملايين عميلة في جانب الالتزامات.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 37,
    unit: "%",
    year: "2023",
    label: {
      en: "of account holders are under 35",
      ar: "من أصحاب الحسابات دون سن 35",
    },
    detail: {
      en: "Youth liabilities customers aged 21 to 36 make up the same share of the base.",
      ar: "يمثل عملاء الشباب في جانب الالتزامات من عمر 21 إلى 36 عامًا النسبة نفسها من القاعدة.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 402,
    unit: "K",
    year: "2023",
    label: {
      en: "Customers on low incomes",
      ar: "ألف عميل من ذوي الدخل المنخفض",
    },
    detail: {
      en: "Customers with income up to EGP 5,000.",
      ar: "عملاء بدخل يصل إلى 5,000 جنيه مصري.",
    },
    source: "nbeEsg2023",
  },
  {
    value: 48,
    unit: "%",
    year: "2023",
    label: {
      en: "of the retail portfolio is outside Cairo and Alexandria",
      ar: "من محفظة الأفراد خارج القاهرة والإسكندرية",
    },
    detail: {
      en: "230 branches have employees literate in sign language.",
      ar: "يوجد 230 فرعًا به موظفون يجيدون لغة الإشارة.",
    },
    source: "nbeEsg2023",
  },
];

/* ------------------------------------------------------------------
   National context — Central Bank of Egypt indicators, reprinted by NBE
   These describe Egypt as a whole. They are NOT NBE achievements.
   ------------------------------------------------------------------ */

export const NATIONAL_CONTEXT: DatedStat[] = [
  {
    value: 74.8,
    unit: "%",
    decimals: 1,
    year: "2024",
    label: {
      en: "Financial inclusion rate in Egypt",
      ar: "معدل الشمول المالي في مصر",
    },
    detail: {
      en: "Around 52 million of 69.6 million adults aged 15+, up from 70.7% at the end of 2023.",
      ar: "نحو 52 مليونًا من إجمالي 69.6 مليون بالغ من عمر 15 عامًا فأكثر، ارتفاعًا من 70.7% في نهاية 2023.",
    },
    source: "nbeBulletin2025",
  },
  {
    value: 68.8,
    unit: "%",
    decimals: 1,
    year: "2024",
    label: {
      en: "Women's financial inclusion rate",
      ar: "معدل الشمول المالي للمرأة",
    },
    detail: {
      en: "23.3 million of 33.9 million women — a 295% rise in the number included since 2016.",
      ar: "23.3 مليون من إجمالي 33.9 مليون امرأة — بزيادة 295% في عدد المشمولات منذ 2016.",
    },
    source: "nbeBulletin2025",
  },
  {
    value: 53.1,
    unit: "%",
    decimals: 1,
    year: "2024",
    label: {
      en: "Youth financial inclusion rate",
      ar: "معدل الشمول المالي للشباب",
    },
    detail: {
      en: "Ages 15 to 35, covering 39.4 million people — a 65% rise in the number included since 2020.",
      ar: "من عمر 15 إلى 35 عامًا، ويشمل 39.4 مليون شخص — بزيادة 65% في العدد المشمول منذ 2020.",
    },
    source: "nbeBulletin2025",
  },
];

/* ------------------------------------------------------------------
   Timeline — only milestones NBE has itself published a date for
   ------------------------------------------------------------------ */

export interface TimelineEntry {
  year: string;
  title: L;
  body: L;
  source: SourceId;
}

export const NBE_TIMELINE: TimelineEntry[] = [
  {
    year: "2016",
    title: {
      en: "A microfinance partnership begins",
      ar: "بداية شراكة في التمويل متناهي الصغر",
    },
    body: {
      en: "NBE's partnership with the I Am the Egyptian Foundation begins. By the 2023 report it covers 148,567 beneficiaries through 129 engaged NBE branches.",
      ar: "بدأت شراكة البنك الأهلي المصري مع مؤسسة أنا المصري. وبحلول تقرير 2023 وصلت إلى 148,567 مستفيدًا عبر 129 فرعًا مشاركًا من فروع البنك.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2019",
    title: {
      en: "A dedicated sustainable finance department",
      ar: "إدارة متخصصة للتمويل المستدام",
    },
    body: {
      en: "NBE's Board of Directors approves creating a sustainable finance and specialised programmes department within the Corporate Banking Group.",
      ar: "وافق مجلس إدارة البنك على إنشاء إدارة للتمويل المستدام والبرامج المتخصصة ضمن مجموعة الخدمات المصرفية للشركات.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2021–2022",
    title: {
      en: "Microfinance volume grows",
      ar: "نمو حجم التمويل متناهي الصغر",
    },
    body: {
      en: "Financing volume through the I Am the Egyptian partnership rises from EGP 741.7 million in 2021 to EGP 1.218 billion in 2022.",
      ar: "ارتفع حجم التمويل عبر شراكة أنا المصري من 741.7 مليون جنيه في 2021 إلى 1.218 مليار جنيه في 2022.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2023",
    title: {
      en: "Financial literacy reaches villages and universities",
      ar: "التثقيف المالي يصل إلى القرى والجامعات",
    },
    body: {
      en: "NBE reports reaching 15,000 individuals across 163 villages under Haya Karima, and 4,000 students across four universities.",
      ar: "أفاد البنك بالوصول إلى 15,000 فرد في 163 قرية ضمن مبادرة حياة كريمة، و4,000 طالب في أربع جامعات.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2023",
    title: {
      en: "The Meeza Unified card launches",
      ar: "إطلاق بطاقة ميزة الموحدة",
    },
    body: {
      en: "A card that works as both a student ID and a banking tool. Separately, Meeza prepaid unified cards bring 720,000 previously unbanked customers into the formal sector.",
      ar: "بطاقة تعمل كهوية جامعية وأداة مصرفية في آن واحد. وبشكل منفصل، أدخلت بطاقات ميزة الموحدة مسبقة الدفع 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع الرسمي.",
    },
    source: "nbeEsg2023",
  },
  {
    year: "2024–2025",
    title: {
      en: "National indicators keep climbing",
      ar: "المؤشرات القومية تواصل الارتفاع",
    },
    body: {
      en: "NBE's June 2025 Economic Bulletin reports Egypt's financial inclusion rate at 74.8% at the end of 2024. This is a Central Bank of Egypt national indicator, not an NBE result.",
      ar: "تفيد النشرة الاقتصادية للبنك الأهلي في يونيو 2025 بأن معدل الشمول المالي في مصر بلغ 74.8% في نهاية 2024. وهذا مؤشر قومي صادر عن البنك المركزي المصري وليس نتيجة خاصة بالبنك الأهلي.",
    },
    source: "nbeBulletin2025",
  },
];

/* ------------------------------------------------------------------
   Initiatives
   ------------------------------------------------------------------ */

export interface Initiative {
  id: string;
  icon: string;
  title: L;
  /** What is it? */
  what: L;
  /** Why does it matter? */
  why: L;
  /** Who does it help? */
  who: L;
  source: SourceId;
}

export const NBE_INITIATIVES: Initiative[] = [
  {
    id: "haya-karima",
    icon: "sprout",
    title: {
      en: "Haya Karima village outreach",
      ar: "التوعية بالقرى ضمن حياة كريمة",
    },
    what: {
      en: "Financial literacy sessions run in villages under the national Haya Karima initiative, with content adapted to each governorate.",
      ar: "جلسات تثقيف مالي تُعقد في القرى ضمن مبادرة حياة كريمة الوطنية، بمحتوى مُكيَّف حسب كل محافظة.",
    },
    why: {
      en: "NBE reports that financial literacy gaps are widest in rural areas, where branches are furthest away.",
      ar: "يفيد البنك بأن فجوات التثقيف المالي تتسع في المناطق الريفية حيث تبعد الفروع أكثر.",
    },
    who: {
      en: "15,000 individuals across 163 villages in 2023.",
      ar: "15,000 فرد في 163 قرية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "university-literacy",
    icon: "graduation",
    title: {
      en: "University financial literacy programme",
      ar: "برنامج التثقيف المالي الجامعي",
    },
    what: {
      en: "Sessions for university students covering saving, budgeting and the financial products available to them.",
      ar: "جلسات لطلاب الجامعات تتناول الادخار وإعداد الميزانية والمنتجات المالية المتاحة لهم.",
    },
    why: {
      en: "It prepares young adults for financial independence before they enter the workforce.",
      ar: "تُعدّ الشباب للاستقلال المالي قبل دخولهم سوق العمل.",
    },
    who: {
      en: "4,000 students at Cairo, Helwan, Beni Suef and Menoufiya universities in 2023.",
      ar: "4,000 طالب في جامعات القاهرة وحلوان وبني سويف والمنوفية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "meeza-unified",
    icon: "creditCard",
    title: { en: "Meeza Unified card", ar: "بطاقة ميزة الموحدة" },
    what: {
      en: "A card launched for university students that serves as both a student ID and a banking tool, supporting e-payments, contactless transactions and mobile wallet services.",
      ar: "بطاقة أُطلقت لطلاب الجامعات تجمع بين الهوية الجامعية والأداة المصرفية، وتدعم المدفوعات الإلكترونية والمعاملات اللاتلامسية وخدمات المحفظة الإلكترونية.",
    },
    why: {
      en: "It puts a first payment product in students' hands at the point where they are forming financial habits.",
      ar: "تضع أول منتج للدفع في يد الطالب في المرحلة التي تتشكل فيها عاداته المالية.",
    },
    who: {
      en: "University students. Separately, Meeza prepaid unified cards brought 720,000 previously unbanked customers into the formal sector in 2023.",
      ar: "طلاب الجامعات. وبشكل منفصل، أدخلت بطاقات ميزة الموحدة مسبقة الدفع 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع الرسمي في 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "women-entrepreneurs",
    icon: "handshake",
    title: {
      en: "Funding channels for women entrepreneurs",
      ar: "قنوات تمويل لرائدات الأعمال",
    },
    what: {
      en: "Dedicated MSMEDA funding channels of EGP 200 million for female-owned enterprises, plus an EGP 350 million agreement prioritising women entrepreneurs in microfinance.",
      ar: "قنوات تمويل مخصصة عبر جهاز تنمية المشروعات بقيمة 200 مليون جنيه للمشروعات المملوكة للنساء، إضافة إلى اتفاق بقيمة 350 مليون جنيه يعطي الأولوية لرائدات الأعمال في التمويل متناهي الصغر.",
    },
    why: {
      en: "Access to credit is one of the barriers that keeps women's businesses informal.",
      ar: "يمثل الحصول على التمويل أحد العوائق التي تبقي مشروعات النساء في القطاع غير الرسمي.",
    },
    who: {
      en: "NBE reports reaching 585 female entrepreneurs with non-financial services in 2023.",
      ar: "أفاد البنك بالوصول إلى 585 رائدة أعمال بخدمات غير مالية خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "accessible-banking",
    icon: "userCheck",
    title: {
      en: "Banking for customers with disabilities",
      ar: "خدمات مصرفية لذوي الإعاقة",
    },
    what: {
      en: "1,238 ATMs designed for visually impaired customers, 34 accessible to wheelchair users, and 230 branches with employees literate in sign language.",
      ar: "1,238 ماكينة صراف مصممة لخدمة ضعاف البصر، و34 مهيأة لمستخدمي الكراسي المتحركة، و230 فرعًا به موظفون يجيدون لغة الإشارة.",
    },
    why: {
      en: "A branch or machine that cannot be used is the same as no branch at all.",
      ar: "الفرع أو الماكينة التي يتعذر استخدامها لا تختلف عن عدم وجودها أصلًا.",
    },
    who: {
      en: "NBE also licensed the Nour El-Basira Association for the visually impaired through customised account services.",
      ar: "كما رخّص البنك لجمعية نور البصيرة للمكفوفين من خلال خدمات حسابات مُخصصة.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "mobile-branches",
    icon: "mapPin",
    title: {
      en: "Bus branches and electronic service branches",
      ar: "الفروع المتنقلة وفروع الخدمة الإلكترونية",
    },
    what: {
      en: "Six mobile bus branches and 38 electronic service branches, alongside a network of 657 branches and 6,797 ATMs.",
      ar: "ستة فروع متنقلة (أتوبيس) و38 فرع خدمة إلكترونية، إلى جانب شبكة من 657 فرعًا و6,797 ماكينة صراف آلي.",
    },
    why: {
      en: "They bring services to places where a permanent branch is not viable.",
      ar: "تصل بالخدمات إلى أماكن يصعب فيها إنشاء فرع دائم.",
    },
    who: {
      en: "Communities away from the main branch network. NBE reports 48% of its retail portfolio sits outside Cairo and Alexandria.",
      ar: "المجتمعات البعيدة عن شبكة الفروع الرئيسية. ويفيد البنك بأن 48% من محفظة الأفراد لديه خارج القاهرة والإسكندرية.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "nilepreneurs",
    icon: "store",
    title: { en: "NilePreneurs and BDS Hubs", ar: "نايل بيرنرز ومراكز خدمات تطوير الأعمال" },
    what: {
      en: "A national programme led by the Central Bank of Egypt with Nile University, which NBE supports, offering incubation, training and Business Development Service hubs.",
      ar: "برنامج وطني بقيادة البنك المركزي المصري بالتعاون مع جامعة النيل، ويدعمه البنك الأهلي، ويقدم الاحتضان والتدريب ومراكز خدمات تطوير الأعمال.",
    },
    why: {
      en: "It helps small businesses build the records and skills that formal finance requires.",
      ar: "يساعد المشروعات الصغيرة على بناء السجلات والمهارات التي يتطلبها التمويل الرسمي.",
    },
    who: {
      en: "32,707 beneficiaries and 13,145 new entrepreneurs across 12 governorates and 70 engaged NBE branches in 2023.",
      ar: "32,707 مستفيد و13,145 رائد أعمال جديد في 12 محافظة و70 فرعًا مشاركًا من فروع البنك خلال 2023.",
    },
    source: "nbeEsg2023",
  },
  {
    id: "business-expos",
    icon: "users",
    title: { en: "Business expo outreach", ar: "التوعية عبر معارض الأعمال" },
    what: {
      en: "Participation in business expos to explain financial solutions to entrepreneurs and business owners face to face.",
      ar: "المشاركة في معارض الأعمال لشرح الحلول المالية لرواد الأعمال وأصحاب المشروعات وجهًا لوجه.",
    },
    why: {
      en: "Many small business owners have never had a product explained to them by a bank directly.",
      ar: "كثير من أصحاب المشروعات الصغيرة لم يسبق أن شرح لهم بنك منتجاته مباشرة.",
    },
    who: {
      en: "2,000 entrepreneurs and business owners in 2023.",
      ar: "2,000 رائد أعمال وصاحب مشروع خلال عام 2023.",
    },
    source: "nbeEsg2023",
  },
];
