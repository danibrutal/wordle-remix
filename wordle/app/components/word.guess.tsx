import { TokenizedWord } from "~/types";
import Letter from "./letter";

type WordGuessProps = {
  word: TokenizedWord;
};

export default function WordGuess({ word }: WordGuessProps) {
  return (
    <div className="word-guess" aria-labelledby="word guess" role="text">
      {/* <span className="visually-hidden">
        Word: {word.map((e) => e.token).join("")}
      </span> */}
      {word.map((letterElem) => (
        <Letter letter={letterElem.token} />
      ))}
    </div>
  );
}
