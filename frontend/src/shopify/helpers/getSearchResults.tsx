import { gql } from "../../sanity/lib/getters/getCollection";

const convertShopifySearchResultsResponse = (response: any): any => {
  return {
    searchResults: response.search.edges.map((edge) => edge.node),
  };
};

export const getSearchResults = async ({
  query = "",
  productsQuantity = 20,
}: {
  query?: string;
  productsQuantity?: number;
}): Promise<any> => {
  const shopifyStorefrontSearchResultsResponse = await fetch(
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
          query searchProducts($query: String!, $first: Int) {
            search(query: $query, first: $first, types: PRODUCT) {
              edges {
                node {
                  ... on Product {
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
          }
        `,
        variables: {
          query,
          first: productsQuantity,
        },
      }),
    },
  );

  const response = await shopifyStorefrontSearchResultsResponse.json();

  return convertShopifySearchResultsResponse(response.data).searchResults;
};
