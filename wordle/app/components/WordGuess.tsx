import { LetterState, TokenizedWord } from "~/types";
import LetterBox from "./LetterBox";
import { wordGuessStyle } from "~/styles/styles.css";

type WordGuessProps = {
  attempt: number;
  word: TokenizedWord;
  wordLength: number;
};

export default function WordGuess({
  word,
  attempt,
  wordLength,
}: WordGuessProps) {
  return (
    <div className={wordGuessStyle} aria-labelledby="word guess" role="text">
      {/* <span className="visually-hidden">
        Word: {word.map((e) => e.token).join("")}
      </span> */}

      {Array.from({ length: wordLength }).map((_, letterIndex) => {
        const letter = word[letterIndex] || {
          token: "",
          state: LetterState.NEW,
        };
        return (
          <LetterBox
            letter={letter.token}
            state={letter.state}
            key={`${attempt}-${letterIndex}-${letter}`}
          />
        );
      })}
    </div>
  );
}
