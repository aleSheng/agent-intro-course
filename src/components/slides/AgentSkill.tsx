import { AnimatedText } from "@/components/shared/AnimatedText";

export function AgentSkill() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-3 self-start">
          Agent Skill：给 AI 装上"技能包"
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-10 self-start">
          一个文件夹 = 一项新能力，Agent 按需加载、跨平台通用
        </p>
      </AnimatedText>

      {/* Skill是什么 */}
      <AnimatedText delay={500}>
        <div className="bg-[#141416] border border-accent-blue/20 rounded-2xl p-4 md:p-6 lg:p-7 mb-8 w-full">
          <div className="flex items-start gap-3 lg:gap-5">
            <span className="text-xl md:text-2xl lg:text-4xl shrink-0">📦</span>
            <div>
              <p className="text-2xl font-bold text-[#f5f5f5] mb-2">Skill = 指令 + 脚本 + 资源</p>
              <p className="text-lg text-[#a1a1aa]">
                一个包含 <span className="font-mono text-accent-blue">SKILL.md</span> 的文件夹，Agent 自动发现、按需加载，在特定任务上表现更好。
                <span className="text-[#71717a] ml-2">Anthropic 2025.10 首发 → 2025.12 开放标准 → 20+ 平台采用</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedText>

      {/* MCP vs Skill 对比 */}
      <AnimatedText delay={1000}>
        <div className="flex flex-col md:flex-row gap-3 lg:gap-6 w-full mb-8">
          <div className="flex-1 bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#27272a] flex items-center justify-center text-xl">⚡</div>
              <h3 className="text-2xl font-bold text-[#f5f5f5]">MCP</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent-blue shrink-0 text-lg">功能</span>
                <span className="text-lg text-[#a1a1aa]">给模型<strong className="text-[#f5f5f5]">提供数据</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-blue shrink-0 text-lg">举例</span>
                <span className="text-lg text-[#a1a1aa]">查询内部文档、读取数据库记录</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-blue shrink-0 text-lg">本质</span>
                <span className="text-lg text-[#f5f5f5] font-mono">程序</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-blue shrink-0 text-lg">类比</span>
                <span className="text-lg text-[#a1a1aa]">给厨师<strong className="text-[#f5f5f5]">送食材</strong></span>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#141416] border-2 border-accent-green/30 rounded-2xl p-4 md:p-6 lg:p-7" style={{ boxShadow: "0 0 30px rgba(34, 197, 94, 0.08)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center text-xl">📖</div>
              <h3 className="text-2xl font-bold text-accent-green">Agent Skill</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent-green shrink-0 text-lg">功能</span>
                <span className="text-lg text-[#a1a1aa]">教模型<strong className="text-[#f5f5f5]">如何处理任务</strong></span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-green shrink-0 text-lg">举例</span>
                <span className="text-lg text-[#a1a1aa]">代码审查清单、结构化写作流程</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-green shrink-0 text-lg">本质</span>
                <span className="text-lg text-[#f5f5f5] font-mono">文件</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent-green shrink-0 text-lg">类比</span>
                <span className="text-lg text-[#a1a1aa]">给厨师<strong className="text-[#f5f5f5]">一本菜谱</strong></span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedText>

      <AnimatedText delay={1600}>
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
          <p className="text-xl text-[#f5f5f5] font-semibold shrink-0">
            MCP 负责"拿到什么"，Skill 负责"怎么用" —— <span className="text-accent-green">互补关系</span>
          </p>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />
        </div>
      </AnimatedText>
    </div>
  );
}
