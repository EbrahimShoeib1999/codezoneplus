import { HandoverItem } from "../types";

export const HANDOVER_DELIVERABLES: HandoverItem[] = [
  {
    category: { ar: "الكود المصدري والأصول البرمجية", en: "Source Code & Repositories" },
    included: {
      ar: [
        "الكود المصدري الكامل للمشروع مكتوباً بـ TypeScript وNext.js.",
        "نقل صلاحيات أو ملكية مستودع الكود (GitHub / GitLab).",
        "ملفات الإعداد وحزم التثبيت دون أي تشفير أو قيود.",
        "كافة الأيقونات والصور والملفات المتضمنة في واجهات النظام.",
      ],
      en: [
        "Complete source code written cleanly in TypeScript and Next.js.",
        "Ownership or admin access transfer of the git repository (GitHub/GitLab).",
        "Unobfuscated dependency configurations and clean build scripts.",
        "Vector icons, UI assets, and media files incorporated into the layout.",
      ],
    },
    conditional: {
      ar: [
        "تراخيص الخطوط أو المكتبات التجارية الخاصة بالطرف الثالث (يتحملها العميل).",
        "كود أدوات أو مكتبات طرف ثالث غير قابلة للنقل قانونياً.",
      ],
      en: [
        "Proprietary third-party commercial software and paid font licenses.",
        "Non-transferable vendor SDK licenses requiring direct client subscription.",
      ],
    },
  },
  {
    category: { ar: "بيئة التشغيل والنشر السحابي", en: "Deployment & Environment" },
    included: {
      ar: [
        "نشر النسخة النهائية على بيئة الاستضافة السحابية المعتمدة.",
        "قالب المتغيرات السرية الموثق (.env.example).",
        "تفعيل شهادة التشفير SSL وحماية النطاق بـ HTTPS.",
        "إعداد وتوجيه سجلات الـ DNS على الدومين الرسمي.",
      ],
      en: [
        "Production deployment on designated cloud hosting provider.",
        "Documented environment variable template (.env.example).",
        "Automated SSL/TLS encryption certificate setup (HTTPS).",
        "Calibrated DNS records and custom domain mapping.",
      ],
    },
    conditional: {
      ar: [
        "حسابات المطورين لنشر تطبيقات الموبايل على Google Play وApp Store.",
        "تكاليف رسوم اشتراكات السيرفر السحابي الشهرية أو السنوية.",
      ],
      en: [
        "Apple Developer Program and Google Play Console developer registrations.",
        "Ongoing monthly or annual cloud hosting server infrastructure invoices.",
      ],
    },
  },
  {
    category: { ar: "قواعد البيانات والتوثيق الإداري", en: "Database & Documentation" },
    included: {
      ar: [
        "مخطط قاعدة البيانات (Schema) وملفات الترحيل (Migrations).",
        "بيانات الدخول الإدارية الأساسية للمديرين مع شرح خطوات تغييرها.",
        "دليل تشغيلي واستخدام أساسي لإدارة المحتوى والأصناف والطلبات.",
        "جلسة استعراض وشرح عملي (Walkthrough) لتدريب فريق العمل.",
      ],
      en: [
        "Database schema definitions and migration scripts.",
        "Primary administrative credentials with password-rotation instructions.",
        "Operational user guide for managing products, orders, and content.",
        "Interactive walkthrough handover session with client stakeholders.",
      ],
    },
    conditional: {
      ar: [
        "ترحيل بيانات ضخمة من أنظمة سابقة (يتم تقييمها وتسعيرها حسب الحجم).",
        "توثيق هندسي ممتد للـ Architecture في المشاريع الضخمة.",
      ],
      en: [
        "Complex legacy data scrubbing and ETL migrations (scoped separately).",
        "Extended enterprise architectural specification whitepapers.",
      ],
    },
  },
];

export const CLIENT_RESPONSIBILITIES = [
  {
    title: { ar: "وضوح المتطلبات والأهداف", en: "Clear Requirements" },
    desc: {
      ar: "تقديم وصف دقيق لاحتياجات المشروع، والجمهور المستهدف، والميزات المطلوبة لتفادي سوء الفهم.",
      en: "Supplying comprehensive functional briefs, target audience definitions, and operational goals.",
    },
  },
  {
    title: { ar: "توفير المحتوى والأصول المعتمدة", en: "Approved Brand Assets" },
    desc: {
      ar: "تسليم الشعار بدقة عالية، نصوص الصفحات، صور المنتجات، والهوية البصرية في الوقت المناسب.",
      en: "Providing high-resolution vector logos, marketing copy, photography, and brand identity guides.",
    },
  },
  {
    title: { ar: "بيانات الاعتماد والربط الخارجي", en: "Third-Party Credentials" },
    desc: {
      ar: "توفير مفاتيح الربط البرمجي لبوابات الدفع (Paymob/Fawry) وحسابات الاستضافة والدومين.",
      en: "Supplying required API keys for payment gateways, shipping providers, and server hosting access.",
    },
  },
  {
    title: { ar: "صاحب قرار محدد وملاحظات منتظمة", en: "Designated Decision Maker" },
    desc: {
      ar: "تعيين مسؤول محدد لمراجعة المخرجات وإبداء الملاحظات خلال المدد المتفق عليها لتجنب تأخير التسليم.",
      en: "Designating a single point-of-contact to consolidate team feedback and approve milestones promptly.",
    },
  },
];

export const SCOPE_CHANGE_WORKFLOW = [
  {
    step: "1",
    title: { ar: "طلب التعديل (Request)", en: "Change Request" },
    desc: {
      ar: "يرسل العميل تفاصيل الميزة أو التعديل الجديد خارج نطاق العمل المعتمد.",
      en: "Client submits requested feature additions outside the baseline Scope of Work.",
    },
  },
  {
    step: "2",
    title: { ar: "دراسة الأثر (Impact Assessment)", en: "Impact Assessment" },
    desc: {
      ar: "يقوم الفريق بدراسة تأثير التعديل على المعمارية، الأمان، والجدول الزمني.",
      en: "Engineering evaluates feasibility, architectural trade-offs, and timeline impact.",
    },
  },
  {
    step: "3",
    title: { ar: "تقدير التكلفة والوقت (Revised Estimate)", en: "Quotation & Schedule" },
    desc: {
      ar: "نقدم عرض سعر محدد ومكتوب يوضح التكلفة الإضافية والأيام المطلوبة للتنفيذ.",
      en: "We provide an explicit estimate covering additional hours and delivery adjustments.",
    },
  },
  {
    step: "4",
    title: { ar: "موافقة العميل (Client Approval)", en: "Written Approval" },
    desc: {
      ar: "يوافق العميل كتابياً على العرض قبل الشروع في كتابة أي سطر برمجي جديد.",
      en: "Client authorizes the change order in writing before implementation commences.",
    },
  },
  {
    step: "5",
    title: { ar: "التنفيذ والجدولة (Implementation)", en: "Scheduled Delivery" },
    desc: {
      ar: "تُجدول الميزة الجديدة وتُدمج بسلاسة في دورة التطوير دون التأثير على استقرار النظام.",
      en: "The approved module is slotted into the development sprint and shipped cleanly.",
    },
  },
];
