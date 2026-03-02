export interface AIModel {
  name: string;
  provider: string;
  color: string;
  strength: string;
  useCase: string;
}

export const models: AIModel[] = [
  {
    name: "Claude Opus 4.6",
    provider: "Anthropic",
    color: "#d97706",
    strength: "代码精度 + 超长文本零遗漏",
    useCase: "复杂工程项目、几十万字文档分析",
  },
  {
    name: "Gemini 3.1 Pro",
    provider: "Google",
    color: "#4285f4",
    strength: "原生多模态（视频/音频/代码/文本）",
    useCase: "需要同时处理多种媒体格式的任务",
  },
  {
    name: "GPT 5.3",
    provider: "OpenAI",
    color: "#10a37f",
    strength: "综合推理天花板",
    useCase: "跨学科复杂问题、模糊需求的创意发散",
  },
  {
    name: "Qwen 3.5",
    provider: "Alibaba",
    color: "#ff6a00",
    strength: "开源 + 本土化 + 工具调用生态",
    useCase: "企业私有部署、国内业务深度集成",
  },
  {
    name: "Kimi 2.5",
    provider: "月之暗面",
    color: "#6366f1",
    strength: "超长上下文记忆",
    useCase: "一次性喂入整本书/整个代码库做分析",
  },
];

export interface Tool {
  name: string;
  description: string;
  category: "terminal-agent" | "ai-ide" | "no-code" | "knowledge";
}

export const tools: Tool[] = [
  // Terminal Agents
  { name: "Claude Code", description: "Anthropic官方出品，代码质量高，权限管控严格", category: "terminal-agent" },
  { name: "OpenClaw", description: "社区驱动，非程序员也能驾驭的终端Agent标杆", category: "terminal-agent" },
  { name: "Kimi Claw", description: "月之暗面出品，擅长处理超长上下文的代码项目", category: "terminal-agent" },
  { name: "MaxClaw", description: "极致自动化，擅长端到端完成复杂工程任务", category: "terminal-agent" },
  // AI IDEs
  { name: "Trae", description: "字节跳动出品的AI IDE，多文件Composer能力强", category: "ai-ide" },
  { name: "VSCode + AI", description: "最广泛的开发者生态，Copilot/Cline等插件丰富", category: "ai-ide" },
  { name: "Cursor", description: "原生AI IDE标杆，适合沉浸式Vibe Coding", category: "ai-ide" },
  { name: "Windsurf", description: "下一代 AI IDE，深度集成 Agent 能力", category: "ai-ide" },
  // No-code
  { name: "扣子(Coze)", description: "字节系，拖拽式搭建，发布即上线，中文生态丰富", category: "no-code" },
  { name: "Dify", description: "开源，适合私有化部署，企业级Agent搭建", category: "no-code" },
  // Knowledge
  { name: "NotebookLM", description: "Google出品，论文/书籍秒变播客和交互式笔记", category: "knowledge" },
  { name: "Kimi", description: "超长上下文，把整本书/整个项目变成你的私人顾问", category: "knowledge" },
];
