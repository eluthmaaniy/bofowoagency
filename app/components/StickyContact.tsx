"use client";

import { whatsappLink } from "../lib/data";

export function StickyContact() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Bofowo Agency on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-lg bg-accent text-white shadow-lg transition hover:opacity-90"
    >
      <i className="ri-whatsapp-line text-2xl" aria-hidden />
    </a>
  );
}
