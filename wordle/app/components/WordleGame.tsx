import { LetterState, TokenizedWord, Word } from "~/types";
import WordGuess from "./WordGuess";
import { useState } from "react";
import useKeyStrokeListener from "~/utils/keystroke-listener";
import { wordleThemeClass, wordleGameStyle } from "~/styles/styles.css";

type WordleGameProps = {
  secretWord: Word;
  attemps: number;
};

export default function WordleGame({ secretWord, attemps }: WordleGameProps) {
  const [currentGuess, setCurrentGuess] = useState<TokenizedWord>([]);
  const [guesses, setGuesses] = useState<TokenizedWord[]>([]);

  const handleKeyStroke = (key: string) => {
    setCurrentGuess([
      ...currentGuess,
      {
        token: key,
        state: LetterState.NEW,
      },
    ]);
  };

  useKeyStrokeListener(handleKeyStroke);

  return (
    <div className={`${wordleThemeClass} ${wordleGameStyle}`}>
      {[...Array(attemps)].map((e, i) => (
        <WordGuess word={currentGuess} key={i} attempt={i} />
      ))}
    </div>
  );
}
