import { PortfolioItem } from "../types";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "codezoneplus-platform",
    slug: "codezone-platform",
    title: {
      ar: "منصة CODE ZONE PLUS الرسمية",
      en: "CODE ZONE PLUS Official Platform",
    },
    category: {
      ar: "تطوير ويب مخصص",
      en: "Custom Web Development",
    },
    description: {
      ar: "المنصة الرقمية الرسمية للشركة، مبنية بالكامل من الصفر بـ Next.js بدون قوالب جاهزة، مع دعم كامل للغتين العربية والإنجليزية، وتصميم معاصر بالهوية البصرية الرسمية.",
      en: "The official digital platform for Code Zone Plus, engineered from scratch with Next.js without templates, featuring native bidirectional localization and sleek brand aesthetics.",
    },
    problem: {
      ar: "الحاجة إلى هوية رقمية مستقلة تعبر عن كفاءة الشركة البرمجية، وتوفر تسعيراً واقعياً شفافاً، مع مسار تحويل مباشر وسريع نحو تطبيق WhatsApp.",
      en: "The need for an independent, authoritative digital presence demonstrating engineering rigor, transparent commercial pricing, and direct WhatsApp customer conversion.",
    },
    scopeOfWork: {
      ar: [
        "معمارية App Router مع توجيه ذكي يعتمد العربية لغة أساسية.",
        "دعم كامل لاتجاه الكتابة (RTL وLTR) بدون تشويه الواجهات.",
        "نظام سمات ديناميكي يدعم الوضع الليلي والنهاري.",
        "محرك تحويل ذكي يجهز رسائل WhatsApp متسقة ومخصصة لكل خدمة.",
        "تهيئة شاملة لمحركات البحث (SEO) وسرعة تحميل فائقة.",
      ],
      en: [
        "Next.js App Router architecture with Arabic-first route defaults.",
        "True bidirectional styling (RTL and LTR) without layout distortion.",
        "Dynamic theme provider supporting bespoke dark and light palettes.",
        "Dynamic WhatsApp message synthesizer tailored to each inquiry.",
        "Full technical SEO metadata, semantic indexing, and sub-second paint times.",
      ],
    },
    features: {
      ar: [
        "دليل خدمات تفصيلي ومخصص لكل من المجالات العشرة الأساسية.",
        "جدول تسعير شفاف وتفاعلي مع فلاتر للميزانيات والإضافات.",
        "نموذج استفسار ذكي مدمج مع التحقق من صحة البيانات.",
        "قسم الأسئلة الشائعة والسياسات التعاقدية وحقوق الملكية.",
      ],
      en: [
        "Comprehensive 10-category services directory with dedicated slug routes.",
        "Interactive pricing matrix with scope filters and optional add-ons.",
        "Validated client inquiry form directly connected to WhatsApp handoff.",
        "Extensive categorized FAQ, handover deliverables, and IP policy guides.",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React"],
    demoUrl: "https://codezoneplus.com",
    verified: true,
  },
  {
    id: "restaurant-pos-kds",
    slug: "restaurant-pos-kds",
    title: {
      ar: "نظام منيو المطاعم وشاشة المطبخ الذكية (KDS)",
      en: "Restaurant QR Ordering & Kitchen Display (KDS)",
    },
    category: {
      ar: "أنظمة ضيافة ومطاعم",
      en: "Hospitality & Restaurant Software",
    },
    description: {
      ar: "حل برمجي متكامل لإدارة صالات المطاعم والكافيهات، يجمع بين المنيو السريع عبر QR كود وشاشات عرض المطبخ اللحظية لتنظيم تحضير الأطباق.",
      en: "An integrated hospitality suite combining instant table QR ordering with real-time Kitchen Display screens to streamline order fulfillment.",
    },
    problem: {
      ar: "تأخر وصول طلبات الزبائن للمطبخ واختناق الخدمة في أوقات الذروة مع تكاليف إعادة طباعة قوائم الطعام الورقية.",
      en: "Peak-hour ticket delays, paper receipt clutter, and the recurring financial burden of reprinting physical menus upon price shifts.",
    },
    scopeOfWork: {
      ar: [
        "واجهة منيو رقمي سريعة تعمل عبر مسح الـ QR بدون تنزيل أي تطبيق.",
        "لوحة تحكم إدارية لتعديل الأسعار وإخفاء الأصناف المنتهية بلحظة واحدة.",
        "شاشة تفاعلية للمطبخ تعرض الطلبات مرتبة حسب وقت الانتظار.",
        "إشعارات صوتية ومرئية عند وصول أوردر جديد.",
      ],
      en: [
        "Zero-install responsive QR menu view with high-res food imagery.",
        "Manager back-office for instant 86-item toggles and pricing adjustments.",
        "Kitchen prep display categorizing orders by elapsed wait time.",
        "Audio and visual pulse triggers upon new ticket arrivals.",
      ],
    },
    features: {
      ar: [
        "توجيه الطلبات تلقائياً حسب نوع القسم (مشروبات / وجبات ساخنة / حلويات).",
        "تحديد أرقام الطاولات وتفاصيل طلب كل طاولة بدقة.",
        "إحصائيات الأصناف الأكثر طلباً ومعدلات سرعة تحضير الأطباق.",
      ],
      en: [
        "Automatic ticket routing by kitchen section (Barista / Hot Line / Desserts).",
        "Granular table number tags and special preparation instructions.",
        "Throughput analytics on popular dishes and average preparation intervals.",
      ],
    },
    technologies: ["Next.js", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL"],
    verified: true,
  },
  {
    id: "business-crm-lead-tracker",
    slug: "business-crm",
    title: {
      ar: "نظام إدارة العملاء والمبيعات (CRM)",
      en: "Client & Sales Pipeline CRM",
    },
    category: {
      ar: "أنظمة إدارة أعمال",
      en: "Business Management Systems",
    },
    description: {
      ar: "نظام سحابي مرن لتنظيم علاقات العملاء ومتابعة الصفقات ومراحل عروض الأسعار لفرق المبيعات والشركات الخدمية.",
      en: "A cloud-based CRM designed to centralize customer profiles, track sales pipeline stages, and automate follow-ups for B2B service teams.",
    },
    problem: {
      ar: "ضياع فرص البيع بسبب عدم متابعة العملاء المحتملين وتشتت أرقام الهواتف والمحادثات على هواتف الموظفين الشخصية.",
      en: "Missed sales opportunities due to untracked leads, forgotten follow-up dates, and fragmented customer chats dispersed across personal phones.",
    },
    scopeOfWork: {
      ar: [
        "سجل موحد لبيانات العملاء والاتصالات والصفقات الجارية.",
        "لوحة خط أنابيب المبيعات (Pipeline Kanban) بنظام السحب والإفلات.",
        "تحديد مواعيد التذكير التلقائي بمكالمات المتابعة والاجتماعات.",
        "صلاحيات متعددة المستويات تعزل بيانات كل مسؤول مبيعات عن الآخرين.",
      ],
      en: [
        "Unified customer registry documenting call histories and deal stages.",
        "Visual drag-and-drop Kanban pipeline illustrating deal progression.",
        "Automated calendar follow-up reminders and scheduled task prompts.",
        "Role-based access separating individual rep territories from management logs.",
      ],
    },
    features: {
      ar: [
        "تصدير واستيراد سجلات العملاء بسهولة عبر ملفات Excel.",
        "تقارير رسومية لمعدلات إغلاق الصفقات وأداء فريق المبيعات.",
        "تكامل مباشر مع أرقام واتساب للتواصل السريع بضغطة واحدة.",
      ],
      en: [
        "Seamless Excel import and export for contact lists and deal histories.",
        "Executive charting for win/loss ratios and quarterly revenue projections.",
        "One-click WhatsApp click-to-chat triggers for immediate sales engagement.",
      ],
    },
    technologies: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Tailwind CSS"],
    verified: true,
  },
  {
    id: "ecommerce-custom-store",
    slug: "custom-ecommerce-store",
    title: {
      ar: "منصة تجارة إلكترونية مخصصة وعالية السرعة",
      en: "High-Velocity Custom E-Commerce Store",
    },
    category: {
      ar: "متاجر إلكترونية",
      en: "E-Commerce Solutions",
    },
    description: {
      ar: "متجر إلكتروني متكامل يدعم الكتالوجات الضخمة والتحميل اللحظي للمنتجات، مع دعم بوابات الدفع المصرية والشحن السريع.",
      en: "A high-concurrency online storefront engineered for instantaneous catalog navigation, local Egyptian payment gateways, and automated logistics.",
    },
    problem: {
      ar: "بطء المتاجر المعتمدة على إضافات WordPress الجاهزة وهروب المشترين عند بطء صفحة الدفع وتكلفة الاشتراكات المتكررة.",
      en: "Slow page transitions on bloated WooCommerce setups that trigger cart abandonment during high-traffic checkout flows.",
    },
    scopeOfWork: {
      ar: [
        "واجهة متجر سريعة مع فلاتر لحظية للمنتجات والأسعار والتصنيفات.",
        "سلة شراء سريعة وتجربة دفع في خطوة واحدة بدون تعقيدات.",
        "تكامل مع بوابات الدفع Paymob وFawry مع التحقق الفوري من نجاح المعاملة.",
        "لوحة إدارة متجر تتيح تحديث المخزون والأسعار بسهولة.",
      ],
      en: [
        "Instantaneous client-side filtering by category, price, and attributes.",
        "Single-step checkout flow minimizing cart abandonment rates.",
        "Verified webhook integration with Paymob and Fawry payment gateways.",
        "Merchant back-office for rapid stock counts, product uploads, and order dispatch.",
      ],
    },
    features: {
      ar: [
        "دعم خيارات الدفع عند الاستلام والدفع الإلكتروني المسبق.",
        "نظام كوبونات وخصومات بنسب مئوية أو مبالغ ثابتة.",
        "إشعارات فورية عبر البريد الإلكتروني والـ SMS عند وصول طلب جديد.",
      ],
      en: [
        "Dual support for Cash on Delivery (COD) and upfront card payments.",
        "Promotional coupon engine with usage limits and discount thresholds.",
        "Automated customer confirmation alerts and merchant notifications.",
      ],
    },
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    verified: true,
  },
];
