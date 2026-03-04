import { AnimatedText } from "@/components/shared/AnimatedText";
import { IconCard } from "@/components/shared/IconCard";

const ides = [
  { icon: "🔷", title: "Trae", desc: "字节跳动出品的AI IDE，多文件Composer能力强", color: "#3b82f6", url: "https://trae.ai" },
  { icon: "💜", title: "VSCode + AI", desc: "最广泛的开发者生态，Copilot/Cline等插件丰富", color: "#a855f7", url: "https://code.visualstudio.com" },
  { icon: "🟡", title: "Cursor", desc: "原生AI IDE标杆，适合沉浸式Vibe Coding", color: "#f59e0b", url: "https://cursor.com" },
  { icon: "🌊", title: "Windsurf", desc: "下一代 AI IDE，深度集成 Agent 能力", color: "#06b6d4", url: "https://windsurf.com" },
];

export function ToolsIDE() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          AI Native 开发环境
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          "智能驾驶舱"——让编码体验原生融合 AI
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 gap-8 w-full">
        {ides.map((ide, i) => (
          <IconCard key={ide.title} icon={ide.icon} title={ide.title} description={ide.desc} color={ide.color} delay={500 + i * 200} url={ide.url} />
        ))}
      </div>
    </div>
  );
}
