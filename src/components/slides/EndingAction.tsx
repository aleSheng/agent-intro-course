import { AnimatedText } from "@/components/shared/AnimatedText";

const items = [
  "挑一个你生活中真实的低效场景",
  "一个重复性的任务 / 一个你一直想做的小工具 / 一个专业领域的痛点",
  "打开今天提到的任意一个工具",
  "试着让 AI 帮你解决它",
];

export function EndingAction() {
  return (
    <div className="slide module-ending bg-[#0a0a0b] flex items-center justify-center">
      <div className="max-w-[1200px] w-full">
        <AnimatedText delay={300}>
          <p className="text-xl md:text-2xl lg:text-4xl text-[#a1a1aa] mb-8 text-center">
            一个建议——
          </p>
          <p className="text-3xl text-[#f5f5f5] font-bold mb-6 lg:mb-12 text-center">
            今天回去，试一试：
          </p>
        </AnimatedText>

        <div className="space-y-5">
          {items.map((item, i) => (
            <AnimatedText key={i} delay={800 + i * 400}>
              <div className="flex items-center gap-3 lg:gap-5 bg-[#141416] border border-[#27272a] rounded-xl px-4 md:px-6 lg:px-8 py-3 md:py-5">
                <div className="w-8 h-8 rounded-lg border-2 border-accent-cyan flex items-center justify-center shrink-0">
                  <span className="text-sm font-mono text-accent-cyan">{i + 1}</span>
                </div>
                <p className="text-xl text-[#a1a1aa]">{item}</p>
              </div>
            </AnimatedText>
          ))}
        </div>

        <AnimatedText delay={2800}>
          <p className="text-xl text-accent-cyan text-center mt-10 font-semibold">
            第一次可能很粗糙，但试过之后你就不一样了。
          </p>
        </AnimatedText>
      </div>
    </div>
  );
}
