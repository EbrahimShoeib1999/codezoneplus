import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { InquiryForm } from "@/components/inquiry-form";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  ArrowUpRight,
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
    title: isAr ? "تواصل معنا وابدأ مشروعك" : "Start Your Project & Contact Code Zone Plus",
    description: isAr
      ? "تواصل مع مهندسي CODE ZONE PLUS مباشرة عبر واتساب (01010814966) لمناقشة متطلبات مشروعك البرمجي والحصول على عرض سعر فني."
      : "Initiate your custom software brief with CODE ZONE PLUS via WhatsApp (01010814966) for direct technical evaluation.",
  };
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string; package?: string }>;
}) {
  const { locale } = await params;
  const { service, package: initialPackage } = await searchParams;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const dict = getDictionary(validLocale);
  const rtl = isRtl(validLocale);

  const directWhatsAppUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(
    validLocale === "ar"
      ? "مرحباً فريق CODE ZONE PLUS، أود بدء محادثة مباشرة لمناقشة مشروع برمجي جديد."
      : "Hello CODE ZONE PLUS team, I would like to start a direct chat to discuss an upcoming software project."
  )}`;

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Guidance & Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
                {validLocale === "ar" ? "قناة تواصل فورية" : "Direct Engagement"}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 font-alexandria">
                {validLocale === "ar" ? "ابدأ مشروعك البرمجي معنا" : "Start Your Software Project"}
              </h1>
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {validLocale === "ar"
                  ? "املأ نموذج المتطلبات أو تواصل معنا مباشرة عبر واتساب. نقوم بدراسة فكرتك وتقديم عرض سعر تفصيلي ونطاق عمل محدد."
                  : "Complete our structured brief or connect directly on WhatsApp to discuss your architecture and schedule discovery."}
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#0E141C] border border-[#A3E635]/30 flex items-center justify-between text-white hover:border-[#A3E635] transition-all lime-glow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#A3E635]/20 flex items-center justify-center text-[#A3E635]">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">
                      {validLocale === "ar" ? "الرقم الرسمي عبر واتساب:" : "Official WhatsApp:"}
                    </p>
                    <p className="text-lg font-bold font-mono text-[#A3E635]" dir="ltr">
                      01010814966
                    </p>
                  </div>
                </div>
                <ArrowUpRight className={`w-5 h-5 text-[#A3E635] ${rtl ? "rotate-180" : ""}`} />
              </a>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  {validLocale === "ar" ? "منصاتنا الرسمية على السوشيال ميديا:" : "Official Social Channels:"}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-center hover:border-[#A3E635] hover:text-[#A3E635] transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={COMPANY.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-bold text-center hover:border-[#A3E635] hover:text-[#A3E635] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* What Happens Next Guidance */}
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-[#0E1318] border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 font-alexandria flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#A3E635]" />
                <span>{validLocale === "ar" ? "ماذا يحدث بعد إرسال النموذج؟" : "What Happens Next?"}</span>
              </h2>
              <ol className="space-y-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed list-decimal list-inside">
                <li>
                  {validLocale === "ar"
                    ? "يتم فتح تطبيق WhatsApp وبداخله رسالة منظمة تضم كافة تفاصيل مشروعك."
                    : "WhatsApp opens populated with your structured project details."}
                </li>
                <li>
                  {validLocale === "ar"
                    ? "اضغط (إرسال) داخل واتساب لبدء المحادثة مع أحد مهندسينا."
                    : "Press 'Send' in WhatsApp to initiate direct dialogue with our engineers."}
                </li>
                <li>
                  {validLocale === "ar"
                    ? "نراجع متطلباتك ونقدم لك تقديراً مبدئياً وجلسة استكشاف فنية خلال ساعات عمل يومية منتظمة."
                    : "We review your requirements and provide an initial feasibility assessment."}
                </li>
              </ol>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm
              locale={validLocale}
              initialService={service}
              initialPackage={initialPackage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
