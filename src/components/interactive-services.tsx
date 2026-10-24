"use client";

import * as React from "react";
import Link from "next/link";
import { Locale, Service } from "@/types";
import { isRtl } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import {
  Tag,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  ShoppingCart,
  UtensilsCrossed,
  Briefcase,
  Smartphone,
  Server,
  Layers,
  GraduationCap,
  Palette,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

interface InteractiveServicesProps {
  services: Service[];
  locale: Locale;
}

const CATEGORY_MAP: Record<string, { icon: React.ComponentType<{ className?: string }>; ar: string; en: string }> = {
  all: { icon: Layers, ar: "كافة الخدمات", en: "All Services" },
  sites: { icon: Globe, ar: "المواقع والويب", en: "Web & Platforms" },
  stores: { icon: ShoppingCart, ar: "المتاجر الإلكترونية", en: "E-Commerce" },
  systems: { icon: Briefcase, ar: "أنظمة الأعمال وERP", en: "CRM & ERP" },
  mobile: { icon: Smartphone, ar: "تطبيقات الموبايل", en: "Mobile Apps" },
};

// Service-specific icons used inside the distinctive card visuals.
const SERVICE_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-development": Globe,
  ecommerce: ShoppingCart,
  "restaurant-hospitality": UtensilsCrossed,
  "business-systems": Briefcase,
  "mobile-apps": Smartphone,
  "educational-platforms": GraduationCap,
  "backend-api": Server,
  "ui-ux-design": Palette,
  "hosting-maintenance": ShieldCheck,
  "consultation-audits": FileCheck,
};

