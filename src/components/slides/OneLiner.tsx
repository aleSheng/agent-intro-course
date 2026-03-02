import { AnimatedText } from "@/components/shared/AnimatedText";

export function OneLiner() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-6xl font-bold text-[#f5f5f5] leading-relaxed">
            ChatBot 是<span className="text-accent-blue">军师</span>，
          </p>
        </AnimatedText>
        <AnimatedText delay={1000}>
          <p className="text-6xl font-bold leading-relaxed mt-4">
            Agent 是<span className="text-accent-purple">将军</span>带兵打仗。
          </p>
        </AnimatedText>

        <AnimatedText delay={2000}>
          <div className="mt-20 flex justify-center gap-24">
            <div className="text-center">
              <div className="text-8xl mb-4">🧠</div>
              <p className="text-2xl text-accent-blue font-semibold">军师</p>
              <p className="text-lg text-[#71717a] mt-2">只出主意</p>
            </div>
            <div className="text-6xl text-[#27272a] self-center">→</div>
            <div className="text-center">
              <div className="text-8xl mb-4">⚔️</div>
              <p className="text-2xl text-accent-purple font-semibold">将军</p>
              <p className="text-lg text-[#71717a] mt-2">带兵打仗</p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
