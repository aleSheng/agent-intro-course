import { AnimatedText } from "@/components/shared/AnimatedText";

const steps = [
  { icon: "📝", title: "写设计文档", desc: "用自然语言描述系统架构" },
  { icon: "📋", title: "定义需求", desc: "清晰地告诉 Agent 要什么" },
  { icon: "👀", title: "Review AI 输出", desc: "审查代码质量与逻辑" },
  { icon: "⚖️", title: "做取舍决策", desc: "在多个方案中选最优解" },
];

export function Case1Workflow() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          人在这个过程中做了什么？
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-16 self-start">
          注意：以下没有一步是"写代码"
        </p>
      </AnimatedText>

      <div className="flex gap-6 w-full items-start">
        {steps.map((step, i) => (
          <AnimatedText key={i} delay={500 + i * 300} className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-accent-purple/10 border-2 border-accent-purple/30 flex items-center justify-center text-5xl mb-6">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-3">{step.title}</h3>
              <p className="text-lg text-[#a1a1aa]">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 text-3xl text-[#27272a]">→</div>
              )}
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={2000}>
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
          <p className="text-xl text-accent-purple font-semibold px-6">
            人 = 设计者 + 决策者 + 质检员
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
        </div>
      </AnimatedText>
    </div>
  );
}
