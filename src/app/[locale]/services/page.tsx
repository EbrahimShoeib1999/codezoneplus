import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { SERVICES } from "@/data/services";
import { getDictionary, isRtl } from "@/lib/i18n";
import { InteractiveServices } from "@/components/interactive-services";
import { ArrowUpRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "دليل الخدمات البرمجية" : "Software Engineering Services Directory",
    description: isAr
      ? "استعرض كافة خدمات CODE ZONE PLUS: المواقع، المتاجر الإلكترونية، أنظمة المطاعم، الـ CRM والـ ERP، وتطبيقات الموبايل."
      : "Explore CODE ZONE PLUS software development services: Next.js websites, e-commerce, restaurant POS/KDS, CRM/ERP, and mobile apps.",
  };
}

export default async function ServicesPage({
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
            {validLocale === "ar" ? "حلول لكل نشاط تجاري" : "Solutions for every business"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {dict.sections.servicesTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {dict.sections.servicesSubtitle}
          </p>
        </div>

        {/* Services List — distinctive per-type visuals, filters, reveals, pointer tilt */}
        <div className="mb-20">
          <InteractiveServices services={SERVICES} locale={validLocale} />
        </div>

        {/* Bottom CTA Box */}
        <div className="rounded-2xl bg-[#0E141C] border border-[#A3E635]/30 p-8 sm:p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-alexandria mb-3">
            {validLocale === "ar"
              ? "هل تحتاج حلاً برمجياً بمواصفات خاصة؟"
              : "Need a Custom Software Solution?"}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            {validLocale === "ar"
              ? "نستمع لاحتياجاتك ونساعدك في بناء وتطوير النظام الأمثل لنمو أعمالك."
              : "We listen to what your business needs and build the right platform to help it grow."}
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
