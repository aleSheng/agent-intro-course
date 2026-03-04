import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case3Notebook() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          NotebookLM：论文秒变播客
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          Google 出品 · 把学术论文变成双人播客对谈
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full items-stretch">
        <AnimatedText delay={500} className="flex-1">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📄</span>
              <h3 className="text-2xl font-bold text-[#a1a1aa]">输入</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-sm text-[#71717a] font-mono mb-2">paper_1.pdf</p>
                <div className="h-2 bg-[#27272a] rounded w-full mb-1" />
                <div className="h-2 bg-[#27272a] rounded w-4/5 mb-1" />
                <div className="h-2 bg-[#27272a] rounded w-3/5" />
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-sm text-[#71717a] font-mono mb-2">paper_2.pdf</p>
                <div className="h-2 bg-[#27272a] rounded w-full mb-1" />
                <div className="h-2 bg-[#27272a] rounded w-3/4 mb-1" />
                <div className="h-2 bg-[#27272a] rounded w-2/3" />
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-sm text-[#71717a] font-mono mb-2">textbook_ch3.pdf</p>
                <div className="h-2 bg-[#27272a] rounded w-full mb-1" />
                <div className="h-2 bg-[#27272a] rounded w-5/6" />
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={800} className="flex items-center">
          <div className="text-xl md:text-2xl lg:text-4xl text-accent-purple">→</div>
        </AnimatedText>

        <AnimatedText delay={1000} className="flex-1">
          <div className="bg-[#141416] border-2 border-accent-purple/30 rounded-2xl p-4 md:p-6 lg:p-8 h-full" style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.1)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎙️</span>
              <h3 className="text-2xl font-bold text-accent-purple">输出：播客对谈</h3>
            </div>
            {/* Waveform visualization */}
            <div className="bg-[#0a0a0b] rounded-xl p-6 border border-accent-purple/20 mb-6">
              <div className="flex items-end gap-1 h-20 justify-center">
                {Array.from({ length: 40 }, (_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-accent-purple/60 rounded-full"
                    style={{
                      height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
                      animationDelay: `${i * 50}ms`,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-[#71717a]">
                <span>00:00</span>
                <span className="text-accent-purple">▶ 正在播放...</span>
                <span>15:30</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-lg text-[#a1a1aa]">
                <span className="text-accent-blue font-semibold">主持人A：</span>
                "这篇论文最有意思的发现是..."
              </p>
              <p className="text-lg text-[#a1a1aa]">
                <span className="text-accent-green font-semibold">主持人B：</span>
                "对，而且这和另一篇研究有个有趣的矛盾..."
              </p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
