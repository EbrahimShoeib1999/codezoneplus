"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ locale = "ar" }: { locale?: "ar" | "en" }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label={locale === "ar" ? "تبديل المظهر" : "Toggle Theme"}
        className="w-9 h-9 rounded-lg border border-white/10 dark:border-white/10 flex items-center justify-center opacity-70"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={locale === "ar" ? "تبديل المظهر" : "Toggle Theme"}
      className="w-9 h-9 rounded-lg border border-neutral-300 dark:border-neutral-800 hover:border-[#A3E635] dark:hover:border-[#A3E635] flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:text-[#A3E635] dark:hover:text-[#A3E635] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
      title={isDark ? (locale === "ar" ? "تفعيل الوضع النهاري" : "Switch to Light Mode") : (locale === "ar" ? "تفعيل الوضع الليلي" : "Switch to Dark Mode")}
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
