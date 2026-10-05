import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import { formatPublishedDate } from "@/lib/i18n/dates";
import type { BlogIndexContent } from "@/content/types";
import type { LocalizedBlogPost } from "@/content/blog";
import { LumeRule } from "@/components/decor/LumeRule";
import { BlogCover } from "@/components/ui/BlogCover";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type BlogIndexViewProps = {
  locale: Locale;
  content: BlogIndexContent;
  posts: LocalizedBlogPost[];
};

export function BlogIndexView({ locale, content, posts }: BlogIndexViewProps) {
  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="max-w-5xl">
          <StaggerReveal className="space-y-14 md:space-y-16">
            {posts.map((post, index) => {
              const href = localePath(locale, `/blog/${post.slug}`);
              const imageFirst = index % 2 === 0;

              return (
                <StaggerItem key={post.slug} as="article">
                  <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                    <Link
                      href={href}
                      className={`mx-auto block w-full max-w-[20rem] focus-visible:outline-offset-4 sm:max-w-[22rem] lg:mx-0 lg:max-w-none ${
                        imageFirst ? "" : "lg:order-2"
                      }`}
                      aria-label={post.title}
                    >
                      <BlogCover
                        src={post.image.src}
                        alt={post.image.alt}
                        priority={index === 0}
                        variant="index"
                      />
                    </Link>

                    <div
                      className={`space-y-4 md:space-y-5 ${
                        imageFirst ? "" : "lg:order-1"
                      }`}
                    >
                      <p className="text-sm text-[var(--color-muted)]">
                        <span className="font-medium tracking-[0.08em] text-[var(--color-accent)] uppercase">
                          {content.publishedLabel}
                        </span>
                        <span className="mx-2 text-[color-mix(in_srgb,var(--color-muted)_50%,transparent)]">
                          ·
                        </span>
                        <time dateTime={post.publishedAt}>
                          {formatPublishedDate(locale, post.publishedAt)}
                        </time>
                      </p>
                      <h2 className="display-title text-[clamp(1.55rem,3vw,2.35rem)]">
                        <Link
                          href={href}
                          className="transition-colors duration-300 hover:text-[var(--color-accent)]"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <LumeRule short />
                      <p className="lead-text max-w-xl">{post.excerpt}</p>
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-[var(--color-text-strong)] transition-colors duration-300 hover:text-[var(--color-accent)]"
                      >
                        {content.readMore}
                        <span
                          aria-hidden="true"
                          className="text-[var(--color-gold)] rtl:-scale-x-100"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  {index < posts.length - 1 ? (
                    <LumeRule className="mt-14 md:mt-16" />
                  ) : null}
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </Container>
      </section>
    </>
  );
}
