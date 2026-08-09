import type { MetadataRoute } from "next";

const baseUrl = "https://bofowoagency.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.8 },
    { path: "/reviews", priority: 0.8 },
    { path: "/full-reviews", priority: 0.7 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/full-portfolio", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  }));
}
