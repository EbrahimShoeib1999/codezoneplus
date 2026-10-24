import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";
import { getDictionary, isRtl } from "@/lib/i18n";
import { InteractivePortfolio } from "@/components/interactive-portfolio";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "معرض الأعمال والحلول البرمجية" : "Engineered Solutions Portfolio & Showcase",
    description: isAr
      ? "استعرض الحلول والأنظمة البرمجية المطورة من CODE ZONE PLUS: منصات ويب، أنظمة مطاعم KDS، وأنظمة إدارة أعمال CRM."
      : "Case studies and engineered software systems built by CODE ZONE PLUS: modern web apps, restaurant systems, and CRM architectures.",
  };
}

export default async function PortfolioPage({
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

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "أمثلة من أعمالنا" : "A look at our work"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {dict.sections.portfolioTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {dict.sections.portfolioSubtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#A3E635]" />
            <span>
              {validLocale === "ar"
                ? "نلتزم باتفاقيات سرية البيانات (NDA) لعملائنا، ونعرض هنا نماذج الحلول والمعمارية المعتمدة."
                : "We respect strict non-disclosure agreements (NDAs); displayed systems represent verified architectural solutions."}
            </span>
          </div>
        </div>

        {/* Portfolio Grid — distinctive per-project showcases, reveals, pointer tilt */}
        <div className="mb-20">
          <InteractivePortfolio items={PORTFOLIO_ITEMS} locale={validLocale} />
        </div>

        {/* Custom Request Banner */}
        <div className="rounded-2xl bg-[#0E141C] border border-[#A3E635]/30 p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-alexandria mb-3">
            {validLocale === "ar"
              ? "هل ترغب في استعراض حل مخصص لقطاعك؟"
              : "Looking for an Industry-Specific Demonstration?"}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            {validLocale === "ar"
              ? "تواصل معنا مباشرة عبر واتساب لترتيب جلسة استعراض نماذج الأنظمة التي تناسب نشاطك التجاري."
              : "Message us on WhatsApp to arrange a walkthrough of systems that fit how your business runs."}
          </p>
          <Link
            href={`/${validLocale}/contact`}
            className="inline-flex items-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
          >
            <span>{dict.actions.startProject}</span>
            <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
