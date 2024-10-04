import React, { useState } from "react";

import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledNumberInput from "@/components/StyledNumberInput";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { CartProductType } from "@/contexts/Cart/CartProvider";

import classes from "./CartProduct.module.css";

type CartType = {
  product: CartProductType;
  cartContext: any;
};

const CartProduct: React.FunctionComponent<CartType> = ({
  product,
  cartContext,
}) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleProductDecrement = () => {
    cartContext.removeCartProducts(product);
    setQuantity((prev) => prev - 1);
  };

  const handleProductIncrement = () => {
    cartContext.addCartProducts(product);
    setQuantity((prev) => prev + 1);
  };

  const onProductQuantityChange = (value) => {
    setQuantity(value);
    cartContext.updateCartProducts({ product, quantity: value });
  };

  return (
    <div className={classes["cart-product"]}>
      <StyledImage
        src={product?.previewImageUrl}
        alt={product?.name}
        width={100}
        height={150}
      />
      <div className={classes["cart-product__description"]}>
        <div className={classes["cart-product__description-header"]}>
          <StyledTitle order={4}>{product?.title}</StyledTitle>
          <StyledParagraph type="size-M-light">Rozmiar M</StyledParagraph>
        </div>
        <StyledParagraph type="size-M-semi-bold">
          {product?.cost ?? 0}
        </StyledParagraph>
        <div className={classes["cart-product__description-actions"]}>
          <StyledNumberInput
            handleDecrement={handleProductDecrement}
            handleIncrement={handleProductIncrement}
            onChange={onProductQuantityChange}
            value={quantity}
          />
          <StyledButton variant="underline">Usuń</StyledButton>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
