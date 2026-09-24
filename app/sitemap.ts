import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:2580";

// Contact omitted while exact channels unpublished (page uses robots noindex).
// Blog remains a deferred surface.
const paths = ["", "/about", "/services", "/process"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
