import { Service } from "../types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    slug: "web-development",
    category: "web",
    title: {
      ar: "تصميم وتطوير المواقع الإلكترونية",
      en: "Website Design & Development",
    },
    shortDescription: {
      ar: "مواقع سريعة وعصرية تعكس مكانة شركتك وتجذب عملاءً جددًا.",
      en: "Fast, modern websites that reflect your brand well and turn visitors into real enquiries.",
    },
    fullDescription: {
      ar: "نطور مواقع شركات، صفحات هبوط تسويقية، وبوابات تفاعلية بكود برمجي مخصص بالكامل بدون استخدام قوالب جاهزة وبدون إضافات تثقل الموقع. نركز على سرعة التحميل، تجربة المستخدم المتجاوبة مع كل الشاشات، وتهيئة متقدمة لمحركات البحث (SEO).",
      en: "We engineer bespoke corporate websites, high-converting landing pages, and interactive client portals without relying on bloated templates or fragile third-party plugins. Engineered for sub-second load times, flawless cross-device responsiveness, and top-tier SEO indexability.",
    },
    estimatedPrice: {
      ar: "3,000 – 30,000 ج.م",
      en: "3,000 – 30,000 EGP",
    },
    estimatedTimeline: {
      ar: "3 أيام – 5 أسابيع",
      en: "3 days – 5 weeks",
    },
    businessProblem: {
      ar: "معظم المواقع التجارية تعاني من بطء التحميل وضعف التجاوب مع الهواتف، مما يؤدي لفقدان أكثر من 50% من الزوار قبل رؤية العرض.",
      en: "Most business sites suffer from sluggish load times and broken mobile layouts, causing upwards of 50% of visitors to bounce before reviewing your offerings.",
    },
    whoIsItFor: {
      ar: [
        "الشركات الناشئة التي تريد إطلاق حضور رقمي احترافي.",
        "الشركات والمؤسسات التي ترغب في تجديد موقعها القديم ليعمل بسرعة فائقة.",
        "أصحاب المهن الحرة والخبراء الذين يحتاجون بورتفوليو شخصي مميز.",
        "الحملات الإعلانية التي تحتاج صفحات هبوط تحقق أعلى معدلات تحويل.",
      ],
      en: [
        "Startups looking to launch a strong, authoritative digital brand.",
        "Established enterprises needing to modernize legacy websites.",
        "Professionals seeking a high-end personal portfolio showcase.",
        "Marketing teams requiring dedicated, high-conversion campaign pages.",
      ],
    },
    useCases: {
      ar: [
        "موقع تعريفي متعدد اللغات لشركة خدمات استشارية أو مقاولات.",
        "صفحة هبوط مخصصة لحملة ترويجية لمنتج أو خدمة جديدة.",
        "موقع شركة مع لوحة تحكم بسيطة لنشر الأخبار والمشاريع وإدارة الرسائل.",
        "بوابة عملاء تفاعلية لاستقبال الاستفسارات وطلبات عروض الأسعار.",
      ],
      en: [
        "Bilingual corporate platform for consultancy or engineering firms.",
        "Dedicated performance landing page for product marketing campaigns.",
        "Company website with an intuitive admin dashboard for news and portfolio updates.",
        "Interactive portal for intake of quotes, bids, and client inquiries.",
      ],
    },
    deliverables: {
      ar: [
        "كود مصدري نظيف وموثق بالكامل مبني بـ Next.js وTypeScript.",
        "واجهات مستخدم متجاوبة 100% مع الهواتف، الأجهزة اللوحية، وشاشات سطح المكتب.",
        "دعم كامل للغتين العربية (RTL) والإنجليزية (LTR).",
        "لوحة تحكم خفيفة وسريعة لتعديل المحتوى (في الباقات المختارة).",
        "تهيئة تقنية متكاملة لمحركات البحث (Semantic HTML, Meta Tags, Sitemap).",
        "تكامل مع WhatsApp ونماذج التواصل التفاعلية.",
      ],
      en: [
        "Clean, well-documented source code in Next.js & TypeScript.",
        "Pixel-perfect responsive views across mobile, tablet, and widescreen monitors.",
        "Native bilingual support with full RTL (Arabic) & LTR (English) layouts.",
        "Lightweight admin portal for effortless content updates (in relevant tiers).",
        "Complete technical SEO setup (Semantic HTML, OpenGraph, dynamic Sitemap).",
        "Interactive WhatsApp conversion flows and validated contact modals.",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    optionalAddons: {
      ar: [
        "لوحة إدارة محتوى ديناميكية (CMS مخصص).",
        "ربط مدونة تقنية مع دعم تصنيفات البحث.",
        "تكامل مع أدوات التحليلات وإحصاءات الزوار دون المساس بالخصوصية.",
      ],
      en: [
        "Custom lightweight CMS content engine.",
        "Full-featured blog system with category indexing.",
        "Privacy-respecting analytics and conversion tracking integration.",
      ],
    },
    quoteFactors: {
      ar: [
        "عدد الصفحات والأقسام المطلوبة.",
        "الحاجة إلى لوحة تحكم مخصصة لإدارة المحتوى.",
        "الحاجة إلى تعدد اللغات وتوفير ترجمات معتمدة.",
        "مستوى الرسوم المتحركة والتفاعلات الخاصة المطلوبة.",
      ],
      en: [
        "Total number of customized page layouts.",
        "Requirement for a protected back-office content portal.",
        "Multilingual localization scope and translated copy assets.",
        "Complexity of bespoke interactive animations.",
      ],
    },
    iconName: "Globe",
  },
  {
    id: "ecommerce-dev",
    slug: "ecommerce",
    category: "web",
    title: {
      ar: "تطوير المتاجر الإلكترونية",
      en: "E-Commerce Engineering",
    },
    shortDescription: {
      ar: "متاجر إلكترونية مخصصة وسريعة تمنح عملاءك تجربة شراء سلسة وتدعم بوابات الدفع والشحن في مصر والخليج.",
      en: "Fast online stores that make buying easy for your customers, with local payment and shipping options.",
    },
    fullDescription: {
      ar: "نبني متاجر إلكترونية بمحركات برمجية حديثة تضمن سرعة لا تضاهى حتى مع آلاف المنتجات. نوفر لك السيطرة الكاملة على متجرك بدون عمولات شهرية على المبيعات، مع ربط بوابات الدفع الإلكتروني (Paymob, Fawry, InstaPay) وأنظمة الشحن وإدارة المخزون.",
      en: "We architect high-concurrency online storefronts that maintain instant loading even across large catalogs. Maintain complete freedom without recurring transaction percentage penalties, integrated directly with trusted gateways and courier APIs.",
    },
    estimatedPrice: {
      ar: "20,000 – 100,000 ج.م",
      en: "20,000 – 100,000 EGP",
    },
    estimatedTimeline: {
      ar: "4 – 12 أسبوعاً",
      en: "4 – 12 weeks",
    },
    businessProblem: {
      ar: "المتاجر المعتمدة على قوالب جاهزة تعاني من ثقل الصفحات وانهيار السيرفرات في أوقات العروض، وتفرض رسوماً شهرية وعمولات مقتطعة من أرباحك.",
      en: "Template-driven stores suffer from sluggish checkout processes and crash during flash sales, while locking merchants into aggressive recurring commissions.",
    },
    whoIsItFor: {
      ar: [
        "العلامات التجارية والمصانع التي تريد بيع منتجاتها مباشرة للجمهور (D2C).",
        "المتاجر المحلية التي ترغب في التوسع والوصول للمستهلكين في كافة المحافظات.",
        "المشاريع التي تحتاج تجربة شراء مخصصة وخيارات تسعير معقدة لا توفرها المنصات الجاهزة.",
      ],
      en: [
        "Direct-to-consumer (D2C) brands seeking total brand expression.",
        "Retail businesses expanding into multi-governorate distribution.",
        "Businesses with tailored product configurators or specialized B2B pricing tiers.",
      ],
    },
    useCases: {
      ar: [
        "متجر أزياء وملابس مع فلاتر المقاسات، الألوان، وحسابات الشحن.",
        "متجر إلكترونيات وأجهزة مع مقارنة المواصفات والضمان.",
        "متجر منتجات استهلاكية يدعم الدفع عند الاستلام أو ببطاقات ميزة والفيزا.",
      ],
      en: [
        "Apparel storefront featuring multi-attribute sizing, color swatches, and tiered shipping.",
        "Consumer electronics shop with product comparison matrices and warranty selection.",
        "Retail consumer store supporting card checkout, Meeza, and cash on delivery.",
      ],
    },
    deliverables: {
      ar: [
        "واجهة متجر حديثة وسريعة متجاوبة مع كافة أجهزة الموبايل.",
        "سلة شراء ذكية وصفحة دفع ميسرة في خطوة واحدة (One-page Checkout).",
        "لوحة إدارة منتجات، تصنيفات، مخزون، وكوبونات خصم.",
        "تكامل مع بوابات الدفع المختارة (Paymob / Fawry / InstaPay).",
        "نظام إشعارات فورية بالطلبات عبر البريد الإلكتروني أو WhatsApp.",
        "تقارير وإحصائيات مبيعات وتحليلات للطلبات الأكثر رواجاً.",
      ],
      en: [
        "Lightning-fast storefront optimized for high-volume mobile shoppers.",
        "Frictionless single-page checkout flow with immediate form validation.",
        "Merchant back-office for inventory, catalog hierarchies, and promotional coupons.",
        "Verified gateway integration with Paymob, Fawry, or InstaPay.",
        "Automated dispatch alerts to staff via email or WhatsApp API.",
        "Executive sales telemetry and top-performing SKU reports.",
      ],
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    optionalAddons: {
      ar: [
        "ربط بوليصات الشحن التلقائية مع شركات الشحن المحلية.",
        "إشعارات متابعة الشحنة للعملاء عبر الرسائل النصية أو واتساب.",
        "نظام الولاء والنقاط التراكمية للعملاء المتكررين.",
      ],
      en: [
        "Direct shipping label generation with regional logistics providers.",
        "Automated transit SMS and WhatsApp tracking updates for buyers.",
        "Customer loyalty tiers and reward points program.",
      ],
    },
    quoteFactors: {
      ar: [
        "حجم كتالوج المنتجات وتنوع الخصائص.",
        "عدد بوابات الدفع وشركات الشحن المراد دمجها.",
        "الحاجة إلى نظام فواتير إلكترونية ومزامنة مع برامج محاسبية قائمة.",
      ],
      en: [
        "Catalog volume and complexity of variant attributes.",
        "Number of payment and logistics integrations required.",
        "Integration requirements with external ERP or fiscal e-invoicing systems.",
      ],
    },
    iconName: "ShoppingCart",
  },
  {
    id: "restaurant-systems",
    slug: "restaurant-hospitality",
    category: "systems",
    title: {
      ar: "أنظمة المطاعم والكافيهات والضيافة",
      en: "Restaurant & Hospitality Systems",
    },
    shortDescription: {
      ar: "منيو رقمي عبر QR، شاشات للمطبخ، ونظام كاشير ينظّم العمل ويسرّع تقديم الطلبات.",
      en: "Digital menus, kitchen screens, and cashier systems that keep orders moving and your restaurant running smoothly.",
    },
    fullDescription: {
      ar: "نطور حلولاً متخصصة لصناعة الضيافة تبدأ من المنيو الرقمي السريع عبر مسح الباركود على الطاولات، حتى شاشات المطبخ الذكية (KDS) التي تنظم إعداد الأطباق بالأولويات، ونظام الكاشير ونقاط البيع للمطاعم متعددة الأقسام والصالات.",
      en: "We engineer dedicated hospitality software, ranging from lightweight table-side QR code ordering systems up to intelligent Kitchen Display Systems (KDS) prioritizing prep sequences, and comprehensive multi-station restaurant POS.",
    },
    estimatedPrice: {
      ar: "8,000 – 45,000 ج.م",
      en: "8,000 – 45,000 EGP",
    },
    estimatedTimeline: {
      ar: "2 – 7 أسابيع",
      en: "2 – 7 weeks",
    },
    businessProblem: {
      ar: "طباعة المنيو الورقي مكلفة وبطيئة عند تغيير الأسعار، وضياع الطلبات بين الويتر والمطبخ يتسبب في تأخر الزبائن وتراجع التقييمات.",
      en: "Paper menus are expensive to reprint whenever prices adjust, while miscommunication between floor staff and kitchen leads to delayed orders and frustrated patrons.",
    },
    whoIsItFor: {
      ar: [
        "المطاعم والكافيهات التي تريد رقمنة قائمة الطعام وتقليل تكاليف الطباعة.",
        "المطابخ السحابية والمطاعم السريعة التي تحتاج تنظيم استلام الطلبات وسرعة التحضير.",
        "سلاسل المطاعم التي تتطلب إدارة مركزية للأصناف وتوزيع الأوردرات على الأقسام.",
      ],
      en: [
        "Restaurants and cafés seeking to eliminate paper menu costs and update specials on the fly.",
        "Cloud kitchens and quick-service diners requiring rapid kitchen routing.",
        "Hospitality operators managing multi-station prep lines and dine-in tables.",
      ],
    },
    useCases: {
      ar: [
        "منيو باركود QR سريع يفتح فوراً بدون تطبيق مع إمكانية تعديل الأسعار بلحظة واحدة.",
        "نظام استلام طلبات الطاولات مع توجيه طلبات المشروبات للباريستا والوجبات للشيف.",
        "شاشة مطبخ KDS توضح وقت انتظار كل طلب وتغير لونه عند التأخير لتنبيه الطاقم.",
      ],
      en: [
        "Zero-install table QR menu with real-time price and 86-item availability updates.",
        "Table ordering workflow that routes beverage tickets to the bar and mains to the hot line.",
        "Interactive Kitchen Display System (KDS) highlighting ticket wait times with visual timers.",
      ],
    },
    deliverables: {
      ar: [
        "منيو إلكتروني سريع مع صور عالية الجودة وتصميم متوافق مع الموبايل.",
        "لوحة إدارة المطعم لتعديل الأصناف، الأسعار، وإخفاء الأطباق المنتهية.",
        "شاشة عرض المطبخ التفاعلية (KDS) للتحكم في حالة الأوردرات (في الباقة المتكاملة).",
        "رموز QR مصممة ومجهزة للطباعة على الطاولات والمطبوعات.",
        "تدريب الطاقم الإداري على إدارة النظام واستخراج التقارير اليومية.",
      ],
      en: [
        "High-speed digital menu featuring appetizing visual photography and mobile-first UX.",
        "Manager console to instantly toggle pricing, dish descriptions, and out-of-stock items.",
        "Touchscreen-ready Kitchen Display Screen (KDS) with order staging (in integrated package).",
        "Print-ready customized QR asset plates with table number encoding.",
        "Staff walkthrough and operational documentation for daily shifts.",
      ],
    },
    technologies: ["Next.js", "React", "Node.js", "WebSockets", "PostgreSQL"],
    optionalAddons: {
      ar: [
        "ربط مع طابعات الإيصالات الحرارية في الصالة والمطبخ.",
        "دعم وضع العمل الأوفلاين في حال انقطاع الإنترنت المؤقت.",
        "نظام إدارة طلبات الدليفري وتتبع الطيارين.",
      ],
      en: [
        "Thermal printer ESC/POS network integration for order tickets.",
        "Offline-resilient architecture handling intermittent internet outages.",
        "Delivery dispatcher module with courier assignment.",
      ],
    },
    quoteFactors: {
      ar: [
        "النوع المطلوب: منيو QR فقط أم نظام متكامل مع شاشة المطبخ والكاشير.",
        "عدد الصالات، الطاولات، والأقسام داخل المطبخ.",
        "الحاجة إلى مزامنة أوفلاين مع الطابعات المحلية.",
      ],
      en: [
        "Scope selection: Standalone QR menu vs. full Admin + KDS + Cashier system.",
        "Number of floor zones, tables, and physical kitchen prep stations.",
        "Requirement for offline synchronization with thermal network printers.",
      ],
    },
    iconName: "UtensilsCrossed",
  },
  {
    id: "business-systems",
    slug: "business-systems",
    category: "systems",
    title: {
      ar: "أنظمة إدارة الأعمال (CRM / ERP)",
      en: "Business Management Systems (CRM / ERP)",
    },
    shortDescription: {
      ar: "أنظمة برمجية مصممة خصيصاً لدورة عمل شركتك تجمع العملاء، المبيعات، المخازن، والحسابات في مكان واحد.",
      en: "Software built around how your business works, bringing clients, sales, stock, and accounts together in one place.",
    },
    fullDescription: {
      ar: "نبتكر برمجيات داخلية تلائم طريقة عملك الحقيقية دون إجبارك على التكيف مع برامج جاهزة معقدة ومكلفة. تشمل حلولنا أنظمة إدارة علاقات العملاء (CRM)، نقاط البيع (POS)، وأنظمة التخطيط الشامل (ERP مصغر) للمبيعات، المشتريات، والمخازن.",
      en: "We architect internal operational software tailored to your specific team workflows, avoiding the bloat and rigidity of generic SaaS tools. Solutions span bespoke CRM pipelines, retail POS systems, and mini ERP platforms managing purchasing, stock levels, and accounts.",
    },
    estimatedPrice: {
      ar: "25,000 – 250,000+ ج.م",
      en: "25,000 – 250,000+ EGP",
    },
    estimatedTimeline: {
      ar: "5 أسابيع – 6 شهور",
      en: "5 weeks – 6 months",
    },
    businessProblem: {
      ar: "تشتت بيانات الشركة بين ملفات Excel ومحادثات واتساب يؤدي لضياع صفقات المبيعات، تضارب في حسابات المخزون، وصعوبة في اتخاذ قرارات دقيقة.",
      en: "Scattering operational data across messy spreadsheets and chat threads leads to lost leads, stock discrepancies, and blind executive decision-making.",
    },
    whoIsItFor: {
      ar: [
        "الشركات التجارية والموزعون الذين يحتاجون متابعة حركة البضائع والمستودعات.",
        "شركات الخدمات والمبيعات التي تريد تنظيم متابعة العملاء المحتملين وفرق البيع.",
        "المؤسسات التي تجاوزت قدرة ملفات Excel وتحتاج أداة مركزية مؤمنة.",
      ],
      en: [
        "Distribution and trading companies monitoring multi-warehouse inventory.",
        "B2B service firms seeking to systematize lead capture, quotes, and sales follow-ups.",
        "Growing SMBs outgrowing spreadsheet chaos in need of centralized role-based data.",
      ],
    },
    useCases: {
      ar: [
        "نظام CRM لتسجيل مكالمات المبيعات، مراحل العروض، ومواعيد إعادة الاتصال.",
        "نظام POS لإدارة فواتير الكاشير، إغلاق الورديات، والتنبيه التلقائي بنواقص المخزن.",
        "نظام ERP مصغر يربط فواتير المشتريات مع الموردين وأوامر الصرف وأرصدة العملاء.",
      ],
      en: [
        "CRM tracking sales rep pipelines, customer interaction logs, and proposal stages.",
        "Retail POS managing cashier tills, shift reconciliation, and low-stock alerts.",
        "Mini ERP integrating vendor purchase orders, inventory requisitions, and receivable balances.",
      ],
    },
    deliverables: {
      ar: [
        "تطبيق ويب سحابي مؤمن بصلاحيات دخول مخصصة لكل مستخدم ودور وظيفي.",
        "قاعدة بيانات سريعة ومنظمة مع نسخ احتياطي دوري.",
        "لوحات إحصائية تفاعلية تعرض مؤشرات الأداء الرئيسية (KPIs) وتقارير الأرباح.",
        "إمكانية تصدير واستيراد البيانات بتنسيقات Excel وPDF.",
        "توثيق تدريبي ودليل استخدام لكافة موظفي الإدارات.",
      ],
      en: [
        "Secure cloud web application with granular role-based access control (RBAC).",
        "High-performance transactional database with automated backup schedules.",
        "Executive dashboards visualizing company KPIs, gross margins, and team velocity.",
        "Seamless two-way data import/export for Excel and PDF statements.",
        "End-user system documentation and administrative operational guides.",
      ],
    },
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind CSS"],
    optionalAddons: {
      ar: [
        "ربط الفواتير مع منظومة الفاتورة الإلكترونية والضرائب.",
        "تكامل مع WhatsApp لإرسال إشعارات السداد وأوامر الشغل للموظفين والعملاء.",
        "تطبيق هاتف ميداني لمندوبي المبيعات أو مسؤولي الجرد.",
      ],
      en: [
        "Government fiscal e-invoicing compliance integration.",
        "WhatsApp Business API transactional notifications for payment reminders and receipts.",
        "Field agent mobile app for on-site sales quotes and inventory counting.",
      ],
    },
    quoteFactors: {
      ar: [
        "عدد الوحدات البرمجية المطلوبة (مبيعات / مخازن / مشتريات / محاسبة).",
        "عدد المستخدمين ومستويات الصلاحيات المتباينة.",
        "حجم البيانات القديمة المطلوبة ترحيلها من الأنظمة السابقة.",
      ],
      en: [
        "Selected module breadth (Sales CRM / Multi-Warehouse / Purchasing / Accounting).",
        "User volume, concurrent terminal seats, and permission complexity.",
        "Legacy data cleansing and migration requirements from existing software.",
      ],
    },
    iconName: "Briefcase",
  },
  {
    id: "mobile-apps",
    slug: "mobile-apps",
    category: "mobile",
    title: {
      ar: "تطبيقات الموبايل (iOS وAndroid)",
      en: "Mobile App Development",
    },
    shortDescription: {
      ar: "تطبيقات هواتف عصرية ومستقرة لأندرويد وآيفون تمنح مستخدميها تجربة سلسة.",
      en: "Smooth, reliable mobile apps for both iPhone and Android that keep your business in your customers' pockets.",
    },
    fullDescription: {
      ar: "نطور تطبيقات هواتف مخصصة تلبي متطلبات المشاريع الناشئة والشركات، مع التركيز على استقرار الأداء، سرعة التفاعل، واستهلاك البطارية المنخفض. نعتمد تقنية React Native التي تتيح بناء تطبيق متوافق تماماً مع نظامي iOS وAndroid مع الحفاظ على تجربة استخدام Native سلسة.",
      en: "We architect custom mobile applications tailored to consumer apps and field enterprise tools. Leveraging React Native, we deliver unified native performance on both iOS and Android with single-codebase velocity, low battery footprint, and fluid gestures.",
    },
    estimatedPrice: {
      ar: "25,000 – 300,000+ ج.م",
      en: "25,000 – 300,000+ EGP",
    },
    estimatedTimeline: {
      ar: "4 أسابيع – 7 شهور",
      en: "4 weeks – 7 months",
    },
    businessProblem: {
      ar: "أكثر من 80% من تصفح المستخدمين يتم عبر الهواتف، وعدم وجود تطبيق مخصص يحرم مشروعك من إمكانية التواصل المستمر عبر الإشعارات وتحقيق ولاء العميل.",
      en: "Over 80% of digital transactions originate on mobile devices; lacking a dedicated mobile app deprives your brand of instant push re-engagement and customer retention.",
    },
    whoIsItFor: {
      ar: [
        "المشاريع الناشئة التي تقدم خدمة رقمية تعتمد على الهاتف كمنصة أساسية.",
        "المتاجر والشركات التي ترغب في تطبيق مخصص لعملائها لتسهيل تكرار الشراء.",
        "المؤسسات التي تمتلك فرق عمل ميدانية (مناديب، فنيين، سائقين) تحتاج تطبيقاً لتنفيذ المهام.",
      ],
      en: [
        "Tech startups whose core service delivery revolves around on-the-go mobile users.",
        "E-commerce brands seeking direct re-orders through high-converting mobile apps.",
        "Enterprises coordinating field technicians, sales representatives, or delivery drivers.",
      ],
    },
    useCases: {
      ar: [
        "تطبيق طلب وتوصيل مع تتبع الخريطة اللحظي وحساب المسافات.",
        "تطبيق حجز مواعيد واستشارات مع تنبيهات وإشعارات فورية.",
        "تطبيق داخلي لمندوبي المبيعات لإنشاء الفواتير وطباعتها لدى العميل.",
      ],
      en: [
        "On-demand delivery app featuring real-time map tracking and dynamic dispatching.",
        "Appointment scheduling service with automated push reminders and payment holds.",
        "Field sales rep application for on-site order drafting and portable receipt syncing.",
      ],
    },
    deliverables: {
      ar: [
        "كود تطبيقي موحد ومكتوب بـ React Native وTypeScript.",
        "ملفات التثبيت الجاهزة للاختبار (APK لنظام Android وTestFlight لنظام iOS).",
        "تكامل آمن مع الواجهات الخلفية (REST API) وإدارة التوثيق وتسجيل الدخول.",
        "إعداد خدمة الإشعارات التفاعلية Push Notifications.",
        "مساعدة في تجهيز ومراجعة متطلبات النشر على المتاجر الرسمية.",
      ],
      en: [
        "Standardized React Native & TypeScript codebase with modular architecture.",
        "Compiled test builds (Android APK and Apple TestFlight invitations).",
        "Hardened REST API communication with secure token auth and offline caching.",
        "Integrated push notification services for promotional and transactional events.",
        "Store submission guidance, metadata asset compilation, and launch assistance.",
      ],
    },
    technologies: ["React Native", "TypeScript", "Node.js", "Firebase", "REST APIs"],
    optionalAddons: {
      ar: [
        "تتبع GPS لحظي في الخلفية.",
        "دمج الدفع عبر المحافظ الإلكترونية وApple Pay وGoogle Pay.",
        "محادثة مباشرة بين أطراف الخدمة (Real-time Chat).",
      ],
      en: [
        "Background real-time geolocation telemetry.",
        "Apple Pay, Google Pay, and localized digital wallet integrations.",
        "Live in-app messaging channel powered by real-time WebSockets.",
      ],
    },
    quoteFactors: {
      ar: [
        "مستوى التعقيد: شاشات عرض وAPI بسيط أم تتبع لحظي وصلاحيات متعددة.",
        "الحاجة إلى بناء الواجهة الخلفية (Backend API) من الصفر أو الربط بنظام قائم.",
        "عدد المنصات المطلوبة وتفاصيل متطلبات التوافق مع الأجهزة المختلفة.",
      ],
      en: [
        "Functional tier: View-only content app vs. multi-role real-time logistics engine.",
        "Backend scope: Building new microservices vs. connecting to existing REST endpoints.",
        "Platform scope and device-specific hardware features (Bluetooth, camera, GPS).",
      ],
    },
    iconName: "Smartphone",
  },
  {
    id: "educational-platforms",
    slug: "educational-platforms",
    category: "web",
    title: {
      ar: "المنصات التعليمية والأكاديميات",
      en: "E-Learning & Academy Platforms",
    },
    shortDescription: {
      ar: "منصات تعليمية متكاملة لتقديم الكورسات، حماية الفيديوهات من النسخ، إجراء الاختبارات، وإصدار الشهادات.",
      en: "Your own learning platform for secure video courses, tracking student progress, quizzes, and certificates.",
    },
    fullDescription: {
      ar: "نبني بوابات تعليمية مخصصة للمدرسين، المراكز التدريبية، والأكاديميات لتقديم محتواهم الرقمي باحترافية وأمان. نوفر خيارات لحماية الفيديوهات، متابعة حضور وتقدم الطلاب، وإجراء اختبارات تفاعلية بتصحيح فوري، مع دعم وسائل الدفع المحلية.",
      en: "We engineer dedicated learning management systems (LMS) for educational creators, coaching institutes, and corporate training academies. Built with video DRM protection, progress telemetry, automated exam grading, and localized Egyptian and Gulf payment gateways.",
    },
    estimatedPrice: {
      ar: "30,000 – 160,000 ج.م",
      en: "30,000 – 160,000 EGP",
    },
    estimatedTimeline: {
      ar: "6 أسابيع – 5 شهور",
      en: "6 weeks – 5 months",
    },
    businessProblem: {
      ar: "استخدام منصات عامة يفرض عمولات باهظة على كل كورس، بينما تحميل الفيديوهات بدون حماية يؤدي لتسريب المحتوى وضياع مجهودك العلمي وأرباحك.",
      en: "Generic course marketplaces siphon high sales percentages, while unprotected videos get pirated and leaked across social channels, destroying course revenues.",
    },
    whoIsItFor: {
      ar: [
        "المعلمون وأصحاب الأكاديميات الذين يملكون محتوى تعليمياً ويريدون امتلاك علامتهم المستقلة.",
        "المراكز التدريبية التي تقدم برامج تأهيلية وشهادات مهنية معتمدة.",
        "الشركات التي ترغب في منصة تدريب داخلية لتطوير مهارات موظفيها.",
      ],
      en: [
        "Educators and trainers building a direct, branded teaching academy.",
        "Training institutes offering professional certifications and cohort curriculums.",
        "Enterprises implementing internal onboarding and continuing employee education portals.",
      ],
    },
    useCases: {
      ar: [
        "أكاديمية لغات أو برمجة تقدم مسارات تعليمية باشتراك شهري أو شراء بالكورس.",
        "منصة لطلاب الثانوية والجامعات مع بنك أسئلة واختبارات دورية وتصحيح تلقائي.",
        "بوابة تدريب مهني تمنح شهادة PDF مؤمنة برمز تحقق QR عند إتمام الكورس.",
      ],
      en: [
        "Coding or language academy with monthly subscription access or per-course purchasing.",
        "School curriculum portal with extensive question banks, timed quizzes, and instant scoring.",
        "Professional certification platform issuing verifiable PDF certificates with validation QR codes.",
      ],
    },
    deliverables: {
      ar: [
        "واجهة طالب تفاعلية وسهلة الاستخدام لمتابعة الدروس والملحقات.",
        "لوحة تحكم للمدرس لرفع الفيديوهات، إنشاء الاختبارات، ومتابعة الطلاب المسجلين.",
        "تكامل مع بوابات الدفع وشحن الأكواد مسبقة الدفع.",
        "نظام اختبارات ذكي مع تحديد وقت الامتحان وتوزيع عشوائي للأسئلة.",
        "إصدار شهادات إتمام قابلة للطباعة والتحقق الرقمي.",
      ],
      en: [
        "Intuitive student portal with lesson milestones, video player, and file downloads.",
        "Instructor dashboard for curriculum sequencing, quiz composition, and enrollment metrics.",
        "Integration with payment gateways and prepaid student activation cards.",
        "Timed assessment engine with randomized question order and immediate grading.",
        "Dynamic, cryptographically verifiable completion certificates with QR validation.",
      ],
    },
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Video Streaming APIs"],
    optionalAddons: {
      ar: [
        "تقنية العلامة المائية الديناميكية (Dynamic Watermarking) لحماية الفيديوهات من التصوير.",
        "بث مباشر تفاعلي للمحاضرات (Live Sessions).",
        "تطبيق هاتف للطلاب لمشاهدة الدروس وتلقي إشعارات المواعيد.",
      ],
      en: [
        "Dynamic forensic watermarking (student phone/ID overlaid) to deter screen recordings.",
        "Live interactive webinar streaming integration.",
        "Companion iOS & Android mobile application for on-the-go student engagement.",
      ],
    },
    quoteFactors: {
      ar: [
        "مستوى حماية الفيديوهات ونوع مزود الاستضافة المختار (Vimeo OTT, Bunny.net, إلخ).",
        "طبيعة نظام الاختبارات والواجبات المطلوبة.",
        "الحاجة إلى تطبيق هاتف مصاحب للمنصة.",
      ],
      en: [
        "Video DRM complexity and chosen media streaming CDN (Bunny.net, AWS MediaLive, etc.).",
        "Sophistication of question banking, homework submission, and grading logic.",
        "Requirement for companion iOS and Android applications.",
      ],
    },
    iconName: "GraduationCap",
  },
  {
    id: "backend-api",
    slug: "backend-api",
    category: "dev",
    title: {
      ar: "تطوير الأنظمة الخلفية وواجهات البرمجة (Backend & APIs)",
      en: "Backend & API Architecture",
    },
    shortDescription: {
      ar: "نربط أنظمتك وبياناتك في مكان واحد آمن، لتعمل مواقعك وتطبيقاتك بسلاسة واستقرار.",
      en: "We connect your systems and data in one secure place, so your apps and website stay fast, safe, and reliable.",
    },
    fullDescription: {
      ar: "الأنظمة الناجحة تعتمد على بنية تحتية قوية تدير البيانات بأمان وموثوقية. نصمم وننفذ خوادم برمجية متطورة باستخدام Node.js وNestJS وPostgreSQL، مع التركيز على التوثيق المحكم، كفاءة الاستعلامات، وتأمين البيانات ضد الثغرات وهجمات الاختراق.",
      en: "World-class digital products require resilient backends capable of processing thousands of concurrent queries securely. We architect enterprise-grade APIs using Node.js, NestJS, and PostgreSQL, focusing on structured data modeling, automated testing, caching layers, and defense-in-depth security.",
    },
    estimatedPrice: {
      ar: "15,000 – 80,000+ ج.م",
      en: "15,000 – 80,000+ EGP",
    },
    estimatedTimeline: {
      ar: "3 – 8 أسابيع",
      en: "3 – 8 weeks",
    },
    businessProblem: {
      ar: "البنية الخلفية الرديئة تتسبب في بطء الاستجابة، تسريب البيانات الحساسة، وانهيار النظام بالكامل عند زيادة عدد المستخدمين المتزامنين.",
      en: "Fragile backend architecture creates latency spikes, exposes database credentials to leaks, and collapses entirely during high-traffic surges.",
    },
    whoIsItFor: {
      ar: [
        "الشركات التي تمتلك تطبيق موبايل أو واجهة مستخدم وتحتاج بناء سيرفر خلفي وقاعدة بيانات.",
        "الشركات التي ترغب في ربط أنظمتها الداخلية مع خدمات خارجية عبر واجهات APIs آمنة.",
        "المشاريع التي تعاني من بطء في قاعدة البيانات وتحتاج إعادة هيكلة وتحسين أداء.",
      ],
      en: [
        "Ventures with existing client apps needing a hardened, scalable backend service.",
        "Organizations looking to bridge disparate internal databases via secure API middleware.",
        "Companies suffering from database bottlenecks requiring architectural refactoring.",
      ],
    },
    useCases: {
      ar: [
        "واجهة برمجة تطبيقات REST API كاملة لتغذية تطبيق موبايل ومنصة ويب مشتركة.",
        "نظام إدارة توثيق وصلاحيات متقدم (JWT / Role-Based Access Control).",
        "محرك معالجة خلفي للمهام الثقيلة (Background Jobs, Reports Generation, Email dispatch).",
      ],
      en: [
        "Comprehensive REST API ecosystem serving unified data to web and native mobile apps.",
        "Hardened authentication microservice supporting JWT tokens, refresh rotations, and RBAC.",
        "Asynchronous worker queue executing background jobs, scheduled digests, and report synthesis.",
      ],
    },
    deliverables: {
      ar: [
        "كود برمجي معياري منظم بنمط Clean Architecture باستخدام NestJS أو Express.",
        "مخطط قاعدة بيانات علائقية مصمم باحترافية (PostgreSQL / Prisma).",
        "توثيق تفاعلي كامل لواجهات البرمجة بواسطة Swagger / OpenAPI.",
        "آليات أمان متقدمة تشمل حماية Rate Limiting، تعقيم المدخلات، وتشفير كلمات المرور.",
        "إعداد ملفات بيئة التشغيل Docker وسيرفرات التطوير.",
      ],
      en: [
        "Modular, clean-architecture backend codebase using NestJS or Express.",
        "Optimized relational database schema in PostgreSQL via Prisma ORM.",
        "Interactive, machine-readable API documentation with Swagger / OpenAPI.",
        "Defensive security controls: strict rate limiting, input sanitization, and bcrypt hashing.",
        "Containerized Docker setup and automated deployment configurations.",
      ],
    },
    technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
    optionalAddons: {
      ar: [
        "طبقة تخزين مؤقت فائقة السرعة باستخدام Redis Cache.",
        "ربط Webhooks للاتصال اللحظي مع خدمات الدفع والإشعارات.",
        "نظام سجلات ومراقبة مركزية للأخطاء (Error Monitoring & Auditing).",
      ],
      en: [
        "In-memory caching and session invalidation via Redis.",
        "Resilient webhook listeners with idempotency guarantees for fintech partners.",
        "Centralized telemetry and logging for proactive bug detection.",
      ],
    },
    quoteFactors: {
      ar: [
        "عدد نقاط الاتصال البرمجية (Endpoints) وتعقيد قواعد العمل والمنطق الرياضي.",
        "حجم البيانات والتعامل مع العمليات المتزامنة والمعاملات المالية.",
        "عدد الخدمات الخارجية المراد التكامل معها.",
      ],
      en: [
        "Total endpoint count and algorithmic complexity of business logic.",
        "Concurrency throughput targets and ACID financial transaction requirements.",
        "Breadth of external third-party API dependencies.",
      ],
    },
    iconName: "Server",
  },
  {
    id: "ui-ux",
    slug: "ui-ux-design",
    category: "design",
    title: {
      ar: "تصميم واجهات وتجربة المستخدم (UI/UX)",
      en: "UI/UX & Product Design",
    },
    shortDescription: {
      ar: "تصاميم رقمية عصرية وراقية تركز على سهولة الاستخدام وتوجيه العميل نحو اتخاذ القرار دون تعقيد.",
      en: "Clean, easy-to-use designs that guide your customers to take action without confusion.",
    },
    fullDescription: {
      ar: "التصميم الاحترافي ليس مجرد ألوان جذابة، بل هو فهم عميق لسلوك المستخدم وكيفية تبسيط رحلته للوصول إلى هدفه في أسرع وقت. نصمم واجهات استخدام مريحة، متوافقة مع الهوية البصرية، ومجهزة بدقة للمطورين لتحويلها إلى كود برمجي بدون أخطاء.",
      en: "Great interface design goes far beyond aesthetics; it requires an analytical understanding of user cognitive load and conversion psychology. We craft intuitive wireframes, responsive UI prototypes, and rigorous design systems ready for flawless development handoff.",
    },
    estimatedPrice: {
      ar: "6,000 – 35,000 ج.م",
      en: "6,000 – 35,000 EGP",
    },
    estimatedTimeline: {
      ar: "1 – 4 أسابيع",
      en: "1 – 4 weeks",
    },
    businessProblem: {
      ar: "الواجهات المزدحمة وغير الواضحة تشتت انتباه العميل وتجعله يغادر الموقع دون إتمام الشراء أو التواصل، مهما كانت جودة المنتج.",
      en: "Cluttered layouts and confusing navigation frustrate users, driving them away before converting, regardless of how superior your underlying product is.",
    },
    whoIsItFor: {
      ar: [
        "أصحاب المشاريع الذين يملكون فكرة جديدة ويريدون تحويلها إلى نموذج مرئي متكامل قبل البرمجة.",
        "الشركات التي تريد إعادة تصميم نظامها الحالي لتحسين رضا عملائها ومستخدميها.",
        "المؤسسات التي تحتاج نظام تصميم موحد (Design System) لجميع منتجاتها الرقمية.",
      ],
      en: [
        "Founders turning product concepts into high-fidelity interactive prototypes prior to engineering.",
        "Enterprises seeking to revitalize an outdated application UI to enhance customer satisfaction.",
        "Companies requiring a unified, scalable Design System across all web and mobile touchpoints.",
      ],
    },
    useCases: {
      ar: [
        "تصميم نموذج تفاعلي لموقع شركة أو تطبيق هاتف مع محاكاة تجربة الاستخدام.",
        "تخطيط رحلة المستخدم في متجر إلكتروني لتقليل خطوات الشراء ومضاعفة التحويل.",
        "بناء مكتبة عناصر وتصميم نظام كامل (مكونات، ألوان، خطوط) لمنتج رقمي كبير.",
      ],
      en: [
        "Interactive clickable prototype simulating the complete end-to-end user journey.",
        "E-commerce funnel wireframing minimizing checkout friction and maximizing cart completion.",
        "Comprehensive Design System token library (typography, iconography, UI states) for SaaS.",
      ],
    },
    deliverables: {
      ar: [
        "مخططات هيكلية للموقع وسيناريوهات رحلة المستخدم (Wireframes & User Flows).",
        "تصاميم بصرية كاملة وعالية الجودة لكافة الشاشات والحالات التفاعلية.",
        "دعم كامل للتصميمين العربي (RTL) والإنجليزي (LTR).",
        "نظام تصميم معتمد يضم الألوان والخطوط والأزرار والعناصر القابلة لإعادة الاستخدام.",
        "تسليم الملفات للمطورين مع جميع الأبعاد، الأيقونات، والمواصفات الفنية.",
      ],
      en: [
        "Structural wireframes and user flow architecture diagrams.",
        "High-fidelity visual design screens covering default, active, hover, and empty states.",
        "Bidirectional design layouts for both RTL (Arabic) and LTR (English).",
        "Standardized Design System containing tokens, component states, and spacing grids.",
        "Developer-ready asset export with CSS inspect specs, vector icons, and typography guides.",
      ],
    },
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research"],
    optionalAddons: {
      ar: [
        "اختبارات قابلية الاستخدام (Usability Testing) مع مستخدمين حقيقيين.",
        "تصميم هوية بصرية مكملة (الشعار والألوان الأساسية).",
        "رسوم متحركة تفاعلية للشاشات (Micro-interactions).",
      ],
      en: [
        "Moderated usability testing sessions with targeted users.",
        "Complementary digital brand guidelines (palette and typographic pairing).",
        "Bespoke motion specifications for micro-interactions.",
      ],
    },
    quoteFactors: {
      ar: [
        "عدد الشاشات الفريدة والفرعية المطلوبة.",
        "عمق أبحاث تجربة المستخدم واختبارات النماذج الأولية.",
        "الحاجة إلى تصميم ثنائي اللغة لكل شاشة.",
      ],
      en: [
        "Total unique screen and modal count.",
        "Depth of preliminary UX discovery research and persona mapping.",
        "Dual-language layout adaptation requirements.",
      ],
    },
    iconName: "Palette",
  },
  {
    id: "hosting-maintenance",
    slug: "hosting-maintenance",
    category: "cloud",
    title: {
      ar: "الاستضافة، النشر، والدعم الفني المستمر",
      en: "Cloud Deployment & Maintenance",
    },
    shortDescription: {
      ar: "تهيئة السيرفرات السحابية، شهادات الأمان SSL، وتأمين استقرار موقعك عبر نسخ احتياطي وصيانة مستمرة.",
      en: "We set up secure hosting and keep your site online, backed up, and updated — so it doesn't go down when customers need it.",
    },
    fullDescription: {
      ar: "إطلاق الموقع ليس نهاية المطاف، بل بداية تشغيله الفعلي. نتولى إعداد السيرفرات السحابية المناسبة لحجم زوارك، ضبط إعدادات النطاق (DNS)، تفعيل شهادات التشفير SSL، وتوفير خطط صيانة مرنة تتضمن النسخ الاحتياطي الدوري ومراقبة الأمان وتحديث المكتبات البرمجية.",
      en: "Launching your application is only step one; continuous reliability determines customer trust. We provision scalable cloud instances, configure DNS routing, install SSL encryption, and deliver ongoing maintenance SLAs covering scheduled backups, security updates, and performance monitoring.",
    },
    estimatedPrice: {
      ar: "1,500 – 8,000 ج.م شهرياً (أو إعداد 1,500–4,000)",
      en: "1,500 – 8,000 EGP/mo (or 1,500–4,000 setup)",
    },
    estimatedTimeline: {
      ar: "1 – 3 أيام للإعداد / صيانة مستمرة",
      en: "1 – 3 days setup / ongoing support",
    },
    businessProblem: {
      ar: "توقف الموقع عن العمل أو فقدان البيانات بسبب غياب النسخ الاحتياطي يتسبب في خسائر مادية فادحة وانهيار ثقة العملاء بعلامتك التجارية.",
      en: "Unmonitored downtime or data corruption without verified backups results in catastrophic financial losses and permanently tarnishes your brand reputation.",
    },
    whoIsItFor: {
      ar: [
        "المواقع والمتاجر التي تعتمد على الإنترنت في تحقيق مبيعات يومية متواصلة.",
        "الشركات التي لا تمتلك فريقاً تقنياً متخصصاً لإدارة السيرفرات وحل الأعطال الطارئة.",
        "المشاريع التي تحتاج نقل موقعها من استضافة بطيئة إلى سيرفر سحابي فائق السرعة.",
      ],
      en: [
        "E-commerce stores and booking platforms where every minute of downtime equals lost revenue.",
        "Businesses lacking an internal DevOps team to manage server health and security patches.",
        "Brands migrating from slow shared hosts to modern cloud infrastructure.",
      ],
    },
    useCases: {
      ar: [
        "إعداد سيرفر سحابي (VPS أو Cloud Instance) ونشر الموقع مع شهادة SSL مجانية متجددة.",
        "خطة صيانة شهرية تشمل أخذ نسخ احتياطي خارجي وتحديث حزم الأمان أسبوعياً.",
        "تدخل سريع لحل مشكلات بطء السيرفر أو معالجة الأخطاء الطارئة.",
      ],
      en: [
        "Configuring a dedicated cloud VPS, provisioning Docker containers, and enforcing auto-renewing SSL.",
        "Monthly maintenance subscription executing automated off-site backups and critical security patching.",
        "Emergency on-call triage for unexpected server anomalies or performance degradation.",
      ],
    },
    deliverables: {
      ar: [
        "نشر كامل للتطبيق على السيرفر السحابي مع ضبط النطاق والـ DNS.",
        "شهادة تشفير SSL لتأمين بيانات الزوار وعنوان الموقع بـ HTTPS.",
        "إعداد بيئة آمنة للمتغيرات السرية (Environment Variables) وتشفير كلمات المرور.",
        "تقارير دورية عن أداء الموقع والنسخ الاحتياطية المتوفرة.",
        "دعم فني واستجابة للأعطال وفق اتفاقية الخدمة المتفق عليها.",
      ],
      en: [
        "Production deployment on cloud infrastructure with calibrated DNS routing.",
        "End-to-end SSL/TLS encryption securing visitor sessions with HTTPS.",
        "Hardened environment variable secrets management and access key isolation.",
        "Periodic uptime reporting and automated backup verification logs.",
        "Responsive technical issue resolution within agreed maintenance scopes.",
      ],
    },
    technologies: ["Cloud VPS", "Docker", "Nginx", "Linux", "SSL/TLS", "DNS"],
    optionalAddons: {
      ar: [
        "إعداد شبكة توزيع المحتوى العالمية Cloudflare لحماية الموقع من هجمات DDoS.",
        "مراقبة لحظية تعمل على مدار الساعة مع تنبيهات فورية عند أي توقف.",
        "ساعات إضافية شهرية مخصصة لإجراء تعديلات برمجية وتطويرات جديدة.",
      ],
      en: [
        "Cloudflare CDN and WAF integration protecting against volumetric DDoS attacks.",
        "24/7 automated synthetic uptime monitors with immediate incident alerting.",
        "Reserved monthly engineering hours for feature additions and layout iterations.",
      ],
    },
    quoteFactors: {
      ar: [
        "حجم حركة الزوار المتوقعة واستهلاك موارد السيرفر (المعالج والذاكرة والتخزين).",
        "مستوى النسخ الاحتياطي المطلوب (يومي أم أسبوعي، محلي أم خارجي).",
        "عدد ساعات الدعم الفني المطلوبة شهرياً.",
      ],
      en: [
        "Traffic concurrency, bandwidth demand, and server resource sizing (CPU/RAM).",
        "Backup frequency requirements (daily vs. weekly, geo-redundant storage).",
        "Included monthly support hours and required emergency response SLA.",
      ],
    },
    iconName: "ShieldCheck",
  },
  {
    id: "consultation",
    slug: "consultation-audits",
    category: "consulting",
    title: {
      ar: "الاستشارات البرمجية وفحص الأنظمة (Technical Audits)",
      en: "Technical Audits & Architecture Consulting",
    },
    shortDescription: {
      ar: "مراجعة دقيقة لموقعك من حيث السرعة والأمان والجودة، مع تقرير عملي وخطة واضحة لحل المشكلات.",
      en: "A clear review of your current website or system, telling you what's wrong and how to fix it — in plain terms.",
    },
    fullDescription: {
      ar: "إذا كنت تواجه مشكلات في موقعك الحالي، أو تعاني من بطء غير مفسر، أو ترغب في تقييم جودة الكود البرمجي الذي سلمه لك فريق تطوير آخر، نقدم لك فحصاً تقنياً مستقلاً ومفصلاً يوضح مواطن الضعف في الأمان، الأداء، والتهيئة لمحركات البحث، مع توصيات عملية واضحة للتطوير.",
      en: "Whether diagnosing chronic latency, auditing security vulnerabilities, or evaluating code deliverables from third-party vendors, we deliver comprehensive architectural assessments with actionable, prioritized remediation roadmaps.",
    },
    estimatedPrice: {
      ar: "3,000 – 20,000 ج.م",
      en: "3,000 – 20,000 EGP",
    },
    estimatedTimeline: {
      ar: "3 – 10 أيام عمل",
      en: "3 – 10 business days",
    },
    businessProblem: {
      ar: "الاعتماد على افتراضات تقنية غير دقيقة أو استمرار العمل بكود ضعيف يتسبب في إهدار الميزانية وتكرار الأعطال دون الوصول للمشكلة الحقيقية.",
      en: "Operating without technical clarity leads to wasted development budgets, band-aid fixes, and recurring failures that never tackle root architectural flaws.",
    },
    whoIsItFor: {
      ar: [
        "أصحاب الأعمال الذين يرغبون في مراجعة كود مشروعهم قبل استلامه نهائياً من جهة أخرى.",
        "الشركات التي تعاني من بطء في موقعها وتريد معرفة الأسباب وحلولها المحددة.",
        "المؤسسات التي تخطط لتوسعة كبيرة وتريد التأكد من جاهزية البنية التحتية لاستيعاب الضغط.",
      ],
      en: [
        "Founders requiring third-party quality acceptance audits before signing off on vendor deliverables.",
        "E-commerce brands seeking definitive answers to page speed bottlenecks and mobile drop-offs.",
        "Growing platforms preparing for heavy marketing campaigns needing infrastructure load verification.",
      ],
    },
    useCases: {
      ar: [
        "فحص أداء شامل يقيس مؤشرات Core Web Vitals ومعدلات استهلاك موارد المتصفح.",
        "مراجعة معمارية الكود البرمجي وقواعد البيانات لرصد استعلامات SQL البطيئة.",
        "جلسة استشارية لوضع المواصفات التقنية الدقيقة (RFP) لمشروع جديد قبل البدء في التنفيذ.",
      ],
      en: [
        "Core Web Vitals deep-dive analyzing JavaScript bundle sizes, rendering paths, and asset delivery.",
        "Relational database query profiling identifying unindexed tables and N+1 query leaks.",
        "Pre-development technical scoping sessions formulating clear technical requirements (RFPs).",
      ],
    },
    deliverables: {
      ar: [
        "تقرير فني تفصيلي مصنف حسب درجات الخطورة (حرجة، متوسطة، تحسينات موصى بها).",
        "خارطة طريق تنفيذية محددة بالأولويات والخطوات اللازمة للعلاج.",
        "جلسة نقاش واستشارة مباشرة عبر Google Meet أو Zoom لشرح النتائج والإجابة على الأسئلة.",
        "تقدير تقريبي للموارد والوقت المطلوب لإصلاح المشكلات المرصودة.",
      ],
      en: [
        "Comprehensive PDF audit report categorized by severity (Critical, Warning, Optimization).",
        "Prioritized engineering remediation roadmap with concrete implementation steps.",
        "Dedicated debrief consultation call over Google Meet/Zoom to walk through recommendations.",
        "Rough-order-of-magnitude estimates for fixing identified issues.",
      ],
    },
    technologies: ["Architecture Audits", "Core Web Vitals", "Security Auditing", "Database Profiling"],
    optionalAddons: {
      ar: [
        "تكليف فريقنا البرمجي بتنفيذ التوصيات والإصلاحات مباشرة.",
        "فحص أمان واختبار اختراق محدود ضمن نطاق محدد.",
      ],
      en: [
        "Direct execution of identified architectural fixes by Code Zone Plus engineers.",
        "Scoped penetration testing and access-control vulnerability assessment.",
      ],
    },
    quoteFactors: {
      ar: [
        "حجم قاعدة الكود البرمجية واللغات والتقنيات المستخدمة.",
        "عمق الفحص المطلوب (أداء الواجهة فقط أم فحص شامل للكود وقواعد البيانات والسيرفر).",
        "عدد الأنظمة والخدمات المدمجة المراد تقييمها.",
      ],
      en: [
        "Codebase size, repository complexity, and tech stack diversity.",
        "Audit depth: Frontend Core Web Vitals vs. end-to-end backend and database profiling.",
        "Breadth of integrated third-party services and microservices.",
      ],
    },
    iconName: "FileCheck",
  },
];
