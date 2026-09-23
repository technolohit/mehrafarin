import Link from "next/link";
import type { ReactNode } from "react";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 font-medium text-[var(--color-text)] underline-offset-[0.22em] transition-colors duration-300 hover:text-[var(--color-accent)] hover:underline ${className}`.trim()}
    >
      {children}
      <span
        aria-hidden="true"
        className="inline-block text-[var(--color-gold)] rtl:-scale-x-100"
      >
        →
      </span>
    </Link>
  );
}
