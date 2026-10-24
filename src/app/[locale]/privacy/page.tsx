import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { Shield, ShieldAlert, ArrowUpRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "سياسة الخصوصية وحماية البيانات" : "Privacy Policy & Data Protection",
    description: isAr
      ? "سياسة الخصوصية الرسمية لشركة CODE ZONE PLUS: توضيح شفاف لكيفية معالجة بيانات نموذج التواصل وتطبيق واتساب."
      : "Official privacy policy for CODE ZONE PLUS detailing data handling for inquiry briefs and WhatsApp workflows.",
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const rtl = isRtl(validLocale);

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-widest font-bold text-[#A3E635]">
            {validLocale === "ar" ? "أمانك وأمان بياناتك أولاً" : "Data Integrity"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 font-alexandria">
            {validLocale === "ar" ? "سياسة الخصوصية وحماية البيانات" : "Privacy & Data Protection Policy"}
          </h1>
          <p className="text-sm text-neutral-500">
            {validLocale === "ar" ? "تاريخ التحديث: أكتوبر 2026" : "Effective Date: October 2026"}
          </p>
        </div>

        {/* Disclaimer banner */}
        <div className="p-4 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/30 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed mb-10 flex items-start gap-3">
          <Shield className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#A3E635]" />
          <span>
            {validLocale === "ar"
              ? "نلتزم بالشفافية التامة: موقعنا الإلكتروني لا يقوم بتخزين بيانات الاستفسارات في قواعد بيانات إعلانية سرية. النموذج يُستخدم حصراً لتجهيز رسالة نصية مباشرة لفتح محادثة واتساب برغبتك واختيارك."
              : "Strict Transparency: Our marketing website does not persist your brief into invasive third-party ad databases. The form functions strictly to construct a readable WhatsApp message initiated solely upon your click."}
          </span>
        </div>

        {/* Clauses */}
        <div className="space-y-10 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "1. البيانات التي نجمعها وكيفية معالجتها" : "1. Information Collected & Processing Workflows"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "عند استخدامك لنموذج (ابدأ مشروعك)، يُطلب منك إدخال معلومات محددة مثل: الاسم، اسم الشركة، رقم الهاتف أو وسيلة الاتصال المفضلة، الخدمة المختارة، الميزانية المقدرة، ونبذة عن فكرة المشروع. هذه المعلومات تُستخدم حصرياً داخل المتصفح لإنشاء رسالة WhatsApp مشفرة ومتسقة وموجهة للرقم الرسمي للشركة (01010814966)."
                : "When submitting our project inquiry form, fields such as your name, business name, contact preference, target service, and description are processed entirely client-side to generate your encrypted WhatsApp message."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "2. مسار التحويل نحو تطبيق WhatsApp" : "2. Direct WhatsApp Conversion Handoff"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "الموقع لا يرسل الرسائل نيابة عنك تلقائياً؛ بل يقوم بفتح رابط WhatsApp الرسمي (https://wa.me/201010814966) حاملاً النص الذي قمت بمراجعته. أنت من يقوم بالضغط على زر (إرسال) داخل تطبيق WhatsApp، وتخضع المحادثة لسياسات الخصوصية والتشفير التام (End-to-End Encryption) الخاصة بشركة WhatsApp."
                : "The website does not send messages autonomously. Clicking submit opens WhatsApp's official click-to-chat URL carrying your reviewed brief. You retain ultimate control to press 'Send' within WhatsApp's end-to-end encrypted app."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "3. ملفات تعريف الارتباط (Cookies)" : "3. Cookies & Session Storage"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يقتصر استخدام ملفات تعريف الارتباط والتخزين المحلي (Local Storage) على حفظ تفضيلاتك الأساسية في التصفح: تفضيل المظهر (الوضع الليلي أو النهاري) وتفضيل اللغة (العربية أو الإنجليزية). لا نستخدم أي ملفات تتبع إعلانية متطفلة أو بيكسلات إعادة استهداف دون موافقة مسبقة."
                : "We utilize local storage solely to persist essential interface preferences: theme selection (dark vs. light mode) and locale selection (Arabic vs. English). We do not deploy invasive cross-site ad trackers."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "4. مشاركة البيانات مع أطراف ثالثة" : "4. Third-Party Sharing Prohibition"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "تتعهد CODE ZONE PLUS بعدم بيع، تأجير، أو مشاركة أي بيانات شخصية أو تجارية واردة إلينا عبر استفسارات العملاء مع أي شركات إعلانية أو جهات تسويقية لأي سبب من الأسباب."
                : "CODE ZONE PLUS strictly prohibits the selling, leasing, or transferring of prospective client information to third-party marketing networks."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "5. حقوقك في الوصول للبيانات وحذفها" : "5. Your Data Access & Erasure Rights"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يحق لك في أي وقت مراسلتنا عبر WhatsApp أو البريد لطلب حذف أي محادثة أو بيانات سابقة تم تداولها خلال مرحلة الاستفسار، وسنقوم بالاستجابة فوراً وتأكيد الحذف."
                : "You maintain the continuous right to request the deletion or summary of previous communication logs by reaching out to our official WhatsApp channel."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "6. التواصل بشأن الخصوصية" : "6. Privacy Inquiries"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "إذا كان لديك أي سؤال أو استفسار حول سياسة الخصوصية، يرجى التواصل معنا عبر WhatsApp الرسمي: 01010814966."
                : "For any questions regarding our data practices, reach our team via official WhatsApp: 01010814966."}
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href={`/${validLocale}/cookies`}
            className="text-xs font-bold text-[#A3E635] hover:underline"
          >
            {validLocale === "ar" ? "سياسة ملفات تعريف الارتباط" : "View Cookie Policy"}
          </Link>
          <Link
            href={`/${validLocale}/terms`}
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            {validLocale === "ar" ? "الشروط والأحكام" : "Terms & Conditions"}
          </Link>
        </div>
      </div>
    </div>
  );
}
