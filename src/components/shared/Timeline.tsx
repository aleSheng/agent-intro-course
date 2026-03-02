import { cn } from "@/lib/utils";

interface TimelineItem {
  icon: string;
  label: string;
}

interface TimelineProps {
  items: TimelineItem[];
  color?: string;
  className?: string;
  direction?: "horizontal" | "vertical";
}

export function Timeline({ items, color = "#3b82f6", className, direction = "vertical" }: TimelineProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <div
      className={cn(
        "flex gap-2",
        isHorizontal ? "flex-row items-center" : "flex-col",
        className
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "flex items-center gap-4 animate-fade-in-up",
            isHorizontal ? "flex-col text-center flex-1" : "flex-row"
          )}
          style={{ animationDelay: `${i * 200}ms` }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shrink-0"
            style={{ backgroundColor: `${color}20`, border: `2px solid ${color}` }}
          >
            {item.icon}
          </div>
          {!isHorizontal && (
            <div className="flex flex-col gap-1">
              <span className="text-xl font-semibold text-[#f5f5f5]">{item.label}</span>
            </div>
          )}
          {isHorizontal && (
            <span className="text-lg font-medium text-[#f5f5f5] mt-3">{item.label}</span>
          )}
          {isHorizontal && i < items.length - 1 && (
            <div className="hidden" /> /* connector handled by gap */
          )}
        </div>
      ))}
    </div>
  );
}
