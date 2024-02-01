import {
  letterAbsentStyle,
  letterBoxStyle,
  letterCorrectStyle,
  letterPresentStyle,
} from "~/styles/styles.css";
import { LetterState } from "~/types";

type LetterProps = {
  letter: string;
  state: LetterState;
};

export default function LetterBox({ letter, state }: LetterProps) {
  let letterStyle = letterBoxStyle;

  switch (state) {
    case LetterState.CORRECT:
      letterStyle = letterCorrectStyle;
      break;
    case LetterState.ABSENT:
      letterStyle = letterAbsentStyle;
      break;
    case LetterState.PRESENT:
      letterStyle = letterPresentStyle;
      break;
  }
  return (
    <span aria-hidden="true" className={letterStyle}>
      {letter}
    </span>
  );
}
