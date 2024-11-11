import { groq } from "next-sanity";
import { client } from "../client";
import { SanityCollectionType } from "../../schemas/documents/collection";

export async function getCollections(): Promise<SanityCollectionType[]> {
  const query = groq`*[_type == "collection"]`;

  const collections = await client.fetch(query, { cache: "no-store" } as any);

  return collections;
}
