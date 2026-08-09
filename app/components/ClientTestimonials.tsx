import { clientReviews } from "@/app/lib/data";

export default function ClientTestimonials() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-heading md:text-2xl">
        What Clients Say
      </h2>
      <div className="mt-4 grid max-w-md grid-cols-2 gap-4">
        {clientReviews.map((item) => (
          <div
            key={item.id}
            className="relative aspect-[9/16] overflow-hidden rounded-lg border border-border bg-black"
          >
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              className="h-full w-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={item.clientName}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
