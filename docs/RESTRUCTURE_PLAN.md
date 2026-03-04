# 重构讲演故事结构（保留全部 41 张）

## 核心哲学

> **去试。找最新最好的工具，体验它，然后迭代自己。**

这句话贯穿全课：Icebreaker 建立 → Demo 证明 → 工具展示提供试的入口 → 风险告诉你怎么安全地试 → 结尾呼吁行动。

## 故事主线

以为要学编程 → 发现不需要 → 亲眼看到 AI 能做什么 → 了解工具全景 → 意识到暗面 → 找到真正重要的能力 → 去试

## 新结构（41 张）

### ACT 1: 起 — "颠覆认知"（6张）

> 抛出暴论，建立核心概念，以 Agentic Loop 作为概念高潮

| # | id | 标题 | module | 变化 |
|---|-----|------|--------|------|
| 0 | cover | 封面 | cover | 不变 |
| 1 | icebreaker | 破冰 | cover | **末行重写**：`去试。找最新最好的工具，体验它，然后迭代自己。` |
| 2 | chatbot-vs-agent | ChatBot vs Agent | module1 | 不变 |
| 3 | one-liner | 一句话区别 | module1 | 不变 |
| 4 | agent-capabilities | Agent 能做什么 | module1 | 不变 |
| 5 | agentic-loop | Agentic Loop | **module1** | **从 module2 提前**，CSS: module-2→module-1 |

### ACT 2: 承 — "眼见为实"（24张）

> 先用 Demo 证明暴论（Vibe Coding → Vibe Research），再回顾方法论，最后展示全景和进化方向

**Section A: Vibe Coding（4张）— module2**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 6 | vibe-coding | Vibe Coding | 不变 |
| 7 | vibe-coding-demo | Demo 流程 | 不变 |
| 8 | vibe-coding-anyone | 人人都能 VC | 不变 |
| 9 | vibe-coding-insight | VC 启发 | 不变 |

**Section B: Vibe Research（5张）— module2**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 10 | vibe-research | Vibe Research | 不变 |
| 11 | vibe-research-notebook | NotebookLM | 不变 |
| 12 | vibe-research-kimi | 云端智能体 | 不变 |
| 13 | vibe-research-paper | 复现论文四步法 | 不变 |
| 14 | vibe-research-insight | VR 启发 | 不变 |

**Section C: 方法论（1张）— module2**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 15 | context-engineering | Context Engineering | CSS: module-1→**module-2**；定位为 Demo 回顾而非前置方法论 |

**Section D: 终端智能体（3张）— module2**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 16 | agent-intro | OpenClaw | 不变 |
| 17 | agent-ecosystem | 更多选择 | **标语重写**：`找到适合你的入口，先试起来` |
| 18 | agent-insight | 冷静看 OpenClaw | 不变 |

**Section E: 基座模型（3张）— module3**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 19 | model-overview | 基座模型速览 | CSS: module-1→**module-3** |
| 20 | model-multimodal | 多模态模型 | CSS: module-1→**module-3**；**加行动引导** |
| 21 | model-philosophy | 选模型哲学 | CSS: module-1→**module-3** |

**Section F: 工具全景（5张）— module3**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 22 | tools-cover | 工具全景图 | 不变 |
| 23 | tools-terminal | 终端自主 Agent | 不变 |
| 24 | tools-ide | AI 开发环境 | 不变 |
| 25 | tools-nocode | 知识 & 研究平台 | 不变 |
| 26 | tools-landscape | 全景总览 | **标语重写**：`每个阶段都值得你试试不同的工具` |

**Section G: Agent 进化（3张）— module3，Act 3 的桥梁**

| # | id | 标题 | 变化 |
|---|-----|------|------|
| 27 | background-agent | Background Agent | CSS: module-1→**module-3**；**收尾重写**（去掉技术引言） |
| 28 | agent-skill | Agent Skill | CSS: module-1→**module-3** |
| 29 | agent-skill-architecture | 渐进式披露 | CSS: module-1→**module-3** |

### ACT 3: 转 — "泼冷水"（7张）

