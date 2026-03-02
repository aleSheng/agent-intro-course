import { AnimatedText } from "@/components/shared/AnimatedText";

export function Case4QRCode() {
  return (
    <div className="slide module-2 bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center max-w-[1000px]">
        <AnimatedText delay={200}>
          <h2 className="text-5xl font-bold text-[#f5f5f5] mb-8">
            现场体验
          </h2>
        </AnimatedText>
        <AnimatedText delay={600}>
          <div className="bg-[#141416] border-2 border-accent-purple/30 rounded-3xl p-12 inline-block" style={{ boxShadow: "0 0 40px rgba(168, 85, 247, 0.15)" }}>
            {/* QR Code placeholder */}
            <div className="w-[360px] h-[360px] bg-white rounded-2xl mx-auto flex items-center justify-center mb-8">
              <div className="text-center">
                <p className="text-6xl mb-4">📱</p>
                <p className="text-xl text-gray-500">QR Code</p>
                <p className="text-sm text-gray-400 mt-2">课前生成并替换</p>
              </div>
            </div>
            <p className="text-2xl text-[#f5f5f5] font-semibold">扫码体验刚刚搭建的 Bot</p>
            <p className="text-lg text-[#71717a] mt-3">试试问它：帮我规划考研时间表</p>
          </div>
        </AnimatedText>
      </div>
    </div>
  );
}
