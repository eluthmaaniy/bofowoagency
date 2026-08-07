import Link from "next/link";
import { storeShowcases } from "../lib/data";

const featured = storeShowcases[0];

export function ShowcasePreview() {
  return (
    <section className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-left">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">
          My Work
        </p>
        <h2 className="mt-2 text-2xl font-bold text-ink md:text-3xl">
          Store Builds & Results
        </h2>
        <p className="mt-2 max-w-md text-sm text-ink/60">
          A look at real store builds, sales results, and growth I&apos;ve
          delivered for clients.
        </p>
        <div className="mt-4 h-1 w-12 rounded-sm bg-accent" />

        <div className="relative mt-8 aspect-video overflow-hidden rounded-2xl border border-border bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${featured.youtubeId}`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`${featured.title} video`}
          />
        </div>

        <Link
          href="/reviews"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:opacity-90"
        >
          See All Showcases & Reviews
          <i className="ri-arrow-right-line" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
