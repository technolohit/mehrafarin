import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "start" | "center";
  className?: string;
  children?: ReactNode;
};

/** Shared section heading for future pages — matches landing typography. */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "start",
  className = "",
  children,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-start";

  return (
    <div className={`mb-10 flex max-w-3xl flex-col gap-4 md:mb-14 ${alignment} ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-accent)] uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-title text-[clamp(1.875rem,3.2vw,3.15rem)]">{title}</h2>
      {lead ? <p className="lead-text">{lead}</p> : null}
      {children}
    </div>
  );
}
