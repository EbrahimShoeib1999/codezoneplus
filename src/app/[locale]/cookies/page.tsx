import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { Cookie, ShieldCheck } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "سياسة ملفات تعريف الارتباط (Cookies)" : "Cookie & Storage Policy",
    description: isAr
      ? "توضيح لكيفية استخدام الموقع لملفات تعريف الارتباط والتخزين المحلي لحفظ تفضيلات المظهر واللغة."
      : "How CODE ZONE PLUS uses essential cookies and local storage to persist theme and language preferences.",
  };
}

export default async function CookiesPage({
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
            {validLocale === "ar" ? "الشفافية التقنية" : "Technical Transparency"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 font-alexandria">
            {validLocale === "ar" ? "سياسة ملفات تعريف الارتباط (Cookies)" : "Cookie & Session Storage Policy"}
          </h1>
          <p className="text-sm text-neutral-500">
            {validLocale === "ar" ? "تاريخ التحديث: أكتوبر 2026" : "Effective Date: October 2026"}
          </p>
        </div>

        <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "1. ما هي ملفات تعريف الارتباط؟" : "1. What Are Cookies?"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "ملفات تعريف الارتباط وتخزين المتصفح المحلي (Local Storage) هي ملفات نصية صغيرة تُخزن على جهازك لحفظ تفضيلات تجربة التصفح وتسهيل إعادة زيارة الموقع."
                : "Cookies and local storage keys are small client-side data packets retained in your browser to maintain visual preferences across sessions."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "2. ما نستخدمه حصراً على هذا الموقع" : "2. Strictly Essential Preferences Used"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
                <p className="font-bold text-neutral-900 dark:text-white mb-1">
                  {validLocale === "ar" ? "تفضيل المظهر (Theme)" : "Theme State (theme)"}
                </p>
                <p className="text-xs text-neutral-500">
                  {validLocale === "ar"
                    ? "يُستخدم لحفظ اختيارك للوضع الليلي أو النهاري (Dark/Light Mode) حتى لا تحتاج لإعادة ضبطه في كل صفحة."
                    : "Remembers your dark or light mode interface toggle across page navigations."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800">
                <p className="font-bold text-neutral-900 dark:text-white mb-1">
                  {validLocale === "ar" ? "تفضيل اللغة (Locale)" : "Language Routing (locale)"}
                </p>
                <p className="text-xs text-neutral-500">
                  {validLocale === "ar"
                    ? "يُستخدم للتأكد من بقائك على لغتك المفضلة (العربية أو الإنجليزية) أثناء التنقل بين الخدمات والمقالات."
                    : "Preserves your language selection (Arabic or English) throughout your session."}
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "3. ما لا نستخدمه إطلاقاً" : "3. What We Never Deploy"}
            </h2>
            <ul className="space-y-2 list-disc list-inside text-neutral-600 dark:text-neutral-400">
              <li>{validLocale === "ar" ? "لا نستخدم ملفات تتبع إعلانية لأطراف ثالثة (Ad Trackers)." : "Zero third-party advertising tracking cookies."}</li>
              <li>{validLocale === "ar" ? "لا نستخدم بيكسلات إعادة استهداف تسويقية (Retargeting Pixels)." : "Zero retargeting ad pixels."}</li>
              <li>{validLocale === "ar" ? "لا نبيع أو نشارك سجلات التصفح لأي وسيط بيانات إعلاني." : "Zero commercial sharing of visitor browsing history."}</li>
            </ul>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href={`/${validLocale}/privacy`}
            className="text-xs font-bold text-[#A3E635] hover:underline"
          >
            {validLocale === "ar" ? "العودة لسياسة الخصوصية" : "Return to Privacy Policy"}
          </Link>
          <Link
            href={`/${validLocale}/terms`}
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            {validLocale === "ar" ? "الشروط والأحكام" : "Terms of Service"}
          </Link>
        </div>
      </div>
    </div>
  );
}
