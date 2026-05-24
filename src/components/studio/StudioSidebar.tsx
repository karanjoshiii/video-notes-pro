import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Upload, BookMarked, Sparkles, MessageSquare, BarChart3, Settings } from "lucide-react";

const items = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/upload", label: "Upload center", icon: Upload },
  { to: "/workspace", label: "Workspace", icon: Sparkles },
  { to: "/notes", label: "Saved notes", icon: BookMarked },
  { to: "/assistant", label: "AI Assistant", icon: MessageSquare },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
];

export function StudioSidebar() {
  const path = useRouterState({ select: (r) => r.location.pathname });
  return (
    <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-border bg-sidebar p-4 sticky top-0 h-screen">
      <Link to="/" className="flex items-center gap-2 px-2 py-2">
        <span className="grid place-items-center w-7 h-7 rounded-full bg-foreground text-background">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <span className="font-serif text-xl">Lumen</span>
      </Link>
      <nav className="mt-6 flex flex-col gap-1">
        {items.map((it) => {
          const Icon = it.icon;
          const active = path === it.to;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition ${
                active ? "bg-surface text-foreground shadow-soft" : "text-ink-soft hover:bg-surface/60 hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {it.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto">
        <div className="glass rounded-2xl p-4">
          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Today</div>
          <div className="mt-2 font-serif text-2xl">3h 24m</div>
          <div className="text-xs text-ink-soft mt-1">saved by Lumen this week</div>
        </div>
        <Link to="/" className="mt-3 flex items-center gap-2 px-3 py-2 text-sm text-ink-soft hover:text-foreground">
          <Settings className="w-4 h-4" /> Preferences
        </Link>
      </div>
    </aside>
  );
}
