import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { ContactPageContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal } from "@/components/motion/Reveal";

type ContactPageViewProps = {
  locale: Locale;
  content: ContactPageContent;
};

export function ContactPageView({ locale, content }: ContactPageViewProps) {
  const instagramHref = `https://www.instagram.com/${content.instagramHandle}/`;

  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="max-w-2xl space-y-12 md:space-y-14">
          <Reveal className="space-y-4">
            <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
              {content.channelsTitle}
            </h2>
            <ul className="space-y-2 text-[1.05rem] text-[var(--color-text-strong)]">
              <li>{content.channelLabels.email}</li>
              <li>{content.channelLabels.telegram}</li>
            </ul>
            <p className="lead-text">{content.channelsPending}</p>
          </Reveal>

          <Reveal className="space-y-3" delay={0.05}>
            <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
              {content.beforeTitle}
            </h2>
            <p className="lead-text">{content.beforeBody}</p>
          </Reveal>

          <Reveal className="space-y-3" delay={0.08}>
            <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
              {content.instagramTitle}
            </h2>
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[1.05rem] font-medium text-[var(--color-text-strong)] underline decoration-[color-mix(in_srgb,var(--color-gold)_70%,transparent)] underline-offset-[0.22em] transition-colors hover:text-[var(--color-accent)]"
            >
              @{content.instagramHandle}
            </a>
          </Reveal>

          <Reveal
            className="flex flex-wrap gap-x-8 gap-y-3 border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)] pt-8"
            delay={0.1}
          >
            <TextLink href={localePath(locale, "/about")}>{content.linkAbout}</TextLink>
            <TextLink href={localePath(locale, "/process")}>{content.linkProcess}</TextLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
