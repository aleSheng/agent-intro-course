import { AnimatedText } from "@/components/shared/AnimatedText";
import { IconCard } from "@/components/shared/IconCard";

const platforms = [
  { icon: "📓", title: "NotebookLM", desc: "Google 出品，论文/书籍秒变播客对话", color: "#22c55e", url: "https://notebooklm.google.com" },
  { icon: "🌙", title: "Kimi", desc: "超长上下文，整本书变私人顾问", color: "#6366f1", url: "https://kimi.moonshot.cn" },
  { icon: "🔍", title: "Perplexity", desc: "AI 原生搜索引擎，深度研究自动出报告", color: "#3b82f6", url: "https://perplexity.ai" },
  { icon: "🧠", title: "ChatGPT / Claude", desc: "通用对话，深度推理与写作最强底座", color: "#a855f7", url: "https://chatgpt.com" },
];

export function ToolsNocodeKnowledge() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          知识 & 研究平台
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          把信息变成知识，把知识变成行动
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-8 w-full">
        {platforms.map((p, i) => (
          <IconCard key={p.title} icon={p.icon} title={p.title} description={p.desc} color={p.color} delay={500 + i * 200} url={p.url} />
        ))}
      </div>
    </div>
  );
}
