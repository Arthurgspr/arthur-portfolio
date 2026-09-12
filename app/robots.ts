import type { MetadataRoute } from "next";

const siteUrl = "https://arthurgaspar.dev"; // MOCK — substituir pelo domínio real ao publicar

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
