export enum Locale {
  EN = "en",
  ES = "es",
}

export type Word = string;

export enum GameState {
  PLAYING,
  WON,
  LOST,
}

export enum LetterState {
  NEW,
  PRESENT,
  CORRECT,
  ABSENT,
}

export type WordleLetter = {
  token: string;
  state: LetterState;
};

export type TokenizedWord = WordleLetter[];

export type ValidatorResponse = {
  guess: TokenizedWord;
  success: boolean;
};
