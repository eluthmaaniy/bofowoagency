import {
  certifications,
  skills,
  whatsappLink,
} from "../lib/data";
import { SkillsList } from "../components/SkillsList";

const approachSteps = [
  {
    title: "Audit",
    description:
      "I start by reviewing your current store (or your product idea, if you're starting fresh) to find exactly what's holding back sales.",
  },
  {
    title: "Strategy",
    description:
      "Before touching any design or code, I map out what the store needs — structure, positioning, and the customer journey from click to checkout.",
  },
  {
    title: "Build & Optimize",
    description:
      "I design, build, and optimize the store itself — product pages, checkout flow, speed, and everything that affects conversion.",
  },
  {
    title: "Track & Improve",
    description:
      "Once live, I monitor performance and keep refining based on real data, not guesswork.",
  },
] as const;

export function AboutContent() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14 text-left md:py-20">
      <p className="text-sm font-bold uppercase tracking-wide text-accent">
        About
      </p>
      <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
        A Bit More About Bofowo Agency
      </h1>
      <div className="mt-4 h-1 w-12 rounded-sm bg-accent" />

      <div className="mt-8 space-y-4 text-base leading-relaxed text-ink/70">
        <p>
          I work with ecommerce founders who are serious about turning their
          store into a real, sustainable business — not just a side project. My
          focus is Shopify: store builds, product listings, ad management, and
          the kind of optimization that actually moves sales numbers.
        </p>
        <p>
          Most of the stores I take on come to me either stuck at zero, or
          plateaued after an early burst of sales. Both problems usually come
          down to the same things — unclear positioning, a store that
          doesn&apos;t build trust fast enough, or traffic that isn&apos;t being
          converted properly. I fix all three.
        </p>
        <p>
          I don&apos;t just hand over a finished store and disappear. I stay
          close to the results — tracking what&apos;s working, adjusting what
          isn&apos;t, and making sure the store keeps performing after launch,
          not just on day one.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="mb-6 text-xl font-bold text-ink">
          How I Approach a Project
        </h2>
        <div className="relative space-y-8 border-l-2 border-border pl-6">
          {approachSteps.map((step) => (
            <div key={step.title} className="relative">
              <span
                className="absolute -left-[29px] top-0 h-3 w-3 rounded-sm bg-accent"
                aria-hidden
              />
              <p className="text-sm font-semibold text-ink">{step.title}</p>
              <p className="mt-1 text-sm text-ink/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 text-xl font-bold text-ink">
          What I Bring to the Table
        </h2>
        <SkillsList skills={skills} />
      </div>

      <div className="mt-10 max-w-md">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
          Certifications
        </h2>
        <ul>
          {certifications.map((entry, index) => (
            <li
              key={`${entry.name}-${index}`}
              className={`flex items-start gap-3 ${
                index === certifications.length - 1 ? "mb-0" : "mb-4"
              }`}
            >
              <i className="ri-award-line text-xl text-ink/40" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-ink">{entry.name}</p>
                <p className="text-sm text-ink/70">{entry.issuer}</p>
                <p className="text-xs text-ink/50">{entry.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 border-t border-border pt-10 text-left">
        <p className="text-base text-ink/70">
          Got a store that needs work, or an idea you want to launch properly?
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 font-medium text-white transition hover:opacity-90"
        >
          <i className="ri-whatsapp-line" aria-hidden />
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
}
