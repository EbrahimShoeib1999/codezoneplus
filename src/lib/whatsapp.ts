import { COMPANY } from "../data/company";
import { Locale } from "../types";

export interface ProjectInquiryData {
  fullName: string;
  companyName?: string;
  contactMethod?: "whatsapp" | "phone" | "email";
  contactDetail?: string;
  serviceCategory: string;
  packageType?: string;
  projectDescription: string;
  businessType?: string;
  approximateBudget?: string;
  desiredTimeline?: string;
  referenceLinks?: string;
}

/**
 * Validates and normalizes the target WhatsApp phone number.
 */
export function getWhatsAppNumber(): string {
  const num = COMPANY.whatsappNumber || "201010814966";
  // Strip any leading +, spaces, or dashes
  return num.replace(/\D/g, "");
}

/**
 * Builds a structured, respectful WhatsApp message in Arabic or English
 * based on client brief inputs.
 */
export function buildWhatsAppInquiryUrl(
  data: ProjectInquiryData,
  locale: Locale = "ar"
): string {
  const number = getWhatsAppNumber();
  let message = "";

  if (locale === "ar") {
    message += `مرحباً فريق CODE ZONE PLUS،\n\n`;
    message += `أرغب في بدء استفسار مشروع جديد:\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 الاسم: ${data.fullName}\n`;
    if (data.companyName) {
      message += `🏢 اسم الشركة/النشاط: ${data.companyName}\n`;
    }
    if (data.businessType) {
      message += `🏷️ نوع العمل أو الجمهور: ${data.businessType}\n`;
    }
    message += `💻 الخدمة المطلوبة: ${data.serviceCategory}\n`;
    if (data.packageType) {
      message += `📦 الباقة أو النموذج: ${data.packageType}\n`;
    }
    if (data.approximateBudget) {
      message += `💰 الميزانية المقدرة: ${data.approximateBudget}\n`;
    }
    if (data.desiredTimeline) {
      message += `⏱️ الجدول الزمني المرغوب: ${data.desiredTimeline}\n`;
    }
    message += `📝 تفاصيل المشروع:\n${data.projectDescription}\n`;
    if (data.referenceLinks) {
      message += `🔗 روابط مرجعية:\n${data.referenceLinks}\n`;
    }
    if (data.contactMethod && data.contactDetail) {
      message += `📞 طريقة التواصل المفضلة: ${data.contactMethod} (${data.contactDetail})\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `(أُرسلت عبر موقع CODE ZONE PLUS الرسمي)`;
  } else {
    message += `Hello CODE ZONE PLUS team,\n\n`;
    message += `I would like to initiate a new project inquiry:\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 Full Name: ${data.fullName}\n`;
    if (data.companyName) {
      message += `🏢 Business Name: ${data.companyName}\n`;
    }
    if (data.businessType) {
      message += `🏷️ Industry/Audience: ${data.businessType}\n`;
    }
    message += `💻 Requested Service: ${data.serviceCategory}\n`;
    if (data.packageType) {
      message += `📦 Package/Scope: ${data.packageType}\n`;
    }
    if (data.approximateBudget) {
      message += `💰 Estimated Budget: ${data.approximateBudget}\n`;
    }
    if (data.desiredTimeline) {
      message += `⏱️ Target Timeline: ${data.desiredTimeline}\n`;
    }
    message += `📝 Project Description:\n${data.projectDescription}\n`;
    if (data.referenceLinks) {
      message += `🔗 Reference Links:\n${data.referenceLinks}\n`;
    }
    if (data.contactMethod && data.contactDetail) {
      message += `📞 Preferred Contact: ${data.contactMethod} (${data.contactDetail})\n`;
    }
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `(Sent via CODE ZONE PLUS official website)`;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Builds a quick direct WhatsApp link with contextual prefilled text
 * for specific CTA buttons (service pages, pricing cards, hero).
 */
export function buildDirectWhatsAppUrl(
  context: {
    serviceName?: string;
    topic?: string;
    price?: string;
  },
  locale: Locale = "ar"
): string {
  const number = getWhatsAppNumber();
  let text = "";

  if (locale === "ar") {
    if (context.serviceName) {
      text = `مرحباً CODE ZONE PLUS، أود الاستفسار عن خدمة (${context.serviceName})${context.price ? ` المقدرة بسعر ${context.price}` : ""} ومناقشة تفاصيل المشروع معكم.`;
    } else if (context.topic) {
      text = `مرحباً CODE ZONE PLUS، أود مناقشة (${context.topic}) لمشروعي الجديد.`;
    } else {
      text = `مرحباً فريق CODE ZONE PLUS، أود الاستفسار عن خدمات تطوير البرمجيات المخصصة وبدء مشروعي.`;
    }
  } else {
    if (context.serviceName) {
      text = `Hello CODE ZONE PLUS, I would like to inquire about (${context.serviceName})${context.price ? ` estimated at ${context.price}` : ""} and discuss project specifications.`;
    } else if (context.topic) {
      text = `Hello CODE ZONE PLUS, I would like to discuss (${context.topic}) for my upcoming project.`;
    } else {
      text = `Hello CODE ZONE PLUS team, I'd like to discuss custom software development services for my upcoming project.`;
    }
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
