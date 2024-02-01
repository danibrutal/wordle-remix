import { wordleThemeClass, wordleGameStyle } from "~/styles/styles.css";
import { TokenizedWord } from "~/types";
import WordGuess from "./WordGuess";

type WordleGridProps = {
  attemps: number;
  wordLength: number;
  guesses: TokenizedWord[];
};

export default function WordleGrid({
  attemps,
  wordLength,
  guesses,
}: WordleGridProps) {
  return (
    <div className={`${wordleThemeClass} ${wordleGameStyle}`}>
      {[...Array(attemps)].map((_, attemptNumber) => (
        <WordGuess
          guess={guesses[attemptNumber] || []}
          key={attemptNumber}
          attempt={attemptNumber}
          wordLength={wordLength}
        />
      ))}
    </div>
  );
}
