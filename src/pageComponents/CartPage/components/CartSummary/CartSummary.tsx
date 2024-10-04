import React from "react";
import Link from "next/link";

import StyledParagraph from "@/components/StyledParagraph";
import Divider from "@/components/Divider";
import StyledButton from "@/components/StyledButton";
import { ROUTES } from "@/config";

import classes from "./CartSummary.module.css";
import { useCartContext } from "@/contexts/Cart/useCart";

const CartSummary: React.FunctionComponent = () => {
  const cartContext = useCartContext();

  return (
    <div className={classes["cart-summary"]}>
      <div className={classes["cart-summary__costs"]}>
        <div className={classes["cart-summary__info-row"]}>
          <StyledParagraph type="size-M-light">Produkty</StyledParagraph>
          <StyledParagraph type="size-L-semi-bold">
            {cartContext?.cart?.cost?.subtotalAmount ?? 0}
          </StyledParagraph>
        </div>
        <div className={classes["cart-summary__info-row"]}>
          <StyledParagraph type="size-M-light">Kod rabatowy</StyledParagraph>
          <StyledParagraph type="size-L-semi-bold">62 pln</StyledParagraph>
        </div>
        <div className={classes["cart-summary__info-row"]}>
          <StyledParagraph type="size-M-light">Wysyłka</StyledParagraph>
          <StyledParagraph type="size-L-semi-bold">30 pln</StyledParagraph>
        </div>
      </div>
      <Divider />
      <div className={classes["cart-summary__info-row"]}>
        <StyledParagraph type="size-L-semi-bold">Razem</StyledParagraph>
        <StyledParagraph type="size-L-semi-bold">
          {cartContext?.cart?.cost?.totalAmount ?? 0}
        </StyledParagraph>
      </div>
      <div className={classes["cart-summary__button-container"]}>
        <StyledButton variant="filled" size="L" fullWidth>
          Przejdź do płatności
        </StyledButton>
        <StyledButton variant="outline" href={ROUTES.cart.href}>
          Koszyk
        </StyledButton>
      </div>
      <StyledParagraph type="size-M-light">
        to do kod rabatowy to do
      </StyledParagraph>
    </div>
  );
};

export default CartSummary;
