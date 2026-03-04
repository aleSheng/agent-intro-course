# Plan: 用 Remotion + Edge TTS 制作 60-90 分钟讲课视频

## Context

41 张幻灯片的 AI Agent 通识课需要转化为一个 60-90 分钟的完整讲课视频。现有 speaker notes 较简短（直接 TTS 约 20 分钟），需要扩写为完整讲稿。使用 Edge TTS（免费、中文男声 `zh-CN-YunxiNeural`）生成音频，Remotion 将现有 React 幻灯片组件合成为视频。

**核心思路：** 通过 Remotion webpack alias 把 `AnimatedText` 替换为帧同步版本，现有 41 个幻灯片组件**零修改**直接复用。

**关键约束（Remotion 最佳实践）：**
- **CSS animations 禁止使用** — 所有动画必须用 `useCurrentFrame()` + `interpolate()` / `spring()` 驱动
- Tailwind 的 `transition-*` 和 `animate-*` class 禁止使用
- 音频用 `<Audio>` from `@remotion/media` + `staticFile()`
- 音频文件放 `public/audio/` 目录

## Phase 1: 讲稿扩写 + 音频生成

### 1.1 创建完整讲稿

**文件:** `scripts/narration/scripts.json`

```json
[
  {
    "slideId": "cover",
    "slideIndex": 0,
    "text": "完整的讲稿文本...",
    "estimatedSeconds": 90
  }
]
```

- 基于 `src/data/slides.ts` 中的 speaker notes 扩写
- 每张幻灯片 60-180 秒讲稿，总计约 70-80 分钟
- 口语化风格，适合大学通识课场景

### 1.2 Edge TTS 音频生成

**文件:** `scripts/generate-audio.py`

```python
# 依赖: pip install edge-tts
# 用法: python scripts/generate-audio.py
# 输入: scripts/narration/scripts.json
# 输出: public/audio/slide-00.mp3 ... slide-40.mp3
# 同时输出 public/audio/durations.json 记录每段精确时长（秒）
```

- 声音: `zh-CN-YunxiNeural`（年轻男声，适合技术讲解）
- 语速: `+0%`（默认，清晰）
- **输出到 `public/audio/`**（Remotion 的 `staticFile()` 从 public/ 目录读取）

## Phase 2: Remotion 项目搭建

### 2.1 修复 & 添加依赖

**文件:** `package.json`

```bash
# 移除版本不匹配的包
npm remove @remotion/core

# 统一安装 remotion 生态
npm install remotion@latest @remotion/cli@latest @remotion/bundler@latest \
  @remotion/renderer@latest @remotion/media@latest @remotion/transitions@latest \
  @remotion/player@latest mediabunny
```

- `@remotion/media` — `<Audio>` 组件
- `@remotion/transitions` — 幻灯片之间的 `fade()` 过渡
- `mediabunny` — 在 `calculateMetadata` 中获取音频时长

> TailwindCSS v4 集成：需要在 webpack override 中配置，参考 remotion.dev/docs/tailwind

### 2.2 Remotion 入口文件

| 文件 | 用途 |
|------|------|
| `remotion/index.ts` | `registerRoot(RemotionRoot)` |
| `remotion/Root.tsx` | `<Composition>` + `calculateMetadata`（从 durations.json 动态计算总时长） |
| `remotion/LectureVideo.tsx` | 主合成：`<TransitionSeries>` 串联 41 张幻灯片 + 音频 |
| `remotion/config.ts` | 常量：fps=30, width=1920, height=1080 |
| `remotion/webpack-override.ts` | webpack alias + TailwindCSS v4 |
| `remotion/overrides/AnimatedText.tsx` | 帧同步版（`useCurrentFrame` + `spring`） |

### 2.3 webpack alias 关键设计

**文件:** `remotion/webpack-override.ts`

```ts
import { enableTailwind } from "@remotion/tailwind";

export const webpackOverride = (config) => {
  // 1. AnimatedText alias — 幻灯片组件零修改
  config.resolve.alias["@/components/shared/AnimatedText"] =
    path.resolve(__dirname, "overrides/AnimatedText.tsx");

  // 2. TailwindCSS v4 支持
  return enableTailwind(config);
};
```

