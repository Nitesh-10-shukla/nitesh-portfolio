"use client";

import { useEffect, useRef, useState } from "react";
import { DocumentIcon } from "@/components/ui/icons";

/**
 * Embedded résumé preview.
 *
 * The PDF iframe is only mounted on wide viewports and only once the section
 * scrolls into view — embedded PDFs are heavy and render poorly on phones, so
 * small screens get download / open-in-tab actions instead.
 */
export default function ResumeViewer({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Phones get the download/open actions instead of an embedded PDF.
    if (!window.matchMedia("(min-width: 768px)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-xl border border-[var(--color-line-soft)] bg-[#090d1c]">
      {shouldLoad ? (
        <iframe
          src={`${src}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          title="Résumé of Nitesh Shukla"
          className="h-[640px] w-full border-0 lg:h-[780px]"
          loading="lazy"
        />
      ) : (
        <div className="flex h-[280px] flex-col items-center justify-center gap-3 px-6 text-center md:h-[640px] lg:h-[780px]">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.12)] text-xl text-violet-300">
            <DocumentIcon />
          </span>
          <p className="text-sm font-medium text-[var(--color-fg)]">Résumé — PDF</p>
          <p className="max-w-xs text-[0.8rem] leading-relaxed text-[var(--color-fg-muted)]">
            Open or download the PDF below for the full version.
          </p>
        </div>
      )}
    </div>
  );
}
