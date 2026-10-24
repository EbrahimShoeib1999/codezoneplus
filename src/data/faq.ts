import { FAQItem } from "../types";

export const FAQ_ITEMS: FAQItem[] = [
  // 1. General
  {
    id: "gen-1",
    category: "general",
    categoryTitle: { ar: "عام والخدمات", en: "General & Services" },
    question: {
      ar: "ما هي الخدمات الأساسية التي تقدمها شركة CODE ZONE PLUS؟",
      en: "What core services does CODE ZONE PLUS deliver?",
    },
    answer: {
      ar: "نحن وكالة برمجية متخصصة في تطوير المواقع الإلكترونية المخصصة، المتاجر الإلكترونية، أنظمة إدارة الأعمال (CRM / ERP)، أنظمة المطاعم والضيافة (QR Menus & KDS)، تطبيقات الموبايل، المنصات التعليمية، وتطوير الأنظمة الخلفية وواجهات البرمجة (APIs). جميع مشاريعنا تُبنى بكود مخصص من الصفر لضمان الأداء الفائق والأمان الكامل.",
      en: "We are an independent software agency specializing in custom website engineering, high-performance e-commerce, operations management systems (CRM / ERP), restaurant hospitality software (QR menus & KDS), cross-platform mobile apps, e-learning platforms, and backend API architecture. All solutions are coded from scratch without fragile templates.",
    },
  },
  {
    id: "gen-2",
    category: "general",
    categoryTitle: { ar: "عام والخدمات", en: "General & Services" },
    question: {
      ar: "كيف أبدأ مشروعي مع CODE ZONE PLUS؟",
      en: "How do I initiate a project with CODE ZONE PLUS?",
    },
    answer: {
      ar: "الخطوة الأولى هي التواصل معنا عبر نموذج المشروع في الموقع أو مباشرة عبر WhatsApp (01010814966). نقوم بجلسة استكشافية لفهم متطلباتك، ثم نعد عرض سعر تفصيلي ونطاق عمل محدد ومكتوب قبل توقيع الاتفاق والبدء في التنفيذ.",
      en: "You can start by submitting our interactive project brief on the website or contacting us directly via WhatsApp (01010814966). We conduct a preliminary discovery review to understand your goals, followed by a formal written proposal and milestone schedule before commencing engineering work.",
    },
  },
  {
    id: "gen-3",
    category: "general",
    categoryTitle: { ar: "عام والخدمات", en: "General & Services" },
    question: {
      ar: "هل تنفذون مشاريع للعملاء والشركات خارج مصر؟",
      en: "Do you deliver projects for international and Gulf clients remotely?",
    },
    answer: {
      ar: "نعم، نقدم خدماتنا للشركات وأصحاب الأعمال في مصر ودول الخليج العربي والأسواق الدولية عبر أدوات الإدارة السحابية والاجتماعات الافتراضية، مع الالتزام التام بالمواعيد المحددة والتقارير الأسبوعية المنتظمة.",
      en: "Yes, we collaborate seamlessly with enterprises and startups across Egypt, Saudi Arabia, the UAE, and international markets via cloud collaboration tools, weekly video milestone reviews, and structured project management boards.",
    },
  },

  // 2. Pricing
  {
    id: "pri-1",
    category: "pricing",
    categoryTitle: { ar: "التسعير والتكلفة", en: "Pricing & Quotations" },
    question: {
      ar: "هل الأسعار المنشورة على الموقع نهائية وملزمة؟",
      en: "Are the prices listed on your website binding final quotes?",
    },
    answer: {
      ar: "الأسعار المعروضة في خطة التسعير هي أسعار تقديرية واقعية مبنية على متوسط سوق التطوير البرمجي لعام 2026. السعر النهائي يُحدد بدقة في عرض السعر الرسمي المكتوب بعد دراسة متطلبات مشروعك، عدد الصفحات، بوابات الدفع، والربط البرمجي المطلوب.",
      en: "Published prices reflect realistic 2026 market estimates for custom-coded systems. The exact quotation is formalized in a comprehensive written proposal based on your detailed functional specifications, integrations, and operational scope.",
    },
  },
  {
    id: "pri-2",
    category: "pricing",
    categoryTitle: { ar: "التسعير والتكلفة", en: "Pricing & Quotations" },
    question: {
      ar: "ما هي العوامل التي تؤثر على التكلفة الإجمالية للمشروع؟",
      en: "What key factors determine the final project cost?",
    },
    answer: {
      ar: "تشمل العوامل الرئيسية: حجم التطبيق وعدد واجهاته، مستوى التعقيد البرمجي وقواعد العمل، دعم اللغات المتعددة، بوابات الدفع والشحن المراد ربطها، متطلبات الأمان والتشفير، وحجم البيانات المطلوب ترحيلها من أنظمة سابقة.",
      en: "Key determinants include total screen count, algorithmic business logic complexity, multilingual localization, external gateway integrations, offline database synchronization needs, and historical data migration volume.",
    },
  },
  {
    id: "pri-3",
    category: "pricing",
    categoryTitle: { ar: "التسعير والتكلفة", en: "Pricing & Quotations" },
    question: {
      ar: "هل تكلفة الاستضافة والدومين مشمولة في سعر البرمجة؟",
      en: "Are domain registration and cloud hosting costs included in the base quote?",
    },
    answer: {
      ar: "تكاليف حجز اسم النطاق (Domain) واشتراكات السيرفر السحابي (Cloud Hosting) تُدفع مباشرة لمزودي الخدمة باسم العميل لضمان ملكيته الكاملة لها. نوفر خدمة إعداد وتهيئة السيرفر والنطاق كبند مخصص أو ضمن حزمة الإطلاق المتفق عليها.",
      en: "Domain names and cloud server subscriptions are procured directly in the client's name to ensure 100% legal ownership. We provide expert server configuration and provisioning either as a separate add-on or bundled within your agreed milestone package.",
    },
  },

  // 3. Timeline and Delivery
  {
    id: "time-1",
    category: "timeline",
    categoryTitle: { ar: "المواعيد والتسليم", en: "Timeline & Delivery" },
    question: {
      ar: "كم يستغرق تنفيذ المشروع من البداية حتى الإطلاق؟",
      en: "How long does a complete project take from inception to launch?",
    },
    answer: {
      ar: "تتراوح المدة حسب نوع المشروع: صفحات الهبوط تستغرق من 3 إلى 7 أيام، المواقع التعريفية من 2 إلى 3 أسابيع، المتاجر الإلكترونية وأنظمة المطاعم من 4 إلى 8 أسابيع، بينما الأنظمة الكبيرة وتطبيقات الموبايل المتقدمة تستغرق من 2 إلى 6 شهور.",
      en: "Durations correlate directly to complexity: single landing pages take 3–7 days; corporate sites 2–3 weeks; e-commerce and restaurant systems 4–8 weeks; while custom ERP systems and advanced mobile apps span 2–6 months.",
    },
  },
  {
    id: "time-2",
    category: "timeline",
    categoryTitle: { ar: "المواعيد والتسليم", en: "Timeline & Delivery" },
    question: {
      ar: "متى يبدأ حساب الجدول الزمني للمشروع رسمياً؟",
      en: "When does the agreed timeline clock officially start?",
    },
    answer: {
      ar: "يبدأ الجدول الزمني المتفق عليه بعد توقيع الاتفاقية الرسمية، وسداد الدفعة المقدمة المحددة، واستلام كافة المواد الأساسية المطلوبة من العميل (الهوية البصرية، النصوص، وبيانات المنتجات أو الحسابات اللازمة).",
      en: "The timeline officially commences once the written scope agreement is executed, the initial deposit is confirmed, and all essential client assets (brand guidelines, text copy, API credentials) are delivered.",
    },
  },

  // 4. Design and Revisions
  {
    id: "des-1",
    category: "design",
    categoryTitle: { ar: "التصميم والتعديلات", en: "Design & Revisions" },
    question: {
      ar: "كم عدد جولات التعديل المشمولة في المشروع؟",
      en: "How many revision cycles are included in standard agreements?",
    },
    answer: {
      ar: "تتضمن عروضنا القياسية من جولتين إلى 3 جولات تعديل تفصيلية على التصميم والوظائف المتفق عليها داخل نطاق العمل. أي إضافات أو ميزات برمجية جديدة لم تُذكر في النطاق الأصلي يتم تقييمها وتسعيرها بشكل مستقل بموافقة مسبقة.",
      en: "Standard contracts include 2–3 structured revision rounds on agreed deliverables. Any fundamental scope alterations or newly requested modules not outlined in the approved specification are quoted separately with pre-approved estimates.",
    },
  },
  {
    id: "des-2",
    category: "design",
    categoryTitle: { ar: "التصميم والتعديلات", en: "Design & Revisions" },
    question: {
      ar: "هل يمكنني تزويدكم بتصميم جاهز من طرفي لتنفيذه برمجياً؟",
      en: "Can I supply my own Figma designs for your team to code?",
    },
    answer: {
      ar: "بالتأكيد. نستقبل ملفات التصميم عبر Figma أو Adobe XD ونقوم بمراجعتها والتأكد من مطابقتها للمعايير البرمجية، ثم نحولها إلى كود برمجي نظيف وسريع مع الحفاظ الدقيق على أدق تفاصيل التصميم الأصلي.",
      en: "Absolutely. We routinely ingest Figma and Adobe XD design files, inspect UI tokens for engineering feasibility, and translate them into pixel-accurate, responsive Next.js/React components with meticulous fidelity.",
    },
  },

  // 5. Payments and Contracts
  {
    id: "pay-1",
    category: "payments",
    categoryTitle: { ar: "الدفعات والتعاقد", en: "Payments & Terms" },
    question: {
      ar: "ما هو نظام الدفعات المعتمد في CODE ZONE PLUS؟",
      en: "What payment milestone schedule is standard for projects?",
    },
    answer: {
      ar: "النموذج التجاري المقترح للمشاريع هو: 40–50% دفعة مقدمة عند توقيع الاتفاق والبدء في المعمارية والتصميم، 30% عند تسليم النسخة التجريبية للمعاينة والمراجعة، والمتبقي عند التسليم النهائي ونقل الكود والبيانات. قد تختلف النسب المحددة حسب طبيعة وحجم العقد.",
      en: "Our recommended commercial model splits payments into: 40–50% upfront upon agreement signing, 30% upon deployment of the staging trial version for testing, and the remainder upon final production handover. Exact figures are confirmed in the project proposal.",
    },
  },
  {
    id: "pay-2",
    category: "payments",
    categoryTitle: { ar: "الدفعات والتعاقد", en: "Payments & Terms" },
    question: {
      ar: "هل يتم توثيق المشروع بنطاق عمل واتفاق رسمي مكتوب؟",
      en: "Is every engagement formalized with a written scope of work?",
    },
    answer: {
      ar: "نعم، نلتزم بتوثيق جميع المشاريع بمستند نطاق عمل (Scope of Work) مفصل يحدد الصفحات، الميزات، المخرجات المسلمة، مواعيد المراحل، الشروط المالية، وحقوق الملكية الفكرية لضمان الوضوح التام والشفافية للطرفين.",
      en: "Yes, every engagement is backed by an explicit Scope of Work (SOW) detailing inclusions, milestones, exclusions, technical deliverables, and payment triggers to safeguard both parties.",
    },
  },

  // 6. Ownership and Handover
  {
    id: "own-1",
    category: "ownership",
    categoryTitle: { ar: "الملكية والتسليم", en: "Code Ownership & Handover" },
    question: {
      ar: "من يمتلك الكود المصدري بعد انتهاء المشروع وسداد المستحقات؟",
      en: "Who owns the custom source code upon project completion and final payment?",
    },
    answer: {
      ar: "العميل يمتلك الكود المصدري الكامل للمشروع بمجرد سداد كامل المستحقات المتفق عليها. نقوم بتسليم مستودع الكود (GitHub / GitLab) مع تعليمات التثبيت، مخطط قاعدة البيانات، وبيانات الدخول الإدارية دون أي قيود على نقلها أو تطويرها مستقبلاً.",
      en: "Upon full settlement of agreed contract fees, 100% ownership of custom source code is transferred to the client. We grant repository access (GitHub/GitLab), deployment configurations, and database schemas with zero vendor lock-in.",
    },
  },
  {
    id: "own-2",
    category: "ownership",
    categoryTitle: { ar: "الملكية والتسليم", en: "Code Ownership & Handover" },
    question: {
      ar: "هل يستطيع مطور آخر استكمال العمل على الكود مستقبلاً؟",
      en: "Can another development team maintain or expand the codebase later?",
    },
    answer: {
      ar: "نعم تماماً. نعتمد معايير هندسة البرمجيات النظيفة (Clean Code & TypeScript Strict Mode) مع هيكل مجلدات معياري وتوثيق تفصيلي للبيئة وطريقة التشغيل، مما يتيح لأي مهندس برمجيات محترف متابعة العمل بسلاسة.",
      en: "Yes. By adhering to strict TypeScript standards, modular architecture, and structured documentation, any qualified full-stack engineer can onboard quickly and continue future development effortlessly.",
    },
  },

  // 7. Hosting and Security
  {
    id: "host-1",
    category: "hosting",
    categoryTitle: { ar: "الاستضافة والأمان", en: "Hosting & Security" },
    question: {
      ar: "كيف تؤمنون بيانات الموقع ضد الثغرات والاختراق؟",
      en: "How does Code Zone Plus protect web systems against security threats?",
    },
    answer: {
      ar: "نتبع أفضل الممارسات الأمنية: تشفير الاتصال عبر HTTPS/SSL، تعقيم كافة مدخلات النماذج لمنع ثغرات XSS وSQL Injection، عزل المتغيرات السرية ومفاتيح الـ API في ملفات بيئة محمية على السيرفر، وتشفير كلمات المرور باستخدام أحدث خوارزميات التجزئة.",
      en: "We implement defense-in-depth security: forced HTTPS/TLS encryption, strict input sanitization preventing XSS and injection attacks, isolated server environment variables, token-based authentication, and state-of-the-art password hashing.",
    },
  },

  // 8. Support and Warranty
  {
    id: "sup-1",
    category: "support",
    categoryTitle: { ar: "الضمان والدعم الفني", en: "Warranty & Support" },
    question: {
      ar: "هل توفرون فترة ضمان أو دعم فني مجاني بعد التسليم؟",
      en: "Do you include a post-launch warranty or support window?",
    },
    answer: {
      ar: "نعم، نحدد في العقد فترة دعم فني وضمان مجانية متفق عليها (عادةً من 14 إلى 30 يوماً حسب حجم المشروع) لمعالجة أي خلل أو عيب برمجي غير متطابق مع نطاق العمل المعتمد. كما نوفر عقود صيانة شهرية اختيارية للتحديثات المستمرة والدعم الطارئ.",
      en: "Yes, our agreements specify an initial post-handover warranty window (typically 14–30 days depending on scope) to address any functional defects against the agreed specification. Ongoing proactive maintenance contracts are also available.",
    },
  },

  // 9. E-commerce and Integrations
  {
    id: "ecom-1",
    category: "ecommerce",
    categoryTitle: { ar: "التجارة والربط البرمجي", en: "E-Commerce & APIs" },
    question: {
      ar: "ما هي بوابات الدفع الإلكتروني التي يمكن ربطها في مصر والخليج؟",
      en: "Which payment gateways can be integrated for Egypt and the Gulf?",
    },
    answer: {
      ar: "ندعم الربط مع كبرى بوابات الدفع المعتمدة محلياً وإقليمياً، بما فيها: Paymob، فوري (Fawry)، إنستاباي (InstaPay)، تاب (Tap Payments)، ميسر (Moyasar)، بالإضافة إلى بطاقات فيزا وماستركارد وميزة، مع توفير خيار الدفع عند الاستلام.",
      en: "We integrate with leading regional providers including Paymob, Fawry, InstaPay, Tap Payments, and Moyasar, supporting Visa, Mastercard, Meeza, and cash-on-delivery reconciliation.",
    },
  },

  // 10. Data and Privacy
  {
    id: "priv-1",
    category: "privacy",
    categoryTitle: { ar: "البيانات والخصوصية", en: "Data Privacy" },
    question: {
      ar: "ما هي البيانات التي تجمعونها عند استخدام نموذج التواصل في الموقع؟",
      en: "What customer data is captured through the website inquiry form?",
    },
    answer: {
      ar: "نجمع فقط المعلومات التي تدخلها برغبتك في نموذج الاستفسار (الاسم، جهة الاتصال، الخدمة المختارة، والميزانية المقدرة) لغرض تجهيز رسالة WhatsApp واضحة ومباشرة للتواصل معك. لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث لأغراض إعلانية إطلاقاً.",
      en: "We capture only the project details you intentionally provide (name, contact preference, target service, budget, and description) strictly to compose your structured WhatsApp inquiry. We do not sell, rent, or distribute contact info to third-party advertisers.",
    },
  },
];
