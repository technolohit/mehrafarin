import type { Locale } from "@/lib/i18n/config";

/** Verified professional facts only. Missing business fields stay null. */
export const profile = {
  name: {
    fa: "مهرآفرین کلاهدوزان",
    en: "Mehrafarin Kolahdoozan",
  },
  title: {
    fa: "روان‌درمانگر",
    en: "Psychotherapist",
  },
  clinicalPsychologist: {
    fa: "روان‌شناس بالینی",
    en: "Clinical Psychologist",
  },
  analyticalOrientation: {
    fa: "روان‌درمانگر با رویکرد تحلیلی",
    en: "Psychotherapist with an analytical orientation",
  },
  license: {
    fa: "پروانه نظام روان‌شناسی: ۲۲۰۱۸",
    en: "Psychology Organization License: 22018",
  },
  licenseNumber: "22018",
  username: "mehrafarin_kolahdoozan",
  email: null as string | null,
  phone: null as string | null,
  location: null as string | null,
  sessionFee: null as string | null,
  social: {
    instagram: null as string | null,
  },
} as const;

export type ContactFields = {
  email: string | null;
  phone: string | null;
  location: string | null;
};

export function getLocalizedName(locale: Locale): string {
  return profile.name[locale];
}
