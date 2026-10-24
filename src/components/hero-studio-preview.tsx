"use client";

import * as React from "react";
import { Locale } from "@/types";
import { isRtl } from "@/lib/i18n";

interface HeroStudioPreviewProps {
  locale: Locale;
}

/**
 * Premium hero visual: a layered product showcase representing the actual
 * digital products CODE ZONE PLUS builds (a website preview, a business
 * dashboard, and a mobile app). Built entirely from lightweight CSS + inline
 * SVG so it stays fast and introduces no heavy 3D dependency. It carries a
 * restrained pointer-parallax depth on hover-capable desktops and gentle
 * floating accents, both disabled under reduced motion / touch.
 *
 * All figures are clearly illustrative UI mockups — no fabricated client names,
 * revenue, or performance scores.
 */
export function HeroStudioPreview({ locale }: HeroStudioPreviewProps) {
  const rtl = isRtl(locale);
  const ar = locale === "ar";
  const shellRef = React.useRef<HTMLDivElement>(null);

  const [tilt, setTilt] = React.useState({ rx: 0, ry: 0 });

  // Pointer-driven micro parallax — desktop hover only, never on touch/reduced.
  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    if (typeof document !== "undefined" && !document.documentElement.classList.contains("motion-enabled")) return;
    const el = shellRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 5, ry: px * 7 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 sm:mt-16 select-none" dir={rtl ? "rtl" : "ltr"}>
      {/* Ambient glow backdrop */}
      <div
        className="absolute -inset-2 sm:-inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[#A3E635]/20 via-transparent to-[#A3E635]/10 blur-2xl opacity-80 pointer-events-none cz-pulse-glow"
        aria-hidden="true"
      />

      <div
        ref={shellRef}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        className="relative rounded-3xl bg-[#0E141C] border border-[#A3E635]/25 shadow-2xl p-4 sm:p-8 overflow-hidden [perspective:1600px]"
      >
        {/* Caption so the mock is honestly framed as an illustrative preview */}
        <p className="absolute top-3 left-4 rtl:left-auto rtl:right-4 text-[10px] font-medium uppercase tracking-widest text-neutral-500 z-20">
          {ar ? "معاينة توضيحية لمنتجات رقمية" : "Illustrative product preview"}
        </p>

        <div
          className="relative transition-transform duration-200 ease-out will-change-transform"
          style={{ transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
        >
          {/* MAIN: Website preview inside a browser frame */}
          <div className="relative rounded-2xl bg-[#0B0F12] border border-neutral-800 shadow-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#12171E] border-b border-neutral-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
              <div className="mx-auto flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-neutral-800 text-[11px] text-neutral-500 max-w-[46%]">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#A3E635] shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="truncate">your-brand.com</span>
              </div>
            </div>

            {/* Mock web page */}
            <div className="p-5 sm:p-6 grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-7 space-y-3">
                <div className="h-3 w-24 rounded-full bg-[#A3E635]/30" />
                <div className="h-6 w-11/12 rounded-lg bg-white/10" />
                <div className="h-6 w-2/3 rounded-lg bg-white/10" />
                <div className="h-2.5 w-full rounded bg-white/5" />
                <div className="h-2.5 w-10/12 rounded bg-white/5" />
                <div className="flex gap-2 pt-1">
                  <div className="h-9 w-28 rounded-lg bg-[#A3E635]" />
                  <div className="h-9 w-24 rounded-lg border border-white/15" />
                </div>
              </div>
              <div className="col-span-12 sm:col-span-5">
                <div className="h-full min-h-[120px] rounded-xl bg-gradient-to-br from-[#A3E635]/25 to-transparent border border-[#A3E635]/20 p-3 flex flex-col justify-end gap-2">
                  <div className="h-2.5 w-3/4 rounded bg-white/15" />
                  <div className="h-2.5 w-1/2 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>

          {/* OVERLAP: Business dashboard panel (elevated, floats) */}
          <div
            className={`hidden md:block absolute -bottom-8 ${rtl ? "-right-6" : "-left-8"} w-56 rounded-2xl bg-[#12171E] border border-neutral-800 shadow-2xl p-4 cz-float`}
            style={{ transform: "translateZ(45px)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold text-white">{ar ? "لوحة التحكم" : "Business Dashboard"}</span>
              <span className="w-6 h-6 rounded-lg bg-[#A3E635]/15 border border-[#A3E635]/25" />
            </div>
            <div className="flex items-end gap-1.5 h-20">
              {[38, 62, 45, 78, 55, 90, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-[#A3E635]/70 cz-grow-bar"
                  style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.08}s` }}
                />
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-2/3 rounded bg-white/5" />
            </div>
          </div>

          {/* OVERLAP: Mobile app frame (elevated, floats slower) */}
          <div
            className={`hidden sm:block absolute -bottom-10 ${rtl ? "-left-6" : "-right-6"} w-28 rounded-[1.4rem] bg-[#0B0F12] border-2 border-neutral-700 shadow-2xl p-2 cz-float-slow`}
            style={{ transform: "translateZ(65px)" }}
          >
            <div className="h-1.5 w-8 mx-auto rounded-full bg-neutral-700 mb-2" />
            <div className="rounded-xl bg-[#12171E] border border-neutral-800 p-2 space-y-2">
              <div className="h-8 rounded-lg bg-gradient-to-br from-[#A3E635]/30 to-transparent" />
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-3/4 rounded bg-white/5" />
              <div className="h-6 rounded-lg bg-[#A3E635]/80" />
              <div className="grid grid-cols-3 gap-1 pt-1">
                <div className="h-5 rounded bg-white/5" />
                <div className="h-5 rounded bg-white/5" />
                <div className="h-5 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip — truthful, outcome-focused, no fake metrics */}
        <div className="relative mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-neutral-400">
          <span className="inline-flex items-center gap-1.5">
            <Dot /> {ar ? "تصميم مخصص لعلامتك" : "Custom to your brand"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Dot /> {ar ? "يعمل بسلاسة على كل الشاشات" : "Smooth on every device"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Dot /> {ar ? "كود مملوك لك بالكامل" : "You own the full code"}
          </span>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-[#A3E635] inline-block" aria-hidden="true" />;
}
