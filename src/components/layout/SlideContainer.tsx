import { type ReactNode, useEffect, useState } from "react";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  const [scale, setScale] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const portrait = w < h;
      setIsPortrait(portrait);

      if (portrait) {
        // Portrait: scale by width only, allow vertical scroll
        setScale(w / 1920);
      } else {
        setScale(Math.min(w / 1920, h / 1080));
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className={`fixed inset-0 flex ${isPortrait ? 'items-start overflow-y-auto' : 'items-center overflow-hidden'} justify-center bg-[#0a0a0b]`}>
      <div
        className={`w-[1920px] h-[1080px] ${isPortrait ? 'origin-top' : 'origin-center'} overflow-hidden ${className}`}
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
