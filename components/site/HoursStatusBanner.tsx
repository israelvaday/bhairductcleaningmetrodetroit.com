"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { getHoursStatus, type HoursStatus } from "@/lib/hours";
import { cn } from "@/lib/cn";

/**
 * Live open/closed line for /hours. Read only in the browser (after mount) so the build-time state
 * never reaches the static HTML (that mismatch caused React hydration error #418). Until then an
 * invisible placeholder of the same size holds the space, so nothing shifts.
 * The message already starts with the state ("Open now, ...", "Closed, ..."), so it is shown alone.
 */
export function HoursStatusBanner() {
  const [status, setStatus] = useState<HoursStatus | null>(null);

  useEffect(() => {
    setStatus(getHoursStatus());
    const id = window.setInterval(() => setStatus(getHoursStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      aria-hidden={status ? undefined : true}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold",
        !status
          ? "invisible border-transparent"
          : status.isOpen
            ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
            : "border-red-500/40 bg-red-500/10 text-red-300",
      )}
    >
      <Clock className="h-4 w-4" />
      {status ? status.message : "\u00a0"}
    </div>
  );
}
