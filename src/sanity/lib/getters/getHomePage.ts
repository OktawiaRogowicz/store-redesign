import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getHomePage() {
  const query = groq`*[_type == "homePage"][0]{
    heroSection {
      title,
      button,
      "images": {
        "left": images[].left.asset->url,
        "right": images[].right.asset->url,
      }
    },
    productsSliderSection {
      title,
      "products": products[]->store,
    }
  }`;

  const homePage = await client.fetch(query);

  return homePage;
}
