import { AnimatedText } from "@/components/shared/AnimatedText";

export function AIRivalry() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-2 self-start">
          一场理念分裂
        </h2>
        <p className="text-lg md:text-xl text-[#a1a1aa] mb-6 lg:mb-8 self-start">
          OpenAI vs Anthropic：速度与安全的路线之争
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full">
        {/* OpenAI side */}
        <AnimatedText delay={400} className="flex-1">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-7 h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">⚡</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#f5f5f5]">OpenAI</h3>
              <span className="text-sm text-[#71717a] bg-[#27272a] rounded-full px-3 py-0.5">快速迭代派</span>
            </div>
            <div className="space-y-3 text-base lg:text-lg text-[#a1a1aa]">
              <div className="flex gap-2">
                <span className="text-accent-amber shrink-0">→</span>
                <span>估值 <strong className="text-[#f5f5f5]">$8400 亿</strong>，史上最大私募 $1100 亿</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-amber shrink-0">→</span>
                <span>2023.11 Sam Altman <strong className="text-[#f5f5f5]">被董事会开除</strong>，5 天后回归——770 人中 700+ 联名威胁离职</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-amber shrink-0">→</span>
                <span>2024 安全团队 <strong className="text-accent-red">25+ 高管出走</strong>：联合创始人 Ilya、CTO Mira、超对齐负责人 Jan Leike...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-amber shrink-0">→</span>
                <span>预计 2026 亏损 $140 亿，2030 年才盈利</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-amber shrink-0">→</span>
                <span>Musk 索赔 <strong className="text-[#f5f5f5]">$1345 亿</strong>诉讼 2026 年初开庭</span>
              </div>
            </div>
          </div>
        </AnimatedText>

        {/* Anthropic side */}
        <AnimatedText delay={700} className="flex-1">
          <div className="bg-[#141416] border-2 border-accent-green/30 rounded-2xl p-4 md:p-6 lg:p-7 h-full" style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.1)" }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🛡️</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-accent-green">Anthropic</h3>
              <span className="text-sm text-[#71717a] bg-[#27272a] rounded-full px-3 py-0.5">安全优先派</span>
            </div>
            <div className="space-y-3 text-base lg:text-lg text-[#a1a1aa]">
              <div className="flex gap-2">
                <span className="text-accent-green shrink-0">→</span>
                <span>估值 <strong className="text-[#f5f5f5]">$3500 亿</strong>，收入增速 10x/年</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-green shrink-0">→</span>
                <span>2021 Dario Amodei 从 OpenAI <strong className="text-[#f5f5f5]">带队出走</strong>——因 GPT-3 商业化节奏与安全标准的根本分歧</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-green shrink-0">→</span>
                <span>提出 <strong className="text-accent-green">Constitutional AI</strong>，安全理念写进模型基因</span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-green shrink-0">→</span>
                <span>企业市场份额 1 年内 <strong className="text-[#f5f5f5]">10% → 65%</strong></span>
              </div>
              <div className="flex gap-2">
                <span className="text-accent-green shrink-0">→</span>
                <span>OpenAI 出走的 Ilya、Leike、Schulman 等核心人才加入</span>
              </div>
            </div>
          </div>
        </AnimatedText>
      </div>

      {/* Bottom: proxy war */}
      <AnimatedText delay={1100}>
        <div className="w-full bg-[#141416] border border-[#27272a] rounded-xl px-4 lg:px-6 py-3 mt-4 lg:mt-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm lg:text-base text-[#71717a]">
            <span className="text-[#a1a1aa] font-semibold">大厂代理人战争：</span>
            <span>Microsoft → 投 <strong className="text-[#f5f5f5]">两家</strong></span>
            <span>Amazon → 投 <strong className="text-[#f5f5f5]">两家</strong></span>
            <span>Nvidia → 投 <strong className="text-[#f5f5f5]">两家</strong></span>
            <span className="text-accent-amber">Bloomberg: "他们一直在互相付钱"</span>
          </div>
        </div>
      </AnimatedText>
    </div>
  );
}
