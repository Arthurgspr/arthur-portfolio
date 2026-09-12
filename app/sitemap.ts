import type { MetadataRoute } from "next";

const siteUrl = "https://arthurgaspar.dev"; // MOCK — substituir pelo domínio real ao publicar

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
