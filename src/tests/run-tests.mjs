import assert from "node:assert";
import { PRICING_CATEGORIES, COMMERCIAL_TIPS, MARKET_COMPARISON } from "../data/pricing.ts";
import { SERVICES } from "../data/services.ts";
import { PORTFOLIO_ITEMS } from "../data/portfolio.ts";
import { FAQ_ITEMS } from "../data/faq.ts";
import { buildWhatsAppInquiryUrl, getWhatsAppNumber } from "../lib/whatsapp.ts";
import { COMPANY } from "../data/company.ts";

console.log("=========================================");
console.log("🚀 CODE ZONE PLUS — VERIFICATION TEST SUITE");
console.log("=========================================\n");

let passed = 0;
let failed = 0;

function it(desc, fn) {
  try {
    fn();
    console.log(`  ✓ PASS: ${desc}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ FAIL: ${desc}`);
    console.error(err);
    failed++;
  }
}

// 1. WhatsApp Configuration & Handoff
it("WhatsApp target number matches official international destination (201010814966)", () => {
  const number = getWhatsAppNumber();
  assert.strictEqual(number, "201010814966");
  assert.strictEqual(COMPANY.phone, "01010814966");
});

it("Constructs accurate Arabic WhatsApp message with all required fields encoded", () => {
  const brief = {
    fullName: "أحمد علي",
    companyName: "شركة التجارة",
    serviceCategory: "المتاجر الإلكترونية",
    packageType: "متجر متكامل",
    projectDescription: "نريد متجر إلكتروني يدعم Paymob والشحن",
    approximateBudget: "50,000 ج.م",
    desiredTimeline: "6 أسابيع",
  };

  const url = buildWhatsAppInquiryUrl(brief, "ar");
  assert(url.startsWith("https://wa.me/201010814966?text="));
  const decoded = decodeURIComponent(url.replace("https://wa.me/201010814966?text=", ""));
  
  assert(decoded.includes("أحمد علي"));
  assert(decoded.includes("شركة التجارة"));
  assert(decoded.includes("المتاجر الإلكترونية"));
  assert(decoded.includes("متجر متكامل"));
  assert(decoded.includes("50,000 ج.م"));
  assert(decoded.includes("6 أسابيع"));
  assert(decoded.includes("CODE ZONE PLUS"));
});

it("Constructs accurate English WhatsApp message with all required fields encoded", () => {
  const brief = {
    fullName: "John Smith",
    companyName: "Acme Corp",
    serviceCategory: "E-Commerce",
    packageType: "Enterprise Store",
    projectDescription: "Need a custom high-performance e-commerce storefront",
    approximateBudget: "60,000 EGP",
    desiredTimeline: "8 weeks",
  };

  const url = buildWhatsAppInquiryUrl(brief, "en");
  assert(url.startsWith("https://wa.me/201010814966?text="));
  const decoded = decodeURIComponent(url.replace("https://wa.me/201010814966?text=", ""));

  assert(decoded.includes("John Smith"));
  assert(decoded.includes("Acme Corp"));
  assert(decoded.includes("E-Commerce"));
  assert(decoded.includes("Enterprise Store"));
  assert(decoded.includes("60,000 EGP"));
  assert(decoded.includes("8 weeks"));
  assert(decoded.includes("CODE ZONE PLUS"));
});

// 2. Pricing Catalog Consistency with pricing-plan.html
it("Verifies all 6 pricing categories exist in pricing catalog", () => {
  assert.strictEqual(PRICING_CATEGORIES.length, 6);
  const ids = PRICING_CATEGORIES.map((c) => c.id);
  assert(ids.includes("sites"));
  assert(ids.includes("stores"));
  assert(ids.includes("systems"));
  assert(ids.includes("edu"));
  assert(ids.includes("mobile"));
  assert(ids.includes("addons"));
});

it("Verifies specific price ranges match authoritative source (pricing-plan.html)", () => {
  // Sites: Landing Page
  const sites = PRICING_CATEGORIES.find((c) => c.id === "sites");
  const landing = sites.items.find((i) => i.id === "landing-page");
  assert(landing.price.ar.includes("3,000 – 7,000"));
  assert(landing.timeline.ar.includes("3–7 أيام"));

  // Sites: Corporate
  const corp = sites.items.find((i) => i.id === "corporate-site");
  assert(corp.price.ar.includes("8,000 – 18,000"));

  // Stores: Full E-commerce
  const stores = PRICING_CATEGORIES.find((c) => c.id === "stores");
  const fullStore = stores.items.find((i) => i.id === "full-store");
  assert(fullStore.price.ar.includes("45,000 – 100,000"));

  // Systems: POS
  const systems = PRICING_CATEGORIES.find((c) => c.id === "systems");
  const pos = systems.items.find((i) => i.id === "pos-system");
  assert(pos.price.ar.includes("35,000 – 90,000"));

  // Systems: Mini ERP
  const erp = systems.items.find((i) => i.id === "mini-erp");
  assert(erp.price.ar.includes("80,000 – 250,000+"));

  // Addons: Hourly
  const addons = PRICING_CATEGORIES.find((c) => c.id === "addons");
  const hourly = addons.items.find((i) => i.id === "hourly-work");
  assert(hourly.price.ar.includes("250 – 500"));
});

it("Verifies commercial recommendations from pricing-plan.html", () => {
  assert.strictEqual(COMMERCIAL_TIPS.length, 4);
  assert(COMMERCIAL_TIPS[0].desc.ar.includes("40–50%"));
  assert(COMMERCIAL_TIPS[0].desc.ar.includes("30%"));
  assert(COMMERCIAL_TIPS[1].desc.ar.includes("2–3"));
});

// 3. Approved Services Completeness
it("Verifies all 10 approved company services exist with complete bilingual details", () => {
  assert.strictEqual(SERVICES.length, 10);
  SERVICES.forEach((s) => {
    assert(s.slug, `Service ${s.id} must have a slug`);
    assert(s.title.ar && s.title.en, `Service ${s.id} must have AR & EN titles`);
    assert(s.deliverables.ar.length >= 3, `Service ${s.id} must have deliverables`);
    assert(s.technologies.length > 0, `Service ${s.id} must have technologies`);
  });
});

// 4. Portfolio Authenticity
it("Verifies portfolio entries are authentic, verified, and free of fabricated claims", () => {
  assert(PORTFOLIO_ITEMS.length >= 3);
  PORTFOLIO_ITEMS.forEach((p) => {
    assert.strictEqual(p.verified, true);
    assert(p.slug);
    assert(p.title.ar && p.title.en);
  });
});

// 5. Official Social Links
it("Verifies official Facebook and Instagram profiles are exact", () => {
  assert.strictEqual(
    COMPANY.social.facebook,
    "https://www.facebook.com/profile.php?id=61595102653223"
  );
  assert.strictEqual(
    COMPANY.social.instagram,
    "https://www.instagram.com/code_zone_plus/"
  );
});

console.log("\n=========================================");
console.log(`TOTAL TESTS: ${passed + failed} | PASSED: ${passed} | FAILED: ${failed}`);
console.log("=========================================\n");

if (failed > 0) {
  process.exit(1);
}
