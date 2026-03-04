import { AnimatedText } from "@/components/shared/AnimatedText";

export function RiskLoop() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent-red mb-4 self-start">
          翻车 ③：死循环
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          Agent 可能反复用同一个错误方法尝试修复同一个 bug
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full items-center">
        <AnimatedText delay={500} className="flex-1">
          <div className="flex flex-col items-center">
            {/* Loop visualization */}
            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                {/* Circular arrow */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#ef444440" strokeWidth="3" strokeDasharray="10 5" />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="40 400"
                  strokeLinecap="round"
                  style={{
                    animation: "orbit 2s linear infinite",
                    transformOrigin: "200px 200px",
                  }}
                />
              </svg>

              {/* Center counter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl lg:text-6xl font-mono font-bold text-accent-red">∞</p>
                  <p className="text-xl text-[#71717a] mt-2">无限重试</p>
                </div>
              </div>

              {/* Labels around circle */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 text-lg text-[#a1a1aa] bg-[#0a0a0b] px-3">尝试修复</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-lg text-[#a1a1aa] bg-[#0a0a0b] px-3">又出错了</div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 text-lg text-[#a1a1aa] bg-[#0a0a0b] px-3">跑测试</div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 text-lg text-[#a1a1aa] bg-[#0a0a0b] px-3">同一个方法</div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={1000} className="flex-1">
          <div className="space-y-6">
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6">
              <p className="text-xl font-semibold text-[#f5f5f5] mb-3">😵 典型场景</p>
              <p className="text-lg text-[#a1a1aa]">Agent 尝试用 方法A 修一个 bug → 失败 → 再用 方法A → 失败 → 再用 方法A...</p>
            </div>
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6">
              <p className="text-xl font-semibold text-[#f5f5f5] mb-3">🤔 为什么？</p>
              <p className="text-lg text-[#a1a1aa]">它没有"退一步想想"的能力。它的策略空间可能被错误的假设锁死了。</p>
            </div>
            <div className="bg-accent-green/5 border border-accent-green/20 rounded-xl p-6">
              <p className="text-xl font-semibold text-accent-green mb-3">✅ 人应该怎么做？</p>
              <p className="text-lg text-[#a1a1aa]">发现 Agent 原地打转时<strong className="text-[#f5f5f5]">果断介入</strong>：换个思路、给新提示、或干脆换个 Agent。</p>
            </div>
          </div>
        </AnimatedText>
      </div>

    </div>
  );
}
