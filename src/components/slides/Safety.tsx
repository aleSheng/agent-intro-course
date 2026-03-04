import { AnimatedText } from "@/components/shared/AnimatedText";

const principles = [
  {
    icon: "🏖️",
    title: "沙盒隔离",
    desc: "重要操作永远在容器/虚拟环境里运行。不要在宿主机上裸跑不受信任的 Agent。",
    color: "#3b82f6",
  },
  {
    icon: "👆",
    title: "Human-in-the-Loop",
    desc: "涉及删除、支付、发布等不可逆操作，必须人工确认。Claude Code 默认就会在关键操作前暂停。",
    color: "#f59e0b",
  },
  {
    icon: "🔐",
    title: "不给敏感信息",
    desc: "不要把密钥、密码直接写进 Prompt。使用环境变量或密钥管理工具。",
    color: "#ef4444",
  },
];

export function Safety() {
  return (
    <div className="slide module-4 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          安全底线
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          三条必须记住的原则
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
        {principles.map((p, i) => (
          <AnimatedText key={i} delay={500 + i * 300}>
            <div
              className="bg-[#141416] border rounded-2xl p-4 md:p-6 lg:p-8 h-full"
              style={{ borderColor: `${p.color}30` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ backgroundColor: `${p.color}15` }}
              >
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#f5f5f5] mb-4">{p.title}</h3>
              <p className="text-lg text-[#a1a1aa] leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
