import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-7 h-7 rounded-full bg-foreground text-background">
                <Sparkles className="w-3.5 h-3.5" />
              </span>
              <span className="font-serif text-xl">Lumen</span>
            </div>
            <p className="mt-4 text-sm text-ink-soft max-w-xs">
              The AI learning engine that turns any lecture, document or note into structured, source-accurate study material.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">Product</div>
              <ul className="space-y-2 text-ink-soft">
                <li><Link to="/dashboard">Studio</Link></li>
                <li><Link to="/workspace">Workspace</Link></li>
                <li><a href="#features">Output modes</a></li>
                <li><a href="#subjects">Subjects</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">Promise</div>
              <ul className="space-y-2 text-ink-soft">
                <li><a href="#trust">Source-locked</a></li>
                <li>Private uploads</li>
                <li>No hallucinations</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-3">Get started</div>
            <Link to="/dashboard" className="inline-flex rounded-full bg-foreground text-background px-5 py-2.5 text-sm hover:opacity-90 transition">
              Open the Studio →
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">No account. No friction. Just upload and learn.</p>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Lumen Notes</span>
          <span>Made for learners.</span>
        </div>
      </div>
    </footer>
  );
}
