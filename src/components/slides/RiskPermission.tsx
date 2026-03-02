import { AnimatedText } from "@/components/shared/AnimatedText";
import { TerminalWindow } from "@/components/shared/TerminalWindow";

export function RiskPermission() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-accent-red mb-4 self-start">
          翻车 ②：权限风险
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          终端 Agent 有读写文件、执行命令的权限
        </p>
      </AnimatedText>

      <div className="w-full max-w-[1200px] mx-auto">
        <AnimatedText delay={500}>
          <div className="mb-8 bg-[#141416] border border-[#27272a] rounded-xl p-6">
            <p className="text-xl text-[#f5f5f5]">
              <span className="text-accent-blue">你：</span> "清理一下不需要的文件"
            </p>
          </div>
        </AnimatedText>

        <AnimatedText delay={1000}>
          <TerminalWindow title="Agent 执行中...">
            <div className="space-y-2 text-base">
              <p><span className="text-accent-green">$</span> find . -name "*.bak" -delete</p>
              <p className="text-[#71717a]">→ 删除了 3 个备份文件</p>
              <p><span className="text-accent-green">$</span> find . -name "*.tmp" -delete</p>
              <p className="text-[#71717a]">→ 删除了 5 个临时文件</p>
              <p><span className="text-accent-green">$</span> rm -rf ~/Documents/old_projects/</p>
              <p className="text-accent-red font-bold">→ 💀 删除了你的毕业论文所在文件夹</p>
              <p><span className="text-accent-green">$</span> rm -rf ~/Desktop/untitled/</p>
              <p className="text-accent-red font-bold">→ 💀 删除了你未保存的设计稿</p>
            </div>
          </TerminalWindow>
        </AnimatedText>

        <AnimatedText delay={2000}>
          <div className="mt-8 bg-accent-red/10 border border-accent-red/30 rounded-xl p-6 text-center">
            <p className="text-2xl text-accent-red font-bold">
              ⚠️ 一个模糊的指令 = 不可逆的灾难
            </p>
            <p className="text-lg text-[#a1a1aa] mt-2">
              Agent 不理解"不需要"对你意味着什么
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
