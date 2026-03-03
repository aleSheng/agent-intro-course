import { TypewriterText } from "@/components/shared/AnimatedText";

export function EndingQuote() {
  return (
    <div className="slide module-ending bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <p className="text-6xl font-bold text-[#f5f5f5] leading-relaxed tracking-tight">
          <TypewriterText
            text="AI won't replace you. But someone using AI will."
            speed={60}
            delay={500}
          />
        </p>
        <div className="mt-20 text-xl text-[#71717a]" style={{ animation: "fadeInUp 0.6s ease-out 4s forwards", opacity: 0 }}>
          谢谢大家
        </div>
      </div>
    </div>
  );
}
