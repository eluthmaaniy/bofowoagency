"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  contactEmail,
  coverImageUrl,
  profileImageUrl,
  whatsappLink,
} from "../lib/data";

function formatLagosTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    timeZone: "Africa/Lagos",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function Hero() {
  const [localTime, setLocalTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setLocalTime(formatLagosTime(new Date()));
    update();
    const id = window.setInterval(update, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-3xl px-6 py-10 md:py-16">
      <div className="flex flex-col items-start">
        <div className="relative mb-[-40px] h-32 w-full overflow-hidden rounded-2xl border border-border bg-surface md:h-44">
          <Image
            src={coverImageUrl}
            alt="Bofowo Agency - Shopify and ecommerce expert cover banner"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>

        {/* Avatar overlaps cover bottom-left */}
        <div className="relative ml-6 h-20 w-20 overflow-hidden rounded-2xl border-4 border-background bg-surface shadow-sm ring-2 ring-accent md:h-28 md:w-28">
          <Image
            src={profileImageUrl}
            alt="Bofowo Agency profile photo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80px, 112px"
            priority
          />
        </div>

        <div className="mt-4 px-2 text-left">
          <h1 className="text-2xl font-bold text-ink md:text-3xl">
            Bofowo Agency
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm text-ink/60">
            <span
              className="h-2 w-2 rounded-full bg-green-500"
              aria-hidden
            />
            <span>Available for new projects</span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-sm text-ink/50">
            <i className="ri-global-line" aria-hidden />
            <span>English</span>
            <span>·</span>
            <span suppressHydrationWarning>
              {localTime ?? "—:— —"}
            </span>
          </div>

          <p className="mt-3 max-w-md text-base text-ink/70">
            Shopify & Ecommerce Expert helping store owners design, build, and
            grow stores that convert — from product listings to full store
            builds.
          </p>

          <div className="mt-4 h-1 w-12 rounded-sm bg-accent" />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-medium text-white transition hover:opacity-90"
          >
            <i className="ri-whatsapp-line" aria-hidden />
            Message on WhatsApp
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            <i className="ri-mail-line" aria-hidden />
            Email Me
          </a>
        </div>

        {/* TODO: confirm exact stats numbers with client */}
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-ink/60">
          <span>3+ Years Experience</span>
          <span>Multiple Stores Built</span>
          <span>Verified Client Results</span>
        </div>
      </div>
    </section>
  );
}
