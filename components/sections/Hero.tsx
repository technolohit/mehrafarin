import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { HomeContent } from "@/content/types";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { BlobPortrait } from "@/components/ui/BlobPortrait";
import { Container } from "@/components/ui/Container";
import LightRays from "@/components/effects/LightRays";
import { FadeIn } from "@/components/motion/Reveal";

type HeroProps = {
  locale: Locale;
  content: HomeContent["hero"];
};

export function Hero({ locale, content }: HeroProps) {
  return (
    <section className="relative isolate min-h-[min(88vh,52rem)] overflow-hidden pb-12 pt-10 md:pb-20 md:pt-14">
      <div className="hero-light-rays-fallback" aria-hidden="true" />

      <div className="hero-light-rays" aria-hidden="true">
        <LightRays
          raysOrigin="top-center"
          raysColor="#E8D4A0"
          raysSpeed={0.9}
          lightSpread={0.6}
          rayLength={2.6}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.03}
          distortion={0.08}
          pulsating={false}
          fadeDistance={1.2}
          saturation={1}
          className="custom-rays"
        />
      </div>

      {/* Readable wash behind copy — protects dark typography from glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 start-0 z-[1] w-full max-w-none bg-[linear-gradient(to_inline_end,color-mix(in_srgb,var(--color-bg)_92%,transparent)_0%,color-mix(in_srgb,var(--color-bg)_70%,transparent)_38%,transparent_72%)] md:w-[60%]"
      />

      <Container className="relative z-[2] grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <FadeIn className="order-2 max-w-xl space-y-6 lg:order-1" delay={0.05}>
          <p className="text-sm font-semibold tracking-[0.14em] text-[var(--color-accent)] uppercase">
            {content.eyebrow}
          </p>
          <div className="space-y-3">
            <h1 className="display-title text-[clamp(2.4rem,6vw,4.4rem)] text-[var(--color-text-strong)]">
              {content.name}
            </h1>
            <p className="text-[clamp(1.1rem,2vw,1.4rem)] font-medium text-[var(--color-text)]">
              {content.role}
            </p>
          </div>
          <p className="lead-text text-[var(--color-text)]">{content.lead}</p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href={localePath(locale, "/contact")}>{content.primaryCta}</Button>
            <ArrowLink href={localePath(locale, "/about")}>{content.secondaryCta}</ArrowLink>
          </div>
        </FadeIn>

        <FadeIn
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
          delay={0.16}
          y={36}
        >
          <BlobPortrait
            src="/images/portrait/mehrafarin-kolahdoozan-portrait.webp"
            alt={content.imageAlt}
            priority
            className="w-[min(100%,26rem)] lg:w-[min(100%,28rem)]"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
