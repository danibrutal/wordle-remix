type LetterProps = {
  letter: string;
};

export default function Letter({ letter }: LetterProps) {
  return (
    <span aria-hidden="true" className="letter-box">
      {letter}
    </span>
  );
}
