import type { Locale } from "../config";

/**
 * Content for the Solutions page.
 *
 * The page answers one question — how financial inclusion in Egypt can be
 * improved — and separates three kinds of statement throughout:
 *
 *  1. The general argument (problems and the recognised responses to them).
 *  2. What NBE reports doing, reproduced from its published documents and
 *     always carrying the year and the source.
 *  3. Country-wide indicators, which belong to the Central Bank of Egypt and
 *     describe every provider in Egypt rather than NBE.
 *
 * No figure is written here directly from memory: every number below is
 * reproduced from an entry in `src/lib/nbeImpact.ts`, which carries its own
 * source id and period.
 */

const en = {
  meta: {
    title: "Financial Inclusion Solutions",
    description:
      "The barriers that keep people in Egypt outside the financial system, the solutions that can address them, and what the National Bank of Egypt reports doing — explained in plain language.",
  },

  hero: {
    eyebrow: "Solutions",
    title: "Making Banking Easier for Everyone",
    description:
      "Financial inclusion isn't just about opening a bank account. It's about making financial services easier to reach, easier to understand, easier to afford, and easier to actually use.",
    cta: "Explore the Solutions",
  },

  labels: {
    nbe: "NBE's Contribution",
    national: "Egypt as a whole — not NBE",
    solutionsList: "What this looks like in practice",
  },

  problems: {
    eyebrow: "Start with the problem",
    title: "What Are We Trying to Solve?",
    description:
      "Before we get to solutions, it helps to name what's actually keeping people away from banks and financial services in Egypt.",
    items: [
      {
        id: "access",
        icon: "building",
        title: "Limited access to financial services",
        body: "Not everyone lives near a branch or a cash machine, and some services are only offered in certain places.",
      },
      {
        id: "literacy",
        icon: "bookOpen",
        title: "Low financial literacy",
        body: "Some people simply don't know how bank accounts, cards, digital payments, or other financial services work.",
      },
      {
        id: "procedures",
        icon: "fileText",
        title: "Complex banking procedures",
        body: "Forms, documents and steps that are hard to follow can stop someone before they start.",
      },
      {
        id: "digital",
        icon: "laptop",
        title: "Limited digital awareness",
        body: "Owning a phone is not the same as knowing how to use it to move money safely.",
      },
      {
        id: "fear",
        icon: "circleSlash",
        title: "Fear of using banks",
        body: "Worry about unexpected fees, making a mistake, or being turned away keeps some people out entirely.",
      },
      {
        id: "fraud",
        icon: "alert",
        title: "Cybersecurity and fraud concerns",
        body: "Stories about scams and stolen money make people hesitate to try digital services.",
      },
      {
        id: "cost",
        icon: "coins",
        title: "Services that feel too expensive",
        body: "If fees or a minimum balance look large next to a small income, an account can seem like a cost rather than a help.",
      },
      {
        id: "informal",
        icon: "banknote",
        title: "A largely cash-based working life",
        body: "Many people are paid in cash and spend in cash, so they never need an account to get through the month.",
      },
      {
        id: "rural",
        icon: "tractor",
        title: "Rural access challenges",
        body: "In a village the nearest branch can be a journey away, and a journey costs both time and money.",
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "Limited awareness of digital payments",
        body: "Wallets, transfers and card payments already exist, but many people have never been shown what they do.",
      },
    ],
  },

  solutions: {
    eyebrow: "What can be done",
    title: "Solutions That Can Make a Difference",
    description:
      "None of these is complicated on its own. Together they cover most of the reasons people stay outside the financial system.",
    helps: "How it helps",
    more: "Read more below",
    items: [
      {
        id: "education",
        icon: "graduation",
        title: "Financial Education",
        body: "Explaining, in plain language, what accounts, cards and digital payments actually do.",
        helps: "Someone who understands a service can decide whether they need it, instead of avoiding it.",
        href: "#education",
      },
      {
        id: "easier",
        icon: "checkCircle",
        title: "Easier Banking",
        body: "Fewer forms, clearer steps, and staff who explain things without technical words.",
        helps: "Opening an account stops being something to keep postponing.",
        href: "",
      },
      {
        id: "digital",
        icon: "smartphone",
        title: "Digital Banking",
        body: "Doing everyday banking from a phone instead of travelling to a branch.",
        helps: "Distance and queues stop deciding whether you can use your own money.",
        href: "#digital",
      },
      {
        id: "affordable",
        icon: "dollar",
        title: "Affordable Financial Services",
        body: "Accounts and services priced so that a low income is not a barrier to holding one.",
        helps: "An account becomes worth having, even on a small or irregular income.",
        href: "",
      },
      {
        id: "rural",
        icon: "mapPin",
        title: "Rural & Community Access",
        body: "Bringing services to where people already are — through branches, machines and visits.",
        helps: "Basic financial services stop requiring a day of travel.",
        href: "#rural",
      },
      {
        id: "women",
        icon: "users",
        title: "Women's Financial Inclusion",
        body: "Making sure services, education and financing reach women directly, not only through a household.",
        helps: "Saving, being paid and running a business become possible in her own name.",
        href: "#women",
      },
      {
        id: "youth",
        icon: "sprout",
        title: "Youth Financial Inclusion",
        body: "Reaching young people while they are still studying, before money habits are set.",
        helps: "Decisions at university and at work start from knowledge rather than guesswork.",
        href: "#youth",
      },
      {
        id: "security",
        icon: "shield",
        title: "Financial Security & Awareness",
        body: "Teaching people how fraud actually works, and what a real bank will never ask for.",
        helps: "Confidence replaces the fear that keeps people away from digital services.",
        href: "#security",
      },
      {
        id: "business",
        icon: "store",
        title: "Support for Small Businesses",
        body: "Helping small businesses open accounts, accept digital payments and reach financing.",
        helps: "A record of your sales becomes something a bank can lend against.",
        href: "#business",
      },
      {
        id: "infrastructure",
        icon: "wifi",
        title: "Better Digital Infrastructure",
        body: "More machines, more shops that accept cards, and networks that work outside the big cities.",
        helps: "Digital money is only useful in places where it can actually be used.",
        href: "",
      },
    ],
  },

  deep: {
    education: {
      id: "education",
      eyebrow: "Solution 1 — Financial education",
      title: "Make Banking Easier to Understand",
      lead: "People cannot benefit from financial services if they do not understand them. Most of the time the barrier is not unwillingness — it is that nobody has ever explained what an account does.",
      list: [
        "Financial literacy programmes that start from zero.",
        "Simple explanations of what a bank actually does with your money.",
        "Financial education taught inside universities.",
        "Workshops held in the community, not only inside branches.",
        "Online material people can read at their own pace.",
        "Beginner-friendly guides for opening a first account.",
      ],
      nbe: {
        points: [
          "Financial literacy sessions reached 15,000 individuals across 163 villages under the national Haya Karima initiative (2023).",
          "4,000 university students at Cairo, Helwan, Beni Suef and Menoufiya attended sessions covering saving, budgeting and the financial products available to them (2023).",
          "A wider count of 12,000 students across universities and educational institutes, including the Sabek Helmk presidential initiative (2023).",
          "42,000 individuals were engaged through financial education programmes tied to global observance days (2023).",
        ],
        note: "2023 is the most recent year NBE has published this level of programme detail for. Its 2026 bulletins report the bank's finances and its awards, not its education work, so these are shown as the 2023 results they are rather than as current figures.",
      },
    },

    digital: {
      id: "digital",
      eyebrow: "Solution 2 — Digital banking",
      title: "Bring Banking to People's Phones",
      lead: "A phone removes several barriers at once: the distance to a branch, the wait once you arrive, and the fact that branches are only open during working hours.",
      body: "Digital banking usually means four things. Mobile banking is your bank's own app. Digital payments means paying a shop or a person without cash. A mobile wallet holds money against your phone number rather than in a bank account. Online banking is the same as the app, from a computer.",
      list: [
        "Checking a balance without travelling anywhere.",
        "Sending and receiving money from a phone.",
        "Paying a shop by card, phone or wallet instead of cash.",
        "Opening and managing an account online.",
      ],
      nbe: {
        points: [
          "The Meeza Unified card, launched for university students, works as both a student ID and a banking tool, supporting e-payments, contactless transactions and mobile wallet services (2023).",
          "Meeza prepaid unified cards brought 720,000 previously unbanked customers into the formal financial sector (2023).",
          "6,797 ATMs, of which 1,238 are designed for visually impaired customers and 34 are accessible to wheelchair users (2023).",
          "38 electronic service branches operate alongside the main branch network (2023).",
        ],
        note: "NBE has not published user numbers for its mobile app or its online banking, so none are shown here.",
      },
      national:
        "Across Egypt as a whole, 50.4 million mobile wallets were registered by 2025, and EGP 4 trillion moved through them during that year. These are Central Bank of Egypt figures covering every provider in the country — not NBE customers.",
    },

    rural: {
      id: "rural",
      eyebrow: "Solution 3 — Rural and community access",
      title: "Bring Financial Services Closer to People",
      lead: "Someone should not have to travel a long distance just to access basic financial services. In a village, the cost of reaching a branch can be larger than the transaction itself.",
      list: [
        "Branches placed where people can actually reach them.",
        "Mobile branches that travel to the community.",
        "Cash machines in more towns and villages.",
        "Digital banking for everything that does not need a visit.",
        "Financial education held in the community itself.",
        "Partnerships with local organisations people already trust.",
      ],
      nbe: {
        points: [
          "15,000 individuals across 163 villages were reached with financial literacy sessions under Haya Karima, with the content adapted to each governorate (2023).",
          "Six bus branches, 38 electronic service branches and 42 solar-powered branches operate alongside 657 branches nationwide (2023).",
          "48% of NBE's retail portfolio sits outside Cairo and Alexandria (2023).",
          "10,000 citizens were reached with the World Food Programme through awareness sessions across 35 villages in five governorates (2023).",
        ],
        note: "NBE names distance, cultural barriers and low financial literacy as the obstacles this work has to deal with. Its annual report counts 164 Haya Karima villages where its ESG report counts 163; both are its own published figures, and both are shown rather than quietly reconciled.",
      },
    },

    women: {
      id: "women",
      eyebrow: "Solution 4 — Women",
      title: "Make Financial Inclusion Work for Women",
      lead: "Having access to financial services can make it easier for women to save, receive payments, manage money, and support businesses.",
      body: "An account held by a household is not the same as an account held by a person. Where one account serves a whole family, whoever does not hold it has no record of their own and no balance they control separately.",
      list: [
        "Financial education that reaches women directly.",
        "Accounts that are straightforward to open.",
        "Digital payments that work without having to travel.",
        "Support and financing for women running businesses.",
        "Services designed around how women actually use them.",
      ],
      nbe: {
        points: [
          "Women make up 41% of NBE's customer base, with 4 million female liabilities customers (2023).",
          "EGP 200 million in dedicated MSMEDA funding channels for female-owned enterprises (2023).",
          "An EGP 350 million agreement prioritising women entrepreneurs in microfinance (2023).",
          "585 female entrepreneurs were reached with non-financial services, through partnerships including the I Make This platform (2023).",
        ],
        note: "These are the most recent figures NBE has published on women's financial inclusion.",
      },
      national:
        "Across Egypt, 72.5% of women held an active account by June 2026, up from 19.1% in 2016 — a 327% increase in the number of women included. That is a Central Bank of Egypt national figure covering all providers.",
    },

    youth: {
      id: "youth",
      eyebrow: "Solution 5 — Young people",
      title: "Start Financial Education Early",
      lead: "Young people who understand money and banking are better prepared to manage their finances as they enter university and work.",
      list: [
        "Financial literacy taught at university.",
        "Showing students how digital banking actually works.",
        "Explaining what saving does over time.",
        "Online material students can find on their own.",
        "First accounts and cards designed for someone with no financial history.",
      ],
      nbe: {
        points: [
          "4,000 students at Cairo, Helwan, Beni Suef and Menoufiya universities attended financial literacy sessions on saving, budgeting and available products (2023).",
          "12,000 students across universities and educational institutes were reached in total, including through the Sabek Helmk presidential initiative (2023).",
          "The Meeza Unified card gives a student a first payment product that doubles as their university ID (2023).",
          "37% of NBE account holders are under 35 (2023).",
        ],
        note: "NBE reports these as 2023 programme results; it has not published an update for a later year.",
      },
      national:
        "Across Egypt, 58% of people aged 15 to 35 held an active account by June 2026, up from 36.3% in 2020 — a rise of 85%. That is a Central Bank of Egypt national figure, not an NBE result.",
    },

    business: {
      id: "business",
      eyebrow: "Solution 6 — Small businesses",
      title: "Help Small Businesses Enter the Formal Financial System",
      lead: "Many small businesses operate mainly with cash and may have limited access to formal financial services. Without a record of sales, a lender has very little to look at.",
      list: [
        "Business accounts that are simple to open.",
        "A way to accept payment by card, phone or wallet.",
        "Financing sized for a small business.",
        "Financial education aimed at owners, not at accountants.",
        "Simple digital tools for keeping records.",
        "Practical support for people who are just starting out.",
      ],
      nbe: {
        points: [
          "NilePreneurs and its Business Development Service hubs — a Central Bank of Egypt programme with Nile University that NBE supports — reported 32,707 beneficiaries and 13,145 new entrepreneurs across 12 governorates and 70 engaged NBE branches (2023).",
          "2,000 entrepreneurs and business owners were reached through business expos, where financial solutions are explained face to face (2023).",
          "The partnership with the I Am the Egyptian Foundation, running since 2016, covers 148,567 microfinance beneficiaries through 129 engaged branches.",
          "Financing through that partnership rose from EGP 741.7 million in 2021 to EGP 1.218 billion in 2022.",
        ],
        note: "NilePreneurs is a national programme led by the Central Bank of Egypt with Nile University. NBE reports supporting it, so the beneficiary numbers belong to the programme rather than to NBE alone.",
      },
      national:
        "Across Egypt, bank lending to micro, small and medium businesses grew 390% between 2015 and 2025, and microfinance from banks and non-bank lenders together reached EGP 107 billion in 2025.",
    },

    security: {
      id: "security",
      eyebrow: "Solution 7 — Staying safe",
      title: "Make Digital Banking Safer",
      lead: "Increasing financial inclusion also means helping people feel safe using financial services. Someone who is afraid of being defrauded will keep their money at home, whatever services exist.",
      list: [
        "Cybersecurity awareness explained in plain language.",
        "Showing people what a fraud attempt actually looks like.",
        "Explaining what a one-time password (OTP) is, and why it is never shared.",
        "Recognising fake messages and calls, known as phishing.",
        "Simple habits that keep an account safe.",
        "Clear, consistent communication from banks about what they will and will not ask for.",
      ],
      warning: {
        title: "Remember",
        body: "Your bank will never need you to share your OTP, PIN, or password.",
        items: [
          "An OTP is the one-time code sent to your phone to confirm a payment. You type it in yourself — you never read it out to anyone.",
          "Nobody legitimate will ask for your PIN or your password: not by phone, not by message, not in person.",
          "If a message pressures you to act immediately, that urgency is itself the warning sign.",
          "If you are unsure, stop, and contact your bank using the number printed on your card or its official app.",
        ],
      },
      note: "This section describes general safe practice rather than the procedures of any one bank.",
    },
  },

  contribution: {
    eyebrow: "NBE's contribution",
    title: "NBE's Contribution to Financial Inclusion",
    description:
      "Nine areas, each looked at the same way: what the problem is, what people generally do about it, what NBE says it's doing, and what that actually changes for someone. Every claim about NBE here comes straight from its own published reports, with the source attached.",
    labels: {
      problem: "The problem",
      solution: "The solution",
      nbe: "What NBE is doing",
      helps: "How it helps people",
    },
    items: [
      {
        id: "education",
        icon: "graduation",
        title: "Financial Education",
        problem: "People cannot use services that have never been explained to them.",
        solution: "Teach the basics in plain language, where people already are.",
        nbe: "Reports reaching 15,000 individuals across 163 villages, 4,000 university students, and 42,000 people through observance-day programmes (2023).",
        helps: "Someone who understands what an account does can decide whether it is worth opening.",
        source: "nbeEsg2023",
      },
      {
        id: "digital",
        icon: "smartphone",
        title: "Digital Banking",
        problem: "Getting to a branch costs time that working people often do not have.",
        solution: "Move everyday banking onto the phone people already own.",
        nbe: "Launched the Meeza Unified card for students, supporting e-payments, contactless payments and wallet services, and operates 38 electronic service branches (2023).",
        helps: "Routine banking stops requiring a journey and a queue.",
        source: "nbeEsg2023",
      },
      {
        id: "outreach",
        icon: "users",
        title: "Community Outreach",
        problem: "Awareness campaigns rarely reach the people furthest from a bank.",
        solution: "Go to communities directly, alongside partners they already know.",
        nbe: "Reached 10,000 citizens with the World Food Programme through awareness sessions across 35 villages in five governorates (2023).",
        helps: "Information arrives where people live, instead of waiting for them to come and ask for it.",
        source: "nbeAnnual2023",
      },
      {
        id: "youth",
        icon: "sprout",
        title: "Youth",
        problem: "Money habits form long before anyone teaches the basics.",
        solution: "Reach young people while they are still studying.",
        nbe: "Ran sessions for 4,000 students at four universities, reached 12,000 students in total including through Sabek Helmk, and reports 37% of account holders are under 35 (2023).",
        helps: "Young people start work already understanding saving and payments.",
        source: "nbeEsg2023",
      },
      {
        id: "women",
        icon: "handshake",
        title: "Women",
        problem: "Services and financing often reach a household rather than a woman directly.",
        solution: "Provide accounts, education and financing to women in their own name.",
        nbe: "Reports women as 41% of its customer base with 4 million female liabilities customers, EGP 200 million in dedicated funding channels for female-owned enterprises, and 585 women entrepreneurs reached with non-financial services (2023).",
        helps: "Saving, being paid and borrowing become possible independently.",
        source: "nbeEsg2023",
      },
      {
        id: "rural",
        icon: "tractor",
        title: "Rural Communities",
        problem: "In a village, the nearest branch can be a journey away.",
        solution: "Bring branches, machines and education closer to the community.",
        nbe: "Operates six bus branches and 42 solar-powered branches, reports 48% of its retail portfolio outside Cairo and Alexandria, and reached 163 villages with literacy sessions (2023).",
        helps: "Basic financial services stop costing a day of travel.",
        source: "nbeEsg2023",
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "Digital Payments",
        problem: "People paid in cash have no simple way to pay or be paid digitally.",
        solution: "Put a first card or wallet into people's hands.",
        nbe: "Reports that Meeza prepaid unified cards brought 720,000 previously unbanked customers into the formal financial sector (2023).",
        helps: "A first card is often the step that makes everything else possible.",
        source: "nbeEsg2023",
      },
      {
        id: "access",
        icon: "building",
        title: "Access to Financial Services",
        problem: "A branch or a machine that cannot be used is the same as no branch at all.",
        solution: "Build the network out, and make it usable by everyone.",
        nbe: "Reports 657 branches and 6,797 ATMs — of which 1,238 are designed for visually impaired customers and 34 are accessible to wheelchair users — with 230 branches staffed by employees literate in sign language (2023).",
        helps: "More people can actually reach and use the services that already exist.",
        source: "nbeEsg2023",
      },
      {
        id: "business",
        icon: "store",
        title: "Small Businesses",
        problem: "A cash-only business has no record that a lender can assess.",
        solution: "Help owners keep records, take digital payments and reach financing.",
        nbe: "Supports NilePreneurs and its Business Development Service hubs, reporting 32,707 beneficiaries and 13,145 new entrepreneurs across 12 governorates, and reached 2,000 owners at business expos (2023).",
        helps: "A business with records behind it can borrow, grow and take people on.",
        source: "nbeEsg2023",
      },
    ],
  },

  impact: {
    eyebrow: "The numbers",
    title: "NBE's Impact",
    description:
      "Every figure below tells you what it measures, which year it's from, and where it comes from. Nothing here is estimated — if a result is from 2023, it's labelled 2023, not passed off as something more current.",
    latestLabel: "Latest NBE data",
    latestTitle: "What NBE has published most recently",
    latestNote:
      "From NBE Economic Bulletins No. 1 and No. 2 of 2026. A bulletin printed in 2026 usually reports results from 2025, and each card states the exact period it covers.",
    programmesTitle: "Financial education and outreach — last reported for 2023",
    programmesNote:
      "2023 is the most recent year NBE has published programme-level results for. Its 2026 bulletins cover the bank's finances and awards, not its education work, so no newer figure exists to show in its place.",
    nationalTitle: "Egypt as a whole — not NBE",
    nationalNote:
      "Central Bank of Egypt indicators covering every provider in the country, current to June 2026. They are shown so NBE's own programmes can be read in proportion.",
  },

  journey: {
    eyebrow: "For you",
    title: "How Can You Take the First Step?",
    description:
      "You don't have to do all of this at once, and you don't have to do any of it today. This is simply the order that tends to work.",
    steps: [
      {
        icon: "bookOpen",
        title: "Learn the basics",
        body: "Start with what an account, a card and a wallet actually do.",
      },
      {
        icon: "search",
        title: "Choose what you need",
        body: "Not everyone needs everything. Decide which problem you want solved first.",
      },
      {
        icon: "idCard",
        title: "Open an account if it suits you",
        body: "Ask which documents are needed, and what it costs, before you go.",
      },
      {
        icon: "smartphone",
        title: "Learn how digital banking works",
        body: "Set up the app, and try one small transaction before relying on it.",
      },
      {
        icon: "lock",
        title: "Protect your information",
        body: "Never share an OTP, a PIN or a password with anyone, for any reason.",
      },
      {
        icon: "piggyBank",
        title: "Start managing your money",
        body: "Keep track of what comes in and what goes out, and save what you can.",
      },
    ],
    cta: "Start Learning",
  },

  paths: {
    eyebrow: "At a glance",
    title: "Problem, Solution, Benefit",
    description:
      "The whole page in five lines. Read each row from left to right: what stands in the way, what answers it, and what changes as a result.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      benefit: "Benefit",
    },
    items: [
      {
        id: "distance",
        icon: "mapPin",
        problem: "Long distance from a bank",
        solution: "Digital and mobile banking",
        benefit: "Easier access",
      },
      {
        id: "literacy",
        icon: "bookOpen",
        problem: "Low financial literacy",
        solution: "Financial education",
        benefit: "Better financial decisions",
      },
      {
        id: "cash",
        icon: "banknote",
        problem: "Everything paid in cash",
        solution: "Digital payments",
        benefit: "Easier transactions",
      },
      {
        id: "fear",
        icon: "shield",
        problem: "Fear of digital banking",
        solution: "Cybersecurity education",
        benefit: "Greater confidence",
      },
      {
        id: "rural",
        icon: "tractor",
        problem: "Limited rural access",
        solution: "Community outreach and digital services",
        benefit: "Wider access",
      },
    ],
  },

  future: {
    eyebrow: "Looking ahead",
    title: "What's Next?",
    description:
      "These are areas where work can continue — not predictions. The Central Bank of Egypt has said it is preparing a second National Financial Inclusion Strategy covering 2026 to 2030.",
    items: [
      {
        icon: "smartphone",
        title: "More digital banking",
        body: "More of what currently needs a branch visit could be done from a phone.",
      },
      {
        icon: "graduation",
        title: "Better financial education",
        body: "Reaching more people, earlier, and in language they already use.",
      },
      {
        icon: "qrCode",
        title: "Wider use of digital payments",
        body: "More shops and services able to accept payment without cash.",
      },
      {
        icon: "building",
        title: "More accessible services",
        body: "Accounts and branches that work for people with disabilities and for first-time users.",
      },
      {
        icon: "shield",
        title: "Stronger security awareness",
        body: "Fraud awareness spreading as fast as the services themselves.",
      },
      {
        icon: "tractor",
        title: "Greater rural access",
        body: "Closing the remaining distance between villages and financial services.",
      },
      {
        icon: "users",
        title: "More services for young people and women",
        body: "Products shaped around the two groups where the gaps have been widest.",
      },
      {
        icon: "store",
        title: "Support for digital entrepreneurship",
        body: "Helping small businesses build and sell using digital tools.",
      },
    ],
    note: "Areas for continued development, not forecasts. Nothing here is a commitment by any institution.",
  },

  closing: {
    title: "Financial inclusion starts with understanding.",
    description:
      "Learn how banking actually works, see what services are available to you, and get a sense of how financial inclusion can make everyday life a little easier.",
    primary: "Start Learning",
    secondary: "Explore NBE's Contribution",
  },

  disclaimer:
    "This page is an educational summary compiled by the project team. It is not an official National Bank of Egypt publication, no account can be opened through it, and it does not provide financial advice or promote any product.",
};

