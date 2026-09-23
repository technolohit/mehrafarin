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
    title: `${dictionary.nav.blog} | ${dictionary.brand}`,
    description: dictionary.placeholders.pageComing,
    path: "/blog",
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <PlaceholderPage
      locale={locale}
      title={dictionary.nav.blog}
      message={dictionary.placeholders.pageComing}
      homeLabel={dictionary.nav.home}
    />
  );
}
