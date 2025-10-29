import type { Language } from './types';
import { thaiLanguage } from './thai';

export type { Language, Character } from './types';

export const languages: Record<string, Language> = {
  thai: thaiLanguage,
};

export const getLanguage = (languageKey: string): Language => {
  return languages[languageKey] || thaiLanguage;
};
