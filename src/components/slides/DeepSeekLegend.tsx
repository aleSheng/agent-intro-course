import { AnimatedText } from "@/components/shared/AnimatedText";

const facts = [
  {
    icon: "🏦",
    title: "出身",
    text: "量化对冲基金幻方量化的 AI 实验室",
  },
  {
    icon: "📖",
    title: "透明",
    text: "MIT 开源协议，公开完整训练论文——前所未有",
  },
  {
    icon: "📱",
    title: "破圈",
    text: "上线一周登顶美国 iOS 免费榜第一",
  },
  {
    icon: "📉",
    title: "冲击",
    text: "Nvidia 单日暴跌 18%，蒸发 $5930 亿市值",
  },
  {
    icon: "🔮",
    title: "V4",
    text: "万亿参数，专为华为昇腾优化——绕开美国出口管制",
  },
  {
    icon: "🌍",
    title: "趋势",
    text: "中国开源模型 Hugging Face 总下载量已超美国 (MIT研究)",
  },
];

export function DeepSeekLegend() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-2 self-start">
          DeepSeek 传奇
        </h2>
        <p className="text-lg md:text-xl text-[#a1a1aa] mb-6 lg:mb-8 self-start">
          当 $600 万挑战 $1000 亿
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 w-full">
        {/* Left: dramatic number contrast */}
        <AnimatedText delay={400} className="lg:w-[340px] shrink-0">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-5 lg:p-7 h-full flex flex-col justify-center">
            <div className="text-center mb-6">
              <p className="text-sm text-[#71717a] mb-1">DeepSeek R1 训练成本</p>
              <p className="text-5xl lg:text-6xl font-black text-accent-green font-mono">$5.6M</p>
            </div>
            <div className="w-full h-px bg-[#27272a] my-2 relative">
              <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141416] px-3 text-lg text-[#71717a]">vs</span>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-[#71717a] mb-1">OpenAI 2026 单轮融资</p>
              <p className="text-5xl lg:text-6xl font-black text-accent-red font-mono">$110B</p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg text-[#a1a1aa]">
                成本差距 <span className="text-2xl font-bold text-accent-amber">20,000 倍</span>
              </p>
            </div>
          </div>
        </AnimatedText>

        {/* Right: fact cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          {facts.map((f, i) => (
            <AnimatedText key={f.title} delay={600 + i * 150}>
              <div className="bg-[#141416] border border-[#27272a] rounded-xl p-4 hover:bg-[#1a1a1e] transition-colors h-full">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{f.icon}</span>
                  <div>
                    <p className="text-base font-semibold text-[#f5f5f5] mb-1">{f.title}</p>
                    <p className="text-sm lg:text-base text-[#a1a1aa]">{f.text}</p>
                  </div>
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>

      <AnimatedText delay={1600}>
        <p className="text-lg lg:text-xl text-accent-green font-semibold text-center mt-6 w-full">
          没有永远的王者，只有永远的竞争
        </p>
      </AnimatedText>
    </div>
  );
}
