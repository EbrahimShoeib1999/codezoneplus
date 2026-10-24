"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/types";
import { getDictionary, isRtl } from "@/lib/i18n";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import {
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
  ChevronDown,
  Globe,
  ShoppingCart,
  UtensilsCrossed,
  Briefcase,
  Smartphone,
  Server,
  Sparkles,
} from "lucide-react";

export function NavigationHeader({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const dict = getDictionary(locale);
  const rtl = isRtl(locale);

  // Close mobile menu and dropdown on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const featuredServices = [
    {
      href: `/${locale}/services/web-development`,
      title: locale === "ar" ? "المواقع والمنصات التعريفية" : "Business Websites & Platforms",
      desc: locale === "ar" ? "مواقع سريعة تساعد عملاءك على اكتشاف خدماتك" : "Fast sites that help customers find and contact you",
      icon: Globe,
    },
    {
      href: `/${locale}/services/ecommerce`,
      title: locale === "ar" ? "المتاجر والتجارة الإلكترونية" : "Online Stores",
      desc: locale === "ar" ? "بيع أونلاين بتجربة شراء سهلة ودفع وشحن" : "Sell online with easy checkout, payments and shipping",
      icon: ShoppingCart,
    },
    {
      href: `/${locale}/services/restaurant-hospitality`,
      title: locale === "ar" ? "أنظمة المطاعم والكافيهات" : "Restaurant Systems",
      desc: locale === "ar" ? "إدارة الطلبات والمطبخ والمخزون بسهولة" : "Manage orders, kitchen and stock in one place",
      icon: UtensilsCrossed,
    },
    {
      href: `/${locale}/services/business-systems`,
      title: locale === "ar" ? "أنظمة إدارة الأعمال (CRM / ERP)" : "Business Management (CRM / ERP)",
      desc: locale === "ar" ? "تنظيم العملاء والمبيعات والمخازن والفواتير" : "Organize clients, sales, stock and invoicing",
      icon: Briefcase,
    },
    {
      href: `/${locale}/services/mobile-apps`,
      title: locale === "ar" ? "تطبيقات الهواتف الذكية" : "Mobile Apps",
      desc: locale === "ar" ? "تطبيقات لأجهزة أندرويد وآيفون" : "Apps for both Android and iPhone",
      icon: Smartphone,
    },
    {
      href: `/${locale}/services/backend-api`,
      title: locale === "ar" ? "ربط أنظمتك وبناء البنية الخلفية" : "Backend & System Integration",
      desc: locale === "ar" ? "نربط بياناتك وأنظمتك في مكان واحد بأمان" : "Connect your data and systems securely in one place",
      icon: Server,
    },
  ];

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/services`, label: dict.nav.services, isDropdown: true },
    { href: `/${locale}/pricing`, label: dict.nav.pricing },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/process`, label: dict.nav.process },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/faq`, label: dict.nav.faq },
  ];

  const quickWhatsAppUrl = buildDirectWhatsAppUrl(
    { topic: locale === "ar" ? "بدء استفسار مشروع جديد" : "New Project Discovery" },
    locale
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full glass-nav transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0B0F12]/95 backdrop-blur-xl border-b border-[#A3E635]/25 shadow-lg shadow-black/5 dark:shadow-black/40"
          : "bg-white/80 dark:bg-[#0B0F12]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-[#A3E635]/15"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* CRITICAL: Brand Symbol ONLY in Navbar */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <BrandLogo locale={locale} variant="symbol-only" />
          <span className="hidden sm:inline-block text-[11px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold border-l dark:border-neutral-800 rtl:border-l-0 rtl:border-r pl-3 rtl:pl-0 rtl:pr-3">
            STUDIO
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-1.5"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === `/${locale}`
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname?.startsWith(link.href);

            if (link.isDropdown) {
              return (
                <div
                  key={link.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    aria-expanded={servicesDropdownOpen}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${
                      isActive || servicesDropdownOpen
                        ? "text-[#A3E635] bg-[#A3E635]/10 font-semibold"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-[#A3E635] dark:hover:text-[#A3E635] hover:bg-neutral-100 dark:hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-[#A3E635]" : "text-neutral-400"
                      }`}
                    />
                  </button>

                  {/* Services Mega Dropdown */}
                  {servicesDropdownOpen && (
                    <div
                      className={`cz-drop-in absolute top-full mt-2 w-[520px] p-4 rounded-2xl bg-white/95 dark:bg-[#0E141C]/95 backdrop-blur-2xl border border-neutral-200 dark:border-[#A3E635]/25 shadow-2xl ${
                        rtl ? "right-0" : "left-0"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {featuredServices.map((svc) => {
                          const Icon = svc.icon;
                          return (
                            <Link
                              key={svc.href}
                              href={svc.href}
                              className="group/item flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-neutral-200 dark:hover:border-[#A3E635]/20"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#A3E635]/10 border border-[#A3E635]/20 flex items-center justify-center text-[#A3E635] flex-shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-neutral-900 dark:text-white group-hover/item:text-[#A3E635] transition-colors leading-tight">
                                  {svc.title}
                                </p>
                                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1 leading-normal">
                                  {svc.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between px-1">
                        <span className="text-[11px] text-neutral-500 font-medium">
                          {locale === "ar" ? "10 حلول برمجية لأنواع أعمال مختلفة" : "10 solutions for different types of businesses"}
                        </span>
                        <Link
                          href={`/${locale}/services`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#A3E635] hover:underline"
                        >
                          <span>{locale === "ar" ? "دليل كافة الخدمات" : "View All Services"}</span>
                          <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] ${
                  isActive
                    ? "text-[#A3E635] bg-[#A3E635]/10 font-semibold"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-[#A3E635] dark:hover:text-[#A3E635] hover:bg-neutral-100 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Utility Controls & CTAs */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeToggle locale={locale} />
          <LanguageSwitcher currentLocale={locale} />

          {/* WhatsApp Direct Action */}
          <a
            href={quickWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-800 dark:text-white border border-neutral-300 dark:border-neutral-800 hover:border-[#A3E635] text-xs font-semibold px-3.5 py-2.5 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
            title={dict.actions.chatWhatsApp}
          >
            <MessageCircle className="w-4 h-4 text-[#A3E635] fill-current" />
            <span className="hidden 2xl:inline">{dict.actions.chatWhatsApp}</span>
          </a>

          {/* Primary Project Inquiry CTA */}
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl hover:bg-[#bef264] transition-all lime-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span>{dict.actions.startProject}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${rtl ? "rotate-180" : ""}`} />
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white hover:text-[#A3E635] hover:border-[#A3E635] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden cz-slide-in fixed inset-x-0 top-20 bg-white/95 dark:bg-[#0B0F12]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-[#A3E635]/25 shadow-2xl p-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === `/${locale}`
                  ? pathname === `/${locale}`
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "text-[#A3E635] bg-[#A3E635]/10 font-bold"
                      : "text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Services Breakdown */}
            <div className="pt-3 pb-2 px-3">
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-bold mb-2">
                {locale === "ar" ? "أبرز الحلول:" : "Popular solutions:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featuredServices.slice(0, 4).map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="p-2.5 rounded-lg bg-neutral-50 dark:bg-white/5 border border-neutral-200/60 dark:border-white/5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-[#A3E635] flex items-center justify-between"
                  >
                    <span>{s.title}</span>
                    <ArrowUpRight className={`w-3 h-3 text-[#A3E635] ${rtl ? "rotate-180" : ""}`} />
                  </Link>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2.5">
              <Link
                href={`/${locale}/contact`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#A3E635] text-[#0B0F12] font-bold text-sm py-3.5 rounded-xl hover:bg-[#bef264] transition-all lime-glow"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>{dict.actions.startProject}</span>
                <ArrowUpRight className={`w-4 h-4 ${rtl ? "rotate-180" : ""}`} />
              </Link>

              <a
                href={quickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-neutral-100 dark:bg-white/5 border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-white font-semibold text-sm py-3.5 rounded-xl hover:border-[#A3E635] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#A3E635] fill-current" />
                <span>{dict.actions.chatWhatsApp}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
