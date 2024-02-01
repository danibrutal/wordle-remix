import { LetterState, TokenizedWord, Word } from "~/types";
import { useState } from "react";
import useKeyStrokeListener from "~/utils/keystroke-listener";
import { wordleGuessValidate } from "~/utils/wordle-guess-validator";
import WordleGrid from "./WordleGrid";

type WordleGameProps = {
  secretWord: Word;
  attemps: number;
};

let currentGuess: TokenizedWord = [];

export default function WordleGame({ secretWord, attemps }: WordleGameProps) {
  const [currentAttempt, setCurrentAttempt] = useState<number>(0);
  const [guesses, setGuesses] = useState<TokenizedWord[]>([]);

  const handleKeyStroke = (key: string) => {
    currentGuess.push({
      token: key.toLowerCase(),
      state: LetterState.NEW,
    });

    guesses[currentAttempt] = currentGuess;

    setGuesses([...guesses]);
  };

  const handleBackspaceStoke = () => {
    currentGuess = currentGuess.slice(0, -1);

    guesses[currentAttempt] = currentGuess;

    setGuesses([...guesses]);
  };

  const onEnterStroke = () => {
    const validatedGuess = wordleGuessValidate(
      secretWord,
      currentGuess.map((e) => e.token).join(""),
    );

    // word too short
    if (validatedGuess === false) {
      return;
    }

    guesses[currentAttempt] = validatedGuess.guess;

    console.log(guesses[currentAttempt]);

    setGuesses([...guesses]);

    currentGuess = [];
    setCurrentAttempt(currentAttempt + 1);
  };

  useKeyStrokeListener(handleKeyStroke, handleBackspaceStoke, onEnterStroke);

  return (
    <>
      <h1>{secretWord}</h1>
      <WordleGrid
        guesses={guesses}
        attemps={attemps}
        wordLength={secretWord.length}
      />
    </>
  );
}
