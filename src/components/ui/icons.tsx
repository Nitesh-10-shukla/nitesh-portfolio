/**
 * Local inline icon set.
 *
 * Replaces `react-icons` so the critical path never pulls a barrel file.
 * Every icon is a 24x24 viewBox and inherits `currentColor`, so size and
 * colour are controlled entirely by the parent via `className`.
 */

type IconProps = {
  className?: string;
  title?: string;
};

const base = (className = "") => ({
  className: `shrink-0 ${className}`,
  "aria-hidden": true as const,
  focusable: "false" as const,
});

/* ---------------------------------- Brand --------------------------------- */

export const GitHubIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...base(className)}>
    <path d="M12 .5C5.73.5.9 5.33.9 11.6c0 4.9 3.18 9.06 7.6 10.53.56.1.76-.24.76-.53v-2.07c-3.09.67-3.74-1.3-3.74-1.3-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.67.08-.67 1.11.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.43-2.21 1.14-2.99-.11-.28-.5-1.42.11-2.95 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.67.11 2.95.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.77.53 4.42-1.47 7.59-5.63 7.59-10.53C23.1 5.33 18.27.5 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...base(className)}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const XIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...base(className)}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.01 4.13H5.04l12.04 15.64Z" />
  </svg>
);

export const LeetCodeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    {/* Angle brackets — a legible stand-in for the LeetCode mark at 16px. */}
    <path d="M9 7.5 4.5 12 9 16.5M15 7.5 19.5 12 15 16.5M13.4 5.5l-2.8 13" />
  </svg>
);

/* --------------------------------- Actions -------------------------------- */

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const DownloadIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  </svg>
);

export const ExternalLinkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M14 3h7v7M10 14 21 3M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
  </svg>
);

export const SendIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
  </svg>
);

export const MenuIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="1em" height="1em" {...base(className)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="1em" height="1em" {...base(className)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="m4 12 5 5L20 6" />
  </svg>
);

export const AlertIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
  </svg>
);

/* --------------------------------- Contact -------------------------------- */

export const MailIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="m3 7 8.2 5.7a1.4 1.4 0 0 0 1.6 0L21 7" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.9 2.2Z" />
  </svg>
);

export const MapPinIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* -------------------------------- Sections -------------------------------- */

export const BriefcaseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <rect x="2" y="7" width="20" height="14" rx="2.5" />
    <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M2 13h20" />
  </svg>
);

export const GraduationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M22 9 12 4 2 9l10 5 10-5Z" />
    <path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M20 10v5" />
  </svg>
);

export const CodeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);

export const LayersIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const ServerIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <rect x="2.5" y="3" width="19" height="7" rx="2" />
    <rect x="2.5" y="14" width="19" height="7" rx="2" />
    <path d="M6.5 6.5h.01M6.5 17.5h.01" />
  </svg>
);

export const DatabaseIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <ellipse cx="12" cy="5.5" rx="8" ry="3.2" />
    <path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" />
  </svg>
);

export const SparkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9l2-6.5ZM19 3.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
  </svg>
);

export const FlowIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <circle cx="5.5" cy="6" r="2.5" />
    <circle cx="18.5" cy="6" r="2.5" />
    <circle cx="12" cy="18.5" r="2.5" />
    <path d="M8 6h8M6.6 8.3 10.6 16.4M17.4 8.3 13.4 16.4" />
  </svg>
);

export const PaletteIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M12 21a9 9 0 1 1 9-9c0 1.7-1.4 2.6-3 2.6h-1.5a2 2 0 0 0-1.4 3.4 1.6 1.6 0 0 1-1.2 2.9Z" />
    <circle cx="7.8" cy="12.2" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="9.8" cy="8" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="14.4" cy="7.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const FlaskIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M9.5 2.5v6L4.2 17.6A2.4 2.4 0 0 0 6.3 21.5h11.4a2.4 2.4 0 0 0 2.1-3.9L14.5 8.5v-6" />
    <path d="M8 2.5h8M6.9 14.5h10.2" />
  </svg>
);

export const PuzzleIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M10.3 3.2a2 2 0 0 1 3.4 0c.4.7.3 1.5-.2 2.1h3.3a1.4 1.4 0 0 1 1.4 1.4v3.2c.7-.5 1.5-.6 2.2-.2a2 2 0 0 1 0 3.4c-.7.4-1.5.3-2.2-.2v3.3a1.4 1.4 0 0 1-1.4 1.4h-3.2c.5.7.6 1.5.2 2.2a2 2 0 0 1-3.4 0c-.4-.7-.3-1.5.2-2.2H7.4A1.4 1.4 0 0 1 6 16.2V13c-.7.5-1.5.6-2.2.2a2 2 0 0 1 0-3.4c.7-.4 1.5-.3 2.2.2V6.7a1.4 1.4 0 0 1 1.4-1.4h3.1c-.5-.6-.6-1.4-.2-2.1Z" />
  </svg>
);

export const CloudIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M17.5 19h-11a4.5 4.5 0 0 1-.6-8.96 6 6 0 0 1 11.64-1.5A4.25 4.25 0 0 1 17.5 19Z" />
  </svg>
);

export const GaugeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M12 15.5 16 9M3.5 19a9.5 9.5 0 1 1 17 0" />
    <circle cx="12" cy="16.5" r="1.6" />
  </svg>
);

export const UsersIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
    <circle cx="9" cy="7" r="3.5" />
    <path d="M22 20v-1.5a4 4 0 0 0-3-3.87M16.5 3.7a3.5 3.5 0 0 1 0 6.6" />
  </svg>
);

export const DocumentIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M14 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7.5l-5-5Z" />
    <path d="M14 2.5v5h5M9 13h6M9 17h4" />
  </svg>
);

export const RefreshIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em" {...base(className)}>
    <path d="M23 4v6h-6M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);
