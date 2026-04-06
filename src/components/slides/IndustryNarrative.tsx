import { AnimatedText } from "@/components/shared/AnimatedText";

const timeline = [
  {
    year: "2011",
    author: "Marc Andreessen",
    quote: '"Software is eating the world"',
    detail: "《华尔街日报》专栏，预言软件公司将吞噬传统行业",
    color: "#3b82f6",
  },
  {
    year: "2017",
    author: "Jensen Huang",
    quote: '"AI is eating software"',
    detail: "软件本身也在被 AI 吞噬——写代码的工作正在被自动化",
    color: "#a855f7",
  },
  {
    year: "2026",
    author: "华尔街",
    quote: '"SaaSpocalypse"',
    detail: "企业软件 ETF 30 天蒸发 $2 万亿市值——AI Agent 证明软件可以用 1/10 成本构建",
    color: "#ef4444",
  },
];

const facts = [
  { icon: "📊", text: "GitHub Copilot 生成了全球 46% 的新代码" },
  { icon: "🚀", text: "Cursor 3 个月 ARR 从 $10 亿翻到 $20 亿" },
  { icon: "💬", text: "Sam Altman: 智能的成本每年下降 10 倍" },
];

export function IndustryNarrative() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-2 self-start">
          软件吃掉世界 → AI 吃掉软件
        </h2>
        <p className="text-lg md:text-xl text-[#a1a1aa] mb-6 lg:mb-10 self-start">
          一个 15 年的预言正在兑现
        </p>
      </AnimatedText>

      {/* Timeline */}
      <div className="w-full flex flex-col gap-4 lg:gap-5 relative">
        {/* Vertical line */}
        <div className="hidden lg:block absolute left-[60px] top-4 bottom-4 w-px bg-[#27272a]" />

        {timeline.map((item, i) => (
          <AnimatedText key={item.year} delay={400 + i * 300}>
            <div className="flex items-start gap-4 lg:gap-6">
              {/* Year badge */}
              <div
                className="shrink-0 w-[80px] lg:w-[120px] text-right"
              >
                <span
                  className="text-2xl lg:text-3xl font-black font-mono"
                  style={{ color: item.color }}
                >
                  {item.year}
                </span>
              </div>

              {/* Dot on timeline */}
              <div className="hidden lg:flex shrink-0 w-3 h-3 rounded-full mt-3 ring-2 ring-[#27272a]" style={{ backgroundColor: item.color }} />

              {/* Content card */}
              <div className="flex-1 bg-[#141416] border border-[#27272a] rounded-xl p-4 lg:p-5 hover:bg-[#1a1a1e] transition-colors">
                <p className="text-lg lg:text-xl font-bold text-[#f5f5f5] mb-1">
                  <span style={{ color: item.color }}>{item.quote}</span>
                  <span className="text-base lg:text-lg text-[#71717a] font-normal ml-3">— {item.author}</span>
                </p>
                <p className="text-base lg:text-lg text-[#a1a1aa]">{item.detail}</p>
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Bottom facts */}
      <AnimatedText delay={1400}>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 lg:mt-8">
          {facts.map((f) => (
            <div key={f.text} className="bg-[#141416] border border-[#27272a] rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-xl">{f.icon}</span>
              <span className="text-sm lg:text-base text-[#a1a1aa]">{f.text}</span>
            </div>
          ))}
        </div>
      </AnimatedText>

      <AnimatedText delay={1700}>
        <p className="text-lg lg:text-xl text-accent-blue font-semibold text-center mt-6 w-full">
          不是程序员被取代，而是"会用 AI 的人"取代"不会用的人"
        </p>
      </AnimatedText>
    </div>
  );
}
