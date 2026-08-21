/**
 * Video library shown on /videos and previewed on the home page.
 *
 * ============================================================
 *  HOW TO ADD A VIDEO
 * ============================================================
 *  1. Copy any entry below and change the fields.
 *  2. Paste the normal watch URL — https://www.youtube.com/watch?v=ID
 *     or https://youtu.be/ID. It is converted to an embed URL for you,
 *     and the thumbnail is derived from it automatically.
 *  3. `category` must be one of the keys in VIDEO_CATEGORIES below.
 *     TypeScript rejects a typo, so filtering cannot silently break.
 *     The labels for those keys live in src/lib/i18n/content/videos.ts.
 *  4. `language` is the language spoken IN the video — not the language
 *     of the website. Cards are labelled with it.
 *  5. Set `featured: true` to offer it in the "Start Here" slot. The page
 *     picks the featured video matching the reader's language.
 *
 *  Nothing is downloaded or re-hosted: videos play from the publisher's
 *  own platform through an embedded player.
 *
 *  If a publisher blocks embedding, set `embeddable: false` and the card
 *  links out to the original page instead of showing a dead player.
 * ============================================================
 *
 * Every entry below was checked against YouTube's oEmbed endpoint in
 * August 2026: the video exists, is public, and allows embedding. Titles
 * in the video's own language are reproduced as published by the channel;
 * the opposite-language title and both descriptions are written for this
 * site rather than copied.
 */

export const VIDEO_CATEGORIES = [
  "financialInclusion",
  "banking",
  "digitalPayments",
  "financialLiteracy",
  "fintech",
  "digitalCurrency",
  "women",
  "youth",
] as const;

export type VideoCategory = (typeof VIDEO_CATEGORIES)[number];

/** Spoken language of the video itself. */
export type VideoLanguage = "en" | "ar";

export interface Video {
  id: string;
  /** Title as published by the channel, or an English rendering of it. */
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  /** Normal watch URL. Embed URL and thumbnail are derived from it. */
  url: string;
  /** Platform hosting the video. */
  source: "YouTube";
  /** Organisation that published it. Shown as the credit on every card. */
  publisher: string;
  publisherAr: string;
  category: VideoCategory;
  language: VideoLanguage;
  featured?: boolean;
  /** Override the derived poster frame. Rarely needed. */
  thumbnail?: string;
  /** Set false when the publisher blocks embedding. Defaults to true. */
  embeddable?: boolean;
}

/* Publisher credits, kept here so a name is spelled the same way everywhere. */
const NBE = {
  publisher: "National Bank of Egypt (NBE)",
  publisherAr: "البنك الأهلي المصري",
} as const;
const CBE = {
  publisher: "Central Bank of Egypt",
  publisherAr: "البنك المركزي المصري",
} as const;
const WB = {
  publisher: "World Bank Group",
  publisherAr: "مجموعة البنك الدولي",
} as const;
const IMF = {
  publisher: "International Monetary Fund",
  publisherAr: "صندوق النقد الدولي",
} as const;
const IMF_INSTITUTE = {
  publisher: "IMF Institute Learning Channel",
  publisherAr: "قناة التعلم بمعهد صندوق النقد الدولي",
} as const;
const CGAP = {
  publisher: "CGAP (World Bank Group)",
  publisherAr: "سيجاب — مجموعة البنك الدولي",
} as const;
const UNCTAD = {
  publisher: "UN Trade and Development (UNCTAD)",
  publisherAr: "الأونكتاد — مؤتمر الأمم المتحدة للتجارة والتنمية",
} as const;
const AFI = {
  publisher: "Alliance for Financial Inclusion",
  publisherAr: "التحالف من أجل الشمول المالي",
} as const;

