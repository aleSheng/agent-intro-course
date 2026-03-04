export type ModuleId = "cover" | "module1" | "module2" | "module3" | "module4" | "ending";

export interface SlideConfig {
  id: string;
  title: string;
  module: ModuleId;
  notes: string;
}

export const moduleColors: Record<ModuleId, string> = {
  cover: "#f5f5f5",
  module1: "#3b82f6",
  module2: "#a855f7",
  module3: "#22c55e",
  module4: "#ef4444",
  ending: "#06b6d4",
};

export const moduleNames: Record<ModuleId, string> = {
  cover: "封面",
  module1: "核心概念",
  module2: "实战与方法",
  module3: "全景与进化",
  module4: "清醒认知",
  ending: "结尾",
};

export const slides: SlideConfig[] = [
  // ═══════════════════════════════════════════
  // ACT 1: 起 — "颠覆认知"（6张）
  // ═══════════════════════════════════════════
  {
    id: "cover",
    title: "封面",
    module: "cover",
    notes: "开场白：欢迎大家来到这堂通识课。你们已经会用AI聊天了——这堂课讲的是你们还不知道的事。",
  },
  {
    id: "icebreaker",
    title: "破冰",
    module: "cover",
    notes: "先问：为了跟上AI，有多少人想过学编程？让大家举手。停顿3秒，观察反应。然后抛出暴论：跟上AI不需要学编程。最后一行是全课核心——'去试。找最新最好的工具，体验它，然后迭代自己。'——慢读，停顿让大家消化。",
  },
  {
    id: "chatbot-vs-agent",
    title: "ChatBot vs Agent",
    module: "module1",
    notes: "左右分栏对比。强调Agent有'手'——能操作电脑、读写文件、执行命令。",
  },
  {
    id: "one-liner",
    title: "一句话区别",
    module: "module1",
    notes: "军师 vs 将军的比喻。让大家记住这个画面。",
  },
  {
    id: "agent-capabilities",
    title: "Agent 能做什么",
    module: "module1",
    notes: "逐步展示Agent的6个核心能力。每个能力举一个具体例子。",
  },
  {
    id: "agentic-loop",
    title: "Agentic Loop",
    module: "module1",
    notes: "这是Agent最核心的能力模式：写-测-错-改循环。Agent不怕出错，它会自己修。概念高潮——为后续实战铺路。",
  },

  // ═══════════════════════════════════════════
  // ACT 2: 承 — "眼见为实"（24张）
  // ═══════════════════════════════════════════

  // Section A: Vibe Coding（4张）
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    module: "module2",
    notes: "概念讲完，进入实战。Vibe Coding = 跟着感觉写代码。只需要会描述需求，AI替你搞定实现。现场演示前的预告。",
  },
  {
    id: "vibe-coding-demo",
    title: "Demo 流程",
    module: "module2",
    notes: "这里开始现场演示。如果时间紧张可以用录屏代替。",
  },
  {
    id: "vibe-coding-anyone",
    title: "人人都能 Vibe Coding",
    module: "module2",
    notes: "三步走：自然语言描述需求→Agent自动生成→预览调整。全程只需要说人话。示例：用Cursor做个人简历网站。",
  },
  {
    id: "vibe-coding-insight",
    title: "Vibe Coding 启发",
    module: "module2",
    notes: "未来的编程更像当产品经理。一个人+一个下午+这些工具=一个真实可用的产品。引导大家思考自己的专业如何结合。",
  },

  // Section B: Vibe Research（5张）
  {
    id: "vibe-research",
    title: "Vibe Research",
    module: "module2",
    notes: "从写代码转向研究学习场景。涵盖学习、研究、论文复现。这对在座学生更直接相关。",
  },
  {
    id: "vibe-research-notebook",
    title: "NotebookLM 演示",
    module: "module2",
    notes: "这里播放30秒音频片段。观察大家的反应。",
  },
  {
    id: "vibe-research-kimi",
    title: "云端智能体：超长上下文",
    module: "module2",
    notes: "整本教材变成你的私人顾问。现场可以演示把一本书扔进去提问。类似产品很多：Kimi、ChatGPT、Gemini等都支持。",
  },
  {
    id: "vibe-research-paper",
    title: "复现论文四步法",
    module: "module2",
    notes: "四步：喂论文给AI提炼核心算法→生成实现计划→Agent逐步编码（Agentic Loop）→对比验证结果。每一步都有对应工具。",
  },
  {
    id: "vibe-research-insight",
    title: "Vibe Research 启发",
    module: "module2",
    notes: "信息获取方式的根本转变。加上论文复现的突破：以前读懂每行代码，现在只需读懂论文本身。核心能力回到理解问题本身。",
  },

  // Section C: 方法论（1张）
  {
    id: "context-engineering",
    title: "Context Engineering",
    module: "module2",
    notes: "回顾刚才的Demo——效果好不好，关键在这一步。展示模糊vs精准prompt对比。精准描述需求的能力，会在不断尝试中越磨越利。",
  },

  // Section D: 终端智能体（3张）
  {
    id: "agent-intro",
    title: "终端智能体：OpenClaw",
    module: "module2",
    notes: "从Demo转到终端智能体。以OpenClaw为代表。技术原理是 LLM + 截图 + 鼠标脚本的循环。很火但争议也大，而且配置复杂。",
  },
  {
    id: "agent-ecosystem",
    title: "更多选择",
    module: "module2",
    notes: "OpenClaw复杂度高，但有很多更好的替代品。nanoClaw极简入门、zeroclaw零配置、Gemini CLI百万上下文、云端Agent无需本地环境、Manus全能助手。",
  },
  {
    id: "agent-insight",
    title: "冷静看 OpenClaw",
    module: "module2",
    notes: "左右分栏：争议 vs 价值。技术门槛低、效率差、但降低了门槛和推动了开源。真正突破方向是更好的视觉编码器和 Accessibility Tree 理解。教大家用批判性思维看待技术热点。",
  },

  // Section E: 基座模型（3张）
  {
    id: "model-overview",
    title: "基座模型速览",
    module: "module3",
    notes: "讲完实战案例，转到底层引擎。快速过完6个模型（含 DeepSeek R1），重点是让大家知道'不止一个选择'。",
  },
  {
    id: "model-multimodal",
    title: "多模态模型",
    module: "module3",
    notes: "语言模型之外，还有语音、生图、生视频、多模态理解等模型。AI不只会写字，还会说话、画画、拍视频。这些能力与任何专业都相关，值得亲手试一试。",
  },
  {
    id: "model-philosophy",
    title: "选模型哲学",
    module: "module3",
    notes: "选员工而非选天才。不同任务用不同模型，就像公司不同岗位招不同的人。",
  },

  // Section F: 工具全景（5张）
  {
    id: "tools-cover",
    title: "工具全景图",
    module: "module3",
    notes: "知道有什么，才知道能做什么。快速过完整个工具生态。",
  },
  {
    id: "tools-terminal",
    title: "终端自主 Agent",
    module: "module3",
    notes: "这些工具是'数字全栈工程师'，能在终端里自主完成开发任务。",
  },
  {
    id: "tools-ide",
    title: "AI 开发环境",
    module: "module3",
    notes: "AI IDE不只是程序员的工具。Trae免费上手、Cursor是Vibe Coding标杆。不会编程的人也能通过自然语言驱动。",
  },
  {
    id: "tools-nocode",
    title: "知识 & 研究平台",
    module: "module3",
    notes: "NotebookLM、Kimi、Perplexity、ChatGPT/Claude——把信息变成知识，把知识变成行动。",
  },
  {
    id: "tools-landscape",
    title: "全景总览",
    module: "module3",
    notes: "把所有工具串起来看：从想法到产品的完整工作流。",
  },

  // Section G: Agent 进化（3张）— Act 3 的桥梁
  {
    id: "background-agent",
    title: "Background Agent",
    module: "module3",
    notes: "展示Agent的进化方向：从你盯着它干，到它在后台自主工作。核心概念来自 background-agents.com。强调三个阶段的区别：in the seat → in the loop → on the loop。",
  },
  {
    id: "agent-skill",
    title: "Agent Skill",
    module: "module3",
    notes: "Agent Skill = 给AI装技能包。一个文件夹（SKILL.md + 脚本 + 资源），Agent按需加载。重点讲清MCP vs Skill的区别：MCP给数据（送食材），Skill教方法（给菜谱）。2025.12成为开放标准，20+平台采用。",
  },
  {
    id: "agent-skill-architecture",
    title: "渐进式披露",
    module: "module3",
    notes: "Skill的核心架构：三层渐进式加载——元数据层（始终加载，~100 tokens）、指令层（激活时加载）、资源层（按需读取/执行）。效果：Agent知道数百技能但上下文零浪费。生态已爆发：27万+技能、20+平台互通。",
  },

  // ═══════════════════════════════════════════
  // ACT 3: 转 — "泼冷水"（7张）
  // ═══════════════════════════════════════════
  {
    id: "risks-cover",
    title: "不灌鸡汤",
    module: "module4",
    notes: "转折：前面讲了很多Agent能做什么，现在讲它不能做什么、会出什么问题。",
  },
  {
    id: "risk-hallucination",
    title: "翻车：幻觉",
    module: "module4",
    notes: "Agent会编造不存在的API和论文。举具体例子让大家警醒。",
  },
  {
    id: "risk-permission",
    title: "翻车：权限风险",
    module: "module4",
    notes: "这是最危险的：Agent有权限操作你的电脑。一个模糊指令可能删掉重要文件。",
  },
  {
    id: "risk-loop",
    title: "翻车：死循环",
    module: "module4",
    notes: "Agent不是万能的，它会卡在死循环里。这时候需要人介入。",
  },
  {
    id: "safety",
    title: "安全底线",
    module: "module4",
    notes: "三条安全原则必须记住：沙盒、人确认、不给密钥。",
  },
  {
    id: "agent-beyond-code",
    title: "Agent 不只写代码",
    module: "module4",
    notes: "2026年2月，Claude+Palantir在军事行动中完成了完整Agent Loop。与Agentic Loop完全相同的模式，但作用域从代码变成了现实世界。引导学生思考：技术无善恶，使用者的判断力决定它是工具还是武器。",
  },
  {
    id: "real-value",
    title: "真正值钱的能力",
    module: "module4",
    notes: "这张表是全课的精华之一。左边是大家以为重要的，右边是真正重要的。收口强调：把能力构建在AI之上，技术每进一步你就水涨船高。",
  },

  // ═══════════════════════════════════════════
  // ACT 4: 合 — "带走什么"（4张）
  // ═══════════════════════════════════════════
  {
    id: "ending-judgment",
    title: "一个判断",
    module: "ending",
    notes: "造东西门槛↓ 造好东西门槛不变。品味和判断力越来越稀缺。",
  },
  {
    id: "ending-action",
    title: "一个建议",
    module: "ending",
    notes: "布置'作业'：今天回去挑一个真实场景试一试。",
  },
  {
    id: "ending-quote",
    title: "结尾金句",
    module: "ending",
    notes: "全场的压轴金句。停顿5秒，让大家消化。然后说'感谢大家'，进入最后一页联系方式。",
  },
  {
    id: "ending-contact",
    title: "联系方式",
    module: "ending",
    notes: "展示微信公众号二维码，引导大家关注。可以留30秒让大家扫码。",
  },
];
