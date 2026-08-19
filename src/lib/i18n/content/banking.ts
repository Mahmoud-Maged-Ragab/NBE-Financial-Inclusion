import type { Locale } from "../config";

const en = {
  meta: {
    title: "Know Your Banking Options",
    description:
      "Bank accounts, savings and current accounts, debit and credit cards, mobile wallets and digital payments — explained simply, with what to check before you choose.",
  },
  hero: {
    eyebrow: "Foundations",
    title: "Know your banking options",
    description:
      "Financial services sound more complicated than they are. This page explains the main options in plain language, shows how a bank can help day to day, and sets out what the account-opening process generally involves.",
  },
  notice: {
    title: "How to use this page",
    body: "These are general explanations for education, not recommendations. This site does not promote any bank, cannot tell you which product suits you, and does not know any provider's current terms. Fees, features and requirements differ between banks and change over time — always confirm the details with the bank itself.",
  },
  glossary: {
    eyebrow: "The vocabulary",
    title: "What each option actually is",
    description:
      "Eight terms you will meet whenever financial services are discussed. Select one for a plain explanation.",
    label: "Banking options",
    items: [
      {
        id: "bank-account",
        icon: "landmark",
        title: "Bank account",
        summary:
          "An account with a bank that lets you hold money and make transactions.",
        detail:
          "The general term for a record held in your name at a bank, into which money can be paid and out of which payments can be made. Everything else on this page is either a type of account, a way of reaching one, or a way of paying from one.",
        points: [
          "Held in your own name at a regulated institution",
          "Money can be paid in and taken out",
          "Comes with a statement or transaction history",
          "Types, fees and conditions vary by bank",
        ],
      },
      {
        id: "current-account",
        icon: "repeat",
        title: "Current account",
        summary: "An account designed for everyday, frequent transactions.",
        detail:
          "A current account is built for money moving in and out regularly — receiving a salary, paying bills, making transfers and card payments. It is the account most people use for daily life rather than for setting money aside.",
        points: [
          "Suited to frequent deposits and withdrawals",
          "Commonly used to receive wages",
          "Usually paired with a debit card",
          "Generally aimed at access rather than returns",
        ],
      },
      {
        id: "savings-account",
        icon: "piggyBank",
        title: "Savings account",
        summary: "An account intended for money you are setting aside.",
        detail:
          "A savings account is meant for money you do not need immediately. Keeping savings separate from spending makes a plan easier to follow. Whether an account pays any return, and on what terms, depends entirely on the bank and the product.",
        points: [
          "Keeps savings separate from everyday spending",
          "May have conditions on withdrawals",
          "Terms and any returns are set by each bank",
          "Compare products before choosing one",
        ],
      },
      {
        id: "debit-card",
        icon: "creditCard",
        title: "Debit card",
        summary: "A card that spends money you already have in your account.",
        detail:
          "A debit card draws directly on your own balance. When you pay, the money leaves your account. You cannot spend more than you hold, which makes it the simpler and lower-risk of the two card types.",
        points: [
          "Spends only what is already in the account",
          "Used at shops, online and at ATMs",
          "No borrowing involved",
          "Can be stopped if lost or stolen",
        ],
      },
      {
        id: "credit-card",
        icon: "coins",
        title: "Credit card",
        summary:
          "A card that lets you pay with borrowed money, repaid later.",
        detail:
          "A credit card is a form of borrowing. The bank pays the merchant and you repay the bank, usually by a set date. If the balance is not cleared in time, cost is added. Approval is never automatic — each bank sets its own conditions.",
        points: [
          "Money is borrowed, not drawn from your balance",
          "Repayment terms and costs are set by the bank",
          "Late or partial repayment increases what you owe",
          "Understand the full cost before applying",
        ],
      },
      {
        id: "mobile-wallet",
        icon: "smartphone",
        title: "Mobile wallet",
        summary:
          "A digital wallet that lets you store, send, and receive money using your mobile phone.",
        detail:
          "A mobile wallet is an account identified by your phone number. Money can be added or withdrawn through an agent — often a nearby shop — and sent to others from the phone. It usually opens with lighter documentation than a full bank account, with lower transaction limits to match.",
        points: [
          "Your phone number works as the account identifier",
          "Cash added and withdrawn through agents",
          "Often lighter documentation to open",
          "Counted within Egypt's national inclusion measure",
        ],
      },
      {
        id: "mobile-banking",
        icon: "laptop",
        title: "Mobile and online banking",
        summary: "Operating your existing bank account from a phone or computer.",
        detail:
          "Mobile and online banking are ways of reaching an account you already hold: checking a balance, transferring money, paying bills, freezing a card. The account is the same one — this is simply a channel that does not require a branch visit.",
        points: [
          "Balances and history available at any hour",
          "Transfers and bill payments without travelling",
          "Card controls and alerts you manage yourself",
          "Use only the bank's official app or website",
        ],
      },
      {
        id: "digital-payments",
        icon: "qrCode",
        title: "Digital payments",
        summary: "Paying without handing over cash.",
        detail:
          "A digital payment moves money from your account to someone else's without physical notes: a card at a shop, a QR code at a stall, an app transfer to a relative, or a bill paid online. Each one leaves a dated record.",
        points: [
          "Card, QR code, app transfer or online checkout",
          "Instant transfers between participating providers",
          "Automatically recorded and dated",
          "Depends on the merchant accepting them",
        ],
      },
    ],
  },
  help: {
    eyebrow: "In practice",
    title: "How can a bank help you?",
    description:
      "Six steps, in the order most people meet them. None of them requires prior financial knowledge.",
    steps: [
      {
        icon: "userCheck",
        title: "Open an account",
        body: "Choose a bank and an account type, provide identification, and complete the bank's checks. Requirements vary between banks — confirm them before you go.",
      },
      {
        icon: "deposit",
        title: "Deposit money",
        body: "Put money in at a branch, an ATM, or through an agent. From that point it is held by a regulated institution rather than kept at home.",
      },
      {
        icon: "send",
        title: "Receive payments",
        body: "Wages, transfers from family, or payments from customers can arrive directly in the account instead of as cash you have to collect in person.",
      },
      {
        icon: "qrCode",
        title: "Make digital payments",
        body: "Pay bills, shops and online purchases by card, app or QR code. Each payment is recorded automatically, with the date and the amount.",
      },
      {
        icon: "piggyBank",
        title: "Save",
        body: "Set money aside in an account intended for it, kept separate from what you spend. Terms differ by product, so compare before committing.",
      },
      {
        icon: "search",
        title: "Explore other services",
        body: "As a customer of a regulated institution, other services become possible to ask about. Whether you qualify for any of them is always the provider's decision.",
      },
    ],
  },
  start: {
    eyebrow: "Getting started",
    title: "What do I need to start?",
    description:
      "The process of opening an account in Egypt generally follows these steps. It is described here in outline only.",
    warning: {
      title: "Requirements vary — check with the bank",
      body: "Requirements can vary between banks and account types. Check the bank's official website or branch for the latest requirements, documents and any fees. Nothing on this page should be treated as the current rules of any particular bank.",
    },
    steps: [
      {
        icon: "search",
        title: "Choose a bank",
        body: "Compare what different banks offer and how convenient each is for you — branch and agent locations, the mobile app, and the published terms.",
      },
      {
        icon: "scale",
        title: "Choose the appropriate account",
        body: "Decide what the account is for: everyday transactions, setting money aside, or a lighter mobile wallet. Ask which types are available to you.",
      },
      {
        icon: "idCard",
        title: "Prepare identification and documents",
        body: "Banks are required to verify identity. Ask the bank exactly which documents it needs before your visit, as this differs by bank and account type.",
      },
      {
        icon: "fileText",
        title: "Submit an application",
        body: "Complete the bank's application, in a branch or through its official digital channel where that is offered.",
      },
      {
        icon: "userCheck",
        title: "Complete verification",
        body: "The bank carries out its own identity and eligibility checks. How long this takes, and whether it is approved, is the bank's decision.",
      },
      {
        icon: "creditCard",
        title: "Receive account and card details",
        body: "Once open, you receive your account details and, where applicable, a card and access to the bank's app. Set a PIN or password only you know.",
      },
    ],
  },
  safety: {
    eyebrow: "Protect yourself",
    title: "Stay safe",
    description:
      "Digital finance brings real risks alongside its benefits. Most fraud does not break into a bank — it persuades a customer to hand something over.",
    neverShareTitle: "Never share these with anyone",
    neverShare: [
      "Passwords",
      "PIN numbers",
      "OTP or verification codes",
      "Any banking credentials",
    ],
    neverShareNote:
      "A real bank will never ask you for your PIN, your password or a one-time code — not by phone, not by message, not by email. Anyone who asks is attempting fraud, however convincing they sound and whoever they claim to be.",
    tipsTitle: "Sensible habits",
    tips: [
      {
        icon: "lock",
        title: "Use official channels only",
        body: "Reach your bank through its official app or by typing its website address yourself. Avoid links sent by message or email, even ones that look correct.",
      },
      {
        icon: "alert",
        title: "Slow down when rushed",
        body: "Urgency is the most common tool in fraud: a threat that an account will be closed, or a prize that expires. Pressure to act immediately is itself the warning sign.",
      },
      {
        icon: "key",
        title: "Protect the device itself",
        body: "Lock your phone, keep the PIN private, and do not let anyone set up banking access on your behalf on a device you do not control.",
      },
      {
        icon: "checkCircle",
        title: "Report problems quickly",
        body: "If you think something is wrong, contact your bank through its official number straight away and ask how to have the card or account frozen.",
      },
    ],
  },
  cta: {
    title: "See how digital finance works",
    description:
      "How a phone becomes a gateway to financial services — and what changes once payments leave cash behind.",
    primary: "Learn about digital finance",
    secondary: "See the Egyptian data",
  },
};

