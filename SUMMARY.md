# AI 智能体前沿实录 —— 演示网站项目总结

> 项目路径：`/Users/yzlabmac/AIcourse/ai-agent-course/`  
> 生成日期：2026-03-02  
> 当前状态：**Phase 1 完成，可本地运行**

---

## 一、项目概述

本项目是一个**基于 Web 的幻灯片演示网站**，面向大学通识课《AI 智能体前沿实录》，总时长 90–120 分钟。核心设计理念是用网页替代传统 PPT，获得更灵活的动画控制、键盘导航和全屏演示体验。

### 课程内容摘要

| 模块 | 主题 | 幻灯片数 |
|------|------|----------|
| 封面 | 开场 + 破冰 | 2 |
| Module 1 | 从"会聊天"到"会干活"—— ChatBot vs Agent 认知升级 | 5 |
| Module 2 | 四个前沿案例拆解（OpenClaw / Vibe Coding / Vibe Research / 无代码平台） | 16 |
| Module 3 | 工具全景图（终端 Agent / IDE / 无代码 / 知识平台） | 5 |
| Module 4 | 清醒认知（幻觉 / 权限风险 / 死循环 / 安全底线 / 真正值钱的能力） | 7 |
| 结尾 | 判断 + 建议 + 金句 | 3 |
| **合计** | | **38 张** |

---

## 二、技术栈

| 层面 | 技术 | 版本 | 用途 |
|------|------|------|------|
| 构建工具 | Vite | 7.3.1 | 极速 HMR + 构建 |
| UI 框架 | React | 19.2 | 组件化幻灯片 |
| 类型系统 | TypeScript | 5.9 | 全量类型覆盖 |
| 样式 | TailwindCSS v4 | 4.2 | @theme 原子化 + 暗色主题 |
| 工具函数 | clsx + tailwind-merge | — | 类名合并 |
| Node 运行时 | Node.js (fnm) | 22.17 | — |

> **注意**：`package.json` 中还包含 `remotion`、`@remotion/core`、`@remotion/player`、`lucide-react`、`class-variance-authority`、`@radix-ui/react-slot` 等依赖，但当前代码中**均未使用**。这些是设计阶段规划的技术，后续可以按需引入或清理移除。

---

## 三、项目结构

```
ai-agent-course/
├── index.html              # 入口 HTML
├── vite.config.ts          # Vite 配置（TailwindCSS 插件 + @ 别名）
├── tsconfig.app.json       # TS 配置（路径别名）
├── package.json            # 依赖清单
└── src/
    ├── main.tsx            # React 挂载入口
    ├── App.tsx             # 主应用（导航逻辑 + 幻灯片映射 + 总览面板）
    ├── index.css           # 全局样式（主题色、动画、模块样式类）
    ├── lib/
    │   └── utils.ts        # cn() 类名合并工具
    ├── data/
    │   ├── slides.ts       # 38 张幻灯片配置（id / title / module / notes）
    │   └── models.ts       # AI 模型数据 + 工具数据
    ├── hooks/
    │   ├── useSlideNavigation.ts   # 基于 hash 的翻页状态管理
    │   ├── useKeyboardControl.ts   # 键盘快捷键（方向键/空格/F/O/G+数字）
    │   └── useFullscreen.ts        # 全屏切换
    ├── components/
    │   ├── layout/
    │   │   ├── SlideContainer.tsx  # 1920×1080 等比缩放容器
    │   │   └── ProgressBar.tsx     # 底部进度条 + 页码
    │   ├── shared/
    │   │   ├── AnimatedText.tsx    # 淡入 + 打字机文字效果
    │   │   ├── IconCard.tsx        # 带图标的信息卡片
    │   │   ├── Timeline.tsx        # 时间轴组件（已创建，暂未使用）
    │   │   ├── TerminalWindow.tsx  # 终端窗口样式组件
    │   │   └── QuoteBlock.tsx      # 引用块组件（已创建，暂未使用）
    │   └── slides/
    │       ├── index.ts            # 统一导出
    │       ├── Cover.tsx           # 粒子动画封面
    │       ├── Icebreaker.tsx      # 破冰页
    │       ├── ... (共 38 个幻灯片组件)
    │       └── EndingQuote.tsx     # 结尾金句（打字机效果）
    └── styles/                     # 预留目录（当前为空）
```

**代码量统计**：55 个源文件，约 2,985 行代码（含 CSS）。

---

## 四、核心功能

### 4.1 幻灯片导航

- **键盘**：← → 翻页、Space/PageDown 前进、PageUp 后退
- **跳转**：按 G 后输入数字直接跳到指定页（800ms 超时确认）
- **全屏**：按 F 或双击屏幕
- **总览**：按 O 打开幻灯片缩略图网格，点击跳转
- **点击区域**：屏幕左侧 20% 后退，右侧 20% 前进
- **讲者备注**：点击右下角 N 按钮切换备注显示（每张幻灯片均配有备注）
- **URL 状态**：当前页码同步到 `window.location.hash`，刷新后自动恢复

### 4.2 视觉设计

