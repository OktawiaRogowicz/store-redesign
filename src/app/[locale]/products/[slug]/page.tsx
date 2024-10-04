import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ProductPage from "@/pageComponents/ProductPage";
import { getProduct } from "@/sanity/lib/getters/getProduct";
import { getProducts } from "@/sanity/lib/getters/getProducts";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { SearchParamsType } from "@/types/searchParams";

type PageParamsType = {
  params: {
    locale: string;
  };
  searchParams: SearchParamsType;
};

async function generateStaticParams(): Promise<any[]> {
  return await getProducts();
}

export default async function Product({ params }) {
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
