import { AnimatedText } from "@/components/shared/AnimatedText";
import { IconCard } from "@/components/shared/IconCard";

const tools = [
  { icon: "🟠", title: "Claude Code", desc: "Anthropic 官方，代码质量高", color: "#d97706" },
  { icon: "🟣", title: "OpenClaw", desc: "社区驱动，非程序员友好", color: "#a855f7" },
  { icon: "🔵", title: "Kimi Claw", desc: "月之暗面，超长上下文", color: "#6366f1" },
  { icon: "🟢", title: "MaxClaw", desc: "极致自动化，端到端完成", color: "#22c55e" },
];

export function Case2Tools() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Vibe Coding 工具箱
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          终端自主 Agent —— 你的"数字全栈工程师"
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-8 w-full max-w-[1400px]">
        {tools.map((tool, i) => (
          <IconCard
            key={tool.title}
            icon={tool.icon}
            title={tool.title}
            description={tool.desc}
            color={tool.color}
            delay={500 + i * 200}
          />
        ))}
      </div>
    </div>
  );
}
