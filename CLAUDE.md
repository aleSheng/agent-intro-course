# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A web-based interactive slide presentation for a university general education course on AI Agents. It replaces traditional PPT with a React-based 41-slide presentation (1920×1080 native resolution, responsive scaling). Content is in Chinese.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR (http://localhost:5173/)
npm run build      # TypeScript check + Vite production build → dist/
npm run lint       # ESLint (flat config format)
npm run preview    # Serve production build locally
```

No test framework is configured.

## Architecture

**Tech stack:** Vite 7 + React 19 + TypeScript 5.9 + TailwindCSS v4 (dark theme, `@theme` custom variables)

**Path alias:** `@/` maps to `./src/`

### Key directories

- `src/components/slides/` — 41 individual slide components (one per file), barrel-exported via `index.ts`
- `src/components/layout/` — `SlideContainer` (responsive 16:9 scaling via `transform: scale()`) and `ProgressBar`
- `src/components/shared/` — Reusable presentation components: `AnimatedText`, `TerminalWindow`, `IconCard`, `Timeline`, `QuoteBlock`
- `src/hooks/` — `useSlideNavigation` (hash-based URL state), `useKeyboardControl` (keyboard shortcuts), `useFullscreen`
- `src/data/slides.ts` — Slide metadata array (id, title, module, speaker notes) and module color definitions
- `src/data/models.ts` — AI model and tool comparison data

### Rendering pipeline

```
App.tsx
  → useSlideNavigation() → currentSlide index
  → slides[currentSlide] → SlideConfig metadata
  → slideComponents[config.id]() → slide React component
  → SlideContainer → responsive scale wrapper
```

### Navigation model

- URL hash-based (`#0`, `#1`, etc.) managed by `useSlideNavigation`
- Keyboard: `→/Space/PageDown` next, `←/PageUp` prev, `F` fullscreen, `O` overview grid, `G+digits` jump to slide, `N` toggle notes
- Click zones: invisible left/right 20% regions for mouse navigation

### Module structure (6 modules, 41 slides)

| Module | Theme | Slides | Color |
|--------|-------|--------|-------|
| Cover | Opening | 2 | White (#f5f5f5) |
| Module 1 | 从"会聊天"到"会干活" | 9 | Blue (#3b82f6) |
| Module 2 | AI Agent 实战 (终端智能体 / Vibe Coding / Vibe Research) | 13 | Purple (#a855f7) |
| Module 3 | 工具全景图 | 5 | Green (#22c55e) |
| Module 4 | 清醒认知 | 8 | Red (#ef4444) |
| Ending | Call to action | 4 | Cyan (#06b6d4) |

### Styling patterns

- Dark theme: background `#0a0a0b`, foreground `#f5f5f5`
- Fonts: Inter + Noto Sans SC (display), JetBrains Mono (monospace)
- CSS animations defined in `index.css`: `fadeInUp`, `scaleIn`, `slideInLeft`, `float`
- Module-specific color theming via CSS custom properties (`.module-1`, `.module-2`, etc.)
- Slide padding convention: `80px 120px`

### Known issues

- `useSlideNavigation` uses state values instead of updater functions (fast presses may lose events)
- `N` key shortcut defined in UI but not wired in `useKeyboardControl`
- `@keyframes spin` duplicated in Case1Loop/RiskLoop (conflicts with Tailwind's built-in)
- Some unused dependencies: remotion, lucide-react, class-variance-authority, @radix-ui/react-slot
- Some unused components: Timeline.tsx, QuoteBlock.tsx
