import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Layers,
} from "lucide-react";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  ["ar", "en"].forEach((locale) => {
    PORTFOLIO_ITEMS.forEach((item) => {
      params.push({ locale, slug: item.slug });
    });
  });
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug);
  if (!item) return {};

  const isAr = locale === "ar";
  return {
    title: item.title[isAr ? "ar" : "en"],
    description: item.description[isAr ? "ar" : "en"],
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const item = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  const dict = getDictionary(validLocale);
  const rtl = isRtl(validLocale);

  const inquiryWhatsAppUrl = buildDirectWhatsAppUrl(
    { topic: `حل مماثل لمشروع (${item.title[validLocale]})` },
    validLocale
  );

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <Link href={`/${validLocale}`} className="hover:text-[#A3E635]">
            {dict.nav.home}
          </Link>
          {rtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          <Link href={`/${validLocale}/portfolio`} className="hover:text-[#A3E635]">
            {dict.nav.portfolio}
          </Link>
          {rtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          <span className="text-neutral-900 dark:text-white font-semibold">
            {item.title[validLocale]}
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold text-[#A3E635] bg-[#A3E635]/10 px-3 py-1 rounded-full uppercase">
            {item.category[validLocale]}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-4 mb-6 font-alexandria">
            {item.title[validLocale]}
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {item.description[validLocale]}
          </p>

          {item.demoUrl && (
            <div className="mt-6">
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#A3E635] hover:underline"
              >
                <span>{validLocale === "ar" ? "زيارة المنصة الحية مباشرة" : "Visit Live Application"}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Challenge & Scope */}
        <div className="space-y-10 mb-16">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
              {validLocale === "ar" ? "التحدي والمشكلة التشغيلية" : "The Operational Challenge"}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {item.problem[validLocale]}
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
              {validLocale === "ar" ? "نطاق العمل الهندسي المنجز" : "Delivered Engineering Scope"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.scopeOfWork[validLocale].map((s, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 dark:bg-[#0B0F12]">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
              {validLocale === "ar" ? "أبرز الميزات والوظائف المدمجة" : "Core Implemented Features"}
            </h2>
            <div className="space-y-3">
              {item.features[validLocale].map((f, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <div className="w-2 h-2 rounded-full bg-[#A3E635]" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 font-alexandria flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#A3E635]" />
              <span>{validLocale === "ar" ? "التقنيات المستخدمة في المشروع" : "Technologies Used"}</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-800 dark:text-neutral-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="rounded-3xl bg-[#0E141C] border border-[#A3E635]/30 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-alexandria mb-3">
            {validLocale === "ar" ? "هل ترغب في بناء حل مماثل لنشاطك؟" : "Interested in Building a Similar Architecture?"}
          </h2>
          <p className="text-neutral-300 text-sm max-w-lg mx-auto mb-8">
            {validLocale === "ar"
              ? "تواصل مع مهندسينا مباشرة عبر واتساب لمناقشة متطلباتك والحصول على عرض سعر فني تفصيلي."
              : "Connect with our engineering team on WhatsApp to review your exact workflow requirements."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={inquiryWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{validLocale === "ar" ? "مناقشة المشروع عبر واتساب" : "Inquire via WhatsApp"}</span>
              <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
            </a>

            <Link
              href={`/${validLocale}/portfolio`}
              className="text-xs font-semibold text-neutral-400 hover:text-white"
            >
              {validLocale === "ar" ? "العودة لكافة الأعمال" : "Back to All Projects"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
