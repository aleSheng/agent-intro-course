import { AnimatedText } from "@/components/shared/AnimatedText";

const steps = [
  {
    num: "01",
    title: "喂论文给 AI",
    desc: "把 PDF 扔进 Kimi / Claude，让它帮你提炼核心算法、公式、数据流",
    tool: "Kimi · Claude · NotebookLM",
    color: "#3b82f6",
  },
  {
    num: "02",
    title: "生成实现计划",
    desc: "让 AI 根据论文方法论，拆解出代码实现的步骤和文件结构",
    tool: "Claude Code · Cursor",
    color: "#a855f7",
  },
  {
    num: "03",
    title: "Agent 逐步编码",
    desc: "AI 自动写代码、跑实验、看报错、修 bug —— 就是 Agentic Loop",
    tool: "Cursor · Trae · Claude Code",
    color: "#22c55e",
  },
  {
    num: "04",
    title: "对比验证结果",
    desc: "将实验输出与论文中的表格/图表对比，用 AI 分析差异原因并迭代",
    tool: "Claude · ChatGPT",
    color: "#f59e0b",
  },
];

export function PaperWorkflow() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          复现论文四步法
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          每一步都有 AI 工具接力
        </p>
      </AnimatedText>

      <div className="space-y-5 w-full">
        {steps.map((step, i) => (
          <AnimatedText key={i} delay={400 + i * 300}>
            <div
              className="bg-[#141416] border border-[#27272a] rounded-xl px-8 py-5 flex items-center gap-4 lg:gap-8"
              style={{ borderLeftWidth: "4px", borderLeftColor: step.color }}
            >
              <span
                className="text-3xl font-bold font-mono shrink-0"
                style={{ color: step.color }}
              >
                {step.num}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#f5f5f5] mb-1">{step.title}</h3>
                <p className="text-lg text-[#a1a1aa]">{step.desc}</p>
              </div>
              <div className="shrink-0 bg-[#0a0a0b] border border-[#27272a] rounded-lg px-4 py-2">
                <p className="text-sm text-[#71717a] font-mono">{step.tool}</p>
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
