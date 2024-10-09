import React from "react";

import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import StyledTitle from "@/components/StyledTitle";
import { CartContextType } from "@/contexts/Cart/CartProvider";
import ProductsTable from "@/pageComponents/CartPage/components/ProductsTable";

import classes from "./CartSection.module.css";

type CartPageType = {
  cartContext: CartContextType;
};

const CartSection: React.FunctionComponent<CartPageType> = ({
  cartContext,
}) => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <div className={classes["cart-section"]}>
          <div className={classes["cart-section__header"]}>
            <StyledTitle order={2}>Koszyk</StyledTitle>
            <StyledTitle order={3}>
              ({cartContext.cart?.totalQuantity ?? 0})
            </StyledTitle>
          </div>

          <ProductsTable cartContext={cartContext} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default CartSection;
