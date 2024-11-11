import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { getCollectionById } from "@/shopify/helpers/getCollectionById";

export async function getHomePage() {
  const query = groq`*[_type == "homePage"][0]{
    heroSection {
      title,
      button,
      "slug": link->slugProxy,
      "images": {
        "left": images[].left.asset->url,
        "right": images[].right.asset->url,
      }
    },
    "productsSliderSection": {
      "id": productsSliderSection->store.id,
    }
  }`;

  const homePage = await client.fetch(query, { cache: "no-store" } as any);
  const shopifyCollection = await getCollectionById({
    id: homePage.productsSliderSection.id,
  });

  return { ...homePage, productsSliderSection: shopifyCollection };
}
