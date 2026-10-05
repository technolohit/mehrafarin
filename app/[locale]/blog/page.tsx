import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getBlogPosts } from "@/content/blog";
import { buildPageMetadata } from "@/lib/metadata/seo";
import { BlogIndexView } from "@/components/sections/BlogIndexView";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = await getDictionary(localeParam);
  const { meta } = dictionary.pages.blog;
  return buildPageMetadata({
    locale: localeParam,
    title: meta.title,
    description: meta.description,
    path: "/blog",
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);
  const posts = getBlogPosts(locale);

  return (
    <BlogIndexView
      locale={locale}
      content={dictionary.pages.blog}
      posts={posts}
    />
  );
}
