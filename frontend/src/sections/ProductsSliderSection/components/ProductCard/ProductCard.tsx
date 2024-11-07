"use client";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import ProductPrice from "../../../../components/ProductPrice";
import StyledButton from "../../../../components/StyledButton";
import StyledImage from "../../../../components/StyledImage";
import StyledParagraph from "../../../../components/StyledParagraph";
import { ROUTES } from "../../../../config";

import classes from "./ProductCard.module.css";
import { ShopifyCollectionProductType } from "../../../../shopify/helpers/getCollectionById";

type ProductCardType = {
  product: ShopifyCollectionProductType;
  fill?: boolean;
};

const ProductCard: React.FunctionComponent<ProductCardType> = ({
  product,
  fill = false,
}) => {
  const isMobile = useMediaQuery("(max-width: 992px)");
  const router = useRouter();

  const handleClick = ({
    e,
    path,
  }: {
    e: React.MouseEvent<HTMLDivElement>;
    path: string;
  }) => {
    e?.preventDefault();
    router.push(path);
  };

  return (
    <div
      className={classes["product-card"]}
      onClick={(e) =>
        handleClick({
          e,
          path: `${ROUTES.products.href}/${product.slug}`,
        })
      }
    >
      <StyledImage
        src={product.featuredImage.src}
        alt={product.featuredImage.altText}
        {...(!fill && {
          width: isMobile ? 245 : 350,
          height: isMobile ? 350 : 500,
        })}
      >
        <div className={classes["product-card__hover-section"]}>
          <StyledButton variant="outline" fullWidth>
            Dodaj do koszyka
          </StyledButton>
        </div>
      </StyledImage>
      <div className={classes["product-card__description"]}>
        <StyledParagraph type="size-M-light">{product?.title}</StyledParagraph>
        {product?.priceRange && (
          <ProductPrice
            type="size-M-semi-bold"
            price={product.priceRange.minVariantPrice.amount}
            compareAtPrice={product.priceRange.maxVariantPrice.amount}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
