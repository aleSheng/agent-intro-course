import { AnimatedText } from "@/components/shared/AnimatedText";

const loopSteps = [
  { icon: "✏️", label: "写代码", color: "#3b82f6" },
  { icon: "▶️", label: "跑测试", color: "#22c55e" },
  { icon: "❌", label: "看报错", color: "#ef4444" },
  { icon: "🔧", label: "改代码", color: "#f59e0b" },
  { icon: "✅", label: "再测试", color: "#22c55e" },
];

export function Case1Loop() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] px-20">
      <AnimatedText delay={200}>
        <h2 className="text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          Agentic Loop
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-12 self-start">
          Agent 最核心的能力模式：写-测-错-改-再测 循环
        </p>
      </AnimatedText>

      <div className="flex items-center justify-center w-full">
        <div className="relative">
          {/* Circle of steps */}
          <div className="w-[600px] h-[600px] relative">
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl font-bold text-accent-purple">Agentic</p>
                <p className="text-3xl font-bold text-accent-purple">Loop</p>
                <p className="text-lg text-[#71717a] mt-2">自主循环</p>
              </div>
            </div>

            {/* SVG circle */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600">
              <circle
                cx="300"
                cy="300"
                r="240"
                fill="none"
                stroke="#27272a"
                strokeWidth="2"
                strokeDasharray="8 8"
              />
              {/* Animated arrow */}
              <circle
                cx="300"
                cy="60"
                r="6"
                fill="#a855f7"
                className="origin-center"
                style={{
                  animation: "orbit 4s linear infinite",
                  transformOrigin: "300px 300px",
                }}
              />
            </svg>

            {/* Step nodes */}
            {loopSteps.map((step, i) => {
              const angle = (i * 360) / loopSteps.length - 90;
              const rad = (angle * Math.PI) / 180;
              const x = 300 + 240 * Math.cos(rad);
              const y = 300 + 240 * Math.sin(rad);
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center gap-2 animate-fade-in-up"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${500 + i * 300}ms`,
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}` }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-lg font-semibold text-[#f5f5f5] whitespace-nowrap">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <AnimatedText delay={2000} className="ml-20 max-w-[500px]">
          <div className="space-y-6">
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6">
              <p className="text-xl text-[#f5f5f5] font-semibold mb-2">🔑 关键特征</p>
              <p className="text-lg text-[#a1a1aa]">Agent 不怕出错——它会自己发现错误、阅读错误日志、生成修复方案、重新测试</p>
            </div>
            <div className="bg-[#141416] border border-[#27272a] rounded-xl p-6">
              <p className="text-xl text-[#f5f5f5] font-semibold mb-2">⚡ 效率提升</p>
              <p className="text-lg text-[#a1a1aa]">一个循环可能在几秒内完成，而人类开发者可能需要几十分钟</p>
            </div>
          </div>
        </AnimatedText>
      </div>

    </div>
  );
}
