import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type BuildMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  path = "",
}: BuildMetadataInput): Metadata {
  const canonicalPath = localePath(locale, path);
  const languages = Object.fromEntries(
    locales.map((item) => [item, localePath(item, path)]),
  );

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        ...languages,
        "x-default": localePath("fa", path),
      },
    },
    openGraph: {
      title,
      description,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
      url: `${siteUrl}${canonicalPath}`,
    },
  };
}

export function personJsonLd(locale: Locale) {
  const name =
    locale === "fa" ? "مهرآفرین کلاهدوزان" : "Mehrafarin Kolahdoozan";
  const jobTitle =
    locale === "fa" ? "روان‌درمانگر" : "Psychotherapist";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    identifier: "22018",
    url: `${siteUrl}/${locale}`,
  };
}
