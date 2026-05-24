import { ShieldCheck, Lock, FileSearch } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Source-locked", text: "Every sentence is generated only from what you upload. Nothing from the open web." },
  { icon: FileSearch, title: "Traceable", text: "Each note cites the timestamp, page or paragraph it came from. Verify in one click." },
  { icon: Lock, title: "Private by default", text: "Your uploads aren't used to train models. You can delete everything anytime." },
];

export function Accuracy() {
  return (
    <section id="trust" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The accuracy promise</div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-3 tracking-tight text-balance">
            No fake summaries.<br/>
            <em className="italic">Ever.</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-md">
            Most AI summarizers hallucinate. Lumen is built the opposite way — locked to your source,
            with a citation under every claim. If it isn't in your upload, it isn't in your notes.
          </p>
        </div>
        <div className="grid gap-3">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <div key={i.title} className="glass rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-foreground text-background grid place-items-center">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <div className="font-medium">{i.title}</div>
                  <p className="text-sm text-ink-soft mt-1">{i.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
