import { AnimatedText } from "@/components/shared/AnimatedText";

const steps = [
  { icon: "🎭", title: "设定人设 Prompt", desc: "定义 Bot 的性格和能力边界", color: "#a855f7" },
  { icon: "📚", title: "挂载知识库 (RAG)", desc: "上传专业资料作为知识源", color: "#3b82f6" },
  { icon: "🔌", title: "接入搜索插件", desc: "让 Bot 能联网获取实时信息", color: "#22c55e" },
  { icon: "🚀", title: "发布上线", desc: "一键发布，生成分享链接", color: "#f59e0b" },
];

export function Case4Flow() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          搭建流程：全部拖拽完成
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-16 self-start">
          示例：搭建一个"毒舌考研规划师" Bot
        </p>
      </AnimatedText>

      <div className="flex gap-6 w-full">
        {steps.map((step, i) => (
          <AnimatedText key={i} delay={500 + i * 400} className="flex-1">
            <div className="relative">
              <div
                className="bg-[#141416] border border-[#27272a] rounded-2xl p-8 text-center hover:border-opacity-50 transition-all"
                style={{ borderColor: `${step.color}30` }}
              >
                <div className="text-sm font-mono text-[#71717a] mb-4">Step {i + 1}</div>
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-3">{step.title}</h3>
                <p className="text-base text-[#a1a1aa]">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 text-2xl text-[#27272a] z-10">→</div>
              )}
            </div>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
