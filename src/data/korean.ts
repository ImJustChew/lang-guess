import type { Language } from "./types";

export const koreanLanguage: Language = {
  name: "Korean",
  characters: [
    // Basic Consonants (자음)
    { character: "ㄱ", romanization: "g/k", type: "consonant" },
    { character: "ㄴ", romanization: "n", type: "consonant" },
    { character: "ㄷ", romanization: "d/t", type: "consonant" },
    { character: "ㄹ", romanization: "r/l", type: "consonant" },
    { character: "ㅁ", romanization: "m", type: "consonant" },
    { character: "ㅂ", romanization: "b/p", type: "consonant" },
    { character: "ㅅ", romanization: "s", type: "consonant" },
    { character: "ㅇ", romanization: "ng", type: "consonant" },
    { character: "ㅈ", romanization: "j", type: "consonant" },
    { character: "ㅊ", romanization: "ch", type: "consonant" },
    { character: "ㅋ", romanization: "k", type: "consonant" },
    { character: "ㅌ", romanization: "t", type: "consonant" },
    { character: "ㅍ", romanization: "p", type: "consonant" },
    { character: "ㅎ", romanization: "h", type: "consonant" },

    // Double Consonants (쌍자음)
    { character: "ㄲ", romanization: "kk", type: "consonant" },
    { character: "ㄸ", romanization: "tt", type: "consonant" },
    { character: "ㅃ", romanization: "pp", type: "consonant" },
    { character: "ㅆ", romanization: "ss", type: "consonant" },
    { character: "ㅉ", romanization: "jj", type: "consonant" },

    // Basic Vowels (모음)
    { character: "ㅏ", romanization: "a", type: "vowel" },
    { character: "ㅑ", romanization: "ya", type: "vowel" },
    { character: "ㅓ", romanization: "eo", type: "vowel" },
    { character: "ㅕ", romanization: "yeo", type: "vowel" },
    { character: "ㅗ", romanization: "o", type: "vowel" },
    { character: "ㅛ", romanization: "yo", type: "vowel" },
    { character: "ㅜ", romanization: "u", type: "vowel" },
    { character: "ㅠ", romanization: "yu", type: "vowel" },
    { character: "ㅡ", romanization: "eu", type: "vowel" },
    { character: "ㅣ", romanization: "i", type: "vowel" },

    // Compound Vowels (복합 모음)
    { character: "ㅐ", romanization: "ae", type: "vowel" },
    { character: "ㅒ", romanization: "yae", type: "vowel" },
    { character: "ㅔ", romanization: "e", type: "vowel" },
    { character: "ㅖ", romanization: "ye", type: "vowel" },
    { character: "ㅘ", romanization: "wa", type: "vowel" },
    { character: "ㅙ", romanization: "wae", type: "vowel" },
    { character: "ㅚ", romanization: "oe", type: "vowel" },
    { character: "ㅝ", romanization: "wo", type: "vowel" },
    { character: "ㅞ", romanization: "we", type: "vowel" },
    { character: "ㅟ", romanization: "wi", type: "vowel" },
    { character: "ㅢ", romanization: "ui", type: "vowel" },
  ],
};
