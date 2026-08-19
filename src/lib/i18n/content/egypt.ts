import type { Locale } from "../config";

const en = {
  meta: {
    title: "Financial Inclusion in Egypt",
    description:
      "Egypt's financial inclusion data: account ownership across five World Bank survey waves, the Central Bank's own measure, who is left out, and the gap between holding an account and using one.",
  },
  hero: {
    eyebrow: "Egypt in focus",
    title: "Financial inclusion in Egypt",
    description:
      "Egypt has moved faster than almost any comparable economy over the past decade. It also retains one of the largest concentrations of unbanked adults in the world. Both statements come from the same data.",
  },
  headline: {
    eyebrow: "The headline figures",
    title: "Where the country stands today",
    description:
      "Each figure is labelled with the institution that produced it, because the two principal measures of Egyptian financial inclusion are built differently.",
    note: "The two headline rates differ because the Central Bank counts any active transactional account in the system, while the World Bank asks individuals directly.",
    noteLink: "The difference is explained here",
  },
  trend: {
    eyebrow: "Fourteen years",
    title: "Account ownership over time",
    description:
      "Five survey waves of the World Bank Global Findex on a consistent definition, alongside India for scale. The dip between 2017 and 2021 is present in the published data and is discussed below.",
    caption:
      "Adults aged 15+ with an account at a financial institution or mobile money provider.",
    periods: [
      {
        title: "2011 – 2017: from a very low base",
        body: "Egypt began the period with fewer than one adult in ten holding an account, at 9.7%. By 2017 that had risen to 32.8%, driven largely by the expansion of formal banking and the first wave of mobile wallet registrations.",
        accent: false,
      },
      {
        title: "2021: a recorded decline",
        body: "The 2021 wave records 27.4%, below the 2017 reading. Survey measures carry sampling variation, and the 2021 fieldwork was conducted under pandemic conditions across all 141 economies. The figure is reproduced as published.",
        accent: false,
      },
      {
        title: "2021 – 2024: the fastest stretch",
        body: "Account ownership reached 43.1%, a rise of 15.7 percentage points in three years. This follows the launch of Egypt's Instant Payment Network in 2022 and a sustained push on mobile wallets.",
        accent: true,
      },
    ],
  },
  funnel: {
    eyebrow: "The central finding",
    title: "Egypt has the phones. It does not yet have the habit.",
    description:
      "Read downwards, this is the most important pattern in the Egyptian data. Device ownership is high. Each subsequent step — an account, a digitally enabled account, an actual digital payment — loses a large share of the population.",
    body1Pre: "Egypt is not held back by handsets. At",
    body1Mid: "mobile phone ownership and",
    body1Post:
      "smartphone ownership, the country is ahead of India on both counts.",
    body2:
      "The attrition happens after the device. Roughly half of adults with a phone have no account. Of those who do, many hold one that is not digitally enabled. And of those, many still do not use it to pay for anything.",
    body3:
      "This makes Egypt's situation more tractable than a low headline number suggests. The expensive layer — putting a connected device in people's hands — is largely built.",
    compareNote: "Compare the same funnel for India on the",
    compareLink: "Egypt vs India",
    compareNoteEnd:
      "page, where lower device ownership coexists with far higher account ownership.",
  },
  gaps: {
    eyebrow: "Distribution",
    title: "Who is being left out",
    description:
      "A national average conceals which groups sit above and below it. On every dimension the World Bank measures, the pattern is consistent.",
  },
  usage: {
    eyebrow: "Behaviour",
    title: "How Egyptians actually transact",
    description:
      "Formal finance is used far less than informal alternatives, and cash remains the default for routine obligations.",
    body: "The borrowing figures are the sharpest signal. A majority of Egyptian adults — 56.1% — borrowed money during the year. Only 10.4% borrowed from a formal institution, while 38.4% borrowed from family or friends. Demand for credit is not missing; formal supply that fits people's circumstances is.",
  },
  barriers: {
    eyebrow: "Stated reasons",
    title: "Why people say they have no account",
    description:
      "Asked directly, adults in Egypt without an account give reasons that are overwhelmingly economic rather than technical.",
    caption:
      "Share of adults without an account citing each reason. Respondents could give more than one.",
    body1:
      "At 90.1%, insufficient funds dominates every other stated reason. This deserves care: it partly reflects genuine income constraints, and partly a belief that accounts are for people with more money — a perception that product design and financial education can both address.",
    body2:
      "It also means removing fees and minimum balances is necessary but not sufficient. If people do not believe an account is for them, removing its price does not by itself change the decision.",
  },
  cta: {
    title: "The national average hides two different countries",
    description:
      "Rural and urban Egypt face barriers that differ in kind, not only in degree — and each responds to different solutions.",
    primary: "Rural vs Urban Egypt",
    secondary: "See all eight challenges",
  },
};

