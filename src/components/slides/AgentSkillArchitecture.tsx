import { AnimatedText } from "@/components/shared/AnimatedText";

const tiers = [
  {
    label: "元数据层",
    labelEn: "Metadata",
    color: "#3b82f6",
    blocks: ["名称", "描述"],
    timing: "始终加载",
    timingColor: "#f59e0b",
    tokens: "~100 tokens / skill",
  },
  {
    label: "指令层",
    labelEn: "Instruction",
    color: "#22c55e",
    blocks: ["SKILL.md 中除名称和描述之外的内容"],
    timing: "按需加载",
    timingColor: "#f59e0b",
    tokens: "< 5,000 tokens",
  },
  {
    label: "资源层",
    labelEn: "Resource",
    color: "#22c55e",
    blocks: ["Reference", "Script"],
    timing: "按需中的按需加载",
    timingColor: "#f59e0b",
    tokens: "不限",
  },
];

const ecosystemItems = [
  { name: "Claude Code", highlight: true },
  { name: "Codex CLI", highlight: false },
  { name: "Gemini CLI", highlight: false },
  { name: "Cursor", highlight: false },
  { name: "Copilot", highlight: false },
  { name: "Windsurf", highlight: false },
];

export function AgentSkillArchitecture() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-3 self-start">
          渐进式披露 <span className="text-3xl text-[#71717a] font-normal">Progressive Disclosure</span>
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-10 self-start">
          Agent 怎么在有限的"工作台面"上管理无限的技能？
        </p>
      </AnimatedText>

      {/* Three-tier architecture */}
      <div className="w-full space-y-5">
        {tiers.map((tier, i) => (
          <AnimatedText key={tier.label} delay={500 + i * 300}>
            <div className="flex items-center gap-3 lg:gap-6">
              {/* Left label */}
              <div className="hidden lg:block w-36 shrink-0 text-right">
                <p className="text-xl font-bold" style={{ color: tier.label.startsWith("元") ? "#f5c542" : "#22c55e" }}>
                  {tier.label}
                </p>
                <p className="text-sm text-[#71717a]">{tier.labelEn}</p>
              </div>

              {/* Center blocks */}
              <div className="flex-1 bg-[#0f2a4a] border border-[#1e3a5f] rounded-xl px-6 py-4 flex items-center gap-4">
                {tier.blocks.map((block) => (
                  <div
                    key={block}
                    className="bg-[#166534] rounded-lg px-5 py-2.5 text-lg text-[#f5f5f5] font-medium"
                  >
                    {block}
                  </div>
                ))}
              </div>

              {/* Right timing */}
              <div
                className="hidden lg:block w-48 shrink-0 rounded-lg px-4 py-2.5 text-center text-base font-semibold"
                style={{ backgroundColor: `${tier.timingColor}22`, color: tier.timingColor }}
              >
                {tier.timing}
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Arrows */}
      <AnimatedText delay={1500}>
        <div className="flex items-center gap-3 lg:gap-6 mt-3 w-full">
          <div className="hidden lg:block w-36 shrink-0" />
          <div className="flex-1 flex justify-between px-8">
            <span className="text-lg text-[#f5c542]">↑ 读取</span>
            <span className="text-lg text-[#f5c542]">执行 ↗</span>
          </div>
          <div className="hidden lg:block w-48 shrink-0" />
        </div>
      </AnimatedText>

      {/* Bottom: ecosystem + insight */}
      <AnimatedText delay={1800}>
        <div className="mt-8 flex flex-col lg:flex-row gap-3 lg:gap-6 w-full">
          {/* Open standard badge */}
          <div className="flex-1 bg-[#141416] border border-[#27272a] rounded-xl px-6 py-5">
            <p className="text-lg font-bold text-[#f5f5f5] mb-3">
              🌐 开放标准，一次编写，到处运行
            </p>
            <div className="flex flex-wrap gap-2">
              {ecosystemItems.map((item) => (
                <span
                  key={item.name}
                  className={`px-3 py-1.5 rounded-lg text-sm font-mono ${
                    item.highlight
                      ? "bg-accent-blue/15 border border-accent-blue/30 text-accent-blue"
                      : "bg-[#1e1e22] border border-[#27272a] text-[#a1a1aa]"
                  }`}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Ecosystem numbers */}
          <div className="w-full lg:w-80 lg:shrink-0 bg-[#141416] border border-[#27272a] rounded-xl px-6 py-5">
            <p className="text-lg font-bold text-[#f5f5f5] mb-3">📊 生态规模（2026.03）</p>
            <div className="space-y-2 text-base text-[#a1a1aa]">
              <p><span className="text-accent-green font-bold">27 万+</span> 技能在 SkillsMP 市场</p>
              <p><span className="text-accent-green font-bold">13,700+</span> 技能在 OpenClaw 注册表</p>
              <p><span className="text-accent-green font-bold">42k ⭐</span> Superpowers 框架</p>
            </div>
          </div>
        </div>
      </AnimatedText>
    </div>
  );
}
