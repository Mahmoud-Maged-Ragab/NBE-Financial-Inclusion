import type { Locale } from "../config";

/**
 * Beginner content: the plain-language layer of the site.
 *
 * Writing rules for this file:
 *  - Talk to the reader as "you". No "the consumer", no "end users".
 *  - One idea per sentence. Two or three sentences per explanation.
 *  - No term is used before it is explained.
 *  - Nothing here promises a financial outcome or recommends a provider.
 *  - Arabic is written to be read easily, not translated word for word.
 */

const en = {
  meta: {
    title: "Banking Basics",
    description:
      "New to banks? Start here. Simple explanations of what a bank is, how an account works, what a debit card and a mobile wallet do, and how to stay safe.",
  },
  hero: {
    eyebrow: "Start here",
    title: "Banking, Explained Simply",
    description: "Never used a bank before? That's completely fine.",
    lead: "This page explains the basics in plain language — what a bank actually does, what an account is for, how to put money in and take it out, and how to keep your money safe. No banking knowledge needed.",
  },

  /* ---------------- Start here ---------------- */
  startHere: {
    eyebrow: "New to banking?",
    title: "Start here",
    description:
      "Six short answers, in the order that makes them easiest to follow.",
    cta: "Start with the basics",
    steps: [
      {
        icon: "landmark",
        title: "What is a bank?",
        body: "A place that looks after your money and helps you move it, keep it and save it.",
      },
      {
        icon: "wallet",
        title: "What is a bank account?",
        body: "Your own space at the bank where your money is kept and tracked.",
      },
      {
        icon: "creditCard",
        title: "How do I use an account?",
        body: "With a card, an app, an ATM, or by visiting a branch.",
      },
      {
        icon: "smartphone",
        title: "What are digital payments?",
        body: "Paying or sending money using your phone or card instead of cash.",
      },
      {
        icon: "users",
        title: "What is financial inclusion?",
        body: "Making it easier for everyone to reach and use financial services.",
      },
      {
        icon: "shield",
        title: "How can I stay safe?",
        body: "Keep your PIN, password and codes to yourself. Always.",
      },
    ],
  },

  /* ---------------- Banking basics cards ---------------- */
  basics: {
    eyebrow: "Banking basics",
    title: "Banking Basics",
    description:
      "Eight things worth knowing before you open an account. Pick any one to read more.",
    label: "Banking basics",
    cards: [
      {
        id: "bank",
        icon: "landmark",
        title: "What is a bank?",
        summary: "A place that keeps your money safe and helps you use it.",
        detail:
          "A bank looks after money for people and businesses. You can leave your money with it, take it out when you need it, send it to someone else, or set some aside to save. Banks in Egypt are supervised by the Central Bank of Egypt, which sets the rules they must follow.",
        points: [
          "Keeps your money instead of you storing cash at home",
          "Lets you send and receive money",
          "Gives you a record of what came in and what went out",
          "Is supervised by the Central Bank of Egypt",
        ],
      },
      {
        id: "account",
        icon: "wallet",
        title: "What is a bank account?",
        summary: "Your own space at the bank, in your name.",
        detail:
          "An account is where your money sits at the bank. It has a number that belongs to you, so money sent to that number reaches you. You can add money to it, take money out, and see everything that has happened to it.",
        points: [
          "Opened in your name, using your ID",
          "Has an account number others can send money to",
          "Shows you a history of every transaction",
          "You can usually open one from age 15 in Egypt",
        ],
      },
      {
        id: "debit-card",
        icon: "creditCard",
        title: "What is a debit card?",
        summary: "A card connected to your own money.",
        detail:
          "A debit card is linked to your account. When you pay with it, the money comes straight out of your account — you are spending your own money, not borrowing. You can use it in shops, online, or at an ATM.",
        points: [
          "Pays using money you already have",
          "Works in shops and online",
          "Protected by a PIN only you should know",
          "Can be stopped by the bank if you lose it",
        ],
      },
      {
        id: "atm",
        icon: "banknote",
        title: "What is an ATM?",
        summary: "A machine that does simple banking without a branch.",
        detail:
          "An ATM is the machine you see outside branches and in shopping areas. Put in your card, enter your PIN, and you can take out cash, check your balance, and at many machines put cash in too. It works outside branch hours.",
        points: [
          "Take out cash any time of day",
          "Check how much is in your account",
          "Many machines accept deposits as well",
          "Some are built for customers who are blind or use a wheelchair",
        ],
      },
      {
        id: "transfer",
        icon: "send",
        title: "What is a bank transfer?",
        summary: "Moving money from your account to someone else's.",
        detail:
          "A transfer sends money from your account to another account, without any cash changing hands. You need the other person's account details. Many transfers now arrive within seconds.",
        points: [
          "No need to carry or hand over cash",
          "Reaches someone in another city just as easily",
          "Leaves a record showing it was sent and received",
          "Often arrives in seconds",
        ],
      },
      {
        id: "savings",
        icon: "piggyBank",
        title: "What does saving mean?",
        summary: "Keeping money aside for later, separately.",
        detail:
          "Saving means setting money aside instead of spending it now. Keeping savings in an account separates them from your everyday money, which makes them easier to leave alone. Banks offer different savings products, and the terms differ between them.",
        points: [
          "Keeps savings apart from spending money",
          "Harder to dip into by accident",
          "Gives you a clear record of what you have set aside",
          "Terms and any returns differ — always ask the bank",
        ],
      },
      {
        id: "digital-banking",
        icon: "smartphone",
        title: "What is digital banking?",
        summary: "Using your bank from your phone or computer.",
        detail:
          "Digital banking means doing your banking without going to a branch. From an app or a website you can check your balance, send money, and pay bills. For anyone whose nearest branch is far away, this turns a half-day trip into a one-minute task.",
        points: [
          "Check your balance at any hour",
          "Send money without travelling",
          "Pay bills from where you are",
          "No queue and no travel cost",
        ],
      },
      {
        id: "mobile-wallet",
        icon: "nfc",
        title: "What is a mobile wallet?",
        summary: "Money held on your phone number.",
        detail:
          "A mobile wallet keeps money against your phone number rather than a full bank account. You can put cash in, send money to another wallet, and pay in some shops. It is usually simpler to open than a bank account, which is why many people start here.",
        points: [
          "Tied to your phone number",
          "Usually quick to open",
          "Good for sending smaller amounts",
          "Counts as an active account in Egypt's inclusion figures",
        ],
      },
    ],
  },

  /* ---------------- The journey ---------------- */
  journey: {
    eyebrow: "How it works",
    title: "How Banking Works, Step by Step",
    description:
      "From having no account to using financial services. Select any step to see what it involves.",
    caption:
      "You don't have to do all of this. Most people start with the first two steps and stop wherever suits them.",
    steps: [
      {
        id: "you",
        icon: "users",
        label: "You",
        detail:
          "You have money coming in — from a job, a business, family, or a pension. Right now it may all be cash that you keep at home and carry with you.",
      },
      {
        id: "open",
        icon: "idCard",
        label: "Open an account",
        detail:
          "You go to a bank, or use an app, with your national ID. The bank opens an account in your name and gives you an account number. In Egypt you can usually do this from age 15.",
      },
      {
        id: "deposit",
        icon: "deposit",
        label: "Put money in",
        detail:
          "You add money to your account — by handing cash to a teller, using a deposit machine, or having your salary paid straight in. This is called a deposit.",
      },
      {
        id: "use",
        icon: "creditCard",
        label: "Use your card or app",
        detail:
          "The bank gives you a card, and usually an app. You can now pay in shops, pay online, and take cash out of an ATM when you need it.",
      },
      {
        id: "move",
        icon: "repeat",
        label: "Send or receive money",
        detail:
          "You can send money to someone else's account and receive money into yours. Nobody has to carry cash across town, and both sides get a record of it.",
      },
      {
        id: "save",
        icon: "piggyBank",
        label: "Save",
        detail:
          "You set some money aside rather than spending it. Keeping it in a savings product separates it from your everyday money.",
      },
      {
        id: "more",
        icon: "trendingUp",
        label: "Reach other services",
        detail:
          "With a record of your account behind you, other services become possible to apply for — such as borrowing to grow a small business. Whether you are offered them, and on what terms, is up to the provider.",
      },
    ],
  },

  /* ---------------- What is financial inclusion ---------------- */
  inclusion: {
    eyebrow: "The idea behind this site",
    title: "So, what is financial inclusion?",
    simple:
      "Simply put, financial inclusion means making it easier for people to reach and use useful financial services.",
    includes:
      "That can mean a bank account, savings, payments, credit, a mobile wallet, or digital banking.",
    whyTitle: "Why does it matter?",
    why: "Because it can make saving easier, make it simpler to get paid and pay others, and help you take part in the formal economy.",
    notTitle: "And what it is not",
    not: "Financial inclusion isn't about pushing anyone to borrow, and it doesn't promise anyone will end up better off. It's about giving you the choice.",
  },

  /* ---------------- Real people ---------------- */
  examples: {
    eyebrow: "Let's look at an example",
    title: "What This Looks Like in Real Life",
    description:
      "Five short examples of what changes when someone can reach financial services.",
    withoutLabel: "Without an account",
    withLabel: "With an account",
    items: [
      {
        id: "ahmed",
        icon: "banknote",
        who: "Ahmed gets paid in cash every month",
        without:
          "He keeps the money at home and carries cash whenever he needs to pay someone.",
        with: "He can be paid electronically, pay digitally, see every transaction, and keep his savings separate.",
      },
      {
        id: "student",
        icon: "graduation",
        who: "Mona is a university student",
        without:
          "She relies on family handing her cash, and has no way to track what she spends.",
        with: "Money reaches her instantly from home, she pays online, and she can start learning to budget.",
      },
      {
        id: "worker",
        icon: "users",
        who: "Sara works for a company",
        without:
          "She has to collect her salary in person and queue to pay each bill.",
        with: "Her salary arrives in her account, and bills are paid from her phone in a minute.",
      },
      {
        id: "business",
        icon: "store",
        who: "Youssef runs a small shop",
        without:
          "He takes only cash, keeps no records, and can't show anyone how the shop is doing.",
        with: "He accepts card payments, and a record of his takings exists if he ever applies for financing.",
      },
      {
        id: "rural",
        icon: "sprout",
        who: "Om Hassan lives in a village far from a branch",
        without:
          "Any banking task means a long journey and a lost day of work.",
        with: "A mobile wallet, an agent nearby, or a visiting branch handles most of it without the trip.",
      },
    ],
  },

  /* ---------------- Glossary ---------------- */
  glossary: {
    eyebrow: "The words",
    title: "Banking Words Made Simple",
    description:
      "The handful of terms you will meet most often, in one line each.",
    terms: [
      {
        t: "Account",
        b: "Where your money is kept and managed at a bank, in your name.",
      },
      {
        t: "Debit card",
        b: "A card connected to your account that you can use to pay or to take out money.",
      },
      {
        t: "Deposit",
        b: "Putting money into your account.",
      },
      {
        t: "Withdrawal",
        b: "Taking money out of your account.",
      },
      {
        t: "Balance",
        b: "How much money is in your account right now.",
      },
      {
        t: "Interest",
        b: "Money a bank may pay you for keeping savings with it, or money you may pay when you borrow.",
      },
      {
        t: "Credit",
        b: "Money you borrow and agree to pay back on agreed terms.",
      },
      {
        t: "ATM",
        b: "A machine that lets you do some banking without going into a branch.",
      },
      {
        t: "OTP",
        b: "A one-time code sent to your phone to confirm it is really you. Never share it.",
      },
      {
        t: "Mobile wallet",
        b: "Money held against your phone number, which you can send, receive and spend.",
      },
    ],
  },

  /* ---------------- Safety ---------------- */
  safety: {
    eyebrow: "Safety",
    title: "Stay Safe While Banking",
    description:
      "Digital banking is safe to use, as long as a few things stay private. These are the ones that matter.",
    neverTitle: "Never share these with anyone",
    neverNote:
      "A real bank will never ask you for any of these — not by phone, not by message, not by email.",
    never: [
      "Your password",
      "Your PIN",
      "Any OTP or verification code",
      "Your full card number, expiry date or the code on the back",
      "Your banking login details",
    ],
    watchTitle: "Things to watch out for",
    watch: [
      {
        icon: "alert",
        t: "Fake messages and emails",
        b: "A message that looks like it's from your bank, asking you to confirm your details. Banks don't ask this way.",
      },
      {
        icon: "smartphone",
        t: "Fake calls",
        b: "Someone calls saying they are from the bank and need your code to fix a problem. Hang up and call the bank yourself.",
      },
      {
        icon: "circleSlash",
        t: "Fake links",
        b: "A link that opens a page looking just like your bank's. Type the address yourself instead of tapping links.",
      },
      {
        icon: "handshake",
        t: "Offers that seem too good",
        b: "Prizes, giveaways and unbelievable deals are a common way of collecting card details.",
      },
      {
        icon: "userCheck",
        t: "People pretending to be someone you trust",
        b: "Pressure to act fast is the warning sign. Real requests can wait for you to check.",
      },
    ],
    calm: "If something feels wrong, stop and contact your bank directly using the number on your card or on its official website.",
  },

  /* ---------------- FAQ ---------------- */
  faq: {
    eyebrow: "Questions",
    title: "Common Questions",
    description: "Short answers to the things people ask first.",
    items: [
      {
        q: "What is a bank?",
        a: "A bank keeps money for people and businesses, and helps them move it, save it and manage it. Banks in Egypt are supervised by the Central Bank of Egypt.",
      },
      {
        q: "Why would I need a bank account?",
        a: "So you don't have to keep cash at home or carry it around, so you can be paid and pay others without cash, and so you have a record of your money.",
      },
      {
        q: "Do I need a lot of money to open an account?",
        a: "No. Requirements differ between banks and account types, so ask the bank what applies to the account you want.",
      },
      {
        q: "Can I use banking from my phone?",
        a: "Yes. Most banks have an app for checking your balance, sending money and paying bills. A mobile wallet works from your phone too.",
      },
      {
        q: "What is a debit card?",
        a: "A card linked to your account. When you pay with it, the money comes out of your own account. You are not borrowing.",
      },
      {
        q: "What is an ATM?",
        a: "A machine that lets you take out cash, check your balance and often deposit money, without going into a branch.",
      },
      {
        q: "What is a mobile wallet?",
        a: "Money held against your phone number rather than a full bank account. It is usually quicker to open, and you can send, receive and spend from it.",
      },
      {
        q: "What is a digital payment?",
        a: "Paying without cash — by card, by app, by wallet, or by transfer from one account to another.",
      },
      {
        q: "Is digital banking safe?",
        a: "Yes, provided you keep your PIN, password and one-time codes private. Nobody from a real bank will ever ask you for them.",
      },
      {
        q: "What is financial inclusion?",
        a: "Making it easier for people to reach and use useful financial services — accounts, payments, savings, credit and digital services.",
      },
      {
        q: "How can I learn more?",
        a: "Watch the short videos on this site, read how Egypt is doing as a country, or look at what the National Bank of Egypt publishes about its financial education work.",
      },
    ],
  },

  next: {
    eyebrow: "Where next",
    title: "Now that the basics make sense",
    description:
      "Three directions, depending on what you would like to look at next.",
    cards: [
      {
        icon: "qrCode",
        title: "See it explained on film",
        body: "Short videos from the National Bank of Egypt, the Central Bank of Egypt and the World Bank.",
        href: "/videos",
        cta: "Watch the videos",
      },
      {
        icon: "mapPin",
        title: "See how Egypt is doing",
        body: "How many people have an account, and how that has changed since 2016.",
        href: "/egypt",
        cta: "Egypt's numbers",
      },
      {
        icon: "building",
        title: "See what NBE reports",
        body: "The financial education and access work the National Bank of Egypt publishes.",
        href: "/nbe-impact",
        cta: "NBE and inclusion",
      },
    ],
  },

  disclaimer:
    "This page explains how banking works in general. It's not financial advice, it doesn't recommend any bank or product, and terms differ between providers — always check with the bank before you decide anything.",

  preview: {
    eyebrow: "New to banking?",
    title: "Never Used a Bank Before?",
    description:
      "Start with the basics. What a bank is, what an account does, and how to keep your money safe — in plain language.",
    cta: "Start with the basics",
  },
};

