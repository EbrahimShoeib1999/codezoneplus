import { PricingCategory } from "../types";

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "sites",
    title: {
      ar: "المواقع التعريفية",
      en: "Websites & Portals",
    },
    description: {
      ar: "مواقع سريعة وعصرية مبنية بـ Next.js وتصميم مخصص يعكس هوية علامتك التجارية.",
      en: "High-performance, modern websites built from scratch with Next.js and custom branding.",
    },
    items: [
      {
        id: "landing-page",
        name: {
          ar: "Landing Page (صفحة هبوط)",
          en: "Single Landing Page",
        },
        details: {
          ar: "صفحة واحدة بـ Next.js، تصميم احترافي + نموذج تواصل ذكي + SEO أساسي متكامل",
          en: "Single Next.js landing page, bespoke design, smart inquiry form, and foundational SEO",
        },
        price: {
          ar: "3,000 – 7,000 ج.م",
          en: "3,000 – 7,000 EGP",
        },
        timeline: {
          ar: "3–7 أيام",
          en: "3–7 days",
        },
      },
      {
        id: "personal-portfolio",
        name: {
          ar: "Portfolio شخصي",
          en: "Personal Portfolio",
        },
        details: {
          ar: "أنيميشن احترافي وسلس + صفحات مشاريع تفاعلية + استعراض مهارات وأعمال",
          en: "Smooth micro-animations, interactive project showcases, and CV/skills presentation",
        },
        price: {
          ar: "4,000 – 9,000 ج.م",
          en: "4,000 – 9,000 EGP",
        },
        timeline: {
          ar: "5–10 أيام",
          en: "5–10 days",
        },
      },
      {
        id: "corporate-site",
        name: {
          ar: "موقع شركة متكامل",
          en: "Corporate Business Website",
        },
        details: {
          ar: "5–8 صفحات أساسية. إضافة لغة ثانية (عربي/إنجليزي) تزيد 20–30%",
          en: "5–8 core pages. Dual-language (AR/EN) adds 20–30% to base scope",
        },
        price: {
          ar: "8,000 – 18,000 ج.م",
          en: "8,000 – 18,000 EGP",
        },
        timeline: {
          ar: "2–3 أسابيع",
          en: "2–3 weeks",
        },
        popular: true,
      },
      {
        id: "corporate-admin",
        name: {
          ar: "موقع شركة + لوحة تحكم بسيطة",
          en: "Corporate Website + Admin Portal",
        },
        details: {
          ar: "إدارة المحتوى بسهولة، استقبال رسائل العملاء، قسم مدونة أو مقالات قابلة للتحديث",
          en: "Full content management, customer inquiry inbox, and dynamic blog/news engine",
        },
        price: {
          ar: "15,000 – 30,000 ج.م",
          en: "15,000 – 30,000 EGP",
        },
        timeline: {
          ar: "3–5 أسابيع",
          en: "3–5 weeks",
        },
      },
    ],
  },
  {
    id: "stores",
    title: {
      ar: "المتاجر الإلكترونية",
      en: "E-Commerce Solutions",
    },
    description: {
      ar: "متاجر إلكترونية عالية السرعة بدون الاعتماد على قوالب بطيئة، مهيأة للطلبات والمبيعات.",
      en: "Bespoke e-commerce storefronts engineered for fast checkout and frictionless conversion.",
    },
    items: [
      {
        id: "simple-store",
        name: {
          ar: "متجر إلكتروني أساسي",
          en: "Essential Online Store",
        },
        details: {
          ar: "عرض المنتجات + سلة شراء سريعة + إدارة الطلبات + خيار الدفع عند الاستلام",
          en: "Product catalog, fast cart experience, order management, cash-on-delivery workflow",
        },
        price: {
          ar: "20,000 – 40,000 ج.م",
          en: "20,000 – 40,000 EGP",
        },
        timeline: {
          ar: "4–6 أسابيع",
          en: "4–6 weeks",
        },
      },
      {
        id: "full-store",
        name: {
          ar: "متجر إلكتروني شامل",
          en: "Enterprise E-Commerce Store",
        },
        details: {
          ar: "دفع أونلاين (Paymob/Fawry/InstaPay) + ربط الشحن + نظام كوبونات + إدارة المخزون وتقارير المبيعات",
          en: "Online gateways (Paymob/Fawry/InstaPay), automated shipping, discount coupons, stock management & reports",
        },
        price: {
          ar: "45,000 – 100,000 ج.م",
          en: "45,000 – 100,000 EGP",
        },
        timeline: {
          ar: "8–12 أسبوع",
          en: "8–12 weeks",
        },
        popular: true,
      },
    ],
  },
  {
    id: "systems",
    title: {
      ar: "الأنظمة وإدارة الأعمال (POS / ERP / CRM)",
      en: "Business Systems (POS / ERP / CRM)",
    },
    description: {
      ar: "حلول تقنية تخصصية للمطاعم، الكافيهات، والشركات لإدارة العمليات اليومية بكفاءة.",
      en: "Custom operations software for hospitality, retail, and growing enterprises.",
    },
    items: [
      {
        id: "qr-menu-simple",
        name: {
          ar: "منيو مطعم QR + استقبال طلبات",
          en: "Interactive QR Menu + Orders",
        },
        details: {
          ar: "منيو رقمي سريع عبر الباركود مع إمكانية إرسال الطلب (بدون نظام كاشير)",
          en: "Fast digital QR menu with table ordering (standalone without cashier integration)",
        },
        price: {
          ar: "8,000 – 20,000 ج.م",
          en: "8,000 – 20,000 EGP",
        },
        timeline: {
          ar: "2–4 أسابيع",
          en: "2–4 weeks",
        },
      },
      {
        id: "qr-menu-kitchen",
        name: {
          ar: "منيو مطعم متكامل (لوحة + مطبخ)",
          en: "Integrated Restaurant System (Admin + KDS)",
        },
        details: {
          ar: "طلبات الزبائن + لوحة تحكم للإدارة وتعديل الأصناف + شاشة عرض المطبخ (KDS)",
          en: "Customer ordering + management portal for pricing/stock + Kitchen Display Screen (KDS)",
        },
        price: {
          ar: "20,000 – 45,000 ج.م",
          en: "20,000 – 45,000 EGP",
        },
        timeline: {
          ar: "4–7 أسابيع",
          en: "4–7 weeks",
        },
      },
      {
        id: "simple-crm",
        name: {
          ar: "نظام CRM لإدارة العملاء والمبيعات",
          en: "Custom CRM & Lead Tracker",
        },
        details: {
          ar: "سجل بيانات العملاء، متابعة الصفقات والمهام اليومية، تقارير أداء فريق المبيعات",
          en: "Contact directory, deal pipeline, task delegation, team follow-ups, and sales analytics",
        },
        price: {
          ar: "25,000 – 60,000 ج.م",
          en: "25,000 – 60,000 EGP",
        },
        timeline: {
          ar: "5–8 أسابيع",
          en: "5–8 weeks",
        },
      },
      {
        id: "pos-system",
        name: {
          ar: "نظام نقاط البيع (POS)",
          en: "Point of Sale (POS) System",
        },
        details: {
          ar: "إدارة الكاشير، المبيعات السريعة، مراقبة المخزون الفوري، ورديات العمل وتقارير الإيرادات",
          en: "Cashier terminal, rapid checkout, real-time stock sync, staff shifts, and revenue logs",
        },
        price: {
          ar: "35,000 – 90,000 ج.م",
          en: "35,000 – 90,000 EGP",
        },
        timeline: {
          ar: "6–10 أسابيع",
          en: "6–10 weeks",
        },
      },
      {
        id: "mini-erp",
        name: {
          ar: "نظام ERP مصغر ومخصص",
          en: "Mini ERP System",
        },
        details: {
          ar: "مبيعات، مشتريات وموردين، مستودعات متعددة، قيود حسابات أساسية، وإدارة الموظفين",
          en: "Sales, purchasing, multi-warehouse inventory, core double-entry accounting & HR modules",
        },
        price: {
          ar: "80,000 – 250,000+ ج.م",
          en: "80,000 – 250,000+ EGP",
        },
        timeline: {
          ar: "3–6 شهور",
          en: "3–6 months",
        },
      },
    ],
    footerNote: {
      ar: "ملاحظة فنية: نظام الـ POS الأوفلاين (الذي يعمل بدون اتصال مستمر بالإنترنت) يزيد بنسبة 30–50% لمتطلبات المزامنة المحلية وتعريف طابعات الإيصالات.",
      en: "Technical note: Offline-first POS (supporting network disruptions) incurs 30–50% additional scope for local synchronization and thermal printer protocols.",
    },
  },
  {
    id: "edu",
    title: {
      ar: "المنصات التعليمية والأكاديميات",
      en: "Educational & LMS Platforms",
    },
    description: {
      ar: "بوابات تعليمية لتقديم الكورسات وإدارة الطلاب واشتراكات المحتوى.",
      en: "Custom e-learning portals for course delivery, student tracking, and subscriptions.",
    },
    items: [
      {
        id: "edu-simple",
        name: {
          ar: "منصة تعليمية أساسية",
          en: "Standard Course Platform",
        },
        details: {
          ar: "فهرس الكورسات، فيديوهات الشرح، تسجيل الطلاب، اشتراك أو دفع إلكتروني، لوحة المدرس",
          en: "Course catalog, video lectures, student sign-up, payment access, and instructor portal",
        },
        price: {
          ar: "30,000 – 65,000 ج.م",
          en: "30,000 – 65,000 EGP",
        },
        timeline: {
          ar: "6–9 أسابيع",
          en: "6–9 weeks",
        },
      },
      {
        id: "edu-advanced",
        name: {
          ar: "منصة تعليمية متقدمة",
          en: "Advanced Academy Platform",
        },
        details: {
          ar: "نظام اختبارات وتصحيح تلقائي، شهادات تخرج، متابعة التقدم، وحماية الفيديوهات من النسخ",
          en: "Quizzes, auto-grading, dynamic completion certificates, progress tracking, and video DRM protection",
        },
        price: {
          ar: "70,000 – 160,000 ج.م",
          en: "70,000 – 160,000 EGP",
        },
        timeline: {
          ar: "3–5 شهور",
          en: "3–5 months",
        },
      },
    ],
  },
  {
    id: "mobile",
    title: {
      ar: "تطبيقات الموبايل (React Native)",
      en: "Mobile Applications (React Native)",
    },
    description: {
      ar: "تطبيقات تعمل بسلاسة على أجهزة Android وiOS بكود برمجي موحد وعالي الأداء.",
      en: "Cross-platform mobile apps for iOS and Android powered by React Native.",
    },
    items: [
      {
        id: "app-simple",
        name: {
          ar: "تطبيق موبايل أساسي",
          en: "Basic Mobile Application",
        },
        details: {
          ar: "واجهات استخدام أنيقة + ربط مع API جاهز + إشعارات Push Notifications",
          en: "Clean UI views, integration with pre-existing REST API, push notification service",
        },
        price: {
          ar: "25,000 – 50,000 ج.م",
          en: "25,000 – 50,000 EGP",
        },
        timeline: {
          ar: "4–7 أسابيع",
          en: "4–7 weeks",
        },
      },
      {
        id: "app-medium",
        name: {
          ar: "تطبيق موبايل متوسط التعقيد",
          en: "Mid-Tier Mobile Application",
        },
        details: {
          ar: "تسجيل دخول وتوثيق، دفع إلكتروني، تكامل خرائط، محادثة فورية، ولوحة تحكم للإدارة",
          en: "Auth system, in-app payments, map integration, live chat, and admin dashboard",
        },
        price: {
          ar: "55,000 – 120,000 ج.م",
          en: "55,000 – 120,000 EGP",
        },
        timeline: {
          ar: "2–4 شهور",
          en: "2–4 months",
        },
        popular: true,
      },
      {
        id: "app-large",
        name: {
          ar: "تطبيق موبايل متقدم (Multi-Role)",
          en: "Advanced Real-Time Mobile Platform",
        },
        details: {
          ar: "تتبع لحظي بالـ GPS، صلاحيات متعددة (عميل / سائق / إدارة مثل تطبيقات التوصيل)",
          en: "Real-time tracking, multi-party roles (customer/driver/merchant), live socket architecture",
        },
        price: {
          ar: "130,000 – 300,000+ ج.م",
          en: "130,000 – 300,000+ EGP",
        },
        timeline: {
          ar: "4–7 شهور",
          en: "4–7 months",
        },
      },
    ],
    footerNote: {
      ar: "ملاحظة: رسوم وتراخيص حسابات المطورين السنوية على Google Play وApple App Store يتحملها العميل مباشرة.",
      en: "Notice: Annual developer account fees for Google Play Console and Apple Developer Program are paid directly by the client.",
    },
  },
  {
    id: "addons",
    title: {
      ar: "الإضافات والخدمات التكميلية",
      en: "Add-ons & Technical Services",
    },
    description: {
      ar: "ميزات تقنية يمكنك إضافتها لأي مشروع وفق متطلباتك التشغيلية.",
      en: "Optional technical integrations and ongoing support packages tailored to your project.",
    },
    items: [
      {
        id: "extra-lang",
        name: {
          ar: "لغة إضافية كاملة",
          en: "Additional Language Support",
        },
        details: {
          ar: "دعم اتجاه الكتابة RTL/LTR، ترجمة الواجهات ومطابقة الهوية البصرية",
          en: "Full bidirectional RTL/LTR layout handling and UI localization",
        },
        price: {
          ar: "+15% – 25%",
          en: "+15% – 25%",
        },
        timeline: {
          ar: "حسب حجم المشروع",
          en: "Scope-dependent",
        },
        unit: {
          ar: "من قيمة المشروع",
          en: "of base quote",
        },
      },
      {
        id: "payment-gateway",
        name: {
          ar: "دمج بوابة دفع إلكتروني",
          en: "Payment Gateway Integration",
        },
        details: {
          ar: "تكامل رسمي وآمن مع Paymob أو Fawry أو InstaPay مع اختبارات Webhook",
          en: "Secure integration with Paymob, Fawry, or InstaPay with verified webhook endpoints",
        },
        price: {
          ar: "3,000 – 8,000 ج.م",
          en: "3,000 – 8,000 EGP",
        },
        timeline: {
          ar: "3–7 أيام عمل",
          en: "3–7 business days",
        },
      },
      {
        id: "shipping-gateway",
        name: {
          ar: "دمج شركات الشحن والتوصيل",
          en: "Courier & Shipping Integration",
        },
        details: {
          ar: "إنشاء بوليصة الشحن تلقائياً وتتبع الشحنات مع مزودي الخدمة",
          en: "Automated consignment booking and status webhooks with local carriers",
        },
        price: {
          ar: "3,000 – 7,000 ج.م",
          en: "3,000 – 7,000 EGP",
        },
        timeline: {
          ar: "3–7 أيام عمل",
          en: "3–7 business days",
        },
      },
      {
        id: "whatsapp-api",
        name: {
          ar: "إشعارات واتساب الرسمية (WhatsApp API)",
          en: "WhatsApp Business API Alerts",
        },
        details: {
          ar: "إرسال تأكيد الطلبات، الفواتير، والتحديثات الفورية للعملاء على واتساب",
          en: "Automated transactional notifications for order updates and confirmations",
        },
        price: {
          ar: "2,500 – 6,000 ج.م",
          en: "2,500 – 6,000 EGP",
        },
        timeline: {
          ar: "3–5 أيام عمل",
          en: "3–5 business days",
        },
      },
      {
        id: "hosting-setup",
        name: {
          ar: "إعداد الاستضافة والدومين والسيرفر",
          en: "Server, DNS & Hosting Provisioning",
        },
        details: {
          ar: "تهيئة بيئة التشغيل، شهادات الأمان SSL، وضبط سجلات الـ DNS بدقة",
          en: "Infrastructure configuration, SSL certificates, DNS routing, and production deploy",
        },
        price: {
          ar: "1,500 – 4,000 ج.م",
          en: "1,500 – 4,000 EGP",
        },
        timeline: {
          ar: "1–3 أيام",
          en: "1–3 days",
        },
      },
      {
        id: "monthly-maintenance",
        name: {
          ar: "صيانة وتحديثات ودعم فني شهري",
          en: "Monthly Maintenance & Technical Support",
        },
        details: {
          ar: "نسخ احتياطي دوري، مراقبة أمان، تحديث المكتبات، ودعم فني مباشر (أو 8–15% من قيمة المشروع)",
          en: "Scheduled backups, security patching, monitoring, and uptime support (or 8–15% of project value)",
        },
        price: {
          ar: "1,500 – 8,000 ج.م",
          en: "1,500 – 8,000 EGP",
        },
        timeline: {
          ar: "شهرياً",
          en: "Monthly",
        },
        unit: {
          ar: "شهرياً",
          en: "/ month",
        },
      },
      {
        id: "hourly-work",
        name: {
          ar: "تعديلات وتطويرات خارج النطاق المتفق عليه",
          en: "Out-of-Scope Hourly Engineering",
        },
        details: {
          ar: "ساعات برمجية إضافية لأي متطلبات جديدة تُطلب بعد تسليم المشروع",
          en: "Additional engineering hours for new features requested post-handover",
        },
        price: {
          ar: "250 – 500 ج.م",
          en: "250 – 500 EGP",
        },
        timeline: {
          ar: "للساعة",
          en: "Hourly",
        },
        unit: {
          ar: "للساعة",
          en: "/ hour",
        },
      },
    ],
  },
];

