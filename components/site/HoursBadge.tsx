"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Clock } from "lucide-react";
import { getHoursStatus, type HoursStatus } from "@/lib/hours";

/**
 * Shown in navbar only while open, never displays "Closed".
 * The status is read only in the browser (after mount): the static HTML is built at one moment and
 * served at another, so rendering it on the server made React throw hydration error #418 whenever
 * the open/closed state had changed since the build (holiday window included).
 */
export function HoursBadge({ className }: { className?: string }) {
  const [status, setStatus] = useState<HoursStatus | null>(null);

  useEffect(() => {
    setStatus(getHoursStatus());
    const id = window.setInterval(() => setStatus(getHoursStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status || !status.isOpen) return null;

  return (
    <Badge tone="open" className={className}>
      <Clock className="h-3 w-3" />
      Open now
    </Badge>
  );
}
