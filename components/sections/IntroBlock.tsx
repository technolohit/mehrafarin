import type { HomeContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type IntroBlockProps = {
  content: HomeContent["intro"];
};

export function IntroBlock({ content }: IntroBlockProps) {
  return (
    <section className="section-space border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)]">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          lead={content.body}
          className="mb-0 md:mb-0"
        />
        <ul className="space-y-5 self-center border-s border-[var(--color-gold)] ps-6 md:ps-8">
          {content.points.map((point) => (
            <li key={point} className="text-[1.05rem] leading-relaxed text-[var(--color-text-strong)]">
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
