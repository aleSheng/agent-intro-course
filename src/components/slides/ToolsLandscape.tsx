import { AnimatedText } from "@/components/shared/AnimatedText";

const toolUrls: Record<string, string> = {
  "ChatGPT / Claude": "https://chatgpt.com",
  "Perplexity": "https://perplexity.ai",
  "NotebookLM": "https://notebooklm.google.com",
  "Cursor": "https://cursor.com",
  "Trae": "https://trae.ai",
  "Claude Code": "https://docs.anthropic.com/en/docs/claude-code",
  "Cursor Agent": "https://cursor.com",
};

const workflow = [
  { stage: "创意", tools: ["你的大脑", "ChatGPT / Claude"], color: "#f5f5f5" },
  { stage: "研究", tools: ["Perplexity", "NotebookLM"], color: "#06b6d4" },
  { stage: "设计", tools: ["Cursor", "Trae"], color: "#3b82f6" },
  { stage: "开发 & 调试", tools: ["Claude Code", "Cursor Agent"], color: "#a855f7" },
];

export function ToolsLandscape() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          全景总览：从想法到成果
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-8 lg:mb-16 self-start">
          每个阶段都有 AI 工具覆盖 —— 不会编程的人也能走完全流程
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 lg:grid-cols-4 w-full gap-3">
        {workflow.map((stage, i) => (
          <AnimatedText key={i} delay={500 + i * 300}>
            <div className="flex flex-col items-center">
              <div
                className="w-full py-3 md:py-5 rounded-t-xl text-center font-bold text-sm md:text-base lg:text-xl text-[#0a0a0b]"
                style={{ backgroundColor: stage.color }}
              >
                {stage.stage}
              </div>
              <div className="w-full bg-[#141416] border border-[#27272a] border-t-0 rounded-b-xl p-3 md:p-4 lg:p-6">
                {stage.tools.map((tool, j) => {
                  const href = toolUrls[tool];
                  return href ? (
                    <a
                      key={j}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-lg text-[#a1a1aa] text-center hover:text-[#f5f5f5] hover:underline transition-colors"
                    >
                      {tool}
                    </a>
                  ) : (
                    <div key={j} className="py-2 text-lg text-[#a1a1aa] text-center">
                      {tool}
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={2000}>
        <div className="mt-12 text-center">
          <p className="text-xl text-accent-green font-semibold">
            🎯 关键认知：没有"一个工具解决所有问题"，而是"每个阶段换最趁手的工具"
          </p>
        </div>
      </AnimatedText>
    </div>
  );
}
