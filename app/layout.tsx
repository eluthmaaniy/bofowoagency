import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StickyContact } from "./components/StickyContact";
import {
  contactEmail,
  coverImageUrl,
  profileImageUrl,
} from "./lib/data";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bofowoagency.com"),
  title: {
    default: "Bofowo Agency — Shopify & Ecommerce Expert",
    template: "%s | Bofowo Agency",
  },
  description:
    "Bofowo Agency is a Shopify and ecommerce specialist helping store owners design, build, and optimize stores that convert. Real client results, real store showcases.",
  keywords: [
    "Shopify expert",
    "ecommerce expert",
    "Shopify store builder",
    "Shopify dropshipping expert",
    "Facebook ads expert",
    "Etsy listing expert",
    "Shopify store optimization",
    "Bofowo Agency",
  ],
  authors: [{ name: "Bofowo Agency" }],
  openGraph: {
    title: "Bofowo Agency — Shopify & Ecommerce Expert",
    description:
      "Shopify and ecommerce specialist helping store owners build stores that convert. Real client results, real store showcases.",
    url: "https://bofowoagency.com",
    siteName: "Bofowo Agency",
    images: [
      {
        url: coverImageUrl,
        width: 1200,
        height: 630,
        alt: "Bofowo Agency - Shopify and Ecommerce Expert",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bofowo Agency — Shopify & Ecommerce Expert",
    description:
      "Shopify and ecommerce specialist helping store owners build stores that convert.",
    images: [coverImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.jpg", type: "image/jpeg" }],
    apple: [{ url: "/apple-icon.jpg", type: "image/jpeg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bofowo Agency",
  description:
    "Shopify and ecommerce expert helping store owners design, build, and optimize stores that convert.",
  url: "https://bofowoagency.com",
  image: profileImageUrl,
  priceRange: "$$",
  areaServed: "Worldwide",
  email: contactEmail,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pb-24">{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}
