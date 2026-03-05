import React from "react";
import { useVideoConfig, Sequence, staticFile, AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { Audio } from "@remotion/media";
import { TRANSITION_FRAMES } from "./config";

// Import all slide components
import {
  Cover,
  Icebreaker,
  ProofPeter,
  ChatbotVsAgent,
  BackgroundAgent,
  AgentSkill,
  ModelOverview,
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

// Ordered slide components matching slides[] from src/data/slides.ts
const slideComponents: React.FC[] = [
  // ACT 1: 起 — 颠覆认知（5张）
  Cover,
  Icebreaker,
  ProofPeter,
  ChatbotVsAgent,
  Case1Loop,          // agentic-loop
  // ACT 2: 承 — 眼见为实（21张）
  Case2Cover,         // vibe-coding
  Case2Demo,          // vibe-coding-demo
  Case4Flow,          // vibe-coding-anyone
  Case2Insight,       // vibe-coding-insight
  Case3Cover,         // vibe-research
  Case3Notebook,      // vibe-research-notebook
  Case3Kimi,          // vibe-research-kimi
  PaperWorkflow,      // vibe-research-paper
  Case3Insight,       // vibe-research-insight
  ContextEngineering, // context-engineering
  Case1Cover,         // agent-intro
  Case1Workflow,      // agent-ecosystem
  Case1Insight,       // agent-insight
  ModelOverview,      // model-overview (含多模态+选模型哲学)
  ToolsCover,         // tools-cover
  ToolsTerminal,      // tools-terminal
  ToolsIDE,           // tools-ide
  ToolsNocodeKnowledge, // tools-nocode
  ToolsLandscape,     // tools-landscape
  BackgroundAgent,    // background-agent
  AgentSkill,         // agent-skill (含架构)
  // ACT 3: 转 — 泼冷水（7张）
  RisksCover,
  RiskHallucination,
  RiskPermission,
  RiskLoop,
  Safety,
  AgentBeyondCode,
  RealValue,
  // ACT 4: 合 — 带走什么（4张）
  EndingJudgment,
  EndingAction,
  EndingQuote,
  EndingContact,
];

export type LectureVideoProps = {
  durations: number[];
};

export const LectureVideo: React.FC<LectureVideoProps> = ({ durations }) => {
  const { fps } = useVideoConfig();

  // Guard: durations not yet populated by calculateMetadata
  if (durations.length !== slideComponents.length) {
    return (
      <AbsoluteFill style={{ backgroundColor: "#0a0a0b", color: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontSize: 32 }}>Waiting for audio durations...</p>
      </AbsoluteFill>
    );
  }

  // Calculate cumulative start frames for audio (accounting for transitions)
  const audioStartFrames: number[] = [];
  let cumulativeFrame = 0;
  for (let i = 0; i < durations.length; i++) {
    audioStartFrames.push(cumulativeFrame);
    const slideDurationFrames = Math.ceil(durations[i] * fps) + fps; // +1s buffer
    cumulativeFrame += slideDurationFrames;
    if (i < durations.length - 1) {
      cumulativeFrame -= TRANSITION_FRAMES; // fade transition overlap
    }
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a0a0b" }}>
      {/* Visual: slide transitions */}
      <TransitionSeries>
        {slideComponents.map((SlideComponent, i) => {
          const durationInFrames =
            Math.ceil(durations[i] * fps) + fps; // audio duration + 1s buffer
          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <TransitionSeries.Transition
                  presentation={fade()}
                  timing={linearTiming({
                    durationInFrames: TRANSITION_FRAMES,
                  })}
                />
              )}
              <TransitionSeries.Sequence durationInFrames={durationInFrames}>
                <AbsoluteFill style={{ backgroundColor: "#0a0a0b" }}>
                  <SlideComponent />
                </AbsoluteFill>
              </TransitionSeries.Sequence>
            </React.Fragment>
          );
        })}
      </TransitionSeries>

      {/* Audio: one track per slide */}
      {durations.map((_, i) => (
        <Sequence
          key={`audio-${i}`}
          from={audioStartFrames[i]}
          layout="none"
        >
          <Audio
            src={staticFile(`audio/slide-${String(i).padStart(2, "0")}.wav`)}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
