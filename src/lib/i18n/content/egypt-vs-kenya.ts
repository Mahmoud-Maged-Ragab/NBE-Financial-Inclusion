import type { Locale } from "../config";

const en = {
  meta: {
    title: "Egypt vs Kenya",
    description:
      "A like-for-like comparison of financial inclusion in Egypt and Kenya across ten indicators, using World Bank Global Findex data from the same survey round.",
  },
  hero: {
    eyebrow: "Outlook",
    title: "Egypt and Kenya compared",
    description:
      "Both countries entered the 2010s with large rural populations, extensive informal economies and low account ownership. Ten indicators from the same World Bank survey round show where they now stand.",
    caption:
      "Adults aged 15+ holding an account, World Bank Global Findex, 2024 survey round.",
  },
  thesis: {
    eyebrow: "The finding",
    quote:
      "Both countries deal with the same basic problems — rural populations that are hard and expensive to reach, patchy financial literacy, big informal economies. But in Kenya, account ownership comes down almost entirely to one thing: a mobile money network that reaches places no bank branch ever did.",
    body: "Every element of that statement is supported by the indicators below. Kenya's account ownership stands at 90.1% against Egypt's 43.1%, its rural rate trails its urban rate by only 6.3 points, and its gender gap has narrowed to some of the lowest levels recorded anywhere. Both countries retain real gaps of their own — Kenya's concentrated in financial health and among excluded rural youth, Egypt's in the distance between owning an account and using one.",
  },
  trend: {
    eyebrow: "Fourteen years",
    title: "Two different trajectories",
    description:
      "Kenya entered the decade already far ahead — 42.3% account ownership in 2011 against Egypt's 9.7% — and reached 90.1% by 2024. Egypt reached 43.1% in the same year. The gap has been present throughout, and has widened rather than closed.",
    caption:
      "Adults aged 15+ with an account at a financial institution or mobile money provider.",
  },
  comparison: {
    eyebrow: "Ten indicators",
    title: "Side by side",
    description:
      "Nine of these ten figures come from the same World Bank Global Findex survey round, so the comparison is like for like. The one exception is Kenya's smartphone number, which comes from its telecoms regulator instead — flagged below.",
    closestGap: {
      title: "Where the gap is narrowest",
      body: "Egypt is close to Kenya on mobile phone ownership, 84.6% against 92.7%, and on paying with a card or phone, 18.5% against 28.3%. On devices, and on digital payment behaviour specifically, the two countries are not that far apart.",
    },
    widestGap: {
      title: "Where the gap is widest",
      body: "Kenya is furthest ahead on mobile money account ownership — 87.5% against Egypt's 15.6% — and on overall account ownership, saving and borrowing. The distance between the two countries sits almost entirely in accounts, not in technology.",
    },
  },
  reversal: {
    eyebrow: "The clearest signal",
    title: "Where the gap actually opens up",
    description:
      "This is the most instructive comparison on the page, and it points at what the constraint in Egypt is not.",
    body1:
      "If device access were the binding constraint on digital financial inclusion, Egypt and Kenya would look similar throughout this chart. They do not. Kenya owns phones and smartphones at rates reasonably close to Egypt's, then reaches an account ownership rate more than double Egypt's.",
    body2:
      "What separates them is not hardware — and in Kenya's case it was not a state-run identity or payment scheme either. It was Safaricom's M-PESA network, launched in 2007, which turned a registered phone number into an account and a corner-shop agent into a branch.",
    body3:
      "For Egypt this is a genuinely encouraging diagnosis. The expensive, slow layer — putting a connected device in people's hands — is already in place.",
    chartTitle: "Devices against accounts",
    rows: {
      phone: "Own a mobile phone",
      smartphone: "Main phone is a smartphone",
      account: "Have an account",
      accountNote:
        "This is the row where the gap opens up sharply — and mobile money accounts for nearly all of it.",
      pay: "Pay with a card or phone",
    },
  },
  mechanism: {
    eyebrow: "Mechanism",
    title: "What Kenya actually did",
    description:
      "Kenya's account-ownership story usually comes down to three things that reinforced each other — and unlike most national success stories in this space, none of them started life as a government scheme. Kenya's system grew out of a private telecom network instead.",
    items: [
      {
        icon: "smartphone",
        title: "A phone number became an account",
        body: "Safaricom's M-PESA, launched in 2007, let a registered SIM stand in for a bank account with no branch visit required. By 2024, 87.5% of Kenyan adults held a mobile money account, against 15.6% of Egyptians — and overall account ownership reached 90.1%.",
        source: "findexApi",
      },
      {
        icon: "fingerprint",
        title: "A national ID that already existed",
        body: "Kenya has required a national ID to register a SIM card since long before mobile money existed. That pre-existing identity layer is what let Safaricom verify a new M-PESA customer at a kiosk in minutes, without building a new identification system first.",
        source: "caKenya",
      },
      {
        icon: "repeat",
        title: "An agent network deeper than any branch network",
        body: "M-PESA now runs on more than 160,000 agents and 2.4 million registered merchants. In the year to March 2025 it carried 37.2 billion transactions worth KES 38.3 trillion — a private payment rail reaching far past where a bank branch ever could.",
        source: "safaricomMpesa",
      },
      {
        icon: "users",
        title: "A gender gap that closed alongside it",
        body: "On Kenya's own household survey, the gap between men's and women's financial inclusion has narrowed to 1.6 points (85.7% against 84.1%) — among the narrowest recorded anywhere, and a direct consequence of an account that needs only a registered phone number.",
        source: "cbkFinAccess2024",
      },
    ],
    note: {
      label: "The sequence matters as much as any single component.",
      body: "A private telecom built a payment rail for person-to-person transfers first, on top of an identity layer and an agent network that already existed for other reasons. Savings products, merchant payments and interoperability with banks were connected to it afterwards, in layers, over nearly two decades rather than as one coordinated push.",
    },
  },
  caveats: {
    eyebrow: "Read with care",
    title: "Where the comparison does not transfer",
    description:
      "Kenya is a useful reference, not a template. Four differences bear directly on how far its approach could be replicated.",
    items: [
      {
        t: "Scale cuts the other way this time",
        b: "Kenya's population is roughly half of Egypt's, not several times larger. Its network was built and financed by a single private company across a smaller base — a different starting point from a state-led scheme, and arguably a more directly relevant one for Egypt to weigh.",
      },
      {
        t: "Access and usage are unusually close together",
        b: "Kenya does not show a wide account-inactivity problem: its digitally enabled account rate (89.4%) sits right beside its account ownership rate (90.1%). What Kenya's own household survey flags instead is financial health — only 18.3% of Kenyans are classed as financially healthy despite near-universal access.",
      },
      {
        t: "Egypt starts from a different structure",
        b: "Egypt's inclusion measure already counts mobile wallets and prepaid cards, and its Central Bank reports 79% inclusion on that basis. The two countries are not simply at different points on one path.",
      },
      {
        t: "Kenya still has real gaps",
        b: "Financial exclusion has fallen to 9.9% of Kenyan adults, but it is concentrated: 45.6% of everyone still excluded is a rural young adult aged 18 to 25. A near-universal average can still leave a specific group behind.",
      },
    ],
  },
  cta: {
    title: "What could realistically change by 2030",
    description:
      "Not science fiction — the specific opportunities Egypt's existing infrastructure and strategy make plausible over the next decade.",
    primary: "The future of financial inclusion",
    secondary: "Review every source",
  },
};

