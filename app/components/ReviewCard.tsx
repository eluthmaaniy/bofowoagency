import Image from "next/image";
import type { Review } from "@/app/lib/data";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  const metaParts = [
    review.priceRange,
    review.duration,
    review.serviceType,
  ].filter(Boolean);

  return (
    <article className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex items-start justify-between">
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
              {review.flag && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={review.flag} alt={review.country || ""} />
              )}
            </div>
            {review.timeAgo && (
              <p className="text-xs text-gray-500">{review.timeAgo}</p>
            )}
          </div>
        </div>

        <div className="text-sm text-black">
          {Array.from({ length: review.rating }).map((_, i) => (
            <i key={i} className="ri-star-fill" />
          ))}
        </div>
      </div>

      <p className="mt-3 text-gray-700">{review.text}</p>

      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {review.gigImage && (
            <Image
              src={review.gigImage}
              alt="gig"
              width={72}
              height={48}
              className="h-12 w-[72px] rounded object-cover"
            />
          )}
          {metaParts.length > 0 && (
            <div className="text-xs text-gray-500">{metaParts.join(" • ")}</div>
          )}
        </div>

        {review.reply ? (
          <div className="max-w-xs text-xs text-gray-500">
            <div className="font-medium text-heading">Seller&apos;s Response</div>
            <div className="mt-1">{review.reply}</div>
          </div>
        ) : review.showHelpful ? (
          <div className="text-xs text-gray-500">
            Helpful?{" "}
            <a href="#" className="text-gray-700 hover:underline">
              Yes
            </a>{" "}
            <span className="mx-2">|</span>{" "}
            <a href="#" className="text-gray-700 hover:underline">
              No
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
