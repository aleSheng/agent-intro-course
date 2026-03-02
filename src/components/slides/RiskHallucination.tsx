import { AnimatedText } from "@/components/shared/AnimatedText";

export function RiskHallucination() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-accent-red mb-4 self-start">
          翻车 ①：幻觉
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          Agent 会一本正经地编造不存在的东西
        </p>
      </AnimatedText>

      <div className="flex gap-12 w-full">
        <AnimatedText delay={500} className="flex-1">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🤖</span>
              <span className="text-xl font-semibold text-[#a1a1aa]">Agent 说：</span>
            </div>
            <div className="space-y-5">
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-lg text-[#f5f5f5] font-mono">
                  "你可以使用 <span className="text-accent-blue">react-magic-table</span> 这个库..."
                </p>
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-lg text-[#f5f5f5] font-mono">
                  "根据 Smith et al. (2024) 在 Nature 上的研究..."
                </p>
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-[#27272a]">
                <p className="text-lg text-[#f5f5f5] font-mono">
                  "调用 <span className="text-accent-blue">os.system.deepClean()</span> 即可..."
                </p>
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={1000} className="flex-1">
          <div className="bg-accent-red/5 border-2 border-accent-red/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❌</span>
              <span className="text-xl font-semibold text-accent-red">真相：</span>
            </div>
            <div className="space-y-5">
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-accent-red/20">
                <p className="text-lg text-accent-red">
                  ❌ 这个 npm 包<strong>根本不存在</strong>
                </p>
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-accent-red/20">
                <p className="text-lg text-accent-red">
                  ❌ 这篇论文<strong>完全是编造的</strong>
                </p>
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-5 border border-accent-red/20">
                <p className="text-lg text-accent-red">
                  ❌ 这个 API <strong>从来没有过</strong>
                </p>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>

      <AnimatedText delay={1500}>
        <p className="mt-10 text-xl text-accent-amber font-semibold text-center">
          ⚠️ 它不知道自己不知道。Always verify.
        </p>
      </AnimatedText>
    </div>
  );
}
