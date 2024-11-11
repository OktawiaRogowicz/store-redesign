"use client";

import React from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import { SiteConfigurationContentType } from "@/sanity/types/SiteConfigurationType";

import classes from "./CartPage.module.css";
import CartSection from "./components/CartSection";

type CartPageType = {
  siteConfiguration: SiteConfigurationContentType;
};

const CartPage: React.FunctionComponent<CartPageType> = ({
  siteConfiguration,
}) => {
  const cartContext = useCartContext();

  return (
    <div className={classes["cart-page"]}>
      <Header
        variant="black"
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <CartSection cartContext={cartContext} />
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default CartPage;
