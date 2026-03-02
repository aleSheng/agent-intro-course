import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
  className?: string;
  delay?: number;
}

export function IconCard({ icon, title, description, color = "#3b82f6", className, delay = 0 }: IconCardProps) {
  return (
    <div
      className={cn(
        "bg-[#141416] border border-[#27272a] rounded-2xl p-8 flex flex-col gap-4 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="text-4xl w-16 h-16 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#f5f5f5]">{title}</h3>
      <p className="text-lg text-[#a1a1aa] leading-relaxed">{description}</p>
    </div>
  );
}
