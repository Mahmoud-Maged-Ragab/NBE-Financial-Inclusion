import type { Locale } from "../config";

const en = {
  meta: {
    title: "Challenges",
    description:
      "The eight barriers that recur across the evidence on financial inclusion in Egypt — each with the problem, why it matters, and what has been tried against it.",
  },
  hero: {
    eyebrow: "Egypt in focus",
    title: "Eight barriers",
    description:
      "These are the obstacles that appear repeatedly across the World Bank, Central Bank, IMF and academic evidence on Egypt. Each is set out as the problem, why it matters, and what has been tried against it.",
  },
  intro: {
    eyebrow: "How to read this",
    title: "No single barrier explains exclusion",
    description:
      "These eight interact. Distance raises the cost of a transaction; irregular income makes that cost harder to absorb; low confidence removes the digital alternative that would have avoided the journey. Interventions that address one in isolation tend to underperform.",
  },
  items: [
    {
      id: "literacy",
      icon: "graduation",
      title: "Financial literacy",
      figure: {
        value: "38.5% vs 48.3%",
        label:
          "account ownership, primary education or less against secondary or more",
      },
      problem:
        "Many adults have not been taught how formal financial products work — what an account costs, how interest accrues, or how to judge whether an offer is reasonable. Where the product is digital, a second layer is added: completing a transfer, and telling a legitimate request from a fraudulent one.",
      why: "Without that grounding, people either avoid formal finance entirely or use it badly. Avoidance keeps savings in cash where inflation erodes them; poor use leads to unmanageable debt and a bad first experience that deters return.",
      solution:
        "Financial education is one of the four pillars of the Central Bank's national strategy and carries into the 2026–2030 strategy. The evidence generally favours teaching at the point of decision — when an account is opened or a loan considered — over classroom instruction years earlier.",
    },
    {
      id: "informal",
      icon: "store",
      title: "The informal economy",
      figure: {
        value: "~40%",
        label: "of Egyptian GDP is estimated to be informal",
      },
      problem:
        "A large share of Egyptian economic activity takes place outside formal registration. Informal businesses are paid in cash, keep no audited accounts, and often have reason to avoid creating a visible record of turnover.",
      why: "Cash-based activity is invisible to lenders, so the businesses that most need working capital cannot evidence the revenue that would justify it. It is also invisible to the state, narrowing the tax base. For workers, informality usually means no contract and no social insurance.",
      solution:
        "MSME Law No. 152 of 2020 created a unified definition of micro, small and medium enterprises and attached incentives to formalising. The complementary approach is to make formal channels more attractive on their own terms — payment acceptance cheaper than handling cash, and credit that becomes available once a record exists.",
    },
    {
      id: "rural",
      icon: "mapPin",
      title: "Rural access",
      figure: {
        value: "6.56",
        label: "commercial bank branches per 100,000 adults, nationally",
      },
      problem:
        "Branch and ATM networks are thin relative to comparable economies and concentrated in urban centres, while 56.7% of Egyptians live in rural areas. For many households the nearest branch involves a journey and a lost day of work.",
      why: "When the cost of reaching a financial institution exceeds the value of the transaction, the rational choice is not to transact. That applies every time, so distance does not merely delay inclusion — it suppresses the small, frequent transactions that make an account worth holding.",
      solution:
        "Agent banking and mobile wallets substitute for buildings: a local shop can act as a cash-in and cash-out point without the cost of a branch. This is the intervention with the clearest logic in sparsely populated areas.",
    },
    {
      id: "divide",
      icon: "wifi",
      title: "The digital divide",
      figure: {
        value: "84.6% → 18.5%",
        label: "own a mobile phone, but pay with a card or phone",
      },
      problem:
        "The divide in Egypt is no longer mainly about devices. Phone ownership is high, and smartphone ownership at 55.7% exceeds India's. The divide is in what those devices are used for, compounded by uneven connectivity outside the main corridors.",
      why: "A digital financial system reaching only the confident and well-connected reproduces existing inequality in a new form. If digital becomes the cheap channel while cash remains the only accessible one for some groups, exclusion becomes more expensive rather than less.",
      solution:
        "Interface design in Arabic aimed at first-time users, offline-capable and low-data flows, and agent networks that let people move between cash and digital. The device layer is largely built, which makes this more tractable than in many comparable economies.",
    },
    {
      id: "credit",
      icon: "coins",
      title: "Affordable credit",
      figure: {
        value: "10.4% vs 38.4%",
        label: "borrowed formally, against borrowing from family or friends",
      },
      problem:
        "Credit demand in Egypt is high: 56.1% of adults borrowed during 2024. Formal supply meets a small fraction of it. Collateral requirements, documentation and the difficulty of assessing an undocumented income keep most borrowers outside the formal system.",
      why: "Informal credit is not free. It is priced in obligation and, with moneylenders, often in terms that would not survive disclosure. It also cannot scale: family lending can cover an emergency, but rarely an investment large enough to grow a business.",
      solution:
        "The Central Bank requires banks to direct 25% of lending portfolios to MSMEs, with at least 10% to small enterprises. Alongside the quota, cash-flow lending assessed on digital transaction history offers a route to credit for borrowers with no collateral but a record.",
    },
    {
      id: "trust",
      icon: "handshake",
      title: "Trust",
      figure: {
        value: "16.9%",
        label:
          "of unbanked adults say someone else in the family already has an account",
      },
      problem:
        "Confidence in institutions is built slowly and lost quickly. Some hesitancy is historical, some reflects unfamiliarity, and some is a rational response to opaque fees and to difficulty getting a problem resolved.",
      why: "Trust determines whether an account that has been opened is ever used. It also explains household-level rather than individual-level inclusion: where one family member's account serves everyone, the others remain formally excluded, with no records of their own.",
      solution:
        "Transparent pricing, deposit protection and dispute resolution that visibly works. Consumer protection is a named pillar of the national strategy for this reason — the pillar whose effects are slowest to appear and most durable once they do.",
    },
    {
      id: "cyber",
      icon: "shield",
      title: "Cybersecurity and fraud",
      problem:
        "As payments move to phones, fraud follows. Social engineering — a call or message persuading someone to authorise a transfer or share a code — requires no technical compromise of the bank, and targets new users most effectively.",
      why: "Fraud losses fall hardest on those least able to absorb them, and the reputational damage extends well beyond those directly affected. A single widely circulated story can set back adoption across a community, a particular risk early in a digital transition.",
      solution:
        "Layered defences: transaction limits and confirmation steps for new payees, clear in-app warnings written for non-specialists, fast reimbursement where a provider is at fault, and sustained public education. Cybersecurity is named among the priorities of Egypt's second strategy.",
    },
    {
      id: "documentation",
      icon: "fileText",
      title: "Documentation and requirements",
      problem:
        "Opening an account requires identity documents, and often proof of address or income. People who work informally, who have moved, or who never obtained the specific documents a bank expects can be blocked at the first step, regardless of income or intent.",
      why: "This is the barrier that most clearly excludes people who could otherwise be included. It does not respond to price reductions, because the applicant never reaches the point of comparing prices. It falls disproportionately on women, informal workers and internal migrants.",
      solution:
        "Tiered know-your-customer rules, where a basic account with low transaction limits can be opened on minimal documentation and requirements rise with activity. This is how mobile wallets have reached people whom full bank onboarding could not.",
    },
  ],
  sequencing: {
    eyebrow: "Sequencing",
    title: "Which barriers move first",
    intro:
      "Not all eight respond at the same speed. Grouping them by how quickly they can shift is useful for judging what a realistic decade of progress looks like.",
    groups: [
      {
        horizon: "Fastest to move",
        items: ["Rural access", "Documentation", "The digital divide"],
        body: "These respond to infrastructure and rules. Agent networks, tiered onboarding and wallet distribution can change conditions within a few years, and largely have.",
      },
      {
        horizon: "Medium term",
        items: ["Affordable credit", "Cybersecurity", "Informality"],
        body: "These need both new capability and new behaviour — cash-flow lending models, fraud defences that keep pace, and incentives strong enough to make formalising worthwhile.",
      },
      {
        horizon: "Slowest to move",
        items: ["Financial literacy", "Trust"],
        body: "Neither can be legislated into existence. They accumulate through repeated good experiences, and are the barriers most easily undone by a single failure.",
      },
    ],
    note: "This sequencing is an analytical judgement drawn from the evidence cited on this page, not a published forecast. It is offered as a way of reading the barriers together rather than as a prediction.",
  },
  cta: {
    title: "Digital finance addresses several of these at once",
    description:
      "Mobile wallets substitute for branches, transaction records substitute for collateral, and digital payments make small transactions worth making.",
    primary: "Digital Finance",
    secondary: "FinTech in Egypt",
  },
};

