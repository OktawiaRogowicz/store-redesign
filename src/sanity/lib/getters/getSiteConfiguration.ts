import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getSiteConfiguration() {
  const footerQuery = groq`
    *[_type == "footer"][0]{
      ...,
      menu[] {
        title,  
        "slug": link->slug
      }
    }`;

  const headerQuery = groq`
    *[_type == "header"][0]{
      menu {
        selected[] {
          title,
          "slug": Link->slug,
          isColored
        },
          collections[] {
          title,
          "slug": Link->slug
        },
          categories[] {
          title,
          "slug": Link->slug
        },
      }
    }`;

  const query = groq`{
      "header": ${headerQuery},
      "footer": ${footerQuery},
    }
  `;

  const siteConfigurationQuery = await client.fetch(query, {
    cache: "no-store",
  });

  return siteConfigurationQuery;
}
