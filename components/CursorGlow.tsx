"use client";

import { useEffect, useRef } from "react";

/**
 * Radial glow that tracks the cursor within its parent element. Sets CSS
 * vars directly via ref (no React re-render per mousemove) for smooth
 * tracking. Parent must be position:relative/absolute with overflow-hidden.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    function handleMove(e: MouseEvent) {
      const rect = parent!.getBoundingClientRect();
      el!.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el!.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    }

    parent.addEventListener("mousemove", handleMove);
    return () => parent.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(420px circle at var(--x, 70%) var(--y, 30%), rgba(255,255,255,0.07), transparent 70%)",
      }}
    />
  );
}
