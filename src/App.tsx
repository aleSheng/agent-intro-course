import { useState, useCallback, useRef, useEffect, type ReactNode } from "react";
import { SlideContainer } from "@/components/layout/SlideContainer";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useKeyboardControl } from "@/hooks/useKeyboardControl";
import { useFullscreen } from "@/hooks/useFullscreen";
import { slides, moduleColors } from "@/data/slides";
import {
  Cover,
  Icebreaker,
  ChatbotVsAgent,
  OneLiner,
  AgentCapabilities,
  BackgroundAgent,
  AgentSkill,
  AgentSkillArchitecture,
  ModelOverview,
  ModelMultimodal,
  ModelPhilosophy,
  Case1Cover,
  Case1Workflow,
  Case1Loop,
  Case1Insight,
  Case2Cover,
  Case2Demo,
  Case2Insight,
  Case3Cover,
  Case3Notebook,
  Case3Kimi,
  Case3Insight,
  Case4Flow,
  PaperWorkflow,
  ToolsCover,
  ToolsTerminal,
  ToolsIDE,
  ToolsNocodeKnowledge,
  ToolsLandscape,
  RisksCover,
  RiskHallucination,
  RiskPermission,
  RiskLoop,
  Safety,
  AgentBeyondCode,
  RealValue,
  ContextEngineering,
  EndingJudgment,
  EndingAction,
  EndingQuote,
  EndingContact,
} from "@/components/slides";

const slideComponents: Record<string, () => ReactNode> = {
  // ACT 1: 起 — 颠覆认知
  cover: () => <Cover />,
  icebreaker: () => <Icebreaker />,
  "chatbot-vs-agent": () => <ChatbotVsAgent />,
  "one-liner": () => <OneLiner />,
  "agent-capabilities": () => <AgentCapabilities />,
  "agentic-loop": () => <Case1Loop />,
  // ACT 2: 承 — 眼见为实
  "vibe-coding": () => <Case2Cover />,
  "vibe-coding-demo": () => <Case2Demo />,
  "vibe-coding-anyone": () => <Case4Flow />,
  "vibe-coding-insight": () => <Case2Insight />,
  "vibe-research": () => <Case3Cover />,
  "vibe-research-notebook": () => <Case3Notebook />,
  "vibe-research-kimi": () => <Case3Kimi />,
  "vibe-research-paper": () => <PaperWorkflow />,
  "vibe-research-insight": () => <Case3Insight />,
  "context-engineering": () => <ContextEngineering />,
  "agent-intro": () => <Case1Cover />,
  "agent-ecosystem": () => <Case1Workflow />,
  "agent-insight": () => <Case1Insight />,
  "model-overview": () => <ModelOverview />,
  "model-multimodal": () => <ModelMultimodal />,
  "model-philosophy": () => <ModelPhilosophy />,
  "tools-cover": () => <ToolsCover />,
  "tools-terminal": () => <ToolsTerminal />,
  "tools-ide": () => <ToolsIDE />,
  "tools-nocode": () => <ToolsNocodeKnowledge />,
  "tools-landscape": () => <ToolsLandscape />,
  "background-agent": () => <BackgroundAgent />,
  "agent-skill": () => <AgentSkill />,
  "agent-skill-architecture": () => <AgentSkillArchitecture />,
  // ACT 3: 转 — 泼冷水
  "risks-cover": () => <RisksCover />,
  "risk-hallucination": () => <RiskHallucination />,
  "risk-permission": () => <RiskPermission />,
  "risk-loop": () => <RiskLoop />,
  safety: () => <Safety />,
  "agent-beyond-code": () => <AgentBeyondCode />,
  "real-value": () => <RealValue />,
  // ACT 4: 合 — 带走什么
  "ending-judgment": () => <EndingJudgment />,
  "ending-action": () => <EndingAction />,
  "ending-quote": () => <EndingQuote />,
  "ending-contact": () => <EndingContact />,
};

