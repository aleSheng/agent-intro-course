import { AnimatedText } from "@/components/shared/AnimatedText";

export function ToolsCover() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-green/10 border border-accent-green/30 mb-8">
            <span className="text-lg font-mono text-accent-green">模块三</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-7xl font-bold text-[#f5f5f5] mb-6">
            工具全景图
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa]">
            知道有什么，才知道<span className="text-accent-green font-semibold">能做什么</span>
          </p>
        </AnimatedText>
        <AnimatedText delay={1400}>
          <div className="mt-12 flex justify-center gap-8">
            {["⌨️ 终端Agent", "🖥️ AI IDE", "🧩 无代码", "📚 知识平台"].map((label, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-[#141416] border border-[#27272a] rounded-xl text-xl text-[#a1a1aa] animate-fade-in-up"
                style={{ animationDelay: `${1600 + i * 200}ms` }}
              >
                {label}
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
