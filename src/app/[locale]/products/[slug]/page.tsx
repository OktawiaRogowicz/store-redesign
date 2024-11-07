import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ProductPage from "@/pageComponents/ProductPage";
import { getProduct } from "@/sanity/lib/getters/getProduct";
import { getProducts } from "@/sanity/lib/getters/getProducts";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    slug: string;
    locale: string;
  };
};

async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function Product({ params }: PageParamsType) {
  if (!locales.includes(params.locale)) notFound();
  unstable_setRequestLocale(params.locale);

  const siteConfiguration = await getSiteConfiguration();
  const product = await getProduct({ slug: params.slug });

  if (!product) {
    return notFound();
  }

  return (
    <ProductPage siteConfiguration={siteConfiguration} product={product} />
  );
}
