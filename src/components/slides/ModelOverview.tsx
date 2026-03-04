import { AnimatedText } from "@/components/shared/AnimatedText";
import { models } from "@/data/models";

export function ModelOverview() {
  return (
    <div className="slide module-3 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          2026 基座模型速览
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          前沿开发者会根据任务"换脑子"
        </p>
      </AnimatedText>

      <div className="w-full">
        <AnimatedText delay={400}>
          <div className="rounded-2xl overflow-hidden border border-[#27272a]">
            {/* Header - hidden on mobile */}
            <div className="hidden md:grid grid-cols-[200px_1fr_1fr] lg:grid-cols-[250px_1fr_1fr] bg-[#141416] px-4 md:px-8 py-4 md:py-5 border-b border-[#27272a]">
              <span className="text-base lg:text-lg font-semibold text-[#a1a1aa]">模型</span>
              <span className="text-base lg:text-lg font-semibold text-[#a1a1aa]">核心优势</span>
              <span className="text-base lg:text-lg font-semibold text-[#a1a1aa]">什么时候用它</span>
            </div>
            {/* Rows */}
            {models.map((m, i) => (
              <AnimatedText key={m.name} delay={600 + i * 150}>
                <div
                  className="flex flex-col md:grid md:grid-cols-[200px_1fr_1fr] lg:grid-cols-[250px_1fr_1fr] px-4 md:px-8 py-3 md:py-5 border-b border-[#27272a] last:border-b-0 hover:bg-[#141416] transition-colors gap-1 md:gap-0"
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <span
                      className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full shrink-0"
                      style={{ backgroundColor: m.color }}
                    />
                    <span className="text-base md:text-lg lg:text-xl font-bold text-[#f5f5f5]">{m.name}</span>
                  </div>
                  <span className="text-sm md:text-base lg:text-lg text-[#a1a1aa] self-center pl-5 md:pl-0">{m.strength}</span>
                  <span className="text-sm md:text-base lg:text-lg text-[#71717a] self-center pl-5 md:pl-0">{m.useCase}</span>
                </div>
              </AnimatedText>
            ))}
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
