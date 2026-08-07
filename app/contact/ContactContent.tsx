"use client";

import { FormEvent, useState } from "react";
import { contactEmail, whatsappLink } from "../lib/data";

const quickInfo = [
  { label: "Response Time", value: "Usually within a few hours" },
  { label: "Availability", value: "Open for new projects" },
  { label: "Based In", value: "Nigeria (GMT+1)" },
] as const;

export function ContactContent() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable in some environments
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire this up to an email service (e.g. Web3Forms, Formspree, or Resend) before going live
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14 text-left md:py-20">
      <p className="text-sm font-bold uppercase tracking-wide text-accent">
        Contact
      </p>
      <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
        Let&apos;s Talk About Your Store
      </h1>
      <p className="mt-3 max-w-md text-base text-ink/60">
        Tell me a bit about your project and I&apos;ll get back to you
        directly.
      </p>
      <div className="mt-4 h-1 w-12 rounded-sm bg-accent" />

      <div className="mt-8 flex flex-wrap overflow-hidden rounded-2xl border border-border divide-x divide-border">
        {quickInfo.map((item) => (
          <div key={item.label} className="min-w-[140px] flex-1 px-5 py-4 text-left">
            <p className="text-xs uppercase tracking-wide text-ink/50">
              {item.label}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <i className="ri-whatsapp-line text-2xl" aria-hidden />
        </div>
        <h2 className="mt-4 text-lg font-bold text-ink">
          Message Me on WhatsApp
        </h2>
        <p className="mt-1 text-sm text-ink/60">
          The fastest way to reach me directly.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          <i className="ri-whatsapp-line" aria-hidden />
          Open WhatsApp
        </a>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <i className="ri-mail-line text-2xl" aria-hidden />
        </div>
        <h2 className="mt-4 text-lg font-bold text-ink">Email Me Directly</h2>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-1 block text-base font-semibold text-accent"
        >
          {contactEmail}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-ink transition hover:border-accent"
        >
          <i className="ri-file-copy-line" aria-hidden />
          {copied ? "Copied!" : "Copy Email"}
        </button>
      </div>

      <div className="mt-10">
        <h2 className="mb-1 text-lg font-bold text-ink">
          Or Send a Message Here
        </h2>
        <p className="mb-5 text-sm text-ink/60">
          This goes straight into your inbox once it&apos;s connected — for now
          it&apos;s a working preview.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-border bg-surface p-6">
            <i
              className="ri-checkbox-circle-line text-3xl text-accent"
              aria-hidden
            />
            <p className="mt-2 font-semibold text-ink">Message Sent</p>
            <p className="mt-1 text-sm text-ink/60">
              Thanks for reaching out — I&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-accent focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-accent focus:outline-none"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="Tell me about your store or project..."
              className="resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 rounded-lg bg-accent px-6 py-3.5 font-medium text-white transition hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
