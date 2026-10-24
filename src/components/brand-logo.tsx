import Link from "next/link";
import Image from "next/image";
import { Locale } from "@/types";

interface BrandLogoProps {
  locale: Locale;
  variant?: "symbol-only" | "full" | "footer" | "compact";
  className?: string;
}

export function BrandLogo({ locale, variant = "symbol-only", className = "" }: BrandLogoProps) {
  const href = `/${locale}`;

  // Footer or designated brand sections: Display full official horizontal logo
  if (variant === "footer" || variant === "full") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] rounded-xl transition-transform hover:opacity-95 ${className}`}
        aria-label="CODE ZONE PLUS - BUILD. CREATE. LAUNCH."
      >
        <div className="relative h-11 w-44 sm:w-52 overflow-hidden rounded-xl bg-[#0B0F12] border border-[#A3E635]/25 flex items-center justify-center p-1.5 shadow-md">
          <Image
            src="/images/logo.jpeg"
            alt="CODE ZONE PLUS - BUILD. CREATE. LAUNCH."
            fill
            sizes="(max-width: 640px) 176px, 208px"
            className="object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  // Navbar default: Standalone Brand Symbol ONLY (no horizontal company name or tagline)
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] rounded-xl transition-all duration-300 ${className}`}
      aria-label="CODE ZONE PLUS"
      title="CODE ZONE PLUS - الصفحة الرئيسية"
    >
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0B0F12] border border-[#A3E635]/35 group-hover:border-[#A3E635] flex items-center justify-center p-1.5 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:lime-glow overflow-hidden">
        <Image
          src="/images/symbol-transparent.png"
          alt="CODE ZONE PLUS Brand Mark"
          width={40}
          height={40}
          className="object-contain w-full h-full filter drop-shadow-[0_0_8px_rgba(163,230,53,0.35)] transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </Link>
  );
}

export function BrandSymbol({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-[#0B0F12] border border-[#A3E635]/30 flex items-center justify-center p-1.5 shadow-sm ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/symbol-transparent.png"
        alt="CODE ZONE PLUS Symbol"
        width={40}
        height={40}
        className="object-contain w-full h-full filter drop-shadow-[0_0_6px_rgba(163,230,53,0.3)]"
      />
    </div>
  );
}

