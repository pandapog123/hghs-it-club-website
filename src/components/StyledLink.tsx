import { ReactNode } from "react";
import Link from "next/link";

interface StyledLinkProps {
  children?: ReactNode;
  href: string;
  variant?: "default" | "primary" | "outline";
}

export default function StyledLink({
  children,
  href,
  variant = "default",
}: StyledLinkProps) {
  if (variant === "default") {
    return (
      <Link
        href={href}
        className="text-gray-400 hover:text-gray-200 transition"
      >
        {children}
      </Link>
    );
  } else if (variant === "primary") {
    return (
      <Link
        href={href}
        className="rounded-md text-gray-100 px-4 py-2 bg-primary hover:bg-primary-hover transition"
      >
        {children}
      </Link>
    );
  } else if (variant === "outline") {
    return (
      <Link
        href={href}
        className="text-gray-200 rounded-md hover:bg-gray-800 px-4 py-2 border border-gray-800 transition"
      >
        {children}
      </Link>
    );
  }
}
