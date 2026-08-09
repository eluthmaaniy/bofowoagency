"use client";

import PageShell from "@/app/components/PageShell";
import PortfolioCard from "@/app/components/PortfolioCard";
import { fullPortfolioItems } from "@/app/lib/data";
import Image from "next/image";
import { useMemo, useState } from "react";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "fashion", label: "Fashion" },
  { key: "beauty", label: "Beauty" },
  { key: "jewelry", label: "Jewelry" },
  { key: "watches", label: "Watches" },
  { key: "food", label: "Food & Bakery" },
  { key: "furniture", label: "Furniture" },
  { key: "photography", label: "Photography" },
  { key: "wedding", label: "Wedding" },
  { key: "healthcare", label: "Healthcare" },
  { key: "hair", label: "Hair Care" },
];

const featuredShowcase = [
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609495/IMG-20250921-WA0088_kardpv.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609488/IMG-20250921-WA0084_wa8sbj.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609495/IMG-20250921-WA0087_vuocad.jpg",
  "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609494/IMG-20250921-WA0085_r0wxvo.jpg",
];

export default function FullPortfolioPage() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "all") return fullPortfolioItems;
    return fullPortfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <PageShell>
      <div className="mt-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-bold text-heading md:text-2xl">
            Full Portfolio (All Projects)
          </h2>
          <div className="mt-4 md:mt-0">
            <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-hover">
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="category">By Category</option>
            </select>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-heading">
            Featured Showcase
          </h3>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
            {featuredShowcase.map((src) => (
              <div key={src} className="min-w-[260px] snap-center md:min-w-0">
                <Image
                  src={src}
                  alt="Featured showcase"
                  width={640}
                  height={360}
                  className="h-64 w-full rounded-lg object-cover shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setFilter(item.key)}
              className={`rounded-full border border-gray-300 px-4 py-2 text-sm transition-all ${
                filter === item.key
                  ? "border-hover bg-hover text-white"
                  : "bg-white text-heading hover:border-hover"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <PortfolioCard
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                description: item.description,
                category: item.category,
                image: item.image,
                imageAlt: item.imageAlt,
                orderedBy: item.orderedBy,
              }}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
