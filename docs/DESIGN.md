# AI Agent 前沿实录 —— 演示网站设计文档

## 一、项目概述

基于 **Vite + React + shadcn/ui + TailwindCSS + Remotion** 搭建一个可交互的演示网站，替代传统 PPT，用于 90-120 分钟的通识课授课。

### 核心设计理念

- **用 Agent 讲 Agent**：网站本身就是 AI Agent + Vibe Coding 的产物，开场即可作为案例展示
- **演讲者优先**：键盘/遥控器翻页、演讲者备注、进度指示，支持课堂实际使用
- **动效克制**：只在需要传达信息的地方加动画，不做炫技

---

## 二、技术架构

```
ai-agent-course/
├── public/
│   ├── assets/            # 图片、视频、音频等静态资源
│   │   ├── images/
│   │   ├── videos/        # 演示录屏片段
│   │   └── audio/         # NotebookLM 播客音频片段
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/            # shadcn/ui 组件（Button, Card, Badge, Table 等）
│   │   ├── slides/        # 每张幻灯片组件
│   │   │   ├── Cover.tsx                  # 封面
│   │   │   ├── AgentVsChatbot.tsx         # 认知升级
│   │   │   ├── ModelOverview.tsx          # 基座模型速览
│   │   │   ├── CaseOpenClaw.tsx           # 案例1
│   │   │   ├── CaseVibeCoding.tsx         # 案例2
│   │   │   ├── CaseVibeResearch.tsx       # 案例3
│   │   │   ├── CaseNoCode.tsx             # 案例4
│   │   │   ├── ToolLandscape.tsx          # 工具全景图
│   │   │   ├── AgentRisks.tsx             # 能力边界
│   │   │   ├── RealValueTable.tsx         # 真正值钱的能力
│   │   │   ├── Ending.tsx                 # 结尾
│   │   │   └── index.ts                   # 统一导出
│   │   ├── layout/
│   │   │   ├── SlideContainer.tsx         # 幻灯片容器（16:9 / 全屏适配）
│   │   │   ├── SlideTransition.tsx        # 幻灯片切换过渡动画
│   │   │   ├── ProgressBar.tsx            # 底部进度条
│   │   │   ├── SpeakerNotes.tsx           # 演讲者备注（独立窗口）
│   │   │   └── SlideNumber.tsx            # 页码指示
│   │   └── shared/
│   │       ├── AnimatedText.tsx           # 文字逐行/逐字出现动画
│   │       ├── CodeBlock.tsx              # 代码块展示（带高亮）
│   │       ├── ComparisonTable.tsx        # 对比表格组件
│   │       ├── IconCard.tsx               # 带图标的卡片
│   │       ├── Timeline.tsx               # 时间线组件
│   │       ├── QuoteBlock.tsx             # 引用块
│   │       └── VideoEmbed.tsx             # 视频/录屏嵌入
│   ├── hooks/
│   │   ├── useSlideNavigation.ts          # 幻灯片导航逻辑
│   │   ├── useKeyboardControl.ts          # 键盘快捷键
│   │   └── useFullscreen.ts              # 全屏切换
│   ├── data/
│   │   ├── slides.ts                      # 幻灯片元数据（顺序、标题、备注）
│   │   └── models.ts                      # 模型对比数据
│   ├── lib/
│   │   └── utils.ts                       # shadcn 工具函数
│   ├── styles/
│   │   └── globals.css                    # TailwindCSS 全局样式 + 自定义 CSS 变量
│   ├── remotion/                          # Remotion 视频组件（可选：录制/导出用）
│   │   ├── compositions.tsx               # Remotion 合成定义
│   │   ├── SlideVideo.tsx                 # 将幻灯片渲染为视频
│   │   └── transitions/                   # Remotion 过渡效果
│   │       ├── FadeTransition.tsx
│   │       └── SlideTransition.tsx
│   ├── App.tsx                            # 主应用入口
│   └── main.tsx                           # Vite 入口
├── index.html
├── tailwind.config.ts
├── components.json                        # shadcn/ui 配置
├── vite.config.ts
├── tsconfig.json
└── package.json
```

