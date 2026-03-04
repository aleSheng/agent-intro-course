import { AnimatedText } from "@/components/shared/AnimatedText";

const categories = [
  {
    icon: "🎤",
    title: "语音生成",
    color: "#f59e0b",
    items: ["ElevenLabs", "豆包 TTS", "ChatGPT Voice"],
    desc: "文字变真人语音，可克隆音色",
  },
  {
    icon: "🖼️",
    title: "图像生成",
    color: "#a855f7",
    items: ["Midjourney", "DALL·E", "Flux"],
    desc: "一句话生成高质量图片",
  },
  {
    icon: "🎬",
    title: "视频生成",
    color: "#ef4444",
    items: ["Sora", "可灵 (Kling)", "Vidu"],
    desc: "文字/图片变视频，秒级生成",
  },
  {
    icon: "👁️",
    title: "多模态理解",
    color: "#22c55e",
    items: ["Gemini", "GPT-4o", "Claude"],
    desc: "同时理解文本 + 图片 + 音频 + 视频",
  },
];

export function ModelMultimodal() {
  return (
    <div className="slide module-1 bg-[#0a0a0b] px-4 md:px-12 lg:px-20">
      <AnimatedText delay={200}>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5] mb-4 self-start">
          AI 不只会写字
        </h2>
        <p className="text-xl text-[#a1a1aa] mb-6 lg:mb-12 self-start">
          语音、图像、视频、多模态——能力正在全面展开
        </p>
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 w-full">
        {categories.map((cat, i) => (
          <AnimatedText key={cat.title} delay={500 + i * 200}>
            <div
              className="bg-[#141416] border rounded-2xl p-4 md:p-6 lg:p-8 h-full"
              style={{ borderColor: `${cat.color}33` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xl md:text-2xl lg:text-4xl">{cat.icon}</span>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: cat.color }}
                >
                  {cat.title}
                </h3>
              </div>
              <p className="text-lg text-[#a1a1aa] mb-4">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg text-base font-mono text-[#f5f5f5]"
                    style={{ backgroundColor: `${cat.color}1a`, border: `1px solid ${cat.color}33` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedText>
        ))}
      </div>
    </div>
  );
}
