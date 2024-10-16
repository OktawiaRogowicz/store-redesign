import { gql } from "@/sanity/lib/getters/getCollection";
import { ShopifyPrice } from "@/contexts/Cart/CartProvider";

type ShopifyCollectionResponseType = {
  collection: {
    title: string;
    handle: string;
    products: {
      nodes: {
        id: number;
        slug: string;
        title: string;
        priceRange: {
          minVariantPrice: ShopifyPrice;
          maxVariantPrice: ShopifyPrice;
        };
        featuredImage: {
          src: string;
          altText: string;
        };
      }[];
    };
  };
};

export type ShopifyCollectionProductType = {
  id: number;
  slug: string;
  title: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
    maxVariantPrice: ShopifyPrice;
  };
  featuredImage: {
    src: string;
    altText: string;
  };
};

export type ShopifyCollectionType = {
  title: string;
  products: ShopifyCollectionProductType[];
  handle: string;
};

const convertShopifyCollectionResponse = (
  response: ShopifyCollectionResponseType,
): ShopifyCollectionType => {
  console.log(" convertShopifyCollectionResponse: ", response);
  return {
    title: response.collection.title,
    handle: response.collection.handle,
    products: response.collection.products.nodes,
  };
};

export const getCollectionById = async ({
  id,
  productsQuantity = 8,
}: {
  id: number;
  productsQuantity?: number;
}): Promise<ShopifyCollectionType> => {
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
          query getCollectionById($id: ID!, $productsQuantity: Int) {
            collection(id: $id) {
              title
              handle
              products(first: $productsQuantity) {
                nodes {
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
          id: `gid://shopify/Collection/${id}`,
          productsQuantity,
        },
      }),
    },
  );

  const response = await shopifyStorefrontCollectionResponse.json();

  return convertShopifyCollectionResponse(response.data);
};
