import { BIZ, type DayHours } from "./business";

/**
 * Compute open/closed state in America/Detroit regardless of the user's tz.
 */
export type HoursStatus = {
  isOpen: boolean;
  todayLabel: string;
  message: string;
};

function detroitParts(): { day: number; hours: number; minutes: number } {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Detroit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const map: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return { day: map[weekday] ?? 0, hours: hour, minutes: minute };
}

function toMinutes(t: string | null): number | null {
  if (!t) return null;
  const [h, m] = t.split(":").map(Number);
  if (h === 24 && m === 0) return 24 * 60;
  return h * 60 + m;
}

export function fmtTime(hhmm: string): string {
  if (hhmm === "24:00") return "midnight";
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

export function is24HourDay(entry: DayHours): boolean {
  return entry.open === "00:00" && (entry.close === "24:00" || entry.close === "23:59");
}

/** Short label for weekly grid cells */
export function formatDayHours(entry: DayHours): string {
  if (!entry.open || ("closed" in entry && entry.closed)) return "Closed";
  if (is24HourDay(entry)) return "24 hrs";
  if (entry.close) return `Until ${fmtTime(entry.close)}`;
  return "Open";
}

export function getHoursStatus(): HoursStatus {
  const { day, hours, minutes } = detroitParts();
  const now = hours * 60 + minutes;
  const today = BIZ.hours[day];
  const todayLabel = today.label;

  if ("closed" in today && today.closed) {
    for (let i = 1; i <= 7; i++) {
      const next = BIZ.hours[(day + i) % 7];
      if (!(("closed" in next && next.closed) || !next.open)) {
        const opensAt = is24HourDay(next) ? "24 hours" : fmtTime(next.open!);
        return {
          isOpen: false,
          todayLabel,
          message: `Closed — opens ${next.label} (${opensAt})`,
        };
      }
    }
    return { isOpen: false, todayLabel, message: "Closed" };
  }

  const openMin = toMinutes(today.open);
  const closeMin = toMinutes(today.close);

  if (openMin !== null && closeMin !== null && now >= openMin && now < closeMin) {
    const until = is24HourDay(today) ? "midnight" : fmtTime(today.close!);
    return {
      isOpen: true,
      todayLabel,
      message: is24HourDay(today)
        ? "Open now — 24 hours today"
        : `Open now until ${until}`,
    };
  }

  for (let i = 1; i <= 7; i++) {
    const next = BIZ.hours[(day + i) % 7];
    if (next.open && !("closed" in next && next.closed)) {
      const opensAt = is24HourDay(next) ? "24 hours" : fmtTime(next.open);
      return {
        isOpen: false,
        todayLabel,
        message: `Closed — opens ${next.label} (${opensAt})`,
      };
    }
  }
  return { isOpen: false, todayLabel, message: "Closed" };
}
