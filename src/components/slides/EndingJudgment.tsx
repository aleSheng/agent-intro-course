import { AnimatedText } from "@/components/shared/AnimatedText";

export function EndingJudgment() {
  return (
    <div className="slide module-ending bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-4xl text-[#a1a1aa] leading-relaxed mb-8">
            一个判断——
          </p>
        </AnimatedText>
        <AnimatedText delay={800}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            "造东西"的门槛在<span className="text-accent-green">急剧降低</span>，
          </p>
        </AnimatedText>
        <AnimatedText delay={1600}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed mt-4">
            但"造出<span className="text-accent-amber">好</span>东西"的门槛<span className="text-[#a1a1aa]">从未降低</span>。
          </p>
        </AnimatedText>
        <AnimatedText delay={2800}>
          <div className="mt-16 flex justify-center gap-8">
            {["品味 (Taste)", "判断力", "问题定义能力"].map((skill, i) => (
              <div
                key={i}
                className="px-8 py-5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${3000 + i * 300}ms` }}
              >
                <p className="text-2xl font-bold text-accent-cyan">{skill}</p>
                <p className="text-sm text-[#71717a] mt-1">越来越稀缺 ↑</p>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
