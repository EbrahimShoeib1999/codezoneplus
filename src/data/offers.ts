import { SpecialOffer } from "../types";

// Active special offers configuration
// Only approved, genuine promotional bundles are listed here.
// Set active: false when no current campaign is running to cleanly show standard inquiry CTA.
export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "startup-launchpad-bundle",
    title: {
      ar: "باقة إطلاق الشركات الناشئة (موقع + نطاق مجاني)",
      en: "Startup Launchpad Bundle",
    },
    description: {
      ar: "باقة متكاملة للمشاريع الجديدة تشمل صفحة هبوط سريعة بـ Next.js مع إعداد الاستضافة وشهادة الأمان SSL وحجز النطاق (.com) مجاناً للسنة الأولى.",
      en: "A comprehensive launch package for new ventures featuring a custom Next.js landing page, full server provisioning, SSL, and complimentary 1st-year domain registration.",
    },
    eligibleServices: {
      ar: ["صفحات الهبوط (Landing Pages)", "المواقع التعريفية"],
      en: ["Landing Pages", "Corporate Websites"],
    },
    includedFeatures: {
      ar: [
        "تصميم وبرمجة صفحة هبوط كاملة من الصفر بـ Next.js.",
        "دعم كامل للغتين العربية والإنجليزية.",
        "إعداد السيرفر السحابي وشهادة التشفير SSL.",
        "حجز اسم نطاق (.com) مجاني للسنة الأولى.",
        "نموذج تواصل ذكي مع ربط WhatsApp مباشر.",
      ],
      en: [
        "Bespoke single-page Next.js engineering with custom branding.",
        "Full bilingual RTL/LTR layout architecture.",
        "Cloud server deployment with auto-renewing SSL certificate.",
        "Free 1st-year .com domain registration.",
        "Smart inquiry form linked directly to WhatsApp conversion.",
      ],
    },
    exclusions: {
      ar: [
        "لوحة التحكم الإدارية غير مشمولة في هذه الباقة (متاحة كإضافة).",
        "تجديد الدومين بعد السنة الأولى يتم بسعر التكلفة الرسمي.",
      ],
      en: [
        "Dynamic admin dashboard not included (available as an add-on).",
        "Domain renewals after year one are billed at standard registrar cost.",
      ],
    },
    originalPrice: "8,500 ج.م",
    offerPrice: "6,000 ج.م",
    validUntil: "2026-12-31",
    active: true,
  },
];
