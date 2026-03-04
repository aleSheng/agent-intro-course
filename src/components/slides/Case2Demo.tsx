import { AnimatedText } from "@/components/shared/AnimatedText";

const steps = [
  { icon: "📁", label: "空目录", desc: "从零开始", color: "#71717a" },
  { icon: "🧠", label: "Agent 规划结构", desc: "自动设计文件架构", color: "#3b82f6" },
  { icon: "✏️", label: "写代码", desc: "生成全部源文件", color: "#a855f7" },
  { icon: "🔧", label: "自动调试", desc: "运行→报错→修复", color: "#f59e0b" },
  { icon: "🚀", label: "成品弹出", desc: "可用产品上线", color: "#22c55e" },
];

export function Case2Demo() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Demo 流程
        </h2>
        <div className="self-start mb-6 lg:mb-12 flex items-center gap-3">
          <span className="px-3 py-1 bg-accent-amber/10 border border-accent-amber/30 rounded-full text-accent-amber text-lg font-semibold">
            ⚡ 现场演示
          </span>
        </div>
      </AnimatedText>

      {/* Horizontal flow */}
      <div className="flex items-start gap-4 w-full">
        {steps.map((step, i) => (
          <AnimatedText key={i} delay={500 + i * 300} className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-xl md:text-2xl lg:text-4xl mb-4"
                style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}40` }}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f5] mb-2">{step.label}</h3>
              <p className="text-base text-[#a1a1aa]">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center justify-center mt-[-80px] ml-[100%]">
                <span className="text-2xl text-[#27272a]">→</span>
              </div>
            )}
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={2500}>
        <div className="mt-16 w-full bg-[#141416] border border-[#27272a] rounded-2xl p-8">
          <p className="text-xl text-[#f5f5f5] font-semibold mb-4">💡 演示之后：对话式迭代</p>
          <div className="flex gap-4 flex-wrap">
            {['\u201C加个暗黑模式\u201D', '\u201C速度随分数递增\u201D', '\u201C加背景音乐\u201D'].map((req, i) => (
              <span
                key={i}
                className="px-5 py-3 bg-accent-purple/10 border border-accent-purple/30 rounded-xl text-lg text-accent-purple"
              >
                {req}
              </span>
            ))}
          </div>
          <p className="text-lg text-[#71717a] mt-4">→ Agent 逐一消化并实现，展示"对话式迭代开发"</p>
        </div>
      </AnimatedText>
    </div>
  );
}
