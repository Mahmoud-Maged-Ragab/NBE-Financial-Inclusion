import type { Locale } from "../config";
import type { VideoCategory } from "@/data/videos";

const en = {
  meta: {
    title: "Learn About Financial Inclusion",
    description:
      "A video library explaining financial inclusion, banking, digital payments and financial literacy, drawn from the National Bank of Egypt, the Central Bank of Egypt, the World Bank and the IMF.",
  },
  hero: {
    eyebrow: "Video library",
    title: "Learn About Financial Inclusion",
    description:
      "Sometimes, watching a simple explanation is easier than reading a long article.",
    lead: "Explore videos that explain financial inclusion, banking, digital payments, financial literacy, and how financial services can make everyday life easier.",
  },
  featured: {
    eyebrow: "Start here",
    title: "What is financial inclusion?",
    body: "Financial inclusion means people and businesses can reach useful, affordable financial services — an account to keep money in, a safe way to send and receive it, somewhere to save, and credit when it is needed. The video below explains it in a few minutes.",
    watch: "Play video",
  },
  library: {
    eyebrow: "The library",
    title: "Browse by topic",
    description:
      "Every video is published by the organisation credited on its card, and plays from that organisation's own channel.",
  },
  filters: {
    search: "Search videos...",
    searchLabel: "Search the video library",
    clear: "Clear",
    language: "Language",
    category: "Topic",
    all: "All",
    allTopics: "All topics",
    en: "English",
    ar: "العربية",
    resultsOne: "1 video",
    resultsMany: "{count} videos",
  },
  card: {
    play: "Play video",
    watchOriginal: "Watch on the original website",
    spokenIn: "Spoken language",
    publishedBy: "Published by",
    opensPlayer: "Opens an embedded player",
  },
  modal: {
    close: "Close",
    label: "Video player",
    source: "Source",
    language: "Language",
    category: "Topic",
    platform: "Platform",
    openOnYouTube: "Open on YouTube",
    notEmbeddable:
      "This publisher does not allow the video to be played on other websites.",
  },
  empty: {
    title: "No videos found.",
    body: "Try a different search term, or clear the filters.",
    reset: "Clear all filters",
  },
  cta: {
    title: "Want to learn more about financial inclusion in Egypt?",
    description:
      "Explore how organisations such as NBE contribute to financial inclusion through financial education, digital services, and community initiatives.",
    primary: "Explore NBE's impact",
    secondary: "Explore financial inclusion",
  },
  note: "Videos are embedded from their publishers and are not hosted on this site. The player only loads once you press play. Inclusion of a video is not an endorsement of any product mentioned in it.",
  categories: {
    financialInclusion: "Financial Inclusion",
    banking: "Banking",
    digitalPayments: "Digital Payments",
    financialLiteracy: "Financial Literacy",
    fintech: "FinTech",
    digitalCurrency: "Digital Currency",
    women: "Women & Financial Inclusion",
    youth: "Youth & Financial Inclusion",
  } satisfies Record<VideoCategory, string>,
  preview: {
    eyebrow: "Learn through videos",
    title: "Learn Through Videos",
    description:
      "Prefer watching instead of reading? Explore simple videos about financial inclusion, banking, and digital finance.",
    cta: "Watch all videos",
  },
};

export type VideosDict = typeof en;

const ar: VideosDict = {
  meta: {
    title: "تعرّف على الشمول المالي",
    description:
      "مكتبة فيديو تشرح الشمول المالي والخدمات المصرفية والمدفوعات الرقمية والثقافة المالية، من البنك الأهلي المصري والبنك المركزي المصري والبنك الدولي وصندوق النقد الدولي.",
  },
  hero: {
    eyebrow: "مكتبة الفيديو",
    title: "تعرّف على الشمول المالي",
    description: "أحيانًا تكون مشاهدة شرح بسيط أسهل من قراءة مقال طويل.",
    lead: "استكشف فيديوهات تشرح الشمول المالي والخدمات المصرفية والمدفوعات الرقمية والثقافة المالية، وكيف يمكن للخدمات المالية أن تجعل الحياة اليومية أسهل.",
  },
  featured: {
    eyebrow: "ابدأ من هنا",
    title: "ما هو الشمول المالي؟",
    body: "الشمول المالي يعني أن يتمكن الأفراد والمشروعات من الوصول إلى خدمات مالية مفيدة وميسورة التكلفة — حساب يحفظون فيه أموالهم، ووسيلة آمنة لإرسالها واستقبالها، ومكان للادخار، وتمويل عند الحاجة. الفيديو التالي يشرح ذلك في دقائق.",
    watch: "تشغيل الفيديو",
  },
  library: {
    eyebrow: "المكتبة",
    title: "تصفّح حسب الموضوع",
    description:
      "كل فيديو منشور من الجهة المذكورة على بطاقته، ويُعرض من قناة تلك الجهة نفسها.",
  },
  filters: {
    search: "ابحث في الفيديوهات...",
    searchLabel: "البحث في مكتبة الفيديو",
    clear: "مسح",
    language: "اللغة",
    category: "الموضوع",
    all: "الكل",
    allTopics: "كل الموضوعات",
    en: "English",
    ar: "العربية",
    resultsOne: "فيديو واحد",
    resultsMany: "{count} فيديو",
  },
  card: {
    play: "تشغيل الفيديو",
    watchOriginal: "شاهد على الموقع الأصلي",
    spokenIn: "لغة الفيديو",
    publishedBy: "الناشر",
    opensPlayer: "يفتح مشغّلًا مدمجًا",
  },
  modal: {
    close: "إغلاق",
    label: "مشغّل الفيديو",
    source: "المصدر",
    language: "اللغة",
    category: "الموضوع",
    platform: "المنصة",
    openOnYouTube: "افتح على يوتيوب",
    notEmbeddable: "لا تسمح الجهة الناشرة بتشغيل هذا الفيديو على مواقع أخرى.",
  },
  empty: {
    title: "لم يتم العثور على فيديوهات.",
    body: "جرّب كلمة بحث مختلفة، أو امسح عوامل التصفية.",
    reset: "مسح كل عوامل التصفية",
  },
  cta: {
    title: "تريد معرفة المزيد عن الشمول المالي في مصر؟",
    description:
      "اكتشف كيف تساهم جهات مثل البنك الأهلي المصري في الشمول المالي من خلال التثقيف المالي والخدمات الرقمية والمبادرات المجتمعية.",
    primary: "استكشف دور البنك الأهلي",
    secondary: "استكشف الشمول المالي",
  },
  note: "الفيديوهات مضمّنة من ناشريها ولا تُستضاف على هذا الموقع. ولا يُحمَّل المشغّل إلا بعد الضغط على زر التشغيل. ووجود فيديو هنا لا يعني تأييد أي منتج يُذكر فيه.",
  categories: {
    financialInclusion: "الشمول المالي",
    banking: "الخدمات المصرفية",
    digitalPayments: "المدفوعات الرقمية",
    financialLiteracy: "الثقافة المالية",
    fintech: "التكنولوجيا المالية",
    digitalCurrency: "العملة الرقمية",
    women: "المرأة والشمول المالي",
    youth: "الشباب والشمول المالي",
  },
  preview: {
    eyebrow: "تعلّم بالفيديو",
    title: "تعلّم بالفيديو",
    description:
      "تفضّل المشاهدة على القراءة؟ استكشف فيديوهات مبسطة عن الشمول المالي والخدمات المصرفية والتمويل الرقمي.",
    cta: "شاهد كل الفيديوهات",
  },
};

export const videos: Record<Locale, VideosDict> = { en, ar };
