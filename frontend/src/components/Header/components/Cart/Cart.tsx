import React from "react";
import { Modal } from "@mantine/core";
import { useTranslations } from "next-intl";

import Divider from "@/components/Divider";
import StyledButton from "@/components/StyledButton";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { CartContextType } from "@/contexts/Cart/CartProvider";
import CartSummary from "@/pageComponents/CartPage/components/CartSummary";

import classes from "./Cart.module.css";
import CartProduct from "./components/CartProduct";

type CartType = {
  cartContext: CartContextType;
};

const Cart: React.FunctionComponent<CartType> = ({ cartContext }) => {
  const t = useTranslations("components");
  const isEmpty = cartContext.cart?.products?.length === 0;
  return (
    <Modal.Root
      opened={cartContext.cartMenuState?.isOpen}
      onClose={cartContext.closeCartMenu}
      lockScroll
      zIndex={9999}
      yOffset={0}
      xOffset={0}
      radius={0}
    >
      <Modal.Overlay transitionProps={{ transition: "slide-left" }} />
      <Modal.Content
        className={classes["cart__content"]}
        radius={0}
        transitionProps={{ transition: "slide-left" }}
      >
        <Modal.Body className={classes["cart__body"]}>
          <div className={classes["cart__header"]}>
            <div className={classes["cart__title"]}>
              <StyledTitle order={3}>{t("cart.title")}</StyledTitle>
              <StyledTitle order={4}>
                (
                <span
                  className={classes["cart__animated-quantity"]}
                  key={cartContext.cart?.totalQuantity}
                >
                  {cartContext.cart?.totalQuantity ?? 0}
                </span>
                )
              </StyledTitle>
            </div>
            <Modal.CloseButton />
          </div>

          {isEmpty ? (
            <div className={classes["cart__body-inner"]}>
              <StyledParagraph type="size-M-light" alignment="center">
                {t("cart.empty-state.description")}
              </StyledParagraph>
              <StyledButton
                variant="filled"
                onClick={cartContext.closeCartMenu}
              >
                {t("cart.empty-state.cta")}
              </StyledButton>
            </div>
          ) : (
            <>
              <div className={classes["cart__body-inner"]}>
                {cartContext.cart?.products.length > 0 &&
                  cartContext.cart?.products.map((product, index) => {
                    return (
                      <>
                        <CartProduct
                          key={`${product.id}-${product.size}`}
                          product={product}
                          cartContext={cartContext}
                        />
                        {index !== cartContext.cart?.products.length - 1 && (
                          <Divider color="beige" />
                        )}
                      </>
                    );
                  })}
              </div>
              <div className={classes["cart__footer"]}>
                <CartSummary />
              </div>
            </>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default Cart;
