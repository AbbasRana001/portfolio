import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const publicRoutes = ["/", "/projects", "/resume"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteConfig.url;
  if (!siteUrl) return [];

  return publicRoutes.map(route => ({ url: new URL(route, siteUrl).toString() }));
}
