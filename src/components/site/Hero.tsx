import { UploadCard } from "./UploadCard";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden grain">
      <div aria-hidden className="absolute inset-0 -z-10 aurora-bg" />
      <div aria-hidden className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent-glow/30 blur-3xl animate-float-slow" />
      <div aria-hidden className="absolute top-40 right-10 w-80 h-80 rounded-full bg-[oklch(0.92_0.06_200)]/40 blur-3xl animate-float-slow [animation-delay:-3s]" />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-ink-soft animate-rise">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
          Source-locked AI · accuracy first
        </div>

        <h1 className="font-serif mt-6 text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight text-balance animate-rise [animation-delay:60ms]">
          Turn <em className="italic">2 hours</em> of learning<br />
          into <span className="relative inline-block">
            15 minutes
            <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" fill="none">
              <path d="M2 6 Q 50 1, 100 5 T 198 4" stroke="oklch(0.62 0.18 275)" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </span>.
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-base sm:text-lg text-ink-soft text-balance animate-rise [animation-delay:120ms]">
          Upload a lecture, paste a YouTube link, drop a PDF or your handwritten notes —
          Lumen reads it and returns structured, exam-ready notes you can actually study from.
        </p>

        <div className="mt-12 animate-rise [animation-delay:200ms]">
          <UploadCard />
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground animate-rise [animation-delay:300ms]">
          <span>YouTube</span><span>·</span>
          <span>MP4 / MOV</span><span>·</span>
          <span>PDF</span><span>·</span>
          <span>DOCX</span><span>·</span>
          <span>Handwritten notes</span><span>·</span>
          <span>Slides</span>
        </div>
      </div>
    </section>
  );
}
