import { useEffect, useCallback } from "react";

type KeyStrokeHandler = (key: string) => void;

const useKeyStrokeListener = (
  onKeyStroke: KeyStrokeHandler,
  onBackspaceStroke: KeyStrokeHandler,
  onEnterStroke: KeyStrokeHandler,
): void => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      // Check for alphabetic characters or the "Enter" key
      if (key.length === 1 && key.match(/[a-z]/i) && !event.metaKey) {
        onKeyStroke(key);
      } else if (key === "Enter") {
        onEnterStroke(key);
      } else if (key === "Backspace") {
        onBackspaceStroke(key);
      }
    },
    [onKeyStroke],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyStrokeListener;
