import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { HomeContent } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type ContactCtaProps = {
  locale: Locale;
  content: HomeContent["contactCta"];
};

export function ContactCta({ locale, content }: ContactCtaProps) {
  return (
    <section className="section-space">
      <Container className="flex flex-col items-start justify-between gap-8 rounded-[var(--radius-lg)] bg-[var(--color-surface-elevated)] px-8 py-12 md:flex-row md:items-center md:px-12 md:py-14">
        <div className="max-w-xl space-y-3">
          <h2 className="display-title text-[clamp(1.85rem,3.2vw,2.7rem)]">
            {content.title}
          </h2>
          <p className="text-[1.05rem] leading-relaxed text-[color-mix(in_srgb,var(--color-text)_90%,black)]">
            {content.body}
          </p>
        </div>
        <Button href={localePath(locale, "/contact")}>{content.cta}</Button>
      </Container>
    </section>
  );
}
