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
      setScale(Math.min(w / 1920, h / 1080));
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

      {isPortrait && (
        <div className="fixed inset-0 bg-[#0a0a0b]/90 backdrop-blur-sm flex flex-col items-center justify-center z-50 text-center px-8">
          <div className="text-6xl mb-6 animate-bounce">📱</div>
          <p className="text-2xl font-bold text-[#f5f5f5] mb-3">请横屏查看</p>
          <p className="text-base text-[#a1a1aa]">本课件为 16:9 宽屏设计，横屏体验更佳</p>
        </div>
      )}
    </div>
  );
}
