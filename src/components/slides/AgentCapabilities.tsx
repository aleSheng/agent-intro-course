import { AnimatedText } from "@/components/shared/AnimatedText";

const capabilities = [
  { icon: "📋", label: "规划步骤", desc: "把大任务拆成小步骤" },
  { icon: "🔧", label: "调用工具", desc: "使用 API、浏览器、搜索引擎" },
  { icon: "📂", label: "读写文件", desc: "创建、修改、删除文件" },
  { icon: "⌨️", label: "执行命令", desc: "在终端运行任意命令" },
  { icon: "🌐", label: "上网搜索", desc: "实时获取最新信息" },
  { icon: "🔄", label: "自动修bug", desc: "遇到报错自己修复" },
];

export function AgentCapabilities() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Agent 能做什么？
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          从"给一个目标"到"任务完成"，全程自主
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6 w-full">
        {capabilities.map((cap, i) => (
          <AnimatedText key={i} delay={400 + i * 200}>
            <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-8 flex items-start gap-3 lg:gap-5 hover:border-accent-blue/30 transition-colors">
              <div className="text-xl md:text-2xl lg:text-4xl w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                {cap.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#f5f5f5] mb-2">{cap.label}</h3>
                <p className="text-lg text-[#a1a1aa]">{cap.desc}</p>
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
