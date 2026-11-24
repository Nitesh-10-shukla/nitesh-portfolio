import type { MetadataRoute } from "next";
import { personalData } from "@/utils/data/personal-data";

/**
 * The portfolio is a single page with in-page anchors, so the sitemap lists
 * exactly one URL. (The previous version listed /about, /projects and /blog,
 * none of which exist as routes.)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personalData.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
