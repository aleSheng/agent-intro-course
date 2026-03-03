import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case3Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            信息获取的方式正在发生根本转变：
          </p>
        </AnimatedText>
        <AnimatedText delay={1200}>
          <div className="mt-10 flex justify-center gap-12 items-center">
            <div className="text-center">
              <p className="text-3xl text-[#71717a] line-through">‍"我去读"</p>
            </div>
            <div className="text-4xl text-accent-purple">→</div>
            <div className="text-center">
              <p className="text-3xl text-accent-purple font-bold">"它来讲给我听"</p>
              <p className="text-3xl text-accent-green font-bold mt-2">"我来直接问它"</p>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={2200}>
          <div className="mt-12 flex justify-center gap-6">
            <div className="bg-[#141416] border border-accent-red/20 rounded-2xl px-8 py-6 text-left max-w-[420px]">
              <p className="text-lg font-bold text-accent-red mb-3">以前复现论文</p>
              <div className="space-y-2 text-lg text-[#a1a1aa]">
                <p>→ 看不懂 PyTorch / TensorFlow 代码</p>
                <p>→ 环境配置报错卡住好几天</p>
                <p>→ 论文没开源，从零实现无从下手</p>
              </div>
            </div>
            <div className="bg-[#141416] border-2 border-accent-green/30 rounded-2xl px-8 py-6 text-left max-w-[420px]" style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.1)" }}>
              <p className="text-lg font-bold text-accent-green mb-3">现在的突破</p>
              <div className="space-y-2 text-lg text-[#a1a1aa]">
                <p>→ 把论文扔给 AI，它帮你写代码</p>
                <p>→ 环境报错？Agent 自己修</p>
                <p>→ 没开源？AI 读论文后从零实现</p>
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={3200}>
          <div className="mt-8 inline-block px-10 py-5 bg-accent-purple/10 border border-accent-purple/30 rounded-2xl">
            <p className="text-2xl text-accent-purple font-semibold">
              核心能力回到了它该在的地方：理解问题本身，而不是工程实现
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
