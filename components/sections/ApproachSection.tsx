import type { HomeContent } from "@/content/types";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type ApproachSectionProps = {
  content: HomeContent["approach"];
};

export function ApproachSection({ content }: ApproachSectionProps) {
  return (
    <section className="section-space">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
        <SectionHeader
          eyebrow={content.eyebrow}
          title={content.title}
          className="mb-0 md:mb-0"
        />
        <div className="space-y-6">
          <p className="lead-text">{content.body}</p>
          <p className="max-w-xl border-s-2 border-[var(--color-gold)] ps-5 text-[0.98rem] text-[var(--color-muted)]">
            {content.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
