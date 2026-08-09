import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import CoverImage from "@/app/components/CoverImage";
import Footer from "@/app/components/Footer";
import {
  contactEmail,
  coverImageUrl,
  profileImageUrl,
} from "@/app/lib/data";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bofowoagency.com"),
  title: {
    default: "Bofowo Agency — Top Rated Shopify Expert & Ecommerce Specialist",
    template: "%s | Bofowo Agency",
  },
  description:
    "Bofowo Agency is a top-rated Shopify and ecommerce specialist helping store owners design, build, and optimize stores that convert. Real client results and store showcases.",
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
    title: "Bofowo Agency — Top Rated Shopify Expert & Ecommerce Specialist",
    description:
      "Top-rated Shopify expert helping store owners build stores that convert. Real client results and store showcases.",
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
    title: "Bofowo Agency — Top Rated Shopify Expert & Ecommerce Specialist",
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
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CoverImage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
