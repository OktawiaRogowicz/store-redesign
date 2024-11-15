"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import { SiteConfigurationContentType } from "@/sanity/types/SiteConfigurationType";
import ProductsSection from "@/sections/ProductsSection";

import classes from "./SearchPage.module.css";
import SearchPageInput from "./components/SearchPageInput";

type ProductPageType = {
  siteConfiguration: SiteConfigurationContentType;
  search: {
    query?: string;
    results: any[];
  };
};

const SearchPage: React.FunctionComponent<ProductPageType> = ({
  siteConfiguration,
  search,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["product-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <SearchPageInput query={search.query} />
      <ProductsSection
        title={`Wyniki dla: "${search.query}"`}
        products={search.results}
      />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default SearchPage;
