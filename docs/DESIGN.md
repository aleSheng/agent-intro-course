# AI Agent 前沿 —— 演示网站设计文档

## 一、项目概述

基于 **Vite + React + TailwindCSS** 搭建的可交互演示网站，替代传统 PPT，用于 90-120 分钟的通识课授课。共 41 张幻灯片，响应式设计，支持桌面与移动端。

### 核心设计理念

- **用 Agent 讲 Agent**：网站本身就是 AI Agent + Vibe Coding 的产物，开场即可作为案例展示
- **演讲者优先**：键盘/遥控器翻页、演讲者备注、进度指示，支持课堂实际使用
- **动效克制**：只在需要传达信息的地方加动画，不做炫技
- **响应式适配**：桌面端全尺寸展示，移动端自适应布局 + 触摸滑动 + 可见导航按钮

---

## 二、技术架构

```
ai-agent-course/
├── public/
│   ├── pics/                    # 静态图片（QR 码等）
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── slides/              # 41 个幻灯片组件（每文件一个）
│   │   │   ├── Cover.tsx
│   │   │   ├── Icebreaker.tsx
│   │   │   ├── ChatbotVsAgent.tsx
│   │   │   ├── OneLiner.tsx
│   │   │   ├── AgentCapabilities.tsx
│   │   │   ├── BackgroundAgent.tsx
│   │   │   ├── AgentSkill.tsx
│   │   │   ├── AgentSkillArchitecture.tsx
│   │   │   ├── ModelOverview.tsx
│   │   │   ├── ModelMultimodal.tsx
│   │   │   ├── ModelPhilosophy.tsx
│   │   │   ├── Case1Cover.tsx
│   │   │   ├── Case1Workflow.tsx
│   │   │   ├── Case1Loop.tsx
│   │   │   ├── Case1Insight.tsx
│   │   │   ├── Case2Cover.tsx
│   │   │   ├── Case2Demo.tsx
│   │   │   ├── Case4Flow.tsx
│   │   │   ├── Case2Insight.tsx
│   │   │   ├── Case3Cover.tsx
│   │   │   ├── Case3Notebook.tsx
│   │   │   ├── Case3Kimi.tsx
│   │   │   ├── PaperWorkflow.tsx
│   │   │   ├── Case3Insight.tsx
│   │   │   ├── ToolsCover.tsx
│   │   │   ├── ToolsTerminal.tsx
│   │   │   ├── ToolsIDE.tsx
│   │   │   ├── ToolsNocodeKnowledge.tsx
│   │   │   ├── ToolsLandscape.tsx
│   │   │   ├── RisksCover.tsx
│   │   │   ├── RiskHallucination.tsx
│   │   │   ├── RiskPermission.tsx
│   │   │   ├── RiskLoop.tsx
│   │   │   ├── Safety.tsx
│   │   │   ├── AgentBeyondCode.tsx
│   │   │   ├── RealValue.tsx
│   │   │   ├── ContextEngineering.tsx
│   │   │   ├── EndingJudgment.tsx
│   │   │   ├── EndingAction.tsx
│   │   │   ├── EndingQuote.tsx
│   │   │   ├── EndingContact.tsx
│   │   │   └── index.ts          # 统一 barrel export
│   │   ├── layout/
│   │   │   ├── SlideContainer.tsx # 全屏 dvh 容器
│   │   │   └── ProgressBar.tsx    # 底部模块色进度条
│   │   └── shared/
│   │       ├── AnimatedText.tsx   # 延迟淡入动画包装器
│   │       ├── IconCard.tsx       # 带图标的卡片（含链接/命令复制）
│   │       ├── TerminalWindow.tsx # 终端窗口样式容器
│   │       ├── Timeline.tsx       # 时间线组件（未使用）
│   │       └── QuoteBlock.tsx     # 引用块（未使用）
│   ├── hooks/
│   │   ├── useSlideNavigation.ts  # URL hash 驱动的幻灯片导航
│   │   ├── useKeyboardControl.ts  # 键盘快捷键
│   │   └── useFullscreen.ts       # 全屏切换
│   ├── data/
│   │   ├── slides.ts              # 幻灯片元数据（id, title, module, notes）+ 模块颜色
│   │   └── models.ts              # AI 模型和工具对比数据
│   ├── lib/
│   │   └── utils.ts               # cn() 工具函数
│   ├── App.tsx                    # 主应用：路由、导航、滑动、overview
│   ├── main.tsx                   # Vite 入口
│   └── index.css                  # TailwindCSS + 自定义动画 keyframes
├── docs/                          # 项目文档
├── index.html
├── vite.config.ts                 # base: '/agent-intro-course/'
├── tsconfig.json
└── package.json
```

### 技术选型