export const VIDEOS: Video[] = [
  /* ---------------- Financial inclusion ---------------- */
  {
    id: "nbe-what-is-financial-inclusion",
    title: "What is financial inclusion?",
    titleAr: "ايه هو الشمول المالي؟",
    description:
      "The National Bank of Egypt explains what financial inclusion means in everyday terms.",
    descriptionAr:
      "البنك الأهلي المصري يشرح معنى الشمول المالي بلغة بسيطة وقريبة من الحياة اليومية.",
    url: "https://www.youtube.com/watch?v=XWEvUSi5Lmk",
    source: "YouTube",
    ...NBE,
    category: "financialInclusion",
    language: "ar",
    featured: true,
  },
  {
    id: "imf-what-is-financial-inclusion",
    title: "What is financial inclusion and why is it important?",
    titleAr: "ما هو الشمول المالي ولماذا هو مهم؟",
    description:
      "A short teaching explainer on what financial inclusion covers and why economists track it.",
    descriptionAr:
      "شرح تعليمي قصير لما يشمله الشمول المالي ولماذا يتابعه خبراء الاقتصاد.",
    url: "https://www.youtube.com/watch?v=5eSg1Q6hfd8",
    source: "YouTube",
    ...IMF_INSTITUTE,
    category: "financialInclusion",
    language: "en",
    featured: true,
  },
  {
    id: "imf-definitions-financial-inclusion",
    title: "Definitions of financial inclusion",
    titleAr: "تعريفات الشمول المالي",
    description:
      "How institutions define financial inclusion, and why the definition changes what gets measured.",
    descriptionAr:
      "كيف تُعرّف المؤسسات الشمول المالي، ولماذا يغيّر التعريف ما يتم قياسه.",
    url: "https://www.youtube.com/watch?v=UpoGsimEDmE",
    source: "YouTube",
    ...IMF_INSTITUTE,
    category: "financialInclusion",
    language: "en",
  },
  {
    id: "wb-financial-inclusion-matters",
    title:
      "Financial Inclusion Matters: Too Many People Around the World Are Left Without Access to Their Money",
    titleAr: "الشمول المالي مهم: كثيرون حول العالم بلا وسيلة للوصول إلى أموالهم",
    description:
      "Why being outside the financial system limits what people can do with the money they already have.",
    descriptionAr:
      "لماذا يحدّ البقاء خارج النظام المالي مما يستطيع الناس فعله بالأموال التي يملكونها بالفعل.",
    url: "https://www.youtube.com/watch?v=cn0c434dKkE",
    source: "YouTube",
    ...WB,
    category: "financialInclusion",
    language: "en",
  },
  {
    id: "wb-findex-2025",
    title:
      "Global Findex 2025: How Technology Is Shaping Financial Inclusion and Where Progress Is Still Needed",
    titleAr:
      "المؤشر العالمي للشمول المالي 2025: كيف تشكّل التكنولوجيا الشمول المالي وأين يبقى التقدم مطلوبًا",
    description:
      "The World Bank presents the survey behind many of the figures used on this site.",
    descriptionAr:
      "البنك الدولي يعرض المسح الذي تستند إليه كثير من الأرقام المستخدمة في هذا الموقع.",
    url: "https://www.youtube.com/watch?v=97bjRsYmiKw",
    source: "YouTube",
    ...WB,
    category: "financialInclusion",
    language: "en",
  },
  {
    id: "cgap-whats-next-findex-2025",
    title: "What's Next for Financial Inclusion? Unpacking Findex 2025",
    titleAr: "ما التالي للشمول المالي؟ قراءة في مؤشر فينداكس 2025",
    description:
      "A discussion of what the 2025 Findex results mean for the years ahead.",
    descriptionAr: "نقاش حول ما تعنيه نتائج فينداكس 2025 بالنسبة للسنوات القادمة.",
    url: "https://www.youtube.com/watch?v=gyj4gJ_QfGE",
    source: "YouTube",
    ...CGAP,
    category: "financialInclusion",
    language: "en",
  },

  /* ---------------- Banking ---------------- */
  {
    id: "cbe-why-deal-with-banks",
    title: "Why deal with a bank?",
    titleAr: "ليه أتعامل مع البنوك؟",
    description:
      "The Central Bank of Egypt sets out what a bank account offers compared with keeping cash.",
    descriptionAr:
      "البنك المركزي المصري يوضح ما يقدمه الحساب البنكي مقارنة بالاحتفاظ بالنقود.",
    url: "https://www.youtube.com/watch?v=AN0L7XDB1t8",
    source: "YouTube",
    ...CBE,
    category: "banking",
    language: "ar",
  },
  {
    id: "cbe-banking-complaint",
    title: "How do you file a banking complaint?",
    titleAr: "إزاي تقدر تقدم شكوى بنكية؟",
    description:
      "Your rights as a customer, and the steps for raising a complaint about a bank.",
    descriptionAr: "حقوقك كعميل، والخطوات اللازمة لتقديم شكوى بشأن أحد البنوك.",
    url: "https://www.youtube.com/watch?v=gjrNBGcjzBQ",
    source: "YouTube",
    ...CBE,
    category: "banking",
    language: "ar",
  },
  {
    id: "cbe-accounts-abroad",
    title: "Opening a bank account for Egyptians working abroad",
    titleAr:
      "خطوات فتح حسابات بنكية للمصريين العاملين بالخارج ضمن مبادرة «افتح حسابك في مصر»",
    description:
      "An infographic walkthrough of the account-opening steps under this national initiative.",
    descriptionAr: "شرح مصوّر لخطوات فتح الحساب في إطار هذه المبادرة الوطنية.",
    url: "https://www.youtube.com/watch?v=yuKU7USj8po",
    source: "YouTube",
    ...CBE,
    category: "banking",
    language: "ar",
  },
  {
    id: "cbe-update-your-data",
    title: "The «Update Your Data in Egypt» initiative, step by step",
    titleAr: "خطوة بخطوة.. تعرّف على تفاصيل مبادرة «حدث بياناتك في مصر»",
    description:
      "Why banks ask customers to keep their records current, and how the process works.",
    descriptionAr:
      "لماذا تطلب البنوك من العملاء تحديث بياناتهم، وكيف تسير هذه العملية.",
    url: "https://www.youtube.com/watch?v=t37X6eEgV4I",
    source: "YouTube",
    ...CBE,
    category: "banking",
    language: "ar",
  },
  {
    id: "cbe-bds-hubs",
    title: "What are Business Development Services (BDS) Hubs?",
    titleAr: "إيه هي مراكز خدمات تطوير الأعمال (BDS Hubs)؟",
    description:
      "Support centres that help small businesses reach the formal financial system.",
    descriptionAr:
      "مراكز دعم تساعد المشروعات الصغيرة على الوصول إلى النظام المالي الرسمي.",
    url: "https://www.youtube.com/watch?v=0exAw4nS1aM",
    source: "YouTube",
    ...CBE,
    category: "banking",
    language: "ar",
  },
  {
    id: "nbe-find-your-iban",
    title: "Finding your IBAN on the NBE website",
    titleAr: "اعرف رقم الـ IBAN من على موقع البنك الأهلي المصري",
    description:
      "A practical walkthrough of locating the account number used for transfers.",
    descriptionAr: "شرح عملي لكيفية الحصول على رقم الحساب المستخدم في التحويلات.",
    url: "https://www.youtube.com/watch?v=A_Kbvo9fv2A",
    source: "YouTube",
    ...NBE,
    category: "banking",
    language: "ar",
  },

  /* ---------------- Digital payments ---------------- */
  {
    id: "wb-digital-payments-mena",
    title:
      "Digital Payments: Enabler for Jobs, Inclusion, and Public Service Delivery in the Middle East and North Africa",
    titleAr:
      "المدفوعات الرقمية: محرك لفرص العمل والشمول وتقديم الخدمات العامة في الشرق الأوسط وشمال أفريقيا",
    description:
      "The regional case for digital payments, covering the region Egypt sits in.",
    descriptionAr:
      "الحجة الإقليمية للمدفوعات الرقمية، وتغطي المنطقة التي تقع فيها مصر.",
    url: "https://www.youtube.com/watch?v=eeLIHmE_174",
    source: "YouTube",
    ...WB,
    category: "digitalPayments",
    language: "en",
  },
  {
    id: "wb-findex-2021",
    title:
      "The Global Findex Database 2021: Financial Inclusion, Digital Payments, and Resilience",
    titleAr:
      "قاعدة بيانات المؤشر العالمي للشمول المالي 2021: الشمول المالي والمدفوعات الرقمية والقدرة على الصمود",
    description:
      "How digital payments changed household resilience, from the 2021 survey wave.",
    descriptionAr:
      "كيف غيّرت المدفوعات الرقمية قدرة الأسر على الصمود، وفق جولة مسح 2021.",
    url: "https://www.youtube.com/watch?v=mtoz76FwHtU",
    source: "YouTube",
    ...WB,
    category: "digitalPayments",
    language: "en",
  },
  {
    id: "nbe-track-transfers",
    title: "Tracking and checking transfers on the NBE website",
    titleAr: "كيفية متابعة واستعلام الحوالات من خلال موقعنا الإلكتروني",
    description: "How to follow a transfer online instead of visiting a branch.",
    descriptionAr: "كيفية متابعة الحوالة عبر الإنترنت بدلًا من زيارة الفرع.",
    url: "https://www.youtube.com/watch?v=bOgODgc1RvM",
    source: "YouTube",
    ...NBE,
    category: "digitalPayments",
    language: "ar",
  },
  {
    id: "nbe-electronic-branches",
    title: "NBE electronic service branches",
    titleAr: "البنك الأهلي المصري — فروع الخدمة الإلكترونية",
    description: "A look at self-service branches and what they can be used for.",
    descriptionAr: "نظرة على فروع الخدمة الذاتية وما يمكن استخدامها فيه.",
    url: "https://www.youtube.com/watch?v=h07hM5Oa08w",
    source: "YouTube",
    ...NBE,
    category: "digitalPayments",
    language: "ar",
  },

  /* ---------------- Financial literacy ---------------- */
  {
    id: "nbe-keep-your-data-private",
    title: "Keep your details private so no one can scam you",
    titleAr: "حافظ علي سرية بياناتك بإيديك ما يتنصبش عليك",
    description:
      "Why bank details should never be shared, and how fraud attempts usually start.",
    descriptionAr:
      "لماذا يجب عدم مشاركة بيانات الحساب أبدًا، وكيف تبدأ محاولات الاحتيال عادةً.",
    url: "https://www.youtube.com/watch?v=-yEMDoIVoyE",
    source: "YouTube",
    ...NBE,
    category: "financialLiteracy",
    language: "ar",
  },
  {
    id: "nbe-fake-offers",
    title: "Beware of fake offers posted by unknown pages on social media",
    titleAr:
      "خلي بالك من العروض الوهمية اللي بتنشرها صفحات مجهولة على وسائل التواصل الاجتماعي",
    description:
      "Recognising the too-good-to-be-true offers used to collect payment details.",
    descriptionAr:
      "كيف تتعرف على العروض المبالغ فيها التي تُستخدم لجمع بيانات الدفع.",
    url: "https://www.youtube.com/watch?v=Md8UD8g29jI",
    source: "YouTube",
    ...NBE,
    category: "financialLiteracy",
    language: "ar",
  },
  {
    id: "nbe-verify-agents",
    title: "How to identify our authorised transfer agents and correspondents",
    titleAr: "ازاي تعرف وكلائنا ومراسلينا العاملين في مجال التحويلات",
    description: "Checking that whoever handles your transfer is genuinely authorised.",
    descriptionAr: "التحقق من أن من يتولى تحويلك مُعتمد فعليًا.",
    url: "https://www.youtube.com/watch?v=ImVsz_7lSq4",
    source: "YouTube",
    ...NBE,
    category: "financialLiteracy",
    language: "ar",
  },

  /* ---------------- FinTech ---------------- */
  {
    id: "wb-fintech-ghana",
    title: "Using Innovative Technology to Improve Financial Inclusion in Ghana",
    titleAr: "استخدام التكنولوجيا المبتكرة لتحسين الشمول المالي في غانا",
    description:
      "A country example of technology reaching people that banks had not served.",
    descriptionAr: "مثال قُطري على وصول التكنولوجيا إلى فئات لم تخدمها البنوك من قبل.",
    url: "https://www.youtube.com/watch?v=lglmT7zDsOw",
    source: "YouTube",
    ...WB,
    category: "fintech",
    language: "en",
  },
  {
    id: "unctad-mobile-money",
    title: "Boosting Financial Inclusion through Mobile Money",
    titleAr: "تعزيز الشمول المالي من خلال المحافظ الإلكترونية",
    description:
      "How mobile wallets extend financial services beyond the branch network.",
    descriptionAr:
      "كيف توسّع المحافظ الإلكترونية الخدمات المالية إلى ما بعد شبكة الفروع.",
    url: "https://www.youtube.com/watch?v=7LwS0LYx_rQ",
    source: "YouTube",
    ...UNCTAD,
    category: "fintech",
    language: "en",
  },
  {
    id: "cgap-future-of-financial-inclusion",
    title: "The Future of Financial Inclusion",
    titleAr: "مستقبل الشمول المالي",
    description:
      "Where researchers expect financial inclusion to go next, and what remains unsolved.",
    descriptionAr: "إلى أين يتوقع الباحثون أن يتجه الشمول المالي، وما الذي لم يُحل بعد.",
    url: "https://www.youtube.com/watch?v=-WrE4IXl8ww",
    source: "YouTube",
    ...CGAP,
    category: "fintech",
    language: "en",
  },

  /* ---------------- Digital currency ---------------- */
  {
    id: "imf-cbdc-financial-inclusion",
    title:
      "Central Bank Digital Currencies for Financial Inclusion: Risks and Rewards",
    titleAr: "العملات الرقمية للبنوك المركزية والشمول المالي: المخاطر والمكاسب",
    description:
      "A balanced look at what a central bank digital currency could and could not fix.",
    descriptionAr:
      "نظرة متوازنة إلى ما يمكن وما لا يمكن أن تعالجه العملة الرقمية للبنك المركزي.",
    url: "https://www.youtube.com/watch?v=2I9HR7BTmn0",
    source: "YouTube",
    ...IMF,
    category: "digitalCurrency",
    language: "en",
  },

  /* ---------------- Women ---------------- */
  {
    id: "cbe-women-inclusion-2016-2023",
    title: "Growth in women's financial inclusion in Egypt, 2016 to 2023",
    titleAr: "معدلات تطور الشمول المالي للمرأة في الفترة من 2016 حتى 2023",
    description:
      "The Central Bank of Egypt's own figures on how women's inclusion changed.",
    descriptionAr: "أرقام البنك المركزي المصري عن تطور الشمول المالي للمرأة.",
    url: "https://www.youtube.com/watch?v=7-EwVzCF8wM",
    source: "YouTube",
    ...CBE,
    category: "women",
    language: "ar",
  },
  {
    id: "cgap-focus-on-women",
    title: "Financial Inclusion 2.0: Focus on Women",
    titleAr: "الشمول المالي 2.0: التركيز على المرأة",
    description: "Why women are reached last by financial services, and what changes that.",
    descriptionAr: "لماذا تصل الخدمات المالية إلى النساء في النهاية، وما الذي يغيّر ذلك.",
    url: "https://www.youtube.com/watch?v=mhhhHCV959g",
    source: "YouTube",
    ...CGAP,
    category: "women",
    language: "en",
  },
  {
    id: "afi-investing-in-women",
    title: "Why investing in women's financial inclusion makes perfect sense",
    titleAr: "لماذا يُعد الاستثمار في الشمول المالي للمرأة قرارًا منطقيًا",
    description: "The economic argument for closing the gender gap in financial access.",
    descriptionAr:
      "الحجة الاقتصادية لسد الفجوة بين الجنسين في الوصول إلى الخدمات المالية.",
    url: "https://www.youtube.com/watch?v=aF3wA4_kHJ4",
    source: "YouTube",
    ...AFI,
    category: "women",
    language: "en",
  },

  /* ---------------- Youth ---------------- */
  {
    id: "cbe-account-from-15",
    title: "How to open a bank account from the age of 15",
    titleAr: "إزاي تفتح حساب بنكي من سن 15 سنة؟",
    description:
      "The Central Bank of Egypt explains the rules that let teenagers open an account.",
    descriptionAr: "البنك المركزي المصري يوضح القواعد التي تتيح للمراهقين فتح حساب.",
    url: "https://www.youtube.com/watch?v=CU4rBKawLng",
    source: "YouTube",
    ...CBE,
    category: "youth",
    language: "ar",
  },
  {
    id: "cgap-young-women",
    title: "How Financial Inclusion can Support Young Women",
    titleAr: "كيف يمكن للشمول المالي أن يدعم الشابات",
    description:
      "What young women gain when financial services are designed with them in mind.",
    descriptionAr: "ما الذي تكسبه الشابات عندما تُصمَّم الخدمات المالية بمراعاتهن.",
    url: "https://www.youtube.com/watch?v=W6Kesc5_4KE",
    source: "YouTube",
    ...CGAP,
    category: "youth",
    language: "en",
  },
];

/* ============================================================
   Helpers — no need to touch these when adding videos.
   ============================================================ */

/** Pulls the 11-character video id out of any common YouTube URL shape. */
export function getYouTubeId(url: string): string | null {
  const patterns = [
    /[?&]v=([A-Za-z0-9_-]{11})/, // youtube.com/watch?v=ID
    /youtu\.be\/([A-Za-z0-9_-]{11})/, // youtu.be/ID
    /\/embed\/([A-Za-z0-9_-]{11})/, // youtube.com/embed/ID
    /\/shorts\/([A-Za-z0-9_-]{11})/, // youtube.com/shorts/ID
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/**
 * The privacy-preserving embed URL, or null when the URL is not a YouTube
 * link the player understands — in which case the UI links out instead.
 *
 * `youtube-nocookie.com` keeps YouTube from setting tracking cookies until
 * the reader actually presses play.
 */
export function getEmbedUrl(video: Video): string | null {
  if (video.embeddable === false) return null;
  const id = getYouTubeId(video.url);
  if (!id) return null;
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}

/** Poster frame for a card, derived from the video id unless overridden. */
export function getThumbnail(video: Video): string | null {
  if (video.thumbnail) return video.thumbnail;
  const id = getYouTubeId(video.url);
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
}
