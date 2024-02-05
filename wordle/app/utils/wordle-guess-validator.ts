import { LetterState, ValidatorResponse, Word, WordleLetter } from "../types";

const frequency = (letter: string, word: string[]) => {
  return word.reduce((prev: number, currentValue: string) => {
    if (currentValue === letter) return prev + 1;
    return prev;
  }, 0);
};

export function wordleGuessValidate(
  secretWord: Word,
  guess: Word,
): ValidatorResponse | false {
  // if guess is too short, return early
  if (guess.length < secretWord.length) {
    return false;
  }

  // guess is the right word
  if (guess === secretWord) {
    const validatedGuess = Array.from({ length: guess.length }).map(
      (_, letterIndex) => {
        return {
          token: guess[letterIndex],
          state: LetterState.CORRECT,
        };
      },
    );
    const response: ValidatorResponse = {
      guess: validatedGuess,
      success: true,
    };

    return response;
  }

  // creates temporary words to validate on
  let tempGuess = [...guess];
  let tempSecretWord = [...secretWord];

  // higlights first correct letters
  const validatedGuess: WordleLetter[] = tempGuess.map(
    (letter: string, letterIndex: number) => {
      let state: LetterState = LetterState.ABSENT;

      if (letter === secretWord[letterIndex]) {
        state = LetterState.CORRECT;
        // we remove characters from the words
        tempGuess[letterIndex] = "-";
        tempSecretWord[letterIndex] = "-";
      }

      return {
        token: letter,
        state: state,
      };
    },
  );

  const letterSet = new Set(tempSecretWord);

  // higlights now present letters, only
  // if frequency of letters are same in both
  tempGuess.map((letter: string, letterIndex: number) => {
    if (letter === "-") return;

    if (letterSet.has(letter)) {
      const freqGuessLetter = frequency(letter, tempGuess);
      const freqSecretWordLetter = frequency(letter, tempSecretWord);
      if (freqGuessLetter === freqSecretWordLetter) {
        validatedGuess[letterIndex].state = LetterState.PRESENT;
      }
    }
  });

  return {
    guess: validatedGuess,
    success: false,
  };
}
