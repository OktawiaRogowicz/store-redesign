import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ReturnsPage from "@/pageComponents/ReturnsPage";
import { SearchParamsType } from "@/types/searchParams";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getReturnsPage } from "@/sanity/lib/getters/getReturnsPage";

type PageParamsType = {
  params: {
    locale: string;
  };
  searchParams: SearchParamsType;
};

export default async function Returns({
  params: { locale },
  searchParams,
}: PageParamsType) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const returnPageContent = await getReturnsPage();

  return (
    <ReturnsPage
      siteConfiguration={siteConfiguration}
      returnPageContent={returnPageContent}
    />
  );
}
