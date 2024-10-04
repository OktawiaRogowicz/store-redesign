"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import ProductsSection from "@/sections/ProductsSection";

import classes from "./ProductsPage.module.css";

type ProductPageType = {
  siteConfiguration: { footer: any; header: any };
  products: any[];
};

const ProductsPage: React.FunctionComponent<ProductPageType> = ({
  siteConfiguration,
  products,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["product-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <ProductsSection products={products} />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default ProductsPage;