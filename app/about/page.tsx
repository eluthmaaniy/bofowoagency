import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Bofowo Agency, a Shopify and ecommerce specialist helping store owners build and optimize stores that actually convert.",
};

export default function AboutPage() {
  return <AboutContent />;
}
