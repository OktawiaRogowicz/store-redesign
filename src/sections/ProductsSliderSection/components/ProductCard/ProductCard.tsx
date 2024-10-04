"use client";

import React from "react";
import { useRouter } from "next/navigation";

import StyledImage from "@/components/StyledImage";
import StyledParagraph from "@/components/StyledParagraph";
import { ROUTES } from "@/config";

import classes from "./ProductCard.module.css";
import { useMediaQuery } from "@mantine/hooks";

type ProductCardType = {
  product: any;
  fill?: boolean;
};

const ProductCard: React.FunctionComponent<ProductCardType> = ({
  product,
  fill = false,
}) => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const router = useRouter();

  const handleClick = (e, path) => {
    e?.preventDefault();
    router.push(path);
  };

  return (
    <div
      className={classes["product-card"]}
      onClick={(e) =>
        handleClick(e, `${ROUTES.products.href}/${product.slug.current}`)
      }
    >
      <StyledImage
        src={product?.previewImageUrl}
        alt={product?.alt}
        {...(!fill && {
          width: isMobile ? 245 : 350,
          height: isMobile ? 350 : 500,
        })}
        {...(fill && { aspectRatio: 35 / 50 })}
      />
      <div className={classes["product-card__description"]}>
        <StyledParagraph type="size-M-light">{product?.title}</StyledParagraph>
        <StyledParagraph type="size-M-semi-bold">
          {product?.priceRange?.minVariantPrice}
        </StyledParagraph>
      </div>
    </div>
  );
};

export default ProductCard;
