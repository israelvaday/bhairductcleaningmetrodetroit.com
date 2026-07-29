"use client";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import { cn } from "@/lib/cn";

export type BeforeAfterPair = {
  before: string;
  after: string;
  width: number;
  height: number;
};

/**
 * Draggable before/after comparison slider — real job photos.
 * The "before" image is clipped from the right with a CSS inset
 * driven by the drag position.
 */
export function BeforeAfterSlider({
  pair,
  alt,
  priority = false,
}: {
  pair: BeforeAfterPair;
  alt: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };
  const stop = () => setDragging(false);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
  };

  return (
    <div
      ref={ref}
      role="slider"
      aria-label={`${alt} — drag to compare before and after`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={stop}
      onPointerCancel={stop}
      onKeyDown={onKeyDown}
      className={cn(
        "group relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 outline-none focus-visible:border-brass-500/60",
        dragging && "cursor-grabbing"
      )}
    >
      {/* After (base layer) */}
      <Image
        src={pair.after}
        alt={`${alt} — after cleaning`}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="pointer-events-none object-cover"
        draggable={false}
      />
      {/* Before (clipped overlay) */}
      <Image
        src={pair.before}
        alt={`${alt} — before cleaning`}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 33vw"
        priority={priority}
        className="pointer-events-none object-cover"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-[3px] -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.45)]"
        style={{ left: `${pos}%` }}
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-ink-900 shadow-lg transition-transform",
            dragging && "scale-110"
          )}
        >
          <ChevronsLeft className="h-5 w-5" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 z-20 rounded bg-ink-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 z-20 rounded bg-brass-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink-950">
        After
      </span>
    </div>
  );
}
