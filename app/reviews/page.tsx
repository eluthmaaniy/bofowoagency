import type { Metadata } from "next";
import { ReviewsContent } from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Client Reviews & Store Showcases",
  description:
    "Watch real client testimonials and Shopify store showcases from Bofowo Agency — real results, real growth.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
