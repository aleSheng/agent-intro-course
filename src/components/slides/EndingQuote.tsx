import { TypewriterText } from "@/components/shared/AnimatedText";

export function EndingQuote() {
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
        <div className="mt-12 text-2xl md:text-3xl text-[#a1a1aa] font-medium" style={{ animation: "fadeInUp 0.6s ease-out 4.5s forwards", opacity: 0 }}>
          预测未来的最好方式，是自己去试着造。
        </div>
        <div className="mt-16 text-xl text-[#71717a]" style={{ animation: "fadeInUp 0.6s ease-out 5.5s forwards", opacity: 0 }}>
          谢谢大家
        </div>
      </div>
    </div>
  );
}
