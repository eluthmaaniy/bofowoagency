import Link from "next/link";
import {
  certifications,
  clientReviews,
  skills,
} from "../lib/data";
import { SkillsList } from "./SkillsList";

export function AboutPreview() {
  return (
    <section className="border-t border-border bg-surface px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-left">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">
          About Me
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
          Hi, I&apos;m Bofowo Agency
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink/70">
          I&apos;m a Shopify and ecommerce specialist who helps store owners
          turn their products into fully functioning, profitable online brands.
          My work covers everything from complete store builds to product
          listings, ad management, and conversion-focused optimization. Every
          store I work on is treated with the same care I&apos;d give my own —
          because your growth is the whole point.
        </p>
        <div className="mt-5 h-1 w-12 rounded-sm bg-accent" />
      </div>

      <div className="mx-auto mt-10 max-w-3xl text-left">
        <h3 className="mb-4 text-xl font-bold text-ink">Skills & Expertise</h3>
        <SkillsList skills={skills} />
      </div>

      <div className="mx-auto mt-14 max-w-3xl text-left">
        <h3 className="mb-1 text-xl font-bold text-ink">What Clients Say</h3>
        <p className="mb-6 text-sm text-ink/60">
          Real words from people I&apos;ve worked with.
        </p>

        <div className="grid max-w-md grid-cols-2 gap-4">
          {clientReviews.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${item.clientName} video review`}
              />
            </div>
          ))}
        </div>

        <Link
          href="/reviews"
          className="mt-4 inline-block font-medium text-ink transition hover:text-accent"
        >
          See all reviews & showcases →
        </Link>
      </div>

      <div className="mx-auto mt-14 max-w-md text-left">
        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-accent">
          Certifications
        </h3>
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
    </section>
  );
}
