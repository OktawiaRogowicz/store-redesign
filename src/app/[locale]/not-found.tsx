import React from "react";

import ErrorPage from "@/pageComponents/ErrorPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";
import { getErrorPage } from "@/sanity/lib/getters/getErrorPage";

export default async function NotFoundPage() {
  const siteConfiguration = await getSiteConfiguration();
  const errorPageContent = await getErrorPage();

  return (
    <ErrorPage
      siteConfiguration={siteConfiguration}
      errorPageContent={errorPageContent}
    />
  );
}
