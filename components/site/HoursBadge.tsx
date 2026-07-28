"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Clock } from "lucide-react";
import { getHoursStatus } from "@/lib/hours";

/** Shown in navbar only while open — never displays "Closed". */
export function HoursBadge({ className }: { className?: string }) {
  const [status, setStatus] = useState(() => getHoursStatus());

  useEffect(() => {
    setStatus(getHoursStatus());
    const id = window.setInterval(() => setStatus(getHoursStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  if (!status.isOpen) return null;

  return (
    <Badge tone="open" className={className}>
      <Clock className="h-3 w-3" />
      Open now
    </Badge>
  );
}
