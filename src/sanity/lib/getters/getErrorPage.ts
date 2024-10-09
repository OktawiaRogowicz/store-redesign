import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";

export async function getErrorPage() {
  const query = groq`*[_type == "errorPage"][0]`;

  const errorPage = await client.fetch(query, {
    cache: "no-store",
  } as any);

  return errorPage;
}
