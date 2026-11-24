import { socialLinks } from "@/utils/data/personal-data";
import { GitHubIcon, LinkedInIcon, XIcon, LeetCodeIcon } from "./icons";

const ICONS = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  leetcode: LeetCodeIcon,
} as const;

export default function SocialLinks({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ label, href, icon }) => {
        const Icon = ICONS[icon];
        return (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile (opens in a new tab)`}
              title={label}
              className={`icon-btn ${size === "lg" ? "!h-12 !w-12 text-lg" : "text-base"}`}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
