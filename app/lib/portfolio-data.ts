export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
  categoryTag?: string;
  image: string;
  imageAlt?: string;
  imageCount?: number;
  orderedBy?: string;
}

export interface PortfolioProof {
  id: string;
  label: string;
  url: string;
}

export interface PortfolioVideoTestimonial {
  id: string;
  youtubeId: string;
}

/** Reordered vs Rasab — different featured image + gallery sequence */
export const portfolioItems: PortfolioItem[] = [
  {
    id: "featured",
    title: "Email Marketing",
    description:
      "Email marketing is a powerful marketing channel, a form of direct marketing as well as digital marketing, that uses...",
    categoryTag: "Email Marketing",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609505/IMG-20250921-WA0091_ymtuvy.jpg",
    imageAlt: "Featured",
    imageCount: 5,
  },
  {
    id: "g1",
    title: "",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609504/IMG-20250921-WA0090_g6lmty.jpg",
    imageAlt: "Project",
  },
  {
    id: "g2",
    title: "",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609405/IMG-20250921-WA0043_pdhfii.jpg",
    imageAlt: "Project",
  },
  {
    id: "g3",
    title: "",
    image:
      "https://res.cloudinary.com/dr83qj6bf/image/upload/v1758609506/IMG-20250921-WA0092_ieopxm.jpg",
    imageAlt: "Project",
  },
];

/** Bofowo store showcase videos — reordered */
export const portfolioVideoTestimonials: PortfolioVideoTestimonial[] = [
  { id: "1", youtubeId: "KX2CuX3pb94" },
  { id: "2", youtubeId: "JzFfn3pn4Ug" },
  { id: "3", youtubeId: "0yJ8lNYgV0E" },
  { id: "4", youtubeId: "0f6bA-uSpmc" },
];

export const portfolioProofs: PortfolioProof[] = [
  {
    id: "1",
    label: "View Proof 1",
    url: "https://drive.google.com/file/d/1J15GTYTyGMmvlPSDb19RD7Oz1kKfiWL6/view?usp=sharing",
  },
  {
    id: "2",
    label: "View Proof 2",
    url: "https://drive.google.com/file/d/1mxpbCc1AW-IFWrAtbgj2RnVSCJP26dmB/view?usp=drivesdk",
  },
  {
    id: "3",
    label: "View Proof 3",
    url: "https://drive.google.com/file/d/1K4alYhBd3o9ThZjyOC2gXPyGf211btSf/view?usp=sharing",
  },
];
