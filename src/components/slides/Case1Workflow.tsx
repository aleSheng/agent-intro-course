import { AnimatedText } from "@/components/shared/AnimatedText";

const alternatives = [
  {
    name: "nanoClaw",
    desc: "极简入门，几行配置就能跑",
    color: "#22c55e",
    tag: "入门首选",
  },
  {
    name: "zeroclaw",
    desc: "零配置，开箱即用",
    color: "#3b82f6",
    tag: "零门槛",
  },
  {
    name: "Kimi Claw",
    desc: "月之暗面出品，超长上下文",
    color: "#6366f1",
    tag: "长文档",
  },
  {
    name: "MaxClaw",
    desc: "极致自动化，端到端完成任务",
    color: "#ef4444",
    tag: "重度使用",
  },
  {
    name: "Manus",
    desc: "云端全能助手，无需本地环境",
    color: "#f59e0b",
    tag: "云端方案",
  },
];

export function Case1Workflow() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          OpenClaw 太复杂？你还有更多选择
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-14 self-start">
          终端智能体生态正在快速扩展——找到适合你的那个
        </p>
      </AnimatedText>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5 w-full">
        {alternatives.map((alt, i) => (
          <AnimatedText key={alt.name} delay={500 + i * 200}>
            <div
              className="bg-[#141416] rounded-2xl p-6 h-full border"
              style={{ borderColor: `${alt.color}33` }}
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-mono mb-4"
                style={{ backgroundColor: `${alt.color}1a`, color: alt.color }}
              >
                {alt.tag}
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-3">{alt.name}</h3>
              <p className="text-base text-[#a1a1aa]">{alt.desc}</p>
            </div>
          </AnimatedText>
        ))}
      </div>

      <AnimatedText delay={1800}>
        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
          <p className="text-xl text-accent-purple font-semibold px-6">
            关键不是用哪个工具，而是理解"人 + Agent"的协作模式
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent" />
        </div>
      </AnimatedText>
    </div>
  );
}
