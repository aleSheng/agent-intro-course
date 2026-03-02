import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case4Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed mb-12">
            产品化不再需要团队。
          </p>
        </AnimatedText>
        <AnimatedText delay={1200}>
          <div className="flex items-center justify-center gap-6 text-4xl">
            <span className="bg-[#141416] border border-accent-purple/30 rounded-2xl px-8 py-6 text-accent-purple font-bold">
              一个人
            </span>
            <span className="text-[#71717a]">+</span>
            <span className="bg-[#141416] border border-accent-amber/30 rounded-2xl px-8 py-6 text-accent-amber font-bold">
              一个下午
            </span>
            <span className="text-[#71717a]">+</span>
            <span className="bg-[#141416] border border-accent-green/30 rounded-2xl px-8 py-6 text-accent-green font-bold">
              这些工具
            </span>
          </div>
        </AnimatedText>
        <AnimatedText delay={2200}>
          <div className="mt-8 text-4xl text-[#71717a]">=</div>
          <div className="mt-6">
            <span className="text-4xl font-bold bg-gradient-to-r from-accent-purple via-accent-blue to-accent-green bg-clip-text text-transparent">
              一个可以服务真实用户的 AI 产品
            </span>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
