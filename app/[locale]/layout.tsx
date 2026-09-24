import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Manrope,
  Noto_Naskh_Arabic,
  Vazirmatn,
} from "next/font/google";
import { getDirection, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import "../globals.css";
import "lenis/dist/lenis.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-naskh",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:2580"),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = await getDictionary(locale);
  const direction = getDirection(locale);

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${manrope.variable} ${vazirmatn.variable} ${cormorant.variable} ${notoNaskh.variable} ${greatVibes.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-pill)] focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-[var(--color-on-accent)]"
          >
            {dictionary.a11y.skipToContent}
          </a>
          <div className="site-grain" aria-hidden="true" />
          <SiteHeader locale={locale} dictionary={dictionary} />
          <main id="main-content">{children}</main>
          <SiteFooter locale={locale} dictionary={dictionary} />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
