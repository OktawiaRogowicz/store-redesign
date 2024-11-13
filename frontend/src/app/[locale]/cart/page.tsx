import React from "react";
import { setRequestLocale } from "next-intl/server";

import CartPage from "@/pageComponents/CartPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Cart({ params: { locale } }: PageParamsType) {
  setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();

  return <CartPage siteConfiguration={siteConfiguration} />;
}
