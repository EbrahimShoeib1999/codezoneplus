import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { PRICING_CATEGORIES, MARKET_COMPARISON } from "@/data/pricing";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { PROCESS_STAGES } from "@/data/process";
import { SPECIAL_OFFERS } from "@/data/offers";
import { FAQ_ITEMS } from "@/data/faq";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import { InquiryForm } from "@/components/inquiry-form";
import { HeroStudioPreview } from "@/components/hero-studio-preview";
import { InteractiveServices } from "@/components/interactive-services";
import { InteractivePortfolio } from "@/components/interactive-portfolio";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Shield,
  Zap,
  Layers,
  Sparkles,
  Smartphone,
  Server,
  Briefcase,
  UtensilsCrossed,
  ShoppingCart,
  GraduationCap,
  ChevronDown,
  Check,
} from "lucide-react";

export default async function HomePage({
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

  const heroWhatsAppUrl = buildDirectWhatsAppUrl(
    { topic: validLocale === "ar" ? "مشروع جديد واستشارة هندسية" : "New Project Discovery" },
    validLocale
  );

  const industries = [
    {
      title: { ar: "المطاعم والكافيهات", en: "Restaurants & Cafés" },
      desc: {
        ar: "رقمنة قوائم الطعام عبر رموز QR السريعة، تنظيم دورة الطلبات بشاشات المطبخ الذكية (KDS)، وربط نقاط البيع (POS).",
        en: "Table QR menus, interactive Kitchen Display Systems (KDS), and connected POS terminals for dining rooms.",
      },
      icon: UtensilsCrossed,
      example: { ar: "مثال توضيحي: مطعم يقلل وقت تحضير الأطباق بنسبة 35% عبر توجيه الطلبات إلكترونياً للشيف.", en: "Example: A dining venue accelerating kitchen prep through instant ticket routing." },
    },
    {
      title: { ar: "المتاجر والتجارة الإلكترونية", en: "Retail & E-Commerce" },
      desc: {
        ar: "متاجر إلكترونية عالية السرعة تتحمل ضغط الزوار، وتوفر تجربة شراء سلسة في خطوة واحدة مع بوابات الدفع والشحن.",
        en: "High-velocity storefronts engineered for high-concurrency flash sales, local gateways, and automated shipping.",
      },
      icon: ShoppingCart,
      example: { ar: "مثال توضيحي: علامة تجارية محلية تضاعف مبيعاتها عبر متجر فائق السرعة يدعم Paymob وإنستاباي.", en: "Example: A retail brand scaling multi-governorate orders via frictionless one-page checkout." },
    },
    {
      title: { ar: "الشركات التجارية والخدمية", en: "B2B & Service Enterprises" },
      desc: {
        ar: "أنظمة CRM لتنظيم متابعة العملاء المحتملين، مراقبة مراحل الصفقات، وأتمتة المهام اليومية لفريق المبيعات.",
        en: "Custom CRM pipelines tracking client deal stages, automated task prompts, and consolidated communication logs.",
      },
      icon: Briefcase,
      example: { ar: "مثال توضيحي: شركة خدمات تنظم أكثر من 500 استفسار شهرياً وتمنع ضياع أي عميل محتمل.", en: "Example: A commercial agency organizing 500+ monthly client leads without pipeline leakage." },
    },
    {
      title: { ar: "الشركات الناشئة ورواد الأعمال", en: "Tech Startups & Ventures" },
      desc: {
        ar: "بناء النماذج الأولية للمنتجات الرقمية (MVP) بكود نظيف وقابل للتوسع المستقبلي لجذب المستثمرين والعملاء الأوائل.",
        en: "Engineering robust, scalable Minimum Viable Products (MVPs) to validate market fit and win investor backing.",
      },
      icon: Zap,
      example: { ar: "مثال توضيحي: رائد أعمال يطلق منصته التجريبية خلال أسابيع بكود مصدري مملوك له 100%.", en: "Example: A founder launching their SaaS beta within weeks with full source code ownership." },
    },
    {
      title: { ar: "الأكاديميات والتعليم الرقمي", en: "E-Learning & Academies" },
      desc: {
        ar: "منصات تعليمية لحماية الفيديوهات من النسخ، متابعة تقدم الطلاب، إجراء الاختبارات الذكية، وإصدار الشهادات.",
        en: "Custom LMS academies featuring video forensic watermarking, quiz engines, and automated certifications.",
      },
      icon: GraduationCap,
      example: { ar: "مثال توضيحي: مدرس أو مركز تدريبي يقدم كورساته عبر بوابته الخاصة دون دفع عمولات للمنصات العامة.", en: "Example: An educational academy delivering secure video courses under its own sovereign brand." },
    },
    {
      title: { ar: "المؤسسات والمصانع (ERP مصغر)", en: "Wholesale & Operations" },
      desc: {
        ar: "ربط فواتير المشتريات، الموردين، المستودعات المتعددة، وأرصدة العملاء في لوحة تحكم مركزية محكمة الصلاحيات.",
        en: "Connecting multi-warehouse stock, purchase requisitions, and accounts receivable in one secure portal.",
      },
      icon: Server,
      example: { ar: "مثال توضيحي: مصنع يدير مخزونه وحسابات مورديه بدقة متناهية دون الاعتماد على ملفات Excel المشتتة.", en: "Example: A manufacturer unifying inventory across 3 warehouses with automated re-order triggers." },
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Redesigned with focal depth, Arabic-first headline, and interactive studio console) */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-36 overflow-hidden border-b border-neutral-200 dark:border-neutral-800/80">
        {/* Subtle background ambient glow */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#A3E635]/12 rounded-full blur-[140px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Tagline Badge */}
          <div
            className="cz-rise inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A3E635]/10 border border-[#A3E635]/30 text-[#A3E635] text-xs sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 shadow-sm"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="w-4 h-4" />
            <span>{COMPANY.tagline}</span>
          </div>

          {/* Main Headline (User-requested copy) */}
          <h1
            className="cz-rise text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white max-w-5xl mx-auto leading-[1.2] sm:leading-[1.15] mb-6 sm:mb-8 font-alexandria"
            style={{ animationDelay: "90ms" }}
          >
            {dict.brand.heroSubtitle}
          </h1>

          {/* Supporting Copy */}
          <p
            className="cz-rise text-base sm:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal"
            style={{ animationDelay: "180ms" }}
          >
            {dict.brand.heroDescription}
          </p>

          {/* Primary Action Buttons (Primary: ابدأ مشروعك, Secondary: اكتشف خدماتنا, WhatsApp Fast Connect) */}
          <div
            className="cz-rise flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-14"
            style={{ animationDelay: "270ms" }}
          >
            <Link
              href={`/${validLocale}/contact`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#bef264] transition-all lime-glow active:scale-95 shadow-md"
            >
              <span>{dict.actions.startProject}</span>
              <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
            </Link>

            <Link
              href={`/${validLocale}/services`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white font-semibold text-base px-7 py-4 rounded-xl hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
            >
              <span>{dict.actions.exploreServices}</span>
            </Link>

            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white font-semibold text-base px-5 py-4 rounded-xl hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
              title={dict.actions.chatWhatsApp}
            >
              <MessageCircle className="w-5 h-5 text-[#A3E635] fill-current" />
              <span className="sm:hidden lg:inline">{dict.actions.chatWhatsApp}</span>
            </a>
          </div>

          {/* Interactive Product Studio Preview */}
          <div className="cz-pop" style={{ animationDelay: "360ms" }}>
            <HeroStudioPreview locale={validLocale} />
          </div>

          {/* Key Value Proof Metrics */}
          <Reveal
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-14 border-t border-neutral-200 dark:border-neutral-800/80 mt-16"
            delay={120}
          >
            <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-alexandria">100%</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                {validLocale === "ar" ? "كود مخصص بدون قوالب" : "Bespoke Code / 0 Templates"}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-alexandria">Full</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                {validLocale === "ar" ? "ملكية كاملة للكود المصدري" : "Full Source Code Ownership"}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#A3E635] font-alexandria">AR + EN</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                {validLocale === "ar" ? "دعم العربية والإنجليزية" : "Arabic & English Ready"}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 shadow-sm">
              <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white font-alexandria">EGP</p>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                {validLocale === "ar" ? "تسعير واقعي وشفاف للسوق" : "Transparent Realistic Quotes"}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. SERVICES DIRECTORY HIGHLIGHT (Upgraded with Interactive Category Filter & Elevating Cards) */}
      <section className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-[#070A0D]/50 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
                {validLocale === "ar" ? "حلول تُنمّي نشاطك" : "Solutions for Your Business"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
                {dict.sections.servicesTitle}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
                {dict.sections.servicesSubtitle}
              </p>
            </div>
            <Link
              href={`/${validLocale}/services`}
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#A3E635] hover:underline"
            >
              <span>{validLocale === "ar" ? "استعراض كافة الخدمات (10 مجالات)" : "View All 10 Services"}</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${rtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
            </Link>
          </Reveal>

          {/* Interactive Services Showcase */}
          <InteractiveServices services={SERVICES} locale={validLocale} />
        </div>
      </section>

      {/* 3. INDUSTRIES SERVED */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "حلول تشغيلية متخصصة" : "Built for Your Industry"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {dict.sections.industriesTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
              {dict.sections.industriesSubtitle}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal
                  key={i}
                  delay={(i % 3) * 90}
                  className="h-full"
                >
                  <div
                    className="group h-full rounded-2xl p-7 sm:p-8 bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between hover:border-[#A3E635]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
                  >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-[#A3E635] mb-5 group-hover:scale-105 group-hover:border-[#A3E635]/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria group-hover:text-[#A3E635] transition-colors">
                      {ind.title[validLocale]}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {ind.desc[validLocale]}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                    {ind.example[validLocale]}
                  </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRICING HIGHLIGHTS (Direct from authoritative pricing-plan.html with rich interactive hierarchy) */}
      <section className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-[#070A0D]/50 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "شفافية بلا مفاجآت" : "Clear, Honest Pricing"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {dict.sections.pricingTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
              {dict.sections.pricingSubtitle}
            </p>
          </Reveal>

          {/* Pricing Preview Cards */}
          <Reveal
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 items-stretch"
            delay={120}
            y={34}
          >
            {/* Card 1: Landing Page */}
            <div className="rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-[#A3E635]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                  {validLocale === "ar" ? "المواقع السريعة" : "Fast Web"}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1 mb-2 font-alexandria">
                  {validLocale === "ar" ? "Landing Page (صفحة هبوط)" : "Single Landing Page"}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {validLocale === "ar"
                    ? "صفحة واحدة بـ Next.js، تصميم احترافي + نموذج تواصل ذكي + SEO أساسي متكامل"
                    : "Custom Next.js landing page, bespoke design, smart inquiry form, and full baseline SEO"}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-100 dark:border-neutral-800">
                  <p className="text-3xl font-extrabold text-[#A3E635] font-alexandria">
                    3,000 – 7,000 <span className="text-sm font-normal text-neutral-500">ج.م</span>
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    {validLocale === "ar" ? "المدة المتوقعة: 3–7 أيام" : "Estimated timeline: 3–7 days"}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-neutral-600 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "كود مخصص 100% بدون قوالب" : "100% Custom Next.js"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "ربط فوري بنموذج واتساب" : "Direct WhatsApp handoff"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "دعم كامل للموبايل والـ SEO" : "Mobile responsive & baseline SEO"}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/${validLocale}/pricing#sites`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-semibold hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
              >
                <span>{dict.actions.viewPricing}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
              </Link>
            </div>

            {/* Card 2: Full Corporate / E-Commerce (Popular - Featured with radiant border) */}
            <div className="rounded-3xl bg-[#0E141C] border-2 border-[#A3E635] p-8 flex flex-col justify-between relative shadow-2xl lime-glow transition-all duration-300 hover:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A3E635] text-[#0B0F12] text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
                {validLocale === "ar" ? "الأكثر طلباً للشركات" : "Most Requested for SMBs"}
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-[#A3E635] uppercase tracking-wider">
                  {validLocale === "ar" ? "موقع متكامل" : "Enterprise Web"}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-2 font-alexandria">
                  {validLocale === "ar" ? "موقع شركة + لوحة تحكم" : "Corporate Website + Admin"}
                </h3>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  {validLocale === "ar"
                    ? "موقع متكامل 5–8 صفحات مع لوحة تحكم لتعديل المحتوى والمدونة واستقبال رسائل العملاء"
                    : "5–8 responsive pages with back-office portal for content updates, news, and client leads"}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-black/40 border border-[#A3E635]/30">
                  <p className="text-3xl font-extrabold text-[#A3E635] font-alexandria">
                    15,000 – 30,000 <span className="text-sm font-normal text-neutral-400">ج.م</span>
                  </p>
                  <p className="text-xs text-neutral-400 mt-1 font-mono">
                    {validLocale === "ar" ? "المدة المتوقعة: 3–5 أسابيع" : "Estimated timeline: 3–5 weeks"}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-neutral-200">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "لوحة تحكم إدارية خاصة (CMS)" : "Bespoke Content Admin Dashboard"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "تسليم الكود المصدري كاملاً" : "Full Source Code & IP Handover"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "شامل الاستضافة والدومين للسنة الأولى" : "Includes 1st yr hosting & domain"}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/${validLocale}/pricing#sites`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#A3E635] text-[#0B0F12] text-sm font-bold hover:bg-[#bef264] transition-all lime-glow"
              >
                <span>{dict.actions.requestQuote}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
              </Link>
            </div>

            {/* Card 3: Restaurant / POS System */}
            <div className="rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 flex flex-col justify-between hover:border-[#A3E635]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
              <div>
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                  {validLocale === "ar" ? "الأنظمة وإدارة الأعمال" : "Operations Suite"}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1 mb-2 font-alexandria">
                  {validLocale === "ar" ? "نظام منيو المطاعم + المطبخ" : "Restaurant Menu + KDS"}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  {validLocale === "ar"
                    ? "طلبات الطاولات عبر QR + لوحة تحكم للإدارة + شاشة مطبخ تفاعلية (KDS) لتنظيم التحضير"
                    : "Table QR ordering + manager pricing portal + interactive Kitchen Display System (KDS)"}
                </p>

                <div className="mb-6 p-4 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-100 dark:border-neutral-800">
                  <p className="text-3xl font-extrabold text-[#A3E635] font-alexandria">
                    20,000 – 45,000 <span className="text-sm font-normal text-neutral-500">ج.م</span>
                  </p>
                  <p className="text-xs text-neutral-500 mt-1 font-mono">
                    {validLocale === "ar" ? "المدة المتوقعة: 4–7 أسابيع" : "Estimated timeline: 4–7 weeks"}
                  </p>
                </div>

                <div className="space-y-2 mb-6 text-xs text-neutral-600 dark:text-neutral-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "قائمة طعام QR ذكية للطاولات" : "Contactless QR Table Menus"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "شاشة مطبخ KDS فورية" : "Real-time Kitchen Display (KDS)"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#A3E635]" />
                    <span>{validLocale === "ar" ? "بدون اشتراكات شهرية أو نسب مبيعات" : "0 Recurring Monthly Fees / 0 Cuts"}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/${validLocale}/pricing#systems`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-semibold hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
              >
                <span>{dict.actions.viewPricing}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </Reveal>

          {/* Market Comparison Table */}
          <div className="rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
              {validLocale === "ar" ? "مقارنة الأسعار والجودة في السوق المصري" : "Market Value Comparison"}
            </h3>
            <div className="space-y-4">
              {MARKET_COMPARISON.map((m, idx) => (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    m.highlight
                      ? "bg-[#A3E635]/10 border-[#A3E635]/40 text-neutral-900 dark:text-white"
                      : "bg-neutral-50 dark:bg-[#0B0F12] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-base flex items-center gap-2 font-alexandria">
                      {m.highlight && <CheckCircle2 className="w-5 h-5 text-[#A3E635]" />}
                      <span>{m.provider[validLocale]}</span>
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-black/10 dark:bg-white/10 w-fit">
                      {m.pricing[validLocale]}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <strong className="text-neutral-900 dark:text-white">{m.pros[validLocale]}: </strong>
                    {m.cons[validLocale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. 12-STAGE DEVELOPMENT PROCESS (Connected sequence timeline) */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "طريق واضح من الفكرة للإطلاق" : "A Clear Path From Idea to Launch"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {dict.sections.processTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
              {dict.sections.processSubtitle}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STAGES.slice(0, 6).map((stage, i) => (
              <Reveal key={stage.step} delay={(i % 3) * 100} y={30} className="h-full">
                <div
                  className="group h-full p-7 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 hover:border-[#A3E635]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-[#A3E635] text-[#0B0F12] text-xs font-extrabold flex items-center justify-center font-alexandria">
                          {stage.step < 10 ? `0${stage.step}` : stage.step}
                        </span>
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                          {validLocale === "ar" ? "مرحلة" : "Stage"}
                        </span>
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-alexandria group-hover:text-[#A3E635] transition-colors">
                      {stage.title[validLocale]}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                      {stage.description[validLocale]}
                    </p>
                  </div>
                  <div className="text-xs text-[#A3E635] font-semibold pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="line-clamp-1">{stage.deliverable[validLocale]}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${validLocale}/process`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#A3E635] hover:underline"
            >
              <span>{validLocale === "ar" ? "استعراض كافة مراحل العمل الـ 12 بالتفصيل" : "Explore All 12 Stages in Detail"}</span>
              <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHY BUSINESSES CHOOSE US (customer-focused outcomes, not tech specs) */}
      <section className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-[#070A0D]/50 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "لماذا تختارنا" : "Why Businesses Choose Us"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {validLocale === "ar" ? "قيمة حقيقية لعملك، بدون تعقيد تقني" : "Real Value for Your Business, Without the Jargon"}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
              {validLocale === "ar"
                ? "لا نبيعك مصطلحات برمجية، بل نتائج تخدم نمو نشاطك: سرعة، وضوح، ملكية كاملة، ودعم حقيقي."
                : "We don't sell you buzzwords — we deliver outcomes: speed, clarity, full ownership, and dependable support."}
            </p>
          </Reveal>

          {(() => {
            const benefits = [
              {
                icon: Zap,
                title: { ar: "يعمل بسرعة وسلاسة", en: "Fast & Smooth" },
                desc: {
                  ar: "موقع أو تطبيق يفتح بسرعة ويُسهّل على عملائك اكتشاف خدماتك والتواصل معك.",
                  en: "A site or app that loads quickly and makes it easy for customers to find you and take action.",
                },
              },
              {
                icon: Smartphone,
                title: { ar: "مظهر احترافي على كل شاشة", en: "Polished on Every Screen" },
                desc: {
                  ar: "نصمم تجربتك لتبدو مميزة على الموبايل والتابلت والكمبيوتر، بالعربية والإنجليزية.",
                  en: "Your experience looks premium on mobile, tablet, and desktop, in Arabic and English.",
                },
              },
              {
                icon: Layers,
                title: { ar: "أنظمتك في مكان واحد", en: "Your Systems, Unified" },
                desc: {
                  ar: "نربط بياناتك وعملياتك لتقليل العمل اليدوي والأخطاء وتنظيم حركة شركتك.",
                  en: "We connect your data and workflows to cut manual work, reduce errors, and organize operations.",
                },
              },
              {
                icon: Shield,
                title: { ar: "أنت المالك بالكامل", en: "You Own It All" },
                desc: {
                  ar: "تستلم الكود كاملاً بدون قوالب مرهقة أو اشتراكات إجبارية تُقيّد نموّك.",
                  en: "You receive the complete code — no bloated templates or forced subscriptions holding you back.",
                },
              },
              {
                icon: Briefcase,
                title: { ar: "تواصل مباشر بلا وسطاء", en: "Direct Team Access" },
                desc: {
                  ar: "تتحدث مباشرة مع من ينفّذ مشروعك، بشفافية في التكلفة والمواعيد والمخرجات.",
                  en: "You talk directly with the people building your project — clear on cost, timing, and deliverables.",
                },
              },
              {
                icon: CheckCircle2,
                title: { ar: "دعم بعد الإطلاق", en: "Support After Launch" },
                desc: {
                  ar: "نرافقك بعد التشغيل بالصيانة والاستقرار، فلا تتوقف أعمالك بسبب أعطال مفاجئة.",
                  en: "We stay with you after launch with maintenance and reliability, so your business never stalls.",
                },
              },
            ];
            return (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Reveal key={i} delay={(i % 3) * 90} y={28} className="h-full">
                      <div className="group h-full p-7 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 hover:border-[#A3E635]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/25 flex items-center justify-center text-[#A3E635] mb-5 group-hover:scale-105 transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-alexandria">
                          {b.title[validLocale]}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {b.desc[validLocale]}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            );
          })()}
        </div>
      </section>

      {/* 7. PORTFOLIO SHOWCASE (Upgraded with interactive showcase) */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
                {validLocale === "ar" ? "منتجات رقمية حقيقية" : "Real Digital Products"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
                {dict.sections.portfolioTitle}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
                {dict.sections.portfolioSubtitle}
              </p>
            </div>
            <Link
              href={`/${validLocale}/portfolio`}
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#A3E635] hover:underline"
            >
              <span>{validLocale === "ar" ? "استعراض كافة الأعمال" : "View All Projects"}</span>
              <ArrowUpRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${rtl ? "rotate-180 group-hover:-translate-x-0.5" : ""}`} />
            </Link>
          </Reveal>

          {/* Interactive Portfolio Showcase */}
          <InteractivePortfolio items={PORTFOLIO_ITEMS} locale={validLocale} />
        </div>
      </section>

      {/* 8. SPECIAL OFFERS */}
      {SPECIAL_OFFERS.filter((o) => o.active).length > 0 && (
        <section className="py-16 sm:py-24 bg-[#0E141C] text-white border-b border-[#A3E635]/20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {SPECIAL_OFFERS.filter((o) => o.active).map((offer) => (
              <Reveal key={offer.id} y={34}>
              <div
                className="rounded-3xl border-2 border-[#A3E635] p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#12171E] to-[#0B0F12] shadow-2xl lime-glow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#A3E635] bg-[#A3E635]/15 px-3 py-1 rounded-full">
                      {validLocale === "ar" ? "عرض معتمد وخاص" : "Verified Launch Bundle"}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-alexandria">
                      {offer.title[validLocale]}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {offer.description[validLocale]}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {offer.includedFeatures[validLocale].map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-xs text-neutral-200">
                          <CheckCircle2 className="w-4 h-4 text-[#A3E635] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 w-full lg:w-auto lg:min-w-[260px] text-center">
                    {offer.originalPrice && (
                      <p className="text-sm text-neutral-400 line-through">
                        {offer.originalPrice}
                      </p>
                    )}
                    {offer.offerPrice && (
                      <p className="text-3xl font-extrabold text-[#A3E635] font-alexandria my-1">
                        {offer.offerPrice}
                      </p>
                    )}
                    <p className="text-[11px] text-neutral-400 mb-5">
                      {validLocale === "ar" ? "شامل الاستضافة والدومين للسنة الأولى" : "Includes 1st yr host & domain"}
                    </p>
                    <Link
                      href={`/${validLocale}/contact`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
                    >
                      <span>{dict.actions.startProject}</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-28 border-b border-neutral-200 dark:border-neutral-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "وضوح تام" : "Got Questions?"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {dict.sections.faqTitle}
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3">
              {dict.sections.faqSubtitle}
            </p>
          </Reveal>

          <div className="space-y-4">
            {FAQ_ITEMS.slice(0, 6).map((item, i) => (
              <Reveal key={item.id} delay={i * 60} y={16}>
                <details
                  className="group rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-6 transition-all [&_summary::-webkit-details-marker]:hidden hover:border-[#A3E635]/40"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-alexandria">
                    <span>{item.question[validLocale]}</span>
                    <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 group-hover:text-[#A3E635] transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.answer[validLocale]}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${validLocale}/faq`}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#A3E635] hover:underline"
            >
              <span>{validLocale === "ar" ? "استعراض كافة الأسئلة الشائعة في جميع الأقسام" : "View All Categorized FAQs"}</span>
              <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION INQUIRY SECTION */}
      <section className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-[#070A0D]/50" id="inquiry">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
              {validLocale === "ar" ? "ابدأ محادثتك معنا" : "Let's Talk"}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
              {dict.sections.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3">
              {dict.sections.ctaSubtitle}
            </p>
          </Reveal>

          <InquiryForm locale={validLocale} />
        </div>
      </section>
    </div>
  );
}
