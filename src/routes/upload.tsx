import { createFileRoute } from "@tanstack/react-router";
import { StudioShell } from "@/components/studio/StudioShell";
import { UploadCard } from "@/components/site/UploadCard";

export const Route = createFileRoute("/upload")({
  head: () => ({ meta: [{ title: "Upload — Lumen" }] }),
  component: () => (
    <StudioShell title="Upload center" subtitle="Add any source — Lumen will only use what you provide.">
      <div className="max-w-3xl mx-auto pt-6">
        <UploadCard />
      </div>
    </StudioShell>
  ),
});
