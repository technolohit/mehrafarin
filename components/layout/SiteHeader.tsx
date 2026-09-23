"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { localePath, navItems } from "@/lib/i18n/paths";
import type { Dictionary } from "@/content/types";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { Container } from "@/components/ui/Container";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] backdrop-blur-md">
      <Container className="grid min-h-[4.75rem] grid-cols-[1fr_auto] items-center gap-4 py-3 md:min-h-[5.25rem] lg:grid-cols-[1fr_auto_1fr]">
        <Link href={localePath(locale)} className="justify-self-start">
          <span className="display-title block text-[1.2rem] leading-none md:text-[1.35rem]">
            {dictionary.brand}
          </span>
          <span className="mt-1 block text-[0.72rem] tracking-[0.14em] text-[var(--color-muted)] uppercase md:text-[0.75rem]">
            {dictionary.brandSubtitle}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label={dictionary.a11y.mainNavigation}
        >
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.href)}
              className="nav-link"
            >
              {dictionary.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} labels={dictionary.language} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-text-strong)] text-[var(--color-on-dark)] transition-transform duration-300 hover:scale-[1.03] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? dictionary.a11y.closeMenu : dictionary.a11y.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-[color-mix(in_srgb,var(--color-muted)_30%,transparent)] bg-[var(--color-bg)] lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localePath(locale, item.href)}
              className="rounded-[var(--radius-sm)] px-3 py-3 text-lg transition-colors hover:bg-[color-mix(in_srgb,var(--color-text)_6%,transparent)]"
              onClick={() => setOpen(false)}
            >
              {dictionary.nav[item.key]}
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
