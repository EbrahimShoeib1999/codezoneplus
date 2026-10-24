"use client";

import * as React from "react";
import { isMotionEnabled } from "@/components/reveal";

/**
 * Desktop-only pointer tilt wrapper shared across premium cards.
 * - No-op on touch devices (pointerType guard + `.tilt` disabled under
 *   `@media (hover: none)` in globals.css).
 * - No-op when reduced motion / no-JS (motion gate via isMotionEnabled()).
 * Keeps tilt subtle (<=5deg) and never moves content outside its box.
 */
export function TiltCard({
  children,
  className = "",
  max = 5,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (e.pointerType !== "mouse") return;
    if (!isMotionEnabled()) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${(-py * (max * 0.8)).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  return (
    <div ref={ref} onPointerMove={handleMove} onPointerLeave={reset} className={`tilt ${className}`}>
      {children}
    </div>
  );
}
