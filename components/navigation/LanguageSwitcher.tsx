"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/paths";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: {
    fa: string;
    en: string;
    switchLabel: string;
  };
  className?: string;
};

export function LanguageSwitcher({
  locale,
  labels,
  className = "",
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  const faHref = switchLocalePath(locale, "fa", pathname);
  const enHref = switchLocalePath(locale, "en", pathname);

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm tracking-wide ${className}`.trim()}
      role="group"
      aria-label={labels.switchLabel}
    >
      <Link
        href={faHref}
        hrefLang="fa"
        className={`min-h-11 min-w-11 inline-flex items-center justify-center rounded-[var(--radius-sm)] px-2 transition-colors ${
          locale === "fa"
            ? "font-semibold text-[var(--color-accent)]"
            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
        }`}
        aria-current={locale === "fa" ? "true" : undefined}
      >
        FA
      </Link>
      <span className="text-[var(--color-muted)]" aria-hidden="true">
        |
      </span>
      <Link
        href={enHref}
        hrefLang="en"
        className={`min-h-11 min-w-11 inline-flex items-center justify-center rounded-[var(--radius-sm)] px-2 transition-colors ${
          locale === "en"
            ? "font-semibold text-[var(--color-accent)]"
            : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
        }`}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
    </div>
  );
}
