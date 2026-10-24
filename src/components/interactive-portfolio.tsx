"use client";

import * as React from "react";
import Link from "next/link";
import { Locale, PortfolioItem } from "@/types";
import { isRtl } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  UtensilsCrossed,
  Layers,
  ShoppingCart,
} from "lucide-react";

interface InteractivePortfolioProps {
  items: PortfolioItem[];
  locale: Locale;
}

/** Distinct, honest UI mockups per project (no fabricated client screenshots). */
function ProjectPreview({ slug, locale }: { slug: string; locale: Locale }) {
  const lime = "#A3E635";
  const panel = "rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#14181F]";
  const bar = "rounded bg-neutral-200 dark:bg-neutral-700";

  if (slug === "restaurant-pos-kds") {
    return (
      <div className="grid grid-cols-2 gap-3">
        {/* Table QR menu on a phone */}
        <div className="rounded-xl border-2 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#14181F] p-2 space-y-2">
          <div className="mx-auto w-8 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
          <div className="flex items-center gap-1">
            <UtensilsCrossed className="w-3 h-3 text-[#A3E635]" />
            <div className={`h-2 w-10 ${bar}`} />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between rounded px-1.5 py-1" style={{ background: i === 0 ? "rgba(163,230,53,0.14)" : "transparent" }}>
              <div className={`h-2 w-12 ${bar}`} />
              <div className="h-2 w-4 rounded" style={{ background: "rgba(163,230,53,0.5)" }} />
            </div>
          ))}
        </div>
        {/* Kitchen display board */}
        <div className="rounded-xl bg-neutral-900 dark:bg-black p-2 space-y-1.5">
          <div className="text-[8px] font-mono uppercase tracking-wider text-[#A3E635]">KDS</div>
          {[
            { w: "w-4/5", c: lime },
            { w: "w-3/5", c: "rgba(163,230,53,0.55)" },
            { w: "w-2/3", c: "rgba(163,230,53,0.3)" },
          ].map((r, i) => (
            <div key={i} className="rounded p-1.5 bg-neutral-800">
              <div className={`h-2 ${r.w} rounded`} style={{ background: r.c }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "business-crm") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[
          { t: locale === "ar" ? "جديد" : "New", n: 3, on: false },
          { t: locale === "ar" ? "قيد العرض" : "Quoted", n: 2, on: false },
          { t: locale === "ar" ? "مكتمل" : "Won", n: 1, on: true },
        ].map((col, ci) => (
          <div key={ci} className={`${panel} p-2 space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wide text-neutral-500">{col.t}</span>
              <span className="text-[9px] font-bold px-1.5 rounded" style={{ background: col.on ? lime : "rgba(163,230,53,0.15)", color: col.on ? "#0B0F12" : lime }}>{col.n}</span>
            </div>
            {Array.from({ length: col.n }).map((_, i) => (
              <div key={i} className="rounded-md border border-neutral-200 dark:border-neutral-800 p-1.5 space-y-1">
                <div className={`h-2 w-3/4 ${bar}`} />
                <div className="h-1.5 w-1/2 rounded" style={{ background: "rgba(163,230,53,0.4)" }} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  if (slug === "custom-ecommerce-store") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={`${panel} p-1.5 space-y-1.5`}>
            <div className={`h-8 ${bar}`} />
            <div className={`h-1.5 w-3/4 ${bar}`} />
            <div className="flex items-center justify-between">
              <div className="h-1.5 w-6 rounded" style={{ background: "rgba(163,230,53,0.5)" }} />
              <ShoppingCart className="w-2.5 h-2.5 text-neutral-400" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Default: codezone-platform — bilingual marketing site in a browser frame
  return (
    <div className={`${panel} overflow-hidden`}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-200 dark:border-neutral-800">
        <span className="w-2 h-2 rounded-full" style={{ background: lime }} />
        <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600" />
        <div className={`ml-2 h-2 flex-1 ${bar}`} />
      </div>
      <div className="p-3 space-y-2">
        <div className="h-8 rounded-lg" style={{ background: "rgba(163,230,53,0.16)" }} />
        <div className="grid grid-cols-3 gap-2">
          <div className={`h-6 ${bar}`} />
          <div className={`h-6 ${bar}`} />
          <div className={`h-6 ${bar}`} />
        </div>
        <div className="flex items-center gap-1.5">
          <Layers className="w-3 h-3 text-[#A3E635]" />
          <div className={`h-2 w-20 ${bar}`} />
        </div>
      </div>
    </div>
  );
}

export function InteractivePortfolio({ items, locale }: InteractivePortfolioProps) {
  const rtl = isRtl(locale);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {items.map((item, index) => {
        // First project gets a featured, full-width editorial layout on large screens.
        const featured = index === 0;
        // With an even item count, the last 2-col row would leave an empty hole
        // beside the final card; let it close the row full-width instead.
        const fillsRow = index === items.length - 1 && items.length % 2 === 0;
        const spanClass = featured || fillsRow ? "md:col-span-2" : "";

        return (
          <Reveal key={item.id} className={`${spanClass} h-full`} delay={(index % 2) * 110} y={34}>
            <TiltCard className="h-full" max={4}>
              <div
                className={`group tilt-layer h-full rounded-3xl bg-white dark:bg-[#12171E] border border-neutral-200 dark:border-neutral-800/90 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#A3E635]/60 transition-[border-color,box-shadow] duration-300 flex flex-col ${
                  featured ? "lg:flex-row" : ""
                }`}
              >
                {/* Distinct layered preview */}
                <div
                  className={`relative shrink-0 p-4 sm:p-5 bg-neutral-100 dark:bg-[#0E141C] border-b border-neutral-200 dark:border-neutral-800 ${
                    featured ? "lg:w-1/2 lg:border-b-0 lg:border-e" : ""
                  }`}
                >
                  <ProjectPreview slug={item.slug} locale={locale} />
                </div>

                {/* Project Body */}
                <div className={`p-7 sm:p-8 flex-1 flex flex-col justify-between ${featured ? "lg:p-9" : ""}`}>
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#A3E635] bg-[#A3E635]/10 px-2.5 py-1 rounded-md border border-[#A3E635]/20">
                        {item.category[locale]}
                      </span>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-[#A3E635] bg-[#A3E635]/10 px-2 py-0.5 rounded-full font-medium">
                          <ShieldCheck className="w-3 h-3" />
                          <span>{locale === "ar" ? "بناء مُنجَز" : "Verified Build"}</span>
                        </span>
                      )}
                    </div>

                    <h3 className={`font-extrabold text-neutral-900 dark:text-white mb-3 font-alexandria group-hover:text-[#A3E635] transition-colors leading-tight ${featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-2xl sm:text-3xl"}`}>
                      {item.title[locale]}
                    </h3>

                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                      {item.description[locale]}
                    </p>

                    {/* Scope highlights */}
                    <div className="space-y-2.5 mb-6">
                      {item.scopeOfWork[locale].slice(0, 3).map((scope, sidx) => (
                        <div key={sidx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-[#A3E635] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-4">
                    <Link
                      href={`/${locale}/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white hover:text-[#A3E635] dark:hover:text-[#A3E635] transition-colors"
                    >
                      <span>{locale === "ar" ? "استعراض تفاصيل المشروع" : "Explore Case Study"}</span>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          rtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
                        }`}
                      />
                    </Link>

                    {item.demoUrl && (
                      <a
                        href={item.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#A3E635] hover:underline"
                      >
                        <span>{locale === "ar" ? "رابط المنصة" : "Live Demo"}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        );
      })}
    </div>
  );
}
