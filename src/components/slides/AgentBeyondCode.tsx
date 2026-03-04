import { AnimatedText } from "@/components/shared/AnimatedText";

const killChain = [
  { icon: "📡", label: "情报感知", detail: "2.3PB 多源数据，90 分钟完成", color: "#3b82f6" },
  { icon: "🎯", label: "目标锁定", detail: "6 个月轨迹建模，误差 500m→1m", color: "#a855f7" },
  { icon: "🧠", label: "决策推演", detail: "8 分钟生成 15 套方案", color: "#f59e0b" },
  { icon: "⚡", label: "协同执行", detail: "跨军种指令延迟 < 3 秒", color: "#ef4444" },
  { icon: "📋", label: "毁伤评估", detail: "0.3 秒图像识别确认", color: "#22c55e" },
];

export function AgentBeyondCode() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Agent 不只写代码
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-10 self-start">
          2026 年 2 月：Claude + Palantir 在实战中完成了完整的 Agent Loop —— 11 分 23 秒
        </p>
      </AnimatedText>

      {/* Kill chain as agent loop */}
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-3 w-full mb-6 lg:mb-10">
        {killChain.map((step, i) => (
          <AnimatedText key={i} delay={500 + i * 200} className="flex-1">
            <div className="relative flex flex-col items-center">
              <div
                className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl mb-3"
                style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}` }}
              >
                {step.icon}
              </div>
              <p className="text-lg font-bold text-[#f5f5f5] mb-1">{step.label}</p>
              <p className="text-sm text-[#71717a] text-center">{step.detail}</p>
              {i < killChain.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-6 text-[#27272a]">→</div>
              )}
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Core message */}
      <AnimatedText delay={1600}>
        <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-6">
          <div className="flex-1 bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-7">
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">同一套模式</h3>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              感知 → 分析 → 决策 → 执行 → 评估
              <br />
              <span className="text-[#71717a]">这和 Vibe Coding 里的 Agentic Loop 是<strong className="text-[#f5f5f5]">完全相同的模式</strong>，只是作用域从代码变成了现实世界。</span>
            </p>
          </div>
          <div className="flex-1 bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-7">
            <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">完全不同的后果</h3>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              写代码出 bug 可以 revert。
              <br />
              <span className="text-[#71717a]">但当 Agent 的"执行权限"从文件系统扩展到<strong className="text-accent-red">物理世界</strong>，每一个决策都不可逆。</span>
            </p>
          </div>
        </div>
      </AnimatedText>

      <AnimatedText delay={2100}>
        <div className="mt-6 bg-accent-red/5 border border-accent-red/20 rounded-xl px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full">
          <p className="text-base md:text-xl text-[#f5f5f5] text-center">
            技术无善恶，但<span className="text-accent-red font-bold">使用者的判断力</span>决定了它是工具还是武器
            <span className="text-[#71717a]"> —— 这正是为什么前面讲的安全底线如此重要</span>
          </p>
        </div>
      </AnimatedText>
    </div>
  );
}
