/**
 * Remotion-compatible override for EndingQuote slide.
 * Replaces CSS animation (opacity:0 + fadeInUp) with frame-driven animation.
 */
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { TypewriterText } from "@/components/shared/AnimatedText";

export function EndingQuote() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Chinese translation fades in after 4.5 seconds
  const cnDelayFrames = Math.round(4.5 * fps);
  const cnProgress = spring({
    frame: frame - cnDelayFrames,
    fps,
    config: { damping: 200 },
  });
  const cnOpacity = interpolate(cnProgress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cnTranslateY = interpolate(cnProgress, [0, 1], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "谢谢大家" fades in after 5.5 seconds
  const thanksDelayFrames = Math.round(5.5 * fps);
  const thanksProgress = spring({
    frame: frame - thanksDelayFrames,
    fps,
    config: { damping: 200 },
  });
  const thanksOpacity = interpolate(thanksProgress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const thanksTranslateY = interpolate(thanksProgress, [0, 1], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div className="slide module-ending bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#f5f5f5] leading-relaxed tracking-tight">
          <TypewriterText
            text="The best way to predict the future is to build it."
            speed={60}
            delay={500}
          />
        </p>
        <div
          className="mt-12 text-2xl md:text-3xl text-[#a1a1aa] font-medium"
          style={{
            opacity: cnOpacity,
            transform: `translateY(${cnTranslateY}px)`,
          }}
        >
          预测未来的最好方式，是自己去试着造。
        </div>
        <div
          className="mt-16 text-xl text-[#71717a]"
          style={{
            opacity: thanksOpacity,
            transform: `translateY(${thanksTranslateY}px)`,
          }}
        >
          谢谢大家
        </div>
      </div>
    </div>
  );
}
