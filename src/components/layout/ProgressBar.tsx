import type { ModuleId } from "@/data/slides";
import { moduleColors } from "@/data/slides";

interface ProgressBarProps {
  current: number;
  total: number;
  module: ModuleId;
}

export function ProgressBar({ current, total, module }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;
  const color = moduleColors[module];

  return (
    <>
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      />
      <div className="fixed bottom-3 right-6 text-sm text-[#a1a1aa] z-50 font-mono">
        {current + 1} / {total}
      </div>
    </>
  );
}
