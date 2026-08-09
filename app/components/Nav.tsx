"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#about", label: "About", homeAnchor: true },
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-6 overflow-x-auto whitespace-nowrap border-b border-gray-200 pb-4 text-sm font-medium text-heading md:space-x-8 md:text-base">
      {links.map((link) => {
        const isAbout = link.homeAnchor;
        const href = isAbout && pathname === "/" ? "#about" : link.href;

        return (
          <Link
            key={link.label}
            href={href}
            className="transition-colors hover:text-hover"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
