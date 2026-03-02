import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case3Insight() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1400px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed">
            信息获取的方式正在发生根本转变：
          </p>
        </AnimatedText>
        <AnimatedText delay={1200}>
          <div className="mt-12 flex justify-center gap-12 items-center">
            <div className="text-center">
              <p className="text-3xl text-[#71717a] line-through">‍"我去读"</p>
            </div>
            <div className="text-4xl text-accent-purple">→</div>
            <div className="text-center">
              <p className="text-3xl text-accent-purple font-bold">"它来讲给我听"</p>
              <p className="text-3xl text-accent-green font-bold mt-2">"我来直接问它"</p>
            </div>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
