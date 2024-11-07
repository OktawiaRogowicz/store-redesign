"use client";

import React, { useState, createContext } from "react";

import { useNotifications } from "../../notifications";
import { ProductType } from "../../sanity/lib/getters/getProduct";

export type ShopifyPrice = {
  amount: string | number;
  currencyCode: string;
};

export type CartProductType = {
  image: string;
  alt: string;
  name: string;
  id: number;
  price: string | number;
  compareAtPrice: string | number;
  quantity: number;
  sum: number;
  size: string;
};

export type CartType = {
  id?: string;
  // note: string;
  products: CartProductType[];
  // checkoutUrl: string;
  // buyerIdentity: BuyerIdentity;
  totalQuantity: number;
  cost?: {
    subtotalAmount: ShopifyPrice;
    totalAmount: ShopifyPrice;
    totalDutyAmount?: ShopifyPrice;
    totalTaxAmount?: ShopifyPrice;
  };
};

const CartTypeInitialValue = {
  id: undefined,
  // note: string;
  products: [],
  // checkoutUrl: string;
  // buyerIdentity: BuyerIdentity
  totalQuantity: 0,
  cost: undefined,
};

type CartMenuStateType = {
  isOpen: boolean;
};

const CartMenuStateInitialValue = {
  isOpen: false,
};

export type CartContextType = {
  loading: boolean;
  cart: CartType | null;
  cartMenuState: CartMenuStateType;
  openCartMenu: () => void;
  closeCartMenu: () => void;
  addCartProducts: ({
    product,
    size,
    quantity,
    price,
    compareAtPrice,
  }: {
    product: CartProductType;
    size: string;
    quantity: number;
    price: string | number;
    compareAtPrice: string | number;
  }) => void;
  updateCartProducts: ({
    product,
    quantity,
  }: {
    product: CartProductType;
    quantity: number;
  }) => void;
  removeCartProducts: (product: CartProductType) => void;
};

export const convertProductToCartProduct = ({
  product,
  price,
  compareAtPrice,
  quantity,
  size,
}: {
  product: ProductType;
  price: string | number;
  compareAtPrice: string | number;
  quantity: number;
  size: string;
}): CartProductType => {
  return {
    image: product.product.image.src,
    alt: product.product.image.alt ?? product.product.title,
    name: product.product.title,
    id: product.product.id,
    price: price,
    compareAtPrice: compareAtPrice,
    size: size,
    quantity: quantity,
    sum: Number(price) * quantity,
  };
};

const findCartItem = ({
  cartItems,
  id,
  size,
}: {
  cartItems: CartProductType[];
  id: number;
  size: string;
}) =>
  cartItems.find((cartItem) => cartItem.id === id && cartItem.size === size);

export const CartContext = createContext<CartContextType>({
  loading: false,
  cart: CartTypeInitialValue,
  cartMenuState: CartMenuStateInitialValue,
  openCartMenu: () => undefined,
  closeCartMenu: () => undefined,
  addCartProducts: (product) => undefined,
  removeCartProducts: (product) => undefined,
  updateCartProducts: ({ product, quantity }) => undefined,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<CartType>(CartTypeInitialValue);
  const [cartMenuState, setCartMenuState] = useState<CartMenuStateType>(
    CartMenuStateInitialValue,
  );

  const { showNotification } = useNotifications();

  const openCartMenu = () => {
    setCartMenuState({ isOpen: true });
  };

  const closeCartMenu = () => {
    setCartMenuState({ isOpen: false });
  };

  const addCartProducts = ({
    product,
    quantity,
    size,
    price,
    compareAtPrice,
  }: {
    product: CartProductType;
    quantity: number;
    size: string;
    price: string | number;
    compareAtPrice: string | number;
  }) => {
    const cartItems = cart.products;

    const isItemInCart = findCartItem({
      cartItems,
      id: product.id,
      size,
    });

    const totalQuantity = cartItems.reduce(
      (sum, product) => (sum += product.quantity),
      0,
    );

    const newCost = {
      subtotalAmount: {
        amount:
          Number(cart.cost?.subtotalAmount.amount ?? 0) +
          Number(product.price) * quantity,
        currencyCode: "PLN",
      },
      totalAmount: {
        amount:
          Number(cart.cost?.totalAmount.amount ?? 0) +
          Number(product.compareAtPrice) * quantity,
        currencyCode: "PLN",
      },
      totalDutyAmount: {
        amount: 0,
        currencyCode: "PLN",
      },
      totalTaxAmount: {
        amount: 0,
        currencyCode: "PLN",
      },
    };

    if (isItemInCart) {
      setCart((previous) => ({
        ...previous,
        products: cartItems.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === size
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem,
        ),
        totalQuantity: totalQuantity + quantity,
        cost: newCost,
      }));
    } else {
      setCart((previous) => ({
        ...previous,
        products: [...cartItems, { ...product, quantity: quantity }],
        totalQuantity: totalQuantity + quantity,
        cost: newCost,
      }));
    }

    showNotification({
      title: product.name,
      message: size,
      image: { src: product.image, alt: product.alt },
    });
  };

  const updateCartProducts = ({
    product,
    quantity,
  }: {
    product: CartProductType;
    quantity: number;
  }) => {
    const cartItems = cart.products;

    const isItemInCart = findCartItem({
      cartItems,
      id: product.id,
      size: product.size,
    });

    const totalQuantity = cartItems
      .filter((cartItem) => cartItem.id !== product.id)
      .reduce((sum, product) => (sum += product.quantity), 0);

    if (isItemInCart) {
      setCart((previous) => ({
        ...previous,
        products: cartItems.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === product.size
            ? { ...cartItem, quantity: quantity }
            : cartItem,
        ),
        totalQuantity: totalQuantity + quantity,
      }));
    }
  };

  const removeCartProducts = (product: CartProductType) => {
    const cartItems = cart.products;

    const isItemInCart = findCartItem({
      cartItems,
      id: product.id,
      size: product.size,
    });

    const totalQuantity = cartItems.reduce(
      (sum, product) => (sum += product.quantity),
      0,
    );

    const newCost = {
      subtotalAmount: {
        amount:
          Number(cart.cost?.subtotalAmount.amount ?? 0) - Number(product.price),
        currencyCode: "PLN",
      },
      totalAmount: {
        amount:
          Number(cart.cost?.totalAmount.amount ?? 0) -
          Number(product.compareAtPrice),
        currencyCode: "PLN",
      },
      totalDutyAmount: {
        amount: 0,
        currencyCode: "PLN",
      },
      totalTaxAmount: {
        amount: 0,
        currencyCode: "PLN",
      },
    };

    if (isItemInCart?.quantity === 1) {
      setCart((previous) => {
        return {
          ...previous,
          products: previous.products.filter(
            (cartItem) =>
              !(cartItem.id === product.id && cartItem.size === product.size),
          ),
          totalQuantity: totalQuantity - 1,
          cost: newCost,
        };
      });
    } else {
      setCart((previous) => ({
        ...previous,
        products: previous.products.map((cartItem) =>
          cartItem.id === product.id && cartItem.size === product.size
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
        totalQuantity: totalQuantity - 1,
        cost: newCost,
      }));
    }
  };

  return (
    <CartContext.Provider
      value={{
        loading,
        cart,
        cartMenuState,
        openCartMenu,
        closeCartMenu,
        addCartProducts,
        updateCartProducts,
        removeCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
