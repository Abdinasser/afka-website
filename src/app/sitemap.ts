import type { MetadataRoute } from "next";

import { publicRoutes, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return publicRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
