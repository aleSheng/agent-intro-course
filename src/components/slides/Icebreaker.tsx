import { AnimatedText, TypewriterText } from "@/components/shared/AnimatedText";

export function Icebreaker() {
  return (
    <div className="slide module-cover bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            你们已经会用 AI 聊天了。
          </p>
        </AnimatedText>
        <AnimatedText delay={1500}>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed mt-8">
            <span className="text-[#a1a1aa]">这堂课讲的是你们</span>
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              还不知道的事
            </span>
            <span className="text-[#a1a1aa]">。</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={3000}>
          <div className="mt-16 font-mono text-xl text-[#71717a]">
            <TypewriterText text="AI 从只有'嘴巴'长出了'手'。" speed={60} delay={3200} />
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
