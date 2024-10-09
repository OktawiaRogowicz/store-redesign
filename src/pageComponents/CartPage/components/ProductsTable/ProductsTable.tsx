import React from "react";
import Image from "next/image";

import Divider from "@/components/Divider";
import StyledButton from "@/components/StyledButton";
import StyledNumberInput from "@/components/StyledNumberInput";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { CartContextType } from "@/contexts/Cart/CartProvider";
import CartSummary from "@/pageComponents/CartPage/components/CartSummary";

import classes from "./ProductsTable.module.css";

type ProductsTableType = {
  cartContext: CartContextType;
};

const ProductsTable: React.FunctionComponent<ProductsTableType> = ({
  cartContext,
}) => {
  const rows = cartContext.cart?.products.map((product) => (
    <div key={product.name} className={classes["products-table__tr"]}>
      <div className={classes["products-table__tr-product-title"]}>
        <div className={classes["products-table__td-product-image"]}>
          <div className={classes["products-table__product-image-wrapper"]}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className={classes["products-table__product-image"]}
            />
          </div>
        </div>
        <div className={classes["products-table__td-product-description"]}>
          <div
            className={classes["products-table__td-product-description-title"]}
          >
            <StyledTitle order={4}>{product.name}</StyledTitle>
            <StyledParagraph type="size-M-light">
              Rozmiar: {product.size}
            </StyledParagraph>
          </div>
          <div>
            <StyledButton
              variant="underline"
              fullWidth={false}
              onClick={() => cartContext.removeCartProducts(product)}
            >
              Usuń
            </StyledButton>
          </div>
        </div>
      </div>
      <div className={classes["products-table__tr-product-actions"]}>
        <StyledParagraph type="size-M-semi-bold" alignment="left">
          {product.cost}
        </StyledParagraph>
        <StyledNumberInput
          value={product.quantity}
          handleIncrement={() => console.log("+")}
          handleDecrement={() => console.log("-")}
        />
        <StyledParagraph type="size-M-semi-bold" alignment="right">
          {product.sum}
        </StyledParagraph>
      </div>
    </div>
  ));

  return (
    <div className={classes["products-table__table"]}>
      <div className={classes["products-table__thead"]}>
        <div className={classes["products-table__tr-product-title"]}>
          <span />
          <StyledParagraph type="size-S-semi-bold">Produkt</StyledParagraph>
        </div>
        <div className={classes["products-table__tr-product-actions"]}>
          <StyledParagraph type="size-S-semi-bold" alignment="left">
            Cena
          </StyledParagraph>
          <StyledParagraph type="size-S-semi-bold" alignment="center">
            Ilość
          </StyledParagraph>
          <StyledParagraph type="size-S-semi-bold" alignment="right">
            Suma
          </StyledParagraph>
        </div>
      </div>
      <div className={classes["products-table__tbody"]}>
        {cartContext.cart?.products.length > 0 ? (
          rows
        ) : (
          <div className={classes["products-table__empty"]}>
            <StyledParagraph type="size-M-light" alignment="center">
              Koszyk jest pusty.
            </StyledParagraph>
            <StyledButton variant="filled">Kontynuuj zakupy</StyledButton>
          </div>
        )}
      </div>
      <Divider />
      {cartContext.cart?.products.length > 0 && (
        <div>
          <div className={classes["products-table__tr"]}>
            <div className={classes["products-table__tr-product-title"]} />
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
