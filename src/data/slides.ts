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
  module1: '从\u201C会聊天\u201D到\u201C会干活\u201D',
  module2: "前沿案例拆解",
  module3: "工具全景图",
  module4: "清醒认知",
  ending: "结尾",
};

export const slides: SlideConfig[] = [
  // Module 0: Cover
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
    notes: "停顿3秒，让大家读完。然后说：这不是一堂教你写代码的课。",
  },

  // Module 1: 认知升级
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
    id: "model-overview",
    title: "基座模型速览",
    module: "module1",
    notes: "快速过完5个模型，不需要深入讲解每个。重点是让大家知道'不止一个选择'。",
  },
  {
    id: "model-philosophy",
    title: "选模型哲学",
    module: "module1",
    notes: "选员工而非选天才。不同任务用不同模型，就像公司不同岗位招不同的人。",
  },

  // Module 2: 案例拆解
  {
    id: "case1-cover",
    title: "案例1：OpenClaw",
    module: "module2",
    notes: "介绍OpenClaw背景：一个非程序员做的开发者工具。",
  },
  {
    id: "case1-workflow",
    title: "创作流程",
    module: "module2",
    notes: "强调4步流程中没有'写代码'这一步。人负责的是设计和决策。",
  },
  {
    id: "case1-loop",
    title: "Agentic Loop",
    module: "module2",
    notes: "这是Agent最核心的能力模式：写-测-错-改循环。Agent不怕出错，它会自己修。",
  },
  {
    id: "case1-insight",
    title: "案例1启发",
    module: "module2",
    notes: "停顿让大家思考：如果编程不再是门槛，什么才是门槛？",
  },
  {
    id: "case2-cover",
    title: "案例2：Vibe Coding",
    module: "module2",
    notes: "Vibe Coding = 跟着感觉写代码。现场演示前的预告。",
  },
  {
    id: "case2-tools",
    title: "Vibe Coding 工具",
    module: "module2",
    notes: "介绍将要使用的4个工具，各自特色。",
  },
  {
    id: "case2-demo",
    title: "Demo 流程",
    module: "module2",
    notes: "这里开始现场演示。如果时间紧张可以用录屏代替。",
  },
  {
    id: "case2-insight",
    title: "案例2启发",
    module: "module2",
    notes: "未来的编程更像当产品经理。引导大家思考自己的专业如何结合。",
  },
  {
    id: "case3-cover",
    title: "案例3：Vibe Research",
    module: "module2",
    notes: "从写代码转向研究学习场景。这对在座学生更直接相关。",
  },
  {
    id: "case3-notebook",
    title: "NotebookLM 演示",
    module: "module2",
    notes: "这里播放30秒音频片段。观察大家的反应。",
  },
  {
    id: "case3-kimi",
    title: "Kimi 超长上下文",
    module: "module2",
    notes: "整本教材变成你的私人顾问。现场可以演示把一本书扔进去提问。",
  },
  {
    id: "case3-insight",
    title: "案例3启发",
    module: "module2",
    notes: "信息获取方式的根本转变。这不是未来，这是现在。",
  },
  {
    id: "case4-cover",
    title: "案例4：无代码平台",
    module: "module2",
    notes: "最后一个案例：没有任何技术背景也能搭建AI产品。",
  },
  {
    id: "case4-flow",
    title: "搭建流程",
    module: "module2",
    notes: "四步走：人设→知识库→插件→上线。强调每一步都是拖拽完成的。",
  },
  {
    id: "case4-qrcode",
    title: "现场体验",
    module: "module2",
    notes: "请大家扫码体验。给1-2分钟时间让大家玩一下。",
  },
  {
    id: "case4-insight",
    title: "案例4启发",
    module: "module2",
    notes: "一个人+一个下午=一个产品。这在以前需要一个团队几周的时间。",
  },

  // Module 3: 工具全景
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
    notes: "IDE类工具更适合有一定开发基础的人。Cursor和Windsurf是目前最热门的。",
  },
  {
    id: "tools-nocode",
    title: "无代码 & 知识平台",
    module: "module3",
    notes: "这两类工具门槛最低，适合所有人。",
  },
  {
    id: "tools-landscape",
    title: "全景总览",
    module: "module3",
    notes: "把所有工具串起来看：从想法到产品的完整工作流。",
  },

  // Module 4: 清醒认知
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
    id: "real-value",
    title: "真正值钱的能力",
    module: "module4",
    notes: "这张表是全课的精华之一。左边是大家以为重要的，右边是真正重要的。",
  },
  {
    id: "context-engineering",
    title: "Context Engineering",
    module: "module4",
    notes: "用精准自然语言描述需求——这才是AI时代的核心技能。展示模糊vs精准prompt对比。",
  },

  // Ending
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
    notes: "全场最后一句话。停顿。然后感谢大家。",
  },
];
