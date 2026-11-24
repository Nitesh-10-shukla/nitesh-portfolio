"use client";

import { useEffect, useRef } from "react";

/**
 * Thin reading-progress bar under the nav.
 *
 * Writes straight to a CSS custom property inside a rAF so scrolling never
 * triggers a React re-render.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const node = ref.current;
      if (!node) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      node.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-[var(--nav-h)] z-50 h-0.5 bg-transparent">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-[var(--color-accent)] via-violet-500 to-pink-500"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
