import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { SanityCollectionType } from "@/sanity/schemas/documents/collection";

export async function getCollections(): Promise<SanityCollectionType[]> {
  const query = groq`*[_type == "collection"]`;

  const collections = await client.fetch(query, { cache: "no-store" } as any);

  return collections;
}
