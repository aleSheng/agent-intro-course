import type { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  className?: string;
}

export function SlideContainer({ children, className = "" }: SlideContainerProps) {
  return (
    <div className={`min-h-dvh w-full bg-[#0a0a0b] ${className}`}>
      {children}
    </div>
  );
}
