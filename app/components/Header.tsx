"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profileImageUrl } from "../lib/data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="flex items-center justify-between border-b border-border bg-background px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border-2 border-accent">
            <Image
              src={profileImageUrl}
              alt="Bofowo Agency profile photo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-ink">Bofowo Agency</p>
            <p className="text-xs text-ink/60">Shopify & Ecommerce Expert</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "border-b-2 border-accent pb-0.5 text-accent"
                    : "text-ink/70 hover:text-accent"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <nav className="flex gap-2 overflow-x-auto border-b border-border bg-background px-4 py-2 scrollbar-none md:hidden">
        {navItems.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex-shrink-0 whitespace-nowrap rounded-lg px-4 py-1.5 text-sm font-medium ${
                active
                  ? "bg-accent text-white"
                  : "bg-surface text-ink/70"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
