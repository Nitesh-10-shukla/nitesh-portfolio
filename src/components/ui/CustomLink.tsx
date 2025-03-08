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
      className={`no-underline outline-none transition-all duration-300 hover:text-pink-600 hover:underline focus:text-pink-600 focus:underline focus:outline-none ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CustomLink;