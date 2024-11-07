import { gql } from "../../sanity/lib/getters/getCollection";

const convertShopifyCollectionResponse = (response: any): any => {
  return {
    products: response.products.edges.map((edge) => edge.node),
  };
};

export const getProducts = async ({
  productsQuantity = 20,
}: {
  productsQuantity?: number;
}): Promise<any> => {
  const shopifyStorefrontCollectionResponse = await fetch(
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API as string,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_X_STOREFRONT_ACCESS_TOKEN,
      } as any,
      body: JSON.stringify({
        query: gql`
          query getProducts($first: Int) {
            products(first: $first) {
              edges {
                cursor
                node {
                  id
                  slug: handle
                  title
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                    maxVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  featuredImage {
                    src
                    altText
                  }
                }
              }
            }
          }
        `,
        variables: {
          first: productsQuantity,
        },
      }),
    },
  );

  const response = await shopifyStorefrontCollectionResponse.json();

  return convertShopifyCollectionResponse(response.data).products;
};
