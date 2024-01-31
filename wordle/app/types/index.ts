export enum Locale {
  EN = "en",
  ES = "es",
}

export type Word = string;

export enum LetterState {
  NEW,
  EXISTING,
  CORRECT,
}

export type WordleLetter = {
  token: string;
  state: LetterState;
};

export type TokenizedWord = WordleLetter[];
