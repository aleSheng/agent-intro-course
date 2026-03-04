import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case3Kimi() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Kimi：超长上下文的力量
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          整本书 / 整个代码库 → 你的私人顾问
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12 w-full">
        {/* Input visualization */}
        <AnimatedText delay={500} className="flex-1">
          <div className="flex flex-col gap-4">
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">📖</span>
              <div>
                <p className="text-xl font-semibold text-[#f5f5f5]">整本教材</p>
                <p className="text-sm text-[#71717a]">~500 页 · 20万字</p>
              </div>
            </div>
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">💻</span>
              <div>
                <p className="text-xl font-semibold text-[#f5f5f5]">完整 GitHub 仓库</p>
                <p className="text-sm text-[#71717a]">200+ 文件 · 5万行代码</p>
              </div>
            </div>
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">📋</span>
              <div>
                <p className="text-xl font-semibold text-[#f5f5f5]">10篇学术论文</p>
                <p className="text-sm text-[#71717a]">综述 + 实验 + 附录</p>
              </div>
            </div>
          </div>
        </AnimatedText>

        <AnimatedText delay={1000}>
          <div className="flex flex-col items-center gap-3">
            <div className="text-2xl md:text-4xl lg:text-5xl">📥</div>
            <div className="text-2xl text-accent-purple font-mono">一次性喂入</div>
            <div className="text-3xl">↓</div>
          </div>
        </AnimatedText>

        {/* Output: conversation */}
        <AnimatedText delay={1500} className="flex-1">
          <div className="bg-[#141416] border-2 border-accent-purple/30 rounded-2xl p-8"
            style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.1)" }}>
            <p className="text-xl font-bold text-accent-purple mb-6">💬 直接向它提问</p>
            <div className="space-y-4">
              <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                <p className="text-sm text-accent-blue mb-1">你：</p>
                <p className="text-lg text-[#f5f5f5]">"第三章和第七章的理论有什么关联？"</p>
              </div>
              <div className="bg-accent-purple/5 rounded-xl p-4 border border-accent-purple/20">
                <p className="text-sm text-accent-purple mb-1">Kimi：</p>
                <p className="text-lg text-[#a1a1aa]">"第三章提出的X框架在第七章被扩展应用于Y场景，关键区别在于..."</p>
              </div>
              <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                <p className="text-sm text-accent-blue mb-1">你：</p>
                <p className="text-lg text-[#f5f5f5]">"帮我总结整本书的核心脉络"</p>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
