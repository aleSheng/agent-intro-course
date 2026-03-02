import { type ReactNode, useEffect, useState } from "react";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const s = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
      );
      setScale(s);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0a0a0b] overflow-hidden">
      <div
        className={`w-[1920px] h-[1080px] origin-center overflow-hidden ${className}`}
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
