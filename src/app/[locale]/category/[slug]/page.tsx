import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import { getCollection } from "@/sanity/lib/getters/getCollection";
import { getCollections } from "@/sanity/lib/getters/getCollections";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import ProductsPage from "@/pageComponents/ProductsPage";

type PageParamsType = {
  params: {
    slug: string;
    locale: string;
  };
};

async function generateStaticParams(): Promise<any[]> {
  const collections = await getCollections();

  console.log(
    "collections: ",
    collections.map((collection) => {
      return {
        slug: collection.route,
      };
    }),
  );

  return collections.map((collection) => {
    return {
      slug: collection.route,
    };
  });
}

export default async function Product({ params }: PageParamsType) {
  if (!locales.includes(params.locale)) notFound();
  unstable_setRequestLocale(params.locale);

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
