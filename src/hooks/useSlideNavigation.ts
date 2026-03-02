import { useState, useCallback, useEffect } from "react";

interface UseSlideNavigationOptions {
  totalSlides: number;
}

export function useSlideNavigation({ totalSlides }: UseSlideNavigationOptions) {
  const [currentSlide, setCurrentSlide] = useState(() => {
    const hash = window.location.hash.replace("#", "");
    const num = parseInt(hash, 10);
    return num >= 0 && num < totalSlides ? num : 0;
  });

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, totalSlides - 1));
      setCurrentSlide(clamped);
      window.location.hash = `#${clamped}`;
    },
    [totalSlides]
  );

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const num = parseInt(hash, 10);
      if (num >= 0 && num < totalSlides) {
        setCurrentSlide(num);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [totalSlides]);

  return { currentSlide, goTo, next, prev, totalSlides };
}
