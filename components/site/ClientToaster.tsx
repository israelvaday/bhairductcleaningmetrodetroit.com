"use client";

import { useEffect, useState, type ComponentType } from "react";

/**
 * Defers BOTH the import and the render of sonner's `<Toaster />` until after
 * React has finished hydrating. Sonner injects a `<style>` block into
 * `<head>` at module-evaluation time; loading it eagerly at module scope made
 * the client `<head>` differ from the SSR `<head>` and triggered React error
 * #418 (hydration mismatch), which capped Lighthouse Best Practices at 96.
 */
export function ClientToaster() {
  const [Toaster, setToaster] = useState<ComponentType<{
    position?: string;
    theme?: string;
    richColors?: boolean;
  }> | null>(null);
  useEffect(() => {
    let cancelled = false;
    import("sonner").then((m) => {
      if (!cancelled) setToaster(() => m.Toaster as never);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  if (!Toaster) return null;
  return <Toaster position="top-center" theme="dark" richColors />;
}
