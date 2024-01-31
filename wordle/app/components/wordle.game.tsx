import { LetterState, TokenizedWord, Word } from "~/types";
import WordGuess from "./word.guess";

type WorddleGameProps = {
  secretWord: Word;
  attemps: number;
};

export default function WordleGame({ secretWord, attemps }: WorddleGameProps) {
  const tokenizedWord: TokenizedWord = [
    {
      token: "h",
      state: LetterState.NEW,
    },
    {
      token: "o",
      state: LetterState.NEW,
    },
    {
      token: "l",
      state: LetterState.NEW,
    },
    {
      token: "a",
      state: LetterState.NEW,
    },
  ];
  return (
    <div className="wordle-game">
      {[...Array(attemps)].map((e, i) => (
        <WordGuess word={tokenizedWord} />
      ))}
    </div>
  );
}
