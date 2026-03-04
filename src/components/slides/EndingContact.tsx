import { AnimatedText } from "@/components/shared/AnimatedText";

export function EndingContact() {
  return (
    <div className="slide module-ending bg-[#0a0a0b] flex items-center justify-center">
      <div className="text-center flex flex-col items-center gap-10">
        <AnimatedText delay={300}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#f5f5f5]">保持联系</h2>
        </AnimatedText>

        <AnimatedText delay={600}>
          <p className="text-2xl text-[#a1a1aa]">
            关注公众号，获取课程资料与 AI 前沿动态
          </p>
        </AnimatedText>

        <AnimatedText delay={900}>
          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg shadow-accent-cyan/10">
            <img
              src={`${import.meta.env.BASE_URL}pics/mpwechatqrcode.jpg`}
              alt="微信公众号二维码"
              className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] object-contain"
            />
          </div>
        </AnimatedText>

        <AnimatedText delay={1200}>
          <p className="text-xl text-[#71717a]">微信扫一扫 · 关注公众号</p>
        </AnimatedText>
      </div>
    </div>
  );
}
