import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `https://${process.env.BASE_URL}`,
            lastModified: new Date(),
      changeFrequency: 'monthly',
            priority: 1
        },
        {url: `https://${process.env.BASE_URL}/about-us`},
        {url: `https://${process.env.BASE_URL}/contact-us`},
        {url: `https://${process.env.BASE_URL}/services`},
    ]
}