| 技术 | 用途 | 说明 |
|------|------|------|
| **Vite 7** | 构建工具 | 极速 HMR，开发时即时生效 |
| **React 19** | UI 框架 | 组件化幻灯片，每页一个组件 |
| **TypeScript 5.9** | 类型系统 | 幻灯片元数据、组件 props 类型安全 |
| **TailwindCSS v4** | 样式系统 | 原子化 CSS，`@theme` 自定义变量，响应式断点 |

> **注意**：初始设计中的 shadcn/ui 和 Remotion 最终未被使用。动画通过 CSS `@keyframes`（`fadeInUp`、`scaleIn`、`slideInLeft`、`float`）+ `AnimatedText` 组件实现。

---

## 三、渲染管线

```
App.tsx
  → useSlideNavigation() → currentSlide index（URL hash 驱动：#0, #1, ...）
  → slides[currentSlide] → SlideConfig { id, title, module, notes }
  → slideComponents[config.id]() → 具体幻灯片 React 组件
  → SlideContainer → min-h-dvh 全屏容器
  → ProgressBar → 底部进度条（颜色随模块变化）
```

---

## 四、幻灯片内容（共 41 页，6 个模块）

### 模块零：封面 & 暖场（2 页）

| # | 组件 | 内容 |
|---|------|------|
| 1 | Cover | 课程标题、副标题、讲师信息 |
| 2 | Icebreaker | 破冰：「你们已经会用AI聊天了…」 |

### 模块一：从"会聊天"到"会干活"（9 页）

| # | 组件 | 内容 |
|---|------|------|
| 3 | ChatbotVsAgent | 左右分栏对比 ChatBot vs Agent |
| 4 | OneLiner | 一句话区别金句 |
| 5 | AgentCapabilities | Agent 六大能力卡片 |
| 6 | BackgroundAgent | 后台 Agent 概念（三阶段） |
| 7 | AgentSkill | Agent 技能介绍 |
| 8 | AgentSkillArchitecture | Agent 技能架构图 |
| 9 | ModelOverview | 五大模型对比表 |
| 10 | ModelMultimodal | 多模态能力分类 |
| 11 | ModelPhilosophy | 选模型哲学：员工卡片 |

### 模块二：AI Agent 实战（13 页）

#### Section A：终端智能体（4 页）

| # | 组件 | 内容 |
|---|------|------|
| 12 | Case1Cover | 案例封面 |
| 13 | Case1Workflow | 创作流程四步 |
| 14 | Case1Loop | Agentic Loop 循环图 |
| 15 | Case1Insight | 核心启发（争议 vs 价值） |

#### Section B：Vibe Coding（4 页）

| # | 组件 | 内容 |
|---|------|------|
| 16 | Case2Cover | Vibe Coding 封面 + 终端命令 |
| 17 | Case2Demo | Demo 流程五步 grid |
| 18 | Case4Flow | 非程序员使用流程三步 |
| 19 | Case2Insight | 核心启发（你负责 vs Agent 负责） |

#### Section C：Vibe Research（5 页）

| # | 组件 | 内容 |
|---|------|------|
| 20 | Case3Cover | Vibe Research 封面 |
| 21 | Case3Notebook | NotebookLM：论文→播客 |
| 22 | Case3Kimi | Kimi 超长上下文 |
| 23 | PaperWorkflow | 论文研究工作流 |
| 24 | Case3Insight | 核心启发 |

### 模块三：工具全景图（5 页）

| # | 组件 | 内容 |
|---|------|------|
| 25 | ToolsCover | 模块封面 |
| 26 | ToolsTerminal | 终端自主 Agent（IconCard 网格） |
| 27 | ToolsIDE | AI Native 开发环境 |
| 28 | ToolsNocodeKnowledge | 无代码平台 & 知识平台 |
| 29 | ToolsLandscape | 全景总览：创意→研究→设计→开发 |

### 模块四：清醒认知（8 页）

| # | 组件 | 内容 |
|---|------|------|
| 30 | RisksCover | 模块封面 |
| 31 | RiskHallucination | 翻车：幻觉（Agent 说 vs 真相） |
| 32 | RiskPermission | 翻车：权限风险 |
| 33 | RiskLoop | 翻车：死循环 |
| 34 | Safety | 安全底线三原则 |
| 35 | AgentBeyondCode | Agent 不止写代码 |
| 36 | RealValue | 真正值钱的能力对比表 |
| 37 | ContextEngineering | Context Engineering（模糊 vs 精准 prompt） |

### 结尾（4 页）

| # | 组件 | 内容 |
|---|------|------|
| 38 | EndingJudgment | 一个判断：门槛变化曲线 |
| 39 | EndingAction | 一个建议：行动 checklist |
| 40 | EndingQuote | 金句：「AI won't replace you…」 |
| 41 | EndingContact | 微信公众号 QR 码 |

