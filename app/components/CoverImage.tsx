import Image from "next/image";
import { coverImageUrl } from "@/app/lib/data";

export default function CoverImage() {
  return (
    <div className="relative h-48 w-full overflow-hidden bg-gray-200 md:h-64">
      <Image
        src={coverImageUrl}
        alt="Bofowo Agency cover banner"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
