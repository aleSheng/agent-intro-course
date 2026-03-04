import { AnimatedText, TypewriterText } from "@/components/shared/AnimatedText";

export function Icebreaker() {
  return (
    <div className="slide module-cover bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#a1a1aa] leading-relaxed">
            为了跟上 AI 潮流，
            <br />
            在座有多少人想过要学编程？
          </p>
        </AnimatedText>
        <AnimatedText delay={2500}>
          <p className="text-2xl md:text-4xl lg:text-6xl font-bold leading-relaxed mt-12">
            <span className="text-[#f5f5f5]">今天的第一个暴论：</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={4000}>
          <p className="text-3xl md:text-5xl lg:text-7xl font-black leading-tight mt-6">
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              跟上 AI，不需要学编程。
            </span>
          </p>
        </AnimatedText>
        <AnimatedText delay={6000}>
          <div className="mt-16 font-mono text-xl text-[#71717a]">
            <TypewriterText text="你需要的是——去试。找最新最好的工具，体验它，然后迭代自己。" speed={60} delay={6200} />
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
