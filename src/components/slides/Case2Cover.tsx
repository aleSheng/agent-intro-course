import { AnimatedText, TypewriterText } from "@/components/shared/AnimatedText";

export function Case2Cover() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-8">
            <span className="text-lg font-mono text-accent-purple">Vibe Coding</span>
          </div>
        </AnimatedText>
        <AnimatedText delay={500}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-[#f5f5f5] mb-6">
            Vibe Coding
          </h2>
        </AnimatedText>
        <AnimatedText delay={900}>
          <p className="text-3xl text-[#a1a1aa]">
            Live Demo：现场从零造一个产品
          </p>
        </AnimatedText>
        <AnimatedText delay={1500}>
          <div className="mt-12 bg-[#1a1a2e] rounded-2xl border border-[#2a2a3e] p-8 inline-block font-mono text-left">
            <p className="text-[#71717a] text-lg">
              <span className="text-accent-green">$</span>{" "}
              <TypewriterText text='claude "帮我做一个带计分板的网页贪吃蛇游戏"' speed={40} delay={1800} />
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