export type BasicsDict = typeof en;

const ar: BasicsDict = {
  meta: {
    title: "أساسيات التعامل مع البنوك",
    description:
      "أول مرة تتعامل مع بنك؟ ابدأ من هنا. شرح مبسط لما هو البنك، وكيف يعمل الحساب، وما فائدة بطاقة الخصم والمحفظة الإلكترونية، وكيف تحافظ على أمان أموالك.",
  },
  hero: {
    eyebrow: "ابدأ من هنا",
    title: "التعامل مع البنوك ببساطة",
    description: "أول مرة تتعامل مع بنك؟ لا مشكلة على الإطلاق.",
    lead: "تشرح هذه الصفحة الأساسيات بلغة بسيطة — ما الذي يفعله البنك فعلًا، وفيمَ يفيدك الحساب، وكيف تودع أموالك وتسحبها، وكيف تحافظ على أمانها. لا تحتاج إلى أي معرفة مصرفية مسبقة.",
  },

  startHere: {
    eyebrow: "أول مرة تتعامل مع بنك؟",
    title: "ابدأ من هنا",
    description: "ست إجابات قصيرة، مرتبة بالشكل الأسهل في المتابعة.",
    cta: "ابدأ بالأساسيات",
    steps: [
      {
        icon: "landmark",
        title: "ما هو البنك؟",
        body: "مكان يحفظ أموالك ويساعدك على تحريكها والاحتفاظ بها وادخارها.",
      },
      {
        icon: "wallet",
        title: "ما هو الحساب البنكي؟",
        body: "مساحتك الخاصة في البنك، تُحفظ فيها أموالك وتُسجَّل حركتها.",
      },
      {
        icon: "creditCard",
        title: "إزاي أستخدم الحساب؟",
        body: "ببطاقة، أو تطبيق، أو ماكينة صراف، أو بزيارة الفرع.",
      },
      {
        icon: "smartphone",
        title: "ما هي المدفوعات الرقمية؟",
        body: "أن تدفع أو ترسل أموالًا بهاتفك أو ببطاقتك بدلًا من النقود.",
      },
      {
        icon: "users",
        title: "ما هو الشمول المالي؟",
        body: "تسهيل وصول الجميع إلى الخدمات المالية واستخدامها.",
      },
      {
        icon: "shield",
        title: "إزاي أحافظ على أماني؟",
        body: "احتفظ برقمك السري وكلمة المرور والأكواد لنفسك. دائمًا.",
      },
    ],
  },

  basics: {
    eyebrow: "أساسيات البنوك",
    title: "أساسيات التعامل مع البنوك",
    description:
      "ثمانية أشياء يفيدك معرفتها قبل فتح حساب. اختر أيًا منها لقراءة المزيد.",
    label: "أساسيات التعامل مع البنوك",
    cards: [
      {
        id: "bank",
        icon: "landmark",
        title: "ما هو البنك؟",
        summary: "مكان يحفظ أموالك بأمان ويساعدك على استخدامها.",
        detail:
          "البنك يحفظ أموال الأفراد والمشروعات. يمكنك أن تترك أموالك لديه، وتسحبها وقت حاجتك، وترسلها لشخص آخر، أو تضع جزءًا جانبًا للادخار. والبنوك في مصر خاضعة لإشراف البنك المركزي المصري الذي يضع القواعد التي تلتزم بها.",
        points: [
          "يحفظ أموالك بدلًا من تخزين النقود في البيت",
          "يتيح لك إرسال الأموال واستقبالها",
          "يعطيك سجلًا بما دخل وما خرج",
          "يخضع لإشراف البنك المركزي المصري",
        ],
      },
      {
        id: "account",
        icon: "wallet",
        title: "ما هو الحساب البنكي؟",
        summary: "مساحتك الخاصة في البنك، وباسمك أنت.",
        detail:
          "الحساب هو المكان الذي توجد فيه أموالك داخل البنك. وله رقم يخصك وحدك، فأي أموال تُرسل إلى هذا الرقم تصل إليك. يمكنك الإيداع فيه والسحب منه ومتابعة كل ما جرى عليه.",
        points: [
          "يُفتح باسمك وببطاقة الرقم القومي",
          "له رقم حساب يستطيع الآخرون التحويل إليه",
          "يعرض لك سجل كل عملية",
          "يمكن فتحه عادةً من سن 15 عامًا في مصر",
        ],
      },
      {
        id: "debit-card",
        icon: "creditCard",
        title: "ما هي بطاقة الخصم؟",
        summary: "بطاقة متصلة بأموالك أنت.",
        detail:
          "بطاقة الخصم مرتبطة بحسابك. وعند الدفع بها تُخصم الأموال مباشرة من حسابك — أي أنك تنفق أموالك أنت ولا تقترض. ويمكنك استخدامها في المحال، وعلى الإنترنت، وفي ماكينة الصراف.",
        points: [
          "تدفع بأموال تملكها بالفعل",
          "تعمل في المحال وعلى الإنترنت",
          "محمية برقم سري لا يعرفه غيرك",
          "يمكن للبنك إيقافها إذا فقدتها",
        ],
      },
      {
        id: "atm",
        icon: "banknote",
        title: "ما هي ماكينة الصراف الآلي؟",
        summary: "ماكينة تنجز معاملات بسيطة دون الذهاب للفرع.",
        detail:
          "ماكينة الصراف هي الجهاز الذي تراه أمام الفروع وفي الأماكن التجارية. تضع بطاقتك وتدخل رقمك السري، فتستطيع سحب النقود ومعرفة رصيدك، وفي كثير من الماكينات إيداع النقود أيضًا. وهي تعمل خارج مواعيد الفروع.",
        points: [
          "اسحب النقود في أي وقت",
          "اعرف رصيد حسابك",
          "كثير من الماكينات تقبل الإيداع أيضًا",
          "بعضها مجهز لخدمة المكفوفين ومستخدمي الكراسي المتحركة",
        ],
      },
      {
        id: "transfer",
        icon: "send",
        title: "ما هو التحويل البنكي؟",
        summary: "نقل أموال من حسابك إلى حساب شخص آخر.",
        detail:
          "التحويل يرسل الأموال من حسابك إلى حساب آخر دون تداول أي نقود. وتحتاج فيه إلى بيانات حساب الشخص الآخر. وكثير من التحويلات تصل الآن خلال ثوانٍ.",
        points: [
          "لا حاجة لحمل النقود أو تسليمها",
          "تصل إلى شخص في محافظة أخرى بالسهولة نفسها",
          "تترك سجلًا يثبت الإرسال والاستلام",
          "غالبًا ما تصل خلال ثوانٍ",
        ],
      },
      {
        id: "savings",
        icon: "piggyBank",
        title: "ما معنى الادخار؟",
        summary: "أن تضع أموالًا جانبًا للمستقبل، بشكل منفصل.",
        detail:
          "الادخار يعني أن تضع أموالًا جانبًا بدلًا من إنفاقها الآن. والاحتفاظ بها في حساب يفصلها عن مصروفك اليومي، فيسهل عليك عدم المساس بها. وتقدم البنوك منتجات ادخار مختلفة، وتختلف شروطها فيما بينها.",
        points: [
          "يفصل مدخراتك عن مصروفك اليومي",
          "يصعّب المساس بها دون قصد",
          "يمنحك سجلًا واضحًا لما ادخرته",
          "الشروط والعوائد تختلف — اسأل البنك دائمًا",
        ],
      },
      {
        id: "digital-banking",
        icon: "smartphone",
        title: "ما هي الخدمات المصرفية الرقمية؟",
        summary: "أن تتعامل مع بنكك من هاتفك أو حاسوبك.",
        detail:
          "الخدمات المصرفية الرقمية تعني إنجاز معاملاتك دون الذهاب إلى الفرع. فمن تطبيق أو موقع يمكنك معرفة رصيدك وإرسال الأموال ودفع الفواتير. ولمن يبعد عنه أقرب فرع، يحوّل ذلك رحلة نصف يوم إلى مهمة تستغرق دقيقة.",
        points: [
          "اعرف رصيدك في أي ساعة",
          "أرسل الأموال دون سفر",
          "ادفع فواتيرك من مكانك",
          "بلا طوابير وبلا تكلفة انتقال",
        ],
      },
      {
        id: "mobile-wallet",
        icon: "nfc",
        title: "ما هي المحفظة الإلكترونية؟",
        summary: "أموال محفوظة على رقم هاتفك.",
        detail:
          "المحفظة الإلكترونية تحفظ أموالك مقابل رقم هاتفك بدلًا من حساب بنكي كامل. يمكنك إيداع النقود فيها، وإرسال الأموال إلى محفظة أخرى، والدفع في بعض المحال. وفتحها عادةً أبسط من فتح حساب بنكي، ولذلك يبدأ منها كثيرون.",
        points: [
          "مرتبطة برقم هاتفك",
          "فتحها سريع في العادة",
          "مناسبة لإرسال المبالغ الصغيرة",
          "تُحتسب حسابًا نشطًا ضمن أرقام الشمول المالي في مصر",
        ],
      },
    ],
  },

  journey: {
    eyebrow: "كيف يعمل",
    title: "كيف يسير التعامل مع البنك، خطوة بخطوة",
    description:
      "من عدم امتلاك حساب إلى استخدام الخدمات المالية. اختر أي خطوة لترى ما تتضمنه.",
    caption:
      "لست مضطرًا لفعل كل هذا. يبدأ معظم الناس بالخطوتين الأوليين ويتوقفون عند ما يناسبهم.",
    steps: [
      {
        id: "you",
        icon: "users",
        label: "أنت",
        detail:
          "لديك دخل — من عمل أو مشروع أو من الأسرة أو معاش. وقد يكون كله الآن نقودًا تحتفظ بها في البيت وتحملها معك.",
      },
      {
        id: "open",
        icon: "idCard",
        label: "تفتح حسابًا",
        detail:
          "تذهب إلى بنك، أو تستخدم تطبيقًا، ومعك بطاقة الرقم القومي. فيفتح البنك حسابًا باسمك ويعطيك رقم حساب. ويمكنك ذلك عادةً في مصر من سن 15 عامًا.",
      },
      {
        id: "deposit",
        icon: "deposit",
        label: "تودع أموالًا",
        detail:
          "تضيف أموالًا إلى حسابك — بتسليم النقود لموظف الصندوق، أو عبر ماكينة إيداع، أو بأن يُحوَّل راتبك إليه مباشرة. وهذا ما يسمى الإيداع.",
      },
      {
        id: "use",
        icon: "creditCard",
        label: "تستخدم بطاقتك أو التطبيق",
        detail:
          "يمنحك البنك بطاقة، وغالبًا تطبيقًا. فتستطيع الدفع في المحال، والدفع عبر الإنترنت، وسحب النقود من ماكينة الصراف وقت حاجتك.",
      },
      {
        id: "move",
        icon: "repeat",
        label: "ترسل أو تستقبل أموالًا",
        detail:
          "يمكنك إرسال الأموال إلى حساب شخص آخر واستقبالها في حسابك. فلا يضطر أحد لحمل النقود عبر المدينة، ويحصل الطرفان على سجل بالعملية.",
      },
      {
        id: "save",
        icon: "piggyBank",
        label: "تدّخر",
        detail:
          "تضع جزءًا من أموالك جانبًا بدلًا من إنفاقه. والاحتفاظ به في منتج ادخاري يفصله عن مصروفك اليومي.",
      },
      {
        id: "more",
        icon: "trendingUp",
        label: "تصل إلى خدمات أخرى",
        detail:
          "بوجود سجل لحسابك، يصبح التقدم لخدمات أخرى ممكنًا — مثل التمويل لتنمية مشروع صغير. أما الموافقة وشروطها فتعود إلى الجهة مقدمة الخدمة.",
      },
    ],
  },

  inclusion: {
    eyebrow: "الفكرة وراء هذا الموقع",
    title: "طيب، ما هو الشمول المالي؟",
    simple:
      "ببساطة، الشمول المالي يعني تسهيل وصول الناس إلى الخدمات المالية المفيدة واستخدامها.",
    includes:
      "وقد يشمل ذلك حسابًا بنكيًا، أو ادخارًا، أو مدفوعات، أو تمويلًا، أو محفظة إلكترونية، أو خدمات مصرفية رقمية.",
    whyTitle: "ولماذا يهم؟",
    why: "لأنه يسهّل الادخار، ويجعل استلام الأموال ودفعها أبسط، ويساعدك على المشاركة في الاقتصاد الرسمي.",
    notTitle: "وما هو ليس كذلك",
    not: "الشمول المالي ليس دفعًا لأحد نحو الاقتراض، ولا وعدًا بأن حاله سيتحسن. هو ببساطة أن يكون الاختيار متاحًا أمامك.",
  },

  examples: {
    eyebrow: "لنأخذ مثالًا",
    title: "كيف يبدو ذلك في الحياة الواقعية",
    description:
      "خمسة أمثلة قصيرة لما يتغير حين يستطيع شخص الوصول إلى الخدمات المالية.",
    withoutLabel: "بدون حساب",
    withLabel: "مع وجود حساب",
    items: [
      {
        id: "ahmed",
        icon: "banknote",
        who: "أحمد يتقاضى راتبه نقدًا كل شهر",
        without: "يحتفظ بالمال في البيت ويحمل النقود كلما احتاج أن يدفع لأحد.",
        with: "يستطيع أن يُدفع له إلكترونيًا، ويدفع رقميًا، ويرى كل عملية، ويفصل مدخراته.",
      },
      {
        id: "student",
        icon: "graduation",
        who: "منى طالبة جامعية",
        without: "تعتمد على أن تسلمها أسرتها نقودًا، ولا وسيلة لديها لتتبع ما تنفقه.",
        with: "تصلها الأموال فورًا من البيت، وتدفع عبر الإنترنت، وتبدأ تعلّم إدارة مصروفها.",
      },
      {
        id: "worker",
        icon: "users",
        who: "سارة موظفة في شركة",
        without: "عليها استلام راتبها شخصيًا والوقوف في طابور لدفع كل فاتورة.",
        with: "يصل راتبها إلى حسابها، وتُدفع الفواتير من هاتفها في دقيقة.",
      },
      {
        id: "business",
        icon: "store",
        who: "يوسف صاحب محل صغير",
        without: "يتعامل بالنقود فقط، ولا يحتفظ بسجلات، ولا يستطيع أن يُظهر لأحد أداء محله.",
        with: "يقبل الدفع بالبطاقات، ويوجد سجل لإيراداته إن تقدم يومًا بطلب تمويل.",
      },
      {
        id: "rural",
        icon: "sprout",
        who: "أم حسن تعيش في قرية بعيدة عن الفرع",
        without: "أي معاملة بنكية تعني رحلة طويلة ويوم عمل ضائع.",
        with: "محفظة إلكترونية أو وكيل قريب أو فرع متنقل ينجز معظم ذلك دون الرحلة.",
      },
    ],
  },

  glossary: {
    eyebrow: "المصطلحات",
    title: "مصطلحات بنكية ببساطة",
    description: "المصطلحات القليلة التي ستقابلها كثيرًا، كل منها في سطر واحد.",
    terms: [
      { t: "الحساب", b: "المكان الذي تُحفظ فيه أموالك وتُدار في البنك، وباسمك." },
      {
        t: "بطاقة الخصم",
        b: "بطاقة متصلة بحسابك تستخدمها في الدفع أو في سحب الأموال.",
      },
      { t: "الإيداع", b: "وضع أموال في حسابك." },
      { t: "السحب", b: "أخذ أموال من حسابك." },
      { t: "الرصيد", b: "المبلغ الموجود في حسابك في هذه اللحظة." },
      {
        t: "الفائدة",
        b: "أموال قد يدفعها لك البنك مقابل احتفاظك بمدخراتك لديه، أو تدفعها أنت عند الاقتراض.",
      },
      { t: "الائتمان", b: "أموال تقترضها وتتفق على ردها وفق شروط محددة." },
      {
        t: "ماكينة الصراف",
        b: "ماكينة تتيح لك إنجاز بعض المعاملات دون دخول الفرع.",
      },
      {
        t: "كود التحقق (OTP)",
        b: "رمز يُرسل لمرة واحدة إلى هاتفك للتأكد أنك أنت. لا تشاركه أبدًا.",
      },
      {
        t: "المحفظة الإلكترونية",
        b: "أموال محفوظة مقابل رقم هاتفك، يمكنك إرسالها واستقبالها والإنفاق منها.",
      },
    ],
  },

  safety: {
    eyebrow: "الأمان",
    title: "حافظ على أمانك في التعامل البنكي",
    description:
      "الخدمات المصرفية الرقمية آمنة الاستخدام، ما دامت بعض الأشياء تبقى سرية. وهذه هي المهمة منها.",
    neverTitle: "لا تشارك هذه أبدًا مع أي شخص",
    neverNote:
      "البنك الحقيقي لن يطلب منك أيًا من هذه — لا بالهاتف ولا برسالة ولا ببريد إلكتروني.",
    never: [
      "كلمة المرور الخاصة بك",
      "رقمك السري",
      "أي كود تحقق أو OTP",
      "رقم بطاقتك كاملًا أو تاريخ انتهائها أو الرقم خلفها",
      "بيانات دخولك للخدمات المصرفية",
    ],
    watchTitle: "أشياء انتبه لها",
    watch: [
      {
        icon: "alert",
        t: "رسائل وإيميلات مزيفة",
        b: "رسالة تبدو وكأنها من بنكك وتطلب منك تأكيد بياناتك. البنوك لا تطلب ذلك بهذه الطريقة.",
      },
      {
        icon: "smartphone",
        t: "مكالمات مزيفة",
        b: "شخص يتصل قائلًا إنه من البنك ويحتاج الكود لحل مشكلة. أغلق الخط واتصل بالبنك بنفسك.",
      },
      {
        icon: "circleSlash",
        t: "روابط مزيفة",
        b: "رابط يفتح صفحة تشبه صفحة بنكك تمامًا. اكتب العنوان بنفسك بدلًا من الضغط على الروابط.",
      },
      {
        icon: "handshake",
        t: "عروض تبدو أفضل من اللازم",
        b: "الجوائز والهدايا والعروض غير المعقولة وسيلة شائعة لجمع بيانات البطاقات.",
      },
      {
        icon: "userCheck",
        t: "من ينتحل شخصية تثق بها",
        b: "الضغط عليك للتصرف بسرعة هو علامة التحذير. الطلبات الحقيقية تحتمل أن تتحقق منها.",
      },
    ],
    calm: "إذا شعرت أن شيئًا ما ليس على ما يرام، توقف وتواصل مع بنكك مباشرة على الرقم الموجود على بطاقتك أو على موقعه الرسمي.",
  },

  faq: {
    eyebrow: "أسئلة",
    title: "أسئلة شائعة",
    description: "إجابات قصيرة عن أكثر ما يسأل عنه الناس أول مرة.",
    items: [
      {
        q: "ما هو البنك؟",
        a: "البنك يحفظ أموال الأفراد والمشروعات، ويساعدهم على تحريكها وادخارها وإدارتها. والبنوك في مصر خاضعة لإشراف البنك المركزي المصري.",
      },
      {
        q: "ليه أحتاج حساب بنكي؟",
        a: "حتى لا تضطر للاحتفاظ بالنقود في البيت أو حملها معك، ولتستطيع أن تُدفع لك الأموال وتدفعها دون نقود، وليكون لديك سجل بأموالك.",
      },
      {
        q: "هل أحتاج مبلغًا كبيرًا لفتح حساب؟",
        a: "لا. تختلف الشروط بين البنوك وأنواع الحسابات، لذا اسأل البنك عما ينطبق على الحساب الذي تريده.",
      },
      {
        q: "أقدر أستخدم البنك من موبايلي؟",
        a: "نعم. لمعظم البنوك تطبيق لمعرفة رصيدك وإرسال الأموال ودفع الفواتير. والمحفظة الإلكترونية تعمل من هاتفك أيضًا.",
      },
      {
        q: "ما هي بطاقة الخصم؟",
        a: "بطاقة مرتبطة بحسابك. وعند الدفع بها تُخصم الأموال من حسابك أنت، فأنت لا تقترض.",
      },
      {
        q: "ما هي ماكينة الصراف؟",
        a: "ماكينة تتيح لك سحب النقود ومعرفة رصيدك وغالبًا إيداع الأموال، دون دخول الفرع.",
      },
      {
        q: "ما هي المحفظة الإلكترونية؟",
        a: "أموال محفوظة مقابل رقم هاتفك بدلًا من حساب بنكي كامل. فتحها أسرع عادةً، ويمكنك الإرسال والاستقبال والإنفاق منها.",
      },
      {
        q: "ما هو الدفع الرقمي؟",
        a: "الدفع دون نقود — ببطاقة أو تطبيق أو محفظة أو تحويل من حساب إلى آخر.",
      },
      {
        q: "هل الخدمات المصرفية الرقمية آمنة؟",
        a: "نعم، ما دمت تحتفظ برقمك السري وكلمة المرور وأكواد التحقق لنفسك. ولن يطلبها منك أحد من بنك حقيقي أبدًا.",
      },
      {
        q: "ما هو الشمول المالي؟",
        a: "تسهيل وصول الناس إلى الخدمات المالية المفيدة واستخدامها — الحسابات والمدفوعات والادخار والتمويل والخدمات الرقمية.",
      },
      {
        q: "إزاي أعرف أكتر؟",
        a: "شاهد الفيديوهات القصيرة في هذا الموقع، أو اقرأ عن وضع مصر كدولة، أو اطّلع على ما ينشره البنك الأهلي المصري عن عمله في التثقيف المالي.",
      },
    ],
  },

  next: {
    eyebrow: "إلى أين بعد ذلك",
    title: "بعد أن اتضحت الأساسيات",
    description: "ثلاثة اتجاهات، حسب ما تود الاطلاع عليه بعد ذلك.",
    cards: [
      {
        icon: "qrCode",
        title: "شاهد الشرح بالفيديو",
        body: "مقاطع قصيرة من البنك الأهلي المصري والبنك المركزي المصري والبنك الدولي.",
        href: "/videos",
        cta: "شاهد الفيديوهات",
      },
      {
        icon: "mapPin",
        title: "اعرف وضع مصر",
        body: "كم عدد من يملكون حسابًا، وكيف تغيّر ذلك منذ 2016.",
        href: "/egypt",
        cta: "أرقام مصر",
      },
      {
        icon: "building",
        title: "اطّلع على ما ينشره البنك الأهلي",
        body: "جهود التثقيف المالي وتيسير الوصول التي ينشرها البنك الأهلي المصري.",
        href: "/nbe-impact",
        cta: "البنك الأهلي والشمول",
      },
    ],
  },

  disclaimer:
    "تشرح هذه الصفحة كيف تعمل الخدمات المصرفية بوجه عام. وهي ليست استشارة مالية، ولا تُرشّح أي بنك أو منتج، والشروط تختلف بين الجهات — تحقق دائمًا من البنك قبل اتخاذ أي قرار.",

  preview: {
    eyebrow: "أول مرة تتعامل مع بنك؟",
    title: "أول مرة تتعامل مع بنك؟",
    description:
      "ابدأ بالأساسيات. ما هو البنك، وفيمَ يفيدك الحساب، وكيف تحافظ على أمان أموالك — بلغة بسيطة.",
    cta: "ابدأ بالأساسيات",
  },
};

export const basics: Record<Locale, BasicsDict> = { en, ar };
