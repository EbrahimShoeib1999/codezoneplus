import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { FAQ_ITEMS } from "@/data/faq";
import { getDictionary, isRtl } from "@/lib/i18n";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import {
  ArrowUpRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الأسئلة الشائعة والأجوبة التفصيلية" : "Comprehensive Frequently Asked Questions",
    description: isAr
      ? "إجابات واضحة ومباشرة حول خدمات CODE ZONE PLUS، التسعير، مواعيد التسليم، ملكية الكود، والضمان."
      : "Complete answers regarding CODE ZONE PLUS custom software services, pricing models, source code ownership, and warranties.",
  };
}

export default async function FAQPage({
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
    { topic: validLocale === "ar" ? "سؤال إضافي حول الخدمات" : "General Inquiries" },
    validLocale
  );

  // Group FAQ items by category
  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "إجابات واضحة وشفافة" : "Everything You Need to Know"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {dict.sections.faqTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {dict.sections.faqSubtitle}
          </p>
        </div>

        {/* Categories Sections */}
        <div className="space-y-14 mb-20">
          {categories.map((catKey) => {
            const items = FAQ_ITEMS.filter((f) => f.category === catKey);
            const catTitle = items[0]?.categoryTitle[validLocale];

            return (
              <div key={catKey} id={catKey} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria flex items-center gap-3 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                  <div className="w-2 h-6 rounded-full bg-[#A3E635]" />
                  <span>{catTitle}</span>
                </h2>

                <div className="space-y-4">
                  {items.map((item) => (
                    <details
                      key={item.id}
                      className="group rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-6 transition-all [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer list-none text-base sm:text-lg font-bold text-neutral-900 dark:text-white font-alexandria">
                        <span>{item.question[validLocale]}</span>
                        <ChevronDown className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {item.answer[validLocale]}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Didn't find your answer box */}
        <div className="rounded-3xl bg-[#0E141C] text-white border border-[#A3E635]/30 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold font-alexandria mb-3">
            {validLocale === "ar" ? "لديك استفسار لم تجد إجابته هنا؟" : "Have a Question Not Listed Here?"}
          </h2>
          <p className="text-neutral-300 text-sm max-w-md mx-auto mb-8">
            {validLocale === "ar"
              ? "فريقنا جاهز للرد على كافة أسئلتك التقنية والمالية مباشرة عبر واتساب."
              : "Our engineering and commercial team is available directly on WhatsApp to address your specific questions."}
          </p>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
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
