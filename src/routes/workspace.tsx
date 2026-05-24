import { createFileRoute } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";
import { Copy, Download, Layers, HelpCircle, Languages, Headphones, FileText } from "lucide-react";

export const Route = createFileRoute("/workspace")({
  head: () => ({ meta: [{ title: "Workspace — Lumen" }] }),
  component: Workspace,
});

function Workspace() {
  return (
    <StudioShell title="AI Summary Viewer" subtitle="Notes appear here after your source is processed.">
      <div className="grid lg:grid-cols-[1fr_280px] gap-6">
        <article className="glass rounded-3xl p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Pill>Detailed notes</Pill>
            <Pill>Subject: auto-detect</Pill>
            <Pill>Source-locked</Pill>
          </div>

          <div className="text-center py-20 border border-dashed border-border rounded-2xl">
            <div className="inline-flex w-12 h-12 rounded-full bg-foreground/5 grid place-items-center">
              <FileText className="w-5 h-5 text-ink-soft" />
            </div>
            <div className="font-serif text-3xl mt-5">Your structured notes will appear here</div>
            <p className="mt-3 text-ink-soft max-w-md mx-auto">
              Upload a video, PDF, image or paste a link to begin. Each section will include its citation back to the source.
            </p>
          </div>

          <Skeleton />
        </article>

        <aside className="space-y-3">
          <SidebarAction icon={Copy} label="Copy notes" />
          <SidebarAction icon={Download} label="Export PDF" />
          <SidebarAction icon={Layers} label="Convert to flashcards" />
          <SidebarAction icon={HelpCircle} label="Generate quiz" />
          <SidebarAction icon={Languages} label="Translate notes" />
          <SidebarAction icon={Headphones} label="Listen as audio" />
        </aside>
      </div>
    </StudioShell>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="text-xs px-2.5 py-1 rounded-full bg-surface-muted text-ink-soft border border-border">{children}</span>;
}

function SidebarAction({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface ring-soft hover:shadow-glass transition text-sm">
      <Icon className="w-4 h-4 text-ink-soft" />
      {label}
    </button>
  );
}

function Skeleton() {
  return (
    <div className="mt-10 space-y-6 opacity-40 select-none">
      <div className="h-3 w-24 bg-surface-muted rounded shimmer" />
      <div className="h-8 w-2/3 bg-surface-muted rounded shimmer" />
      <div className="space-y-2">
        <div className="h-3 w-full bg-surface-muted rounded shimmer" />
        <div className="h-3 w-11/12 bg-surface-muted rounded shimmer" />
        <div className="h-3 w-10/12 bg-surface-muted rounded shimmer" />
      </div>
      <div className="rounded-2xl border border-border p-5 bg-surface-muted/50">
        <div className="h-3 w-16 bg-surface-muted rounded mb-3 shimmer" />
        <div className="h-5 w-1/2 bg-surface-muted rounded shimmer" />
      </div>
    </div>
  );
}
