import { AnimatedText } from "@/components/shared/AnimatedText";

export function RisksCover() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-red/10 border border-accent-red/30 mb-8">
            <span className="text-lg font-mono text-accent-red">模块四</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-7xl font-bold text-[#f5f5f5] mb-6">
            清醒认知
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa]">
            不灌鸡汤，讲清楚<span className="text-accent-red font-semibold">三件事</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <div className="mt-12 flex justify-center gap-8">
            <div className="px-6 py-3 bg-accent-red/10 border border-accent-red/30 rounded-xl text-xl text-accent-red">⚠️ Agent 会翻车</div>
            <div className="px-6 py-3 bg-accent-amber/10 border border-accent-amber/30 rounded-xl text-xl text-accent-amber">🛡️ 安全底线</div>
            <div className="px-6 py-3 bg-accent-green/10 border border-accent-green/30 rounded-xl text-xl text-accent-green">💎 真正值钱的能力</div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
