import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { blogPostSlugs, getBlogPost } from "@/content/blog";
import { buildPageMetadata } from "@/lib/metadata/seo";
import { BlogPostView } from "@/components/sections/BlogPostView";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    blogPostSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const post = getBlogPost(localeParam, slug);
  if (!post) return {};
  return buildPageMetadata({
    locale: localeParam,
    title: `${post.title} | ${localeParam === "fa" ? "مهرآفرین کلاهدوزان" : "Mehrafarin Kolahdoozan"}`,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: {
      url: post.image.src,
      alt: post.image.alt,
    },
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  const post = getBlogPost(locale, slug);
  if (!post) notFound();

  const dictionary = await getDictionary(locale);

  return (
    <BlogPostView
      locale={locale}
      index={dictionary.pages.blog}
      post={post}
    />
  );
}
