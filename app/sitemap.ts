import type { MetadataRoute } from "next";
import { BIZ } from "@/lib/business";
import { SERVICES } from "@/content/services";
import { AREAS } from "@/lib/areas";
import { BLOG_POSTS } from "@/content/blog";
import { LOGO_PHOTO, WORK_PHOTOS, serviceHero } from "@/lib/photos";

// Required for `output: "export"` — prerenders /sitemap.xml at build time.
export const dynamic = "force-static";

// Bump this only when page copy, services, or area content actually changes.
// A truthful <lastmod> is a crawl signal; stamping every build trains Google
// to ignore it entirely.
const LAST_CONTENT_UPDATE = new Date("2026-08-12");

const abs = (src: string) => `${BIZ.url}${src}`;

/** Absolute image URLs, dropping any missing photos. */
const img = (...photos: Array<{ src: string } | undefined>): string[] =>
  photos.filter((p): p is { src: string } => Boolean(p)).map((p) => abs(p.src));

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BIZ.url;

  const staticPages: Array<{
    path: string;
    priority: number;
    changeFrequency: "weekly" | "monthly" | "yearly";
    images?: string[];
  }> = [
    { path: "", priority: 1.0, changeFrequency: "weekly", images: img(LOGO_PHOTO, ...WORK_PHOTOS.slice(0, 2)) },
    { path: "/quote", priority: 0.9, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/gallery", priority: 0.7, changeFrequency: "monthly", images: img(...WORK_PHOTOS.slice(0, 10)) },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/hours", priority: 0.5, changeFrequency: "yearly" },
    { path: "/license", priority: 0.5, changeFrequency: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p.path}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
      ...(p.images?.length ? { images: p.images } : {}),
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.9,
      images: img(serviceHero(s.slug)),
    })),
    ...BLOG_POSTS.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [abs(p.heroImage)],
    })),
    ...AREAS
      // zip-area pages are noindex — keep them out of the sitemap
      .filter((a) => a.kind !== "zip-area")
      .map((a) => ({
        url: `${base}/service-areas/${a.slug}`,
        lastModified: LAST_CONTENT_UPDATE,
        changeFrequency: "monthly" as const,
        priority: a.main ? 0.8 : 0.6,
      })),
  ];
}
