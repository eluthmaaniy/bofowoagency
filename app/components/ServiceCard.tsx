import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/app/lib/data";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <Image
        src={service.image}
        alt={service.title}
        width={640}
        height={360}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="flex items-center gap-2 font-bold text-heading">
          <i className={`${service.icon} text-accent`} /> {service.title}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <i className="ri-star-fill text-black" />
          <span>{service.rating}</span>
          <Link href="/reviews" className="text-gray-600 hover:underline">
            ({service.reviewCount})
          </Link>
        </div>
        <p className="mt-1 text-sm text-gray-600">From ${service.startingPrice}</p>
        {service.offersVideoConsult && (
          <p className="text-xs text-gray-500">Offers video consultations</p>
        )}
      </div>
    </div>
  );
}
