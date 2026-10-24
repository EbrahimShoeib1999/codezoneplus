import { ProcessStage } from "../types";

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: { ar: "الاستفسار الأولي", en: "Initial Inquiry" },
    description: {
      ar: "نتلقى تفاصيل فكرتك الأولية عبر نموذج الموقع أو واتساب للتعرف على أهدافك ونوع المنصة المطلوبة.",
      en: "We review your initial project vision through our brief form or WhatsApp to evaluate objectives and scope.",
    },
    deliverable: { ar: "فهم عام ومبدئي للمشروع والجدوى", en: "High-level feasibility & alignment check" },
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: { ar: "جلسة الاستكشاف والتحليل", en: "Discovery & Requirements" },
    description: {
      ar: "جلسة عمل تفصيلية لدراسة المستخدمين المستهدفين، تدفق العمليات اليومية، وأولويات الإطلاق.",
      en: "A structured discovery session analyzing target personas, operational bottlenecks, and core features.",
    },
    deliverable: { ar: "قائمة متطلبات فنية ووظيفية واضحة", en: "Consolidated functional requirements list" },
    icon: "Search",
  },
  {
    step: 3,
    title: { ar: "تحديد النطاق والجدوى الفنية", en: "Scope Definition & Feasibility" },
    description: {
      ar: "دراسة المعمارية التقنية المناسبة، بوابات الدفع، واجهات الـ APIs الخارجية لضمان استقرار الحل.",
      en: "Evaluating architectural trade-offs, external API constraints, and database scalability targets.",
    },
    deliverable: { ar: "مسودة نطاق العمل والمواصفات الفنية", en: "Draft Scope of Work & technical constraints" },
    icon: "Sliders",
  },
  {
    step: 4,
    title: { ar: "عرض السعر والاتفاقية", en: "Proposal & Agreement" },
    description: {
      ar: "تقديم عرض سعر شفاف يوضح المراحل، الجدول الزمني، المخرجات الدقيقة، وخطة الدفعات المالية.",
      en: "Delivering a transparent formal proposal detailing deliverables, milestone schedule, and billing.",
    },
    deliverable: { ar: "عقد مكتوب ونطاق عمل معتمد وموقع", en: "Signed agreement and approved scope document" },
    icon: "FileCheck",
  },
  {
    step: 5,
    title: { ar: "خطة المراحل والجدول الزمني", en: "Project Planning & Milestones" },
    description: {
      ar: "تقسيم العمل إلى محطات واضحة (Sprints) مع تحديد مواعيد تسليم النسخ التجريبية للمعاينة.",
      en: "Deconstructing work into focused development sprints with concrete checkpoint dates.",
    },
    deliverable: { ar: "جدول زمني تنفيذي محدد بالمواعيد", en: "Sprint timeline & milestone delivery dates" },
    icon: "Calendar",
  },
  {
    step: 6,
    title: { ar: "التصميم والمعمارية (UI/UX)", en: "UI/UX & System Architecture" },
    description: {
      ar: "تصميم واجهات المستخدم العصرية وبناء مخططات قواعد البيانات وهيكلية الكود.",
      en: "Crafting modern user interface prototypes and modeling relational database schemas.",
    },
    deliverable: { ar: "نماذج تصميم تفاعلية ومخطط البيانات", en: "Interactive UI prototypes & schema design" },
    icon: "Palette",
  },
  {
    step: 7,
    title: { ar: "التطوير البرمجي والتكامل", en: "Development & Integrations" },
    description: {
      ar: "كتابة كود نظيف بـ Next.js وTypeScript وربط بوابات الدفع والشحن والواجهات الخلفية.",
      en: "Clean-code engineering in Next.js/TypeScript and integrating payment gateways and APIs.",
    },
    deliverable: { ar: "كود برمجي فعال ومبني وفق أعلى المعايير", en: "Production-ready functional codebase" },
    icon: "Code2",
  },
  {
    step: 8,
    title: { ar: "فحص الجودة والأمان الداخلي", en: "Quality Assurance & Testing" },
    description: {
      ar: "اختبارات شاملة للتجاوب مع مختلف الشاشات، سرعة التحميل، وتدقيق الأمان وسيناريوهات الخطأ.",
      en: "Rigorous cross-device testing, Core Web Vitals profiling, and defensive security validation.",
    },
    deliverable: { ar: "تقرير فحص الجودة وتأكيد خلو النظام من العيوب", en: "QA verification & test coverage report" },
    icon: "CheckCircle2",
  },
  {
    step: 9,
    title: { ar: "مراجعة العميل والاعتماد", en: "Client Review & Acceptance" },
    description: {
      ar: "إطلاق نسخة تجريبية (Staging) للعميل لتجربة النظام وإبداء الملاحظات وجولات التعديل.",
      en: "Deploying a private staging trial for client review, walkthrough, and agreed revision tuning.",
    },
    deliverable: { ar: "اعتماد العميل للنسخة التجريبية", en: "Client sign-off on trial build" },
    icon: "Eye",
  },
  {
    step: 10,
    title: { ar: "النشر السحابي والتسليم", en: "Deployment & Handover" },
    description: {
      ar: "نشر المنصة على السيرفر السحابي المباشر، ضبط الدومين وشهادات SSL، ونقل الكود والبيانات.",
      en: "Production cloud provisioning, SSL/DNS hardening, and full source code repository transfer.",
    },
    deliverable: { ar: "موقع مباشر ومستودع كود كامل مع التوثيق", en: "Live URL, GitHub repo & admin credentials" },
    icon: "Rocket",
  },
  {
    step: 11,
    title: { ar: "فترة الضمان والدعم الفني", en: "Warranty & Support Period" },
    description: {
      ar: "فترة دعم فني مجانية متفق عليها لمراقبة الاستقرار ومعالجة أي خلل برمجي طارئ.",
      en: "Complimentary warranty window monitoring uptime and rectifying any covered edge-case bugs.",
    },
    deliverable: { ar: "استقرار تشغيلي وراحة بال كاملة", en: "Operational peace of mind & bug warranty" },
    icon: "ShieldAlert",
  },
  {
    step: 12,
    title: { ar: "الصيانة المستمرة والتطوير", en: "Ongoing Maintenance (Optional)" },
    description: {
      ar: "اتفاقية صيانة اختيارية تشمل النسخ الاحتياطي الدوري، مراقبة الأمان، وتطوير ميزات جديدة.",
      en: "Flexible ongoing SLA covering routine backups, security patches, and incremental feature sprints.",
    },
    deliverable: { ar: "تحديثات دورية وسرعة أداء دائمة", en: "Scheduled backups & proactive updates" },
    icon: "Wrench",
  },
];
