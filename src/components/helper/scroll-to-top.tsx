"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "../ui/icons";

/** Appears once the visitor is a screen or so down the page. */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll back to top"
      tabIndex={visible ? undefined : -1}
      aria-hidden={!visible}
      className={`fixed bottom-6 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-white shadow-[0_12px_30px_-10px_rgba(236,72,153,0.8)] transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUpIcon className="text-lg" />
    </button>
  );
}
