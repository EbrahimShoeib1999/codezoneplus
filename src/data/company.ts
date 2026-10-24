export const COMPANY = {
  name: "CODE ZONE PLUS",
  tagline: "BUILD. CREATE. LAUNCH.",
  phone: "01010814966",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "201010814966",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://codezoneplus.com",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61595102653223",
    instagram: "https://www.instagram.com/code_zone_plus/",
  },
  commercialModel: {
    advancePercentage: "40–50%",
    trialPercentage: "30%",
    finalPercentage: "Remaining balance upon final handover",
    revisionRounds: "2–3 revision rounds included within agreed scope",
    currency: "EGP",
    currencyArabic: "ج.م",
  },
  copyrightYear: new Date().getFullYear(),
};
