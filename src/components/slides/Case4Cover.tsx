import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case4Cover() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-8">
            <span className="text-lg font-mono text-accent-purple">案例 04</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-6xl font-bold text-[#f5f5f5] mb-6">
            从想法到上线
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa]">
            <span className="text-accent-amber font-bold">3 分钟</span>用无代码平台搭建一个 AI 产品
          </p>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <div className="mt-12 flex justify-center gap-12">
            <div className="px-8 py-4 bg-[#141416] border border-[#27272a] rounded-2xl text-center">
              <p className="text-2xl font-bold text-[#f5f5f5]">扣子 (Coze)</p>
              <p className="text-sm text-[#71717a] mt-1">字节跳动</p>
            </div>
            <div className="px-8 py-4 bg-[#141416] border border-[#27272a] rounded-2xl text-center">
              <p className="text-2xl font-bold text-[#f5f5f5]">Dify</p>
              <p className="text-sm text-[#71717a] mt-1">开源平台</p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
