import type { Locale } from "./config";
import type { Dictionary } from "@/content/types";
import fa from "@/content/fa";
import en from "@/content/en";

const dictionaries: Record<Locale, Dictionary> = {
  fa,
  en,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export function getDictionarySync(locale: Locale): Dictionary {
  return dictionaries[locale];
}
