import type { Locale } from "@/lib/i18n/config";
import type { ProcessPageContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { LinkedProse } from "@/components/ui/LinkedProse";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type ProcessPageViewProps = {
  locale: Locale;
  content: ProcessPageContent;
};

export function ProcessPageView({ locale, content }: ProcessPageViewProps) {
  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="max-w-3xl space-y-14">
          <StaggerReveal className="space-y-12" as="ol">
            {content.steps.map((step, index) => (
              <StaggerItem key={step.title} as="li" className="space-y-3">
                <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
                  {step.title}
                </h2>
                {step.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[1.05rem] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_94%,black)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal className="space-y-3 border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)] pt-10">
            <h2 className="display-title text-[clamp(1.35rem,2.4vw,1.85rem)]">
              {content.fees.title}
            </h2>
            <p className="lead-text">{content.fees.body}</p>
          </Reveal>

          <Reveal>
            <LinkedProse locale={locale} cta={content.cta} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
