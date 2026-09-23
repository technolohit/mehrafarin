import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata/seo";
import { PlaceholderPage } from "@/components/sections/PlaceholderPage";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = await getDictionary(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    title: `${dictionary.nav.about} | ${dictionary.brand}`,
    description: dictionary.home.about.body,
    path: "/about",
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <PlaceholderPage
      locale={locale}
      title={dictionary.nav.about}
      message={dictionary.placeholders.pageComing}
      homeLabel={dictionary.nav.home}
    />
  );
}
