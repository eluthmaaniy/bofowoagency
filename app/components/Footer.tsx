import { contactEmail, whatsappLink } from "../lib/data";

const socialLinks = [
  {
    icon: "ri-whatsapp-line",
    href: whatsappLink,
    label: "Message Bofowo Agency on WhatsApp",
    external: true,
  },
  {
    icon: "ri-mail-line",
    href: `mailto:${contactEmail}`,
    label: "Email Bofowo Agency",
    external: false,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface px-6 py-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition hover:bg-accent hover:text-white"
            >
              <i className={link.icon} aria-hidden />
            </a>
          ))}
        </div>
        <p className="text-sm text-ink/50">
          © {year} Bofowo Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
