import { responseTime, whatsappLink } from "@/app/lib/data";

type ContactButtonProps = {
  /** Mobile CTA uses fill icon + shadow; desktop sidebar uses line icon */
  variant?: "desktop" | "mobile";
};

export default function ContactButton({
  variant = "desktop",
}: ContactButtonProps) {
  const isMobile = variant === "mobile";

  return (
    <div className={isMobile ? "container mx-auto mt-8 px-4 md:hidden" : ""}>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center rounded-full bg-heading px-6 py-2 text-white transition-colors hover:bg-accent ${
          isMobile ? "shadow-lg" : ""
        }`}
      >
        <i className="ri-send-plane-fill mr-2" />
        Contact me
      </a>
      <p className="mt-2 text-center text-sm text-gray-500">{responseTime}</p>
    </div>
  );
}
