import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { HomeContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type ProcessPreviewProps = {
  locale: Locale;
  content: HomeContent["process"];
};

export function ProcessPreview({ locale, content }: ProcessPreviewProps) {
  return (
    <section className="section-space bg-[var(--color-surface-soft)]">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            lead={content.lead}
          />
        </Reveal>
        <StaggerReveal as="ol" className="grid gap-8 md:grid-cols-3 md:gap-10">
          {content.steps.map((step, index) => (
            <StaggerItem key={step.title} as="li" className="space-y-4">
              <span className="display-title text-[2.75rem] text-[color-mix(in_srgb,var(--color-gold)_80%,var(--color-text))]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[1.3rem] font-semibold tracking-tight text-[var(--color-text-strong)]">
                {step.title}
              </h3>
              <p className="leading-relaxed text-[color-mix(in_srgb,var(--color-text)_90%,black)]">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <div className="mt-12">
          <ArrowLink href={localePath(locale, "/process")}>{content.cta}</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
