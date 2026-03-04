import React from "react";
import { Composition, staticFile } from "remotion";
import type { CalculateMetadataFunction } from "remotion";
import { LectureVideo, type LectureVideoProps } from "./LectureVideo";
import { VIDEO_FPS, VIDEO_WIDTH, VIDEO_HEIGHT, TRANSITION_FRAMES } from "./config";
import "../src/index.css";
import "./overrides/remotion-fixes.css";

const calculateMetadata: CalculateMetadataFunction<LectureVideoProps> = async ({
  props,
  abortSignal,
}) => {
  // Fetch durations.json via staticFile() (reads from public/ at runtime)
  const response = await fetch(staticFile("audio/durations.json"), {
    signal: abortSignal,
  });
  const durations: number[] = await response.json();

  const fps = VIDEO_FPS;
  // Total frames = sum of (each slide's audio + 1s buffer) - transition overlaps
  const totalSlideFrames = durations.reduce(
    (sum, d) => sum + Math.ceil(d * fps) + fps,
    0
  );
  const totalTransitionOverlap = (durations.length - 1) * TRANSITION_FRAMES;
  const durationInFrames = totalSlideFrames - totalTransitionOverlap;

  return {
    durationInFrames,
    props: {
      ...props,
      durations,
    },
  };
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LectureVideo"
      component={LectureVideo}
      durationInFrames={30 * 60 * 70} // Placeholder: 70 min, overridden by calculateMetadata
      fps={VIDEO_FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
      defaultProps={{
        durations: [],
      }}
      calculateMetadata={calculateMetadata}
    />
  );
};
