import React from "react";
import { Modal } from "@mantine/core";

import Divider from "@/components/Divider";
import CartProduct from "@/components/Header/components/Cart/components/CartProduct";
import StyledTitle from "@/components/StyledTitle";
import { CartContextType } from "@/contexts/Cart/CartProvider";
import CartSummary from "@/pageComponents/CartPage/components/CartSummary";

import classes from "./Cart.module.css";
import StyledButton from "@/components/StyledButton";
import StyledParagraph from "@/components/StyledParagraph";

type CartType = {
  cartContext: CartContextType;
};

const Cart: React.FunctionComponent<CartType> = ({ cartContext }) => {
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
              <StyledTitle order={3}>Koszyk</StyledTitle>
              <StyledTitle order={4}>
                ({cartContext.cart?.totalQuantity ?? 0})
              </StyledTitle>
            </div>
            <Modal.CloseButton />
          </div>

          {isEmpty ? (
            <div className={classes["cart__body-inner"]}>
              <StyledParagraph type="size-M-light" alignment="center">
                Koszyk jest pusty.
              </StyledParagraph>
              <StyledButton
                variant="filled"
                onClick={cartContext.closeCartMenu}
              >
                kontynuuj zakupy
              </StyledButton>
            </div>
          ) : (
            <>
              <div className={classes["cart__body-inner"]}>
                {cartContext.cart?.products.map((product, index) => {
                  return (
                    <>
                      <CartProduct
                        key={product.id}
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
