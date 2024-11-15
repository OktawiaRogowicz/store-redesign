import React from "react";
import { useTranslations } from "next-intl";

import StyledParagraph from "@/components/StyledParagraph";
import Divider from "@/components/Divider";
import ProductPrice from "@/components/ProductPrice";
import StyledButton from "@/components/StyledButton";
import { ROUTES } from "@/config";
import { useCartContext } from "@/contexts/Cart/useCart";

import classes from "./CartSummary.module.css";

const CartSummary: React.FunctionComponent = () => {
  const t = useTranslations("components");
  const cartContext = useCartContext();

  const subtotalAmount = cartContext?.cart?.cost?.subtotalAmount.amount ?? 0;
  const totalAmount = cartContext?.cart?.cost?.totalAmount.amount ?? 0;

  return (
    <div className={classes["cart-summary"]}>
      <div className={classes["cart-summary__costs"]}>
        <div className={classes["cart-summary__info-row"]}>
          <StyledParagraph type="size-M-light">
            {t("cart-summary.products")}
          </StyledParagraph>
          <ProductPrice
            type="size-L-semi-bold"
            price={subtotalAmount}
            animationKey={subtotalAmount}
          />
        </div>
        {/*<div className={classes["cart-summary__info-row"]}>*/}
        {/*  <StyledParagraph type="size-M-light">*/}
        {/*    {t("cart-summary.discount-code")}*/}
        {/*  </StyledParagraph>*/}
        {/*  <StyledParagraph type="size-L-semi-bold">*/}
        {/*    TEXTTOCHANGE62 pln*/}
        {/*  </StyledParagraph>*/}
        {/*</div>*/}
        {/*<div className={classes["cart-summary__info-row"]}>*/}
        {/*  <StyledParagraph type="size-M-light">*/}
        {/*    {t("cart-summary.shipment")}*/}
        {/*  </StyledParagraph>*/}
        {/*  <StyledParagraph type="size-L-semi-bold">*/}
        {/*    TEXTTOCHANGE30 pln*/}
        {/*  </StyledParagraph>*/}
        {/*</div>*/}
      </div>
      <Divider />
      <div className={classes["cart-summary__info-row"]}>
        <StyledParagraph type="size-L-semi-bold">
          {t("cart-summary.sum")}
        </StyledParagraph>
        <ProductPrice
          type="size-L-semi-bold"
          price={totalAmount}
          animationKey={totalAmount}
        />
      </div>
      <div className={classes["cart-summary__button-container"]}>
        <StyledButton variant="filled" size="L" fullWidth>
          {t("cart-summary.buttons.continue")}
        </StyledButton>
        <StyledButton variant="outline" href={ROUTES.cart.href} fullWidth>
          {t("cart-summary.buttons.cart")}
        </StyledButton>
      </div>
      {/*<StyledParagraph type="size-M-light">*/}
      {/*  {t("cart-summary.accordion.title")}*/}
      {/*</StyledParagraph>*/}
    </div>
  );
};

export default CartSummary;
