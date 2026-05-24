import { Upload, Brain, FileText } from "lucide-react";

const steps = [
  { n: "01", icon: Upload, title: "Drop your source", desc: "Paste a link or upload videos, PDFs, slides, images, or handwritten notes." },
  { n: "02", icon: Brain, title: "Lumen reads it", desc: "Transcribes, OCRs and parses every page or second — never the open web." },
  { n: "03", icon: FileText, title: "Structured notes", desc: "Headings, formulas, solved examples, diagrams and timestamps — exported as you like." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28 bg-surface-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How it works</div>
        <h2 className="font-serif text-4xl sm:text-5xl mt-3 tracking-tight max-w-2xl text-balance">
          From <em className="italic">anything</em> you have, to notes you can study.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-4">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative rounded-3xl bg-surface ring-soft p-7 hover:shadow-glass transition">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-muted-foreground">{s.n}</span>
                  <div className="w-10 h-10 rounded-full bg-foreground text-background grid place-items-center">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                </div>
                <div className="mt-8 font-serif text-2xl tracking-tight">{s.title}</div>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
