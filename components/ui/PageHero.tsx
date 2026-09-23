import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
};

/** Reusable page top for About / Services / etc. — same visual language as landing. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--color-muted)_28%,transparent)] pb-12 pt-10 md:pb-16 md:pt-14">
      <div className="container-shell max-w-3xl space-y-5">
        {eyebrow ? (
          <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="display-title text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h1>
        {lead ? <p className="lead-text">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
