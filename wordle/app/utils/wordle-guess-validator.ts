import { LetterState, ValidatorResponse, Word } from "~/types";

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

  // creates a set to validate letters present in the secret word
  const letterSet = new Set(secretWord);

  const validatedGuess = [...guess].map(
    (letter: string, letterIndex: number) => {
      let state = LetterState.ABSENT;

      if (letter === secretWord[letterIndex]) {
        state = LetterState.CORRECT;
      } else if (letterSet.has(letter)) {
        state = LetterState.PRESENT;
      }

      return {
        token: letter,
        state: state,
      };
    },
  );

  return {
    guess: validatedGuess,
    success: false,
  };
}