### 技术选型说明

| 技术 | 用途 | 选型理由 |
|------|------|---------|
| **Vite** | 构建工具 | 极速 HMR，课堂修改即时生效 |
| **React 19** | UI 框架 | 组件化幻灯片，状态管理自然 |
| **TailwindCSS v4** | 样式系统 | 原子化快速布局，响应式适配 |
| **shadcn/ui** | UI 组件库 | 高质量 Table / Card / Badge / Button，风格统一 |
| **Remotion** | 动画 & 视频导出 | 用 React 写动画；可将演示导出为视频发给学生回看 |

### Remotion 的双重角色

1. **课堂演示时**：Remotion 组件作为幻灯片内的动画引擎（如模型对比图的渐入、工具全景图的依次亮起）
2. **课后分发时**：整套幻灯片可通过 Remotion 渲染为 MP4 视频，学生无需访问网站即可回看

---

## 三、幻灯片内容规划（共约 35-40 页）

### 模块零：封面 & 暖场（2 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 1 | **封面** | 课程标题、副标题「当'不会写代码的人'开始造软件」、日期、讲师信息 | 深色背景 + 大字标题，微光粒子动画（Remotion），底部淡入副标题 |
| 2 | **破冰页** | 「你们已经会用AI聊天了。这堂课讲的是你们**还不知道的事**。」 | 全屏单句排版，字体 > 80px，3 秒后淡入下一行 |

### 模块一：从"会聊天"到"会干活"（5 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 3 | **ChatBot vs Agent** | 左右分栏对比：ChatBot = 「你问一句，它答一句」；Agent = 「你给目标，它自己干到完」 | 左侧灰色调文本框 / 右侧彩色调终端窗口动画，Remotion 依次渲染 |
| 4 | **一句话区别** | 「ChatBot 是军师，Agent 是将军带兵打仗」 | 全屏金句，左侧军师 icon / 右侧将军 icon，shadcn Badge 标注 |
| 5 | **Agent 能做什么** | 规划步骤 → 调用工具 → 读写文件 → 执行命令 → 上网搜索 → 自动修bug | 纵向 Timeline 组件，每个节点带 icon，Remotion 逐个亮起 |
| 6 | **基座模型速览** | 5 个模型的对比表（Claude/Gemini/GPT/Qwen/Kimi） | shadcn Table 组件，悬停行高亮，每行带品牌色 Badge |
| 7 | **选模型哲学** | 「不是选最聪明的，而是选最适合这个岗位的」 | 图形化：5 个模型化为 5 个"员工头像卡"，各标注擅长领域 |

### 模块二：前沿案例拆解（16 页）

#### 案例 1：OpenClaw（4 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 8 | **案例1封面** | OpenClaw 项目 logo + 「不会写代码的人如何造了一个开发者工具」 | 暗色背景 + 终端风格字体，案例编号大字 |
| 9 | **创作流程** | 写设计文档 → 定义需求 → Review AI 输出 → 做取舍决策 | 四步横向流程图，Remotion 依次 fade in |
| 10 | **Agentic Loop** | Agent 写代码 → 跑测试 → 看报错 → 改代码 → 再测试（循环图） | 环形动画，Remotion spring 动画驱动 |
| 11 | **核心启发** | 「编程在被重新定义。门槛变成了：你能不能描述你要什么、判断交付物的质量」 | 全屏金句 + 渐变背景 |

#### 案例 2：Vibe Coding 实录（4 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 12 | **案例2封面** | 「Vibe Coding 实录——Live Demo 现场从零造一个产品」 | 终端窗口视觉，光标闪烁动画 |
| 13 | **工具介绍** | Claude Code / OpenClaw / MaxClaw / Kimi Claw 四个工具卡片 | 四列 IconCard 网格布局 |
| 14 | **Demo 流程预告** | 空目录 → Agent 规划结构 → 写代码 → 自动调试 → 成品弹出 | 五步 Timeline，标注「⚡ 现场演示」 |
| 15 | **核心启发** | 「未来的编程更像当产品经理——你负责提需求、验收质量、决定方向」 | 全屏金句 |

