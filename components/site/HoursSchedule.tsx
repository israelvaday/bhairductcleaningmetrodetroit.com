import { BIZ } from "@/lib/business";
import { formatDayHours } from "@/lib/hours";
import { cn } from "@/lib/cn";

const SHORT: Record<string, string> = {
  Sunday: "Sun",
  Monday: "Mon",
  Tuesday: "Tue",
  Wednesday: "Wed",
  Thursday: "Thu",
  Friday: "Fri",
  Saturday: "Sat",
};

export function HoursSchedule({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-3 sm:grid-cols-7", className)}>
      {BIZ.hours.map((entry) => {
        const closed = !entry.open;
        const label = formatDayHours(entry);
        return (
          <div
            key={entry.day}
            className={cn(
              "rounded-2xl border px-3 py-4 text-center",
              closed
                ? "border-ink-700/60 bg-ink-900/40"
                : "border-emerald-500/30 bg-emerald-500/5",
            )}
          >
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-wider",
                closed ? "text-ink-400" : "text-emerald-300",
              )}
            >
              {SHORT[entry.label] ?? entry.label.slice(0, 3)}
            </p>
            <p
              className={cn(
                "mt-2 font-mono text-sm font-bold",
                closed ? "text-ink-500" : "text-white",
              )}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