export type EgyptVsKenyaDict = typeof en;

const ar: EgyptVsKenyaDict = {
  meta: {
    title: "مصر وكينيا",
    description:
      "مقارنة متكافئة للشمول المالي بين مصر وكينيا عبر عشرة مؤشرات، باستخدام بيانات المؤشر العالمي للشمول المالي من جولة المسح نفسها.",
  },
  hero: {
    eyebrow: "نظرة مستقبلية",
    title: "مقارنة بين مصر وكينيا",
    description:
      "دخل البلدان عقد 2010 بتجمعات ريفية كبيرة، واقتصادات غير رسمية واسعة، وامتلاك منخفض للحسابات. وعشرة مؤشرات من جولة المسح نفسها للبنك الدولي تبيّن أين يقفان اليوم.",
    caption:
      "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا، المؤشر العالمي للشمول المالي، جولة مسح 2024.",
  },
  thesis: {
    eyebrow: "الخلاصة",
    quote:
      "يواجه البلدان المشكلات الأساسية نفسها — سكان ريفيون يصعب الوصول إليهم وتكلف خدمتهم كثيرًا، وثقافة مالية متفاوتة، واقتصادات غير رسمية كبيرة. لكن في كينيا، يعود امتلاك الحسابات في معظمه إلى شيء واحد: شبكة محفظة هاتف محمول وصلت إلى أماكن لم يصلها أي فرع بنكي.",
    body: "كل عنصر في هذه العبارة تدعمه المؤشرات أدناه. فامتلاك الحسابات في كينيا يبلغ 90.1% مقابل 43.1% في مصر، ومعدلها الريفي لا يقل عن الحضري سوى بفارق 6.3 نقطة، وفجوتها بين الجنسين ضاقت إلى من بين أضيق المستويات المسجّلة في أي مكان. ويحتفظ البلدان بفجوات حقيقية خاصة بهما — فجوة كينيا تتركز في الصحة المالية وبين الشباب الريفي المستبعد، وفجوة مصر في المسافة بين امتلاك الحساب واستخدامه.",
  },
  trend: {
    eyebrow: "أربعة عشر عامًا",
    title: "مساران مختلفان",
    description:
      "دخلت كينيا العقد وهي متقدمة بالفعل بفارق كبير — بامتلاك حسابات بنسبة 42.3% في 2011 مقابل 9.7% في مصر — وبلغت 90.1% بحلول 2024. أما مصر فبلغت 43.1% في العام نفسه. والفجوة قائمة طوال الفترة، وقد اتسعت بدل أن تضيق.",
    caption:
      "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا لدى مؤسسة مالية أو مقدم خدمة محفظة إلكترونية.",
  },
  comparison: {
    eyebrow: "عشرة مؤشرات",
    title: "جنبًا إلى جنب",
    description:
      "تسعة من هذه المؤشرات العشرة مأخوذة من جولة المسح نفسها للمؤشر العالمي للشمول المالي التابع للبنك الدولي، فالمقارنة متكافئة. الاستثناء الوحيد هو رقم امتلاك الهاتف الذكي في كينيا، الذي مصدره هيئة تنظيم الاتصالات الكينية بدلًا من ذلك — وموضَّح بذلك أدناه.",
    closestGap: {
      title: "أين تضيق الفجوة أكثر",
      body: "تقترب مصر من كينيا في امتلاك الهاتف المحمول، 84.6% مقابل 92.7%، وفي الدفع ببطاقة أو هاتف، 18.5% مقابل 28.3%. ففي الأجهزة، وفي سلوك الدفع الرقمي تحديدًا، لا يبتعد البلدان كثيرًا عن بعضهما.",
    },
    widestGap: {
      title: "أين تتسع الفجوة أكثر",
      body: "تتقدم كينيا أكثر ما تتقدم في امتلاك حساب محفظة الهاتف المحمول — 87.5% مقابل 15.6% في مصر — وفي امتلاك الحسابات إجمالًا والادخار والاقتراض. والمسافة بين البلدين تتركز كلها تقريبًا في الحسابات، لا في التكنولوجيا.",
    },
  },
  reversal: {
    eyebrow: "الإشارة الأوضح",
    title: "أين تتسع الفجوة فعليًا",
    description:
      "هذه أكثر مقارنة مفيدة في هذه الصفحة، وهي تشير إلى ما ليس هو القيد في مصر.",
    body1:
      "لو كان الوصول إلى الأجهزة هو القيد الحاسم على الشمول المالي الرقمي، لتشابهت مصر وكينيا طوال هذا الرسم البياني. وهما ليسا كذلك. فكينيا تمتلك الهواتف والهواتف الذكية بمعدلات قريبة نسبيًا من مصر، ثم تبلغ معدل امتلاك حسابات يفوق ضعف معدل مصر.",
    body2:
      "ما يفصل بينهما ليس الأجهزة — وفي حالة كينيا لم يكن الأمر برنامج هوية أو مدفوعات حكومي أيضًا. بل كانت شبكة إم-بيسا التابعة لسفاريكوم، التي أُطلقت عام 2007، والتي حوّلت رقم هاتف مسجّلًا إلى حساب، ووكيلًا في متجر صغير إلى فرع.",
    body3:
      "وبالنسبة لمصر يعد هذا تشخيصًا مشجعًا حقًا. فالطبقة الأعلى كلفة والأبطأ بناءً — وضع جهاز متصل في يد الناس — موجودة بالفعل.",
    chartTitle: "الأجهزة مقابل الحسابات",
    rows: {
      phone: "امتلاك هاتف محمول",
      smartphone: "الهاتف الأساسي هاتف ذكي",
      account: "امتلاك حساب",
      accountNote:
        "هذا هو الصف الذي تتسع فيه الفجوة بشدة — ومحفظة الهاتف المحمول تفسر معظمها تقريبًا.",
      pay: "الدفع ببطاقة أو هاتف",
    },
  },
  mechanism: {
    eyebrow: "الآلية",
    title: "ما الذي فعلته كينيا بالضبط",
    description:
      "تعود قصة امتلاك الحسابات في كينيا عادةً إلى ثلاثة عناصر عزّز كل منها الآخر — وخلافًا لمعظم قصص النجاح الوطنية في هذا المجال، لم يبدأ أي منها كمخطط حكومي. بل نشأ نظام كينيا من شبكة اتصالات خاصة بدلًا من ذلك.",
    items: [
      {
        icon: "smartphone",
        title: "رقم هاتف تحوّل إلى حساب",
        body: "أتاحت خدمة إم-بيسا التابعة لسفاريكوم، التي أُطلقت عام 2007، لشريحة هاتف مسجّلة أن تحل محل حساب بنكي دون الحاجة لزيارة فرع. وبحلول 2024، امتلك 87.5% من البالغين في كينيا حساب محفظة هاتف محمول، مقابل 15.6% في مصر — وبلغ امتلاك الحسابات إجمالًا 90.1%.",
        source: "findexApi",
      },
      {
        icon: "fingerprint",
        title: "هوية وطنية كانت موجودة بالفعل",
        body: "تشترط كينيا بطاقة هوية وطنية لتسجيل شريحة الهاتف منذ ما قبل ظهور محفظة الهاتف المحمول بكثير. وهذه الطبقة الهوياتية القائمة سلفًا هي ما سمح لسفاريكوم بالتحقق من عميل إم-بيسا الجديد في كشك صغير خلال دقائق، دون بناء نظام تعريف جديد أولًا.",
        source: "caKenya",
      },
      {
        icon: "repeat",
        title: "شبكة وكلاء أعمق من أي شبكة فروع",
        body: "تعمل إم-بيسا الآن عبر أكثر من 160 ألف وكيل و2.4 مليون تاجر مسجّل. وفي السنة المنتهية في مارس 2025 نقلت 37.2 مليار معاملة بقيمة 38.3 تريليون شلن كيني — قناة مدفوعات خاصة تصل إلى ما هو أبعد بكثير مما يصله أي فرع بنكي.",
        source: "safaricomMpesa",
      },
      {
        icon: "users",
        title: "فجوة بين الجنسين ضاقت معها",
        body: "وفق مسح الأسر الكيني الخاص، ضاقت الفجوة بين شمول الرجال والنساء ماليًا إلى 1.6 نقطة (85.7% مقابل 84.1%) — من بين أضيق الفجوات المسجّلة في أي مكان، وهي نتيجة مباشرة لحساب لا يحتاج سوى رقم هاتف مسجّل.",
        source: "cbkFinAccess2024",
      },
    ],
    note: {
      label: "الترتيب يهم بقدر أهمية أي مكوّن منفرد.",
      body: "بنت شركة اتصالات خاصة قناة مدفوعات للتحويلات بين الأفراد أولًا، فوق طبقة هوية وشبكة وكلاء كانتا موجودتين أصلًا لأغراض أخرى. ثم اتصلت بها لاحقًا منتجات الادخار والمدفوعات التجارية والتشغيل البيني مع البنوك، في طبقات متعاقبة على مدى ما يقارب عقدين، لا كدفعة واحدة منسقة.",
    },
  },
  caveats: {
    eyebrow: "اقرأ بتمعّن",
    title: "أين لا تنتقل المقارنة",
    description:
      "كينيا مرجع مفيد لا قالب جاهز. وأربعة فوارق تؤثر مباشرة في مدى إمكانية تكرار نهجها.",
    items: [
      {
        t: "الحجم يعمل هذه المرة في الاتجاه المعاكس",
        b: "عدد سكان كينيا يقارب نصف عدد سكان مصر، لا أضعافه. وقد بُنيت شبكتها ومُوِّلت من شركة خاصة واحدة عبر قاعدة أصغر — نقطة انطلاق مختلفة عن مخطط تقوده الدولة، وربما أوثق صلة بما يمكن لمصر أن تزنه.",
      },
      {
        t: "الوصول والاستخدام قريبان من بعضهما بشكل لافت",
        b: "لا تُظهر كينيا مشكلة خمول واسعة في الحسابات: فمعدل الحسابات المفعَّلة رقميًا لديها (89.4%) قريب جدًا من معدل امتلاك الحسابات (90.1%). أما ما يشير إليه مسح الأسر الكيني الخاص فهو الصحة المالية — إذ لا يُصنَّف سوى 18.3% من الكينيين على أنهم في وضع مالي صحي رغم شمول شبه شامل.",
      },
      {
        t: "مصر تنطلق من بنية مختلفة",
        b: "مقياس الشمول في مصر يحتسب بالفعل المحافظ الإلكترونية والبطاقات مسبقة الدفع، ويفيد بنكها المركزي بنسبة شمول 79% على هذا الأساس. فالبلدان ليسا ببساطة عند نقطتين مختلفتين على مسار واحد.",
      },
      {
        t: "ما زالت لدى كينيا فجوات حقيقية",
        b: "انخفض الاستبعاد المالي إلى 9.9% من البالغين في كينيا، لكنه متركز: فـ45.6% من كل المستبعدين هم من الشباب الريفي بين 18 و25 عامًا. فالمتوسط شبه الشامل قد يترك فئة بعينها خلفه.",
      },
    ],
  },
  cta: {
    title: "ما الذي يمكن أن يتغير واقعيًا بحلول 2030",
    description:
      "ليس خيالًا علميًا — بل الفرص المحددة التي تجعلها البنية التحتية القائمة في مصر واستراتيجيتها معقولة خلال العقد المقبل.",
    primary: "مستقبل الشمول المالي",
    secondary: "اطّلع على جميع المصادر",
  },
};

export const egyptVsKenya: Record<Locale, EgyptVsKenyaDict> = { en, ar };
