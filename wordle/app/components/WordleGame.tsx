import { GameState, LetterState, TokenizedWord, Word } from "~/types";
import { useState } from "react";
import useKeyStrokeListener from "~/utils/use-keystroke-listener";
import { wordleGuessValidate } from "~/utils/wordle-guess-validator";
import WordleGrid from "./WordleGrid";
import WinnerModal from "./WinnerModal";
import LooserModal from "./LoserModal";
import { useNavigate } from "@remix-run/react";

type WordleGameProps = {
  secretWord: Word;
  attemps: number;
};

let currentGuess: TokenizedWord = [];

export default function WordleGame({ secretWord, attemps }: WordleGameProps) {
  const [currentAttempt, setCurrentAttempt] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [guesses, setGuesses] = useState<TokenizedWord[]>([]);

  const navigate = useNavigate();

  const handleKeyStroke = (key: string) => {
    currentGuess.push({
      token: key.toLowerCase(),
      state: LetterState.NEW,
    });

    guesses[currentAttempt] = currentGuess;

    setGuesses([...guesses]);
  };

  const handleBackspaceStoke = () => {
    currentGuess = currentGuess.slice(0, -1);

    guesses[currentAttempt] = currentGuess;

    setGuesses([...guesses]);
  };

  const onEnterStroke = () => {
    const validatedGuess = wordleGuessValidate(
      secretWord,
      currentGuess.map((e) => e.token).join(""),
    );

    // word is too short
    if (validatedGuess === false) {
      return;
    }
    guesses[currentAttempt] = validatedGuess.guess;
    setGuesses([...guesses]);
    if (validatedGuess.success) {
      setGameState(GameState.WON);
      return;
    }
    if (currentAttempt === attemps - 1) {
      setGameState(GameState.LOST);
      return;
    }
    currentGuess = [];
    setCurrentAttempt(currentAttempt + 1);
  };

  const onDismissModal = () => {
    currentGuess = [];
    setGameState(GameState.PLAYING);
    setGuesses([]);
    setCurrentAttempt(0);

    navigate("/");
  };

  useKeyStrokeListener(handleKeyStroke, handleBackspaceStoke, onEnterStroke);

  return (
    <>
      <WordleGrid
        guesses={guesses}
        attemps={attemps}
        wordLength={secretWord.length}
      />

      {gameState === GameState.WON && (
        <WinnerModal
          isOpen={true}
          setOpen={() => {
            console.log("yo");
          }}
          onDismissModal={onDismissModal}
        />
      )}
      {gameState === GameState.LOST && (
        <LooserModal
          isOpen={true}
          setOpen={() => {
            console.log("yo");
          }}
          onDismissModal={onDismissModal}
        />
      )}
    </>
  );
}
