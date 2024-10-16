import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
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
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const regulationsPageContent = await getRegulationsPage();

  return (
    <RegulationsPage
      siteConfiguration={siteConfiguration}
      regulationsPageContent={regulationsPageContent}
    />
  );
}
