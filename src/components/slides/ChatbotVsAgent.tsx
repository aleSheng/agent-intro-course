import { AnimatedText } from "@/components/shared/AnimatedText";
import { TerminalWindow } from "@/components/shared/TerminalWindow";

export function ChatbotVsAgent() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-8 lg:mb-16 self-start">
          <span className="text-accent-blue">ChatBot</span> vs{" "}
          <span className="text-accent-purple">Agent</span>
        </h2>
      </AnimatedText>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full">
        {/* ChatBot side */}
        <AnimatedText delay={400} className="flex-1">
          <div className="bg-[#141416] border border-[#27272a] rounded-2xl p-10 h-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💬</span>
              <h3 className="text-3xl font-bold text-[#a1a1aa]">ChatBot</h3>
            </div>
            <div className="space-y-6 text-xl text-[#a1a1aa]">
              <div className="flex gap-3">
                <span className="text-accent-blue">→</span>
                <span>你问一句，它答一句</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-blue">→</span>
                <span>活在一个<strong className="text-[#f5f5f5]">文本框</strong>里</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-blue">→</span>
                <span>只有"嘴巴"，没有"手"</span>
              </div>
            </div>
            <div className="mt-8 bg-[#0a0a0b] rounded-xl p-6 border border-[#27272a]">
              <p className="text-[#71717a] text-lg italic">"帮我写一个贪吃蛇游戏"</p>
              <p className="text-[#a1a1aa] text-lg mt-3">→ 给你一段代码文本，复制粘贴自己跑</p>
            </div>
          </div>
        </AnimatedText>

        {/* Agent side */}
        <AnimatedText delay={800} className="flex-1">
          <div className="bg-[#141416] border-2 border-accent-purple/30 rounded-2xl p-10 h-full glow" style={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.15)" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🤖</span>
              <h3 className="text-3xl font-bold text-accent-purple">Agent</h3>
            </div>
            <div className="space-y-6 text-xl text-[#a1a1aa]">
              <div className="flex gap-3">
                <span className="text-accent-purple">→</span>
                <span>你给<strong className="text-[#f5f5f5]">目标</strong>，它自己干到完</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-purple">→</span>
                <span>活在你的<strong className="text-[#f5f5f5]">整台电脑</strong>里</span>
              </div>
              <div className="flex gap-3">
                <span className="text-accent-purple">→</span>
                <span>有"嘴巴"，也有"手"</span>
              </div>
            </div>
            <TerminalWindow title="Agent Working...">
              <div className="text-sm space-y-1">
                <p><span className="text-accent-green">✓</span> 创建项目目录</p>
                <p><span className="text-accent-green">✓</span> 编写 HTML/CSS/JS</p>
                <p><span className="text-accent-green">✓</span> 自动运行浏览器测试</p>
                <p><span className="text-accent-amber">⟳</span> 发现bug → 修复中...</p>
              </div>
            </TerminalWindow>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
