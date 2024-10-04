import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getProduct({ slug }: { slug: string }) {
  const query = groq`*[_type == "product" && store.slug.current == "${slug}"][0] {
    "moreProductsSection": moreProductsSection[]->store,
    store,
  }`;

  const product = await client.fetch(query);

  return product;
}
