import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { HANDOVER_DELIVERABLES } from "@/data/deliverables";
import { getDictionary, isRtl } from "@/lib/i18n";
import {
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Code2,
  FolderGit2,
  Server,
  Database,
  ArrowUpRight,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "مخرجات التسليم والملكية الفكرية" : "Project Deliverables & Handover Guidelines",
    description: isAr
      ? "تفاصيل استلام الكود المصدري، مستودع GitHub، إعداد السيرفرات، وقواعد نقل الملكية الفكرية في CODE ZONE PLUS."
      : "Detailed specifications for code handover, git repository transfer, server provisioning, and intellectual property ownership.",
  };
}

export default async function DeliverablesPage({
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "تسليم مهني واحترافي" : "Structured Handover"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {validLocale === "ar" ? "مخرجات التسليم وحقوق الملكية" : "Client Deliverables & IP Ownership"}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {validLocale === "ar"
              ? "نوضح لك ما تستلمه بدقة عند إتمام المشروع، والفارق بين المخرجات المشمولة في نطاق العمل الأصلي والأصول المستثناة أو الخاصة بالطرف الثالث."
              : "A transparent breakdown of exact project deliverables, repository transfers, and intellectual property terms."}
          </p>
        </div>

        {/* Handover Categories */}
        <div className="space-y-12 mb-20">
          {HANDOVER_DELIVERABLES.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 sm:p-10 shadow-sm"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-alexandria flex items-center gap-3">
                <div className="w-2.5 h-6 rounded-full bg-[#A3E635]" />
                <span>{cat.category[validLocale]}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Included */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#A3E635] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{validLocale === "ar" ? "المخرجات المشمولة في النطاق:" : "Standard Inclusions:"}</span>
                  </h3>
                  <div className="space-y-2.5">
                    {cat.included[validLocale].map((inc, iidx) => (
                      <div
                        key={iidx}
                        className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-200 dark:border-neutral-800/80 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex items-start gap-2.5"
                      >
                        <span className="text-[#A3E635] font-bold">•</span>
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conditional / Third-Party */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>{validLocale === "ar" ? "بنود مشروطة أو يتحملها العميل:" : "Client-Direct / Third-Party Items:"}</span>
                  </h3>
                  <div className="space-y-2.5">
                    {cat.conditional[validLocale].map((cnd, cidx) => (
                      <div
                        key={cidx}
                        className="p-3.5 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-200 dark:border-neutral-800/80 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 flex items-start gap-2.5"
                      >
                        <span className="text-neutral-400 font-bold">•</span>
                        <span>{cnd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intellectual Property Policy */}
        <div className="rounded-3xl bg-[#0E141C] text-white border border-[#A3E635]/25 p-8 sm:p-12 mb-20 shadow-xl">
          <h2 className="text-2xl font-bold font-alexandria mb-6 text-[#A3E635] flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6" />
            <span>{validLocale === "ar" ? "سياسة الملكية الفكرية ونقل الكود" : "Intellectual Property Policy"}</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            <p>
              {validLocale === "ar"
                ? "1. تنتقل ملكية الكود المصدري المخصص بالكامل للعميل فور سداد الدفعة النهائية المحددة في العقد، ولا تحتفظ CODE ZONE PLUS بأي حقوق حصرية تمنع العميل من تعديل الكود أو استضافته لدى أي مزود آخر."
                : "1. 100% ownership of custom-developed application code transfers to the client upon full payment of the final contractual milestone."}
            </p>
            <p>
              {validLocale === "ar"
                ? "2. تحتفظ الشركة بحق عرض واجهات المشاريع العامة في معرض أعمالها ونماذجها التسويقية ما لم يتم الاتفاق كتابياً على اتفاقية عدم إفصاح صارمة (NDA)."
                : "2. The agency retains standard rights to display public UI layouts in our showcase portfolio unless a strict NDA has been executed."}
            </p>
            <p>
              {validLocale === "ar"
                ? "3. المكتبات مفتوحة المصدر (Open Source Libraries) المستخدمة في المشروع تخضع لرخصها الأصلية (مثل MIT وApache 2.0)."
                : "3. Open-source libraries and frameworks incorporated into the build remain subject to their respective open licenses (MIT, Apache 2.0)."}
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
            {validLocale === "ar" ? "هل لديك متطلبات تسليم مخصصة؟" : "Have Specific Handover Requirements?"}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            {validLocale === "ar"
              ? "يسعدنا مناقشة شروط التسليم والاتفاقيات الخاصة قبل توقيع العقد."
              : "We welcome pre-contract reviews of your required deployment environments and SLA terms."}
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
