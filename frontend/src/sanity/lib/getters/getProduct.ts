import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
import { ProductContentType } from "@/sanity/types/documents/ProductContentType";

type ShopifyImageType = {
  id: number;
  alt?: string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: [];
};

export type ProductVariantType = {
  id: number;
  product_id: number;
  title: string;
  price: string;
  position: number;
  inventory_policy: string;
  compare_at_price: string;
  option1: string;
  option2: null;
  option3: null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string;
  fulfillment_service: string;
  grams: number;
  inventory_management: string;
  requires_shipping: boolean;
  sku: string;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  presentment_prices: [
    {
      price: {
        amount: string;
        currency_code: string;
      };
      compare_at_price: null;
    },
  ];
  admin_graphql_api_id: string;
  image_id: number;
};

export type ProductOptionType = {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
};

export type ShopifyProductResponse = {
  product: {
    id: number;
    title: string;
    body_html: string;
    vendor: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string;
    published_at: string;
    template_suffix: null;
    published_scope: string;
    tags: string;
    status: string;
    admin_graphql_api_id: string;
    variants: ProductVariantType[];
    options: ProductOptionType[];
    images: ShopifyImageType[];
    image: ShopifyImageType;
  };
};

// const convertShopifyProductResponseToShopifyProduct = () => {};

export type ProductType = {
  sections: {
    moreProductSection: ProductContentType["moreProductsSection"];
  };
  product: ShopifyProductResponse["product"] & {
    priceRange: {
      minVariantPrice: number;
      maxVariantPrice: number;
    };
  };
};

const convertToDetailedProductType = ({
  sanityProduct,
  shopifyProduct,
}: {
  sanityProduct: ProductContentType;
  shopifyProduct: ShopifyProductResponse;
}): ProductType => {
  return {
    sections: {
      moreProductSection: sanityProduct.moreProductsSection,
    },
    product: {
      ...shopifyProduct.product,
      priceRange: sanityProduct.store.priceRange,
    },
  };
};

export async function getProduct({
  slug,
}: {
  slug: string;
}): Promise<ProductType> {
  const query = groq`*[_type == "product" && store.slug.current == "${slug}"][0] {
    "moreProductsSection": moreProductsSection[]->store,
    store,
  }`;

  const product = await client.fetch(query, {
    params: { cache: "no-store" },
  } as any);

  const shopifyProductResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_API}products/${product.store.id}.json`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token":
          process.env.NEXT_PUBLIC_SHOPIFY_ADMIN_KEY ?? "",
      },
    },
  );

  const shopifyProduct = await shopifyProductResponse.json();

  const converted = convertToDetailedProductType({
    sanityProduct: product,
    shopifyProduct,
  });

  return converted;
}
