import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { PRICING_CATEGORIES, COMMERCIAL_TIPS, MARKET_COMPARISON } from "@/data/pricing";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import { Reveal } from "@/components/reveal";
import {
  ArrowUpRight,
  MessageCircle,
  Clock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "خطة الأسعار وباقات البرمجة" : "Pricing Plans & Custom Software Packages",
    description: isAr
      ? "أسعار واقعية وتقديرية لتطوير البرمجيات في مصر 2026: المواقع، المتاجر الإلكترونية، أنظمة المطاعم، نقاط البيع، وتطبيقات الموبايل."
      : "Realistic 2026 custom software development pricing catalog: corporate websites, e-commerce, restaurant POS/KDS, and React Native apps.",
  };
}

export default async function PricingPage({
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

  const customQuoteWhatsAppUrl = buildDirectWhatsAppUrl(
    { topic: validLocale === "ar" ? "طلب عرض سعر مخصص" : "Custom Quote Inquiry" },
    validLocale
  );

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "باقات وأسعار واضحة" : "Clear Packages & Pricing"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {dict.sections.pricingTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {validLocale === "ar"
              ? "أسعار واقعية للسوق المصري لمشاريع تُبنى خصيصاً لك من الصفر. أقل تكلفة من الشركات الكبيرة، وأضمن من المبتدئين."
              : "Fair, realistic pricing for your business — custom-built from scratch. Far more reliable than a junior freelancer, without big-agency overhead."}
          </p>

          {/* Currency & Inflation Note */}
          <div className="mt-6 p-4 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/30 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed text-start sm:text-center max-w-2xl mx-auto">
            <span className="font-bold text-[#A3E635]">
              {validLocale === "ar" ? "الأسعار بالجنيه المصري (EGP): " : "All Quotes in Egyptian Pounds (EGP): "}
            </span>
            <span>
              {validLocale === "ar"
                ? "الأسعار المعروضة تقديرية وفق سوق 2026 وقد تتأثر بحجم المتطلبات المحددة وسعر الصرف. السعر الفعلي يُثبت في نطاق العمل المكتوب."
                : "Estimates are indexed to 2026 market benchmarks. The binding project price is finalized in the written Scope of Work."}
            </span>
          </div>
        </div>

        {/* Pricing Categories — differentiated package tiers */}
        <div className="space-y-16 mb-20">
          {PRICING_CATEGORIES.map((category) => {
            const itemCount = category.items.length;
            return (
              <Reveal key={category.id} id={category.id} className="scroll-mt-24" y={22}>
                <div className="border-b border-neutral-200 dark:border-neutral-800 pb-4 mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white font-alexandria flex items-center gap-3">
                    <div className="w-2 h-6 rounded-full bg-[#A3E635]" />
                    <span>{category.title[validLocale]}</span>
                  </h2>
                  {category.description && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {category.description[validLocale]}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {category.items.map((item, idx) => {
                    const isLast = idx === itemCount - 1;
                    const role = item.popular
                      ? "recommended"
                      : itemCount > 2 && isLast
                        ? "advanced"
                        : itemCount > 1 && idx === 0
                          ? "starter"
                          : "standard";

                    const tierLabel =
                      role === "recommended"
                        ? { ar: "الأكثر موصى به", en: "Recommended" }
                        : role === "advanced"
                          ? { ar: "متقدم / مخصص", en: "Advanced / Custom" }
                          : role === "starter"
                            ? { ar: "للبداية", en: "Starter" }
                            : null;

                    const ctaLabel =
                      role === "advanced"
                        ? { ar: "عرض سعر مخصص", en: "Custom Quote" }
                        : role === "recommended"
                          ? { ar: "اطلب هذه الباقة", en: "Get This Package" }
                          : { ar: "استفسر الآن", en: "Inquire" };

                    const itemWhatsAppUrl = buildDirectWhatsAppUrl(
                      {
                        serviceName: item.name[validLocale],
                        price: item.price[validLocale],
                      },
                      validLocale
                    );

                    const shell =
                      role === "recommended"
                        ? "border-[#A3E635] bg-[#A3E635]/[0.05] dark:bg-[#A3E635]/[0.06] ring-1 ring-[#A3E635]/40 shadow-lg shadow-[#A3E635]/10 md:-translate-y-1 md:scale-[1.015]"
                        : role === "advanced"
                          ? "border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0E141C]"
                          : "bg-white dark:bg-[#12171E] border-neutral-200 dark:border-neutral-800";

                    return (
                      <div
                        key={item.id}
                        className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#A3E635]/5 ${shell}`}
                      >
                        {role === "recommended" && (
                          <span className="absolute -top-3 ltr:left-6 rtl:right-6 inline-flex items-center gap-1 text-[11px] font-extrabold uppercase bg-[#A3E635] text-[#0B0F12] px-3 py-1 rounded-full shadow-md">
                            <Sparkles className="w-3 h-3" />
                            {tierLabel ? tierLabel[validLocale] : ""}
                          </span>
                        )}

                        <div className="mb-4">
                          {tierLabel && role !== "recommended" && (
                            <span
                              className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 ${
                                role === "advanced"
                                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                                  : "bg-[#A3E635]/10 text-[#A3E635] border border-[#A3E635]/20"
                              }`}
                            >
                              {tierLabel[validLocale]}
                            </span>
                          )}
                          <h3 className="text-lg font-bold text-neutral-900 dark:text-white font-alexandria leading-tight">
                            {item.name[validLocale]}
                          </h3>
                          {item.details && (
                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-2">
                              {item.details[validLocale]}
                            </p>
                          )}
                        </div>

                        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                          <div className="flex items-end justify-between gap-2 mb-1">
                            <p dir="auto" className={`font-extrabold text-[#A3E635] font-alexandria whitespace-normal sm:whitespace-nowrap ${role === "advanced" ? "text-2xl" : "text-xl"}`}>
                              {item.price[validLocale]}
                            </p>
                            {item.unit && (
                              <span className="text-[11px] text-neutral-500 mb-1">{item.unit[validLocale]}</span>
                            )}
                          </div>
                          <p className="text-xs text-neutral-500 flex items-center gap-1 mb-4">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{item.timeline[validLocale]}</span>
                          </p>

                          <a
                            href={itemWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${
                              role === "recommended"
                                ? "bg-[#A3E635] text-[#0B0F12] hover:bg-[#bef264] lime-glow"
                                : role === "advanced"
                                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-[#A3E635] hover:text-[#0B0F12]"
                                  : "bg-neutral-900 dark:bg-white/10 text-white hover:bg-[#A3E635] hover:text-[#0B0F12]"
                            }`}
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-current" />
                            <span>{ctaLabel[validLocale]}</span>
                            <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {category.footerNote && (
                  <div className="mt-4 text-xs text-neutral-500 dark:text-neutral-400 flex items-start gap-1.5 px-2">
                    <AlertCircle className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span>{category.footerNote[validLocale]}</span>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Commercial Recommendations & Payment Milestones */}
        <div className="rounded-3xl bg-[#0E141C] text-white border border-[#A3E635]/25 p-8 sm:p-12 mb-20 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-alexandria mb-8 text-[#A3E635]">
            {validLocale === "ar" ? "نصائح تنظيمية ونظام الدفعات" : "Commercial Guidelines & Billing Milestones"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {COMMERCIAL_TIPS.map((tip, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2 font-alexandria flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3E635]" />
                  <span>{tip.title[validLocale]}</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {tip.desc[validLocale]}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <p>
              {validLocale === "ar"
                ? "يتم تأكيد كافة النسب والشروط في العقد المكتوب ونطاق العمل المعتمد."
                : "All milestone allocations and delivery terms are formalized in the approved Scope of Work."}
            </p>
            <a
              href={customQuoteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#A3E635] hover:underline"
            >
              <span>{validLocale === "ar" ? "مناقشة متطلبات مشروعك مباشرة" : "Discuss Project Directly"}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
            </a>
          </div>
        </div>

        {/* Market Comparison */}
        <div className="rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria">
            {validLocale === "ar" ? "مقارنة القيمة في السوق المصري" : "Egyptian Market Value Comparison"}
          </h2>
          <div className="space-y-4">
            {MARKET_COMPARISON.map((comp, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border ${
                  comp.highlight
                    ? "bg-[#A3E635]/10 border-[#A3E635]/40"
                    : "bg-neutral-50 dark:bg-[#0B0F12] border-neutral-200 dark:border-neutral-800"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="font-bold text-base text-neutral-900 dark:text-white font-alexandria flex items-center gap-2">
                    {comp.highlight && <CheckCircle2 className="w-5 h-5 text-[#A3E635]" />}
                    <span>{comp.provider[validLocale]}</span>
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-black/10 dark:bg-white/10 w-fit">
                    {comp.pricing[validLocale]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  <strong className="text-neutral-900 dark:text-white">{comp.pros[validLocale]}: </strong>
                  {comp.cons[validLocale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Inquiry */}
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
            {validLocale === "ar" ? "تريد عرض سعر مخصص لمشروعك؟" : "Require a Custom Scoped Proposal?"}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            {validLocale === "ar"
              ? "أرسل لنا تفاصيل فكرتك، وسنقوم بدراستها وتقديم تفصيل دقيق للتكلفة والجدول الزمني."
              : "Submit your project requirements for an architectural assessment and formal quote."}
          </p>
          <Link
            href={`/${validLocale}/contact`}
            className="inline-flex items-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-4 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
          >
            <span>{dict.actions.requestQuote}</span>
            <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
