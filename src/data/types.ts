export interface Character {
  character: string;
  romanization: string;
  type: 'consonant' | 'vowel';
}

export interface Language {
  name: string;
  characters: Character[];
}
