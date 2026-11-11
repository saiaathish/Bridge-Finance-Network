import type { MetadataRoute } from "next";
import { absoluteUrl, publicRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map(path => ({
    url: absoluteUrl(path),
  }));
}
