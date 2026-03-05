import { AnimatedText } from "@/components/shared/AnimatedText";

export function ProofPeter() {
  return (
    <div className="slide module-cover bg-[#0a0a0b] flex items-center justify-center">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-[80px]">
        {/* Left: Quote */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatedText delay={300}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-8">
              <span className="text-lg font-mono text-accent-blue">真人真事</span>
            </div>
          </AnimatedText>
          <AnimatedText delay={800}>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] leading-tight">
              "I Ship Code
              <br />
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
                I Don't Read"
              </span>
            </blockquote>
          </AnimatedText>
          <AnimatedText delay={1500}>
            <p className="mt-6 text-2xl text-[#a1a1aa]">
              — Peter Steinberger
            </p>
            <p className="mt-1 text-lg text-[#71717a]">
              PSPDFKit 创始人 · 资深 iOS 开发者
            </p>
          </AnimatedText>
        </div>

        {/* Right: Story cards */}
        <div className="flex-1 flex flex-col gap-5">
          <AnimatedText delay={2000}>
            <div className="px-8 py-5 bg-[#141416] rounded-2xl border border-[#27272a]">
              <p className="text-xl text-[#f5f5f5] font-semibold mb-1">用 AI Agent 从零造出 OpenClaw</p>
              <p className="text-lg text-[#71717a]">GitHub 爆火开源项目，数万 Star</p>
            </div>
          </AnimatedText>
          <AnimatedText delay={2500}>
            <div className="px-8 py-5 bg-[#141416] rounded-2xl border border-[#27272a]">
              <p className="text-xl text-[#f5f5f5] font-semibold mb-1">代码自己都没读过就发布了</p>
              <p className="text-lg text-[#71717a]">AI 写、AI 测、AI 修 → 直接上线</p>
            </div>
          </AnimatedText>
          <AnimatedText delay={3000}>
            <div className="px-8 py-5 bg-accent-blue/5 rounded-2xl border border-accent-blue/20">
              <p className="text-xl text-accent-blue font-semibold">
                连资深程序员都不再逐行读代码了
              </p>
              <p className="text-lg text-[#a1a1aa] mt-1">
                这就是"不需要学编程"的底气
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
}
