import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case3Cover() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-8">
            <span className="text-lg font-mono text-accent-purple">Vibe Research</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-7xl font-bold text-[#f5f5f5] mb-6">
            Vibe Research
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa]">
            用 AI 重构你的<span className="text-accent-purple font-semibold">学习、研究与论文复现</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <div className="mt-12 flex justify-center gap-6">
            <div className="text-6xl">📚</div>
            <div className="text-4xl text-[#27272a] self-center">→</div>
            <div className="text-6xl">🎙️</div>
            <div className="text-4xl text-[#27272a] self-center">→</div>
            <div className="text-6xl">🔬</div>
          </div>
          <p className="mt-4 text-xl text-[#71717a]">枯燥论文 → 轻松播客 → 可复现实验</p>
        </AnimatedText>
      </div>
    </div>
  );
}
