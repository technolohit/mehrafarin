import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/content/types";
import { profile } from "@/content/profile";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { Container } from "@/components/ui/Container";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--color-on-dark)_22%,transparent)] text-[0.85rem]">
        {label}
      </span>
      <div className="min-w-0 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-on-dark)_84%,transparent)]">
        {children}
      </div>
    </div>
  );
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const license = locale === "fa" ? profile.license.fa : profile.license.en;

  return (
    <footer className="bg-[var(--color-footer)] text-[var(--color-on-dark)]">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-8">
        <div className="space-y-2">
          <p className="display-title text-[1.2rem] text-[var(--color-on-dark)]">
            {dictionary.brand}
          </p>
          <p className="text-sm text-[color-mix(in_srgb,var(--color-on-dark)_75%,transparent)]">
            {dictionary.footer.descriptor}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <MetaItem label="ID">
            <p>{license}</p>
          </MetaItem>
          {!profile.email && !profile.phone && !profile.location ? (
            <MetaItem label="@">
              <p>{dictionary.footer.contactPending}</p>
            </MetaItem>
          ) : null}
          {profile.email ? (
            <MetaItem label="@">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </MetaItem>
          ) : null}
          {profile.phone ? (
            <MetaItem label="☎">
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </MetaItem>
          ) : null}
          {profile.location ? (
            <MetaItem label="⌖">
              <p>{profile.location}</p>
            </MetaItem>
          ) : null}
        </div>

        <LanguageSwitcher
          locale={locale}
          labels={dictionary.language}
          className="[&_a]:text-[color-mix(in_srgb,var(--color-on-dark)_78%,transparent)] [&_a[aria-current=true]]:text-[var(--color-gold)] [&_span]:text-[color-mix(in_srgb,var(--color-on-dark)_40%,transparent)]"
        />
      </Container>

      <div className="border-t border-[color-mix(in_srgb,var(--color-on-dark)_14%,transparent)]">
        <Container className="flex flex-col gap-2 py-5 text-xs text-[color-mix(in_srgb,var(--color-on-dark)_65%,transparent)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {dictionary.brand}. {dictionary.footer.rights}
          </p>
          <p>{dictionary.footer.legalSoon}</p>
        </Container>
      </div>
    </footer>
  );
}