export const COMMERCIAL_TIPS = [
  {
    title: { ar: "نظام الدفعات المرحلية", en: "Milestone-Based Payments" },
    desc: {
      ar: "40–50% دفعة مقدمة عند توقيع الاتفاق والبدء، 30% عند تسليم النسخة التجريبية للمعاينة، والباقي عند التسليم النهائي ونقل الكود.",
      en: "40–50% upfront to initiate architectural work, 30% upon trial deployment for client review, and the remainder upon final production handover.",
    },
  },
  {
    title: { ar: "نطاق عمل مكتوب (Scope of Work)", en: "Detailed Written Scope" },
    desc: {
      ar: "نحدد نطاقاً تفصيلياً مع 2–3 جولات تعديل مدرجة. أي ميزة جديدة خارج النطاق يتم تقييمها وتسعيرها بموافقة مسبقة دون مفاجآت.",
      en: "We define concrete deliverables and include 2–3 structured revision rounds. Out-of-scope feature requests are quoted transparently before execution.",
    },
  },
  {
    title: { ar: "مرونة في باقات المشاريع", en: "Flexible Project Packages" },
    desc: {
      ar: "نوفر 3 مستويات واضحة (أساسي / متوسط / متقدم) لكل خدمة تناسب مرحلة نمو عملك وميزانيتك المتاحة.",
      en: "We offer distinct tiers (Basic / Intermediate / Enterprise) tailored to your operational size and budgetary targets.",
    },
  },
  {
    title: { ar: "استضافة ودعم مستمر", en: "Hosting & Uptime Assurance" },
    desc: {
      ar: "نساعدك في اختيار مزود الاستضافة الأمثل وضبط السيرفرات باحترافية، مع توفير خطط صيانة مرنة تضمن استقرار منصتك.",
      en: "We configure optimal cloud hosting environments with optional ongoing SLAs to keep your web services performing at peak speeds.",
    },
  },
];