function OverviewGrid({
  onSelect,
  currentSlide,
}: {
  onSelect: (i: number) => void;
  currentSlide: number;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0b]/95 backdrop-blur-md overflow-auto p-8">
      <h2 className="text-2xl font-bold text-[#f5f5f5] mb-6">
        幻灯片总览（按 O 或 Escape 退出）
      </h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {slides.map((slide, i) => {
          const color = moduleColors[slide.module];
          return (
            <button
              key={slide.id}
              onClick={() => onSelect(i)}
              className={`
                group relative aspect-video rounded-lg border-2 overflow-hidden
                transition-all hover:scale-105 hover:shadow-lg cursor-pointer
                ${i === currentSlide ? "border-white" : "border-[#27272a] hover:border-[#52525b]"}
              `}
              style={{ backgroundColor: "#141416" }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: color }}
              />
              <div className="p-2 flex flex-col items-center justify-center h-full">
                <span className="text-xs font-mono text-[#71717a]">
                  {i + 1}
                </span>
                <span className="text-[10px] text-[#a1a1aa] text-center line-clamp-2 mt-1">
                  {slide.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SpeakerNotes({ notes }: { notes: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#141416]/90 backdrop-blur border-t border-[#27272a] px-6 py-3">
      <p className="text-sm text-[#a1a1aa] max-w-[1200px] mx-auto">
        <span className="text-[#71717a] font-mono mr-2">备注:</span>
        {notes}
      </p>
    </div>
  );
}

function App() {
  const { currentSlide, goTo, next, prev } = useSlideNavigation({ totalSlides: slides.length });
  const [showOverview, setShowOverview] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const { toggleFullscreen } = useFullscreen();

  const handleOverview = useCallback(() => {
    setShowOverview((v) => !v);
  }, []);

  useKeyboardControl({
    onNext: next,
    onPrev: prev,
    onToggleFullscreen: toggleFullscreen,
    onToggleOverview: handleOverview,
    onGoTo: (n: number) => {
      if (n >= 1 && n <= slides.length) goTo(n - 1);
    },
  });

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(dx) < 50) return;
      if (dx < 0) next();
      else prev();
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  const current = slides[currentSlide];
  const renderSlide = slideComponents[current.id];

  return (
    <div
      className="min-h-dvh w-full overflow-x-hidden bg-[#0a0a0b] select-none"
      onDoubleClick={toggleFullscreen}
    >
      {showOverview && (
        <OverviewGrid
          currentSlide={currentSlide}
          onSelect={(i) => {
            goTo(i);
            setShowOverview(false);
          }}
        />
      )}

      <SlideContainer key={current.id}>
        {renderSlide ? renderSlide() : (
          <div className="slide flex items-center justify-center">
            <p className="text-2xl text-[#71717a]">Slide: {current.title}</p>
          </div>
        )}
      </SlideContainer>

      <ProgressBar
        current={currentSlide}
        total={slides.length}
        module={current.module}
      />

      {showNotes && current.notes && <SpeakerNotes notes={current.notes} />}

      {/* Navigation touch zones */}
      <div
        className="fixed left-0 top-0 w-1/5 h-full z-30 cursor-w-resize opacity-0"
        onClick={prev}
      />
      <div
        className="fixed right-0 top-0 w-1/5 h-full z-30 cursor-e-resize opacity-0"
        onClick={next}
      />

      {/* Mobile navigation buttons */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6 md:hidden">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur text-white/70 text-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          ←
        </button>
        <span className="text-xs text-white/40 font-mono tabular-nums">
          {currentSlide + 1}/{slides.length}
        </span>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white/10 backdrop-blur text-white/70 text-xl flex items-center justify-center active:scale-95 transition-transform"
        >
          →
        </button>
      </div>

      {/* Toggle notes button */}
      <button
        onClick={() => setShowNotes((v) => !v)}
        className="fixed bottom-4 right-4 z-40 w-8 h-8 rounded-full bg-[#27272a] text-[#71717a] text-xs hover:bg-[#3f3f46] transition-colors items-center justify-center hidden md:flex"
        title="Toggle speaker notes (N)"
      >
        N
      </button>
    </div>
  );
}

export default App;