export type ChallengesDict = typeof en;

const ar: ChallengesDict = {
  meta: {
    title: "التحديات",
    description:
      "العقبات الثماني التي تتكرر عبر الأدلة حول الشمول المالي في مصر — كل منها مع المشكلة، وأهميتها، وما جُرِّب تجاهها.",
  },
  hero: {
    eyebrow: "مصر عن قرب",
    title: "ثماني عقبات",
    description:
      "هذه هي العقبات التي تتكرر عبر أدلة البنك الدولي والبنك المركزي وصندوق النقد والأبحاث الأكاديمية حول مصر. وكل منها معروض على هيئة: المشكلة، ولماذا تهم، وما جُرِّب تجاهها.",
  },
  intro: {
    eyebrow: "كيف تقرأ هذا القسم",
    title: "لا توجد عقبة واحدة تفسر الاستبعاد",
    description:
      "هذه العقبات الثماني متشابكة. فالمسافة ترفع تكلفة المعاملة؛ والدخل غير المنتظم يجعل تحمّل هذه التكلفة أصعب؛ وضعف الثقة يلغي البديل الرقمي الذي كان سيغني عن الرحلة. ولذلك فإن المعالجات التي تتناول عقبة واحدة بمعزل عن غيرها تحقق نتائج أقل من المتوقع.",
  },
  items: [
    {
      id: "literacy",
      icon: "graduation",
      title: "الثقافة المالية",
      figure: {
        value: "38.5% مقابل 48.3%",
        label: "امتلاك الحسابات: تعليم ابتدائي أو أقل مقابل ثانوي أو أعلى",
      },
      problem:
        "كثير من البالغين لم يتعلموا كيف تعمل المنتجات المالية الرسمية — كم يكلف الحساب، وكيف تُحتسب الفوائد، وكيف يُحكم على معقولية عرض ما. وحين يكون المنتج رقميًا تُضاف طبقة أخرى: إتمام التحويل، وتمييز الطلب المشروع من الاحتيالي.",
      why: "بدون هذا الأساس، إما أن يتجنب الناس التمويل الرسمي كليًا أو يستخدموه بشكل سيئ. فالتجنب يُبقي المدخرات نقدًا حيث يقضمها التضخم؛ وسوء الاستخدام يقود إلى ديون يصعب إدارتها وإلى تجربة أولى سيئة تصدّ عن العودة.",
      solution:
        "التثقيف المالي أحد الركائز الأربع في الاستراتيجية الوطنية للبنك المركزي ويمتد إلى استراتيجية 2026–2030. وتميل الأدلة عمومًا لصالح التعليم في لحظة القرار — عند فتح الحساب أو التفكير في قرض — لا التعليم النظري قبلها بسنوات.",
    },
    {
      id: "informal",
      icon: "store",
      title: "الاقتصاد غير الرسمي",
      figure: {
        value: "~40%",
        label: "من الناتج المحلي المصري يُقدَّر أنه غير رسمي",
      },
      problem:
        "يجري جزء كبير من النشاط الاقتصادي المصري خارج التسجيل الرسمي. فالمشروعات غير الرسمية تُدفع لها نقدًا، ولا تحتفظ بحسابات مراجَعة، وكثيرًا ما يكون لديها سبب لتجنّب إنشاء سجل ظاهر لإيراداتها.",
      why: "النشاط النقدي غير مرئي للمقرضين، ولذلك فإن المشروعات الأحوج لرأس المال العامل لا تستطيع إثبات الإيراد الذي يبرره. وهو غير مرئي للدولة أيضًا، مما يضيّق القاعدة الضريبية. أما بالنسبة للعاملين فتعني عدم الرسمية غالبًا غياب العقد والتأمين الاجتماعي.",
      solution:
        "أنشأ قانون المشروعات رقم 152 لسنة 2020 تعريفًا موحدًا للمشروعات متناهية الصغر والصغيرة والمتوسطة وربط حوافز بالتسجيل الرسمي. والنهج المكمّل هو جعل القنوات الرسمية أكثر جاذبية بذاتها — قبول مدفوعات أرخص من التعامل مع النقد، وائتمان يصبح متاحًا بمجرد وجود سجل.",
    },
    {
      id: "rural",
      icon: "mapPin",
      title: "الوصول في الريف",
      figure: {
        value: "6.56",
        label: "فرعًا مصرفيًا تجاريًا لكل 100 ألف بالغ على المستوى الوطني",
      },
      problem:
        "شبكات الفروع وماكينات الصراف قليلة مقارنة باقتصادات مماثلة ومتركزة في المراكز الحضرية، بينما يعيش 56.7% من المصريين في الريف. ولكثير من الأسر يعني أقرب فرع رحلة ويوم عمل ضائعًا.",
      why: "حين تتجاوز تكلفة الوصول إلى المؤسسة المالية قيمة المعاملة نفسها، يصبح القرار الرشيد هو عدم إجراء المعاملة. وينطبق ذلك في كل مرة، فالمسافة لا تؤجل الشمول المالي فحسب — بل تكبح المعاملات الصغيرة المتكررة التي تجعل الحساب يستحق الاحتفاظ به.",
      solution:
        "الخدمات عبر الوكلاء والمحافظ الإلكترونية تحل محل المباني: فمتجر محلي يمكن أن يكون نقطة إيداع وسحب دون تكلفة فرع. وهذه هي المعالجة الأوضح منطقًا في المناطق قليلة الكثافة السكانية.",
    },
    {
      id: "divide",
      icon: "wifi",
      title: "الفجوة الرقمية",
      figure: {
        value: "84.6% ← 18.5%",
        label: "يملكون هاتفًا محمولًا، لكن يدفعون ببطاقة أو هاتف",
      },
      problem:
        "لم تعد الفجوة في مصر تتعلق أساسًا بالأجهزة. فامتلاك الهواتف مرتفع، وامتلاك الهواتف الذكية عند 55.7% يفوق نظيره في الهند. الفجوة تكمن فيما تُستخدم فيه هذه الأجهزة، ويضاعفها تفاوت التغطية خارج المحاور الرئيسية.",
      why: "النظام المالي الرقمي الذي يصل فقط إلى الواثقين وجيدي الاتصال يعيد إنتاج التفاوت القائم في صورة جديدة. وإذا صار الرقمي هو القناة الأرخص بينما يظل النقد الوحيد المتاح لبعض الفئات، يصبح الاستبعاد أكثر كلفة لا أقل.",
      solution:
        "تصميم واجهات بالعربية موجهة للمستخدمين لأول مرة، ومسارات تعمل دون اتصال أو ببيانات محدودة، وشبكات وكلاء تتيح التنقل بين النقد والرقمي. وطبقة الأجهزة مبنية إلى حد كبير، مما يجعل هذا التحدي أيسر منه في اقتصادات مماثلة كثيرة.",
    },
    {
      id: "credit",
      icon: "coins",
      title: "الائتمان الميسور",
      figure: {
        value: "10.4% مقابل 38.4%",
        label: "اقترضوا رسميًا، مقابل الاقتراض من الأهل والأصدقاء",
      },
      problem:
        "الطلب على الائتمان في مصر مرتفع: اقترض 56.1% من البالغين خلال 2024. لكن العرض الرسمي يلبي جزءًا صغيرًا منه. فاشتراطات الضمانات والمستندات وصعوبة تقييم دخل غير موثق تُبقي معظم المقترضين خارج النظام الرسمي.",
      why: "الائتمان غير الرسمي ليس مجانيًا. فثمنه التزام اجتماعي، ومع المقرضين غير الرسميين شروط لا تصمد أمام الإفصاح. كما أنه غير قابل للتوسع: فقرض الأسرة قد يغطي طارئًا، لكنه نادرًا ما يغطي استثمارًا كافيًا لتنمية مشروع.",
      solution:
        "يُلزم البنك المركزي البنوك بتوجيه 25% من محافظ الإقراض للمشروعات الصغيرة، بما لا يقل عن 10% للمشروعات الصغيرة. وإلى جانب هذه النسبة، يتيح الإقراض المبني على التدفق النقدي — والمقيَّم بسجل المعاملات الرقمية — طريقًا للائتمان لمقترضين بلا ضمانات لكن لديهم سجل.",
    },
    {
      id: "trust",
      icon: "handshake",
      title: "الثقة",
      figure: {
        value: "16.9%",
        label: "من غير المتعاملين مع البنوك يقولون إن أحد أفراد الأسرة يملك حسابًا",
      },
      problem:
        "الثقة في المؤسسات تُبنى ببطء وتُفقد بسرعة. بعض التردد تاريخي، وبعضه يعكس عدم الإلمام، وبعضه استجابة منطقية لرسوم غير واضحة ولصعوبة حل المشكلات عند وقوعها.",
      why: "الثقة هي ما يحدد إن كان الحساب المفتوح سيُستخدم أصلًا. وهي تفسر أيضًا الشمول على مستوى الأسرة لا الفرد: فحين يخدم حساب أحد أفراد الأسرة الجميع، يبقى الباقون مستبعدين رسميًا بلا سجلات خاصة بهم.",
      solution:
        "تسعير شفاف، وحماية للودائع، وتسوية للمنازعات تعمل بشكل ملموس. ولهذا السبب تمثل حماية المستهلك ركيزة معلنة في الاستراتيجية الوطنية — وهي الركيزة الأبطأ ظهورًا للأثر والأكثر رسوخًا حين يظهر.",
    },
    {
      id: "cyber",
      icon: "shield",
      title: "الأمن السيبراني والاحتيال",
      problem:
        "مع انتقال المدفوعات إلى الهواتف ينتقل الاحتيال معها. والهندسة الاجتماعية — مكالمة أو رسالة تقنع شخصًا باعتماد تحويل أو مشاركة رمز — لا تتطلب أي اختراق تقني للبنك، وتستهدف المستخدمين الجدد بأكبر فاعلية.",
      why: "خسائر الاحتيال تقع بأشد وطأة على الأقل قدرة على تحمّلها، ويمتد الضرر السمعي إلى ما هو أبعد من المتضررين مباشرة. فقصة واحدة واسعة الانتشار قد تعيد التبني إلى الوراء في مجتمع بأكمله، وهي مخاطرة خاصة في بدايات التحول الرقمي.",
      solution:
        "دفاعات متعددة الطبقات: حدود للمعاملات وخطوات تأكيد للمستفيدين الجدد، وتحذيرات واضحة داخل التطبيق مكتوبة لغير المتخصصين، وتعويض سريع عند خطأ مقدم الخدمة، وتوعية عامة مستمرة. والأمن السيبراني مذكور ضمن أولويات الاستراتيجية الثانية لمصر.",
    },
    {
      id: "documentation",
      icon: "fileText",
      title: "المستندات والاشتراطات",
      problem:
        "يتطلب فتح الحساب مستندات هوية، وغالبًا إثبات محل إقامة أو دخل. ومن يعملون بشكل غير رسمي، أو انتقلوا من مكان لآخر، أو لم يحصلوا قط على المستندات المحددة التي يطلبها البنك، قد يُمنعون عند الخطوة الأولى بصرف النظر عن دخلهم أو نيتهم.",
      why: "هذه هي العقبة التي تستبعد بأوضح صورة أشخاصًا كان يمكن شمولهم. وهي لا تستجيب لخفض الأسعار، لأن مقدم الطلب لا يصل أصلًا إلى مرحلة مقارنة الأسعار. وتقع بشكل غير متناسب على النساء والعاملين غير الرسميين والنازحين داخليًا.",
      solution:
        "قواعد «اعرف عميلك» المتدرجة، حيث يمكن فتح حساب أساسي بحدود معاملات منخفضة بمستندات بسيطة ثم ترتفع الاشتراطات مع النشاط. وبهذه الطريقة وصلت المحافظ الإلكترونية إلى من لم يستطع إجراء الفتح البنكي الكامل الوصول إليهم.",
    },
  ],
  sequencing: {
    eyebrow: "الترتيب الزمني",
    title: "أي العقبات تتحرك أولًا",
    intro:
      "لا تستجيب العقبات الثماني بالسرعة نفسها. وتجميعها بحسب سرعة إمكانية تغيّرها مفيد للحكم على ما يعنيه عقد واقعي من التقدم.",
    groups: [
      {
        horizon: "الأسرع حركة",
        items: ["الوصول في الريف", "المستندات", "الفجوة الرقمية"],
        body: "تستجيب هذه للبنية التحتية والقواعد. فشبكات الوكلاء والفتح المتدرج وتوزيع المحافظ يمكنها تغيير الأوضاع خلال سنوات قليلة، وقد فعلت ذلك إلى حد كبير.",
      },
      {
        horizon: "المدى المتوسط",
        items: ["الائتمان الميسور", "الأمن السيبراني", "عدم الرسمية"],
        body: "تحتاج هذه إلى قدرات جديدة وسلوك جديد معًا — نماذج إقراض قائمة على التدفق النقدي، ودفاعات احتيال تواكب التطور، وحوافز قوية بما يكفي لجعل التسجيل الرسمي مجديًا.",
      },
      {
        horizon: "الأبطأ حركة",
        items: ["الثقافة المالية", "الثقة"],
        body: "لا يمكن سنّ أي منهما بقانون. فهما يتراكمان عبر تجارب جيدة متكررة، وهما العقبتان الأسهل انتكاسًا بفشل واحد.",
      },
    ],
    note: "هذا الترتيب اجتهاد تحليلي مستمد من الأدلة المذكورة في هذه الصفحة، وليس توقعًا منشورًا. وهو مطروح كطريقة لقراءة العقبات مجتمعة لا كتنبؤ.",
  },
  cta: {
    title: "التمويل الرقمي يعالج عدة عقبات في آن واحد",
    description:
      "المحافظ الإلكترونية تحل محل الفروع، وسجلات المعاملات تحل محل الضمانات، والمدفوعات الرقمية تجعل المعاملات الصغيرة مجدية.",
    primary: "التمويل الرقمي",
    secondary: "التكنولوجيا المالية في مصر",
  },
};

export const challenges: Record<Locale, ChallengesDict> = { en, ar };
