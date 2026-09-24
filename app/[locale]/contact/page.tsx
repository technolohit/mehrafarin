import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata/seo";
import { ContactPageView } from "@/components/sections/ContactPageView";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = await getDictionary(localeParam);
  const { meta } = dictionary.pages.contact;
  return {
    ...buildPageMetadata({
      locale: localeParam,
      title: meta.title,
      description: meta.description,
      path: "/contact",
    }),
    // Exact email/Telegram still UNKNOWN — keep out of search indexes until publishable.
    robots: { index: false, follow: true },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);

  return <ContactPageView locale={locale} content={dictionary.pages.contact} />;
}
