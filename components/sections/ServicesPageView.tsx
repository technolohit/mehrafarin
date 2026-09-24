import type { Locale } from "@/lib/i18n/config";
import type { ServicesPageContent } from "@/content/types";
import { ServiceIcon } from "@/components/icons/ServiceIcons";
import { Container } from "@/components/ui/Container";
import { LinkedProse } from "@/components/ui/LinkedProse";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type ServicesPageViewProps = {
  locale: Locale;
  content: ServicesPageContent;
};

export function ServicesPageView({ locale, content }: ServicesPageViewProps) {
  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="space-y-14 md:space-y-16">
          <div>
            <Reveal>
              <h2 className="display-title mb-10 text-[clamp(1.5rem,2.8vw,2.25rem)]">
                {content.listTitle}
              </h2>
            </Reveal>
            <StaggerReveal className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              {content.items.map((item) => (
                <StaggerItem key={item.title} as="article" className="space-y-3">
                  <ServiceIcon
                    id={item.icon}
                    className="h-10 w-10 text-[var(--color-text-strong)]"
                  />
                  <h3 className="text-[1.2rem] font-semibold tracking-tight text-[var(--color-text-strong)]">
                    {item.title}
                  </h3>
                  <p className="text-[1.02rem] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_94%,black)]">
                    {item.description}
                  </p>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          <Reveal className="grid gap-10 border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)] pt-12 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="display-title text-[clamp(1.35rem,2.4vw,1.85rem)]">
                {content.audience.title}
              </h2>
              <p className="lead-text">{content.audience.body}</p>
            </div>
            <div className="space-y-3">
              <h2 className="display-title text-[clamp(1.35rem,2.4vw,1.85rem)]">
                {content.language.title}
              </h2>
              <p className="lead-text">{content.language.body}</p>
            </div>
          </Reveal>

          <Reveal className="pt-2">
            <LinkedProse locale={locale} cta={content.cta} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
