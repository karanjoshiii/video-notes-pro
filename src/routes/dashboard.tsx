import { createFileRoute, Link } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";
import { UploadCard } from "@/components/site/UploadCard";
import { Flame, Clock, FileText, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Studio — Lumen" },
      { name: "description", content: "Your personal AI learning studio." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <StudioShell title="Welcome back" subtitle="Drop a source to start a new study session.">
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <UploadCard />
        </div>
        <div className="space-y-4">
          <Stat icon={Flame} label="Study streak" value="0 days" hint="Process a note today to begin" />
          <Stat icon={Clock} label="Time saved" value="—" hint="Tracked per session" />
          <Stat icon={FileText} label="Notes created" value="0" hint="Source-locked outputs" />
        </div>
      </div>

      <section className="mt-12">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Recent notes</div>
            <h2 className="font-serif text-3xl mt-1">Continue learning</h2>
          </div>
          <Link to="/notes" className="text-sm text-ink-soft hover:text-foreground inline-flex items-center gap-1">
            View all <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="mt-6 glass rounded-3xl p-12 text-center">
          <div className="font-serif text-2xl">Nothing here yet</div>
          <p className="text-sm text-ink-soft mt-2">Your processed notes will appear here once you generate your first one.</p>
        </div>
      </section>
    </StudioShell>
  );
}

function Stat({ icon: Icon, label, value, hint }: { icon: any; label: string; value: string; hint: string }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</span>
        <Icon className="w-4 h-4 text-ink-soft" />
      </div>
      <div className="font-serif text-3xl mt-2">{value}</div>
      <div className="text-xs text-ink-soft mt-1">{hint}</div>
    </div>
  );
}
