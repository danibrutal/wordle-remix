import { letterBoxStyle } from "~/styles/styles.css";

type LetterProps = {
  letter: string;
};

export default function LetterBox({ letter }: LetterProps) {
  return (
    <span aria-hidden="true" className={letterBoxStyle}>
      {letter}
    </span>
  );
}
