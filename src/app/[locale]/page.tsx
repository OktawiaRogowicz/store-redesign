import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import HomePage from "@/pageComponents/HomePage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getHomePage } from "@/sanity/lib/getters/getHomePage";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: PageParamsType) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const homePageContent = await getHomePage();

  return (
    <HomePage
      siteConfiguration={siteConfiguration}
      homePageContent={homePageContent}
    />
  );
}
