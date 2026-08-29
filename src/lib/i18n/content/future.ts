import type { Locale } from "../config";

const en = {
  meta: {
    title: "Future of Financial Inclusion",
    description:
      "A realistic view of financial inclusion in Egypt towards 2030 — the technologies that plausibly matter, what the national strategy commits to, and what would have to be true.",
  },
  hero: {
    eyebrow: "Outlook",
    title: "The future of financial inclusion in Egypt",
    description:
      "What follows is deliberately unspectacular. It's about what Egypt's existing infrastructure, published strategy and current numbers make plausible over the next several years — not some big technological leap, but the completion of one that's already underway.",
  },
  start: {
    eyebrow: "The starting position",
    title: "The hard part is mostly built",
    description:
      "Egypt's remaining task is different in kind from the one it faced in 2011, and considerably less expensive.",
    body1:
      "In 2011, 9.7% of Egyptian adults held an account and the country lacked both the device base and the payment rails to change that quickly. By 2024 account ownership had reached 43.1%, phone ownership 84.6%, and an instant payment network had been running for two years.",
    body2:
      "What's left is a conversion problem: turning products people already have into things they actually use every day. That comes down to whether merchants accept digital payments, whether wages and government payments land in an account by default, and whether people trust the system enough to keep their money in it. None of that needs some technology that doesn't exist yet.",
    body3:
      "This is why the Egypt–Kenya comparison is more encouraging than the headline gap suggests. Kenya reached 90.1% account ownership with phone ownership in much the same range as Egypt's — the constraint was never the hardware.",
    strategy: {
      title: "What the national strategy commits to",
      intro:
        "The Central Bank of Egypt has formulated a second National Financial Inclusion Strategy covering 2026 to 2030, following the first which ran from 2022 to 2025. Its stated priorities include:",
      items: [
        "Expanding digital financial services",
        "Supporting the transition to a green economy through sustainable financing",
        "Enhancing financial literacy",
        "Reinforcing consumer protection",
        "Supporting the growth of small and medium enterprises",
      ],
      note: "The strategy draws on demand-side survey work carried out with CAPMAS, with technical assistance from the World Bank Group and the International Finance Corporation. Financial inclusion is also named as a component of Egypt Vision 2030.",
    },
  },
  tech: {
    eyebrow: "What plausibly matters",
    title: "Six developments, and their limits",
    description:
      "Each of these has a credible route to improving inclusion in Egypt, and each carries a corresponding risk. Both are stated. Select one to read further.",
    label: "Developments that could shape the next decade",
    items: [
      {
        id: "identity",
        icon: "fingerprint",
        title: "Digital identity",
        summary: "The precondition for opening an account remotely.",
        detail:
          "Documentation is the barrier that price reductions cannot solve, because the applicant never reaches the point of comparing prices. A digital identity layer allowing remote verification makes tiered account opening workable at scale, and Kenya's experience suggests it does not have to be a new system — a pre-existing national ID, already required to register a SIM card, did the job. It is also the component with the clearest privacy implications.",
        points: [
          "Remote verification without a branch visit",
          "Tiered onboarding: basic accounts on minimal documentation",
          "Lower cost per customer, which makes small balances viable",
          "Requires strong data protection to be trusted, and trusted to be used",
        ],
      },
      {
        id: "openbanking",
        icon: "repeat",
        title: "Open banking",
        summary: "Letting customers move their own financial data.",
        detail:
          "Open banking lets a customer give one provider permission to see data held by another. For financial inclusion, the part that matters is credit: a borrower with no collateral but a documented history of receiving and spending money suddenly becomes someone a lender can assess. It also pushes prices down through competition, which matters given that 20.4% of unbanked adults say cost is what's keeping them out.",
        points: [
          "Credit assessed on transaction history rather than collateral",
          "Easier switching, which puts downward pressure on fees",
          "Products built on data the customer already generates",
          "Consent and control have to sit genuinely with the customer",
        ],
      },
      {
        id: "ai",
        icon: "laptop",
        title: "Artificial intelligence",
        summary: "Mainly useful for risk assessment and fraud detection.",
        detail:
          "The realistic near-term applications are unglamorous: scoring credit risk for applicants with thin files, detecting fraud faster than manual review, and handling routine queries in Egyptian Arabic. The corresponding risk is that a model trained on the currently included population encodes their characteristics as the definition of creditworthiness, and systematically scores the excluded as risky.",
        points: [
          "Credit scoring for applicants with limited formal history",
          "Fraud detection at a speed manual review cannot match",
          "Support in Arabic, reducing the cost of serving new users",
          "Requires auditing for bias, or it entrenches existing exclusion",
        ],
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "Payment infrastructure",
        summary: "Deepening what already exists rather than replacing it.",
        detail:
          "Egypt's instant payment network launched in 2022 and account ownership growth in the following period ran well above the international average. The remaining work is less about new rails than about acceptance: making sure the small merchant, the rural agent and the utility company can all receive digital payment as easily as cash.",
        points: [
          "Wider merchant acceptance, especially outside major cities",
          "Agent networks that let people move between cash and digital",
          "Government payments and wages routed into accounts by default",
          "Interoperability so that any wallet can pay any other",
        ],
      },
      {
        id: "literacy",
        icon: "graduation",
        title: "Financial education",
        summary: "The slowest input, and the one without a shortcut.",
        detail:
          "Financial literacy is a named pillar of both Egyptian national strategies. The honest assessment is that it moves slowly and resists measurement: its effects appear years later and are hard to separate from everything else changing at the same time. Egypt's education-linked gap — 38.5% against 48.3% account ownership — indicates how much room there is.",
        points: [
          "Guidance delivered when an account is opened or a loan considered",
          "Digital literacy alongside financial literacy",
          "Fraud awareness, which protects adoption as much as individuals",
          "Effects appear over years, not budget cycles",
        ],
      },
      {
        id: "cyber",
        icon: "shield",
        title: "Cybersecurity",
        summary: "What protects everything else on this list.",
        detail:
          "Every other item on this list means more money moving through digital channels, and more inexperienced people using them. So cybersecurity isn't a separate workstream running alongside the rest — it's a precondition for all of it. The main risk in a fast-growing market is social engineering: tricking a new user into handing over access, which needs no technical break-in at any bank.",
        points: [
          "Fraud defences that scale with adoption, not behind it",
          "Clear liability and fast reimbursement when providers are at fault",
          "Public education about social engineering",
          "One high-profile failure can set adoption back across a community",
        ],
      },
    ],
  },
  conditions: {
    eyebrow: "Towards 2030",
    title: "What would have to be true",
    description:
      "Rather than forecasting a number, this sets out the conditions that would need to hold. Egypt's published position is strong on the first column and undecided on the second.",
    groups: [
      {
        icon: "checkCircle",
        title: "Already largely in place",
        items: [
          "High mobile phone ownership, at 84.6% of adults",
          "Smartphone ownership at 55.7% of adults, and rising",
          "A functioning instant payment network since 2022",
          "Mobile wallets counted within the national inclusion measure",
          "A published national strategy running to 2030",
        ],
      },
      {
        icon: "repeat",
        title: "In progress, and decisive",
        items: [
          "Merchant acceptance beyond the major cities",
          "Wages and government payments routed into accounts by default",
          "Credit assessed on transaction data rather than collateral",
          "Closing the 16.7 point gap between poorest and richest",
          "Narrowing the 5.7 point gender gap in account ownership",
        ],
      },
      {
        icon: "alert",
        title: "Could undo the progress",
        items: [
          "A major fraud episode damaging confidence in digital payments",
          "Costs that make small-balance accounts not worth holding",
          "Growth that reaches urban and higher-income groups only",
          "Credit extended faster than it can responsibly be assessed",
          "Account ownership rising while actual usage does not",
        ],
      },
    ],
    note: {
      title: "A note on what is not claimed here",
      body1:
        "You won't find a projected number for 2030 on this page. Egypt's published strategy sets priorities, not numerical targets we could reproduce here — and account ownership actually fell between 2017 and 2021, which is a good reminder of how unreliable it is to just draw a straight line into the future. What we can say is that the constraints are better understood now, the infrastructure exists, and what's left is mostly about use rather than access.",
      body2:
        "The single biggest obstacle is also the one technology barely touches. Among Egyptian adults without an account, 90.1% say the reason is simply that they don't have enough money. No payment app changes that. It's a good reminder that financial inclusion is a tool for economic development — and depends on that development happening too.",
    },
  },
  cta: {
    title: "Every figure on this site is traceable",
    description:
      "The Sources page lists every institution, publication and dataset we used, organised by publisher, with the period each figure covers.",
    primary: "Go to Sources",
    secondary: "Back to the start",
  },
};

