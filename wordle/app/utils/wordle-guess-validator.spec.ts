import { LetterState, ValidatorResponse } from "../types";
import { wordleGuessValidate } from "./wordle-guess-validator";

describe("wordle-guess-validator", () => {
  it("returns false if guess is too short", () => {
    const guess = "boo";
    const secretWord = "boom";
    const validation = wordleGuessValidate(secretWord, guess);
    expect(validation).toBe(false);
  });

  it("returns a success response with all correct states if guess=word", () => {
    const guess = "boom";
    const secretWord = "boom";
    const validation = wordleGuessValidate(secretWord, guess);
    const validatedGuess = Array.from({ length: guess.length }).map(
      (_, letterIndex) => {
        return {
          token: guess[letterIndex],
          state: LetterState.CORRECT,
        };
      },
    );
    const expected: ValidatorResponse = {
      guess: validatedGuess,
      success: true,
    };

    expect(validation).toEqual(expected);
  });

  it("returns a validated answer when all letters are not present", () => {
    const guess = "boom";
    const secretWord = "clas";
    const validation = wordleGuessValidate(secretWord, guess);
    const validatedGuess = Array.from({ length: guess.length }).map(
      (_, letterIndex) => {
        return {
          token: guess[letterIndex],
          state: LetterState.ABSENT,
        };
      },
    );
    const expected: ValidatorResponse = {
      guess: validatedGuess,
      success: false,
    };

    expect(validation).toEqual(expected);
  });

  it("returns a validated answer when some letters are correctly placed", () => {
    const guess = "bo";
    const secretWord = "ba";
    const validation = wordleGuessValidate(secretWord, guess);
    const validatedGuess = [
      {
        token: "b",
        state: LetterState.CORRECT,
      },
      {
        token: "o",
        state: LetterState.ABSENT,
      },
    ];
    const expected: ValidatorResponse = {
      guess: validatedGuess,
      success: false,
    };

    expect(validation).toEqual(expected);
  });

  it("returns a validated answer when some letters are present, but not correctly placed", () => {
    const guess = "ob";
    const secretWord = "ba";
    const validation = wordleGuessValidate(secretWord, guess);
    const validatedGuess = [
      {
        token: "o",
        state: LetterState.ABSENT,
      },
      {
        token: "b",
        state: LetterState.PRESENT,
      },
    ];
    const expected: ValidatorResponse = {
      guess: validatedGuess,
      success: false,
    };

    expect(validation).toEqual(expected);
  });

  it("it should not highlight a letter twice", () => {
    const secretWord = "apple";
    const guess = "allee";
    const validation = wordleGuessValidate(secretWord, guess);
    const validatedGuess = [
      {
        token: "a",
        state: LetterState.CORRECT,
      },
      {
        token: "l",
        state: LetterState.ABSENT,
      },
      {
        token: "l",
        state: LetterState.ABSENT,
      },
      {
        token: "e",
        state: LetterState.ABSENT,
      },
      {
        token: "e",
        state: LetterState.CORRECT,
      },
    ];
    const expected: ValidatorResponse = {
      guess: validatedGuess,
      success: false,
    };

    expect(validation).toEqual(expected);
  });
});
