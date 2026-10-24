import Link from "next/link";
import { Locale } from "@/types";
import { COMPANY } from "@/data/company";
import { getDictionary, isRtl } from "@/lib/i18n";
import { BrandLogo } from "@/components/brand-logo";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export function NavigationFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const rtl = isRtl(locale);

  const companyLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/portfolio`, label: dict.nav.portfolio },
    { href: `/${locale}/process`, label: dict.nav.process },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const serviceLinks = [
    { href: `/${locale}/services/web-development`, label: locale === "ar" ? "المواقع التعريفية" : "Websites" },
    { href: `/${locale}/services/ecommerce`, label: locale === "ar" ? "المتاجر الإلكترونية" : "E-Commerce" },
    { href: `/${locale}/services/restaurant-hospitality`, label: locale === "ar" ? "أنظمة المطاعم والـ KDS" : "Restaurant Systems" },
    { href: `/${locale}/services/business-systems`, label: locale === "ar" ? "أنظمة CRM و ERP" : "CRM & ERP Systems" },
    { href: `/${locale}/services/mobile-apps`, label: locale === "ar" ? "تطبيقات الموبايل" : "Mobile Apps" },
    { href: `/${locale}/services/backend-api`, label: locale === "ar" ? "الأنظمة الخلفية والـ APIs" : "Backend & APIs" },
  ];

  const resourceLinks = [
    { href: `/${locale}/pricing`, label: dict.nav.pricing },
    { href: `/${locale}/faq`, label: dict.nav.faq },
    { href: `/${locale}/project-deliverables`, label: locale === "ar" ? "مخرجات التسليم والملكية" : "Project Deliverables" },
    { href: `/${locale}/process#scope`, label: locale === "ar" ? "إدارة النطاق والتعديلات" : "Scope & Changes" },
  ];

  const legalLinks = [
    { href: `/${locale}/terms`, label: locale === "ar" ? "الشروط والأحكام" : "Terms & Conditions" },
    { href: `/${locale}/privacy`, label: locale === "ar" ? "سياسة الخصوصية" : "Privacy Policy" },
    { href: `/${locale}/cookies`, label: locale === "ar" ? "ملفات تعريف الارتباط" : "Cookie Policy" },
    { href: `/${locale}/acceptable-use`, label: locale === "ar" ? "الاستخدام المقبول" : "Acceptable Use" },
  ];

  return (
    <footer className="w-full bg-[#070A0D] text-white border-t border-[#A3E635]/15 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo locale={locale} variant="footer" />
            <p className="text-xs uppercase tracking-widest font-black text-[#A3E635]">
              {COMPANY.tagline}
            </p>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {locale === "ar"
                ? "وكالة برمجية مستقلة متخصصة في تطوير البرمجيات المخصصة، المتاجر الإلكترونية، وتطبيقات الأعمال بجودة هندسية متقدمة."
                : "An independent software agency specializing in custom web, e-commerce, and business management architectures engineered for scale."}
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 space-y-2">
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-[#A3E635] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#A3E635]" />
                <span dir="ltr">WhatsApp: 01010814966</span>
              </a>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href={COMPANY.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors inline-flex items-center gap-1"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className={`w-3 h-3 ${rtl ? "rotate-180" : ""}`} />
                </a>

                <a
                  href={COMPANY.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-lg border border-neutral-800 text-neutral-300 hover:text-[#A3E635] hover:border-[#A3E635] transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className={`w-3 h-3 ${rtl ? "rotate-180" : ""}`} />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.footer.companyCol}
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A3E635] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.footer.servicesCol}
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A3E635] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.footer.resourcesCol}
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A3E635] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              {dict.footer.legalCol}
            </h3>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#A3E635] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {COMPANY.copyrightYear} {COMPANY.name}. {dict.footer.rights}
          </p>
          <p className="text-neutral-500 font-mono">
            {COMPANY.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
