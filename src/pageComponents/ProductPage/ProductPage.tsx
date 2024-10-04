"use client";

import React, { useEffect, useRef, useState } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useCartContext } from "@/contexts/Cart/useCart";
import ProductSection from "@/sections/ProductSection";
import ProductsSliderSection from "@/sections/ProductsSliderSection";

import classes from "./ProductPage.module.css";
import StyledTitle from "@/components/StyledTitle";
import StyledButton from "@/components/StyledButton";
import cx from "classnames";
import StyledParagraph from "@/components/StyledParagraph";
import ProductStickyHeader from "@/pageComponents/ProductPage/components/ProductStickyHeader";

type ProductPageType = {
  siteConfiguration: { footer: any; header: any };
  product: any;
};

const ProductPage: React.FunctionComponent<ProductPageType> = ({
  siteConfiguration,
  product,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cartContext = useCartContext();

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div className={classes["product-page"]}>
      <Header
        colored={isVisible}
        coloredOnMobile={true}
        variant="black"
        header={siteConfiguration?.header}
        cartContext={cartContext}
      />
      <ProductSection product={product} cartContext={cartContext} />
      {/*<ProductStickyHeader product={product} />*/}
      <div ref={containerRef}>
        <ProductsSliderSection
          title={"Mogą ci się także spodobać"}
          products={product.moreProductsSection}
        />
      </div>
      <Footer footer={siteConfiguration?.footer} />
    </div>
  );
};

export default ProductPage;
