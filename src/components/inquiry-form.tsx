"use client";

import * as React from "react";
import { Locale } from "@/types";
import { SERVICES } from "@/data/services";
import { buildWhatsAppInquiryUrl, ProjectInquiryData } from "@/lib/whatsapp";
import { isRtl } from "@/lib/i18n";
import { MessageCircle, CheckCircle, AlertCircle, ArrowUpRight, ShieldCheck } from "lucide-react";

interface InquiryFormProps {
  locale: Locale;
  initialService?: string;
  initialPackage?: string;
}

export function InquiryForm({
  locale,
  initialService = "",
  initialPackage = "",
}: InquiryFormProps) {
  const rtl = isRtl(locale);

  const [formData, setFormData] = React.useState<ProjectInquiryData>({
    fullName: "",
    companyName: "",
    contactMethod: "whatsapp",
    contactDetail: "",
    serviceCategory: initialService || SERVICES[0].title[locale],
    packageType: initialPackage || "",
    projectDescription: "",
    businessType: "",
    approximateBudget: "",
    desiredTimeline: "",
    referenceLinks: "",
  });

  const [consent, setConsent] = React.useState(true);
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [openedUrl, setOpenedUrl] = React.useState<string | null>(null);
  const [submitted, setSubmitted] = React.useState(false);

  // Update a field and clear its stale validation error as soon as the user edits it.
  const setField = (key: keyof ProjectInquiryData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const { [key]: _cleared, ...rest } = prev;
      return rest;
    });
  };

  const budgetOptions = [
    { ar: "أقل من 10,000 ج.م", en: "Under 10,000 EGP" },
    { ar: "10,000 – 25,000 ج.م", en: "10,000 – 25,000 EGP" },
    { ar: "25,000 – 50,000 ج.م", en: "25,000 – 50,000 EGP" },
    { ar: "50,000 – 100,000 ج.م", en: "50,000 – 100,000 EGP" },
    { ar: "100,000 – 250,000+ ج.م", en: "100,000 – 250,000+ EGP" },
    { ar: "غير محدد حالياً / يحتاج دراسة", en: "To be determined during discovery" },
  ];

  const timelineOptions = [
    { ar: "عاجل (خلال أسبوع أو أسبوعين)", en: "Urgent (Within 1–2 weeks)" },
    { ar: "قياسي (3 إلى 6 أسابيع)", en: "Standard (3–6 weeks)" },
    { ar: "مرن (خلال شهرين إلى 3 شهور)", en: "Flexible (2–3 months)" },
    { ar: "مشروع استراتيجي كبير (3 إلى 6 شهور)", en: "Strategic initiative (3–6 months)" },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      errs.fullName = locale === "ar" ? "يرجى كتابة الاسم الكريم" : "Full name is required";
    }

    if (!formData.serviceCategory.trim()) {
      errs.serviceCategory = locale === "ar" ? "يرجى تحديد الخدمة المطلوبة" : "Please select a service";
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.length < 10) {
      errs.projectDescription =
        locale === "ar"
          ? "يرجى كتابة نبذة بسيطة عن مشروعك (10 أحرف على الأقل)"
          : "Please provide a brief description (at least 10 characters)";
    }

    if (!consent) {
      errs.consent =
        locale === "ar"
          ? "يجب الموافقة على تجهيز المحادثة عبر واتساب"
          : "Please accept the privacy terms to proceed";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const targetUrl = buildWhatsAppInquiryUrl(formData, locale);
    setOpenedUrl(targetUrl);
    setSubmitted(true);

    try {
      const win = window.open(targetUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        // Handled via openedUrl state
      }
    } catch {
      // Handled via openedUrl fallback
    }
  };

  return (
    <div className="bg-white dark:bg-[#12171E] rounded-2xl p-6 sm:p-10 border border-neutral-200 dark:border-[#A3E635]/20 shadow-xl transition-colors">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="inquiry-fullName" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "الاسم الكامل *" : "Full Name *"}
            </label>
            <input
              type="text"
              id="inquiry-fullName"
              value={formData.fullName}
              onChange={(e) => setField("fullName", e.target.value)}
              placeholder={locale === "ar" ? "مثال: م. أحمد عبد الله" : "e.g. John Doe"}
              aria-invalid={errors.fullName ? true : undefined}
              aria-describedby={errors.fullName ? "inquiry-fullName-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border ${
                errors.fullName
                  ? "border-red-500"
                  : "border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635]"
              } text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm`}
            />
            {errors.fullName && (
              <p id="inquiry-fullName-error" className="mt-1 text-xs text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="inquiry-companyName" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "اسم الشركة / النشاط (اختياري)" : "Company / Business Name (Optional)"}
            </label>
            <input
              type="text"
              id="inquiry-companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              placeholder={locale === "ar" ? "مثال: شركة النور للحلول" : "e.g. Acme Corporation"}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm"
            />
          </div>
        </div>

        {/* Contact detail & method */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="inquiry-contactDetail" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "رقم الهاتف أو وسيلة الاتصال (اختياري)" : "Phone / Contact Info (Optional)"}
            </label>
            <input
              type="text"
              id="inquiry-contactDetail"
              value={formData.contactDetail}
              onChange={(e) => setFormData({ ...formData, contactDetail: e.target.value })}
              placeholder={locale === "ar" ? "010xxxxxxxx" : "+1 555-0199"}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm"
              dir="ltr"
            />
          </div>

          <div>
            <label htmlFor="inquiry-serviceCategory" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "الخدمة المطلوبة *" : "Target Service *"}
            </label>
            <select
              id="inquiry-serviceCategory"
              value={formData.serviceCategory}
              onChange={(e) => setField("serviceCategory", e.target.value)}
              aria-invalid={errors.serviceCategory ? true : undefined}
              aria-describedby={errors.serviceCategory ? "inquiry-serviceCategory-error" : undefined}
              className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border ${
                errors.serviceCategory
                  ? "border-red-500"
                  : "border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635]"
              } text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm ${formData.serviceCategory ? "" : "text-neutral-400"}`}
            >
              <option value="" disabled hidden>
                {locale === "ar" ? "-- اختر الخدمة المطلوبة --" : "-- Select a service --"}
              </option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title[locale]}>
                  {s.title[locale]}
                </option>
              ))}
            </select>
            {errors.serviceCategory && (
              <p id="inquiry-serviceCategory-error" className="mt-1 text-xs text-red-500">{errors.serviceCategory}</p>
            )}
          </div>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="inquiry-budget" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "الميزانية التقريبية المقدرة" : "Estimated Budget Range"}
            </label>
            <select
              id="inquiry-budget"
              value={formData.approximateBudget}
              onChange={(e) => setFormData({ ...formData, approximateBudget: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm"
            >
              <option value="">{locale === "ar" ? "-- اختر نطاق الميزانية --" : "-- Select budget range --"}</option>
              {budgetOptions.map((b, idx) => (
                <option key={idx} value={b[locale]}>
                  {b[locale]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="inquiry-timeline" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "الجدول الزمني المفضل" : "Preferred Target Timeline"}
            </label>
            <select
              id="inquiry-timeline"
              value={formData.desiredTimeline}
              onChange={(e) => setFormData({ ...formData, desiredTimeline: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635] text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm"
            >
              <option value="">{locale === "ar" ? "-- اختر الإطار الزمني --" : "-- Select delivery target --"}</option>
              {timelineOptions.map((t, idx) => (
                <option key={idx} value={t[locale]}>
                  {t[locale]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="inquiry-projectDescription" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
            {locale === "ar" ? "تفاصيل ومتطلبات المشروع *" : "Project Requirements & Description *"}
          </label>
          <textarea
            rows={4}
            id="inquiry-projectDescription"
            value={formData.projectDescription}
            onChange={(e) => setField("projectDescription", e.target.value)}
            aria-invalid={errors.projectDescription ? true : undefined}
            aria-describedby={errors.projectDescription ? "inquiry-projectDescription-error" : undefined}
            placeholder={
              locale === "ar"
                ? "اشرح فكرة مشروعك، أهم الصفحات أو الميزات التي تحتاجها، وأي أنظمة خارجية ترغب في ربطها..."
                : "Describe your project vision, must-have features, target audience, and any external systems to integrate..."
            }
            className={`w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border ${
              errors.projectDescription
                ? "border-red-500"
                : "border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635]"
            } text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm`}
          />
          {errors.projectDescription && (
            <p id="inquiry-projectDescription-error" className="mt-1 text-xs text-red-500">{errors.projectDescription}</p>
          )}
        </div>

        {/* Reference Links */}
        <div>
            <label htmlFor="inquiry-referenceLinks" className="block text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
              {locale === "ar" ? "موقعك الحالي أو مواقع كمرجع تعجبك (اختياري)" : "Existing Site or Reference URLs (Optional)"}
            </label>
            <input
              type="text"
              id="inquiry-referenceLinks"
              value={formData.referenceLinks}
              onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
              placeholder={locale === "ar" ? "https://example.com" : "https://example.com"}
              className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-[#0B0F12] border border-neutral-300 dark:border-neutral-800 focus:border-[#A3E635] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-[#A3E635] text-sm"
              dir="ltr"
            />
        </div>

        {/* Privacy Consent */}
        <div className="flex items-start gap-3 pt-2">
          <input
            type="checkbox"
            id="privacyConsent"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setErrors((prev) => {
                if (!("consent" in prev)) return prev;
                const { consent: _cleared, ...rest } = prev;
                return rest;
              });
            }}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "inquiry-consent-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#A3E635] focus:ring-[#A3E635]"
          />
          <label htmlFor="privacyConsent" className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed cursor-pointer">
            {locale === "ar" ? (
              <>
                أوافق على قيام النموذج بتجهيز رسالة نصية وفتح تطبيق WhatsApp للتواصل المباشر مع فريق CODE ZONE PLUS وفق{" "}
                <a href={`/${locale}/privacy`} className="text-[#A3E635] underline" target="_blank" rel="noreferrer">
                  سياسة الخصوصية
                </a>
                . الموقع لا يخزن بياناتك في أي قاعدة بيانات إعلانية.
              </>
            ) : (
              <>
                I agree to formulate a direct WhatsApp inquiry to the CODE ZONE PLUS team pursuant to the{" "}
                <a href={`/${locale}/privacy`} className="text-[#A3E635] underline" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
                . No data is stored for advertising purposes.
              </>
            )}
          </label>
        </div>
        {errors.consent && (
          <p id="inquiry-consent-error" className="text-xs text-red-500">{errors.consent}</p>
        )}

        {/* Announce validation failures to assistive tech when submit is blocked */}
        <div aria-live="polite" role="alert" className="sr-only">
          {Object.keys(errors).length > 0
            ? (locale === "ar"
                ? `لا يمكن الإرسال: ${Object.values(errors).join("؛ ")}`
                : `Submission blocked: ${Object.values(errors).join(". ")}`)
            : ""}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-3 bg-[#A3E635] hover:bg-[#bef264] text-[#0B0F12] font-bold text-base py-4 px-6 rounded-xl transition-all active:scale-[0.98] lime-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>
              {locale === "ar" ? "إرسال الاستفسار عبر واتساب الرسمي" : "Send Inquiry via Official WhatsApp"}
            </span>
            <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
          </button>
          <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#A3E635]" />
            <span>
              {locale === "ar"
                ? "سيتم فتح واتساب تلقائياً، يرجى الضغط على زر (إرسال) داخل التطبيق لبدء المحادثة."
                : "WhatsApp will open automatically; remember to press 'Send' inside the app."}
            </span>
          </p>
        </div>

        {/* Fallback Banner if opened */}
        {submitted && openedUrl && (
          <div role="status" aria-live="polite" className="cz-fade p-4 rounded-xl bg-[#A3E635]/10 border border-[#A3E635]/30 text-neutral-900 dark:text-white space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#A3E635]">
              <CheckCircle className="w-5 h-5" />
              <span>
                {locale === "ar"
                  ? "تم تجهيز رسالتك! إذا لم يفتح واتساب تلقائياً:"
                  : "Message ready! If WhatsApp did not open automatically:"}
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300">
              {locale === "ar"
                ? "قد تمنع إعدادات المتصفح النوافذ المنبثقة. يمكنك الضغط على الزر التالي لفتح المحادثة مباشرة:"
                : "Popups might be blocked by your browser settings. Click the button below to open your chat directly:"}
            </p>
            <a
              href={openedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold bg-[#A3E635] text-[#0B0F12] px-4 py-2 rounded-lg hover:bg-[#bef264] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{locale === "ar" ? "فتح واتساب الآن" : "Open WhatsApp Directly"}</span>
            </a>
          </div>
        )}
      </form>
    </div>
  );
}
