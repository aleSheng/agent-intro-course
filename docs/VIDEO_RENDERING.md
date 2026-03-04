# 用 Remotion 创建讲演视频

本项目使用 [Remotion](https://remotion.dev/) 将 41 张 React 幻灯片组件直接合成为带 TTS 旁白的讲课视频，**无需修改任何幻灯片源码**。

## 目录

- [整体架构](#整体架构)
- [快速开始](#快速开始)
- [工作流程](#工作流程)
  - [1. 编写讲稿](#1-编写讲稿)
  - [2. 生成音频](#2-生成音频)
  - [3. 预览视频](#3-预览视频)
  - [4. 渲染输出](#4-渲染输出)
- [项目结构](#项目结构)
- [核心设计](#核心设计)
  - [零修改复用幻灯片](#零修改复用幻灯片)
  - [Webpack 模块替换](#webpack-模块替换)
  - [帧同步动画](#帧同步动画)
  - [CSS 动画修复](#css-动画修复)
  - [音视频同步](#音视频同步)
  - [动态时长计算](#动态时长计算)
- [关键文件说明](#关键文件说明)
- [配置参数](#配置参数)
- [常见问题](#常见问题)

---

## 整体架构

```
讲稿 JSON                     41 个 React 幻灯片组件（零修改）
    │                                    │
    ▼                                    ▼
Edge TTS 生成音频             Remotion Webpack 构建
    │                          ├─ NormalModuleReplacementPlugin
    ▼                          │   替换 AnimatedText → 帧同步版本
public/audio/                  │   替换 EndingQuote  → 帧同步版本
  ├─ slide-00.mp3             ├─ enableTailwind (v4)
  ├─ slide-01.mp3             └─ remotion-fixes.css 覆盖 CSS 动画
  ├─ ...slide-40.mp3               │
  └─ durations.json ──────────────►│
                                    ▼
                            LectureVideo 组件
                             ├─ TransitionSeries（幻灯片 + fade 过渡）
                             └─ Audio Sequences（逐张同步音频）
                                    │
                                    ▼
                            out/lecture.mp4
                            1920×1080, 30fps, H.264
```

## 快速开始

```bash
# 1. 安装项目依赖
npm install

# 2. 安装 Python TTS 依赖
pip install edge-tts mutagen

# 3. 生成 TTS 音频（约 2 分钟）
npm run audio:generate

# 4. 在 Remotion Studio 中预览
npm run video:studio

# 5. 渲染完整视频（约 3-4 小时）
npm run video:render
```

输出文件：`out/lecture.mp4`

## 工作流程

### 1. 编写讲稿

讲稿存储在 `scripts/narration/scripts.json`，是一个包含 41 个条目的 JSON 数组：

```json
[
  {
    "slideId": "cover",
    "slideIndex": 0,
    "text": "大家好，欢迎来到这堂通识课……",
    "estimatedSeconds": 85
  },
  {
    "slideId": "icebreaker",
    "slideIndex": 1,
    "text": "在座的各位同学……",
    "estimatedSeconds": 90
  }
]
```

| 字段 | 说明 |
|------|------|
| `slideId` | 幻灯片标识，对应 `src/data/slides.ts` 中的 id |
| `slideIndex` | 幻灯片序号（0-40） |
| `text` | 完整旁白文本，直接传给 TTS 引擎 |
| `estimatedSeconds` | 预估时长（仅参考，实际由 TTS 生成后测量） |

### 2. 生成音频

```bash
python scripts/generate-audio.py
# 或
npm run audio:generate
```

脚本使用 Microsoft Edge TTS（免费、无需 API Key）：

| 配置 | 值 | 说明 |
|------|----|------|
| 声音 | `zh-CN-YunxiNeural` | 年轻男声，适合技术讲解 |
| 语速 | `+0%` | 默认正常语速 |

**输出：**
- `public/audio/slide-00.mp3` ~ `slide-40.mp3` — 逐张音频
- `public/audio/durations.json` — 精确时长数组（秒），例如 `[55.39, 58.32, ...]`

> 这些文件已在 `.gitignore` 中排除，需要本地重新生成。

### 3. 预览视频

```bash
npm run video:studio
```

打开 Remotion Studio（默认 `http://localhost:3000`），可以：
- 拖动时间轴逐帧检查任意幻灯片
- 验证文字动画的帧同步效果
- 检查音频与幻灯片切换的时机
- 确认 fade 过渡是否平滑

### 4. 渲染输出

```bash
npm run video:render
```

等价于：

```bash
remotion render remotion/index.ts LectureVideo out/lecture.mp4 --codec h264
```

渲染参数：
- 分辨率：1920×1080
- 帧率：30fps
- 编码：H.264
- 并发：默认 50% CPU 核心

如需自定义渲染参数：

```bash
# 渲染指定帧范围（测试用）
npx remotion render remotion/index.ts LectureVideo out/test.mp4 \
  --codec h264 --frames=0-900

# 渲染单帧截图
npx remotion still remotion/index.ts LectureVideo \
  --frame=90 --output=out/preview.png

# 提高渲染并发
npx remotion render remotion/index.ts LectureVideo out/lecture.mp4 \
  --codec h264 --concurrency=75%
```

## 项目结构

```
remotion/
  index.ts                     # 入口：registerRoot(RemotionRoot)
  Root.tsx                     # Composition 定义 + calculateMetadata（动态时长）
  LectureVideo.tsx             # 主合成：TransitionSeries + Audio
  config.ts                    # 常量：fps, 分辨率, 过渡帧数
  overrides/
    AnimatedText.tsx           # 帧同步版 AnimatedText + TypewriterText
    EndingQuote.tsx            # 帧同步版 EndingQuote 幻灯片
    remotion-fixes.css         # CSS 动画禁用 + 布局修复

remotion.config.ts             # Webpack 配置：模块替换 + TailwindCSS v4

scripts/
  narration/
    scripts.json               # 41 条讲稿
  generate-audio.py            # Edge TTS 批量生成

public/audio/                  # 生成的 .mp3 + durations.json（gitignore）
out/                           # 渲染输出（gitignore）
```

## 核心设计

### 零修改复用幻灯片

本项目的核心挑战：**41 个 `src/components/slides/` 中的幻灯片组件是为 Vite + 浏览器环境编写的**，使用了 CSS 动画（`@keyframes`）、`useEffect` + `setTimeout` 等浏览器 API。而 Remotion 在 headless Chrome 中逐帧渲染，这些机制不可靠。

解决方案：**通过 Webpack 模块替换，在构建时将不兼容组件替换为帧同步版本，幻灯片源码无需任何改动。**

### Webpack 模块替换

`remotion.config.ts` 中使用 `NormalModuleReplacementPlugin`（而非 `resolve.alias`）：

```ts
// remotion.config.ts
import webpack from "webpack";

Config.overrideWebpackConfig((currentConfiguration) => {
  const config = {
    ...currentConfiguration,
    resolve: {
      ...currentConfiguration.resolve,
      alias: {
        ...(currentConfiguration.resolve?.alias ?? {}),
        "@": path.resolve(projectRoot, "src"),
      },
    },
    plugins: [
      ...(currentConfiguration.plugins ?? []),
      // 替换 AnimatedText → 帧同步版本
      new webpack.NormalModuleReplacementPlugin(
        /components\/shared\/AnimatedText/,
        path.resolve(projectRoot, "remotion", "overrides", "AnimatedText.tsx")
      ),
      // 替换 EndingQuote → 帧同步版本
      new webpack.NormalModuleReplacementPlugin(
        /components\/slides\/EndingQuote/,
        path.resolve(projectRoot, "remotion", "overrides", "EndingQuote.tsx")
      ),
    ],
  };
  return enableTailwind(config);
});
```

**为什么用 `NormalModuleReplacementPlugin` 而非 `resolve.alias`？**

`resolve.alias` 中通用的 `"@": "src/"` 别名会优先匹配 `@/components/shared/AnimatedText`，导致更具体的别名失效。`NormalModuleReplacementPlugin` 通过正则在模块解析阶段拦截，不受别名优先级影响。

### 帧同步动画

原版 `AnimatedText` 使用 `useState(false)` + `useEffect(() => setTimeout(...))` 控制显隐。在 Remotion 中，每帧独立渲染，`setTimeout` 永远不会触发，所有文字永远停在 `opacity: 0`。

帧同步版本使用 Remotion 的 `spring()` + `interpolate()`：

```tsx
// remotion/overrides/AnimatedText.tsx
export function AnimatedText({ children, delay = 0 }) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const delayFrames = Math.round((delay / 1000) * fps);

  const progress = spring({
    frame: frame - delayFrames,
    fps,
    config: { damping: 200 },  // 平滑无弹跳
  });

  const opacity = interpolate(progress, [0, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const translateY = interpolate(progress, [0, 1], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, transform: `translateY(${translateY}px)` }}>
      {children}
    </div>
  );
}
```

保持与原版相同的 props 接口（`children`, `delay`, `className`），所有幻灯片无感切换。

### CSS 动画修复

`remotion/overrides/remotion-fixes.css` 处理两类问题：

**1. CSS 动画类（`opacity: 0` 起始状态）**

多个组件使用了 `animate-fade-in-up` 等 Tailwind 动画类，这些类初始设置 `opacity: 0`，依赖 `@keyframes` 渐显。在 Remotion 中 keyframes 不可靠，元素永远隐藏。

```css
.animate-fade-in-up,
.animate-scale-in,
.animate-slide-in-left {
  opacity: 1 !important;
  animation: none !important;
  transform: none !important;
}
```

**2. 视口单位（`100dvh`）**

`.slide` 类使用 `min-height: 100dvh`，headless Chrome 渲染器中不生效，导致幻灯片高度塌陷。

```css
.slide {
  min-height: 100% !important;
  height: 100% !important;
  width: 100% !important;
}
```

### 音视频同步

`LectureVideo.tsx` 中音频和视觉是两个独立层：

```tsx
<AbsoluteFill>
  {/* 视觉层：幻灯片 + 过渡 */}
  <TransitionSeries>
    {slideComponents.map((SlideComponent, i) => (
      <React.Fragment key={i}>
        {i > 0 && (
          <TransitionSeries.Transition
            presentation={fade()}
            timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
          />
        )}
        <TransitionSeries.Sequence durationInFrames={slideDuration}>
          <AbsoluteFill style={{ backgroundColor: "#0a0a0b" }}>
            <SlideComponent />
          </AbsoluteFill>
        </TransitionSeries.Sequence>
      </React.Fragment>
    ))}
  </TransitionSeries>

  {/* 音频层：逐张定位 */}
  {durations.map((_, i) => (
    <Sequence from={audioStartFrames[i]} layout="none">
      <Audio src={staticFile(`audio/slide-${String(i).padStart(2, "0")}.mp3`)} />
    </Sequence>
  ))}
</AbsoluteFill>
```

每张幻灯片的持续帧数 = `Math.ceil(duration * fps) + fps`（音频时长 + 1 秒缓冲）。

音频起始帧的计算考虑了过渡重叠：

```
slide[0] 起始帧 = 0
slide[i] 起始帧 = slide[i-1] 起始帧 + slide[i-1] 帧数 - TRANSITION_FRAMES
```

### 动态时长计算

`Root.tsx` 中的 `calculateMetadata` 在渲染前异步计算总帧数：

```ts
const calculateMetadata: CalculateMetadataFunction<LectureVideoProps> = async ({
  props, abortSignal,
}) => {
  const response = await fetch(staticFile("audio/durations.json"), {
    signal: abortSignal,
  });
  const durations: number[] = await response.json();

  const totalSlideFrames = durations.reduce(
    (sum, d) => sum + Math.ceil(d * fps) + fps, 0
  );
  const totalTransitionOverlap = (durations.length - 1) * TRANSITION_FRAMES;
  const durationInFrames = totalSlideFrames - totalTransitionOverlap;

  return { durationInFrames, props: { ...props, durations } };
};
```

这样视频总时长会根据实际音频时长自动调整，无需手动计算。

## 关键文件说明

| 文件 | 作用 |
|------|------|
| `remotion/index.ts` | 入口，`registerRoot(RemotionRoot)` |
| `remotion/Root.tsx` | `<Composition>` 定义，导入 `index.css` 和 `remotion-fixes.css`，`calculateMetadata` 动态计算总时长 |
| `remotion/LectureVideo.tsx` | 主合成组件，导入 41 个幻灯片，编排 `TransitionSeries` + `Audio` |
| `remotion/config.ts` | 常量：`VIDEO_FPS=30`, `VIDEO_WIDTH=1920`, `VIDEO_HEIGHT=1080`, `TRANSITION_FRAMES=15` |
| `remotion/overrides/AnimatedText.tsx` | 帧同步的 `AnimatedText` + `TypewriterText`，替代浏览器版本 |
| `remotion/overrides/EndingQuote.tsx` | 帧同步的结束语幻灯片 |
| `remotion/overrides/remotion-fixes.css` | 禁用 CSS 动画，修复视口单位 |
| `remotion.config.ts` | Webpack 配置：路径别名、模块替换、TailwindCSS v4 |
| `scripts/generate-audio.py` | Edge TTS 批量生成音频 + 时长记录 |
| `scripts/narration/scripts.json` | 41 条讲稿文本 |

## 配置参数

### 视频参数（`remotion/config.ts`）

| 参数 | 值 | 说明 |
|------|----|------|
| `VIDEO_FPS` | 30 | 帧率 |
| `VIDEO_WIDTH` | 1920 | 宽度 |
| `VIDEO_HEIGHT` | 1080 | 高度 |
| `TRANSITION_FRAMES` | 15 | 过渡时长（0.5 秒） |

### TTS 参数（`scripts/generate-audio.py`）

| 参数 | 值 | 说明 |
|------|----|------|
| `VOICE` | `zh-CN-YunxiNeural` | 微软 Edge TTS 中文男声 |
| `RATE` | `+0%` | 语速（可调为 `+10%` 加速） |
| `VOLUME` | `+0%` | 音量 |

可用中文声音列表：`edge-tts --list-voices | grep zh-CN`

## 常见问题

### 渲染出来全黑 / 看不到文字

大概率是 Webpack 模块替换未生效。检查：
1. `remotion.config.ts` 中 `NormalModuleReplacementPlugin` 正则是否正确
2. 不要使用 `resolve.alias` 做组件替换（会被通用 `@` 别名抢先匹配）
3. 删除 Remotion 缓存后重试：`rm -rf node_modules/.cache`

### 幻灯片内容溢出 / 布局异常

检查 `remotion-fixes.css` 中的 `.slide` 覆盖是否加载。`Root.tsx` 必须在 `index.css` **之后** 导入 `remotion-fixes.css`。

### 新增幻灯片后如何更新视频

1. 在 `scripts/narration/scripts.json` 中添加对应讲稿
2. 在 `remotion/LectureVideo.tsx` 的 `slideComponents` 数组中添加组件（顺序必须与 `slides.ts` 一致）
3. 重新运行 `npm run audio:generate`
4. 用 `npm run video:studio` 预览确认
5. `npm run video:render` 渲染

### 如何替换更多组件

如果新的幻灯片组件使用了 Remotion 不兼容的浏览器 API（如 `IntersectionObserver`、`requestAnimationFrame`），按以下步骤添加替换：

1. 在 `remotion/overrides/` 中创建帧同步版本
2. 在 `remotion.config.ts` 中添加新的 `NormalModuleReplacementPlugin`：

```ts
new webpack.NormalModuleReplacementPlugin(
  /components\/shared\/YourComponent/,
  path.resolve(projectRoot, "remotion", "overrides", "YourComponent.tsx")
),
```

### 如何更换 TTS 声音

修改 `scripts/generate-audio.py` 中的 `VOICE` 常量。推荐声音：

| 声音 | 特点 |
|------|------|
| `zh-CN-YunxiNeural` | 年轻男声（当前） |
| `zh-CN-YunjianNeural` | 成熟男声 |
| `zh-CN-XiaoxiaoNeural` | 女声，自然流畅 |
| `zh-CN-YunyangNeural` | 新闻播报风格 |

### Remotion 依赖版本

所有 `@remotion/*` 包必须保持相同版本（当前 `4.0.432`）。升级时统一更新：

```bash
npm install remotion@latest @remotion/cli@latest @remotion/bundler@latest \
  @remotion/renderer@latest @remotion/media@latest @remotion/transitions@latest \
  @remotion/player@latest @remotion/tailwind-v4@latest
```
