import Image from "next/image";
import type { PortfolioItem } from "@/app/lib/data";

type PortfolioCardProps = {
  item: PortfolioItem;
  featured?: boolean;
};

export default function PortfolioCard({
  item,
  featured = false,
}: PortfolioCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative">
        <Image
          src={item.image}
          alt={item.imageAlt || item.title}
          width={featured ? 1200 : 640}
          height={featured ? 640 : 480}
          className={`w-full object-cover ${featured ? "h-64" : "h-48 md:h-64"}`}
        />
        {featured && item.imageCount != null && (
          <div className="absolute bottom-4 right-4 flex items-center rounded-full bg-gray-600 px-2 py-1 text-sm text-white">
            <i className="ri-image-line mr-1" /> {item.imageCount}
          </div>
        )}
      </div>
      {(item.title || item.description || item.category) && (
        <div className="p-4">
          {item.title && (
            <h3
              className={
                featured
                  ? "text-xl font-bold text-heading"
                  : "font-semibold text-gray-800"
              }
            >
              {item.title}
            </h3>
          )}
          {item.description && (
            <p
              className={
                featured ? "mt-2 text-gray-700" : "text-sm text-gray-600"
              }
            >
              {item.description}
            </p>
          )}
          {item.orderedBy && (
            <p className="mt-2 text-xs text-gray-500">
              Ordered by{" "}
              <span className="font-medium text-gray-800">{item.orderedBy}</span>
            </p>
          )}
          {item.categoryTag && (
            <span className="mt-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-heading transition-colors hover:bg-hover hover:text-white">
              {item.categoryTag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
