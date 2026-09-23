import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata, personJsonLd } from "@/lib/metadata/seo";
import { HomePage } from "@/components/sections/HomePage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = await getDictionary(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    title: dictionary.home.meta.title,
    description: dictionary.home.meta.description,
  });
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd(locale)),
        }}
      />
      <HomePage locale={locale} dictionary={dictionary} />
    </>
  );
}
