"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "on-dark" | "accent";
};

export function ArrowLink({
  href,
  children,
  className = "",
  tone = "default",
}: ArrowLinkProps) {
  const reduceMotion = useReducedMotion();

  const tones = {
    default: "text-[var(--color-text-strong)] hover:text-[var(--color-accent)]",
    "on-dark": "text-[var(--color-on-dark)] hover:text-[var(--color-gold)]",
    accent: "text-[var(--color-accent)]",
  };

  const inner = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-1 h-px origin-right scale-x-100 bg-current transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 rtl:origin-left rtl:group-hover:origin-right"
        />
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
      >
        →
      </span>
    </>
  );

  if (reduceMotion) {
    return (
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 pb-1 text-[0.98rem] font-medium ${tones[tone]} ${className}`.trim()}
      >
        {inner}
      </Link>
    );
  }

  return (
    <motion.div
      className="inline-flex"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
    >
      <Link
        href={href}
        className={`group inline-flex items-center gap-3 pb-1 text-[0.98rem] font-medium ${tones[tone]} ${className}`.trim()}
      >
        {inner}
      </Link>
    </motion.div>
  );
}
