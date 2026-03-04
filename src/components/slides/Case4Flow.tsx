import { AnimatedText } from "@/components/shared/AnimatedText";

const steps = [
  { icon: "💬", title: "用自然语言描述需求", desc: "告诉 AI 你想要什么，不需要写一行代码", color: "#a855f7" },
  { icon: "🤖", title: "Agent 自动生成", desc: "AI 写代码、创建文件、安装依赖、运行调试", color: "#3b82f6" },
  { icon: "👀", title: "预览并调整", desc: "看到效果后继续用自然语言修改：「把按钮改大」「换个颜色」", color: "#22c55e" },
];

export function Case4Flow() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          非程序员的使用流程
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-14 self-start">
          全程只需要<strong className="text-[#f5f5f5]">说人话</strong> —— 示例：用 Cursor 做一个个人简历网站
        </p>
      </AnimatedText>

      <div className="flex gap-4 lg:gap-8 w-full">
        {steps.map((step, i) => (
          <AnimatedText key={i} delay={500 + i * 400} className="flex-1">
            <div className="relative">
              <div
                className="bg-[#141416] border border-[#27272a] rounded-2xl p-10 text-center"
                style={{ borderColor: `${step.color}30` }}
              >
                <div className="text-sm font-mono text-[#71717a] mb-4">Step {i + 1}</div>
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-xl md:text-2xl lg:text-4xl"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#f5f5f5] mb-3">{step.title}</h3>
                <p className="text-lg text-[#a1a1aa]">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-5 text-2xl text-[#27272a] z-10">→</div>
              )}
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={2000}>
        <div className="mt-12 flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
          <p className="text-xl text-accent-purple font-semibold px-6">
            你不是在"学编程"，你是在"指挥 AI 编程"
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
        </div>
      </AnimatedText>
    </div>
  );
}
