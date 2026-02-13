import Link from "next/link";
import { ReactNode } from "react";

interface CustomLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  [key: string]: any;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className = "", ...rest }) => {
  return (
    <Link
      href={href}
      className={`underline decoration-current/30 hover:decoration-current outline-none transition-all duration-300 hover:text-pink-600 focus:text-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1224] ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CustomLink;