import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { PROCESS_STAGES } from "@/data/process";
import { SCOPE_CHANGE_WORKFLOW, CLIENT_RESPONSIBILITIES } from "@/data/deliverables";
import { getDictionary, isRtl } from "@/lib/i18n";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Clock,
  Layers,
  HelpCircle,
  FileCheck,
  ShieldAlert,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "دورة تنفيذ المشروع وإدارة النطاق" : "12-Stage Delivery Process & Scope Management",
    description: isAr
      ? "تعرف على مراحل تنفيذ المشاريع البرمجية في CODE ZONE PLUS: من دراسة المتطلبات والتصميم حتى الفحص، النشر، والضمان."
      : "The 12-stage engineering lifecycle at CODE ZONE PLUS: from discovery and architecture to QA, deployment, and warranty.",
  };
}

export default async function ProcessPage({
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
            {validLocale === "ar" ? "منهجية هندسية منضبطة" : "Disciplined Engineering Lifecycle"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 font-alexandria">
            {dict.sections.processTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mt-4 leading-relaxed">
            {dict.sections.processSubtitle}
          </p>
        </div>

        {/* 12 Stages Vertical / Grid Journey */}
        <div className="space-y-6 mb-24">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="p-8 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#A3E635]/40 transition-all shadow-sm"
            >
              <div className="flex items-start gap-5 max-w-2xl">
                <div className="w-12 h-12 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/20 flex items-center justify-center text-[#A3E635] font-extrabold font-mono text-base flex-shrink-0">
                  {stage.step < 10 ? `0${stage.step}` : stage.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria mb-2">
                    {stage.title[validLocale]}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {stage.description[validLocale]}
                  </p>
                </div>
              </div>

              <div className="md:text-end pt-4 md:pt-0 border-t md:border-t-0 border-neutral-100 dark:border-neutral-800">
                <span className="text-xs uppercase text-neutral-400 font-bold block mb-1">
                  {validLocale === "ar" ? "المخرج المسلم:" : "Deliverable:"}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#A3E635] bg-[#A3E635]/10 px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{stage.deliverable[validLocale]}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Change Workflow */}
        <div id="scope" className="scroll-mt-24 rounded-3xl bg-[#0E141C] text-white border border-[#A3E635]/25 p-8 sm:p-14 mb-24 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#A3E635] uppercase">
              {validLocale === "ar" ? "إدارة التغيير والتعديلات" : "Scope & Change Control"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-alexandria mt-2 text-white">
              {validLocale === "ar"
                ? "كيف نتعامل مع الميزات والتعديلات الجديدة؟"
                : "How Scope Changes Are Managed Transparently"}
            </h2>
            <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
              {validLocale === "ar"
                ? "أي طلب لتغيير التصميم بعد اعتماده أو إضافة ميزات لم تُذكر في نطاق العمل الأصلي يخضع لمسار واضح ومدروس لتفادي أي زيادة غير متوقعة في التكلفة."
                : "Requested additions outside the baseline Scope of Work follow a strict, client-approved change order pipeline."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SCOPE_CHANGE_WORKFLOW.map((wf) => (
              <div key={wf.step} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#A3E635]">
                    STEP {wf.step}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1 mb-2 font-alexandria">
                    {wf.title[validLocale]}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {wf.desc[validLocale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Responsibilities */}
        <div className="rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 p-8 sm:p-12 mb-20">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
            {validLocale === "ar" ? "مسؤوليات العميل لضمان نجاح المشروع" : "Client Responsibilities for Project Velocity"}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-8 max-w-3xl">
            {validLocale === "ar"
              ? "الالتزام بهذه النقاط يضمن تسليم المنصة في الجدول الزمني المتفق عليه وبأعلى درجات الجودة."
              : "Timely delivery is a two-way collaboration. Fulfilling these inputs ensures scheduled milestones are met."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_RESPONSIBILITIES.map((cr, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-200 dark:border-neutral-800/80">
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2 font-alexandria">
                  {cr.title[validLocale]}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {cr.desc[validLocale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3 font-alexandria">
            {validLocale === "ar" ? "جاهز لبدء الخطوة الأولى؟" : "Ready to Initiate Step 1?"}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            {validLocale === "ar"
              ? "تواصل معنا لمناقشة أهدافك والحصول على جلسة استكشاف فنية مبدئية."
              : "Submit your inquiry to begin discovery and receive a formal project quotation."}
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
