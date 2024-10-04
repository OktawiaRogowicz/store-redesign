"use client";

import React, { useEffect, useRef, useState } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import StyledAccordion from "@/components/StyledAccordion";
import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { ROUTES } from "@/config";
import { useCartContext } from "@/contexts/Cart/useCart";
import ColorSwatch from "@/sections/ProductSection/components/ColorSwatch";
import SizeSwatch from "@/sections/ProductSection/components/SizeSwatch";

import classes from "./ProductSection.module.css";
import ProductStickyHeader from "@/pageComponents/ProductPage/components/ProductStickyHeader";
import { IconHeart } from "@tabler/icons-react";

type ProductSectionType = {
  product: any;
};

const ProductSection: React.FunctionComponent<ProductSectionType> = ({
  product,
}) => {
  const cartContext = useCartContext();

  const containerRef = useRef(null);
  const [isDetailsSectionVisible, setIsDetailsSectionVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsDetailsSectionVisible(entry.isIntersecting);
  };

  console.log("isDetailsSectionVisible: ", isDetailsSectionVisible);

  const options = {
    root: null,
    rootMargin: "0",
    threshold: 0.01,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <>
      <div className={classes["product-section"]}>
        <div className={classes["product-section__images"]}>
          <StyledImage
            src={product.store.previewImageUrl}
            alt={product.store.alt}
            fill
            priority
          />
        </div>
        <div ref={containerRef} className={classes["product-section__details"]}>
          <div className={classes["product-section__details-content"]}>
            <div className={classes["product-section__header"]}>
              <Breadcrumbs
                items={[
                  { href: ROUTES.home.href, title: "MIIÓ", id: "miió" },
                  {
                    href: ROUTES.home.href,
                    title: product.store.category,
                    id: "category",
                  },
                ]}
              />
              <StyledTitle order={2}>{product.store.title}</StyledTitle>
            </div>

            <div className={classes["product-section__description"]}>
              <div className={classes["product-section__price"]}>
                {/*<StyledParagraph type="size-L-semi-bold">*/}
                {/*  {`${product.price.price} ${product.price.currency}`}*/}
                {/*</StyledParagraph>*/}
                {/*<StyledParagraph type="size-L-semi-bold">*/}
                {/*  {`${product.price.sale} ${product.price.currency}`}*/}
                {/*</StyledParagraph>*/}
              </div>
              {product.description?.main && (
                <StyledParagraph type="size-M-light">
                  {product.description.main}
                </StyledParagraph>
              )}
              {product.description?.more && (
                <StyledAccordion
                  items={[
                    {
                      item: { value: "description" },
                      control: { text: "Więcej informacji" },
                      panel: {
                        text:
                          product.description.more?.fabric +
                          "\n" +
                          product.description.more?.model,
                      },
                    },
                  ]}
                />
              )}
            </div>

            <ColorSwatch
              colors={[{ hex: "#222222", name: "purple", isPicked: true }]}
            />
            <SizeSwatch
              sizes={[
                { name: "S", isAvailable: true, isChosen: true },
                { name: "M", isAvailable: true, isChosen: false },
                { name: "L", isAvailable: true, isChosen: false },
              ]}
            />

            <div className={classes["product-section__buttons"]}>
              <StyledButton
                variant="filled"
                fullWidth
                onClick={() => cartContext.addCartProducts(product.store)}
              >
                Dodaj do koszyka
              </StyledButton>
              <StyledButton variant="outline" fullWidth>
                Dodaj do ulubionych
                <IconHeart stroke="1.2px" height={24} width={24} />
              </StyledButton>
            </div>
          </div>
        </div>
      </div>

      <ProductStickyHeader
        product={product}
        isVisible={!isDetailsSectionVisible}
      />
    </>
  );
};

export default ProductSection;
