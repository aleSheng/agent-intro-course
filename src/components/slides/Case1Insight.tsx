import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case1Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            "编程"正在被重新定义。
          </p>
        </AnimatedText>
        <AnimatedText delay={1200}>
          <p className="text-4xl text-[#a1a1aa] leading-relaxed mt-8">
            会写代码当然好，
          </p>
        </AnimatedText>
        <AnimatedText delay={2000}>
          <p className="text-4xl leading-relaxed mt-4">
            但<span className="text-accent-purple font-bold">不会写代码也不再是门槛</span>。
          </p>
        </AnimatedText>
        <AnimatedText delay={3000}>
          <div className="mt-16 inline-block px-10 py-6 bg-accent-purple/10 border border-accent-purple/30 rounded-2xl">
            <p className="text-2xl text-accent-purple font-semibold">
              新门槛：你能不能清晰地描述你要什么、判断交付物的质量
            </p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
