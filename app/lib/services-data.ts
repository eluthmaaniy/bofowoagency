export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  rating: number;
  reviewCount: number;
  startingPrice: number;
  offersVideoConsult: boolean;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Shopify Promotion",
    description: "",
    icon: "ri-shopping-bag-3-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620889/images_2_deqqsf.png",
    rating: 5.0,
    reviewCount: 477,
    startingPrice: 65,
    offersVideoConsult: true,
  },
  {
    id: "2",
    title: "Dropshipping Build",
    description: "",
    icon: "ri-truck-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620889/images_1_ridhn1.jpg",
    rating: 5.0,
    reviewCount: 155,
    startingPrice: 250,
    offersVideoConsult: true,
  },
  {
    id: "3",
    title: "TikTok Setup",
    description: "",
    icon: "ri-tiktok-fill",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620883/images_3_tycrwg.jpg",
    rating: 5.0,
    reviewCount: 120,
    startingPrice: 185,
    offersVideoConsult: true,
  },
  {
    id: "4",
    title: "Shopify SEO",
    description: "",
    icon: "ri-search-eye-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620882/images_3_mprujt.png",
    rating: 5.0,
    reviewCount: 88,
    startingPrice: 155,
    offersVideoConsult: true,
  },
  {
    id: "5",
    title: "Store Redesign",
    description: "",
    icon: "ri-store-2-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620882/images_1_gwfetk.jpg",
    rating: 5.0,
    reviewCount: 60,
    startingPrice: 150,
    offersVideoConsult: true,
  },
  {
    id: "6",
    title: "Google Merchant Fix",
    description: "",
    icon: "ri-google-fill",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758620881/images_4_k9xrdl.jpg",
    rating: 5.0,
    reviewCount: 32,
    startingPrice: 30,
    offersVideoConsult: true,
  },
  {
    id: "7",
    title: "Product Research",
    description: "",
    icon: "ri-bar-chart-2-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758621420/66daf16dc6f9b0f2173c2184_7_Amazon_Product_Research_Tactics_You_Need_in_2024_tbal5c.webp",
    rating: 5.0,
    reviewCount: 43,
    startingPrice: 35,
    offersVideoConsult: true,
  },
  {
    id: "8",
    title: "Etsy Setup",
    description: "",
    icon: "ri-handbag-line",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758621302/images_6_oj1p9i.jpg",
    rating: 4.8,
    reviewCount: 2,
    startingPrice: 120,
    offersVideoConsult: true,
  },
];
