interface QuoteBlockProps {
  quote: string;
  author?: string;
  className?: string;
}

export function QuoteBlock({ quote, author, className = "" }: QuoteBlockProps) {
  return (
    <div className={`text-center max-w-[1400px] mx-auto ${className}`}>
      <p className="text-quote text-5xl md:text-6xl font-bold leading-tight tracking-tight">
        "{quote}"
      </p>
      {author && (
        <p className="mt-8 text-xl text-[#a1a1aa]">— {author}</p>
      )}
    </div>
  );
}
