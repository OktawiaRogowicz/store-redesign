import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getReturnsPage() {
  const query = groq`*[_type == "returnsPage"][0]`;

  const returnsPage = await client.fetch(query, { cache: "no-store" } as any);

  return returnsPage;
}
