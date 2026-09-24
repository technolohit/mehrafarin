import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata/seo";
import { AboutPageView } from "@/components/sections/AboutPageView";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = await getDictionary(localeParam);
  const { meta } = dictionary.pages.about;
  return buildPageMetadata({
    locale: localeParam,
    title: meta.title,
    description: meta.description,
    path: "/about",
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return <AboutPageView locale={locale} content={dictionary.pages.about} />;
}
