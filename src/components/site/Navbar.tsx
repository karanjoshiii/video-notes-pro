import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(1100px,calc(100%-2rem))]">
      <nav className="glass-strong rounded-full px-3 py-2 flex items-center justify-between shadow-[0_8px_30px_-12px_oklch(0.2_0.05_260/0.18)]">
        <Link to="/" className="flex items-center gap-2 pl-3">
          <span className="relative grid place-items-center w-7 h-7 rounded-full bg-foreground text-background">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="font-serif text-xl tracking-tight">Lumen</span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground ml-1">AI Notes</span>
        </Link>
        <div className="hidden md:flex items-center gap-7 text-sm text-ink-soft">
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#how" className="hover:text-foreground transition">How it works</a>
          <a href="#subjects" className="hover:text-foreground transition">Subjects</a>
          <a href="#trust" className="hover:text-foreground transition">Accuracy</a>
        </div>
        <Link
          to="/dashboard"
          className="rounded-full bg-foreground text-background text-sm px-4 py-2 hover:opacity-90 transition"
        >
          Open Studio →
        </Link>
      </nav>
    </header>
  );
}
