import { TokenizedWord } from "~/types";
import LetterBox from "./LetterBox";
import { wordGuessStyle } from "~/styles/styles.css";

type WordGuessProps = {
  attempt: number;
  word: TokenizedWord;
};

export default function WordGuess({ word, attempt }: WordGuessProps) {
  return (
    <div className={wordGuessStyle} aria-labelledby="word guess" role="text">
      {/* <span className="visually-hidden">
        Word: {word.map((e) => e.token).join("")}
      </span> */}
      {word.map((letterElem, index) => (
        <LetterBox
          letter={letterElem.token}
          key={`${attempt}-${index}-${letterElem.token}`}
        />
      ))}
    </div>
  );
}