#### 案例 3：Vibe Research（4 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 16 | **案例3封面** | 「用 AI 重构你的学习和研究方式」 | 书本 → 播客波形的变形动画 |
| 17 | **NotebookLM 演示** | 论文 → 双人播客对谈（现场播放音频片段） | 左侧论文缩略图 / 右侧波形播放器 UI，内嵌 `<audio>` |
| 18 | **Kimi 超长上下文** | 整本书 / 整个 GitHub 仓库 → 你的私人顾问 | 动画：一摞文件飞入一个对话气泡 |
| 19 | **核心启发** | 「信息获取从'我去读'变成'它来讲给我听'」 | 全屏金句 |

#### 案例 4：无代码平台（4 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 20 | **案例4封面** | 「3 分钟用无代码平台搭建一个 AI 产品」 | 扣子(Coze) + Dify logo |
| 21 | **搭建流程** | 设定人设 Prompt → 挂载知识库(RAG) → 接入搜索插件 → 发布上线 | 四步可视化画布风格，Remotion 逐步展开 |
| 22 | **现场体验** | 二维码展示页，「扫码体验刚刚搭建的 Bot」 | 居中大二维码 + 简短说明，shadcn Card 包裹 |
| 23 | **核心启发** | 「一个人 + 一个下午 + 这些工具 = 一个可以服务真实用户的 AI 产品」 | 全屏金句，等式动画 |

### 模块三：工具全景图（5 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 24 | **模块封面** | 「知道有什么，才知道能做什么」 | 大标题 + 四个分类 icon 预览 |
| 25 | **终端自主 Agent** | Claude Code / OpenClaw / Kimi Claw / MaxClaw | 四张 IconCard，渐次入场 |
| 26 | **AI Native 开发环境** | Trae / VSCode+AI / Cursor / Windsurf | 四张 IconCard，同上 |
| 27 | **无代码平台 & 知识平台** | Coze / Dify / NotebookLM / Kimi | 2×2 网格 |
| 28 | **全景总览** | 将所有工具按「创意→开发→测试→部署→运营」工作流排列 | 横向流程图 + 工具 logo 归位动画 |

### 模块四：清醒认知（8 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 29 | **模块封面** | 「不灌鸡汤，讲清楚三件事」 | 红色警示风格配色 |
| 30 | **翻车1: 幻觉** | Agent 会编造 API / 引用不存在的论文 | 左侧"一本正经的回答" / 右侧红色 ❌ 标注真相 |
| 31 | **翻车2: 权限风险** | 演示：模糊指令"清理不需要的文件" → 删掉毕业论文 | 终端模拟动画，文件被删除时闪红 |
| 32 | **翻车3: 死循环** | Agent 反复用错的方法修同一个 bug | 循环箭头动画 + 计数器 |
| 33 | **安全底线** | 沙盒隔离 / Human-in-the-Loop / 不给敏感信息 | 三列 Card，每列一个原则 + icon |
| 34 | **真正值钱的能力** | 四行对比表：你以为值钱的 vs 真正值钱的 | shadcn Table，左列灰色删除线 / 右列高亮绿色 |
| 35 | **Context Engineering** | 「用精准的自然语言描述你到底要什么」—— 这才是核心技能 | 大字 + 示例对比（模糊 prompt vs 精准 prompt） |

### 结尾（3 页）

| # | 页面 | 内容要点 | 视觉/交互设计 |
|---|------|---------|-------------|
| 36 | **一个判断** | 造东西的门槛↓ 造好东西的门槛→ 品味、判断力、问题定义能力越稀缺 | 双曲线图动画（Remotion interpolate） |
| 37 | **一个建议** | 今天回去挑一个真实低效场景 → 打开任意工具 → 让 AI 帮你解决 | 行动 checklist 风格，带复选框 |
| 38 | **结尾金句** | 「AI won't replace you. But someone using AI will.」 | 全屏黑底白字，逐字打字机动画（Remotion） |

---

## 四、交互与导航设计

### 键盘控制

