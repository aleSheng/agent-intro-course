import { AnimatedText } from "@/components/shared/AnimatedText";
import { models } from "@/data/models";

export function ModelPhilosophy() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1500px]">
        <AnimatedText delay={300}>
          <p className="text-5xl font-bold text-[#f5f5f5] leading-relaxed mb-16">
            选模型就像<span className="text-accent-blue">选员工</span>：
            <br />
            不是选"最聪明的"，而是选
            <span className="text-accent-green">"最适合这个岗位的"</span>。
          </p>
        </AnimatedText>

        <AnimatedText delay={1200}>
          <div className="flex justify-center gap-8 mt-4">
            {models.map((m, i) => (
              <div
                key={m.name}
                className="animate-fade-in-up flex flex-col items-center gap-4 w-48"
                style={{ animationDelay: `${1400 + i * 200}ms` }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold text-white"
                  style={{ backgroundColor: m.color }}
                >
                  {m.name.charAt(0)}
                </div>
                <p className="text-lg font-semibold text-[#f5f5f5]">{m.name.split(" ")[0]}</p>
                <p className="text-sm text-[#71717a] leading-relaxed">{m.strength.split("+")[0].trim()}</p>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
