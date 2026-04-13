"use client";

import { translations } from "./data";
import { Language, Translations } from "./types";

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export function isRTL(lang: Language): boolean {
  return lang === "ar";
}

export const defaultLanguage: Language = "en";