import { AnimatedText } from "@/components/shared/AnimatedText";

const stages = [
  {
    emoji: "💬",
    label: "ChatBot",
    color: "#3b82f6",
    desc: "你问一句，它答一句",
    role: "你 in the seat",
  },
  {
    emoji: "🤖",
    label: "Agent",
    color: "#a855f7",
    desc: "你给目标，它当面干完",
    role: "你 in the loop",
  },
  {
    emoji: "⚡",
    label: "Background Agent",
    color: "#06b6d4",
    desc: "事件触发，后台自主工作，完成后提交审核",
    role: "你 on the loop",
  },
];

export function BackgroundAgent() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          下一步：<span className="text-accent-cyan">Background Agent</span>
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-14 self-start">
          从"你盯着它干"到"它自己在后台干" —— 自驾代码库
        </p>
      </AnimatedText>

      <div className="flex gap-6 w-full items-stretch">
        {stages.map((s, i) => (
          <AnimatedText key={i} delay={500 + i * 300} className="flex-1">
            <div
              className="bg-[#141416] border rounded-2xl p-8 h-full flex flex-col"
              style={{
                borderColor:
                  i === 2 ? `${s.color}50` : "#27272a",
                boxShadow:
                  i === 2
                    ? `0 0 30px ${s.color}15`
                    : "none",
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{s.emoji}</span>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: s.color }}
                >
                  {s.label}
                </h3>
              </div>
              <p className="text-xl text-[#a1a1aa] mb-6 flex-1">{s.desc}</p>
              <div className="bg-[#0a0a0b] rounded-xl px-5 py-3 border border-[#27272a]">
                <span className="text-lg font-mono" style={{ color: s.color }}>
                  {s.role}
                </span>
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={1800}>
        <p className="text-lg text-[#71717a] mt-10 text-center w-full">
          来源：<span className="font-mono text-[#a1a1aa]">background-agents.com</span>
          {" "}—— "没有事件触发、没有审计日志、机器一睡眠就停，那不叫 Background Agent"
        </p>
      </AnimatedText>
    </div>
  );
}