export type BankingDict = typeof en;

const ar: BankingDict = {
  meta: {
    title: "تعرف على خياراتك المصرفية",
    description:
      "الحسابات البنكية وحسابات التوفير والحسابات الجارية وبطاقات الخصم والائتمان والمحافظ الإلكترونية والمدفوعات الرقمية — مشروحة ببساطة، مع ما ينبغي التحقق منه قبل الاختيار.",
  },
  hero: {
    eyebrow: "الأساسيات",
    title: "تعرف على خياراتك المصرفية",
    description:
      "تبدو الخدمات المالية أعقد مما هي عليه. تشرح هذه الصفحة الخيارات الرئيسية بلغة بسيطة، وتوضح كيف يساعدك البنك في حياتك اليومية، وتعرض ما تتضمنه عملية فتح الحساب عمومًا.",
  },
  notice: {
    title: "كيف تستخدم هذه الصفحة",
    body: "ما يلي شروح عامة لأغراض تعليمية وليست توصيات. لا يروّج هذا الموقع لأي بنك، ولا يستطيع أن يخبرك أي منتج يناسبك، ولا يعرف الشروط الحالية لأي جهة. فالرسوم والمزايا والمتطلبات تختلف بين البنوك وتتغير مع الوقت — تأكد دائمًا من التفاصيل لدى البنك نفسه.",
  },
  glossary: {
    eyebrow: "المصطلحات",
    title: "ما هو كل خيار فعليًا",
    description:
      "ثمانية مصطلحات ستقابلها كلما دار الحديث عن الخدمات المالية. اختر واحدًا لتقرأ شرحًا مبسطًا.",
    label: "الخيارات المصرفية",
    items: [
      {
        id: "bank-account",
        icon: "landmark",
        title: "الحساب البنكي",
        summary: "حساب لدى بنك يتيح لك حفظ أموالك وإجراء معاملاتك.",
        detail:
          "المصطلح العام لسجل باسمك لدى بنك، يمكن إيداع الأموال فيه وإجراء المدفوعات منه. وكل ما تبقى في هذه الصفحة إما نوع من الحسابات، أو وسيلة للوصول إليه، أو وسيلة للدفع منه.",
        points: [
          "مفتوح باسمك لدى مؤسسة خاضعة للرقابة",
          "يمكن إيداع الأموال وسحبها",
          "يصاحبه كشف حساب أو سجل معاملات",
          "الأنواع والرسوم والشروط تختلف بين البنوك",
        ],
      },
      {
        id: "current-account",
        icon: "repeat",
        title: "الحساب الجاري",
        summary: "حساب مصمم للمعاملات اليومية المتكررة.",
        detail:
          "الحساب الجاري مُعد لحركة الأموال دخولًا وخروجًا بانتظام — استلام الراتب، وسداد الفواتير، وإجراء التحويلات ومدفوعات البطاقات. وهو الحساب الذي يستخدمه معظم الناس في حياتهم اليومية لا لتجنيب الأموال.",
        points: [
          "مناسب للإيداع والسحب المتكرر",
          "يُستخدم عادةً لاستلام الأجور",
          "يقترن عادةً ببطاقة خصم",
          "يستهدف عمومًا سهولة الوصول لا العائد",
        ],
      },
      {
        id: "savings-account",
        icon: "piggyBank",
        title: "حساب التوفير",
        summary: "حساب مخصص للأموال التي تجنّبها للادخار.",
        detail:
          "حساب التوفير مخصص لأموال لا تحتاجها فورًا. وفصل المدخرات عن الإنفاق يجعل الالتزام بالخطة أسهل. أما ما إذا كان الحساب يمنح عائدًا وبأي شروط، فيعتمد كليًا على البنك والمنتج.",
        points: [
          "يفصل المدخرات عن الإنفاق اليومي",
          "قد توجد شروط على السحب",
          "الشروط وأي عوائد يحددها كل بنك",
          "قارن بين المنتجات قبل الاختيار",
        ],
      },
      {
        id: "debit-card",
        icon: "creditCard",
        title: "بطاقة الخصم",
        summary: "بطاقة تنفق من أموالك الموجودة بالفعل في حسابك.",
        detail:
          "بطاقة الخصم تسحب مباشرة من رصيدك. فعند الدفع تخرج الأموال من حسابك. ولا يمكنك إنفاق أكثر مما تملك، وهو ما يجعلها الأبسط والأقل خطورة بين نوعي البطاقات.",
        points: [
          "تنفق فقط ما هو موجود في الحساب",
          "تُستخدم في المتاجر وعبر الإنترنت وماكينات الصراف",
          "لا تتضمن أي اقتراض",
          "يمكن إيقافها عند الفقد أو السرقة",
        ],
      },
      {
        id: "credit-card",
        icon: "coins",
        title: "بطاقة الائتمان",
        summary: "بطاقة تتيح لك الدفع بأموال مقترضة تسددها لاحقًا.",
        detail:
          "بطاقة الائتمان شكل من أشكال الاقتراض. يدفع البنك للتاجر وتسدد أنت للبنك، عادةً في موعد محدد. وإذا لم يُسدد الرصيد في وقته تُضاف تكلفة. والموافقة ليست تلقائية أبدًا — فكل بنك يضع شروطه.",
        points: [
          "المال مقترض ولا يُخصم من رصيدك",
          "شروط السداد وتكاليفه يحددها البنك",
          "التأخر أو السداد الجزئي يزيد ما عليك",
          "افهم التكلفة الكاملة قبل التقدم بالطلب",
        ],
      },
      {
        id: "mobile-wallet",
        icon: "smartphone",
        title: "المحفظة الإلكترونية",
        summary:
          "محفظة رقمية تتيح لك حفظ الأموال وإرسالها واستقبالها باستخدام هاتفك المحمول.",
        detail:
          "المحفظة الإلكترونية حساب يُعرَّف برقم هاتفك. يمكن إضافة الأموال أو سحبها عبر وكيل — غالبًا متجر قريب — وإرسالها للآخرين من الهاتف. وتُفتح عادةً بمستندات أخف من الحساب البنكي الكامل، مع حدود معاملات أقل بالمقابل.",
        points: [
          "رقم هاتفك يعمل كمعرّف للحساب",
          "إيداع النقد وسحبه عبر الوكلاء",
          "مستندات أخف لفتحها في الغالب",
          "محتسبة ضمن مقياس الشمول المالي الوطني في مصر",
        ],
      },
      {
        id: "mobile-banking",
        icon: "laptop",
        title: "الخدمات المصرفية عبر الهاتف والإنترنت",
        summary: "إدارة حسابك البنكي القائم من هاتف أو حاسوب.",
        detail:
          "الخدمات المصرفية عبر الهاتف والإنترنت وسيلة للوصول إلى حساب تملكه بالفعل: الاطلاع على الرصيد، وتحويل الأموال، وسداد الفواتير، وإيقاف بطاقة. الحساب هو نفسه — وهذه ببساطة قناة لا تتطلب زيارة الفرع.",
        points: [
          "الرصيد والسجل متاحان في أي وقت",
          "تحويلات وسداد فواتير دون تنقل",
          "أدوات تحكم وتنبيهات للبطاقة تديرها بنفسك",
          "استخدم فقط التطبيق أو الموقع الرسمي للبنك",
        ],
      },
      {
        id: "digital-payments",
        icon: "qrCode",
        title: "المدفوعات الرقمية",
        summary: "الدفع دون تسليم نقود.",
        detail:
          "المدفوعات الرقمية تنقل الأموال من حسابك إلى حساب غيرك دون أوراق نقدية: بطاقة في متجر، أو رمز استجابة سريعة عند بائع، أو تحويل عبر تطبيق لقريب، أو فاتورة تُسدد عبر الإنترنت. وكل عملية تترك سجلًا مؤرخًا.",
        points: [
          "بطاقة أو رمز استجابة سريعة أو تحويل عبر تطبيق أو دفع إلكتروني",
          "تحويلات فورية بين الجهات المشاركة",
          "مسجَّلة ومؤرخة تلقائيًا",
          "تتوقف على قبول التاجر لها",
        ],
      },
    ],
  },
  help: {
    eyebrow: "عمليًا",
    title: "كيف يمكن للبنك أن يساعدك؟",
    description:
      "ست خطوات، بالترتيب الذي يقابلها به معظم الناس. ولا تتطلب أي منها معرفة مالية سابقة.",
    steps: [
      {
        icon: "userCheck",
        title: "افتح حسابًا",
        body: "اختر بنكًا ونوع حساب، وقدّم إثبات هويتك، وأكمل إجراءات البنك. المتطلبات تختلف بين البنوك — تأكد منها قبل الذهاب.",
      },
      {
        icon: "deposit",
        title: "أودِع أموالك",
        body: "أودع المال في فرع أو ماكينة صراف أو عبر وكيل. ومن تلك اللحظة تصبح الأموال محفوظة لدى مؤسسة خاضعة للرقابة بدل حفظها في المنزل.",
      },
      {
        icon: "send",
        title: "استقبل المدفوعات",
        body: "الأجور وتحويلات الأسرة ومدفوعات العملاء يمكن أن تصل مباشرة إلى الحساب بدلًا من نقود عليك استلامها شخصيًا.",
      },
      {
        icon: "qrCode",
        title: "ادفع رقميًا",
        body: "سدّد الفواتير ومشتريات المتاجر والإنترنت ببطاقة أو تطبيق أو رمز استجابة سريعة. وكل عملية تُسجَّل تلقائيًا بتاريخها وقيمتها.",
      },
      {
        icon: "piggyBank",
        title: "ادّخر",
        body: "جنّب أموالك في حساب مخصص لذلك، منفصل عمّا تنفقه. الشروط تختلف بين المنتجات، فقارن قبل الالتزام.",
      },
      {
        icon: "search",
        title: "استكشف خدمات أخرى",
        body: "بصفتك عميلًا لدى مؤسسة خاضعة للرقابة، يصبح بإمكانك السؤال عن خدمات أخرى. أما استحقاقك لأي منها فقرار يعود دائمًا لمقدم الخدمة.",
      },
    ],
  },
  start: {
    eyebrow: "البداية",
    title: "ماذا أحتاج لأبدأ؟",
    description:
      "تتبع عملية فتح حساب في مصر عمومًا هذه الخطوات. وهي معروضة هنا في صورة إجمالية فقط.",
    warning: {
      title: "المتطلبات تختلف — تأكد من البنك",
      body: "يمكن أن تختلف المتطلبات بين البنوك وأنواع الحسابات. راجع الموقع الرسمي للبنك أو أحد فروعه للاطلاع على أحدث المتطلبات والمستندات وأي رسوم. ولا ينبغي اعتبار أي شيء في هذه الصفحة قواعد سارية لبنك بعينه.",
    },
    steps: [
      {
        icon: "search",
        title: "اختر بنكًا",
        body: "قارن ما تقدمه البنوك المختلفة ومدى ملاءمة كل منها لك — مواقع الفروع والوكلاء، وتطبيق الهاتف، والشروط المعلنة.",
      },
      {
        icon: "scale",
        title: "اختر الحساب المناسب",
        body: "حدد الغرض من الحساب: معاملات يومية، أو تجنيب أموال، أو محفظة إلكترونية أبسط. واسأل عن الأنواع المتاحة لك.",
      },
      {
        icon: "idCard",
        title: "جهّز إثبات الهوية والمستندات",
        body: "البنوك ملزمة بالتحقق من الهوية. اسأل البنك تحديدًا عن المستندات المطلوبة قبل زيارتك، فهي تختلف بحسب البنك ونوع الحساب.",
      },
      {
        icon: "fileText",
        title: "قدّم الطلب",
        body: "استوفِ طلب البنك، في أحد الفروع أو عبر قناته الرقمية الرسمية حيثما كانت متاحة.",
      },
      {
        icon: "userCheck",
        title: "أكمل إجراءات التحقق",
        body: "يجري البنك فحوصه الخاصة للهوية والاستحقاق. ومدة ذلك، وقبول الطلب من عدمه، قرار يعود للبنك.",
      },
      {
        icon: "creditCard",
        title: "استلم بيانات الحساب والبطاقة",
        body: "بعد الفتح تستلم بيانات حسابك، وبطاقة عند الاقتضاء، وصلاحية استخدام تطبيق البنك. واختر رقمًا سريًا أو كلمة مرور لا يعرفها سواك.",
      },
    ],
  },
  safety: {
    eyebrow: "احمِ نفسك",
    title: "ابقَ آمنًا",
    description:
      "يحمل التمويل الرقمي مخاطر حقيقية إلى جانب فوائده. ومعظم عمليات الاحتيال لا تخترق بنكًا — بل تقنع عميلًا بتسليم شيء ما.",
    neverShareTitle: "لا تشارك هذه المعلومات مع أي شخص",
    neverShare: [
      "كلمات المرور",
      "الأرقام السرية",
      "رموز التحقق لمرة واحدة",
      "أي بيانات دخول مصرفية",
    ],
    neverShareNote:
      "لن يطلب منك أي بنك حقيقي رقمك السري أو كلمة مرورك أو رمز تحقق — لا عبر الهاتف، ولا عبر الرسائل، ولا عبر البريد الإلكتروني. وكل من يطلب ذلك يحاول الاحتيال عليك، مهما بدا مقنعًا ومهما ادّعى أنه يمثل جهة ما.",
    tipsTitle: "عادات سليمة",
    tips: [
      {
        icon: "lock",
        title: "استخدم القنوات الرسمية فقط",
        body: "تواصل مع بنكك عبر تطبيقه الرسمي أو بكتابة عنوان موقعه بنفسك. وتجنب الروابط المرسلة في الرسائل أو البريد، حتى تلك التي تبدو صحيحة.",
      },
      {
        icon: "alert",
        title: "تمهّل عند الاستعجال",
        body: "الاستعجال أكثر أدوات الاحتيال شيوعًا: تهديد بإغلاق الحساب، أو جائزة على وشك الانتهاء. والضغط للتصرف فورًا هو في حد ذاته علامة تحذير.",
      },
      {
        icon: "key",
        title: "احمِ الجهاز نفسه",
        body: "أقفل هاتفك، واحتفظ برقمك السري لنفسك، ولا تدع أحدًا يُفعّل خدمات مصرفية نيابة عنك على جهاز لا تتحكم فيه.",
      },
      {
        icon: "checkCircle",
        title: "أبلغ فورًا عند وجود مشكلة",
        body: "إذا شككت في وجود خطأ، اتصل ببنكك عبر رقمه الرسمي فورًا واسأل عن كيفية إيقاف البطاقة أو الحساب.",
      },
    ],
  },
  cta: {
    title: "تعرّف على كيفية عمل التمويل الرقمي",
    description:
      "كيف يصبح الهاتف بوابة إلى الخدمات المالية — وما الذي يتغير حين تتجاوز المدفوعات مرحلة النقد.",
    primary: "تعرف على التمويل الرقمي",
    secondary: "اطّلع على بيانات مصر",
  },
};

export const banking: Record<Locale, BankingDict> = { en, ar };
