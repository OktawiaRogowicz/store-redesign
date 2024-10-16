import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { getCollectionById } from "@/shopify/helpers/getCollectionById";

type SanityCollectionType = {
  id: number;
};

export const gql = String.raw;

const convertCollectionResultToCollectionType = ({
  collection,
  products,
}: {
  collection: SanityCollectionType;
  products: any[];
}) => {
  return {
    collection: collection,
    products: products,
  };
};

export async function getCollection({ slug }: { slug: string }) {
  const query = groq`*[_type == "collection" && route == "${slug}"][0] {
    title,
    slug,
    store,
  }`;

  const collection = await client.fetch(query, {
    params: { cache: "no-store" },
  } as any);

  if (!collection) return;

  const shopifyStorefrontCollection = await getCollectionById({
    id: collection.store.id,
    productsQuantity: 20,
  });

  return convertCollectionResultToCollectionType({
    collection: collection,
    products: shopifyStorefrontCollection.products,
  });
}
