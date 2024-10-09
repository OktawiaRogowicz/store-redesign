import React from "react";

import StyledParagraph from "@/components/StyledParagraph";
import { StyledParagraphType } from "@/components/StyledParagraph/StyledParagraph";

import classes from "./ProductPrice.module.css";

type DividerType = {
  type: StyledParagraphType["type"];
  price: string;
  compare_at_price?: string;
};

const ProductPrice: React.FunctionComponent<DividerType> = ({
  type = "size-L-semi-bold",
  price,
  compare_at_price,
}) => {
  return (
    <div className={classes["product-section__price"]}>
      <StyledParagraph type={type} color={!!compare_at_price ? "red" : "black"}>
        {`${price} PLN`}
      </StyledParagraph>
      {compare_at_price && (
        <StyledParagraph type={type} textDecoration={{ lineThrough: true }}>
          {`${compare_at_price} PLN`}
        </StyledParagraph>
      )}
    </div>
  );
};

export default ProductPrice;
