import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case2Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            未来的"编程"更像是当
            <span className="text-accent-purple">产品经理</span>——
          </p>
        </AnimatedText>
        <AnimatedText delay={1200}>
          <div className="mt-12 grid grid-cols-2 gap-8 max-w-[1000px] mx-auto text-left">
            <div className="bg-accent-green/5 border border-accent-green/20 rounded-2xl p-8">
              <p className="text-2xl font-bold text-accent-green mb-4">你负责</p>
              <ul className="space-y-3 text-xl text-[#a1a1aa]">
                <li>✦ 提需求</li>
                <li>✦ 验收质量</li>
                <li>✦ 决定方向</li>
              </ul>
            </div>
            <div className="bg-accent-purple/5 border border-accent-purple/20 rounded-2xl p-8">
              <p className="text-2xl font-bold text-accent-purple mb-4">Agent 负责</p>
              <ul className="space-y-3 text-xl text-[#a1a1aa]">
                <li>⚡ 写代码</li>
                <li>⚡ 跑测试</li>
                <li>⚡ 修 Bug</li>
              </ul>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
