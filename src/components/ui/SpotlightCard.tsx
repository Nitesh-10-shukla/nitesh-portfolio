"use client";

import { useCallback, type ElementType, type ReactNode } from "react";

/**
 * Card with a soft gradient that follows the pointer.
 *
 * The listener lives on the card itself, so it only fires while the pointer is
 * actually over the card — no global `pointermove` handler, no layout reads on
 * every frame for off-screen cards. The effect degrades to a static border on
 * touch devices and with reduced motion.
 */
export default function SpotlightCard({
  children,
  className = "",
  as,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const Tag = (as ?? "div") as ElementType;

  const handleMove = useCallback((event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    target.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <Tag onPointerMove={handleMove} className={`spotlight surface surface-raised ${className}`}>
      {children}
    </Tag>
  );
}
