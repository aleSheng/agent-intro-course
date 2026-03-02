import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case1Cover() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-8">
            <span className="text-lg font-mono text-accent-purple">案例 01</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-7xl font-bold text-[#f5f5f5] mb-6">
            OpenClaw
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa] leading-relaxed">
            "不会写代码的人"如何造出了
            <br />
            <span className="text-accent-purple font-semibold">一个开发者工具</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <div className="mt-12 px-8 py-4 bg-[#141416] rounded-2xl border border-[#27272a] inline-block">
            <p className="text-xl text-[#71717a] font-mono">
              从第一行代码到产品上线 → 全程 AI Agent 完成
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
