export interface Review {
  id: string;
  username: string;
  avatar: string;
  flag?: string;
  country?: string;
  timeAgo?: string;
  rating: number;
  text: string;
  priceRange?: string;
  duration?: string;
  serviceType?: string;
  gigImage?: string;
  reply?: string;
  showHelpful?: boolean;
}

export interface FeaturedReview {
  id: string;
  username: string;
  avatar: string;
  flag: string;
  country: string;
  rating: number;
  text: string;
  priceRange: string;
  duration: string;
  gigImage: string;
}

export interface StarBreakdownItem {
  label: string;
  count: number;
  widthPercent: number;
}

export const starBreakdown: StarBreakdownItem[] = [
  { label: "5 Stars", count: 919, widthPercent: 100 },
  { label: "4 Stars", count: 17, widthPercent: 10 },
  { label: "3 Stars", count: 2, widthPercent: 3 },
  { label: "2 Stars", count: 2, widthPercent: 3 },
  { label: "1 Star", count: 2, widthPercent: 3 },
];

export const qualityMetrics = [
  { label: "Seller communication level", score: 5 },
  { label: "Quality of delivery", score: 5 },
  { label: "Value of delivery", score: 5 },
];

/** Reordered vs Rasab sequence — same items, different display order */
export const featuredReviews: FeaturedReview[] = [
  {
    id: "f4",
    username: "london_listings",
    avatar: "https://i.pravatar.cc/60?img=15",
    flag: "https://flagcdn.com/24x18/gb.png",
    country: "United Kingdom",
    rating: 5,
    text: "Professional store setup with clear guidance every step. I'll be back for ads and email flows next.",
    priceRange: "$180",
    duration: "4 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609505/IMG-20250921-WA0091_ymtuvy.jpg",
  },
  {
    id: "f6",
    username: "maple_markets",
    avatar: "https://i.pravatar.cc/60?img=47",
    flag: "https://flagcdn.com/24x18/ca.png",
    country: "Canada",
    rating: 5,
    text: "Delivered on time with recordings and notes so my team could manage the store after handoff. Highly recommend.",
    priceRange: "$150",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
  },
  {
    id: "f2",
    username: "mumbai_merch",
    avatar: "https://i.pravatar.cc/60?img=32",
    flag: "https://flagcdn.com/24x18/in.png",
    country: "India",
    rating: 5,
    text: "He connected Facebook Shop and Instagram Shopping for my catalog and launched a campaign that finally brought real buyers — not just clicks...",
    priceRange: "$100-$200",
    duration: "7 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
  },
  {
    id: "f5",
    username: "berlin_basics",
    avatar: "https://i.pravatar.cc/60?img=20",
    flag: "https://flagcdn.com/24x18/de.png",
    country: "Germany",
    rating: 5,
    text: "Store speed, layout, and checkout feel polished now. Communication was excellent throughout the project.",
    priceRange: "$320",
    duration: "6 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
  },
  {
    id: "f1",
    username: "shopflow_paris",
    avatar: "https://i.pravatar.cc/60?img=11",
    flag: "https://flagcdn.com/24x18/fr.png",
    country: "France",
    rating: 5,
    text: "Bofowo Agency rebuilt our Shopify funnel and Meta ads from the ground up. Clear strategy, clean execution, and our conversion rate jumped within the first week...",
    priceRange: "$400-$600",
    duration: "5 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
  },
  {
    id: "f3",
    username: "coastal_cart",
    avatar: "https://i.pravatar.cc/60?img=5",
    flag: "https://flagcdn.com/24x18/us.png",
    country: "United States",
    rating: 5,
    text: "Fast replies, structured process, and product pages that look trustworthy. Sales started improving almost immediately after launch...",
    priceRange: "$250",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
  },
];

export const reviews: Review[] = [
  {
    id: "r3",
    username: "coastal_cart",
    avatar: "https://i.pravatar.cc/60?img=5",
    flag: "https://flagcdn.com/24x18/us.png",
    country: "United States",
    timeAgo: "2 months ago",
    rating: 5,
    text: "Excellent communication and fast delivery. The store updates improved conversions quickly, and the screen recordings made handoff simple for my VA.",
    priceRange: "$250",
    duration: "3 days",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
    showHelpful: true,
  },
  {
    id: "r1",
    username: "shopflow_paris",
    avatar: "https://i.pravatar.cc/60?img=11",
    flag: "https://flagcdn.com/24x18/fr.png",
    country: "France",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Working with Bofowo Agency completely changed how we run paid traffic. Google Ads and Meta campaigns are finally structured, tracked, and profitable. Clear instructions and zero fluff.",
    priceRange: "$400-$600",
    duration: "5 days",
    serviceType: "Website Promotion",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
    reply:
      "Appreciate the kind words — glad the campaigns are performing. Happy to keep optimizing with you.",
  },
  {
    id: "r2",
    username: "mumbai_merch",
    avatar: "https://i.pravatar.cc/60?img=32",
    flag: "https://flagcdn.com/24x18/in.png",
    country: "India",
    timeAgo: "1 month ago",
    rating: 5,
    text: "Bofowo set up my Facebook and Instagram Shops properly and built a campaign that matches my products. Detail-oriented and easy to work with from start to finish.",
    priceRange: "$100-$200",
    duration: "7 days",
    serviceType: "Social Commerce Setup & Integration",
    gigImage:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
    reply:
      "Thanks! It was great collaborating with you — wishing you strong sales ahead.",
  },
];
