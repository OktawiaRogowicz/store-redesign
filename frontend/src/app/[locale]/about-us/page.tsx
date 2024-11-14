import React from "react";
import { setRequestLocale } from "next-intl/server";

import AboutUsPage from "@/pageComponents/AboutUsPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getAboutUsPage } from "@/sanity/lib/getters/getAboutUsPage";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Home({ params: { locale } }: PageParamsType) {
  setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();
  const aboutUsPageContent = await getAboutUsPage();

  return (
    <AboutUsPage
      siteConfiguration={siteConfiguration}
      aboutUsPageContent={aboutUsPageContent}
    />
  );
}