export const MARKET_COMPARISON = [
  {
    provider: { ar: "الفريلانسر المبتدئ", en: "Junior Freelancer" },
    pricing: { ar: "أقل بـ 40–60%", en: "40–60% cheaper" },
    pros: { ar: "تكلفة أولية منخفضة", en: "Low entry cost" },
    cons: {
      ar: "مخاطر عالية في عدم الالتزام، كود غير قابل للتوسع، غياب التوثيق الرسمي، وعدم وجود ضمانات استقرار.",
      en: "High risk of delivery abandonment, fragile architecture, lack of documentation, and zero warranty.",
    },
  },
  {
    provider: { ar: "شركات البرمجيات الكبيرة", en: "Large Software Agencies" },
    pricing: { ar: "1.5 إلى 3 أضعاف", en: "1.5x to 3x higher" },
    pros: { ar: "فرق عمل واسعة", en: "Large teams" },
    cons: {
      ar: "تكاليف إدارية باهظة تُحمّل على العميل، إجراءات روتينية بطيئة، وتواصل غير مباشر مع المهندسين الفعليين.",
      en: "Heavy operational overhead billed to clients, bureaucratic change processes, and detached communications.",
    },
  },
  {
    provider: { ar: "CODE ZONE PLUS", en: "CODE ZONE PLUS" },
    pricing: { ar: "سعر عادل وواقعي للسوق", en: "Realistic & Fair Market Pricing" },
    pros: {
      ar: "كود مخصص 100% بدون قوالب بطيئة، سرعة استثنائية، تسليم كامل للكود المصدري، تواصل مباشر مع المطور، ودعم فني حقيقي.",
      en: "100% custom-written code, peak performance, complete repository ownership, direct senior engineer communication, and clear guarantees.",
    },
    cons: {
      ar: "نقبل عدداً محدوداً من المشاريع في وقت واحد لضمان أعلى معايير الجودة.",
      en: "We maintain capped active project slots to ensure unmatched attention to detail on every release.",
    },
    highlight: true,
  },
];