export type EgyptDict = typeof en;

const ar: EgyptDict = {
  meta: {
    title: "الشمول المالي في مصر",
    description:
      "بيانات الشمول المالي في مصر: امتلاك الحسابات عبر خمس موجات لمسح البنك الدولي، ومقياس البنك المركزي، ومن يبقى خارج النظام، والفجوة بين امتلاك الحساب واستخدامه.",
  },
  hero: {
    eyebrow: "مصر عن قرب",
    title: "الشمول المالي في مصر",
    description:
      "تحركت مصر خلال العقد الماضي أسرع من أغلب الاقتصادات المماثلة. وفي الوقت نفسه ما زالت تضم واحدة من أكبر تجمعات البالغين خارج النظام المصرفي في العالم. وكلا القولين مستمد من البيانات نفسها.",
  },
  headline: {
    eyebrow: "الأرقام الرئيسية",
    title: "أين تقف البلاد اليوم",
    description:
      "كل رقم موضَّح بالجهة التي أصدرته، لأن المقياسين الرئيسيين للشمول المالي في مصر مبنيان بطريقتين مختلفتين.",
    note: "يختلف المعدلان لأن البنك المركزي يحصي أي حساب معاملات نشط في النظام، بينما يسأل البنك الدولي الأفراد مباشرة.",
    noteLink: "الفرق موضَّح هنا",
  },
  trend: {
    eyebrow: "أربعة عشر عامًا",
    title: "امتلاك الحسابات عبر الزمن",
    description:
      "خمس موجات من المؤشر العالمي للشمول المالي وفق تعريف ثابت، إلى جانب الهند للمقارنة. والانخفاض بين 2017 و2021 موجود في البيانات المنشورة ويُناقَش أدناه.",
    caption:
      "البالغون من عمر 15 عامًا فأكثر ممن يملكون حسابًا لدى مؤسسة مالية أو مقدم خدمة محفظة إلكترونية.",
    periods: [
      {
        title: "2011 – 2017: من قاعدة منخفضة جدًا",
        body: "بدأت مصر الفترة بأقل من بالغ واحد من كل عشرة يملك حسابًا، عند 9.7%. وبحلول 2017 ارتفعت النسبة إلى 32.8%، مدفوعة أساسًا بتوسع الخدمات المصرفية الرسمية والموجة الأولى من تسجيل المحافظ الإلكترونية.",
        accent: false,
      },
      {
        title: "2021: انخفاض مسجَّل",
        body: "تسجل موجة 2021 نسبة 27.4%، أي أقل من قراءة 2017. ومقاييس المسح تحمل تباينًا في العينة، كما أُجري العمل الميداني لعام 2021 في ظروف الجائحة عبر الاقتصادات الـ141 جميعها. والرقم منقول كما نُشر.",
        accent: false,
      },
      {
        title: "2021 – 2024: أسرع مرحلة",
        body: "بلغ امتلاك الحسابات 43.1%، بارتفاع قدره 15.7 نقطة مئوية في ثلاث سنوات. ويأتي ذلك بعد إطلاق شبكة المدفوعات اللحظية في مصر عام 2022 ودفعة متواصلة نحو المحافظ الإلكترونية.",
        accent: true,
      },
    ],
  },
  funnel: {
    eyebrow: "النتيجة المحورية",
    title: "مصر تملك الهواتف، لكنها لم تكتسب العادة بعد.",
    description:
      "بقراءة الأرقام من أعلى لأسفل، يظهر أهم نمط في البيانات المصرية. امتلاك الأجهزة مرتفع. وكل خطوة تالية — حساب، ثم حساب مفعَّل رقميًا، ثم دفعة رقمية فعلية — تفقد شريحة كبيرة من السكان.",
    body1Pre: "ليست الأجهزة ما يعيق مصر. فعند",
    body1Mid: "لامتلاك الهاتف المحمول و",
    body1Post: "لامتلاك الهاتف الذكي، تتقدم البلاد على الهند في المؤشرين.",
    body2:
      "التسرب يحدث بعد الجهاز. فنحو نصف البالغين ممن يملكون هاتفًا لا يملكون حسابًا. ومن يملكونه، كثير منهم لديه حساب غير مفعَّل رقميًا. ومن هؤلاء، كثيرون لا يستخدمونه للدفع أصلًا.",
    body3:
      "وهذا يجعل وضع مصر أيسر مما يوحي به الرقم الرئيسي المنخفض. فالطبقة الأعلى كلفة — وضع جهاز متصل في يد الناس — مبنية إلى حد كبير.",
    compareNote: "قارن القمع نفسه بالنسبة للهند في صفحة",
    compareLink: "مصر والهند",
    compareNoteEnd: "حيث يتعايش امتلاك أقل للأجهزة مع امتلاك أعلى بكثير للحسابات.",
  },
  gaps: {
    eyebrow: "التوزيع",
    title: "من يبقى خارج النظام",
    description:
      "المتوسط الوطني يخفي أي الفئات تقع فوقه وأيها تحته. وعلى كل بُعد يقيسه البنك الدولي، يظل النمط متسقًا.",
  },
  usage: {
    eyebrow: "السلوك",
    title: "كيف يتعامل المصريون ماليًا بالفعل",
    description:
      "التمويل الرسمي أقل استخدامًا بكثير من البدائل غير الرسمية، ويبقى النقد هو الأصل في الالتزامات المعتادة.",
    body: "أرقام الاقتراض هي أوضح إشارة. فقد اقترض غالبية البالغين في مصر — 56.1% — خلال العام. لكن 10.4% فقط اقترضوا من مؤسسة رسمية، بينما اقترض 38.4% من الأهل أو الأصدقاء. فالطلب على الائتمان ليس غائبًا؛ الغائب هو عرض رسمي يناسب ظروف الناس.",
  },
  barriers: {
    eyebrow: "الأسباب المعلنة",
    title: "لماذا يقول الناس إنهم لا يملكون حسابًا",
    description:
      "عند سؤالهم مباشرة، يذكر البالغون في مصر ممن لا يملكون حسابًا أسبابًا اقتصادية في الأغلب لا تقنية.",
    caption:
      "نسبة البالغين بلا حساب ممن ذكروا كل سبب. وكان بإمكان المستجيبين ذكر أكثر من سبب.",
    body1:
      "بنسبة 90.1%، يتصدر «عدم كفاية المال» كل الأسباب الأخرى. ويستحق ذلك تدقيقًا: فهو يعكس جزئيًا قيودًا حقيقية على الدخل، وجزئيًا اعتقادًا بأن الحسابات لمن يملكون مالًا أكثر — وهو تصور يمكن معالجته بتصميم المنتجات والتثقيف المالي معًا.",
    body2:
      "كما يعني ذلك أن إلغاء الرسوم والحد الأدنى للرصيد ضروري لكنه غير كافٍ. فإذا لم يعتقد الناس أن الحساب موجَّه إليهم، فإن خفض سعره وحده لا يغيّر القرار.",
  },
  cta: {
    title: "المتوسط الوطني يخفي بلدين مختلفين",
    description:
      "يواجه ريف مصر وحضرها عقبات تختلف في نوعها لا في درجتها فحسب — ولكل منهما حلول مختلفة.",
    primary: "الريف والحضر في مصر",
    secondary: "اطّلع على التحديات الثمانية",
  },
};

export const egypt: Record<Locale, EgyptDict> = { en, ar };
