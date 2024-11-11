import React from "react";

import StyledParagraph from "../StyledParagraph";
import { StyledParagraphType } from "../StyledParagraph/StyledParagraph";

import classes from "./ProductPrice.module.css";

type ProductPriceType = {
  type: StyledParagraphType["type"];
  price: string | number;
  compareAtPrice?: string | number;
  animationKey?: string | number;
};

const convertPrice = (value?: string | number) => {
  if (!value) return "0.00";
  if (typeof value === "string") return parseFloat(value).toFixed(2);
  else {
    return value.toFixed(2);
  }
};

const ProductPrice: React.FunctionComponent<ProductPriceType> = ({
  type = "size-L-semi-bold",
  price,
  compareAtPrice,
  animationKey = "product-price",
}) => {
  const isOnSale = compareAtPrice && compareAtPrice !== price;

  return (
    <div className={classes["product-section__price"]} key={animationKey}>
      <StyledParagraph type={type} color={isOnSale ? "red" : "black"}>
        {`${convertPrice(price)} PLN`}
      </StyledParagraph>
      {isOnSale && (
        <StyledParagraph type={type} textDecoration={{ lineThrough: true }}>
          {`${convertPrice(compareAtPrice)} PLN`}
        </StyledParagraph>
      )}
    </div>
  );
};

export default ProductPrice;
