import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Alexandria, IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { Locale } from "@/types";
import { isRtl } from "@/lib/i18n";
import { COMPANY } from "@/data/company";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationHeader } from "@/components/navigation-header";
import { NavigationFooter } from "@/components/navigation-footer";
import "../globals.css";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-ibm-plex-sans-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "CODE ZONE PLUS | وكالة برمجيات وحلول رقمية متقدمة"
    : "CODE ZONE PLUS | Premium Custom Software & Digital Solutions";

  const description = isAr
    ? "وكالة برمجية مستقلة متخصصة في تطوير المواقع، المتاجر الإلكترونية، أنظمة إدارة الأعمال (CRM/ERP)، أنظمة المطاعم، وتطبيقات الموبايل بكود مخصص من الصفر."
    : "Independent software agency engineering bespoke corporate websites, high-velocity e-commerce, business ERP/CRM systems, and mobile applications.";

  return {
    title: {
      default: title,
      template: `%s | ${COMPANY.name}`,
    },
    description,
    keywords: isAr
      ? ["تطوير برمجيات", "مواقع الكترونية مصر", "متاجر الكترونية", "أنظمة مطاعم QR", "برمجة CRM", "تطبيقات موبايل", "كود مخصص", "Code Zone Plus"]
      : ["Custom Software Agency", "Next.js Web Development", "E-commerce Egypt", "Restaurant KDS POS", "Mobile Apps React Native", "Code Zone Plus"],
    authors: [{ name: COMPANY.name, url: COMPANY.siteUrl }],
    creator: COMPANY.name,
    metadataBase: new URL(COMPANY.siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: COMPANY.name,
      locale: isAr ? "ar_EG" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/logo.jpeg",
          width: 1200,
          height: 400,
          alt: `${COMPANY.name} - ${COMPANY.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.jpeg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "ar" && locale !== "en") {
    notFound();
  }

  const validLocale = locale as Locale;
  const rtl = isRtl(validLocale);

  return (
    <html
      lang={validLocale}
      dir={rtl ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${alexandria.variable} ${ibmPlexArabic.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F12] text-[#0B0F12] dark:text-white selection:bg-[#A3E635] selection:text-[#0B0F12] transition-colors">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!rm&&'IntersectionObserver' in window){d.classList.add('motion-enabled');}}catch(e){}})();`,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <NavigationHeader locale={validLocale} />
            <main className="flex-1 w-full">{children}</main>
            <NavigationFooter locale={validLocale} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