export type SolutionsDict = typeof en;

const ar: SolutionsDict = {
  meta: {
    title: "حلول الشمول المالي",
    description:
      "العوائق التي تُبقي الناس في مصر خارج النظام المالي، والحلول التي يمكن أن تعالجها، وما يذكر البنك الأهلي المصري أنه يقوم به — بلغة بسيطة وواضحة.",
  },

  hero: {
    eyebrow: "الحلول",
    title: "جعل الخدمات المصرفية أسهل للجميع",
    description:
      "الشمول المالي أكبر من مجرد فتح حساب بنكي. إنه أن تصبح الخدمات المالية في متناول الجميع فعلًا — أسهل وصولًا، وأسهل فهمًا، وأخف تكلفة، وأبسط استخدامًا.",
    cta: "اكتشف الحلول",
  },

  labels: {
    nbe: "مساهمة البنك الأهلي المصري",
    national: "مصر كلها — وليس البنك الأهلي",
    solutionsList: "كيف يبدو ذلك عمليًا",
  },

  problems: {
    eyebrow: "لنبدأ من المشكلة",
    title: "ما الذي نحاول حله؟",
    description:
      "قبل أن نتحدث عن الحلول، يستحق الأمر أن نتوقف عند ما يُبعد الناس فعلًا عن البنوك والخدمات المالية في مصر.",
    items: [
      {
        id: "access",
        icon: "building",
        title: "وصول محدود إلى الخدمات المالية",
        body: "ليس كل شخص يسكن قريبًا من فرع بنك أو ماكينة صراف، وبعض الخدمات لا تتوفر إلا في أماكن بعينها.",
      },
      {
        id: "literacy",
        icon: "bookOpen",
        title: "ضعف الثقافة المالية",
        body: "ببساطة، بعض الناس لا يعرفون كيف تعمل الحسابات البنكية أو البطاقات أو المدفوعات الرقمية أو غيرها من الخدمات المالية.",
      },
      {
        id: "procedures",
        icon: "fileText",
        title: "إجراءات مصرفية معقدة",
        body: "الاستمارات والمستندات والخطوات التي يصعب فهمها قد توقف الشخص قبل أن يبدأ.",
      },
      {
        id: "digital",
        icon: "laptop",
        title: "وعي رقمي محدود",
        body: "امتلاك هاتف شيء، ومعرفة استخدامه في تحريك الأموال بأمان شيء آخر.",
      },
      {
        id: "fear",
        icon: "circleSlash",
        title: "الخوف من التعامل مع البنوك",
        body: "القلق من رسوم غير متوقعة أو من الوقوع في خطأ أو من الرفض يجعل بعض الناس يبتعدون تمامًا.",
      },
      {
        id: "fraud",
        icon: "alert",
        title: "مخاوف الأمن الإلكتروني والاحتيال",
        body: "قصص النصب وسرقة الأموال تجعل الناس يترددون في تجربة الخدمات الرقمية.",
      },
      {
        id: "cost",
        icon: "coins",
        title: "خدمات تبدو مرتفعة التكلفة",
        body: "إذا بدت الرسوم أو الحد الأدنى للرصيد كبيرة أمام دخل محدود، يبدو الحساب عبئًا لا وسيلة مساعدة.",
      },
      {
        id: "informal",
        icon: "banknote",
        title: "حياة عملية تقوم على النقد",
        body: "كثيرون يتقاضون أجورهم نقدًا وينفقونها نقدًا، فلا يحتاجون إلى حساب لتسيير شؤون شهرهم.",
      },
      {
        id: "rural",
        icon: "tractor",
        title: "تحديات الوصول في الريف",
        body: "في القرية قد يكون أقرب فرع على مسافة رحلة كاملة، والرحلة تكلف وقتًا ومالًا معًا.",
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "وعي محدود بالمدفوعات الرقمية",
        body: "المحافظ والتحويلات والدفع بالبطاقة موجودة بالفعل، لكن كثيرين لم يشرح لهم أحد ما الذي تفعله.",
      },
    ],
  },

  solutions: {
    eyebrow: "ما الذي يمكن عمله",
    title: "حلول يمكن أن تحدث فرقًا",
    description:
      "لا شيء من هذه الحلول معقد في حد ذاته. لكنها مجتمعة تعالج معظم أسباب بقاء الناس خارج النظام المالي.",
    helps: "كيف يساعد ذلك",
    more: "اقرأ المزيد أدناه",
    items: [
      {
        id: "education",
        icon: "graduation",
        title: "التثقيف المالي",
        body: "شرح ما تفعله الحسابات والبطاقات والمدفوعات الرقمية فعليًا، بلغة بسيطة.",
        helps: "من يفهم الخدمة يستطيع أن يقرر إن كان يحتاجها، بدلًا من تجنّبها.",
        href: "#education",
      },
      {
        id: "easier",
        icon: "checkCircle",
        title: "خدمات مصرفية أبسط",
        body: "استمارات أقل، وخطوات أوضح، وموظفون يشرحون دون مصطلحات فنية.",
        helps: "فتح الحساب يتوقف عن كونه أمرًا يُؤجَّل باستمرار.",
        href: "",
      },
      {
        id: "digital",
        icon: "smartphone",
        title: "الخدمات المصرفية الرقمية",
        body: "إنجاز المعاملات اليومية من الهاتف بدلًا من الانتقال إلى الفرع.",
        helps: "المسافة والطوابير لم تعد هي ما يحدد قدرتك على استخدام أموالك.",
        href: "#digital",
      },
      {
        id: "affordable",
        icon: "dollar",
        title: "خدمات مالية ميسورة التكلفة",
        body: "حسابات وخدمات بتكلفة لا يصبح معها الدخل المحدود عائقًا أمام امتلاك حساب.",
        helps: "يصبح الحساب مفيدًا حتى مع دخل صغير أو غير منتظم.",
        href: "",
      },
      {
        id: "rural",
        icon: "mapPin",
        title: "الوصول إلى الريف والمجتمعات المحلية",
        body: "إيصال الخدمات إلى حيث يعيش الناس فعلًا — عبر الفروع والماكينات والزيارات.",
        helps: "لم تعد الخدمات المالية الأساسية تتطلب يومًا كاملًا من التنقل.",
        href: "#rural",
      },
      {
        id: "women",
        icon: "users",
        title: "الشمول المالي للمرأة",
        body: "ضمان وصول الخدمات والتثقيف والتمويل إلى النساء مباشرة، لا عبر الأسرة فقط.",
        helps: "يصبح الادخار وتلقّي الأموال وإدارة مشروع ممكنًا باسمها هي.",
        href: "#women",
      },
      {
        id: "youth",
        icon: "sprout",
        title: "الشمول المالي للشباب",
        body: "الوصول إلى الشباب وهم ما زالوا على مقاعد الدراسة، قبل أن تترسخ العادات المالية.",
        helps: "تبدأ القرارات في الجامعة والعمل من معرفة لا من تخمين.",
        href: "#youth",
      },
      {
        id: "security",
        icon: "shield",
        title: "الأمان المالي والوعي",
        body: "تعليم الناس كيف يحدث الاحتيال فعلًا، وما الذي لن يطلبه منك بنك حقيقي أبدًا.",
        helps: "تحل الثقة محل الخوف الذي يُبعد الناس عن الخدمات الرقمية.",
        href: "#security",
      },
      {
        id: "business",
        icon: "store",
        title: "دعم المشروعات الصغيرة",
        body: "مساعدة المشروعات الصغيرة على فتح حسابات وقبول المدفوعات الرقمية والوصول إلى التمويل.",
        helps: "يتحول سجل مبيعاتك إلى شيء يستطيع البنك أن يمنحك تمويلًا استنادًا إليه.",
        href: "#business",
      },
      {
        id: "infrastructure",
        icon: "wifi",
        title: "بنية رقمية أفضل",
        body: "ماكينات أكثر، ومحال أكثر تقبل البطاقات، وشبكات تعمل خارج المدن الكبرى.",
        helps: "الأموال الرقمية لا تنفع إلا في الأماكن التي يمكن استخدامها فيها فعلًا.",
        href: "",
      },
    ],
  },

  deep: {
    education: {
      id: "education",
      eyebrow: "الحل الأول — التثقيف المالي",
      title: "اجعل الخدمات المصرفية أسهل في الفهم",
      lead: "لا يستطيع الناس الاستفادة من الخدمات المالية إن لم يفهموها. وفي أغلب الأحيان لا يكون العائق هو الرفض، بل أن أحدًا لم يشرح لهم يومًا ما الذي يفعله الحساب البنكي.",
      list: [
        "برامج تثقيف مالي تبدأ من الصفر.",
        "شرح مبسط لما يفعله البنك بأموالك فعليًا.",
        "تدريس التثقيف المالي داخل الجامعات.",
        "ورش عمل تُعقد داخل المجتمع، لا في الفروع فقط.",
        "محتوى إلكتروني يمكن قراءته بالوتيرة التي تناسب كل شخص.",
        "أدلة مبسطة لمن يفتح حسابه الأول.",
      ],
      nbe: {
        points: [
          "وصلت جلسات التثقيف المالي إلى 15,000 فرد في 163 قرية ضمن مبادرة حياة كريمة الوطنية (2023).",
          "حضر 4,000 طالب جامعي في جامعات القاهرة وحلوان وبني سويف والمنوفية جلسات تناولت الادخار وإعداد الميزانية والمنتجات المالية المتاحة لهم (2023).",
          "وعدد أوسع بلغ 12,000 طالب في الجامعات والمعاهد التعليمية، ويشمل المبادرة الرئاسية «سابق حلمك» (2023).",
          "تم التواصل مع 42,000 فرد عبر برامج تثقيف مالي مرتبطة بالمناسبات العالمية (2023).",
        ],
        note: "عام 2023 هو أحدث عام نشر فيه البنك الأهلي هذا المستوى من تفاصيل البرامج. أما نشراته الصادرة في 2026 فتتناول نتائج البنك المالية وجوائزه لا عمله التثقيفي، ولذلك تُعرض هذه الأرقام بوصفها نتائج عام 2023 لا أرقامًا حالية.",
      },
    },

    digital: {
      id: "digital",
      eyebrow: "الحل الثاني — الخدمات المصرفية الرقمية",
      title: "انقل الخدمات المصرفية إلى هواتف الناس",
      lead: "يزيل الهاتف عدة عوائق في وقت واحد: المسافة إلى الفرع، والانتظار بعد الوصول، وكون الفروع لا تفتح إلا في ساعات العمل.",
      body: "تعني الخدمات المصرفية الرقمية عادةً أربعة أشياء. الخدمات المصرفية عبر الهاتف هي تطبيق بنكك نفسه. والمدفوعات الرقمية هي أن تدفع لمحل أو لشخص دون نقود. والمحفظة الإلكترونية تحفظ أموالك مقابل رقم هاتفك لا داخل حساب بنكي. والخدمات المصرفية عبر الإنترنت هي الشيء نفسه لكن من جهاز الكمبيوتر.",
      list: [
        "الاطلاع على رصيدك دون الانتقال إلى أي مكان.",
        "إرسال الأموال واستقبالها من الهاتف.",
        "الدفع في المحال بالبطاقة أو الهاتف أو المحفظة بدلًا من النقد.",
        "فتح الحساب وإدارته عبر الإنترنت.",
      ],
      nbe: {
        points: [
          "بطاقة ميزة الموحدة، التي أُطلقت لطلاب الجامعات، تعمل كهوية جامعية وأداة مصرفية معًا، وتدعم المدفوعات الإلكترونية والمعاملات اللاتلامسية وخدمات المحفظة الإلكترونية (2023).",
          "أدخلت بطاقات ميزة الموحدة مسبقة الدفع 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع المالي الرسمي (2023).",
          "6,797 ماكينة صراف آلي، منها 1,238 مصممة لخدمة ضعاف البصر و34 مهيأة لمستخدمي الكراسي المتحركة (2023).",
          "يعمل 38 فرع خدمة إلكترونية إلى جانب شبكة الفروع الرئيسية (2023).",
        ],
        note: "لم ينشر البنك الأهلي أعداد مستخدمي تطبيقه على الهاتف أو خدماته عبر الإنترنت، ولذلك لا تُعرض هنا أي أرقام عنها.",
      },
      national:
        "على مستوى مصر كلها، بلغ عدد المحافظ الإلكترونية المسجلة 50.4 مليون محفظة بحلول عام 2025، وتحركت عبرها 4 تريليونات جنيه خلال ذلك العام. وهذه أرقام للبنك المركزي المصري تشمل كل مقدمي الخدمة في البلاد — وليست أرقام عملاء البنك الأهلي.",
    },

    rural: {
      id: "rural",
      eyebrow: "الحل الثالث — الوصول إلى الريف والمجتمعات",
      title: "قرّب الخدمات المالية من الناس",
      lead: "لا ينبغي أن يضطر أحد إلى قطع مسافة طويلة لمجرد الحصول على خدمة مالية أساسية. ففي القرية قد تكون تكلفة الوصول إلى الفرع أكبر من قيمة المعاملة نفسها.",
      list: [
        "فروع في أماكن يستطيع الناس الوصول إليها فعلًا.",
        "فروع متنقلة تنتقل إلى المجتمع المحلي.",
        "ماكينات صراف في مزيد من المدن والقرى.",
        "خدمات مصرفية رقمية لكل ما لا يحتاج إلى زيارة.",
        "تثقيف مالي يُقام داخل المجتمع نفسه.",
        "شراكات مع جهات محلية يثق بها الناس بالفعل.",
      ],
      nbe: {
        points: [
          "وصلت جلسات التثقيف المالي إلى 15,000 فرد في 163 قرية ضمن مبادرة حياة كريمة، بمحتوى مُكيَّف حسب كل محافظة (2023).",
          "تعمل ستة فروع متنقلة (أتوبيس) و38 فرع خدمة إلكترونية و42 فرعًا بالطاقة الشمسية إلى جانب 657 فرعًا على مستوى الجمهورية (2023).",
          "48% من محفظة الأفراد لدى البنك تقع خارج القاهرة والإسكندرية (2023).",
          "تم الوصول إلى 10,000 مواطن بالتعاون مع برنامج الأغذية العالمي عبر جلسات توعية في 35 قرية بخمس محافظات (2023).",
        ],
        note: "يذكر البنك الأهلي أن العوائق التي يتعامل معها هذا العمل هي المسافة والحواجز الثقافية وضعف الثقافة المالية. ويُحصي تقريره السنوي 164 قرية ضمن حياة كريمة بينما يُحصي تقرير الاستدامة 163 قرية؛ والرقمان منشوران من البنك نفسه، وقد عُرضا معًا بدلًا من التوفيق بينهما دون بيان.",
      },
    },

    women: {
      id: "women",
      eyebrow: "الحل الرابع — المرأة",
      title: "اجعل الشمول المالي يعمل لصالح المرأة",
      lead: "يمكن أن ييسّر الوصول إلى الخدمات المالية على المرأة أن تدّخر وتتلقى المدفوعات وتدير أموالها وتدعم مشروعها.",
      body: "الحساب الذي تملكه الأسرة ليس كالحساب الذي يملكه الشخص. فحين يخدم حساب واحد أسرة كاملة، يبقى من لا يملكه بلا سجل خاص به ولا رصيد يتحكم فيه بمفرده.",
      list: [
        "تثقيف مالي يصل إلى النساء مباشرة.",
        "حسابات يسهل فتحها.",
        "مدفوعات رقمية تعمل دون الحاجة إلى التنقل.",
        "دعم وتمويل للنساء اللاتي يُدرن مشروعات.",
        "خدمات مصممة وفق الطريقة التي تستخدمها بها النساء فعلًا.",
      ],
      nbe: {
        points: [
          "تمثل النساء 41% من قاعدة عملاء البنك الأهلي، بواقع 4 ملايين عميلة في جانب الالتزامات (2023).",
          "200 مليون جنيه في قنوات تمويل مخصصة عبر جهاز تنمية المشروعات للمشروعات المملوكة للنساء (2023).",
          "اتفاق بقيمة 350 مليون جنيه يعطي الأولوية لرائدات الأعمال في التمويل متناهي الصغر (2023).",
          "تم الوصول إلى 585 رائدة أعمال بخدمات غير مالية، عبر شراكات من بينها منصة «أنا اللي عملته» (2023).",
        ],
        note: "هذه أحدث الأرقام التي نشرها البنك الأهلي عن الشمول المالي للمرأة.",
      },
      national:
        "على مستوى مصر، بلغت نسبة النساء اللاتي يملكن حسابًا نشطًا 72.5% بحلول يونيو 2026، ارتفاعًا من 19.1% في 2016 — أي بزيادة 327% في عدد النساء المشمولات. وهذا رقم قومي للبنك المركزي المصري يشمل كل مقدمي الخدمة.",
    },

    youth: {
      id: "youth",
      eyebrow: "الحل الخامس — الشباب",
      title: "ابدأ التثقيف المالي مبكرًا",
      lead: "الشباب الذين يفهمون المال والخدمات المصرفية يكونون أقدر على إدارة أموالهم عند دخولهم الجامعة وسوق العمل.",
      list: [
        "تدريس الثقافة المالية في الجامعة.",
        "تعريف الطلاب بكيفية عمل الخدمات المصرفية الرقمية فعليًا.",
        "شرح ما يفعله الادخار مع مرور الوقت.",
        "محتوى إلكتروني يستطيع الطلاب الوصول إليه بأنفسهم.",
        "حسابات وبطاقات أولى مصممة لمن ليس له تاريخ مالي سابق.",
      ],
      nbe: {
        points: [
          "حضر 4,000 طالب في جامعات القاهرة وحلوان وبني سويف والمنوفية جلسات تثقيف مالي عن الادخار وإعداد الميزانية والمنتجات المتاحة (2023).",
          "بلغ إجمالي من تم الوصول إليهم 12,000 طالب في الجامعات والمعاهد التعليمية، بما في ذلك عبر المبادرة الرئاسية «سابق حلمك» (2023).",
          "تمنح بطاقة ميزة الموحدة الطالب أول منتج للدفع يعمل في الوقت نفسه كهويته الجامعية (2023).",
          "37% من أصحاب الحسابات لدى البنك الأهلي دون سن 35 (2023).",
        ],
        note: "يعرض البنك الأهلي هذه الأرقام بوصفها نتائج برامج عام 2023، ولم ينشر تحديثًا لعام لاحق.",
      },
      national:
        "على مستوى مصر، بلغت نسبة من يملكون حسابًا نشطًا من عمر 15 إلى 35 عامًا 58% بحلول يونيو 2026، ارتفاعًا من 36.3% في 2020 — بزيادة 85%. وهذا رقم قومي للبنك المركزي المصري لا نتيجة خاصة بالبنك الأهلي.",
    },

    business: {
      id: "business",
      eyebrow: "الحل السادس — المشروعات الصغيرة",
      title: "ساعد المشروعات الصغيرة على دخول النظام المالي الرسمي",
      lead: "تعمل كثير من المشروعات الصغيرة بالنقد أساسًا، وقد يكون وصولها إلى الخدمات المالية الرسمية محدودًا. وبغير سجل للمبيعات لا يجد المموّل ما ينظر فيه.",
      list: [
        "حسابات للمشروعات يسهل فتحها.",
        "وسيلة لقبول الدفع بالبطاقة أو الهاتف أو المحفظة.",
        "تمويل بحجم يناسب المشروع الصغير.",
        "تثقيف مالي موجه لأصحاب المشروعات لا للمحاسبين.",
        "أدوات رقمية بسيطة لحفظ السجلات.",
        "دعم عملي لمن هم في بداية الطريق.",
      ],
      nbe: {
        points: [
          "سجّل برنامج نايل بيرنرز ومراكز خدمات تطوير الأعمال التابعة له — وهو برنامج للبنك المركزي المصري بالتعاون مع جامعة النيل ويدعمه البنك الأهلي — 32,707 مستفيد و13,145 رائد أعمال جديد في 12 محافظة و70 فرعًا مشاركًا من فروع البنك (2023).",
          "تم الوصول إلى 2,000 رائد أعمال وصاحب مشروع عبر معارض الأعمال، حيث تُشرح الحلول المالية وجهًا لوجه (2023).",
          "تغطي الشراكة مع مؤسسة «أنا المصري»، القائمة منذ 2016، عدد 148,567 مستفيدًا من التمويل متناهي الصغر عبر 129 فرعًا مشاركًا.",
          "ارتفع التمويل عبر تلك الشراكة من 741.7 مليون جنيه في 2021 إلى 1.218 مليار جنيه في 2022.",
        ],
        note: "نايل بيرنرز برنامج وطني بقيادة البنك المركزي المصري بالتعاون مع جامعة النيل. ويفيد البنك الأهلي بأنه يدعمه، ولذلك فأعداد المستفيدين تخص البرنامج لا البنك الأهلي وحده.",
      },
      national:
        "على مستوى مصر، نما إقراض البنوك للمشروعات متناهية الصغر والصغيرة والمتوسطة بنسبة 390% بين عامي 2015 و2025، وبلغ التمويل متناهي الصغر من البنوك وغير البنوك معًا 107 مليارات جنيه في 2025.",
    },

    security: {
      id: "security",
      eyebrow: "الحل السابع — الأمان",
      title: "اجعل الخدمات المصرفية الرقمية أكثر أمانًا",
      lead: "زيادة الشمول المالي تعني أيضًا مساعدة الناس على الشعور بالأمان عند استخدام الخدمات المالية. فمن يخشى الاحتيال سيبقي أمواله في بيته مهما توفرت الخدمات.",
      list: [
        "توعية بالأمن الإلكتروني بلغة بسيطة.",
        "تعريف الناس بالشكل الحقيقي لمحاولة الاحتيال.",
        "شرح معنى رمز التحقق (OTP) ولماذا لا يُشارَك أبدًا.",
        "التعرف على الرسائل والمكالمات المزيفة، وهو ما يُعرف بالتصيّد.",
        "عادات بسيطة تحافظ على أمان الحساب.",
        "تواصل واضح وثابت من البنوك بشأن ما تطلبه وما لا تطلبه أبدًا.",
      ],
      warning: {
        title: "تذكر",
        body: "البنك لن يطلب منك مشاركة الرقم السري أو رمز التحقق أو كلمة المرور.",
        items: [
          "رمز التحقق (OTP) هو الرمز الذي يصلك مرة واحدة على هاتفك لتأكيد عملية دفع. أنت من يُدخله بنفسه — ولا تقرأه لأحد مطلقًا.",
          "لن يطلب منك أي جهة موثوقة رقمك السري أو كلمة مرورك: لا عبر الهاتف، ولا عبر رسالة، ولا وجهًا لوجه.",
          "إذا ضغطت عليك رسالة للتصرف فورًا، فهذا الاستعجال نفسه هو علامة الخطر.",
          "إن لم تكن متأكدًا، توقف، وتواصل مع بنكك على الرقم المطبوع على بطاقتك أو عبر تطبيقه الرسمي.",
        ],
      },
      note: "يصف هذا القسم ممارسات الأمان العامة، لا إجراءات بنك بعينه.",
    },
  },

  contribution: {
    eyebrow: "مساهمة البنك الأهلي",
    title: "مساهمة البنك الأهلي المصري في الشمول المالي",
    description:
      "تسعة مجالات، ننظر إلى كل منها بالطريقة نفسها: ما المشكلة، وما الحل المعتاد لها، وما الذي يقول البنك الأهلي إنه يفعله، وما الذي يتغير فعليًا بالنسبة لشخص عادي. وكل ما يُنسب إلى البنك هنا مأخوذ مباشرة من تقاريره المنشورة، مع ذكر مصدره.",
    labels: {
      problem: "المشكلة",
      solution: "الحل",
      nbe: "ما الذي يقوم به البنك الأهلي",
      helps: "كيف يساعد ذلك الناس",
    },
    items: [
      {
        id: "education",
        icon: "graduation",
        title: "التثقيف المالي",
        problem: "لا يستطيع الناس استخدام خدمات لم يشرحها لهم أحد من قبل.",
        solution: "تعليم الأساسيات بلغة بسيطة، وفي الأماكن التي يوجد بها الناس بالفعل.",
        nbe: "يفيد بالوصول إلى 15,000 فرد في 163 قرية، و4,000 طالب جامعي، و42,000 شخص عبر برامج المناسبات العالمية (2023).",
        helps: "من يفهم ما يفعله الحساب يستطيع أن يقرر إن كان يستحق أن يُفتح.",
        source: "nbeEsg2023",
      },
      {
        id: "digital",
        icon: "smartphone",
        title: "الخدمات المصرفية الرقمية",
        problem: "الوصول إلى الفرع يكلف وقتًا لا يملكه كثير من العاملين.",
        solution: "نقل المعاملات اليومية إلى الهاتف الذي يملكه الناس بالفعل.",
        nbe: "أطلق بطاقة ميزة الموحدة للطلاب، وهي تدعم المدفوعات الإلكترونية واللاتلامسية وخدمات المحفظة، ويشغّل 38 فرع خدمة إلكترونية (2023).",
        helps: "لم تعد المعاملات المعتادة تتطلب رحلة ووقوفًا في طابور.",
        source: "nbeEsg2023",
      },
      {
        id: "outreach",
        icon: "users",
        title: "التوعية المجتمعية",
        problem: "نادرًا ما تصل حملات التوعية إلى الأبعد عن البنوك.",
        solution: "الذهاب إلى المجتمعات مباشرة، مع شركاء يعرفهم أهلها.",
        nbe: "وصل إلى 10,000 مواطن بالتعاون مع برنامج الأغذية العالمي عبر جلسات توعية في 35 قرية بخمس محافظات (2023).",
        helps: "تصل المعلومة إلى حيث يعيش الناس، بدلًا من انتظار أن يأتوا للسؤال عنها.",
        source: "nbeAnnual2023",
      },
      {
        id: "youth",
        icon: "sprout",
        title: "الشباب",
        problem: "تتكوّن العادات المالية قبل أن يعلّم أحد الأساسيات بوقت طويل.",
        solution: "الوصول إلى الشباب وهم ما زالوا يدرسون.",
        nbe: "نظّم جلسات لـ4,000 طالب في أربع جامعات، ووصل إلى 12,000 طالب إجمالًا بما في ذلك عبر «سابق حلمك»، ويفيد بأن 37% من أصحاب الحسابات دون سن 35 (2023).",
        helps: "يبدأ الشباب حياتهم العملية وهم يفهمون الادخار والمدفوعات.",
        source: "nbeEsg2023",
      },
      {
        id: "women",
        icon: "handshake",
        title: "المرأة",
        problem: "كثيرًا ما تصل الخدمات والتمويل إلى الأسرة لا إلى المرأة مباشرة.",
        solution: "توفير الحسابات والتثقيف والتمويل للنساء بأسمائهن.",
        nbe: "يفيد بأن النساء 41% من قاعدة عملائه بواقع 4 ملايين عميلة، و200 مليون جنيه في قنوات تمويل مخصصة للمشروعات المملوكة للنساء، والوصول إلى 585 رائدة أعمال بخدمات غير مالية (2023).",
        helps: "يصبح الادخار وتلقّي الأموال والاقتراض ممكنًا بشكل مستقل.",
        source: "nbeEsg2023",
      },
      {
        id: "rural",
        icon: "tractor",
        title: "المجتمعات الريفية",
        problem: "في القرية قد يكون أقرب فرع على مسافة رحلة كاملة.",
        solution: "تقريب الفروع والماكينات والتثقيف من المجتمع المحلي.",
        nbe: "يشغّل ستة فروع متنقلة و42 فرعًا بالطاقة الشمسية، ويفيد بأن 48% من محفظة الأفراد لديه خارج القاهرة والإسكندرية، ووصل إلى 163 قرية بجلسات تثقيف مالي (2023).",
        helps: "لم تعد الخدمات الأساسية تكلف يومًا كاملًا من التنقل.",
        source: "nbeEsg2023",
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "المدفوعات الرقمية",
        problem: "من يتقاضى أجره نقدًا لا يجد وسيلة بسيطة للدفع أو التحصيل رقميًا.",
        solution: "وضع أول بطاقة أو محفظة في يد الناس.",
        nbe: "يفيد بأن بطاقات ميزة الموحدة مسبقة الدفع أدخلت 720,000 عميل غير متعامل مع البنوك سابقًا إلى القطاع المالي الرسمي (2023).",
        helps: "أول بطاقة هي غالبًا الخطوة التي تجعل كل ما بعدها ممكنًا.",
        source: "nbeEsg2023",
      },
      {
        id: "access",
        icon: "building",
        title: "الوصول إلى الخدمات المالية",
        problem: "الفرع أو الماكينة التي يتعذر استخدامها لا تختلف عن عدم وجودها.",
        solution: "توسيع الشبكة، وجعلها قابلة للاستخدام من الجميع.",
        nbe: "يفيد بوجود 657 فرعًا و6,797 ماكينة صراف — منها 1,238 مصممة لضعاف البصر و34 مهيأة لمستخدمي الكراسي المتحركة — و230 فرعًا به موظفون يجيدون لغة الإشارة (2023).",
        helps: "يستطيع مزيد من الناس الوصول فعلًا إلى الخدمات الموجودة واستخدامها.",
        source: "nbeEsg2023",
      },
      {
        id: "business",
        icon: "store",
        title: "المشروعات الصغيرة",
        problem: "المشروع الذي يعمل بالنقد وحده لا يملك سجلًا يستطيع المموّل تقييمه.",
        solution: "مساعدة أصحاب المشروعات على حفظ السجلات وقبول المدفوعات الرقمية والوصول إلى التمويل.",
        nbe: "يدعم برنامج نايل بيرنرز ومراكز خدمات تطوير الأعمال، بواقع 32,707 مستفيد و13,145 رائد أعمال جديد في 12 محافظة، ووصل إلى 2,000 صاحب مشروع في معارض الأعمال (2023).",
        helps: "المشروع الذي له سجل يستطيع أن يقترض وينمو ويوظّف.",
        source: "nbeEsg2023",
      },
    ],
  },

  impact: {
    eyebrow: "الأرقام",
    title: "أثر البنك الأهلي",
    description:
      "كل رقم أدناه يوضح لك ما الذي يقيسه، والعام الذي يخصه، ومصدره. لا شيء هنا تقديري — وإن كانت نتيجة ما تعود لعام 2023، فهي مكتوب عليها 2023، ولا تُعرض وكأنها رقم حديث.",
    latestLabel: "أحدث بيانات البنك الأهلي",
    latestTitle: "أحدث ما نشره البنك الأهلي",
    latestNote:
      "من النشرتين الاقتصاديتين رقم 1 ورقم 2 لعام 2026. والنشرة الصادرة في 2026 تعرض عادةً نتائج عام 2025، وكل بطاقة توضح الفترة التي تخصها بالتحديد.",
    programmesTitle: "التثقيف المالي والتوعية — آخر ما أُعلن عنه يخص 2023",
    programmesNote:
      "عام 2023 هو أحدث عام نشر فيه البنك الأهلي نتائج على مستوى البرامج. أما نشرات 2026 فتتناول نتائج البنك المالية وجوائزه لا عمله التثقيفي، فلا يوجد رقم أحدث يمكن عرضه بدلًا منها.",
    nationalTitle: "مصر كلها — وليس البنك الأهلي",
    nationalNote:
      "مؤشرات للبنك المركزي المصري تشمل كل مقدمي الخدمة في البلاد، وهي محدّثة حتى يونيو 2026. وتُعرض هنا حتى يمكن قراءة برامج البنك الأهلي في حجمها الصحيح.",
  },

  journey: {
    eyebrow: "من أجلك أنت",
    title: "كيف يمكنك أن تبدأ؟",
    description:
      "لست مضطرًا إلى فعل كل هذا دفعة واحدة، ولا إلى فعل أي منه اليوم. هذا ببساطة هو الترتيب الذي عادةً ما ينجح.",
    steps: [
      {
        icon: "bookOpen",
        title: "تعلّم الأساسيات",
        body: "ابدأ بما يفعله الحساب والبطاقة والمحفظة فعليًا.",
      },
      {
        icon: "search",
        title: "اختر ما تحتاجه",
        body: "ليس كل شخص يحتاج كل شيء. حدّد أي مشكلة تريد حلها أولًا.",
      },
      {
        icon: "idCard",
        title: "افتح حسابًا إن كان مناسبًا لك",
        body: "اسأل عن المستندات المطلوبة وعن التكلفة قبل أن تذهب.",
      },
      {
        icon: "smartphone",
        title: "تعرّف على الخدمات المصرفية الرقمية",
        body: "فعّل التطبيق، وجرّب معاملة صغيرة قبل أن تعتمد عليه.",
      },
      {
        icon: "lock",
        title: "احمِ بياناتك",
        body: "لا تشارك رمز التحقق أو الرقم السري أو كلمة المرور مع أحد، مهما كان السبب.",
      },
      {
        icon: "piggyBank",
        title: "ابدأ إدارة أموالك",
        body: "تابع ما يدخل وما يخرج، وادّخر ما تستطيع.",
      },
    ],
    cta: "ابدأ التعلم",
  },

  paths: {
    eyebrow: "في لمحة",
    title: "المشكلة، والحل، والفائدة",
    description:
      "الصفحة كلها في خمسة أسطر. اقرأ كل صف بالترتيب: ما الذي يقف عائقًا، وما الذي يعالجه، وما الذي يتغير نتيجة لذلك.",
    labels: {
      problem: "المشكلة",
      solution: "الحل",
      benefit: "الفائدة",
    },
    items: [
      {
        id: "distance",
        icon: "mapPin",
        problem: "بُعد المسافة عن البنك",
        solution: "الخدمات المصرفية الرقمية وعبر الهاتف",
        benefit: "وصول أسهل",
      },
      {
        id: "literacy",
        icon: "bookOpen",
        problem: "ضعف الثقافة المالية",
        solution: "التثقيف المالي",
        benefit: "قرارات مالية أفضل",
      },
      {
        id: "cash",
        icon: "banknote",
        problem: "كل شيء يُدفع نقدًا",
        solution: "المدفوعات الرقمية",
        benefit: "معاملات أسهل",
      },
      {
        id: "fear",
        icon: "shield",
        problem: "الخوف من الخدمات الرقمية",
        solution: "التوعية بالأمن الإلكتروني",
        benefit: "ثقة أكبر",
      },
      {
        id: "rural",
        icon: "tractor",
        problem: "وصول محدود في الريف",
        solution: "التوعية المجتمعية والخدمات الرقمية",
        benefit: "وصول أوسع",
      },
    ],
  },

  future: {
    eyebrow: "نظرة إلى الأمام",
    title: "ماذا بعد؟",
    description:
      "هذه مجالات يمكن أن يستمر العمل فيها — وليست تنبؤات. وقد أفاد البنك المركزي المصري بأنه يُعِدّ استراتيجية وطنية ثانية للشمول المالي تغطي الفترة من 2026 إلى 2030.",
    items: [
      {
        icon: "smartphone",
        title: "مزيد من الخدمات المصرفية الرقمية",
        body: "يمكن أن يصبح كثير مما يتطلب اليوم زيارة الفرع متاحًا من الهاتف.",
      },
      {
        icon: "graduation",
        title: "تثقيف مالي أفضل",
        body: "الوصول إلى عدد أكبر من الناس، في وقت أبكر، وبلغة يستخدمونها بالفعل.",
      },
      {
        icon: "qrCode",
        title: "انتشار أوسع للمدفوعات الرقمية",
        body: "مزيد من المحال والخدمات القادرة على قبول الدفع دون نقود.",
      },
      {
        icon: "building",
        title: "خدمات أيسر في الوصول",
        body: "حسابات وفروع تناسب ذوي الإعاقة ومن يتعاملون مع البنوك لأول مرة.",
      },
      {
        icon: "shield",
        title: "وعي أقوى بالأمان",
        body: "أن ينتشر الوعي بالاحتيال بالسرعة نفسها التي تنتشر بها الخدمات.",
      },
      {
        icon: "tractor",
        title: "وصول أكبر في الريف",
        body: "تقليص ما تبقى من مسافة بين القرى والخدمات المالية.",
      },
      {
        icon: "users",
        title: "مزيد من الخدمات للشباب والنساء",
        body: "منتجات مصممة حول الفئتين اللتين كانت الفجوات فيهما الأوسع.",
      },
      {
        icon: "store",
        title: "دعم ريادة الأعمال الرقمية",
        body: "مساعدة المشروعات الصغيرة على البناء والبيع باستخدام الأدوات الرقمية.",
      },
    ],
    note: "مجالات للتطوير المستمر، لا توقعات. ولا شيء مما ورد هنا يمثل التزامًا من أي جهة.",
  },

  closing: {
    title: "الشمول المالي يبدأ بالفهم.",
    description:
      "تعرّف على كيفية عمل الخدمات المصرفية فعليًا، واكتشف ما هو متاح لك منها، وافهم كيف يمكن للشمول المالي أن يجعل حياتك اليومية أسهل قليلًا.",
    primary: "ابدأ التعلم",
    secondary: "اطّلع على مساهمة البنك الأهلي",
  },

  disclaimer:
    "هذه الصفحة ملخص تثقيفي أعدّه فريق المشروع. وهي ليست إصدارًا رسميًا للبنك الأهلي المصري، ولا يمكن فتح حساب من خلالها، ولا تقدم استشارات مالية ولا تروّج لأي منتج.",
};

export const solutions: Record<Locale, SolutionsDict> = { en, ar };
