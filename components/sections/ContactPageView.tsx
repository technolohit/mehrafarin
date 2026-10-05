import type { ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import { getInstagramUrl, getTelegramUrl, profile } from "@/content/profile";
import type { ContactPageContent } from "@/content/types";
import {
  IconEmail,
  IconInstagram,
  IconLanguage,
  IconMessageNote,
  IconOnlineSession,
  IconPerson,
  IconProcess,
  IconTelegram,
} from "@/components/icons/ContactIcons";
import { LumeRail, LumeRule } from "@/components/decor/LumeRule";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal, StaggerItem, StaggerReveal } from "@/components/motion/Reveal";

type ContactPageViewProps = {
  locale: Locale;
  content: ContactPageContent;
};

function ChannelLink({
  icon,
  label,
  value,
  action,
  href,
  external = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  action: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className="group relative block space-y-3 pb-4 transition-colors duration-300"
    >
      <div className="text-[var(--color-text-strong)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
        {icon}
      </div>
      <p className="text-sm font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
        {label}
      </p>
      <p className="break-all text-[1.2rem] font-semibold tracking-tight text-[var(--color-text-strong)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
        {value}
      </p>
      <p className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
        {action}
        <span aria-hidden="true" className="text-[var(--color-gold)] rtl:-scale-x-100">
          →
        </span>
      </p>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-75 bg-[linear-gradient(to_inline_end,color-mix(in_srgb,var(--color-gold)_90%,white),color-mix(in_srgb,var(--color-accent)_50%,transparent),transparent)] shadow-[0_0_10px_color-mix(in_srgb,var(--color-gold)_40%,transparent)] transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right"
      />
    </a>
  );
}

function HintItem({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="inline-flex shrink-0 text-[var(--color-text-strong)]">
        {icon}
      </span>
      <span className="text-[1.02rem] text-[color-mix(in_srgb,var(--color-text)_94%,black)]">
        {label}
      </span>
    </li>
  );
}

function RelatedLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center gap-3 pb-2 text-[1.05rem] font-semibold text-[var(--color-text-strong)] transition-colors duration-300 hover:text-[var(--color-accent)]"
    >
      <span className="text-[var(--color-text-strong)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
        {icon}
      </span>
      <span>{label}</span>
      <span
        aria-hidden="true"
        className="text-[var(--color-gold)] transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
      >
        →
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[linear-gradient(to_inline_end,color-mix(in_srgb,var(--color-accent)_80%,white),color-mix(in_srgb,var(--color-gold)_55%,transparent),transparent)] shadow-[0_0_8px_color-mix(in_srgb,var(--color-accent)_35%,transparent)] transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right"
      />
    </Link>
  );
}

export function ContactPageView({ locale, content }: ContactPageViewProps) {
  const instagramHandle = content.instagramHandle;
  const instagramHref = getInstagramUrl(instagramHandle);
  const iconClass = "h-10 w-10";

  return (
    <>
      <PageHero title={content.title} lead={content.intro} />

      <section className="section-space">
        <Container className="max-w-4xl space-y-14 md:space-y-16">
          <div>
            <Reveal className="mb-10 space-y-4">
              <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
                {content.channelsTitle}
              </h2>
              <LumeRule short />
            </Reveal>

            <StaggerReveal className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              <StaggerItem>
                <ChannelLink
                  icon={<IconEmail className={iconClass} />}
                  label={content.channelLabels.email}
                  value={profile.email}
                  action={content.channelAction}
                  href={`mailto:${profile.email}`}
                />
              </StaggerItem>
              <StaggerItem>
                <ChannelLink
                  icon={<IconTelegram className={iconClass} />}
                  label={content.channelLabels.telegram}
                  value={`@${profile.telegram}`}
                  action={content.channelAction}
                  href={getTelegramUrl()}
                  external
                />
              </StaggerItem>
            </StaggerReveal>
          </div>

          <Reveal className="space-y-10" delay={0.04}>
            <LumeRule />
            <div className="grid gap-10 pt-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
              <div className="space-y-4">
                <IconMessageNote className={`${iconClass} text-[var(--color-text-strong)]`} />
                <h2 className="display-title text-[clamp(1.45rem,2.6vw,2rem)]">
                  {content.beforeTitle}
                </h2>
                <LumeRule short tone="accent" />
                <p className="lead-text">{content.beforeBody}</p>
              </div>

              <LumeRail className="self-center">
                <ul className="space-y-5">
                  <HintItem
                    icon={<IconOnlineSession className="h-7 w-7" />}
                    label={content.beforeHints.online}
                  />
                  <HintItem
                    icon={<IconLanguage className="h-7 w-7" />}
                    label={content.beforeHints.language}
                  />
                  <HintItem
                    icon={<IconMessageNote className="h-7 w-7" />}
                    label={content.beforeHints.message}
                  />
                </ul>
              </LumeRail>
            </div>
          </Reveal>

          <Reveal className="space-y-8" delay={0.06}>
            <LumeRule tone="accent" />
            <a
              href={instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-4 pb-4 sm:flex-row sm:items-end sm:justify-between"
            >
              <div className="space-y-3">
                <IconInstagram
                  className={`${iconClass} text-[var(--color-text-strong)] transition-colors duration-300 group-hover:text-[var(--color-accent)]`}
                />
                <p className="text-sm font-semibold tracking-[0.12em] text-[var(--color-accent)] uppercase">
                  {content.instagramTitle}
                </p>
                <p className="text-[1.2rem] font-semibold text-[var(--color-text-strong)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  @{instagramHandle}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                {content.instagramAction}
                <span aria-hidden="true" className="text-[var(--color-gold)] rtl:-scale-x-100">
                  →
                </span>
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-50 bg-[linear-gradient(to_inline_end,color-mix(in_srgb,var(--color-accent)_85%,white),color-mix(in_srgb,var(--color-gold)_50%,transparent),transparent)] shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_38%,transparent)] transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right"
              />
            </a>
          </Reveal>

          <Reveal className="space-y-6" delay={0.08}>
            <LumeRule />
            <div className="space-y-4 pt-2">
              <h2 className="display-title text-[clamp(1.35rem,2.4vw,1.85rem)]">
                {content.linksTitle}
              </h2>
              <LumeRule short />
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-5">
              <RelatedLink
                href={localePath(locale, "/about")}
                icon={<IconPerson className="h-7 w-7" />}
                label={content.linkAbout}
              />
              <RelatedLink
                href={localePath(locale, "/process")}
                icon={<IconProcess className="h-7 w-7" />}
                label={content.linkProcess}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
