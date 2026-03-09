import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://apdsoftwaresolutions.com",
            lastModified: new Date(),
        },
        {
            url: "https://apdsoftwaresolutions.com/servicios",
            lastModified: new Date(),
        },
        {
            url: "https://apdsoftwaresolutions.com/privacy",
            lastModified: new Date(),
        },
    ];
}