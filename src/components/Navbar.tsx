"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { CloseIcon, DownloadIcon, MenuIcon } from "./ui/icons";

const NAV_LINKS = [
  { name: "About", id: "about" },
  { name: "Impact", id: "achievements" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Solid background once the page has moved under the bar. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight whichever section is closest to the top of the viewport. */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (node): node is HTMLElement => node !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Close the mobile menu on Escape, and stop the page scrolling behind it. */
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line-soft)] bg-[rgba(7,11,24,0.82)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="shell flex h-[var(--nav-h)] items-center justify-between gap-4">
        <Link
          href="#top"
          className="group flex items-center gap-2.5 rounded-lg"
          aria-label={`${personalData.name} — back to top`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 font-mono text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105">
            {personalData.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-[var(--color-fg)] sm:block">
            {personalData.name}
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`relative rounded-lg px-3 py-2 text-[0.82rem] font-medium transition-colors duration-300 ${
                  active === link.id
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
                }`}
              >
                {link.name}
                <span
                  aria-hidden
                  className={`absolute inset-x-3 -bottom-0.5 h-px bg-[var(--color-accent)] transition-transform duration-300 ${
                    active === link.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {personalData.resume ? (
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost hidden min-h-[2.5rem] px-4 text-[0.72rem] sm:inline-flex"
            >
              Résumé
              <DownloadIcon className="text-sm" />
            </a>
          ) : null}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="icon-btn lg:hidden"
          >
            {open ? <CloseIcon className="text-lg" /> : <MenuIcon className="text-lg" />}
          </button>
        </div>
      </nav>

      {/* Dims the page behind the open menu; tapping it closes the menu. */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-[var(--nav-h)] -z-10 bg-[rgba(5,7,15,0.7)] backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        aria-hidden={!open}
        className={`overflow-hidden bg-[rgba(7,11,24,0.97)] backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? "max-h-[32rem] border-t border-[var(--color-line-soft)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="shell flex flex-col py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? undefined : -1}
                className={`flex min-h-[3rem] items-center justify-between border-b border-[var(--color-line-soft)] text-[0.95rem] font-medium transition-colors ${
                  active === link.id ? "text-[var(--color-accent)]" : "text-[var(--color-fg)]"
                }`}
              >
                {link.name}
                <span className="font-mono text-[0.7rem] text-[var(--color-fg-faint)]">
                  {String(NAV_LINKS.indexOf(link) + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
          {personalData.resume ? (
            <li className="pt-4">
              <a
                href={personalData.resume}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full"
              >
                Download Résumé
                <DownloadIcon className="text-base" />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </header>
  );
}
