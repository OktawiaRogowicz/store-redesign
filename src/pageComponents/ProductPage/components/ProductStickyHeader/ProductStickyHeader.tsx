"use client";

import React from "react";
import cx from "classnames";

import StyledButton from "@/components/StyledButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { useCartContext } from "@/contexts/Cart/useCart";

import classes from "./ProductStickyHeader.module.css";
import { IconHeart } from "@tabler/icons-react";

type ProductPageType = {
  product: any;
  isVisible?: boolean;
};

const ProductStickyHeader: React.FunctionComponent<ProductPageType> = ({
  product,
  isVisible,
}) => {
  const cartContext = useCartContext();

  return (
    <div
      className={cx(classes["product-sticky-header"], {
        [classes["product-sticky-header--visible"]]: isVisible,
      })}
    >
      <div className={classes["product-sticky-header__header"]}>
        <StyledTitle order={4}>{product.store.title}</StyledTitle>
        <StyledParagraph type="size-M-semi-bold">0 PLN</StyledParagraph>
      </div>
      <div className={classes["product-sticky-header__buttons"]}>
        <StyledButton
          variant="filled"
          fullWidth
          onClick={() => cartContext.addCartProducts(product.store)}
        >
          Dodaj do koszyka
        </StyledButton>
        <StyledButton
          variant="text"
          size="M"
          fullWidth={false}
          onClick={() => cartContext.addCartProducts(product.store)}
        >
          Dodaj do ulubionych <IconHeart stroke="1px" width={18} height={18} />
        </StyledButton>
      </div>
    </div>
  );
};

export default ProductStickyHeader;
