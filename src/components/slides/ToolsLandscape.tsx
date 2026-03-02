import { AnimatedText } from "@/components/shared/AnimatedText";

const workflow = [
  { stage: "创意", tools: ["你的大脑", "ChatBot"], color: "#f5f5f5" },
  { stage: "设计", tools: ["Cursor", "Trae"], color: "#3b82f6" },
  { stage: "开发", tools: ["Claude Code", "OpenClaw"], color: "#a855f7" },
  { stage: "测试", tools: ["Agent Loop", "自动修复"], color: "#f59e0b" },
  { stage: "部署", tools: ["Vercel", "Coze"], color: "#22c55e" },
];

export function ToolsLandscape() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          全景总览：从创意到上线
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-16 self-start">
          每个阶段都有 AI 工具覆盖
        </p>
      </AnimatedText>

      <div className="flex items-start w-full gap-2">
        {workflow.map((stage, i) => (
          <AnimatedText key={i} delay={500 + i * 300} className="flex-1">
            <div className="flex flex-col items-center">
              <div
                className="w-full py-4 rounded-t-xl text-center font-bold text-xl text-[#0a0a0b]"
                style={{ backgroundColor: stage.color }}
              >
                {stage.stage}
              </div>
              <div className="w-full bg-[#141416] border border-[#27272a] border-t-0 rounded-b-xl p-6">
                {stage.tools.map((tool, j) => (
                  <div key={j} className="py-2 text-lg text-[#a1a1aa] text-center">
                    {tool}
                  </div>
                ))}
              </div>
              {i < workflow.length - 1 && (
                <div className="absolute right-0 top-1/2 text-xl text-[#27272a] hidden">→</div>
              )}
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={2500}>
        <div className="mt-12 text-center">
          <p className="text-xl text-accent-green font-semibold">
            🎯 关键认知：没有"一个工具解决所有问题"，而是"每个阶段换最趁手的工具"
          </p>
        </div>
      </AnimatedText>
    </div>
  );
}
