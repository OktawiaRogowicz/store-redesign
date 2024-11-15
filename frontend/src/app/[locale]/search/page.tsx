import React from "react";
import { setRequestLocale } from "next-intl/server";

import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getReturnsPage } from "@/sanity/lib/getters/getReturnsPage";
import { getProducts } from "@/shopify/helpers/getProducts";
import { getSearchResults } from "@/shopify/helpers/getSearchResults";
import SearchPage from "@/pageComponents/SearchPage";

type SearchParamsType = {
  query?: string;
};

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
  setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const searchResults = await getSearchResults({ query: searchParams.query });

  console.log("searchResults: ", searchResults);

  return (
    <SearchPage
      siteConfiguration={siteConfiguration}
      search={{
        query: searchParams.query,
        results: searchResults,
      }}
    />
  );
}
