import { AnimatedText } from "@/components/shared/AnimatedText";
import { IconCard } from "@/components/shared/IconCard";

const platforms = [
  { icon: "🧩", title: "扣子(Coze)", desc: "字节系，拖拽式搭建，发布即上线", color: "#a855f7" },
  { icon: "🔧", title: "Dify", desc: "开源，适合私有化部署，企业级Agent搭建", color: "#3b82f6" },
  { icon: "📓", title: "NotebookLM", desc: "Google出品，论文/书籍秒变播客", color: "#22c55e" },
  { icon: "🌙", title: "Kimi", desc: "超长上下文，整本书变私人顾问", color: "#6366f1" },
];

export function ToolsNocodeKnowledge() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          无代码平台 & 知识平台
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          零技术门槛，人人可用
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-8 w-full">
        {platforms.map((p, i) => (
          <IconCard key={p.title} icon={p.icon} title={p.title} description={p.desc} color={p.color} delay={500 + i * 200} />
        ))}
      </div>
    </div>
  );
}
