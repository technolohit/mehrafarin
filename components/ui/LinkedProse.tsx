import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/paths";
import type { LinkedCta } from "@/content/types";

type LinkedProseProps = {
  locale: Locale;
  cta: LinkedCta;
  className?: string;
};

const pathByKey = {
  about: "/about",
  services: "/services",
  process: "/process",
  contact: "/contact",
} as const;

/** Renders a sentence with {{services|process|contact|about}} inline links (no trailing arrows). */
export function LinkedProse({ locale, cta, className = "" }: LinkedProseProps) {
  const parts = cta.template.split(/(\{\{(?:about|services|process|contact)\}\})/g);

  return (
    <p className={`text-[1.05rem] leading-relaxed text-[var(--color-text)] ${className}`.trim()}>
      {parts.map((part, index) => {
        const match = part.match(/^\{\{(about|services|process|contact)\}\}$/);
        if (!match) return <span key={index}>{part}</span>;
        const key = match[1] as keyof typeof pathByKey;
        const label = cta.labels[key];
        if (!label) return null;
        return (
          <Link
            key={index}
            href={localePath(locale, pathByKey[key])}
            className="font-medium text-[var(--color-text-strong)] underline decoration-[color-mix(in_srgb,var(--color-gold)_70%,transparent)] underline-offset-[0.22em] transition-colors hover:text-[var(--color-accent)]"
          >
            {label}
          </Link>
        );
      })}
    </p>
  );
}
