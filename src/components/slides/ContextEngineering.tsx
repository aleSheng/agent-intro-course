import { AnimatedText } from "@/components/shared/AnimatedText";

export function ContextEngineering() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Context Engineering
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          用精准的自然语言描述你到底要什么——这才是核心技能
        </p>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full">
        <AnimatedText delay={500} className="flex-1">
          <div className="bg-accent-red/5 border border-accent-red/20 rounded-2xl p-4 md:p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❌</span>
              <span className="text-xl font-bold text-accent-red">模糊的 Prompt</span>
            </div>
            <div className="bg-[#0a0a0b] rounded-xl p-4 md:p-6 border border-[#27272a] font-mono text-lg text-[#a1a1aa] leading-relaxed">
              "帮我做一个网站"
            </div>
            <p className="mt-4 text-base text-[#71717a]">→ Agent 不知道：什么类型？什么功能？什么风格？给谁用？</p>
          </div>
        </AnimatedText>

        <AnimatedText delay={1000} className="flex-1">
          <div className="bg-accent-green/5 border-2 border-accent-green/20 rounded-2xl p-4 md:p-6 lg:p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">✅</span>
              <span className="text-xl font-bold text-accent-green">精准的 Prompt</span>
            </div>
            <div className="bg-[#0a0a0b] rounded-xl p-4 md:p-6 border border-accent-green/20 font-mono text-base text-[#a1a1aa] leading-relaxed">
              "用 React + TailwindCSS 搭建一个个人简历网站。
              <br />深色主题，单页面，包含：
              <br />- 头像和简介区域
              <br />- 项目经历（3个卡片）
              <br />- 技能标签云
              <br />- 联系方式区域
              <br />响应式适配移动端。"
            </div>
            <p className="mt-4 text-base text-accent-green">→ Agent 拿到后可以精确执行</p>
          </div>
        </AnimatedText>
      </div>

      <AnimatedText delay={1500}>
        <div className="mt-10 flex items-center gap-3 lg:gap-6 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
          <p className="text-2xl text-[#f5f5f5] font-semibold shrink-0">
            越会描述需求的人，Agent 为你创造的价值越大
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent" />
        </div>
        <p className="text-lg text-[#71717a] mt-4 text-center w-full">
          不是"让 AI 听懂你"——而是"给 AI 足够的上下文，让它做出正确判断"
        </p>
      </AnimatedText>
    </div>
  );
}
