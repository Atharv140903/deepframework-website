import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

// Add each new page (case studies, service pages) here.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteConfig.url, changeFrequency: "monthly", priority: 1 }];
}
