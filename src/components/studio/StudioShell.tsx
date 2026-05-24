import { ReactNode } from "react";
import { StudioSidebar } from "./StudioSidebar";

export function StudioShell({ children, title, subtitle }: { children: ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="min-h-screen flex bg-background">
      <StudioSidebar />
      <main className="flex-1 min-w-0">
        <div className="sticky top-0 z-10 glass-strong border-b border-border px-6 py-4">
          <div className="font-serif text-2xl tracking-tight">{title}</div>
          {subtitle && <div className="text-sm text-ink-soft mt-0.5">{subtitle}</div>}
        </div>
        <div className="p-6 md:p-10">{children}</div>
      </main>
    </div>
  );
}
