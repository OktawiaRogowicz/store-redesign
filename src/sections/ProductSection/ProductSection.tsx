"use client";

import React, { useEffect, useRef, useState } from "react";
import { IconHeart } from "@tabler/icons-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import HtmlContent from "@/components/HtmlContent";
import ProductPrice from "@/components/ProductPrice";
import StyledAccordion from "@/components/StyledAccordion";
import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledTitle from "@/components/StyledTitle";
import { ROUTES } from "@/config";
import { useCartContext } from "@/contexts/Cart/useCart";
import ProductStickyHeader from "@/pageComponents/ProductPage/components/ProductStickyHeader";
import {
  ProductOptionType,
  ProductType,
  ProductVariantType,
} from "@/sanity/lib/getters/getProduct";
import ColorSwatch from "@/sections/ProductSection/components/ColorSwatch";
import SizeSwatch from "@/sections/ProductSection/components/SizeSwatch";

import classes from "./ProductSection.module.css";
import { useTranslations } from "next-intl";

type ProductSectionType = {
  product: ProductType;
};

const convertToSizes = ({
  option,
  variants,
  isChosen,
}: {
  option: ProductOptionType;
  variants: ProductVariantType[];
  isChosen: boolean;
}) => {
  const result = option.values.map((size) => {
    const products = variants.filter((variant) => variant.option1 === size);

    return {
      name: size,
      isAvailable: products.length > 0,
      isChosen: isChosen,
    };
  });
  return result;
};

const ProductSection: React.FunctionComponent<ProductSectionType> = ({
  product,
}) => {
  const t = useTranslations("sections");
  const cartContext = useCartContext();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sizes = convertToSizes({
    option: product.product.options[0],
    variants: product.product.variants,
  });

  const [isDetailsSectionVisible, setIsDetailsSectionVisible] = useState(false);
  const [chosenSize, setChosenSize] = useState<string>(null);

  const handleSizeClick = (value: string) => {
    setChosenSize(value);
  };

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsDetailsSectionVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
  } as IntersectionObserverInit;

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef?.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef?.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  console.log("product?: ", product);

  return (
    <>
      <div className={classes["product-section"]}>
        <div className={classes["product-section__images"]}>
          {product.product.images.map((image) => {
            return (
              <StyledImage
                src={image.src}
                alt={image.alt ?? product.product.title}
                fill
                priority
                height="100vh"
              />
            );
          })}
        </div>
        <div ref={containerRef} className={classes["product-section__details"]}>
          <div className={classes["product-section__details-content"]}>
            <div className={classes["product-section__header"]}>
              <Breadcrumbs
                items={[
                  { href: ROUTES.home.href, title: "MIIÓ", id: "miió" },
                  {
                    href: ROUTES.home.href,
                    title: "to do",
                    id: "category",
                  },
                ]}
              />
              <StyledTitle order={2}>{product.product.title}</StyledTitle>
            </div>

            <div className={classes["product-section__description"]}>
              <ProductPrice
                type="size-L-semi-bold"
                price={product.product.variants[0].price}
                compare_at_price={product.product.variants[0].compare_at_price}
              />
              <HtmlContent htmlString={product.product.body_html} />
              {product.product?.description?.more && (
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
              sizes={sizes}
              handleSizeClick={handleSizeClick}
              chosenSize={chosenSize}
            />

            <div className={classes["product-section__buttons"]}>
              <StyledButton
                variant="filled"
                fullWidth
                onClick={() => cartContext.addCartProducts(product.store)}
              >
                {t("product-section.buttons.add-to-cart")}
              </StyledButton>
              <StyledButton variant="outline" fullWidth>
                {t("product-section.buttons.add-to-favourites")}
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
