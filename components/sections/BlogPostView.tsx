import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import { formatPublishedDate } from "@/lib/i18n/dates";
import type { BlogIndexContent } from "@/content/types";
import type { LocalizedBlogPost } from "@/content/blog";
import { LumeRule } from "@/components/decor/LumeRule";
import { BlogCover } from "@/components/ui/BlogCover";
import { LinkedProse } from "@/components/ui/LinkedProse";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

type BlogPostViewProps = {
  locale: Locale;
  index: BlogIndexContent;
  post: LocalizedBlogPost;
};

export function BlogPostView({ locale, index, post }: BlogPostViewProps) {
  return (
    <>
      <header className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--color-muted)_22%,transparent)] pb-12 pt-10 md:pb-16 md:pt-14">
        <Container className="max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-14 xl:gap-16">
            <Reveal className="order-2 space-y-5 lg:order-1" y={28}>
              <p className="text-sm text-[var(--color-muted)]">
                <span className="font-medium tracking-[0.08em] text-[var(--color-accent)] uppercase">
                  {index.publishedLabel}
                </span>
                <span className="mx-2 text-[color-mix(in_srgb,var(--color-muted)_50%,transparent)]">
                  ·
                </span>
                <time dateTime={post.publishedAt}>
                  {formatPublishedDate(locale, post.publishedAt)}
                </time>
              </p>
              <h1 className="display-title text-[clamp(2.15rem,4.8vw,3.5rem)]">
                {post.title}
              </h1>
              <LumeRule short />
              <p className="lead-text max-w-xl">{post.excerpt}</p>
            </Reveal>

            <Reveal
              className="order-1 mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:order-2 lg:ms-auto lg:me-0 lg:max-w-[28rem]"
              delay={0.08}
              y={36}
            >
              <BlogCover
                src={post.image.src}
                alt={post.image.alt}
                priority
                variant="hero"
              />
            </Reveal>
          </div>
        </Container>
      </header>

      <article className="section-space">
        <Container className="max-w-3xl space-y-12 md:space-y-14">
          {post.sections.map((section, indexSection) => (
            <Reveal
              key={`${section.title ?? "intro"}-${indexSection}`}
              className="space-y-4"
              delay={indexSection * 0.03}
            >
              {section.title ? (
                <>
                  <h2 className="display-title text-[clamp(1.4rem,2.5vw,1.95rem)]">
                    {section.title}
                  </h2>
                  <LumeRule short />
                </>
              ) : null}
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[1.05rem] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_94%,black)] md:text-[1.08rem]"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal
            className="space-y-6 border-t border-[color-mix(in_srgb,var(--color-muted)_22%,transparent)] pt-10"
            delay={0.08}
          >
            <LinkedProse locale={locale} cta={post.cta} />
            <Link
              href={localePath(locale, "/blog")}
              className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              <span aria-hidden="true" className="text-[var(--color-gold)]">
                ←
              </span>
              {index.backToBlog}
            </Link>
          </Reveal>
        </Container>
      </article>
    </>
  );
}
