import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import PortfolioCard from "@/app/components/PortfolioCard";
import {
  portfolioItems,
  portfolioProofs,
  portfolioVideoTestimonials,
} from "@/app/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Shopify store builds, client video testimonials, and sales proofs from Bofowo Agency.",
};

export default function PortfolioPage() {
  const [featured, ...gallery] = portfolioItems;

  return (
    <PageShell>
      <div className="mt-8">
        <h2 className="text-xl font-bold text-heading md:text-2xl">Portfolio</h2>

        <div className="mt-6">
          <PortfolioCard item={featured} featured />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/full-portfolio"
          className="rounded bg-accent px-4 py-2 text-white hover:bg-hover"
        >
          View +50 All Projects
        </Link>
      </div>

      <div className="mt-12">
        <h3 className="text-center text-lg font-bold text-heading md:text-xl">
          Satisfied Client Video Testimonial
        </h3>
        <div className="mt-6 overflow-x-auto">
          <div className="flex snap-x snap-mandatory gap-6 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4">
            {portfolioVideoTestimonials.map((video) => (
              <div
                key={video.id}
                className="relative aspect-[9/16] min-w-[260px] snap-center"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  className="absolute inset-0 h-full w-full rounded-lg shadow-md"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Client video testimonial"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-center text-lg font-bold text-heading md:text-xl">
          Sales Proof
        </h3>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
          {portfolioProofs.map((proof) => (
            <a
              key={proof.id}
              href={proof.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-accent px-6 py-2 text-white transition hover:bg-hover"
            >
              {proof.label}
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
