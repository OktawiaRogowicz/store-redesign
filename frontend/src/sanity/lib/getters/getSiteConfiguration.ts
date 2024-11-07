import { groq } from "next-sanity";

import { client } from "../client";

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
          slug,
          "route": Link->route,
          isColored
        },
          collections[] {
          title,
          slug,
          "route": Link->route
        },
          categories[] {
          title,
          slug,
          "route": Link->route
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
  } as any);

  return siteConfigurationQuery;
}
