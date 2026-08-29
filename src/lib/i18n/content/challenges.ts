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
      "These eight barriers don't work in isolation — they feed into each other. Distance raises the cost of a transaction. Irregular income makes that cost harder to absorb. Low confidence rules out the digital option that could have avoided the trip in the first place. Fix just one of these on its own, and the results tend to disappoint.",
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
        "A lot of adults were never taught how formal financial products actually work — what an account costs, how interest builds up, or how to tell if an offer is a good one. Add a digital product to the mix and there's a second layer to learn too: completing a transfer, and spotting a fraudulent request before it's too late.",
      why: "Without that grounding, people tend to do one of two things: avoid formal finance altogether, or use it badly. Avoiding it means keeping savings in cash, where inflation quietly eats away at them. Using it badly can mean debt that spirals — and a bad first experience that puts someone off trying again.",
      solution:
        "Financial education is one of four pillars in the Central Bank's national strategy, and it carries into the 2026–2030 plan too. The evidence points to one thing clearly: teaching works best right at the moment of decision — when someone's opening an account or thinking about a loan — not in a classroom years before they'll ever use it.",
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
        "A large chunk of Egypt's economy runs outside any formal registration. These businesses get paid in cash, don't keep audited accounts, and often have good reason to avoid leaving a visible record of what they earn.",
      why: "That invisibility cuts both ways. Lenders can't see cash-based activity, so the businesses that most need working capital can't prove the revenue that would justify a loan. The state can't see it either, which narrows the tax base. And for the people working in these businesses, informality usually means no contract and no social insurance.",
      solution:
        "MSME Law No. 152 of 2020 gave micro, small and medium enterprises one unified legal definition and attached real incentives to registering formally. The other half of the approach is making formal channels genuinely more attractive — cheaper than handling cash, with credit that opens up once a business has a record to show for itself.",
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
        "Egypt's branch and ATM networks are thinner than in comparable economies, and concentrated in cities — while 56.7% of Egyptians actually live in rural areas. For a lot of households, getting to the nearest branch means a real trip, and often a lost day of work.",
      why: "If it costs more to reach a bank than the transaction is worth, the sensible choice is simply not to bother — and that's true every single time. So distance doesn't just slow inclusion down. It kills off exactly the small, frequent transactions that would make holding an account worthwhile in the first place.",
      solution:
        "Agent banking and mobile wallets stand in for buildings — a local shop can become a cash-in, cash-out point without anyone having to build a branch. Of everything on this page, this is the fix with the clearest logic for sparsely populated areas.",
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
        "In Egypt, the divide isn't really about devices anymore. Phone ownership is high, and smartphone ownership — at 55.7% — isn't far off regional leaders like Kenya. The real divide is in what people actually do with those devices, made worse by patchy connectivity outside the main cities.",
      why: "A digital financial system that only really reaches people who are confident and well-connected just repeats the same old inequality in a new shape. And if digital becomes the cheap option while cash is still the only one some groups can actually use, being excluded gets more expensive, not less.",
      solution:
        "Interfaces designed in Arabic for people using them for the first time, flows that work offline or on very little data, and agent networks that let people move back and forth between cash and digital. Since the device layer is mostly already there, this is a more solvable problem here than in a lot of comparable economies.",
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
        "Demand for credit in Egypt is high — 56.1% of adults borrowed money in 2024. Formal lenders only meet a small slice of that demand. Collateral requirements, paperwork, and the sheer difficulty of assessing income nobody's documented keep most borrowers outside the formal system.",
      why: "Informal credit isn't free, even if no interest rate is written down anywhere. It's priced in obligation, and moneylenders often attach terms that wouldn't hold up if anyone had to spell them out. It doesn't scale either — a loan from family can get you through an emergency, but it's rarely enough to grow a business.",
      solution:
        "The Central Bank requires banks to put 25% of their lending portfolios toward MSMEs, with at least 10% going to small enterprises specifically. Alongside that quota, cash-flow lending — assessed on someone's digital transaction history rather than what they own — gives borrowers with no collateral but a track record an actual way in.",
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
        "Trust in institutions builds slowly and disappears fast. Some of the hesitation here is historical, some comes from simply not being familiar with how banks work, and some is just a rational response to unclear fees and to how hard it can be to get a problem actually fixed.",
      why: "Trust is what decides whether an account someone opened actually gets used. It's also behind a pattern you see a lot: inclusion at the household level rather than the individual level. One family member's account ends up serving everyone, while the rest stay formally excluded, with no record of their own.",
      solution:
        "Clear pricing, deposit protection, and dispute resolution that people can see actually works. That's exactly why consumer protection is one of the named pillars of the national strategy — it's the one whose effects take longest to show up, but last the longest once they do.",
    },
    {
      id: "cyber",
      icon: "shield",
      title: "Cybersecurity and fraud",
      problem:
        "As payments move onto phones, fraud follows right along with them. Social engineering — a call or message that talks someone into authorising a transfer or sharing a code — doesn't need to breach the bank's systems at all. It works best on new users.",
      why: "Fraud losses hit hardest the people who can least afford to absorb them, and the damage to trust spreads well past whoever was actually scammed. One widely shared story can set back adoption across an entire community — a real risk this early in a digital transition.",
      solution:
        "Defences that work in layers: transaction limits and confirmation steps for new payees, in-app warnings written so anyone can understand them, fast reimbursement when a provider is at fault, and public education that doesn't stop after one campaign. Cybersecurity is named as a priority in Egypt's second national strategy for exactly this reason.",
    },
    {
      id: "documentation",
      icon: "fileText",
      title: "Documentation and requirements",
      problem:
        "Opening an account means producing identity documents, and often proof of address or income too. Anyone who works informally, has moved recently, or never got hold of the specific paperwork a bank expects can get stuck at the very first step — no matter how much they earn or how badly they want an account.",
      why: "This is the barrier that most clearly shuts out people who could otherwise be included. Cutting prices doesn't help here, because the applicant never even gets to the point of comparing prices — they're stopped before that. And it falls hardest on women, informal workers, and people who've moved within the country.",
      solution:
        "Tiered know-your-customer rules solve this: a basic account with low transaction limits can be opened with minimal paperwork, and the requirements only grow as the account gets used more. This is exactly how mobile wallets have reached people that full bank onboarding never could.",
    },
  ],
  sequencing: {
    eyebrow: "Sequencing",
    title: "Which barriers move first",
    intro:
      "Not all eight barriers move at the same speed. Grouping them by how quickly they can realistically shift helps set expectations for what a decade of progress actually looks like.",
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
    note: "This ordering is our own reading of the evidence cited on this page, not a published forecast. Think of it as a way to read the barriers together, not a prediction.",
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
        "كثير من البالغين لم يسبق أن تعلّموا كيف تعمل المنتجات المالية الرسمية فعليًا — كم يكلف الحساب، وكيف تُحتسب الفائدة، وكيف يُحكم على أن عرضًا ما معقول. وحين يكون المنتج رقميًا تُضاف طبقة أخرى: إتمام التحويل بنجاح، والتفريق بين طلب حقيقي وآخر احتيالي قبل فوات الأوان.",
      why: "بدون هذا الأساس، يميل الناس لأحد أمرين: تجنّب التمويل الرسمي كليًا، أو استخدامه بشكل سيئ. فالتجنب يُبقي المدخرات نقدًا يقضمه التضخم بهدوء. وسوء الاستخدام قد يعني ديونًا تخرج عن السيطرة — وتجربة أولى سيئة تصدّ الشخص عن المحاولة مجددًا.",
      solution:
        "التثقيف المالي واحد من أربع ركائز في الاستراتيجية الوطنية للبنك المركزي، ويمتد أيضًا إلى استراتيجية 2026–2030. والأدلة تشير بوضوح إلى أمر واحد: أفضل وقت للتعليم هو لحظة القرار نفسها — عند فتح حساب أو التفكير في قرض — لا في فصل دراسي قبلها بسنوات لن يستخدم فيها الشخص ما تعلمه.",
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
        "جزء كبير من اقتصاد مصر يعمل خارج أي تسجيل رسمي. هذه المشروعات تتقاضى أموالها نقدًا، ولا تحتفظ بحسابات مراجَعة، وغالبًا ما يكون لديها سبب وجيه لتجنّب ترك سجل ظاهر لما تكسبه.",
      why: "وهذا الاختفاء يعمل في الاتجاهين. فالمقرضون لا يرون النشاط النقدي، لذلك لا تستطيع المشروعات الأكثر احتياجًا لرأس مال عامل إثبات الإيراد الذي يبرر منحها قرضًا. والدولة لا تراه أيضًا، فتضيق القاعدة الضريبية. وبالنسبة للعاملين في هذه المشروعات، تعني عدم الرسمية غالبًا لا عقد ولا تأمينًا اجتماعيًا.",
      solution:
        "منح قانون المشروعات رقم 152 لسنة 2020 المشروعات متناهية الصغر والصغيرة والمتوسطة تعريفًا قانونيًا موحدًا وربط حوافز حقيقية بالتسجيل الرسمي. أما الشق الآخر من المعالجة فهو جعل القنوات الرسمية أكثر جاذبية بذاتها — أرخص من التعامل مع النقد، وائتمان يُفتح بمجرد أن يصبح للمشروع سجل يُظهره.",
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
        "شبكات الفروع وماكينات الصراف في مصر أرق مما هي عليه في اقتصادات مماثلة، ومتركزة في المدن — بينما يعيش 56.7% من المصريين فعليًا في الريف. ولكثير من الأسر، الوصول إلى أقرب فرع يعني رحلة حقيقية، وغالبًا يوم عمل ضائعًا.",
      why: "حين تكلّف رحلة الوصول إلى البنك أكثر مما تستحقه المعاملة نفسها، يصبح القرار المنطقي ببساطة ألا تُجرى أصلًا — وهذا صحيح في كل مرة. فالمسافة لا تؤجل الشمول المالي فحسب، بل تقتل تحديدًا تلك المعاملات الصغيرة المتكررة التي تجعل الاحتفاظ بحساب أمرًا يستحق العناء.",
      solution:
        "الخدمات عبر الوكلاء والمحافظ الإلكترونية تحل محل المباني — فمتجر محلي يمكن أن يصبح نقطة إيداع وسحب دون أن يبني أحد فرعًا. ومن بين كل ما في هذه الصفحة، هذه المعالجة هي الأوضح منطقًا في المناطق قليلة الكثافة السكانية.",
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
        "لم تعد الفجوة في مصر تتعلق أساسًا بالأجهزة. فامتلاك الهواتف مرتفع، وامتلاك الهواتف الذكية عند 55.7% قريب من دول رائدة إقليميًا مثل كينيا. الفجوة تكمن فيما تُستخدم فيه هذه الأجهزة، ويضاعفها تفاوت التغطية خارج المحاور الرئيسية.",
      why: "نظام مالي رقمي لا يصل إلا إلى الواثقين وجيدي الاتصال يعيد إنتاج التفاوت القائم نفسه في شكل جديد. وإذا صار الرقمي هو الخيار الأرخص بينما يظل النقد هو الخيار الوحيد المتاح لبعض الفئات، يصبح الاستبعاد أكثر كلفة لا أقل.",
      solution:
        "واجهات مصممة بالعربية لمن يستخدمها لأول مرة، ومسارات تعمل دون اتصال أو ببيانات محدودة، وشبكات وكلاء تتيح للناس التنقل بين النقد والرقمي. وبما أن طبقة الأجهزة موجودة إلى حد كبير أصلًا، فهذا تحدٍّ أسهل حلًا هنا منه في كثير من الاقتصادات المماثلة.",
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
        "الطلب على الائتمان في مصر مرتفع — اقترض 56.1% من البالغين أموالًا في 2024. لكن المقرضين الرسميين لا يلبون سوى جزء صغير من هذا الطلب. فاشتراطات الضمانات، والمستندات، وصعوبة تقييم دخل لا يوثقه أحد، كلها تُبقي معظم المقترضين خارج النظام الرسمي.",
      why: "الائتمان غير الرسمي ليس مجانيًا، حتى لو لم يُكتب سعر فائدة في أي مكان. فثمنه التزام اجتماعي، وغالبًا ما يفرض المقرضون غير الرسميين شروطًا لن تصمد لو اضطر أحد لتوضيحها بصراحة. وهو لا يتسع أيضًا: فقرض من الأهل قد يعبر بك أزمة طارئة، لكنه نادرًا ما يكفي لتنمية مشروع.",
      solution:
        "يُلزم البنك المركزي البنوك بتوجيه 25% من محافظ إقراضها إلى المشروعات الصغيرة والمتوسطة، بما لا يقل عن 10% للمشروعات الصغيرة تحديدًا. وإلى جانب هذه النسبة، يفتح الإقراض القائم على التدفق النقدي — المقيَّم بسجل المعاملات الرقمية لا بما يملكه الشخص — طريقًا فعليًا للائتمان أمام مقترضين بلا ضمانات لكن لديهم سجل.",
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
