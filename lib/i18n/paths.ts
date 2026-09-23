import type { Locale } from "./config";
import type { NavKey } from "@/content/types";

export const navItems: { key: NavKey; href: string }[] = [
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "process", href: "/process" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export function localePath(locale: Locale, path = ""): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`;
}

export function switchLocalePath(
  currentLocale: Locale,
  targetLocale: Locale,
  pathname: string,
): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }

  if (segments[0] === currentLocale || segments[0] === targetLocale) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }

  return `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
