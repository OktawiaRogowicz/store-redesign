import React from "react";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ProductsPage from "@/pageComponents/ProductsPage";
import { getCollection } from "@/sanity/lib/getters/getCollection";
import { getCollections } from "@/sanity/lib/getters/getCollections";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    slug: string;
    locale: string;
  };
};

export async function generateStaticParams() {
  const collections = await getCollections();

  const staticParams = collections.map((collection) => {
    return {
      slug: collection.slugProxy,
    };
  });

  return staticParams;
}

export default async function Product({ params }: PageParamsType) {
  if (!locales.includes(params.locale)) notFound();
  setRequestLocale(params.locale);

  const siteConfiguration = await getSiteConfiguration();
  const collection = await getCollection({ slug: params.slug });

  if (!collection) {
    return notFound();
  }

  return (
    <ProductsPage
      siteConfiguration={siteConfiguration}
      collection={collection}
    />
  );
}
