export type Locale = "ar" | "en";

export interface LocalizedString {
  ar: string;
  en: string;
}

export interface LocalizedArray {
  ar: string[];
  en: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  category: string;
  estimatedPrice: LocalizedString;
  estimatedTimeline: LocalizedString;
  businessProblem: LocalizedString;
  whoIsItFor: LocalizedArray;
  useCases: LocalizedArray;
  deliverables: LocalizedArray;
  technologies: string[];
  optionalAddons: LocalizedArray;
  quoteFactors: LocalizedArray;
  iconName: string;
}

export interface PricingItem {
  id: string;
  name: LocalizedString;
  details?: LocalizedString;
  price: LocalizedString;
  timeline: LocalizedString;
  unit?: LocalizedString;
  popular?: boolean;
}

export interface PricingCategory {
  id: string;
  title: LocalizedString;
  description?: LocalizedString;
  items: PricingItem[];
  footerNote?: LocalizedString;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  problem: LocalizedString;
  scopeOfWork: LocalizedArray;
  features: LocalizedArray;
  technologies: string[];
  demoUrl?: string;
  image?: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  category: "general" | "pricing" | "timeline" | "design" | "payments" | "ownership" | "hosting" | "support" | "ecommerce" | "privacy";
  categoryTitle: LocalizedString;
  question: LocalizedString;
  answer: LocalizedString;
}

export interface SpecialOffer {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  eligibleServices: LocalizedArray;
  includedFeatures: LocalizedArray;
  exclusions: LocalizedArray;
  originalPrice?: string;
  offerPrice?: string;
  validUntil?: string;
  active: boolean;
}

export interface ProcessStage {
  step: number;
  title: LocalizedString;
  description: LocalizedString;
  deliverable: LocalizedString;
  icon: string;
}

export interface HandoverItem {
  category: LocalizedString;
  included: LocalizedArray;
  conditional: LocalizedArray;
}
