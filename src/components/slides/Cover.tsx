import { AnimatedText, TypewriterText } from "@/components/shared/AnimatedText";
import { useMemo } from "react";

export function Cover() {
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${3 + Math.random() * 4}px`,
      color: ["#3b82f6", "#a855f7", "#22c55e", "#06b6d4"][i % 4],
    }));
  }, []);

  return (
    <div className="slide module-cover bg-[#0a0a0b] relative">
      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-8">
        <AnimatedText delay={200}>
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#141416] border border-[#27272a] mb-4">
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="text-lg text-[#a1a1aa]">2026 通识课</span>
          </div>
        </AnimatedText>

        <AnimatedText delay={500}>
          <h1 className="text-7xl font-bold text-[#f5f5f5] leading-tight tracking-tight max-w-[1400px]">
            当"不会写代码的人"
            <br />
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
              开始造软件
            </span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={1000}>
          <p className="text-2xl text-[#a1a1aa] max-w-[900px] leading-relaxed">
            AI 智能体前沿实录
          </p>
        </AnimatedText>

        <AnimatedText delay={1500}>
          <div className="mt-8 flex items-center gap-6 text-lg text-[#71717a]">
            <span>90-120 分钟</span>
            <span className="w-1 h-1 rounded-full bg-[#71717a]" />
            <span>全校通识</span>
            <span className="w-1 h-1 rounded-full bg-[#71717a]" />
            <span className="font-mono">
              <TypewriterText text="$ agent --start" speed={80} delay={2000} />
            </span>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
