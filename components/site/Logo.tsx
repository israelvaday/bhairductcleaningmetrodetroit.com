import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * BH Air Duct Cleaning Metro Detroit brand mark.
 * Photographic brass badge logo served from /public/logo.png.
 */
export function LogoMark({
  className,
  title = "BH Air Duct Cleaning Metro Detroit",
  priority = false,
}: { className?: string; title?: string; priority?: boolean }) {
  return (
    <Image
      src="/logo.png"
      alt={title}
      width={512}
      height={512}
      priority={priority}
      sizes="(max-width: 768px) 56px, 96px"
      className={cn("h-10 w-10 object-contain select-none", className)}
    />
  );
}

export function Logo({
  className,
  showWordmark = true,
  size = "md",
}: { className?: string; showWordmark?: boolean; size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const text =
    size === "sm"
      ? "text-xs sm:text-sm"
      : size === "lg"
      ? "text-lg sm:text-xl"
      : "text-sm sm:text-base";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={dim} />
      {showWordmark && (
        <span
          className={cn(
            "font-display font-extrabold tracking-tight leading-none whitespace-nowrap",
            text
          )}
        >
          BH Air Duct <span className="text-brass-400">Metro</span> Detroit
        </span>
      )}
    </span>
  );
}
