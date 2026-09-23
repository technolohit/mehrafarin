import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { HomeContent } from "@/content/types";
import { BlobPortrait } from "@/components/ui/BlobPortrait";
import { Container } from "@/components/ui/Container";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Reveal } from "@/components/motion/Reveal";

type AboutPreviewProps = {
  locale: Locale;
  content: HomeContent["about"];
};

export function AboutPreview({ locale, content }: AboutPreviewProps) {
  return (
    <section className="section-space border-t border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="mx-auto w-full max-w-md lg:mx-0" y={28}>
          <BlobPortrait
            src="/images/portrait/mehrafarin-kolahdoozan-portrait.webp"
            alt={content.imageAlt}
            sizes="(max-width: 1024px) 80vw, 32vw"
          />
        </Reveal>

        <Reveal className="space-y-6" delay={0.08}>
          <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
            {content.eyebrow}
          </p>
          <h2 className="display-title text-[clamp(1.875rem,3.2vw,3.15rem)]">
            {content.title}
          </h2>
          <p className="lead-text">{content.body}</p>
          <ul className="space-y-3 pt-2">
            {content.credentials.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[1.02rem] text-[var(--color-text-strong)] before:mt-[0.7em] before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[var(--color-gold)] before:content-['']"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-4">
            <ArrowLink href={localePath(locale, "/about")}>{content.cta}</ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
