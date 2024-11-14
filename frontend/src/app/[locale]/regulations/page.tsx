import React from "react";
import { setRequestLocale } from "next-intl/server";

import RegulationsPage from "@/pageComponents/RegulationsPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getRegulationsPage } from "@/sanity/lib/getters/getRegulationsPage";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Regulations({
  params: { locale },
}: PageParamsType) {
  setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const regulationsPageContent = await getRegulationsPage();

  return (
    <RegulationsPage
      siteConfiguration={siteConfiguration}
      regulationsPageContent={regulationsPageContent}
    />
  );
}
