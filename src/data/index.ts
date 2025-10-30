import type { Language } from "./types";
import { thaiLanguage } from "./thai";
import { koreanLanguage } from "./korean";

export type { Language, Character } from "./types";

export const languages: Record<string, Language> = {
  thai: thaiLanguage,
  korean: koreanLanguage,
};

export const getLanguage = (languageKey: string): Language => {
  return languages[languageKey] || thaiLanguage;
};
