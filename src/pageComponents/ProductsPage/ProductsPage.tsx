"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import ProductsSection from "@/sections/ProductsSection";

import classes from "./ProductsPage.module.css";
import { SiteConfigurationContentType } from "@/sanity/types/SiteConfigurationType";

type ProductPageType = {
  siteConfiguration: SiteConfigurationContentType;
  collection: any;
};

const ProductsPage: React.FunctionComponent<ProductPageType> = ({
  siteConfiguration,
  collection,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["product-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <ProductsSection
        title={collection.collection.store.title}
        products={collection.products}
      />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default ProductsPage;