| 按键 | 功能 |
|------|------|
| `→` / `Space` / `PageDown` | 下一页 |
| `←` / `PageUp` | 上一页 |
| `F` | 全屏切换 |
| `G` + 数字 | 跳转到指定页 |
| `S` | 打开/关闭演讲者备注窗口 |
| `O` | 幻灯片总览模式（缩略图网格） |
| `Esc` | 退出全屏 / 退出总览 |

### 演讲者备注

- 按 `S` 键弹出独立窗口（`window.open`），显示当前页备注 + 下一页预览 + 计时器
- 备注内容在 `src/data/slides.ts` 中以数据驱动方式维护

### 进度指示

- 底部细线进度条（5px 高），颜色随模块变化
- 右下角显示当前页/总页数

---

## 五、视觉设计规范

### 配色方案

```
主色调（深色主题）：
  --bg-primary:      #0a0a0b     /* 近黑背景 */
  --bg-secondary:    #141416     /* 卡片背景 */
  --text-primary:    #f5f5f5     /* 主文字 */
  --text-secondary:  #a1a1aa     /* 辅助文字 */
  --accent-blue:     #3b82f6     /* 强调蓝 */
  --accent-green:    #22c55e     /* 正面/启发 */
  --accent-red:      #ef4444     /* 警告/翻车 */
  --accent-amber:    #f59e0b     /* 提示/注意 */
  --accent-purple:   #a855f7     /* 案例/创意 */

模块配色标识：
  模块一（认知升级）：accent-blue
  模块二（案例拆解）：accent-purple
  模块三（工具全景）：accent-green
  模块四（清醒认知）：accent-red / accent-amber
```

### 字体

```
标题字体：   "Inter", system-ui, sans-serif    （英文）
             "Noto Sans SC", sans-serif         （中文）
正文字体：   同上
代码/终端：  "JetBrains Mono", "Fira Code", monospace
金句展示：   加粗 + 字号 ≥ 48px
```

### 排版原则

- 每页核心信息不超过 **3 个要点**
- 金句页只放 **一句话**
- 表格最多 **5 行 × 4 列**
- 图片/动画占幻灯片面积 ≥ 50%

---

## 六、Remotion 动画规划

### 全局过渡

- 幻灯片切换使用 `fade` 过渡（300ms），不使用花哨的 3D 翻转
- 同模块内用 `slide` 过渡，跨模块用 `fade` 过渡

### 页面级动画

| 动画类型 | 用途 | Remotion 实现 |
|---------|------|--------------|
| **逐行淡入** | 要点逐条出现 | `interpolate(frame, [0, 15, 30, 45], [0, 1, 0, 1])` per item |
| **打字机效果** | 金句展示 | 逐字符 `opacity: frame > charIndex * 2 ? 1 : 0` |
| **Timeline 亮起** | Agent 能力展示 | `spring({ frame: frame - delay, fps, config: { damping: 20 } })` |
| **环形循环** | Agentic Loop | `rotate` + `dashoffset` SVG 动画 |
| **数字跳动** | 统计数据 | `interpolate` 从 0 到目标值 |
| **对比高亮** | 表格左灰右绿 | 左列 `opacity: 0.5` + `line-through`，右列 `scale` spring 放大 |

### 视频导出配置

```ts
// remotion/compositions.tsx
export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="FullPresentation"
      component={SlideVideo}
      durationInFrames={30 * 60 * 15} // 15 分钟回顾版（快进）
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
```

---

## 七、数据结构设计

### 幻灯片元数据

```ts
// src/data/slides.ts
interface SlideConfig {
  id: string;
  title: string;
  module: 'cover' | 'module1' | 'module2' | 'module3' | 'module4' | 'ending';
  component: React.LazyExponent<React.FC>;
  notes: string;         // 演讲者备注（Markdown 格式）
  duration?: number;      // 建议停留时间（秒），用于视频导出
  transition?: 'fade' | 'slide' | 'none';
}

export const slides: SlideConfig[] = [
  {
    id: 'cover',
    title: '封面',
    module: 'cover',
    component: lazy(() => import('../components/slides/Cover')),
    notes: '开场白：欢迎大家。这堂课讲的不是如何使用 ChatGPT…',
    duration: 30,
    transition: 'fade',
  },
  // ...
];
```

