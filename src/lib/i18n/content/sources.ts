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
      "Every figure on this site references an entry below. Where two institutions measure the same thing differently, both are shown and the difference is explained rather than resolved by picking one.",
  },
  method: {
    eyebrow: "Method",
    title: "How this site handles data",
    items: [
      {
        t: "No estimated figures",
        b: "Every number is reproduced from a published source. Nothing is interpolated, rounded for effect, or invented to fill a gap. Where a figure does not exist — such as the 2011 female account ownership rate for Egypt — the series simply starts later.",
      },
      {
        t: "Every figure is labelled",
        b: "Each statistic carries the publisher and the period the data covers, not the date it was published. Survey data is labelled by fieldwork year.",
      },
      {
        t: "Competing measures are both shown",
        b: "The Central Bank of Egypt and the World Bank report different national inclusion rates because they measure different things. Both appear throughout, each identified.",
      },
      {
        t: "Inconvenient data is kept",
        b: "Egypt's account ownership fell between the 2017 and 2021 survey waves. That decline is shown as published rather than smoothed, with the reasons discussed.",
      },
    ],
  },
  list: {
    eyebrowSuffix: "sources",
    title: "Organised by publisher",
    description:
      "Links open on the publisher's own site. Where a publisher restricts automated access, the entry points to the relevant section of that publisher's site rather than to a document that may have moved.",
  },
  categories: {
    worldBank: "World Bank",
    cbe: "Central Bank of Egypt",
    imf: "International Monetary Fund",
    government: "Egyptian government",
    academic: "Academic",
    other: "Other organisations",
  },
  limits: {
    eyebrow: "Limitations",
    title: "What this data cannot tell you",
    description:
      "Stating the limits of the evidence is part of presenting it honestly.",
    items: [
      {
        t: "Survey data carries sampling error",
        b: "The Global Findex is a sample survey, not a census. Differences of one or two percentage points between waves should not be over-interpreted, and the 2017 to 2021 movement in Egypt is a reminder of this.",
      },
      {
        t: "Self-reported answers have limits",
        b: "Findex asks people about their own behaviour. Respondents may not know whether an account they hold is digitally enabled, and reasons given for not holding one are perceptions as much as facts.",
      },
      {
        t: "Supply-side data counts products, not people",
        b: "Institutional reporting counts accounts and cards. One person may hold several, and an account counted as active may see very little use.",
      },
      {
        t: "No governorate-level breakdown exists",
        b: "Egypt's published inclusion data is reported nationally and split rural against urban. This site therefore shows no governorate-level rates, and the map is explicitly schematic.",
      },
      {
        t: "Definitions differ between countries",
        b: "The Egypt–India comparison uses Findex data from the same round, which is like for like. Comparisons involving each country's own national statistics would not be.",
      },
      {
        t: "Figures move",
        b: "Financial inclusion data is revised and updated. Each figure here is labelled with its period so it can be checked against whatever the publisher currently shows.",
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
        b: "المقارنة بين مصر والهند تستخدم بيانات من جولة المسح نفسها، وهي متكافئة. أما المقارنات المستندة إلى الإحصاءات الوطنية لكل بلد فلن تكون كذلك.",
      },
      {
        t: "الأرقام تتغير",
        b: "بيانات الشمول المالي تُراجَع وتُحدَّث. وكل رقم هنا موضَّح بفترته حتى يمكن مقارنته بما تعرضه الجهة الناشرة حاليًا.",
      },
    ],
  },
};

export const sources: Record<Locale, SourcesDict> = { en, ar };
