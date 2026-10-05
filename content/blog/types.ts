import type { LinkedCta } from "../types";
import type { Locale } from "@/lib/i18n/config";

export type BlogPostSlug =
  | "starting-online-therapy-in-persian"
  | "analytical-psychotherapy"
  | "consultation-and-analytical-work";

export type BlogPostBody = {
  title: string;
  description: string;
  excerpt: string;
  sections: { title?: string; paragraphs: string[] }[];
  cta: LinkedCta;
};

export type BlogPostImage = {
  src: string;
  alt: Record<Locale, string>;
};

export type BlogPostRecord = {
  slug: BlogPostSlug;
  publishedAt: string;
  image: BlogPostImage;
  fa: BlogPostBody;
  en: BlogPostBody;
};
