import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import { contactEmail, whatsappLink } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bofowo Agency for your next Shopify or ecommerce project via WhatsApp or email.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-heading md:text-2xl">Contact</h2>
        <p className="mt-4 text-gray-700">
          Get in touch via WhatsApp, email, or the form below — I usually reply
          within an hour.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-heading px-6 py-2.5 text-white transition-colors hover:bg-accent"
          >
            <i className="ri-whatsapp-line mr-2 text-lg" aria-hidden />
            Message on WhatsApp
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-2.5 font-medium text-heading transition-colors hover:border-hover hover:text-hover"
          >
            <i className="ri-mail-line mr-2 text-lg" aria-hidden />
            {contactEmail}
          </a>
        </div>

        <form
          action="YOUR_FORMSPREE_ENDPOINT"
          method="POST"
          className="mx-auto mt-8 max-w-lg space-y-4"
        >
          <div>
            <label
              className="mb-2 block font-medium text-heading"
              htmlFor="name"
            >
              <i className="ri-user-line mr-1" /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-hover focus:outline-none"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-heading"
              htmlFor="email"
            >
              <i className="ri-mail-line mr-1" /> Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-hover focus:outline-none"
            />
          </div>
          <div>
            <label
              className="mb-2 block font-medium text-heading"
              htmlFor="message"
            >
              <i className="ri-chat-3-line mr-1" /> Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border px-4 py-2 focus:border-hover focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center rounded bg-accent px-6 py-2 text-white transition-colors hover:bg-hover"
          >
            <i className="ri-send-plane-fill mr-2" /> Send Message
          </button>
        </form>
      </div>
    </PageShell>
  );
}
