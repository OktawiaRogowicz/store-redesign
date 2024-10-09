export async function getCollection({ slug }: { slug: string }) {
  const shopifyCollectionResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SHOPIFY_API}collections/${slug}.json`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_KEY,
      } as any,
    },
  );

  const shopifyCollection = await shopifyCollectionResponse.json();

  return shopifyCollection;
}
