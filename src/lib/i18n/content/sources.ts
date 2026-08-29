import type { Locale } from "../config";

const en = {
  meta: {
    title: "Sources",
    description:
      "Every statistic used on this site, traced to its publisher — the World Bank, the Central Bank of Egypt, the IMF, Egyptian government bodies, academic work and other organisations.",
  },
  hero: {
    eyebrow: "Outlook",
    title: "Sources",
    description:
      "Every figure on this site points back to an entry below. When two institutions measure the same thing in different ways, we show both and explain the difference — rather than just picking one and moving on.",
  },
  method: {
    eyebrow: "Method",
    title: "How this site handles data",
    items: [
      {
        t: "No estimated figures",
        b: "Every number here comes straight from a published source. Nothing is interpolated, rounded to look better, or invented to fill a gap. When a figure simply doesn't exist — like the 2011 female account ownership rate for Egypt — the series just starts later instead.",
      },
      {
        t: "Every figure is labelled",
        b: "Each statistic is labelled with its publisher and the period it covers — not the date it was published. Survey data is labelled by the year the fieldwork actually happened.",
      },
      {
        t: "Competing measures are both shown",
        b: "The Central Bank of Egypt and the World Bank report different national inclusion rates, because they're measuring different things. Both show up throughout the site, each one clearly labelled.",
      },
      {
        t: "The inconvenient data stays in",
        b: "Egypt's account ownership actually fell between the 2017 and 2021 survey waves. That drop is shown exactly as published, not smoothed over — and we talk through the likely reasons for it.",
      },
    ],
  },
  list: {
    eyebrowSuffix: "sources",
    title: "Organised by publisher",
    description:
      "Links open on the publisher's own site. If a publisher blocks automated access, the entry points to the relevant section of their site instead of a specific document — which tends to move around.",
  },
  categories: {
    worldBank: "World Bank",
    cbe: "Central Bank of Egypt",
    nbe: "National Bank of Egypt",
    imf: "International Monetary Fund",
    government: "Egyptian government",
    academic: "Academic",
    other: "Other organisations",
  },
  limits: {
    eyebrow: "Limitations",
    title: "What this data cannot tell you",
    description:
      "Being upfront about what the evidence can't tell you is part of presenting it honestly.",
    items: [
      {
        t: "Survey data carries sampling error",
        b: "The Global Findex is a sample survey, not a census. A difference of one or two percentage points between waves shouldn't be read into too much — and the swing in Egypt's numbers between 2017 and 2021 is a good reminder of that.",
      },
      {
        t: "Self-reported answers have limits",
        b: "Findex asks people about their own behaviour. Someone might not actually know whether their account is digitally enabled, and the reasons people give for not having one are often as much about perception as fact.",
      },
      {
        t: "Supply-side data counts products, not people",
        b: "Institutional reporting counts accounts and cards, not people. One person can hold several of each, and an account counted as 'active' might barely get used.",
      },
      {
        t: "No governorate-level breakdown exists",
        b: "Egypt's published inclusion data is broken down nationally, and split between rural and urban — nothing more granular than that. So this site doesn't show governorate-level rates, and the map here is deliberately schematic rather than precise.",
      },
      {
        t: "Definitions differ between countries",
        b: "Nine of the ten indicators in the Egypt–Kenya comparison come from the same Findex survey round, so they're genuinely like for like. The exception is the smartphone-ownership row, which comes from Kenya's telecoms regulator instead, and is labelled that way. Comparisons built from each country's own national statistics wouldn't be like for like.",
      },
      {
        t: "Figures move",
        b: "Financial inclusion data gets revised and updated over time. Every figure here is labelled with its period, so you can check it against whatever the publisher currently shows.",
      },
    ],
  },
};

export type SourcesDict = typeof en;

