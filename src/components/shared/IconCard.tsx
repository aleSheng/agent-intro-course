import { useState } from "react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
  className?: string;
  delay?: number;
  url?: string;
  command?: string;
}

export function IconCard({ icon, title, description, color = "#3b82f6", className, delay = 0, url, command }: IconCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!command) return;
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <div
      className={cn(
        "bg-[#141416] border border-[#27272a] rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col gap-3 lg:gap-4 animate-fade-in-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="text-2xl lg:text-4xl w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-[#f5f5f5]">{title}</h3>
      <p className="text-lg text-[#a1a1aa] leading-relaxed">{description}</p>

      {(url || command) && (
        <div className="mt-auto pt-2 flex flex-col gap-2 border-t border-[#27272a]">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm flex items-center gap-1.5 hover:underline"
              style={{ color }}
              onClick={(e) => e.stopPropagation()}
            >
              <span>🔗</span>
              <span className="truncate">{url.replace(/^https?:\/\//, '')}</span>
            </a>
          )}
          {command && (
            <div className="flex items-center gap-2 bg-[#0a0a0b] rounded-lg px-3 py-2">
              <code className="text-sm text-[#a1a1aa] font-mono truncate flex-1">{command}</code>
              <button
                onClick={handleCopy}
                className="text-xs px-2 py-1 rounded shrink-0 transition-colors"
                style={{
                  backgroundColor: copied ? '#22c55e30' : `${color}20`,
                  color: copied ? '#22c55e' : color,
                }}
              >
                {copied ? '已复制' : '复制'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
