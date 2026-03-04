# AI Agent 通识课 — 交互式演示文稿

> 一堂面向大学生的 AI Agent 通识课，用 Web 幻灯片替代传统 PPT。

**在线访问：** https://aleSheng.github.io/agent-intro-course/

## 课程内容

41 张幻灯片，6 个模块：

| 模块 | 主题 | 页数 | 内容 |
|------|------|------|------|
| 封面 | 开场 | 2 | 课程介绍、破冰 |
| 模块一 | 从"会聊天"到"会干活" | 9 | ChatBot vs Agent、Agent 能力、基座模型、多模态、选模型哲学 |
| 模块二 | AI Agent 实战 | 13 | 终端智能体 · Vibe Coding · Vibe Research |
| 模块三 | 工具全景图 | 5 | 终端 Agent、AI IDE、知识平台、全景总览 |
| 模块四 | 清醒认知 | 8 | 幻觉/权限/死循环风险、安全底线、Context Engineering |
| 结尾 | 行动号召 | 4 | 判断、建议、金句、公众号 |

## 操作方式

### 桌面端

| 操作 | 方式 |
|------|------|
| 前进 | `→` / `Space` / `PageDown` / 点击右侧 |
| 后退 | `←` / `PageUp` / 点击左侧 |
| 全屏 | `F` / 双击 |
| 概览 | `O` |
| 跳转 | `G` + 数字 |
| 演讲者备注 | `N` |

### 移动端

| 操作 | 方式 |
|------|------|
| 前进 | 左滑 / 点击 `→` 按钮 |
| 后退 | 右滑 / 点击 `←` 按钮 |

底部导航栏显示 `← 页码 →` 按钮，仅移动端可见。

## 本地开发

```bash
npm install
npm run dev       # 启动开发服务器 → http://localhost:5173/
npm run build     # TypeScript 检查 + 生产构建 → dist/
npm run preview   # 预览生产构建
npm run lint      # ESLint 检查
```

## 技术栈

Vite 7 + React 19 + TypeScript 5.9 + TailwindCSS v4

- 深色主题，响应式设计（桌面 + 移动端）
- CSS 动画（fadeInUp、scaleIn、slideInLeft）
- URL hash 路由（`#0`, `#1`, ...），支持直链分享
- 触摸滑动翻页 + 可见导航按钮

## 项目结构

```
src/
├── components/
│   ├── slides/       # 41 个幻灯片组件
│   ├── layout/       # SlideContainer + ProgressBar
│   └── shared/       # AnimatedText, IconCard, TerminalWindow
├── hooks/            # useSlideNavigation, useKeyboardControl, useFullscreen
├── data/             # slides.ts (元数据), models.ts (模型数据)
└── App.tsx           # 主应用入口
```

## 部署

- [GitHub Pages 部署指南](docs/deploy-github-pages.md)
- [Dokploy 部署指南](docs/deploy-dokploy.md)
- [详细设计文档](docs/DESIGN.md)