const ar: SourcesDict = {
  meta: {
    title: "المصادر",
    description:
      "كل إحصاء مستخدم في هذا الموقع، موثقًا بجهته الناشرة — البنك الدولي، والبنك المركزي المصري، وصندوق النقد الدولي، وجهات حكومية مصرية، وأبحاث أكاديمية ومنظمات أخرى.",
  },
  hero: {
    eyebrow: "نظرة مستقبلية",
    title: "المصادر",
    description:
      "كل رقم في هذا الموقع يشير إلى مدخل من المداخل أدناه. وحين تقيس مؤسستان الشيء نفسه بطريقتين مختلفتين، يُعرض المقياسان معًا ويُشرح الفارق بدل حسمه باختيار أحدهما.",
  },
  method: {
    eyebrow: "المنهجية",
    title: "كيف يتعامل هذا الموقع مع البيانات",
    items: [
      {
        t: "لا أرقام تقديرية",
        b: "كل رقم منقول عن مصدر منشور. لا استيفاء بيني، ولا تقريب لأغراض التأثير، ولا اختلاق لسد فجوة. وحين لا يوجد رقم — مثل معدل امتلاك الإناث للحسابات في مصر عام 2011 — تبدأ السلسلة ببساطة في وقت لاحق.",
      },
      {
        t: "كل رقم موضَّح",
        b: "كل إحصاء يحمل اسم الجهة الناشرة والفترة التي تغطيها البيانات، لا تاريخ النشر. وبيانات المسح موضَّحة بسنة العمل الميداني.",
      },
      {
        t: "المقاييس المتنافسة تُعرض معًا",
        b: "يعرض البنك المركزي المصري والبنك الدولي معدلات شمول وطنية مختلفة لأنهما يقيسان أشياء مختلفة. ويظهر المقياسان في كل الموقع، كل منهما محدد المصدر.",
      },
      {
        t: "البيانات غير المريحة تبقى",
        b: "انخفض امتلاك الحسابات في مصر بين موجتي المسح 2017 و2021. وهذا الانخفاض معروض كما نُشر لا مصقولًا، مع مناقشة الأسباب.",
      },
    ],
  },
  list: {
    eyebrowSuffix: "مصدرًا",
    title: "مرتبة بحسب الجهة الناشرة",
    description:
      "الروابط تفتح على موقع الجهة الناشرة نفسها. وحيثما تقيّد جهة ما الوصول الآلي، يشير المدخل إلى القسم المعني في موقعها بدل وثيقة قد تكون نُقلت.",
  },
  categories: {
    worldBank: "البنك الدولي",
    cbe: "البنك المركزي المصري",
    nbe: "البنك الأهلي المصري",
    imf: "صندوق النقد الدولي",
    government: "الجهات الحكومية المصرية",
    academic: "مصادر أكاديمية",
    other: "منظمات أخرى",
  },
  limits: {
    eyebrow: "حدود البيانات",
    title: "ما لا تستطيع هذه البيانات إخبارك به",
    description: "بيان حدود الأدلة جزء من عرضها بأمانة.",
    items: [
      {
        t: "بيانات المسح تحمل خطأ العينة",
        b: "المؤشر العالمي للشمول المالي مسح بالعينة لا تعداد شامل. ولا ينبغي المبالغة في تفسير فروق نقطة أو نقطتين مئويتين بين الموجات، وحركة 2017 إلى 2021 في مصر تذكير بذلك.",
      },
      {
        t: "الإجابات الذاتية لها حدود",
        b: "يسأل المسح الناس عن سلوكهم هم. وقد لا يعرف المستجيب ما إذا كان حسابه مفعَّلًا رقميًا، كما أن أسباب عدم امتلاك حساب تصورات بقدر ما هي وقائع.",
      },
      {
        t: "بيانات جانب العرض تحصي المنتجات لا الأشخاص",
        b: "تقارير المؤسسات تحصي الحسابات والبطاقات. وقد يملك الشخص الواحد عدة منتجات، وقد يكون حساب محسوب كنشط قليل الاستخدام فعليًا.",
      },
      {
        t: "لا يوجد تفصيل على مستوى المحافظات",
        b: "بيانات الشمول المنشورة في مصر تُعرض وطنيًا وبتقسيم ريف/حضر. ولذلك لا يعرض هذا الموقع معدلات على مستوى المحافظة، والخريطة تخطيطية بشكل صريح.",
      },
      {
        t: "التعريفات تختلف بين الدول",
        b: "تستخدم المقارنة بين مصر وكينيا بيانات من جولة المسح نفسها لتسعة من مؤشراتها العشرة، وهي متكافئة. أما صف امتلاك الهاتف الذكي فمصدره هيئة تنظيم الاتصالات الكينية، وهو موضَّح بذلك. والمقارنات المستندة إلى الإحصاءات الوطنية لكل بلد لن تكون متكافئة.",
      },
      {
        t: "الأرقام تتغير",
        b: "بيانات الشمول المالي تُراجَع وتُحدَّث. وكل رقم هنا موضَّح بفترته حتى يمكن مقارنته بما تعرضه الجهة الناشرة حاليًا.",
      },
    ],
  },
};

export const sources: Record<Locale, SourcesDict> = { en, ar };
