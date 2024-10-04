import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import AboutUsPage from "@/pageComponents/AboutUsPage";
import { SearchParamsType } from "@/types/searchParams";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getAboutUsPage } from "@/sanity/lib/getters/getAboutUsPage";

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
    <AboutUsPage
      siteConfiguration={siteConfiguration}
      aboutUsPageContent={aboutUsPageContent}
    />
  );
}
