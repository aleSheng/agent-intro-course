import { useEffect, useCallback, useRef } from "react";

interface UseKeyboardControlOptions {
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
  onToggleOverview?: () => void;
  onToggleFullscreen?: () => void;
}

export function useKeyboardControl({
  onNext,
  onPrev,
  onGoTo,
  onToggleOverview,
  onToggleFullscreen,
}: UseKeyboardControlOptions) {
  const gBuffer = useRef<string>("");
  const gTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          onPrev();
          break;
        case "f":
        case "F":
          e.preventDefault();
          onToggleFullscreen?.();
          break;
        case "o":
        case "O":
          e.preventDefault();
          onToggleOverview?.();
          break;
        case "Escape":
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            onToggleOverview?.();
          }
          break;
        default:
          // Handle "G + number" for go-to
          if (/^\d$/.test(e.key)) {
            gBuffer.current += e.key;
            if (gTimeout.current) clearTimeout(gTimeout.current);
            gTimeout.current = setTimeout(() => {
              const num = parseInt(gBuffer.current, 10);
              if (!isNaN(num)) onGoTo(num);
              gBuffer.current = "";
            }, 800);
          }
          break;
      }
    },
    [onNext, onPrev, onGoTo, onToggleOverview, onToggleFullscreen]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);
}
