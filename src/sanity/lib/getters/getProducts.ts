import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getProducts() {
  const query = groq`*[_type == "product"]`;

  const products = await client.fetch(query, { cache: "no-store" } as any);
  console.log("get sanity products: ", products);

  return products;
}
