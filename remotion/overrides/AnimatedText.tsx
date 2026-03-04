import type { ReactNode } from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

interface AnimatedTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function AnimatedText({
  children,
  delay = 0,
  className = "",
}: AnimatedTextProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delayFrames = Math.round((delay / 1000) * fps);

  const progress = spring({
    frame: frame - delayFrames,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(progress, [0, 1], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      className={className}
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      {children}
    </div>
  );
}

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
}: TypewriterTextProps) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const startFrame = Math.round((delay / 1000) * fps);
  const elapsed = Math.max(0, frame - startFrame);
  const msPerChar = 1000 / speed;
  const framesPerChar = (msPerChar / 1000) * fps;
  const charsToShow = Math.min(
    Math.floor(elapsed / framesPerChar),
    text.length
  );

  return <span className={className}>{text.slice(0, charsToShow)}</span>;
}
