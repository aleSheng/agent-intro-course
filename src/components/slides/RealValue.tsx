import { AnimatedText } from "@/components/shared/AnimatedText";

const rows = [
  { think: "会写代码", real: "能把模糊需求拆解成清晰的、可执行的子任务" },
  { think: "熟悉某个框架的API", real: "能判断AI生成的100个方案里哪个最优、为什么" },
  { think: "打字快", real: "能用精准的自然语言描述你到底要什么" },
  { think: "什么都自己干", real: "知道什么该交给AI、什么必须自己把关" },
];

export function RealValue() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          真正值钱的能力
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          AI 时代的能力重估
        </p>
      </AnimatedText>

      <AnimatedText delay={400}>
        <div className="w-full rounded-2xl overflow-hidden border border-[#27272a]">
          {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 bg-[#141416] border-b border-[#27272a]">
            <div className="px-10 py-5 text-xl font-semibold text-[#71717a]">你以为值钱的 ❌</div>
            <div className="px-10 py-5 text-xl font-semibold text-accent-green">真正值钱的 ✅</div>
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <AnimatedText key={i} delay={600 + i * 300}>
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#27272a] last:border-b-0">
                <div className="px-10 py-6 text-xl text-[#71717a] line-through decoration-accent-red/50">
                  {row.think}
                </div>
                <div className="px-10 py-6 text-xl text-accent-green font-medium">
                  {row.real}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </AnimatedText>
    </div>
  );
}
