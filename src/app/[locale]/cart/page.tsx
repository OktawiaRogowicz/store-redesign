import React from "react";
import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

import { locales } from "@/config";
import CartPage from "@/pageComponents/CartPage";
import { getSiteConfiguration } from "@/sanity/lib/getters/getSiteConfiguration";

type PageParamsType = {
  params: {
    locale: string;
  };
};

export default async function Cart({ params: { locale } }: PageParamsType) {
  if (!locales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);

  const siteConfiguration = await getSiteConfiguration();

  return <CartPage siteConfiguration={siteConfiguration} />;
}
