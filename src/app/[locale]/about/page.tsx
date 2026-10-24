import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Code2,
  ShieldCheck,
  Target,
  Eye,
  Heart,
  Cpu,
  Layers,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "عن الشركة وفلسفتنا الهندسية" : "About Us & Engineering Philosophy",
    description: isAr
      ? "تعرف على CODE ZONE PLUS، وكالة تطوير البرمجيات والحلول الرقمية المخصصة في مصر والشرق الأوسط."
      : "Learn about CODE ZONE PLUS, an independent software development agency engineering custom digital platforms.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const dict = getDictionary(validLocale);
  const rtl = isRtl(validLocale);

  const whatsAppUrl = buildDirectWhatsAppUrl(
    { topic: validLocale === "ar" ? "التعرف على خدمات الشركة والتعاون" : "Partnership & Capabilities" },
    validLocale
  );

  const pillars = [
    {
      title: { ar: "رؤيتنا", en: "Our Vision" },
      desc: {
        ar: "أن نكون الشريك التقني الموثوق للشركات الطموحة في مصر والشرق الأوسط، بتقديم برمجيات ذات جودة عالمية تجمع بين جمال التصميم وقوة الأداء الهندسي.",
        en: "To be the premier engineering partner for forward-thinking enterprises across Egypt and the Gulf, bridging aesthetic elegance with uncompromising software reliability.",
      },
      icon: Eye,
    },
    {
      title: { ar: "رسالتنا", en: "Our Mission" },
      desc: {
        ar: "تمكين أصحاب الأعمال من امتلاك أصول رقمية مستقلة مبنية بكود مخصص من الصفر، خالية من القيود وتكاليف الاشتراكات الإضافية، ومجهزة للنمو المستدام.",
        en: "To empower business leaders with sovereign, custom-coded software assets free from template limitations and vendor lock-in, engineered for long-term scale.",
      },
      icon: Target,
    },
    {
      title: { ar: "قيمنا الجوهرية", en: "Core Values" },
      desc: {
        ar: "الشفافية المطلقة في التسعير والمواعيد، النزاهة الهندسية في كتابة الكود، والالتزام الكامل بضمان استقرار المشاريع بعد التسليم.",
        en: "Absolute transparency in pricing and deadlines, uncompromising engineering craftsmanship, and dedicated post-launch operational support.",
      },
      icon: Heart,
    },
  ];

  const philosophies = [
    {
      title: { ar: "الكود المخصص مقابل القوالب الجاهزة", en: "Custom Code vs. Pre-made Templates" },
      desc: {
        ar: "نرفض استخدام القوالب البطيئة أو المنصات الجاهزة التي تكبل نمو العميل. كل سطر برمجي نكتبه مصمم لخدمة متطلباتك بدقة وبأعلى سرعة ممكنة.",
        en: "We reject bloated, slow templates that handicap business agility. Every line of code is purposefully tailored to your operational requirements.",
      },
    },
    {
      title: { ar: "الملكية الكاملة للعميل", en: "Total Client Code Ownership" },
      desc: {
        ar: "نؤمن بأن الكود الذي دفع العميل مقابله يجب أن يكون ملكاً كاملاً له دون أي قيود، مع توثيق شامل يتيح لأي فريق برمجي متابعة التطوير مستقبلاً.",
        en: "You paid for your software—you own it completely. We transfer full git repository rights, environment templates, and operational documentation upon completion.",
      },
    },
    {
      title: { ar: "السرعة وتجربة المستخدم أولاً", en: "Sub-Second Performance & UX" },
      desc: {
        ar: "نصمم بنية الواجهات لتحقيق تحميل في أقل من ثانية، مع مراعاة أدق تفاصيل تجربة المستخدم على الهواتف الذكية ودعم الاتجاهين العربي والإنجليزي.",
        en: "Architecting for sub-second paint times across mobile devices, supporting native bidirectional RTL/LTR layouts without visual distortion.",
      },
    },
    {
      title: { ar: "الأمان وحماية البيانات كأولوية", en: "Defense-in-Depth Security" },
      desc: {
        ar: "الأمان ليس ميزة إضافية، بل هو معيار أساسي في كل مرحلة: تشفير HTTPS، تعقيم المدخلات، حماية مفاتيح السيرفر، وتشفير التوثيق.",
        en: "Security is non-negotiable: enforced HTTPS, strict input sanitization, token rotation, and isolated cloud environment variable secrets.",
      },
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "وكالة برمجية مستقلة" : "Independent Software Agency"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {validLocale === "ar" ? "عن CODE ZONE PLUS" : "About CODE ZONE PLUS"}
          </h1>
          <p className="text-xs uppercase tracking-widest font-black text-[#A3E635] mt-3">
            {COMPANY.tagline}
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 mt-6 leading-relaxed">
            {validLocale === "ar"
              ? "شركة تطوير برمجيات وحلول رقمية تخدم قطاعات الأعمال في مصر والخليج والأسواق الدولية. نبني المواقع الإلكترونية، المتاجر فائقة السرعة، أنظمة إدارة الأعمال (CRM / ERP)، وأنظمة المطاعم وتطبيقات الموبايل بكود مخصص يلبي تطلعاتك التشغيلية."
              : "A software development and digital solutions company serving enterprises and high-growth ventures across Egypt, the Gulf, and international markets. We engineer websites, e-commerce storefronts, business ERP/CRM platforms, hospitality software, and mobile apps."}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/20 flex items-center justify-center text-[#A3E635] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
                  {p.title[validLocale]}
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.desc[validLocale]}
                </p>
              </div>
            );
          })}
        </div>

        {/* Engineering Philosophies */}
        <div className="rounded-3xl bg-[#0E141C] text-white border border-[#A3E635]/25 p-8 sm:p-14 mb-20 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#A3E635] uppercase">
              {validLocale === "ar" ? "فلسفتنا في البناء" : "Our Engineering Tenets"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-alexandria mt-2 text-white">
              {validLocale === "ar" ? "معايير الجودة التي لا نساوم عليها" : "Engineering Standards We Never Compromise"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophies.map((phil, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-[#A3E635] mb-2 font-alexandria">
                  {phil.title[validLocale]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {phil.desc[validLocale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white mb-3 font-alexandria">
            {validLocale === "ar" ? "دعنا نناقش خطوتك الرقمية القادمة" : "Let's Engineer Your Next Digital Milestone"}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8">
            {validLocale === "ar"
              ? "فريقنا مستعد لدراسة فكرتك وتقديم استشارة فنية وخطة عمل واضحة."
              : "Connect directly with our senior engineering team on WhatsApp to review your technical roadmap."}
          </p>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{dict.actions.chatWhatsApp}</span>
            <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
          </a>
        </div>
      </div>
    </div>
  );
}
