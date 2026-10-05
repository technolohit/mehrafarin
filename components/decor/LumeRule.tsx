import type { ReactNode } from "react";

type LumeRuleProps = {
  className?: string;
  /** Short accent under a heading */
  short?: boolean;
  /** Alternate start color emphasis */
  tone?: "gold" | "accent";
};

/** Thin luminous hairline using the site gold / accent palette. */
export function LumeRule({
  className = "",
  short = false,
  tone = "gold",
}: LumeRuleProps) {
  const start =
    tone === "accent"
      ? "color-mix(in srgb, var(--color-accent) 88%, white)"
      : "color-mix(in srgb, var(--color-gold) 92%, white)";
  const mid =
    tone === "accent"
      ? "color-mix(in srgb, var(--color-gold) 70%, transparent)"
      : "color-mix(in srgb, var(--color-accent) 55%, transparent)";
  const glow =
    tone === "accent"
      ? "0 0 10px color-mix(in srgb, var(--color-accent) 40%, transparent)"
      : "0 0 12px color-mix(in srgb, var(--color-gold) 48%, transparent)";

  return (
    <div
      aria-hidden="true"
      className={`h-px ${short ? "w-16 md:w-20" : "w-full"} ${className}`.trim()}
      style={{
        background: `linear-gradient(to inline-end, ${start} 0%, ${mid} 42%, transparent 88%)`,
        boxShadow: glow,
      }}
    />
  );
}

type LumeRailProps = {
  className?: string;
  children: ReactNode;
};

/** Vertical luminous rail for stacked notes (no box). */
export function LumeRail({ className = "", children }: LumeRailProps) {
  return (
    <div className={`relative ps-6 md:ps-7 ${className}`.trim()}>
      <span
        aria-hidden="true"
        className="absolute inset-y-1 start-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--color-gold) 88%, white), color-mix(in srgb, var(--color-accent) 55%, transparent), transparent)",
          boxShadow:
            "0 0 10px color-mix(in srgb, var(--color-gold) 42%, transparent)",
        }}
      />
      {children}
    </div>
  );
}
