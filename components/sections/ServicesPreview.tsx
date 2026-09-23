import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { HomeContent } from "@/content/types";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type ServicesPreviewProps = {
  locale: Locale;
  content: HomeContent["services"];
};

export function ServicesPreview({ locale, content }: ServicesPreviewProps) {
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
        <StaggerReveal className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((item) => (
            <StaggerItem key={item.title} as="article" className="space-y-4">
              <ServiceIcon
                id={item.icon}
                className="h-11 w-11 text-[var(--color-text-strong)]"
              />
              <h3 className="text-[1.15rem] font-semibold tracking-tight text-[var(--color-text-strong)]">
                {item.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_92%,black)]">
                {item.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerReveal>
        <div className="mt-12">
          <ArrowLink href={localePath(locale, "/services")}>{content.cta}</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
