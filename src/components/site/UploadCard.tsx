import { useState } from "react";
import { Link as LinkIcon, FileText, Image as ImageIcon, Video, FileType2, Sparkles, Wand2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tabs = [
  { id: "link", label: "Paste link", icon: LinkIcon, placeholder: "Paste a YouTube or video URL…" },
  { id: "video", label: "Video", icon: Video, placeholder: "Drop a video file or click to browse" },
  { id: "pdf", label: "PDF", icon: FileText, placeholder: "Drop a PDF or click to browse" },
  { id: "image", label: "Image", icon: ImageIcon, placeholder: "Drop images / handwritten notes" },
  { id: "doc", label: "Docs", icon: FileType2, placeholder: "Drop .doc, .docx, .pptx, .txt" },
] as const;

export function UploadCard() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("link");
  const [mode, setMode] = useState<"quick" | "detailed">("detailed");
  const active = tabs.find((t) => t.id === tab)!;

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[var(--gradient-aurora)] blur-3xl opacity-70" />
      <div className="glass-strong rounded-[1.75rem] p-3 shadow-[var(--shadow-float)]">
        <div className="flex items-center gap-1 p-1 bg-surface-muted rounded-2xl">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs sm:text-sm transition ${
                  isActive ? "bg-surface text-foreground shadow-soft" : "text-ink-soft hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-3 rounded-2xl border border-dashed border-border bg-surface px-5 py-7 sm:py-10">
          {tab === "link" ? (
            <div className="flex items-center gap-3">
              <LinkIcon className="w-4 h-4 text-muted-foreground shrink-0" />
              <input
                placeholder={active.placeholder}
                className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center text-center cursor-pointer gap-2">
              <active.icon className="w-6 h-6 text-muted-foreground" />
              <span className="text-sm text-ink-soft">{active.placeholder}</span>
              <span className="text-xs text-muted-foreground">Max 500MB · processed privately</span>
              <input type="file" className="hidden" />
            </label>
          )}
        </div>

        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1">
          <div className="flex items-center gap-1 p-1 bg-surface-muted rounded-full text-xs">
            <button
              onClick={() => setMode("quick")}
              className={`px-3 py-1.5 rounded-full transition ${mode === "quick" ? "bg-surface shadow-soft text-foreground" : "text-ink-soft"}`}
            >
              ⚡ Quick notes
            </button>
            <button
              onClick={() => setMode("detailed")}
              className={`px-3 py-1.5 rounded-full transition ${mode === "detailed" ? "bg-surface shadow-soft text-foreground" : "text-ink-soft"}`}
            >
              📘 Detailed notes
            </button>
          </div>
          <div className="sm:ml-auto flex gap-2">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm border border-border bg-surface hover:bg-surface-muted transition"
            >
              <Sparkles className="w-4 h-4" /> Open Studio
            </Link>
            <Link
              to="/workspace"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm bg-foreground text-background hover:opacity-90 transition"
            >
              <Wand2 className="w-4 h-4" /> Generate notes
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Source-locked AI · no hallucinations · notes generated only from what you upload
      </p>
    </div>
  );
}
