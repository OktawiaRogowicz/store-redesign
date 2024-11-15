"use client";

import { useTranslations } from "next-intl";
import { PortableText } from "@portabletext/react";
import React, { useEffect, useRef, useState } from "react";
import { IconHeart } from "@tabler/icons-react";

import Breadcrumbs from "@/components/Breadcrumbs";
import ProductPrice from "@/components/ProductPrice";
import SizeGuideModal from "@/components/SizeGuideModal";
import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledTitle from "@/components/StyledTitle";
import { ROUTES } from "@/config";
import { convertProductToCartProduct } from "@/contexts/Cart/CartProvider";
import { useCartContext } from "@/contexts/Cart/useCart";
import { useSizeGuideModal } from "@/hooks/useSizeGuideModal";
import { useNotifications } from "@/notifications";
import ProductStickyHeader from "@/pageComponents/ProductPage/components/ProductStickyHeader";
import {
  ProductOptionType,
  ProductType,
  ProductVariantType,
} from "@/sanity/lib/getters/getProduct";

import classes from "./ProductSection.module.css";
import ColorSwatch from "./components/ColorSwatch";
import SizeSwatch from "./components/SizeSwatch";
import StyledPortableText from "@/components/StyledPortableText";

type ProductSectionType = {
  product: ProductType;
};

const convertToSizes = ({
  option,
  variants,
}: {
  option?: ProductOptionType;
  variants: ProductVariantType[];
}) => {
  if (option)
    return option.values.map((size) => {
      const products = variants.filter((variant) => variant.option1 === size);

      return {
        name: size,
        isAvailable: products.length > 0,
      };
    });
};

const ProductSection: React.FunctionComponent<ProductSectionType> = ({
  product,
}) => {
  const t = useTranslations("sections");
  const cartContext = useCartContext();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { isOpen, openSizeGuideModal, closeSizeGuideModal } =
    useSizeGuideModal();

  console.log("product: ", product);

  const { showNotification, showErrorNotification } = useNotifications();

  const sizes = convertToSizes({
    option: product.product.options.find((option) => option.name === "Size"),
    variants: product.product.variants,
  });

  const [isDetailsSectionVisible, setIsDetailsSectionVisible] = useState(false);
  const [chosenSize, setChosenSize] = useState<string>("");
  const [addToCartButtonError, setAddToCartButtonError] = useState<string>("");
  const price = chosenSize
    ? (product.product.variants.find(
        (variant) => variant.option1 === chosenSize,
      ).price ?? product.product.priceRange.minVariantPrice)
    : product.product.priceRange.minVariantPrice;
  const compareAtPrice = chosenSize
    ? (product.product.variants.find(
        (variant) => variant.option1 === chosenSize,
      ).compare_at_price ?? product.product.priceRange.maxVariantPrice)
    : product.product.priceRange.maxVariantPrice;

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

  const handleAddToCartButtonClick = () => {
    if (!chosenSize) {
      setAddToCartButtonError("bep");
      showErrorNotification({ message: "Wybierz rozmiar produktu" });
      return;
    }

    cartContext.addCartProducts({
      product: convertProductToCartProduct({
        product,
        quantity: 1,
        price,
        compareAtPrice,
        size: chosenSize,
      }),
      size: chosenSize,
      quantity: 1,
      price,
      compareAtPrice,
    });
  };

  console.log("product: ", product);

  return (
    <>
      <div className={classes["product-section"]}>
        <div className={classes["product-section__images"]}>
          {product.product.images.map((image) => {
            return (
              <StyledImage
                key={image.id}
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
              {/*<Breadcrumbs*/}
              {/*  items={[*/}
              {/*    { href: ROUTES.home.href, title: "MIIÓ", id: "miió" },*/}
              {/*    {*/}
              {/*      href: ROUTES.home.href,*/}
              {/*      title: "to do",*/}
              {/*      id: "category",*/}
              {/*    },*/}
              {/*  ]}*/}
              {/*/>*/}
              <StyledTitle order={2}>{product.product.title}</StyledTitle>
            </div>

            <div className={classes["product-section__description"]}>
              <ProductPrice
                type="size-L-semi-bold"
                price={price}
                compareAtPrice={compareAtPrice}
                animationKey={chosenSize}
              />
              <StyledPortableText value={product.sections.body} />
              {/*{product.product?.description?.more && (*/}
              {/*  <SizeGuideModal*/}
              {/*    items={[*/}
              {/*      {*/}
              {/*        item: { value: "description" },*/}
              {/*        control: { text: "Więcej informacji" },*/}
              {/*        panel: {*/}
              {/*          text:*/}
              {/*            product.description.more?.fabric +*/}
              {/*            "\n" +*/}
              {/*            product.description.more?.model,*/}
              {/*        },*/}
              {/*      },*/}
              {/*    ]}*/}
              {/*  />*/}
              {/*)}*/}
            </div>

            <ColorSwatch
              colors={[{ hex: "#222222", name: "purple", isPicked: true }]}
            />
            <SizeSwatch
              sizes={sizes}
              handleSizeClick={handleSizeClick}
              chosenSize={chosenSize}
              handleSizeGuideOpen={openSizeGuideModal}
            />

            <div className={classes["product-section__buttons"]}>
              <StyledButton
                variant="filled"
                fullWidth
                onClick={handleAddToCartButtonClick}
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
      <SizeGuideModal
        isOpen={isOpen}
        handleClose={closeSizeGuideModal}
        sizeChart={product.sections.sizeChart}
      />
    </>
  );
};

export default ProductSection;
