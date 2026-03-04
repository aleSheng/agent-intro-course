import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case1Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-6 lg:mb-12 self-start">
          冷静看 OpenClaw
        </h2>
      </AnimatedText>

      <div className="flex gap-4 lg:gap-8 w-full">
        {/* 质疑一侧 */}
        <AnimatedText delay={500} className="flex-1">
          <div className="bg-[#141416] border border-accent-red/20 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-accent-red mb-6">🧐 争议在哪</h3>
            <div className="space-y-5 text-lg text-[#a1a1aa]">
              <div className="flex gap-3">
                <span className="text-accent-red shrink-0">1.</span>
                <span>技术门槛低 —— 本质就是 LLM + 截图 + 鼠标脚本，任何支持 Tool Calling 的模型都能做</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-red shrink-0">2.</span>
                <span>效率堪忧 —— "截图→分析→坐标→点击"循环<strong className="text-[#f5f5f5]">慢且烧 Token</strong></span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-red shrink-0">3.</span>
                <span>更好的替代 —— 直接写 Python 脚本给模型调用，更灵活、更便宜、更好调试</span>
              </div>
            </div>
          </div>
        </AnimatedText>

        {/* 价值一侧 */}
        <AnimatedText delay={900} className="flex-1">
          <div className="bg-[#141416] border border-accent-green/20 rounded-2xl p-8 h-full">
            <h3 className="text-2xl font-bold text-accent-green mb-6">💡 但它的价值是</h3>
            <div className="space-y-5 text-lg text-[#a1a1aa]">
              <div className="flex gap-3">
                <span className="text-accent-green shrink-0">1.</span>
                <span>降低门槛 —— 给不会编程的人提供了<strong className="text-[#f5f5f5]">开箱即用的框架</strong></span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-green shrink-0">2.</span>
                <span>开源复现 —— 推动本地模型（Local LLM）的计算机操作能力发展</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-green shrink-0">3.</span>
                <span>概念验证 —— 证明了"非程序员造软件"这条路<strong className="text-[#f5f5f5]">走得通</strong></span>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>

      <AnimatedText delay={1400}>
        <div className="mt-10 bg-[#141416] border border-[#27272a] rounded-xl px-8 py-5 w-full">
          <p className="text-xl text-[#f5f5f5]">
            <span className="text-accent-purple font-bold">真正的突破方向：</span>
            更高效的视觉编码器、能直接理解 OS 底层 <span className="font-mono text-accent-cyan">Accessibility Tree</span> 的模型 —— 而不是反复发高清截图
          </p>
        </div>
      </AnimatedText>
    </div>
  );
}
