import Image from "next/image";
import Link from "next/link";
import {
  languages,
  location,
  profileImageUrl,
  rating,
  reviewCount,
  statLabel,
  tagline,
} from "@/app/lib/data";
import ContactButton from "./ContactButton";

export default function ProfileSidebar() {
  return (
    <div className="relative md:sticky md:top-4 md:col-span-3 md:self-start">
      <div className="absolute -top-16 left-0 md:static md:top-0">
        <Image
          src={profileImageUrl}
          alt="Bofowo Agency profile photo"
          width={128}
          height={128}
          priority
          className="h-32 w-32 rounded-full border-4 border-green-500 bg-white shadow-md transition-colors hover:border-hover"
        />
      </div>
      <div className="pt-20 md:pt-4">
        <h1 className="text-2xl font-bold text-heading">Bofowo Agency</h1>
        <div className="flex items-center text-sm">
          <i className="ri-star-fill text-black" />
          <span className="ml-1 text-black">{rating}</span>
          <Link href="/reviews" className="ml-1 text-gray-600">
            ({reviewCount})
          </Link>
          <span className="ml-2 flex items-center rounded-full bg-pink/10 px-2 py-1 text-xs text-pink">
            <i className="ri-award-fill mr-1" /> {statLabel}
          </span>
        </div>
        <p className="font-medium text-heading">{tagline}</p>
        <div className="mt-2 flex items-center text-sm text-gray-600">
          <i className="ri-map-pin-line mr-1" /> {location}
          <i className="ri-global-line ml-4 mr-1" /> {languages}
        </div>
        <div className="mt-6 hidden md:block">
          <ContactButton variant="desktop" />
        </div>
      </div>
    </div>
  );
}