---

## 五、交互与导航设计

### 桌面端

| 操作 | 方式 |
|------|------|
| 下一页 | `→` / `Space` / `PageDown` / 点击右侧 20% 区域 |
| 上一页 | `←` / `PageUp` / 点击左侧 20% 区域 |
| 全屏 | `F` / 双击 |
| 总览模式 | `O` |
| 跳转 | `G` + 数字 |
| 演讲者备注 | `N` |

### 移动端

| 操作 | 方式 |
|------|------|
| 下一页 | 左滑（阈值 50px）/ 点击 `→` 按钮 |
| 上一页 | 右滑（阈值 50px）/ 点击 `←` 按钮 |

- 底部居中显示半透明导航按钮（`← 页码 →`），仅移动端可见（`md:hidden`）
- 演讲者备注按钮在移动端隐藏

### 进度指示

- 底部进度条，颜色随当前模块变化（Cover 白、Module 1 蓝、Module 2 紫、Module 3 绿、Module 4 红、Ending 青）

### URL 路由

- Hash-based：`#0`, `#1`, `#2`, ...
- 支持直接分享指定页面链接

---

## 六、视觉设计规范

### 配色方案

```
主色调（深色主题）：
  --bg-primary:      #0a0a0b     /* 近黑背景 */
  --bg-secondary:    #141416     /* 卡片背景 */
  --text-primary:    #f5f5f5     /* 主文字 */
  --text-secondary:  #a1a1aa     /* 辅助文字 */
  --border:          #27272a     /* 边框 */
  --accent-blue:     #3b82f6     /* 模块一 */
  --accent-purple:   #a855f7     /* 模块二 */
  --accent-green:    #22c55e     /* 模块三 */
  --accent-red:      #ef4444     /* 模块四 */
  --accent-amber:    #f59e0b     /* 提示/注意 */
  --accent-cyan:     #06b6d4     /* 结尾 */
```

### 字体

```
标题/正文：  Inter + Noto Sans SC (display)
代码/终端：  JetBrains Mono (monospace)
```

### 响应式 padding 规范

所有幻灯片内卡片统一采用响应式 padding：
- 小屏: `p-4`
- 中屏: `md:p-6`
- 大屏: `lg:p-8` 或 `lg:p-10`

图标尺寸同样采用三级响应：`w-12 h-12 → md:w-16 md:h-16 → lg:w-20 lg:h-20`

### CSS 动画

在 `index.css` 中定义，通过 `AnimatedText` 组件的 `delay` prop 控制入场时机：
- `fadeInUp` — 从下方淡入
- `scaleIn` — 缩放淡入
- `slideInLeft` — 从左侧滑入
- `float` — 悬浮效果

### 排版原则

- 每页核心信息不超过 **3 个要点**
- 金句页只放 **一句话**
- 幻灯片水平 padding: `px-4 md:px-12 lg:px-20`

---

## 七、数据结构

### 幻灯片元数据

```ts
// src/data/slides.ts
type ModuleId = "cover" | "module1" | "module2" | "module3" | "module4" | "ending";

interface SlideConfig {
  id: string;
  title: string;
  module: ModuleId;
  notes: string;   // 演讲者备注
}

const moduleColors: Record<ModuleId, string> = {
  cover: "#f5f5f5",
  module1: "#3b82f6",
  module2: "#a855f7",
  module3: "#22c55e",
  module4: "#ef4444",
  ending: "#06b6d4",
};
```

### 组件映射

```ts
// App.tsx
const slideComponents: Record<string, () => ReactNode> = {
  "cover": () => <Cover />,
  "icebreaker": () => <Icebreaker />,
  // ... 41 个映射
};
```

渲染时通过 `slideComponents[current.id]()` 获取对应组件。

---

## 八、部署

- **平台**：GitHub Pages
- **Base path**：`/agent-intro-course/`（在 `vite.config.ts` 中配置）
- **静态资源引用**：使用 `import.meta.env.BASE_URL` 前缀确保路径正确
- **在线地址**：https://aleSheng.github.io/agent-intro-course/

---

## 九、已知问题

- `useSlideNavigation` 使用 state 值而非 updater 函数（快速连按可能丢失事件）
- `N` 键快捷键已在 UI 中定义，但未在 `useKeyboardControl` 中接线
- `@keyframes spin` 在 Case1Loop / RiskLoop 中重复定义（与 Tailwind 内置冲突）
- 部分未使用的依赖：remotion, lucide-react, class-variance-authority, @radix-ui/react-slot
- 部分未使用的组件：Timeline.tsx, QuoteBlock.tsx

---

> **一句话**：这个网站本身就是「Vibe Coding」的最佳注脚——它由你和 AI Agent 协作完成，用来讲述这件事正在如何改变一切。
