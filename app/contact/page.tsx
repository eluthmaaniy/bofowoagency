import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bofowo Agency for your next Shopify or ecommerce project. Fast response by email.",
};

export default function ContactPage() {
  return <ContactContent />;
}