### 2.4 帧同步 AnimatedText（`spring` + `interpolate`）

**文件:** `remotion/overrides/AnimatedText.tsx`

```tsx
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

export function AnimatedText({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delayFrames = Math.round((delay / 1000) * fps);

  const progress = spring({
    frame: frame - delayFrames,
    fps,
    config: { damping: 200 },
  });

  const opacity = interpolate(progress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  const translateY = interpolate(progress, [0, 1], [30, 0], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });

  return (
    <div className={className} style={{ opacity, transform: `translateY(${translateY}px)` }}>
      {children}
    </div>
  );
}

export function TypewriterText({ text, speed = 50, delay = 0, className = "" }: {
  text: string; speed?: number; delay?: number; className?: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const startFrame = Math.round((delay / 1000) * fps);
  const elapsed = Math.max(0, frame - startFrame);
  const msPerChar = 1000 / speed;
  const framesPerChar = (msPerChar / 1000) * fps;
  const charsToShow = Math.min(Math.floor(elapsed / framesPerChar), text.length);

  return <span className={className}>{text.slice(0, charsToShow)}</span>;
}
```

### 2.5 主合成组件（`TransitionSeries` + `Audio`）

**文件:** `remotion/LectureVideo.tsx`

```tsx
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Audio } from "@remotion/media";
import { staticFile, useVideoConfig, Sequence } from "remotion";

const TRANSITION_FRAMES = 15; // 0.5s fade at 30fps

export const LectureVideo = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <TransitionSeries>
        {slides.map((SlideComponent, i) => {
          const durationInFrames = Math.ceil(durations[i] * fps) + fps;
          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <TransitionSeries.Transition
                  presentation={fade()}
                  timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
                />
              )}
              <TransitionSeries.Sequence durationInFrames={durationInFrames}>
                <SlideComponent />
              </TransitionSeries.Sequence>
            </React.Fragment>
          );
        })}
      </TransitionSeries>

      {/* Audio tracks */}
      {durations.map((dur, i) => {
        const startFrame = /* cumulative frame offset */;
        return (
          <Sequence key={`audio-${i}`} from={startFrame} layout="none">
            <Audio src={staticFile(`audio/slide-${String(i).padStart(2, "0")}.mp3`)} />
          </Sequence>
        );
      })}
    </>
  );
};
```

### 2.6 动态时长计算

**文件:** `remotion/Root.tsx`

- 读取 `durations.json` 计算总帧数
- 每张幻灯片 +1s buffer
- 减去 fade transition overlap

## Phase 3: CSS 动画处理

| 动画 | 使用场景 | 处理方式 |
|------|---------|---------|
| `fadeInUp` | AnimatedText 组件 | webpack alias 替换为帧同步版 |
| `orbit` | 装饰性旋转 | 忽略（静态渲染自然降级） |
| `float` | 装饰性浮动 | 忽略 |
| `spin` | 加载指示器 | 忽略 |
| `blink` | 光标闪烁 | 忽略 |
| `hover:` | 交互效果 | Remotion 无鼠标，自动忽略 |

## Phase 4: 测试与渲染

```bash
npx remotion studio remotion/index.ts     # Studio 预览
npx remotion render remotion/index.ts LectureVideo out/lecture.mp4 \
  --codec h264 --image-format jpeg --quality 80   # 渲染
```

## Phase 5: package.json 脚本

```json
{
  "scripts": {
    "video:studio": "remotion studio remotion/index.ts",
    "video:render": "remotion render remotion/index.ts LectureVideo out/lecture.mp4",
    "audio:generate": "python scripts/generate-audio.py"
  }
}
```

## 新增文件清单

```
remotion/
  index.ts
  Root.tsx
  LectureVideo.tsx
  config.ts
  webpack-override.ts
  overrides/
    AnimatedText.tsx
scripts/
  narration/
    scripts.json
  generate-audio.py
public/audio/          # 生成的 .mp3 + durations.json
out/                   # 渲染输出（.gitignore）
docs/
  VIDEO_PLAN.md        # 本文件
```
