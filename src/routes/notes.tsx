import { createFileRoute } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";
import { BookMarked } from "lucide-react";

export const Route = createFileRoute("/notes")({
  head: () => ({ meta: [{ title: "Saved notes — Lumen" }] }),
  component: () => (
    <StudioShell title="Saved notes" subtitle="Everything you've generated, in one place.">
      <div className="glass rounded-3xl p-16 text-center">
        <BookMarked className="w-6 h-6 mx-auto text-ink-soft" />
        <div className="font-serif text-3xl mt-4">No notes saved yet</div>
        <p className="text-ink-soft text-sm mt-2 max-w-sm mx-auto">
          Generate a note in the Studio and save it — it'll appear here for easy revision later.
        </p>
      </div>
    </StudioShell>
  ),
});
