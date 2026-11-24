"use client";

import { useEffect, useState } from "react";

/**
 * Types each role out, holds, deletes, then moves to the next.
 *
 * The first role is rendered on the server, so the headline never reflows on
 * hydration; if the visitor prefers reduced motion the effect bails out and
 * that first role simply stays put.
 */
export default function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [text, setText] = useState(roles[0] ?? "");

  useEffect(() => {
    if (roles.length < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    let charCount = roles[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = roles[index];

      if (!deleting && charCount === current.length) {
        deleting = true;
        timer = setTimeout(step, 2000);
        return;
      }

      if (deleting && charCount === 0) {
        deleting = false;
        index = (index + 1) % roles.length;
        timer = setTimeout(step, 260);
        return;
      }

      charCount += deleting ? -1 : 1;
      setText(roles[index].slice(0, charCount));
      timer = setTimeout(step, deleting ? 28 : 55);
    };

    timer = setTimeout(step, 2000);
    return () => clearTimeout(timer);
  }, [roles]);

  return (
    <span className="inline-flex items-baseline">
      {/* Screen readers get the full list once, not a character-by-character stream. */}
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden className="text-gradient">
        {text}
      </span>
      <span aria-hidden className="caret" />
    </span>
  );
}
