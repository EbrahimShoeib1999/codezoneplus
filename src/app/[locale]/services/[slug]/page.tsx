import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { SERVICES } from "@/data/services";
import { FAQ_ITEMS } from "@/data/faq";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowUpRight,
  MessageCircle,
  CheckCircle2,
  Tag,
  Clock,
  Layers,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  ["ar", "en"].forEach((locale) => {
    SERVICES.forEach((service) => {
      params.push({ locale, slug: service.slug });
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
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  const isAr = locale === "ar";
  return {
    title: service.title[isAr ? "ar" : "en"],
    description: service.shortDescription[isAr ? "ar" : "en"],
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const dict = getDictionary(validLocale);
  const rtl = isRtl(validLocale);

  const serviceWhatsAppUrl = buildDirectWhatsAppUrl(
    {
      serviceName: service.title[validLocale],
      price: service.estimatedPrice[validLocale],
    },
    validLocale
  );

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const relevantFaqs = FAQ_ITEMS.slice(0, 4);

  return (
    <div className="w-full py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8">
          <Link href={`/${validLocale}`} className="hover:text-[#A3E635]">
            {dict.nav.home}
          </Link>
          {rtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          <Link href={`/${validLocale}/services`} className="hover:text-[#A3E635]">
            {dict.nav.services}
          </Link>
          {rtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
          <span className="text-neutral-900 dark:text-white font-semibold">
            {service.title[validLocale]}
          </span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 sm:p-14 mb-16 shadow-lg">
          <div className="max-w-4xl">
            <span className="text-xs font-mono font-bold text-[#A3E635] bg-[#A3E635]/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {service.category.toUpperCase()}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-4 mb-6 font-alexandria leading-tight">
              {service.title[validLocale]}
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
              {service.fullDescription[validLocale]}
            </p>

            {/* Estimates Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#A3E635]" />
                <span className="text-xs text-neutral-500">{validLocale === "ar" ? "التكلفة التقديرية:" : "Estimated Price:"}</span>
                <span className="text-sm font-bold text-neutral-900 dark:text-white">
                  {service.estimatedPrice[validLocale]}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A3E635]" />
                <span className="text-xs text-neutral-500">{validLocale === "ar" ? "المدة المتوقعة:" : "Estimated Timeline:"}</span>
                <span className="text-sm font-bold text-neutral-900 dark:text-white">
                  {service.estimatedTimeline[validLocale]}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={serviceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {validLocale === "ar" ? "اطلب عرض سعر لهذه الخدمة عبر واتساب" : "Inquire About This Service via WhatsApp"}
                </span>
                <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
              </a>

              <Link
                href={`/${validLocale}/contact?service=${encodeURIComponent(service.title[validLocale])}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-neutral-300 dark:border-neutral-800 text-sm font-semibold hover:border-[#A3E635] hover:text-[#A3E635] transition-all"
              >
                <span>{dict.actions.startProject}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-12">
            {/* The Business Problem */}
            <div className="rounded-2xl p-8 bg-neutral-50 dark:bg-[#0E1318] border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
                {validLocale === "ar" ? "المشكلة التجارية التي نحلها" : "The Business Problem We Address"}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {service.businessProblem[validLocale]}
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
                {validLocale === "ar" ? "المخرجات التي تستلمها في هذا المشروع" : "Expected Deliverables"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables[validLocale].map((d, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is it for */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
                {validLocale === "ar" ? "لمن تناسب هذه الخدمة؟" : "Who Is This Suitable For?"}
              </h2>
              <div className="space-y-3">
                {service.whoIsItFor[validLocale].map((who, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#A3E635]" />
                    <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                      {who}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
                {validLocale === "ar" ? "سيناريوهات وحالات استخدام عملية" : "Common Use Cases"}
              </h2>
              <div className="space-y-4">
                {service.useCases[validLocale].map((uc, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    {uc}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 font-alexandria flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#A3E635]" />
                <span>{validLocale === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-4 font-alexandria flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A3E635]" />
                <span>{validLocale === "ar" ? "إضافات وميزات اختيارية" : "Optional Add-ons"}</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                {service.optionalAddons[validLocale].map((add, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#A3E635] font-bold">+</span>
                    <span>{add}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Factors */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#0E1318] border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
                {validLocale === "ar" ? "عوامل تحدد السعر النهائي" : "Quote Determining Factors"}
              </h3>
              <ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                {service.quoteFactors[validLocale].map((qf, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400">•</span>
                    <span>{qf}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Relevant FAQs */}
        <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria text-center">
            {validLocale === "ar" ? "أسئلة شائعة تهمك" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {relevantFaqs.map((faq) => (
              <details
                key={faq.id}
                className="group rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none text-base font-bold text-neutral-900 dark:text-white font-alexandria">
                  <span>{faq.question[validLocale]}</span>
                  <ChevronDown className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {faq.answer[validLocale]}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Related Services */}
        <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 font-alexandria">
            {validLocale === "ar" ? "خدمات أخرى قد تهمك" : "Related Services"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/${validLocale}/services/${rel.slug}`}
                className="p-6 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 hover:border-[#A3E635]/40 transition-all shadow-sm"
              >
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 font-alexandria">
                  {rel.title[validLocale]}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4">
                  {rel.shortDescription[validLocale]}
                </p>
                <span className="text-xs font-bold text-[#A3E635] flex items-center gap-1">
                  <span>{dict.actions.learnMore}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