### 模型数据

```ts
// src/data/models.ts
interface AIModel {
  name: string;
  provider: string;
  color: string;           // 品牌色
  icon: string;            // logo 路径
  strength: string;        // 核心优势
  useCase: string;         // 使用场景
  contextWindow?: string;  // 上下文窗口
}
```

---

## 八、开发计划

### Phase 1：骨架搭建（Day 1）

- [ ] `npm create vite@latest` 初始化项目
- [ ] 配置 TailwindCSS v4 + shadcn/ui
- [ ] 安装 Remotion（`@remotion/core`, `@remotion/cli`）
- [ ] 实现 `SlideContainer` + `useSlideNavigation` + 键盘控制
- [ ] 封面页 + 2 个占位幻灯片验证流程

### Phase 2：内容填充（Day 2-3）

- [ ] 完成全部 38 张幻灯片组件
- [ ] 编写每页的演讲者备注
- [ ] 接入 shadcn Table / Card / Badge 组件
- [ ] 嵌入演示视频和音频素材

### Phase 3：动画润色（Day 4）

- [ ] 为各页面添加 Remotion 入场动画
- [ ] 实现幻灯片切换过渡
- [ ] 打字机效果、Timeline 动画、环形循环动画
- [ ] 全景图工具 logo 归位动画

### Phase 4：演讲者功能（Day 5）

- [ ] 演讲者备注窗口
- [ ] 幻灯片总览模式
- [ ] 进度条 + 计时器
- [ ] 全屏适配 + 移动端基础响应

### Phase 5：导出与部署（Day 6）

- [ ] Remotion 视频导出流程验证
- [ ] 部署到 Vercel / Cloudflare Pages
- [ ] 最终走查 + 课堂彩排

---

## 九、关键实现备注

### 1. Remotion 与演示模式共存

Remotion 组件在演示模式下通过 `useCurrentFrame()` + `useVideoConfig()` 获取帧信息来驱动动画。在浏览器演示时，使用 `<Player>` 组件包裹每页内容，通过 `autoPlay` + `loop` 控制页面内动画。

```tsx
// 幻灯片内嵌 Remotion 动画示例
import { Player } from '@remotion/player';

const SlidePage: React.FC = () => (
  <Player
    component={AgentLoopAnimation}
    durationInFrames={120}
    fps={30}
    style={{ width: '100%', height: '100%' }}
    autoPlay
    loop
  />
);
```

### 2. 响应式 16:9 容器

```tsx
// SlideContainer.tsx 核心思路
const SlideContainer: React.FC = ({ children }) => {
  // 计算视口内最大 16:9 区域
  const scale = Math.min(
    window.innerWidth / 1920,
    window.innerHeight / 1080
  );
  
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black"
    >
      <div
        className="w-[1920px] h-[1080px] origin-center overflow-hidden"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};
```

### 3. 代码高亮

使用 `shiki` 做语法高亮，支持终端命令、Python、TypeScript 等：

```tsx
import { codeToHtml } from 'shiki';

// 预构建时生成高亮 HTML，演示时直接渲染，避免运行时开销
```

---

## 十、素材清单

| 素材 | 格式 | 用途 | 来源 |
|------|------|------|------|
| 各模型品牌 logo | SVG/PNG | 模型速览 & 工具全景 | 官网下载 |
| Vibe Coding 录屏 | MP4 (1080p) | 案例2 演示背景 | 课前录制 |
| NotebookLM 播客片段 | MP3 (30s) | 案例3 现场播放 | 课前用 NotebookLM 生成 |
| 扣子 Bot 二维码 | PNG | 案例4 现场体验 | 课前搭建后截图 |
| 沙盒翻车录屏 | MP4 | 模块4 权限风险演示 | 课前在容器中录制 |

---

> **一句话**：这个网站本身就是「Vibe Coding」的最佳注脚——它应该由你和 AI Agent 协作完成，用来讲述这件事正在如何改变一切。
