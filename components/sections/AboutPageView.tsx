import type { Locale } from "@/lib/i18n/config";
import type { AboutPageContent } from "@/content/types";
import { BlobPortrait } from "@/components/ui/BlobPortrait";
import { Container } from "@/components/ui/Container";
import { LinkedProse } from "@/components/ui/LinkedProse";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/motion/Reveal";

type AboutPageViewProps = {
  locale: Locale;
  content: AboutPageContent;
};

export function AboutPageView({ locale, content }: AboutPageViewProps) {
  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0" y={24}>
            <BlobPortrait
              variant="rect"
              src="/images/portrait/mehrafarin-kolahdoozan.webp"
              alt={content.imageAlt}
              objectPosition="center 18%"
              sizes="(max-width: 1024px) 80vw, 36vw"
              className="w-full max-w-[24rem]"
            />
          </Reveal>

          <div className="space-y-12 md:space-y-14">
            <Reveal className="space-y-4" delay={0.05}>
              <h2 className="display-title text-[clamp(1.5rem,2.8vw,2.25rem)]">
                {content.orientation.title}
              </h2>
              {content.orientation.paragraphs.map((paragraph) => (
                <p key={paragraph} className="lead-text">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal className="space-y-3" delay={0.08}>
              <h2 className="display-title text-[clamp(1.5rem,2.8vw,2.25rem)]">
                {content.clients.title}
              </h2>
              <p className="lead-text">{content.clients.body}</p>
            </Reveal>

            <Reveal className="space-y-3" delay={0.1}>
              <h2 className="display-title text-[clamp(1.5rem,2.8vw,2.25rem)]">
                {content.format.title}
              </h2>
              <p className="lead-text">{content.format.body}</p>
            </Reveal>

            <Reveal className="border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)] pt-8" delay={0.12}>
              <LinkedProse locale={locale} cta={content.cta} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
