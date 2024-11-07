"use client";

import React, { useEffect, useRef, useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useCartContext } from "../../contexts/Cart/useCart";
import { ProductType } from "../../sanity/lib/getters/getProduct";
import { SiteConfigurationContentType } from "../../sanity/types/SiteConfigurationType";
import ProductSection from "../../sections/ProductSection";
import ProductsSliderSection from "../../sections/ProductsSliderSection";

import classes from "./ProductPage.module.css";

type ProductPageType = {
  siteConfiguration: SiteConfigurationContentType;
  product: ProductType;
};

const ProductPage: React.FunctionComponent<ProductPageType> = ({
  siteConfiguration,
  product,
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const cartContext = useCartContext();

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  } as IntersectionObserverInit;

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
        header={siteConfiguration.header}
        cartContext={cartContext}
      />
      <ProductSection product={product} />
      <div ref={containerRef}>
        <ProductsSliderSection
          title={"Mogą ci się także spodobać"}
          products={product.sections.moreProductSection?.map((product) => ({
            title: product.title,
            id: product.id,
            slug: product.slug.current,
            priceRange: {
              minVariantPrice: {
                amount: product.priceRange.minVariantPrice,
                currencyCode: "PLN",
              },
              maxVariantPrice: {
                amount: product.priceRange.maxVariantPrice,
                currencyCode: "PLN",
              },
            },
            featuredImage: {
              src: product.previewImageUrl,
              altText: product.title,
            },
          }))}
        />
      </div>
      <Footer footer={siteConfiguration.footer} />
    </div>
  );
};

export default ProductPage;
