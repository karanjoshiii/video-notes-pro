import { createFileRoute } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";

export const Route = createFileRoute("/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Lumen" }] }),
  component: () => (
    <StudioShell title="Learning analytics" subtitle="Your study patterns and time saved.">
      <div className="grid md:grid-cols-3 gap-4">
        {["Time saved", "Sessions", "Subjects covered"].map((l) => (
          <div key={l} className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{l}</div>
            <div className="font-serif text-4xl mt-3">—</div>
            <div className="text-xs text-ink-soft mt-1">Data appears after your first note</div>
          </div>
        ))}
      </div>
    </StudioShell>
  ),
});
