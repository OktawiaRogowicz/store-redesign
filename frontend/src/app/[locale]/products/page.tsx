import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ProductsPage from "@/pageComponents/ProductsPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getProducts } from "@/shopify/helpers/getProducts";

type PageParamsType = {
  params: {
    locale: string;
    slug: string;
  };
};

export async function generateStaticParams(): Promise<any> {
  const result = await getProducts({});
  console.log("result: ", result);
  return result;
}

export default async function Home({ params }: PageParamsType) {
  if (!locales.includes(params.locale)) notFound();
  setRequestLocale(params.locale);

  const products = await getProducts({});

  if (!products) {
    return notFound();
  }

  const siteConfiguration = await getSiteConfiguration();

  return (
    <ProductsPage
      siteConfiguration={siteConfiguration}
      collection={{
        collection: {
          store: {
            title: "Wszystko",
          },
        },
        products: products,
      }}
    />
  );
}
