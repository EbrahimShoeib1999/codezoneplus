import Link from "next/link";
import { notFound } from "next/navigation";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { ArrowUpRight, ShieldAlert } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "الشروط والأحكام والسياسات التجارية" : "Terms & Conditions of Service",
    description: isAr
      ? "الشروط والأحكام المنظمة للتعاملات البرمجية والمالية مع شركة CODE ZONE PLUS."
      : "Standard terms and conditions governing software development contracts with CODE ZONE PLUS.",
  };
}

export default async function TermsPage({
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
            {validLocale === "ar" ? "الإطار التعاقدي" : "Contractual Framework"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white mt-2 mb-4 font-alexandria">
            {validLocale === "ar" ? "الشروط والأحكام والسياسات التجارية" : "Terms & Conditions of Engagement"}
          </h1>
          <p className="text-sm text-neutral-500">
            {validLocale === "ar" ? "آخر تحديث: أكتوبر 2026" : "Last updated: October 2026"}
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-200 text-xs sm:text-sm leading-relaxed mb-10 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
          <span>
            {validLocale === "ar"
              ? "إشعار قانوني: الشروط المنشورة أدناه تمثل الإطار التجاري العام للشركة. تصبح الشروط ملزمة قانونياً للطرفين فقط عند تضمينها والتوقيع عليها في العقد المكتوب أو عرض السعر المعتمد الخاص بكل مشروع."
              : "Legal Notice: The policies below outline our standard commercial model. Terms become legally binding upon execution within each client's specific written Scope of Work."}
          </span>
        </div>

        {/* Clauses */}
        <div className="space-y-10 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "1. طبيعة الخدمات ونطاق العمل" : "1. Nature of Services & Scope"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "تقدم CODE ZONE PLUS خدمات تصميم وتطوير البرمجيات المخصصة، تطبيقات الويب والموبايل، وحلول الأعمال الرقمية. يتم تحديد مخرجات كل مشروع بدقة في مستند نطاق العمل (Scope of Work). لا تشمل الأسعار المعروضة على الموقع أي أعمال إضافية غير مذكورة صراحة في العقد المعتمد."
                : "CODE ZONE PLUS provides bespoke software development, web engineering, and mobile solutions. Deliverables are defined strictly in each project's written Scope of Work (SOW)."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "2. خطة الدفعات والمراحل المالية" : "2. Milestone Payment Architecture"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يتبع هيكل الدفعات النموذجي الترتيب التالي: 40–50% دفعة مقدمة عند توقيع الاتفاق للبدء في المعمارية والتصميم، 30% عند تسليم النسخة التجريبية الأولى (Staging Trial) للمعاينة، وباقي القيمة عند التسليم النهائي للمشروع ونقل الكود وقواعد البيانات. لا يبدأ العمل الفعلي قبل تأكيد استلام الدفعة الأولى."
                : "Standard project billing follows: 40–50% advance deposit upon signing to commence UI/UX and architecture; 30% upon trial staging delivery for review; and the balance upon final code deployment."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "3. جولات التعديل وإدارة النطاق" : "3. Revisions & Scope Management"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "يشمل كل مشروع عدداً محدداً من جولات التعديل (عادةً 2–3 جولات) ضمن إطار المتطلبات المتفق عليها. التعديل يُعرف بأنه تصحيح لخطأ برمجي أو ضبط بسيط في الواجهة لا يغير منطق العمل. أي طلب لميزة جديدة أو تغيير جوهري في التصميم بعد اعتماده يُسعر بشكل مستقل بموافقة خطية مسبقة من العميل."
                : "Standard agreements include 2–3 revision rounds within the approved requirements baseline. Additional features or post-approval design overhauls require a formalized change order estimate."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "4. الإلغاء واسترداد المبالغ" : "4. Cancellation & Refund Policy"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "في حال رغبة العميل في إلغاء المشروع قبل اكتماله، يتم تقييم الساعات والمراحل البرمجية المنجزة حتى تاريخ الإشعار الخطي. الدفعة المقدمة غير قابلة للاسترداد لتغطيتها تكاليف التخطيط والمعمارية الأولية. لا تتحمل الشركة أي مسؤولية عن استرداد تكاليف الطرف الثالث مثل حجوزات السيرفرات أو تراخيص الخطوط المدفوعة."
                : "If a project is halted by the client, engineering hours completed to date are reconciled. Upfront discovery deposits are non-refundable to cover preliminary architecture allocation."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "5. الضمان والدعم الفني" : "5. Warranty & Defect Rectification"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "توفر CODE ZONE PLUS فترة ضمان فني محددة في العقد (من 14 إلى 30 يوماً من تاريخ الإطلاق) لإصلاح أي خلل أو عيب برمجي مثبت لا يطابق المواصفات المتفق عليها دون أي تكلفة إضافية. لا يشمل الضمان الأعطال الناتجة عن تعديل الكود من قبل طرف ثالث أو تغييرات غير معلنة في واجهات APIs الخارجية."
                : "We provide an agreed post-launch warranty window (14–30 days) to rectify verified deviations against the approved scope at zero charge. Third-party API disruptions are excluded."}
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white font-alexandria">
              {validLocale === "ar" ? "6. حقوق الملكية الفكرية" : "6. Intellectual Property Rights"}
            </h2>
            <p>
              {validLocale === "ar"
                ? "تنتقل ملكية الكود المصدري المخصص بالكامل للعميل بمجرد سداد كامل المستحقات المالية. تحتفظ الشركة بحقها في الإشارة إلى المشروع ضمن سابقة أعمالها ما لم يطلب العميل صراحة توقيع اتفاقية عدم إفصاح (NDA)."
                : "Custom source code ownership transfers entirely to the client upon full payment. The agency maintains standard portfolio presentation rights unless restricted by a signed NDA."}
            </p>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <Link
            href={`/${validLocale}/privacy`}
            className="text-xs font-bold text-[#A3E635] hover:underline"
          >
            {validLocale === "ar" ? "الانتقال إلى سياسة الخصوصية" : "View Privacy Policy"}
          </Link>
          <Link
            href={`/${validLocale}/contact`}
            className="text-xs font-semibold text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
          >
            {validLocale === "ar" ? "طلب استشارة تعاقدية" : "Request Contractual Consultation"}
          </Link>
        </div>
      </div>
    </div>
  );
}
