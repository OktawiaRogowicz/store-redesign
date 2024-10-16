import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ProductsPage from "@/pageComponents/ProductsPage";
import { getProducts } from "@/sanity/lib/getters/getProducts";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    locale: string;
    slug: string;
  };
};

async function generateStaticParams(): Promise<any[]> {
  return await getProducts();
}

export default async function Home({ params }: PageParamsType) {
  if (!locales.includes(params.locale)) notFound();
  unstable_setRequestLocale(params.locale);

  const products = await getProducts();

  if (!products) {
    return notFound();
  }

  const siteConfiguration = await getSiteConfiguration();

  return (
    <ProductsPage siteConfiguration={siteConfiguration} products={products} />
  );
}
