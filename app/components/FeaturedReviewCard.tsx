import Image from "next/image";
import Link from "next/link";
import type { FeaturedReview } from "@/app/lib/data";

type FeaturedReviewCardProps = {
  review: FeaturedReview;
};

export default function FeaturedReviewCard({ review }: FeaturedReviewCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={review.avatar}
            alt={review.username}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
            unoptimized
          />
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">{review.username}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={review.flag}
                alt={review.country}
                className="inline-block"
              />
            </div>
            <p className="text-xs text-gray-500">{review.country}</p>
          </div>
        </div>
        <div className="text-sm text-black">
          {Array.from({ length: review.rating }).map((_, i) => (
            <i key={i} className="ri-star-fill" />
          ))}
          <span className="ml-2">{review.rating}</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-700">{review.text}</p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={review.gigImage}
            alt="gig"
            width={72}
            height={48}
            className="h-12 w-[72px] rounded object-cover"
          />
          <div className="text-xs text-gray-500">
            {review.priceRange}
            {review.duration ? ` • ${review.duration}` : ""}
          </div>
        </div>
        <Link
          href="/full-reviews"
          className="text-sm text-blue-600 hover:underline"
        >
          See full review
        </Link>
      </div>
    </div>
  );
}