export type FutureDict = typeof en;

const ar: FutureDict = {
  meta: {
    title: "مستقبل الشمول المالي",
    description:
      "رؤية واقعية للشمول المالي في مصر حتى 2030 — التقنيات المرجّح أن تكون مؤثرة، وما تلتزم به الاستراتيجية الوطنية، وما ينبغي أن يتحقق.",
  },
  hero: {
    eyebrow: "نظرة مستقبلية",
    title: "مستقبل الشمول المالي في مصر",
    description:
      "ما يلي غير مبهر عن قصد. فهو يدور حول ما تجعله البنية التحتية القائمة في مصر واستراتيجيتها المنشورة وأرقامها الحالية معقولًا خلال السنوات المقبلة — لا قفزة تكنولوجية كبرى، بل استكمال تحول جارٍ بالفعل.",
  },
  start: {
    eyebrow: "نقطة الانطلاق",
    title: "الجزء الصعب مبني في معظمه",
    description:
      "المهمة المتبقية أمام مصر مختلفة في نوعها عن تلك التي واجهتها في 2011، وأقل كلفة بكثير.",
    body1:
      "في 2011 كان 9.7% من البالغين في مصر يملكون حسابًا، وكانت البلاد تفتقر إلى قاعدة الأجهزة وقنوات المدفوعات اللازمتين لتغيير ذلك سريعًا. وبحلول 2024 بلغ امتلاك الحسابات 43.1%، وامتلاك الهواتف 84.6%، وكانت شبكة المدفوعات اللحظية تعمل منذ عامين.",
    body2:
      "ما تبقى هو مشكلة التحويل: تحويل منتجات يملكها الناس بالفعل إلى أشياء يستخدمونها فعليًا كل يوم. وهذا يتوقف على ما إذا كان التجار يقبلون الدفع الرقمي، وما إذا كانت الأجور والمدفوعات الحكومية تصل إلى الحساب تلقائيًا، وما إذا كان الناس يثقون بالنظام بما يكفي لإبقاء أموالهم فيه. ولا شيء من هذا يحتاج تقنية غير موجودة أصلًا.",
    body3:
      "ولهذا فإن المقارنة بين مصر وكينيا أكثر تشجيعًا مما توحي به الفجوة الظاهرة. فقد بلغت كينيا 90.1% في امتلاك الحسابات بامتلاك للهواتف يقارب ما لدى مصر — فالقيد لم يكن الأجهزة قط.",
    strategy: {
      title: "ما تلتزم به الاستراتيجية الوطنية",
      intro:
        "صاغ البنك المركزي المصري استراتيجية وطنية ثانية للشمول المالي تغطي الفترة من 2026 إلى 2030، بعد الأولى التي امتدت من 2022 إلى 2025. وتشمل أولوياتها المعلنة:",
      items: [
        "التوسع في الخدمات المالية الرقمية",
        "دعم التحول إلى الاقتصاد الأخضر عبر التمويل المستدام",
        "تعزيز الثقافة المالية",
        "ترسيخ حماية المستهلك",
        "دعم نمو المشروعات الصغيرة والمتوسطة",
      ],
      note: "تستند الاستراتيجية إلى مسح من جانب الطلب أُجري بالتعاون مع الجهاز المركزي للتعبئة العامة والإحصاء، بدعم فني من مجموعة البنك الدولي ومؤسسة التمويل الدولية. كما أن الشمول المالي مذكور كأحد مكونات رؤية مصر 2030.",
    },
  },
  tech: {
    eyebrow: "ما يُرجَّح أن يكون مؤثرًا",
    title: "ستة تطورات، وحدودها",
    description:
      "لكل منها طريق معقول لتحسين الشمول المالي في مصر، ولكل منها مخاطرة مقابلة. وكلاهما مذكور. اختر واحدًا لتقرأ المزيد.",
    label: "تطورات قد تشكّل العقد المقبل",
    items: [
      {
        id: "identity",
        icon: "fingerprint",
        title: "الهوية الرقمية",
        summary: "الشرط المسبق لفتح حساب عن بُعد.",
        detail:
          "المستندات هي العقبة التي لا يحلها خفض الأسعار، لأن مقدم الطلب لا يصل أصلًا إلى مرحلة مقارنة الأسعار. وطبقة هوية رقمية تتيح التحقق عن بُعد تجعل الفتح المتدرج للحسابات قابلًا للتطبيق على نطاق واسع، وتشير تجربة كينيا إلى أنها لا تحتاج نظامًا جديدًا — فبطاقة الهوية الوطنية القائمة أصلًا، المشترطة لتسجيل شريحة الهاتف، كانت كافية. وهي أيضًا المكوّن الأوضح من حيث تبعات الخصوصية.",
        points: [
          "تحقق عن بُعد دون زيارة فرع",
          "فتح متدرج: حسابات أساسية بمستندات بسيطة",
          "تكلفة أقل لكل عميل تجعل الأرصدة الصغيرة مجدية",
          "تتطلب حماية قوية للبيانات لتُوثَق، وأن تُوثَق لتُستخدم",
        ],
      },
      {
        id: "openbanking",
        icon: "repeat",
        title: "الخدمات المصرفية المفتوحة",
        summary: "تمكين العملاء من نقل بياناتهم المالية.",
        detail:
          "تتيح الخدمات المصرفية المفتوحة للعميل أن يمنح جهة ما إذنًا بالاطلاع على بياناته لدى جهة أخرى. وبالنسبة للشمول المالي، الجزء المهم هنا هو الائتمان: فالمقترض الذي لا يملك ضمانات لكن لديه سجل موثق لتلقي المال وإنفاقه يصبح فجأة شخصًا يستطيع المقرض تقييمه. كما تدفع المنافسة الأسعار للأسفل، وهو أمر مهم حين يقول 20.4% من غير المتعاملين مع البنوك إن التكلفة هي ما يبقيهم خارج النظام.",
        points: [
          "ائتمان يُقيَّم بسجل المعاملات لا بالضمانات",
          "سهولة التنقل بين الجهات، مما يضغط على الرسوم",
          "منتجات مبنية على بيانات ينتجها العميل بالفعل",
          "الموافقة والتحكم يجب أن يكونا فعليًا بيد العميل",
        ],
      },
      {
        id: "ai",
        icon: "laptop",
        title: "الذكاء الاصطناعي",
        summary: "مفيد أساسًا في تقييم المخاطر وكشف الاحتيال.",
        detail:
          "التطبيقات الواقعية على المدى القريب غير براقة: تقييم مخاطر الائتمان لمتقدمين بملفات محدودة، وكشف الاحتيال أسرع من المراجعة اليدوية، ومعالجة الاستفسارات الروتينية بالعربية المصرية. والمخاطرة المقابلة أن يرمّز نموذج مدرَّب على الفئة المشمولة حاليًا خصائصها بوصفها تعريف الجدارة الائتمانية، فيصنّف المستبعدين منهجيًا كمخاطرة.",
        points: [
          "تقييم ائتماني لمتقدمين بسجل رسمي محدود",
          "كشف احتيال بسرعة لا تضاهيها المراجعة اليدوية",
          "دعم بالعربية يخفض تكلفة خدمة المستخدمين الجدد",
          "يتطلب تدقيقًا للتحيز، وإلا رسّخ الاستبعاد القائم",
        ],
      },
      {
        id: "payments",
        icon: "qrCode",
        title: "البنية التحتية للمدفوعات",
        summary: "تعميق ما هو قائم بدل استبداله.",
        detail:
          "أُطلقت شبكة المدفوعات اللحظية في مصر عام 2022، وفاق نمو امتلاك الحسابات في الفترة التالية المتوسط الدولي بوضوح. والعمل المتبقي يتعلق بالقبول أكثر من القنوات الجديدة: ضمان أن يستطيع التاجر الصغير والوكيل الريفي وشركة المرافق استقبال المدفوعات الرقمية بسهولة استقبال النقد.",
        points: [
          "توسيع قبول التجار، خصوصًا خارج المدن الكبرى",
          "شبكات وكلاء تتيح التنقل بين النقد والرقمي",
          "توجيه المدفوعات الحكومية والأجور إلى الحسابات تلقائيًا",
          "قابلية التشغيل البيني بحيث تدفع أي محفظة لأي أخرى",
        ],
      },
      {
        id: "literacy",
        icon: "graduation",
        title: "التثقيف المالي",
        summary: "أبطأ المدخلات، والوحيد بلا طريق مختصر.",
        detail:
          "الثقافة المالية ركيزة مذكورة في الاستراتيجيتين الوطنيتين المصريتين. والتقييم الصادق أنها تتحرك ببطء وتقاوم القياس: فآثارها تظهر بعد سنوات ويصعب فصلها عن كل ما يتغير في الوقت نفسه. وفجوة مصر المرتبطة بالتعليم — 38.5% مقابل 48.3% في امتلاك الحسابات — تبيّن حجم المساحة المتاحة.",
        points: [
          "إرشاد يُقدَّم عند فتح الحساب أو التفكير في قرض",
          "ثقافة رقمية إلى جانب الثقافة المالية",
          "التوعية بالاحتيال، التي تحمي التبني بقدر ما تحمي الأفراد",
          "الآثار تظهر عبر سنوات لا عبر دورات الموازنة",
        ],
      },
      {
        id: "cyber",
        icon: "shield",
        title: "الأمن السيبراني",
        summary: "ما يحمي كل ما سبق في هذه القائمة.",
        detail:
          "كل بند آخر في هذه القائمة يعني مزيدًا من الأموال المتحركة عبر القنوات الرقمية، ومزيدًا من المستخدمين قليلي الخبرة الذين يتعاملون بها. لذلك فالأمن السيبراني ليس مسار عمل منفصلًا يسير جنبًا إلى جنب مع الباقي — بل شرط أساسي لكل ما سبق. والمخاطرة الرئيسية في سوق سريعة النمو هي الهندسة الاجتماعية: خداع مستخدم جديد ليتنازل عن صلاحية الدخول، وهو ما لا يحتاج أي اختراق تقني لأي بنك.",
        points: [
          "دفاعات احتيال تتوسع مع التبني لا خلفه",
          "مسؤولية واضحة وتعويض سريع عند خطأ مقدم الخدمة",
          "توعية عامة بشأن الهندسة الاجتماعية",
          "إخفاق واحد بارز قد يعيد التبني إلى الوراء في مجتمع بأكمله",
        ],
      },
    ],
  },
  conditions: {
    eyebrow: "نحو 2030",
    title: "ما الذي ينبغي أن يتحقق",
    description:
      "بدلًا من التنبؤ برقم، يعرض هذا القسم الشروط التي ينبغي أن تتحقق. وموقع مصر المنشور قوي في العمود الأول وغير محسوم في الثاني.",
    groups: [
      {
        icon: "checkCircle",
        title: "متحقق إلى حد كبير بالفعل",
        items: [
          "امتلاك مرتفع للهواتف المحمولة، عند 84.6% من البالغين",
          "امتلاك الهواتف الذكية عند 55.7% من البالغين، وفي ارتفاع",
          "شبكة مدفوعات لحظية عاملة منذ 2022",
          "محافظ إلكترونية محتسبة ضمن مقياس الشمول الوطني",
          "استراتيجية وطنية منشورة تمتد حتى 2030",
        ],
      },
      {
        icon: "repeat",
        title: "قيد التنفيذ، وحاسم",
        items: [
          "قبول التجار خارج المدن الكبرى",
          "توجيه الأجور والمدفوعات الحكومية إلى الحسابات تلقائيًا",
          "ائتمان يُقيَّم ببيانات المعاملات لا بالضمانات",
          "إغلاق فجوة 16.7 نقطة بين الأفقر والأغنى",
          "تضييق فجوة 5.7 نقطة بين الجنسين في امتلاك الحسابات",
        ],
      },
      {
        icon: "alert",
        title: "قد يعصف بالتقدم",
        items: [
          "حادث احتيال كبير يضر بالثقة في المدفوعات الرقمية",
          "تكاليف تجعل الحسابات ذات الأرصدة الصغيرة غير مجدية",
          "نمو يصل إلى الفئات الحضرية والأعلى دخلًا فقط",
          "ائتمان يُمنح أسرع مما يمكن تقييمه بمسؤولية",
          "ارتفاع امتلاك الحسابات دون ارتفاع الاستخدام الفعلي",
        ],
      },
    ],
    note: {
      title: "ملاحظة بشأن ما لا يُدَّعى هنا",
      body1:
        "لن تجد رقمًا متوقعًا لعام 2030 في هذه الصفحة. فالاستراتيجية المنشورة لمصر تضع أولويات لا مستهدفات رقمية يمكن لهذا الموقع نقلها — بل إن امتلاك الحسابات انخفض فعليًا بين 2017 و2021، وهو تذكير جيد بمدى عدم موثوقية مجرد رسم خط مستقيم نحو المستقبل. وما يمكن قوله إن القيود صارت مفهومة بشكل أفضل الآن، وإن البنية التحتية موجودة، وإن ما تبقى هو مسألة استخدام في الأغلب لا مسألة وصول.",
      body2:
        "وأكبر عقبة منفردة هي أيضًا الأقل تأثرًا بالتكنولوجيا. فمن بين البالغين في مصر ممن لا يملكون حسابًا، يقول 90.1% إن السبب ببساطة هو عدم كفاية المال. ولا يغيّر ذلك أي تطبيق دفع. وهو تذكير جيد بأن الشمول المالي أداة للتنمية الاقتصادية — ويعتمد في الوقت نفسه على حدوث هذه التنمية.",
    },
  },
  cta: {
    title: "كل رقم في هذا الموقع قابل للتتبع",
    description:
      "تسرد صفحة المصادر كل جهة ومطبوعة ومجموعة بيانات استُخدمت، مرتبة بحسب الناشر، مع الفترة التي يغطيها كل رقم.",
    primary: "انتقل إلى المصادر",
    secondary: "العودة إلى البداية",
  },
};

export const future: Record<Locale, FutureDict> = { en, ar };
