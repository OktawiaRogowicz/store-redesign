import React from "react";
import { setRequestLocale } from "next-intl/server";

import ReturnsPage from "@/pageComponents/ReturnsPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getReturnsPage } from "@/sanity/lib/getters/getReturnsPage";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Returns({ params: { locale } }: PageParamsType) {
  setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const returnPageContent = await getReturnsPage();

  return (
    <ReturnsPage
      siteConfiguration={siteConfiguration}
      returnPageContent={returnPageContent}
    />
  );
}
