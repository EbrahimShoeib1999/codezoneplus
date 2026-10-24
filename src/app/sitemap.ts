import { MetadataRoute } from "next";
import { COMPANY } from "@/data/company";
import { SERVICES } from "@/data/services";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.siteUrl;
  const locales = ["ar", "en"];
  const staticRoutes = [
    "",
    "/services",
    "/pricing",
    "/portfolio",
    "/process",
    "/about",
    "/faq",
    "/contact",
    "/project-deliverables",
    "/terms",
    "/privacy",
    "/cookies",
    "/acceptable-use",
  ];

  const items: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Static paths
    staticRoutes.forEach((route) => {
      items.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" || route === "/pricing" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/services" || route === "/pricing" ? 0.9 : 0.7,
      });
    });

    // Dynamic service paths
    SERVICES.forEach((service) => {
      items.push({
        url: `${baseUrl}/${locale}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    });

    // Dynamic portfolio paths
    PORTFOLIO_ITEMS.forEach((project) => {
      items.push({
        url: `${baseUrl}/${locale}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.75,
      });
    });
  });

  return items;
}
