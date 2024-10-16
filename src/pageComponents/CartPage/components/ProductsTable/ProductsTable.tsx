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
import { useTranslations } from "next-intl";

type ProductsTableType = {
  cartContext: CartContextType;
};

const ProductsTable: React.FunctionComponent<ProductsTableType> = ({
  cartContext,
}) => {
  const t = useTranslations("sections");

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
              {t("products-table.product-preview.size")}: {product.size}
            </StyledParagraph>
          </div>
          <div>
            <StyledButton
              variant="underline"
              fullWidth={false}
              onClick={() => cartContext.removeCartProducts(product)}
            >
              {t("products-table.product-preview.delete")}
            </StyledButton>
          </div>
        </div>
      </div>
      <div className={classes["products-table__tr-product-actions"]}>
        <StyledParagraph type="size-M-semi-bold" alignment="left">
          {product.price}
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
          <StyledParagraph type="size-S-semi-bold">
            {t("products-table.tr.product")}
          </StyledParagraph>
        </div>
        <div className={classes["products-table__tr-product-actions"]}>
          <StyledParagraph type="size-S-semi-bold" alignment="left">
            {t("products-table.tr.price")}
          </StyledParagraph>
          <StyledParagraph type="size-S-semi-bold" alignment="center">
            {t("products-table.tr.quantity")}
          </StyledParagraph>
          <StyledParagraph type="size-S-semi-bold" alignment="right">
            {t("products-table.tr.sum")}
          </StyledParagraph>
        </div>
      </div>
      <div className={classes["products-table__tbody"]}>
        {cartContext.cart?.products && cartContext.cart.products?.length > 0 ? (
          rows
        ) : (
          <div className={classes["products-table__empty"]}>
            <StyledParagraph type="size-M-light" alignment="center">
              {t("products-table.empty-state.description")}
            </StyledParagraph>
            <StyledButton variant="filled">
              {t("products-table.empty-state.cta")}
            </StyledButton>
          </div>
        )}
      </div>
      <Divider />
      {cartContext.cart?.products && cartContext.cart.products.length > 0 && (
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
