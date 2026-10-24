import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "سياسة الاستخدام المقبول" : "Acceptable Use Policy",
    description: isAr
      ? "المعايير والضوابط المنظمة لاستخدام منصات وخدمات CODE ZONE PLUS البرمجية."
      : "Acceptable use guidelines governing applications engineered by CODE ZONE PLUS.",
  };
}

export default async function AcceptableUsePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "المسؤولية القانونية" : "Operational Standards"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 font-alexandria">
            {validLocale === "ar" ? "سياسة الاستخدام المقبول" : "Acceptable Use Policy"}
          </h1>
          <p className="text-sm text-neutral-500">
            {validLocale === "ar" ? "تاريخ التحديث: أكتوبر 2026" : "Effective Date: October 2026"}
          </p>
        </div>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "1. الاستخدام المشروع والأخلاقي" : "1. Lawful & Ethical Deployment"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يجب استخدام كافة البرمجيات والأنظمة التي تطورها CODE ZONE PLUS في أغراض مشروعة وقانونية فقط ووفق القوانين المعمول بها في جمهورية مصر العربية والدول التي تعمل بها أنظمة العميل. لا نقدم خدمات تطوير لأي مشاريع تشجع على الاحتيال، انتهاك حقوق الملكية الفكرية، أو نشر البرمجيات الخبيثة."
                : "All systems developed by CODE ZONE PLUS must be deployed strictly for lawful commerce in accordance with relevant national laws. We categorically refuse engagements promoting fraudulent schemes or copyright piracy."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "2. حماية البنية التحتية والخوادم" : "2. Infrastructure Security"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يُحظر استخدام السيرفرات وقواعد البيانات التي ننشرها في تنفيذ هجمات حرمان من الخدمة (DDoS)، التعدين الرقمي غير المصرح به، أو محاولات الاختراق وفحص الثغرات بدون إذن كتابي رسمي مسبق."
                : "Clients may not utilize deployed cloud instances to launch volumetric denial-of-service attacks, unapproved cryptographic mining, or unauthorized port scanning."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "3. حقوق المواد الموردة من العميل" : "3. Client-Supplied Assets & Permissions"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يتحمل العميل المسؤولية القانونية الكاملة عن كافة الصور، النصوص، الشعارات، والبيانات التي يقدمها لفريق التطوير لتضمينها في مشروعه، مع إقراره بامتلاك كافة حقوق النشر والتراخيص اللازمة لاستخدامها."
                : "The client guarantees that all media, photography, branding marks, and copy provided to our engineers are legally authorized for commercial utilization."}
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href={`/${validLocale}/terms`}
            className="text-xs font-bold text-[#A3E635] hover:underline"
          >
            {validLocale === "ar" ? "الشروط والأحكام الكاملة" : "Full Terms & Conditions"}
          </Link>
          <Link
            href={`/${validLocale}/contact`}
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            {validLocale === "ar" ? "تواصل مع الإدارة" : "Contact Management"}
          </Link>
        </div>
      </div>
    </div>
  );
}
