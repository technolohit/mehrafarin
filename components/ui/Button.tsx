"use client";

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost" | "soft";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#D87237] text-white rounded-[var(--radius-pill)] shadow-[0_12px_30px_rgba(216,114,55,0.32)]",
  secondary:
    "bg-transparent text-[var(--color-text-strong)] border border-[color-mix(in_srgb,var(--color-text-strong)_35%,transparent)] rounded-[var(--radius-pill)] hover:border-[var(--color-text-strong)] hover:bg-[color-mix(in_srgb,var(--color-text-strong)_6%,transparent)]",
  ghost:
    "bg-transparent text-[var(--color-text-strong)] hover:text-[var(--color-accent)] rounded-[var(--radius-sm)]",
  soft:
    "bg-[var(--color-text-strong)] text-[#F7F4EF] rounded-[var(--radius-pill)]",
};

const baseClasses =
  "group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden px-7 text-[0.95rem] font-semibold tracking-[0.01em]";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const reduceMotion = useReducedMotion();
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const content = (
    <>
      <span
        className={`relative z-[1] ${variant === "primary" ? "text-white" : ""}`}
      >
        {children}
      </span>
      {variant === "primary" ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-[120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.28),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-[120%]"
        />
      ) : null}
    </>
  );

  if (href) {
    const link = (
      <Link
        href={href}
        className={classes}
        style={variant === "primary" ? { color: "#ffffff" } : undefined}
      >
        {content}
      </Link>
    );

    if (reduceMotion) return link;

    return (
      <motion.div
        className="inline-flex"
        whileHover={{ y: -2, scale: 1.025 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
      >
        {link}
      </motion.div>
    );
  }

  if (reduceMotion) {
    return (
      <button
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        style={variant === "primary" ? { color: "#ffffff" } : undefined}
      >
        {content}
      </button>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      style={variant === "primary" ? { color: "#ffffff" } : undefined}
      whileHover={{ y: -2, scale: 1.025 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 22 }}
    >
      {content}
    </motion.button>
  );
}
