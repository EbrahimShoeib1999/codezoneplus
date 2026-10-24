"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/types";
import { Globe } from "lucide-react";

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  const targetLocale: Locale = currentLocale === "ar" ? "en" : "ar";

  // Replace locale prefix in the current pathname
  let targetPath = `/${targetLocale}`;
  if (pathname) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "ar" || segments[0] === "en")) {
      segments[0] = targetLocale;
      targetPath = `/${segments.join("/")}`;
    } else {
      targetPath = `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
    }
  }

  const label = targetLocale === "ar" ? "العربية" : "English";

  return (
    <Link
      href={targetPath}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-[#A3E635] dark:hover:border-[#A3E635] hover:text-[#A3E635] dark:hover:text-[#A3E635] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
      aria-label={`Switch to ${label}`}
      title={`Switch to ${label}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#A3E635]" />
      <span>{label}</span>
    </Link>
  );
}
