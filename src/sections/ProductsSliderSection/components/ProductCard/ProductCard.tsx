"use client";

import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import StyledImage from "@/components/StyledImage";
import StyledParagraph from "@/components/StyledParagraph";
import { ROUTES } from "@/config";

import classes from "./ProductCard.module.css";
import StyledButton from "@/components/StyledButton";
import ProductPrice from "@/components/ProductPrice";

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
          path: `${ROUTES.products.href}/${product.slug.current}`,
        })
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
      >
        <div className={classes["product-card__hover-section"]}>
          <StyledButton variant="outline" fullWidth>
            Dodaj do koszyka
          </StyledButton>
        </div>
      </StyledImage>
      <div className={classes["product-card__description"]}>
        <StyledParagraph type="size-M-light">{product?.title}</StyledParagraph>
        <ProductPrice
          type="size-M-semi-bold"
          price={product.variants[0].price}
          compare_at_price={product.variants[0].compare_at_price}
        />
      </div>
    </div>
  );
};

export default ProductCard;