/** Lightweight CSS mini-visual tailored to each service type (no screenshots). */
function ServiceVisual({ slug }: { slug: string }) {
  const Icon = SERVICE_ICON[slug] ?? Globe;
  const frame = "relative h-40 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0E131A]";
  const lime = "#A3E635";
  const bar = "rounded bg-neutral-200 dark:bg-neutral-700";

  const chrome = (
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-200 dark:border-neutral-800">
      <span className="w-2 h-2 rounded-full" style={{ background: lime }} />
      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      <span className={`ml-2 h-2 flex-1 ${bar}`} />
    </div>
  );

  switch (slug) {
    case "web-development":
      return (
        <div className={frame}>
          {chrome}
          <div className="p-4 space-y-3">
            <div className="h-10 rounded-lg" style={{ background: "rgba(163,230,53,0.16)" }} />
            <div className="grid grid-cols-3 gap-2">
              <div className={`h-6 ${bar}`} />
              <div className={`h-6 ${bar}`} />
              <div className={`h-6 ${bar}`} />
            </div>
            <div className={`h-2 w-2/3 ${bar}`} />
          </div>
          <Icon className="absolute bottom-3 right-3 w-6 h-6 text-[#A3E635] opacity-70" />
        </div>
      );
    case "ecommerce":
      return (
        <div className={`${frame} p-4`}>
          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F] p-2 space-y-1.5">
                <div className={`h-8 ${bar}`} />
                <div className="flex items-center justify-between">
                  <div className={`h-2 w-8 ${bar}`} />
                  <div className="h-2 w-5 rounded" style={{ background: "rgba(163,230,53,0.5)" }} />
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold" style={{ background: lime, color: "#0B0F12" }}>
            <ShoppingCart className="w-3 h-3" />
            Buy
          </div>
        </div>
      );
    case "restaurant-hospitality":
      return (
        <div className={`${frame} p-4 space-y-2`}>
          <div className="flex items-center gap-2 mb-1">
            <UtensilsCrossed className="w-4 h-4 text-[#A3E635]" />
            <div className={`h-2 w-24 ${bar}`} />
          </div>
          {[
              { w: "w-4/5", d: "new" },
              { w: "w-3/5", d: "prep" },
              { w: "w-2/3", d: "done" },
            ].map((row, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F] px-3 py-2">
              <div className={`h-2 ${row.w} ${bar}`} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: lime, opacity: i === 0 ? 1 : 0.4 }} />
            </div>
          ))}
          <div className="absolute bottom-3 right-3 w-8 h-8 rounded grid grid-cols-2 gap-0.5 p-1 bg-neutral-900 dark:bg-white">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="rounded-[1px] bg-white dark:bg-neutral-900" style={{ opacity: 0.9 }} />
            ))}
          </div>
        </div>
      );
    case "business-systems":
      return (
        <div className={`${frame} p-4`}>
          <div className="flex items-center justify-between mb-3">
            <Briefcase className="w-4 h-4 text-[#A3E635]" />
            <div className={`h-2 w-16 ${bar}`} />
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F] p-2">
                <div className="h-2 w-6 rounded mb-1" style={{ background: "rgba(163,230,53,0.5)" }} />
                <div className={`h-3 w-8 ${bar}`} />
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-12">
            {[45, 70, 35, 85, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 3 ? lime : "rgba(163,230,53,0.35)" }} />
            ))}
          </div>
        </div>
      );
    case "mobile-apps":
      return (
        <div className={`${frame} flex items-center justify-center`}>
          <div className="w-20 h-36 rounded-2xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#14181F] p-2 space-y-2 relative">
            <div className="mx-auto w-8 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-8 rounded-lg" style={{ background: "rgba(163,230,53,0.18)" }} />
            {[0, 1, 2].map((i) => (
              <div key={i} className={`h-3 ${bar}`} />
            ))}
            <Smartphone className="absolute -bottom-1 -right-1 w-5 h-5 text-[#A3E635]" />
          </div>
        </div>
      );
    case "educational-platforms":
      return (
        <div className={`${frame} p-4 space-y-3`}>
          <div className="relative h-16 rounded-lg bg-neutral-900 dark:bg-black flex items-center justify-center">
            <span className="w-0 h-0 border-y-8 border-y-transparent border-l-[12px]" style={{ borderLeftColor: lime }} />
            <GraduationCap className="absolute top-2 right-2 w-4 h-4 text-[#A3E635]" />
          </div>
          <div className="h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
            <div className="h-full w-3/4 rounded-full" style={{ background: lime }} />
          </div>
          <div className="flex items-center justify-between">
            <div className={`h-2 w-20 ${bar}`} />
            <div className="h-4 w-10 rounded" style={{ background: "rgba(163,230,53,0.4)" }} />
          </div>
        </div>
      );
    case "backend-api":
      return (
        <div className={`${frame} flex items-center justify-center`}>
          <div className="relative w-40 h-28">
            {[
              { t: "top-0", l: "left-1/2 -translate-x-1/2" },
              { t: "bottom-0", l: "left-1/2 -translate-x-1/2" },
              { t: "top-1/2 -translate-y-1/2", l: "left-0" },
              { t: "top-1/2 -translate-y-1/2", l: "right-0" },
            ].map((p, i) => (
              <div key={i} className={`absolute ${p.t} ${p.l} w-8 h-8 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F] flex items-center justify-center`}>
                <Server className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
              </div>
            ))}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center z-10" style={{ background: lime, color: "#0B0F12" }}>
              <Layers className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-16 border border-dashed border-[#A3E635]/40 rounded-xl" />
          </div>
        </div>
      );
    case "ui-ux-design":
      return (
        <div className={`${frame} p-4`}>
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-[#A3E635]" />
            <div className="flex gap-1">
              {["#A3E635", "#10B981", "#6366F1", "#F59E0B"].map((c) => (
                <span key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 h-20">
            <div className="col-span-1 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700" />
            <div className="col-span-3 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 p-2 space-y-2">
              <div className="h-6 rounded" style={{ background: "rgba(163,230,53,0.2)" }} />
              <div className={`h-2 w-full ${bar}`} />
            </div>
          </div>
        </div>
      );
    case "hosting-maintenance":
      return (
        <div className={`${frame} p-4 space-y-2`}>
          <div className="flex items-center justify-between mb-1">
            <ShieldCheck className="w-4 h-4 text-[#A3E635]" />
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#A3E635]">
              <span className="w-2 h-2 rounded-full bg-[#A3E635] cz-pulse-glow" />
              Online
            </span>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F] px-3 py-2">
              <Server className="w-3.5 h-3.5 text-neutral-400" />
              <div className={`h-2 flex-1 ${bar}`} />
              <div className="h-2 w-2 rounded-full" style={{ background: lime }} />
            </div>
          ))}
        </div>
      );
    case "consultation-audits":
      return (
        <div className={`${frame} p-4`}>
          <div className="flex items-center gap-2 mb-3">
            <FileCheck className="w-4 h-4 text-[#A3E635]" />
            <div className={`h-2 w-24 ${bar}`} />
          </div>
          <div className="space-y-2">
            {[
              { w: "w-11/12", ok: true },
              { w: "w-9/12", ok: true },
              { w: "w-10/12", ok: false },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${row.ok ? "text-[#A3E635]" : "text-amber-500"}`} />
                <div className={`h-2 ${row.w} ${bar}`} />
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className={frame}>
          {chrome}
          <div className="p-4 space-y-3">
            <div className="h-10 rounded-lg" style={{ background: "rgba(163,230,53,0.16)" }} />
            <div className={`h-2 w-2/3 ${bar}`} />
          </div>
          <Icon className="absolute bottom-3 right-3 w-6 h-6 text-[#A3E635] opacity-70" />
        </div>
      );
  }
}

export function InteractiveServices({ services, locale }: InteractiveServicesProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const rtl = isRtl(locale);

  const getCategoryGroup = (service: Service): string => {
    const slug = service.slug;
    if (slug.includes("ecommerce")) return "stores";
    if (slug.includes("business") || slug.includes("restaurant") || slug.includes("backend")) return "systems";
    if (slug.includes("mobile")) return "mobile";
    return "sites";
  };

  const filteredServices = React.useMemo(() => {
    if (selectedCategory === "all") return services;
    return services.filter((s) => getCategoryGroup(s) === selectedCategory);
  }, [services, selectedCategory]);

  const categories = ["all", "sites", "stores", "systems", "mobile"];

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((catKey) => {
          const cat = CATEGORY_MAP[catKey];
          const Icon = cat.icon;
          const isActive = selectedCategory === catKey;

          return (
            <button
              key={catKey}
              onClick={() => setSelectedCategory(catKey)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${
                isActive
                  ? "bg-[#A3E635] text-[#0B0F12] font-bold shadow-md lime-glow-subtle scale-105"
                  : "bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-[#A3E635]/50 hover:text-[#A3E635]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{locale === "ar" ? cat.ar : cat.en}</span>
              {isActive && (
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#0B0F12]/15 dark:bg-black/25">
                  {filteredServices.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Services Grid — distinctive per-type visuals, staggered reveal, pointer tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service, i) => {
          return (
            <Reveal key={service.id} className="h-full" delay={(i % 3) * 90} y={30}>
              <TiltCard className="h-full">
                <div
                  className="group relative h-full rounded-2xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800/90 p-6 sm:p-7 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 hover:border-[#A3E635]/70 hover:shadow-2xl hover:shadow-[#A3E635]/10 focus-within:border-[#A3E635]"
                >
                  {/* Subtle top lime indicator on hover */}
                  <div
                    className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-[#A3E635] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  <div className="tilt-layer">
                    {/* Distinctive service visual */}
                    <div className="mb-5">
                      <ServiceVisual slug={service.slug} />
                    </div>

                    {/* Title + category */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-alexandria group-hover:text-[#A3E635] transition-colors leading-tight">
                        {service.title[locale]}
                      </h3>
                      <span className="shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-1 rounded-md border border-[#A3E635]/20">
                        {service.category}
                      </span>
                    </div>

                    {/* Business-friendly description */}
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {service.shortDescription[locale]}
                    </p>

                    {/* Key deliverables */}
                    <div className="space-y-2 mb-6">
                      {service.deliverables[locale].slice(0, 3).map((d, didx) => (
                        <div key={didx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A3E635] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Pricing, Timeline, Link */}
                  <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
                    <div className="flex items-center justify-between text-xs mb-4">
                      <span className="inline-flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white font-alexandria">
                        <Tag className="w-3.5 h-3.5 text-[#A3E635]" />
                        <span dir="auto">{service.estimatedPrice[locale]}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500">
                        <Clock className="w-3 h-3" />
                        <span>{service.estimatedTimeline[locale]}</span>
                      </span>
                    </div>

                    <Link
                      href={`/${locale}/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-xs font-bold transition-all group-hover:bg-[#A3E635] group-hover:text-[#0B0F12] group-hover:border-[#A3E635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
                    >
                      <span>{locale === "ar" ? "تفاصيل الخدمة وحساب التكلفة" : "Service Scope & Quotation"}</span>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          rtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                        }`}
                      />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
