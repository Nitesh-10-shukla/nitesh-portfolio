import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

/**
 * Link that adds `rel="noopener noreferrer"` whenever it opens a new tab.
 * Styling is left to the caller so it can be used for both text links and
 * button-like links.
 */
const CustomLink = ({ href, children, className = "", target, ...rest }: CustomLinkProps) => (
  <Link
    href={href}
    target={target}
    rel={target === "_blank" ? "noopener noreferrer" : undefined}
    className={`transition-colors duration-300 ${className}`}
    {...rest}
  >
    {children}
  </Link>
);

export default CustomLink;
