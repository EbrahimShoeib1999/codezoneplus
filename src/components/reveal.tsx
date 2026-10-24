"use client";

import * as React from "react";

/**
 * Lightweight, dependency-free scroll reveal primitive.
 *
 * Design goals (project rules):
 * - SSR-safe: server-rendered HTML stays fully readable. Elements are only
 *   hidden when the `motion-enabled` flag is present on <html> (added by an
 *   inline script that respects prefers-reduced-motion and IntersectionObserver
 *   availability). Without JS, or with reduced motion, everything is visible.
 * - Never leaves content permanently invisible: a single shared
 *   IntersectionObserver always delivers an initial callback for on-screen
 *   elements, and a safety pass reveals any element that is already within or
 *   above the viewport if initialization ever fails.
 * - Transform + opacity only (GPU friendly), optional stagger via `delay`.
 */

type ObserverCallback = (entry: IntersectionObserverEntry, el: HTMLElement) => void;

let sharedObserver: IntersectionObserver | null = null;
const registry = new WeakMap<HTMLElement, ObserverCallback>();

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = registry.get(entry.target as HTMLElement);
          if (cb) cb(entry, entry.target as HTMLElement);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
  }
  return sharedObserver;
}

export function isMotionEnabled(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("motion-enabled");
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms. */
  delay?: number;
  /** Vertical offset (px) the element rises from. */
  y?: number;
  /** Keep animating on re-entry (default true = animate once). */
  repeat?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  repeat = false,
  id,
  style,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Motion intentionally disabled (no-JS / reduced motion / unsupported):
    // ensure the element is revealed and never hidden.
    if (!isMotionEnabled()) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = getObserver();
    if (!observer) {
      el.classList.add("is-revealed");
      return;
    }

    registry.set(el, (entry, node) => {
      if (entry.isIntersecting) {
        node.classList.add("is-revealed");
        if (!repeat) observer.unobserve(node);
      } else if (repeat) {
        node.classList.remove("is-revealed");
      }
    });
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      registry.delete(el);
    };
  }, [repeat]);

  return (
    <div
      ref={ref}
      id={id}
      data-reveal=""
      className={className}
      style={{
        ["--reveal-delay" as string]: `${delay}ms`,
        ["--reveal-y" as string]: `${y}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
