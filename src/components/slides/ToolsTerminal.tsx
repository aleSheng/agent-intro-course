import { AnimatedText } from "@/components/shared/AnimatedText";
import { IconCard } from "@/components/shared/IconCard";

const agents = [
  { icon: "🟠", title: "Claude Code", desc: "Anthropic官方出品，代码质量高，权限管控严格", color: "#d97706", url: "https://docs.anthropic.com/en/docs/claude-code", command: "npm install -g @anthropic-ai/claude-code" },
  { icon: "🟣", title: "OpenClaw", desc: "社区驱动，非程序员也能驾驭的终端Agent标杆", color: "#a855f7", url: "https://github.com/openclaw/openclaw" },
  { icon: "🔵", title: "Kimi Claw", desc: "月之暗面出品，擅长处理超长上下文的代码项目", color: "#6366f1", url: "https://www.kimi.com/bot" },
  { icon: "🟢", title: "MaxClaw", desc: "极致自动化，擅长端到端完成复杂工程任务", color: "#22c55e", url: "https://agent.minimaxi.com/" },
];

export function ToolsTerminal() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          终端自主 Agent
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          你的"数字全栈工程师"
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-8 w-full">
        {agents.map((a, i) => (
          <IconCard key={a.title} icon={a.icon} title={a.title} description={a.desc} color={a.color} delay={500 + i * 200} url={a.url} command={a.command} />
        ))}
      </div>
    </div>
  );
}
