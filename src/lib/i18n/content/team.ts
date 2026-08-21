import type { Locale } from "../config";

const en = {
  meta: {
    title: "Meet the Team",
    description:
      "The team behind this financial inclusion awareness project, created by Credit Administration Interns at the National Bank of Egypt.",
  },
  hero: {
    eyebrow: "About this project",
    title: "Meet the Team",
    description:
      "Meet the team behind this financial inclusion awareness project.",
  },
  grid: {
    eyebrow: "Contributors",
    title: "The people who worked on this project",
    description:
      "Everyone listed here contributed to the research, writing and build of this educational site.",
    ariaLabel: "Project team members",
    university: "University",
    major: "Major or programme",
    empty: "Team members will be listed here shortly.",
  },
  note: "",
  preview: {
    eyebrow: "The people behind it",
    title: "Meet the Team",
    description: "Learn more about the people who contributed to this project.",
    cta: "Meet the Team",
  },
};

export type TeamDict = typeof en;

const ar: TeamDict = {
  meta: {
    title: "فريق العمل",
    description:
      "الفريق الذي ساهم في إعداد مشروع التوعية بالشمول المالي، من إعداد متدربي إدارة الائتمان في البنك الأهلي المصري.",
  },
  hero: {
    eyebrow: "عن المشروع",
    title: "فريق العمل",
    description:
      "تعرّف على الفريق الذي ساهم في إعداد مشروع التوعية بالشمول المالي.",
  },
  grid: {
    eyebrow: "المساهمون",
    title: "الأشخاص الذين عملوا على هذا المشروع",
    description:
      "ساهم كل من هو مذكور هنا في البحث والكتابة وإعداد هذا الموقع التثقيفي.",
    ariaLabel: "أعضاء فريق المشروع",
    university: "الجامعة",
    major: "التخصص أو البرنامج",
    empty: "سيتم إدراج أعضاء الفريق هنا قريبًا.",
  },
  note: "",
  preview: {
    eyebrow: "من وراء المشروع",
    title: "تعرّف على الفريق",
    description: "اكتشف الأشخاص الذين ساهموا في إعداد هذا المشروع.",
    cta: "تعرّف على الفريق",
  },
};

export const team: Record<Locale, TeamDict> = { en, ar };
