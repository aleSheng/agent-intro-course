import { useState, useCallback, type ReactNode } from "react";
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
  ModelOverview,
  ModelPhilosophy,
  Case1Cover,
  Case1Workflow,
  Case1Loop,
  Case1Insight,
  Case2Cover,
  Case2Tools,
  Case2Demo,
  Case2Insight,
  Case3Cover,
  Case3Notebook,
  Case3Kimi,
  Case3Insight,
  Case4Cover,
  Case4Flow,
  Case4QRCode,
  Case4Insight,
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
  RealValue,
  ContextEngineering,
  EndingJudgment,
  EndingAction,
  EndingQuote,
} from "@/components/slides";

const slideComponents: Record<string, () => ReactNode> = {
  cover: () => <Cover />,
  icebreaker: () => <Icebreaker />,
  "chatbot-vs-agent": () => <ChatbotVsAgent />,
  "one-liner": () => <OneLiner />,
  "agent-capabilities": () => <AgentCapabilities />,
  "model-overview": () => <ModelOverview />,
  "model-philosophy": () => <ModelPhilosophy />,
  "case1-cover": () => <Case1Cover />,
  "case1-workflow": () => <Case1Workflow />,
  "case1-loop": () => <Case1Loop />,
  "case1-insight": () => <Case1Insight />,
  "case2-cover": () => <Case2Cover />,
  "case2-tools": () => <Case2Tools />,
  "case2-demo": () => <Case2Demo />,
  "case2-insight": () => <Case2Insight />,
  "case3-cover": () => <Case3Cover />,
  "case3-notebook": () => <Case3Notebook />,
  "case3-kimi": () => <Case3Kimi />,
  "case3-insight": () => <Case3Insight />,
  "case4-cover": () => <Case4Cover />,
  "case4-flow": () => <Case4Flow />,
  "case4-qrcode": () => <Case4QRCode />,
  "case4-insight": () => <Case4Insight />,
  "tools-cover": () => <ToolsCover />,
  "tools-terminal": () => <ToolsTerminal />,
  "tools-ide": () => <ToolsIDE />,
  "tools-nocode": () => <ToolsNocodeKnowledge />,
  "tools-landscape": () => <ToolsLandscape />,
  "risks-cover": () => <RisksCover />,
  "risk-hallucination": () => <RiskHallucination />,
  "risk-permission": () => <RiskPermission />,
  "risk-loop": () => <RiskLoop />,
  safety: () => <Safety />,
  "real-value": () => <RealValue />,
  "context-engineering": () => <ContextEngineering />,
  "ending-judgment": () => <EndingJudgment />,
  "ending-action": () => <EndingAction />,
  "ending-quote": () => <EndingQuote />,
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

  const current = slides[currentSlide];
  const renderSlide = slideComponents[current.id];

  return (
    <div
      className="h-screen w-full overflow-hidden bg-[#0a0a0b] select-none"
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

      {/* Toggle notes button */}
      <button
        onClick={() => setShowNotes((v) => !v)}
        className="fixed bottom-4 right-4 z-40 w-8 h-8 rounded-full bg-[#27272a] text-[#71717a] text-xs hover:bg-[#3f3f46] transition-colors flex items-center justify-center"
        title="Toggle speaker notes (N)"
      >
        N
      </button>
    </div>
  );
}

export default App;
