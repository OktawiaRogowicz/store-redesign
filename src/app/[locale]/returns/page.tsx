import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import ReturnsPage from "@/pageComponents/ReturnsPage";
import { SearchParamsType } from "@/types/searchParams";
import { getAboutUsPage } from "@/sanity/lib/getters/getAboutUsPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    locale: string;
  };
  searchParams: SearchParamsType;
};

export default async function Home({
  params: { locale },
  searchParams,
}: PageParamsType) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const aboutUsPageContent = await getAboutUsPage();

  return (
    <ReturnsPage
      siteConfiguration={siteConfiguration}
      aboutUsPageContent={aboutUsPageContent}
    />
  );
}
