import { Zap, BookOpen, Atom, FlaskConical, Code2, Sigma, Leaf, Clock3, FileStack, Map } from "lucide-react";

const modes = [
  { icon: Zap, title: "Quick Notes", desc: "2-hour lecture compressed into a 15-minute readable brief. Bullets, key concepts, exam-ready." },
  { icon: BookOpen, title: "Detailed Notes", desc: "Full structured breakdown: headings, subheadings, explanations, examples and diagrams." },
  { icon: FileStack, title: "Cheat Sheet", desc: "Single-page formula sheet, definitions and one-liner concepts for last-minute revision." },
  { icon: Map, title: "Concept Map", desc: "Visual relationship between topics — see how ideas connect across the lecture." },
  { icon: Clock3, title: "Video Timeline", desc: "Auto-generated chapters with timestamps. Jump straight to the moment that matters." },
  { icon: BookOpen, title: "Flashcards & Quiz", desc: "Convert any note into spaced-repetition cards or a self-quiz from the same source." },
];

const subjects = [
  { icon: Sigma, name: "Mathematics", points: ["Formula extraction", "Step-by-step solved examples", "Similar question types", "Shortcut tricks"] },
  { icon: Atom, name: "Physics", points: ["Concepts & derivations", "Numerical problem methods", "Formula sheet", "Key diagrams"] },
  { icon: FlaskConical, name: "Chemistry", points: ["Reactions & mechanisms", "Named reactions", "Organic flowcharts", "Inorganic tricks"] },
  { icon: Leaf, name: "Biology", points: ["NCERT-style notes", "Process flowcharts", "Labeled diagrams", "Definitions"] },
  { icon: Code2, name: "Programming", points: ["Code line-by-line", "Syntax breakdown", "Logic flow", "Bug explanations"] },
];

export function Features() {
  return (
    <section id="features" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Output styles</div>
          <h2 className="font-serif text-4xl sm:text-5xl mt-3 tracking-tight text-balance">
            One source. <em className="italic">Six</em> ways to learn it.
          </h2>
          <p className="mt-4 text-ink-soft">Pick the depth that fits your time. Switch anytime — the source stays the same.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modes.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="group relative rounded-2xl bg-surface ring-soft p-6 hover:shadow-glass transition">
                <div className="w-9 h-9 rounded-xl bg-surface-muted grid place-items-center mb-4 group-hover:bg-foreground group-hover:text-background transition">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-lg font-medium tracking-tight">{m.title}</div>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div id="subjects" className="mt-28">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Subject-aware AI</div>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 tracking-tight text-balance">
              Notes that <em className="italic">understand</em> the subject.
            </h2>
            <p className="mt-4 text-ink-soft">
              Lumen detects the subject and formats output the way that field actually teaches —
              formulas, mechanisms, derivations, diagrams or code.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.name} className="rounded-2xl glass p-6 hover:shadow-float transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-foreground text-background grid place-items-center">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div className="font-serif text-2xl tracking-tight">{s.name}</div>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm text-ink-soft">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
