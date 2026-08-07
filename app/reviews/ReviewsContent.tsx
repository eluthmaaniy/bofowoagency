"use client";

import { useState } from "react";
import {
  clientReviews,
  storeShowcases,
  whatsappLink,
} from "../lib/data";

type Tab = "clients" | "showcases";

export function ReviewsContent() {
  const [activeTab, setActiveTab] = useState<Tab>("clients");
  const [showAllReviews, setShowAllReviews] = useState(false);

  const visibleReviews = showAllReviews
    ? clientReviews
    : clientReviews.slice(0, 4);
  const hasMoreReviews = clientReviews.length > 4;

  return (
    <div>
      <div className="mx-auto max-w-2xl px-6 pt-14 text-left md:pt-20">
        <p className="text-sm font-bold uppercase tracking-wide text-accent">
          Reviews
        </p>
        <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
          Client Reviews & Store Showcases
        </h1>
        <p className="mt-3 text-base text-ink/60">
          Real feedback from clients, and real results from the stores I&apos;ve
          built.
        </p>
        <div className="mt-4 h-1 w-12 rounded-sm bg-accent" />
      </div>

      <div className="mx-auto mt-8 flex max-w-2xl gap-2 px-6">
        <button
          type="button"
          onClick={() => setActiveTab("clients")}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "clients"
              ? "bg-accent text-white"
              : "bg-surface text-ink/60 hover:text-ink"
          }`}
        >
          <i className="ri-chat-smile-2-line" aria-hidden />
          Client Reviews
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("showcases")}
          className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition ${
            activeTab === "showcases"
              ? "bg-accent text-white"
              : "bg-surface text-ink/60 hover:text-ink"
          }`}
        >
          <i className="ri-play-circle-line" aria-hidden />
          Store Showcases
        </button>
      </div>

      {activeTab === "clients" && (
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {visibleReviews.map((item) => (
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

          {hasMoreReviews && !showAllReviews && (
            <button
              type="button"
              onClick={() => setShowAllReviews(true)}
              className="mt-6 rounded-lg border border-border bg-surface px-6 py-2.5 text-sm font-medium text-ink transition hover:border-accent"
            >
              Show more reviews
            </button>
          )}
        </div>
      )}

      {activeTab === "showcases" && (
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {storeShowcases.map((item) => (
              <div key={item.id}>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}`}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`${item.title} video`}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-ink">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto mt-4 max-w-2xl border-t border-border px-6 pb-16 pt-10 text-left">
        <p className="text-base text-ink/70">
          Want results like these for your store?
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
