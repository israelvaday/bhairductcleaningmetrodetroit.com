"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { getHoursStatus } from "@/lib/hours";
import { cn } from "@/lib/cn";

export function HoursStatusBanner() {
  const [status, setStatus] = useState(() => getHoursStatus());

  useEffect(() => {
    setStatus(getHoursStatus());
    const id = window.setInterval(() => setStatus(getHoursStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold",
        status.isOpen
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
          : "border-red-500/40 bg-red-500/10 text-red-300",
      )}
    >
      <Clock className="h-4 w-4" />
      {status.isOpen ? "Open now" : "Closed now"} · {status.message}
    </div>
  );
}