| # | id | 标题 | module | 变化 |
|---|-----|------|--------|------|
| 30 | risks-cover | 不灌鸡汤 | module4 | 不变 |
| 31 | risk-hallucination | 翻车：幻觉 | module4 | 不变 |
| 32 | risk-permission | 翻车：权限 | module4 | 不变 |
| 33 | risk-loop | 翻车：死循环 | module4 | 不变 |
| 34 | safety | 安全底线 | module4 | **加收口句**：`记住这三条，你就可以放心去试` |
| 35 | agent-beyond-code | 高潮 | module4 | 不变 |
| 36 | real-value | 真正值钱的能力 | module4 | **第4行加**"持续试新工具" |

### ACT 4: 合 — "带走什么"（4张）

| # | id | 标题 | module | 变化 |
|---|-----|------|--------|------|
| 37 | ending-judgment | 一个判断 | ending | 不变 |
| 38 | ending-action | 一个建议 | ending | **金句重写**：`试过之后你就不一样了` |
| 39 | ending-quote | 金句 | ending | **换引言** + 中文：`自己去试着造` |
| 40 | ending-contact | 联系方式 | ending | 不变 |

## 完整改动清单

### 1. `src/components/slides/Icebreaker.tsx`
末行 TypewriterText：
```
旧: "AI 从只有'嘴巴'长出了'手'——这堂课讲的是你们还不知道的事。"
新: "你需要的是——去试。找最新最好的工具，体验它，然后迭代自己。"
```

### 2. `src/data/slides.ts`
- 重新排列 41 个条目的顺序（按 ACT 1→4）
- 更新 module 归属（8 个 slide 变更 module）
- 更新 `moduleNames`：module1→核心概念、module2→实战与方法、module3→全景与进化
- 更新多条 speaker notes 以匹配新叙事顺序和核心哲学

### 3. 组件 CSS class 更新（8 个文件）
| 文件 | 旧 class | 新 class |
|------|----------|----------|
| `Case1Loop.tsx` | `module-2` | `module-1` |
| `ContextEngineering.tsx` | `module-1` | `module-2` |
| `ModelOverview.tsx` | `module-1` | `module-3` |
| `ModelMultimodal.tsx` | `module-1` | `module-3` |
| `ModelPhilosophy.tsx` | `module-1` | `module-3` |
| `BackgroundAgent.tsx` | `module-1` | `module-3` |
| `AgentSkill.tsx` | `module-1` | `module-3` |
| `AgentSkillArchitecture.tsx` | `module-1` | `module-3` |

### 4. 组件文案更新（6 个文件）
| 文件 | 改动 |
|------|------|
| `Safety.tsx` | 加收口句：放心去试 |
| `EndingAction.tsx` | 金句改为"试过之后你就不一样了" |
| `EndingQuote.tsx` | 换引言 + 中文"自己去试着造" |
| `Case1Workflow.tsx` | 标语改为"先试起来" |
| `BackgroundAgent.tsx` | 收尾改为通俗表达 |
| `ToolsLandscape.tsx` | 标语改为"值得你试试" |
| `ModelMultimodal.tsx` | 加行动引导 |
| `RealValue.tsx` | 第4行加"持续试新工具" |

### 5. `src/App.tsx`
- 更新注释分组（按 ACT 1→4）

### 6. `remotion/LectureVideo.tsx`
- 按新顺序重排 `slideComponents` 数组

### 7. `scripts/narration/scripts.json`
- 按新顺序重排 41 条讲稿，更新 `slideIndex`
- 重写 icebreaker 讲稿（匹配新屏幕文案和核心哲学）
- 修正过渡语（vibe-coding 不再说"从终端智能体"、agent-intro 不再说"欢迎进入实战模块"等）
- 修正工具名（agent-ecosystem：Kimi Claw→Gemini CLI、MaxClaw→云端Agent）
- context-engineering 讲稿从"最后一个重要概念"改为"刚才的Demo效果好不好，关键在这一步"

## 模块统计

| Module | 名称 | 包含 Slide 数 |
|--------|------|--------------|
| cover | 封面 | 2 |
| module1 | 核心概念 | 4 |
| module2 | 实战与方法 | 13 |
| module3 | 全景与进化 | 11 |
| module4 | 清醒认知 | 7 |
| ending | 结尾 | 4 |
| **总计** | | **41** |
