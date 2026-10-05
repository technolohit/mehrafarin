import type { Locale } from "@/lib/i18n/config";
import { blogPosts, isBlogPostSlug } from "./posts";
import type { BlogPostBody, BlogPostSlug } from "./types";

export type LocalizedBlogPost = {
  slug: BlogPostSlug;
  publishedAt: string;
  image: {
    src: string;
    alt: string;
  };
} & BlogPostBody;

export function getBlogPosts(locale: Locale): LocalizedBlogPost[] {
  return blogPosts.map((post) => ({
    slug: post.slug,
    publishedAt: post.publishedAt,
    image: {
      src: post.image.src,
      alt: post.image.alt[locale],
    },
    ...post[locale],
  }));
}

export function getBlogPost(
  locale: Locale,
  slug: string,
): LocalizedBlogPost | undefined {
  if (!isBlogPostSlug(slug)) return undefined;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return undefined;
  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    image: {
      src: post.image.src,
      alt: post.image.alt[locale],
    },
    ...post[locale],
  };
}

export { blogPostSlugs, isBlogPostSlug } from "./posts";
export type { BlogPostSlug } from "./types";
export type { BlogIndexContent } from "../types";