- **暗色主题**：背景 `#0a0a0b`，前景 `#f5f5f5`
- **模块配色**：每个模块有专属强调色（蓝/紫/绿/红/青）
- **固定画幅**：1920×1080 逻辑分辨率，`transform: scale()` 适配任意窗口
- **动画系统**：`fadeInUp`、`scaleIn`、`slideInLeft`、`float`（粒子）、打字机效果
- **字体**：Inter（英文）、Noto Sans SC（中文）、JetBrains Mono（代码）

### 4.3 幻灯片亮点

| 幻灯片 | 特色 |
|---------|------|
| Cover | Canvas 粒子动画 + 渐变标题 |
| ChatbotVsAgent | 左右分栏对比布局 |
| Case1Loop | SVG 圆环动画（Agentic Loop） |
| Case3Notebook | 音频波形可视化条 |
| Case4QRCode | 二维码预留位（需演示前替换） |
| ToolsLandscape | 四阶段流水线全景总览 |
| RiskPermission | 终端窗口模拟 `rm -rf` 场景 |
| EndingQuote | 打字机效果逐字展示金句 |

---

## 五、Review 发现

### 5.1 需要修复的问题

| # | 严重度 | 问题 | 位置 | 建议修复 |
|---|--------|------|------|----------|
| 1 | 中 | `useSlideNavigation` 的 `next`/`prev` 使用状态值而非函数式更新，快速连按可能丢失翻页 | `useSlideNavigation.ts` | 改用 `setCurrentSlide(prev => ...)` |
| 2 | 中 | 键盘快捷键 N（切换讲者备注）在 UI 上标注了但未实现 | `useKeyboardControl.ts` | 添加 `onToggleNotes` 回调 |
| 3 | 低 | `@keyframes spin` 在 `Case1Loop` 和 `RiskLoop` 中重复定义，且与 Tailwind 内置 `spin` 冲突 | 两个组件的 `<style>` | 统一移入 `index.css`，改名为 `orbit` |
| 4 | 低 | `EndingQuote` 中重复定义了 `@keyframes fadeInUp`，`index.css` 已有相同定义 | `EndingQuote.tsx` | 删除内联 `<style>`，使用全局动画 |
| 5 | 低 | `Case3Notebook` 波形条在每次渲染时调用 `Math.random()`，会导致闪烁 | `Case3Notebook.tsx` | 用 `useMemo` 固定随机值 |
| 6 | 低 | `Case1Workflow` 步骤间箭头使用 `absolute` 定位但父元素缺少 `relative` | `Case1Workflow.tsx` | 给父容器加 `relative` |

### 5.2 未使用的资源

| 类型 | 内容 |
|------|------|
| npm 依赖（6 个） | `remotion`、`@remotion/core`、`@remotion/player`、`lucide-react`、`class-variance-authority`、`@radix-ui/react-slot` |
| 共享组件（2 个） | `Timeline.tsx`、`QuoteBlock.tsx` 已创建但未被引用 |
| 数据导出（2 个） | `moduleNames`（slides.ts）、`tools` 数组 + `Tool` 类型（models.ts） |
| 空目录（2 个） | `src/styles/`、`src/components/ui/` |

### 5.3 UX 待改进点

| 项目 | 描述 |
|------|------|
| 移动端适配 | 固定 1920×1080 在手机上缩放极小，无滑动手势支持 |
| 无障碍 | 未添加 `prefers-reduced-motion` 媒体查询来关闭动画 |
| 进度条与备注重叠 | 页码显示在右下角，开启讲者备注时会被遮挡 |
| 浏览器标签页标题 | 仍为默认的 `"ai-agent-course"`，建议改为课程名 |
| Favicon | 仍为 Vite 默认图标 |
| 二维码占位 | Case4QRCode 需手动替换真实二维码图片 |

---

## 六、后续 TODO

### Phase 2：打磨与增强（建议优先级）

- [ ] **修复上述 6 个问题**（约 30 分钟工作量）
- [ ] **清理未使用依赖**，`npm uninstall remotion @remotion/core @remotion/player lucide-react class-variance-authority @radix-ui/react-slot`
- [ ] **添加 N 键快捷键**，实现讲者备注键盘切换
- [ ] **实现 `prefers-reduced-motion`**，禁用动画以提升无障碍性
- [ ] **替换 QR Code 占位**为真实二维码
- [ ] **更新 `index.html`**：标题改为"AI 智能体前沿实录"，替换 favicon

### Phase 3：可选增强

- [ ] 添加触摸滑动手势（移动端导航）
- [ ] 引入 Remotion 实现录屏/视频导出功能
- [ ] 添加演讲者计时器（倒计时/用时统计）
- [ ] 实现幻灯片切换过渡动画（淡入淡出 / 滑动）
- [ ] 集成 lucide-react 图标替换 emoji
- [ ] 添加暗色/亮色主题切换
- [ ] 生产构建部署（GitHub Pages / Vercel）

---

## 七、本地运行

```bash
cd /Users/yzlabmac/AIcourse/ai-agent-course
npm run dev
# 打开 http://localhost:5173/
```

### 快捷键速查

| 按键 | 功能 |
|------|------|
| → / Space / PageDown | 下一页 |
| ← / PageUp | 上一页 |
| F | 全屏 |
| O | 幻灯片总览 |
| G + 数字 | 跳转到指定页 |
| Escape | 退出全屏/总览 |
| 双击 | 全屏切换 |

---

*本文档由项目 Review 自动生成，不含具体实现代码。*
