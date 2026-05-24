import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Accuracy } from "@/components/site/Accuracy";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen — Turn 2 hours of learning into 15 minutes" },
      { name: "description", content: "Upload videos, YouTube links, PDFs, slides or handwritten notes. Lumen turns them into structured, source-accurate study notes — no hallucinations." },
      { property: "og:title", content: "Lumen — AI Notes from anything you learn" },
      { property: "og:description", content: "Source-locked AI study notes from videos, PDFs, slides and handwritten notes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Accuracy />
      <Footer />
    </main>
  );
}
