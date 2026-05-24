import { createFileRoute } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";
import { Send } from "lucide-react";

export const Route = createFileRoute("/assistant")({
  head: () => ({ meta: [{ title: "AI Assistant — Lumen" }] }),
  component: Assistant,
});

function Assistant() {
  return (
    <StudioShell title="AI Study Assistant" subtitle="Ask questions grounded in your uploaded sources.">
      <div className="max-w-3xl mx-auto">
        <div className="glass rounded-3xl p-10 text-center">
          <div className="font-serif text-3xl">Ask anything about your notes</div>
          <p className="mt-2 text-ink-soft text-sm">
            The assistant only answers from material you've uploaded — no outside guessing.
          </p>
        </div>
        <div className="mt-6 glass-strong rounded-full p-2 pl-5 flex items-center gap-3">
          <input
            placeholder="e.g. Summarise chapter 3 in 5 bullet points…"
            className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
          />
          <button className="rounded-full bg-foreground text-background w-10 h-10 grid place-items-center hover:opacity-90 transition">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </StudioShell>
  );
}
