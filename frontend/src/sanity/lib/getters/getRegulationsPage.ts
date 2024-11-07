import { groq } from "next-sanity";

import { client } from "../client";

export async function getRegulationsPage() {
  const query = groq`*[_type == "regulationsPage"][0]`;

  const regulationsPage = await client.fetch(query, {
    cache: "no-store",
  } as any);

  return regulationsPage;
}
