"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/elements/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[calc(100vh-4.75rem)] items-center justify-center bg-cloud px-6 py-16">
      <div className="w-full max-w-md text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-kingfisher/10 text-kingfisher ring-8 ring-kingfisher/5">
          <AlertTriangle className="h-7 w-7" strokeWidth={1.75} />
        </span>
        <h1 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
          This page couldn&apos;t load
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          Something went wrong while loading the page. Reload to try again, or go
          back.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button type="button" variant="primary" size="lg" onClick={() => reset()}>
            Reload
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </div>
      </div>
    </main>
  );
}
