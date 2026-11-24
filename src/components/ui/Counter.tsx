"use client";

import { useEffect, useRef } from "react";

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * The final number is what's rendered in the HTML, so crawlers, print and
 * no-JavaScript visitors all see the real figure. The count-up is applied by
 * writing to the node directly (no React state, no re-renders): the effect
 * resets the text to zero while the surrounding card is still hidden by its
 * reveal transition, then animates on intersection. If motion is reduced, or
 * the observer never fires, the number simply stays correct.
 */
export default function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    node.textContent = "0";

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo — quick off the mark, settles gently on the final number
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          node.textContent = String(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      node.textContent = String(value);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>{value}</span>
      {suffix}
    </span>
  );
}
