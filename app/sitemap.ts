import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { blogPostSlugs } from "@/content/blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:2580";

const paths = ["", "/about", "/services", "/process", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const pageEntries = locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/blog" ? 0.6 : 0.7,
    })),
  );

  const postEntries = locales.flatMap((locale) =>
    blogPostSlugs.map((slug) => ({
      url: `${siteUrl}/${locale}/blog/${slug}`,
      lastModified: new Date("2026-10-05"),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  );

  return [...pageEntries, ...postEntries];
}
