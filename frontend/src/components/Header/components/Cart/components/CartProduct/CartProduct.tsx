import React, { useState } from "react";
import { useTranslations } from "next-intl";

import ProductPrice from "@/components/ProductPrice";
import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledNumberInput from "@/components/StyledNumberInput";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { CartContextType, CartProductType } from "@/contexts/Cart/CartProvider";

import classes from "./CartProduct.module.css";

type CartType = {
  product: CartProductType;
  cartContext: CartContextType;
};

const CartProduct: React.FunctionComponent<CartType> = ({
  product,
  cartContext,
}) => {
  const t = useTranslations("components");
  const [quantity, setQuantity] = useState(product.quantity);

  const handleProductDecrement = () => {
    cartContext.removeCartProducts(product);
    setQuantity((prev) => prev - 1);
  };

  const handleProductIncrement = () => {
    cartContext.addCartProducts({
      product: product,
      size: product.size,
      price: product.price,
      compareAtPrice: product.compareAtPrice,
      quantity: 1,
    });
    setQuantity((prev) => prev + 1);
  };

  const onProductQuantityChange = (value: number) => {
    setQuantity(value);
    cartContext.updateCartProducts({ product, quantity: value });
  };

  return (
    <div className={classes["cart-product"]}>
      <StyledImage
        src={product.image}
        alt={product.alt}
        width={100}
        height={150}
      />
      <div className={classes["cart-product__description"]}>
        <div className={classes["cart-product__description-header"]}>
          <StyledTitle order={5}>{product.name}</StyledTitle>
          <StyledParagraph type="size-M-light">
            {t("cart.cart-product.size")} {product.size}
          </StyledParagraph>
        </div>
        <ProductPrice
          type="size-M-semi-bold"
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
        <div className={classes["cart-product__description-actions"]}>
          <StyledNumberInput
            handleDecrement={handleProductDecrement}
            handleIncrement={handleProductIncrement}
            onChange={onProductQuantityChange}
            value={quantity}
          />
          <StyledButton variant="underline" size="no-padding">
            {t("cart.cart-product.delete")}
          </StyledButton>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
