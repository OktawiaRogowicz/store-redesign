"use client";

import React, { useState, createContext } from "react";

export type ShopifyPrice = {
  amount: string;
  currencyCode: string;
};

export type CartProductType = {
  image: string;
  name: string;
  id: string;
  cost: string;
  quantity: number;
  sum: string;
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
  addCartProducts: (product: CartProductType) => void;
  updateCartProducts: ({
    product,
    quantity,
  }: {
    product: CartProductType;
    quantity: number;
  }) => void;
  removeCartProducts: (product: CartProductType) => void;
};

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

  const openCartMenu = () => {
    setCartMenuState({ isOpen: true });
  };

  const closeCartMenu = () => {
    setCartMenuState({ isOpen: false });
  };

  const addCartProducts = (product: CartProductType) => {
    const cartItems = cart.products;

    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id,
    );

    const totalQuantity = cartItems.reduce(
      (sum, product) => (sum += product.quantity),
      0,
    );

    if (isItemInCart) {
      setCart((previous) => ({
        ...previous,
        products: cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
        totalQuantity: totalQuantity + 1,
      }));
    } else {
      setCart((previous) => ({
        ...previous,
        products: [...cartItems, { ...product, quantity: 1 }],
        totalQuantity: totalQuantity + 1,
      }));
    }
  };

  const updateCartProducts = ({
    product,
    quantity,
  }: {
    product: CartProductType;
    quantity: number;
  }) => {
    const cartItems = cart.products;

    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id,
    );

    const totalQuantity = cartItems
      .filter((cartItem) => cartItem.id !== product.id)
      .reduce((sum, product) => (sum += product.quantity), 0);

    if (isItemInCart) {
      setCart((previous) => ({
        ...previous,
        products: cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: quantity }
            : cartItem,
        ),
        totalQuantity: totalQuantity + quantity,
      }));
    }
  };

  const removeCartProducts = (product: CartProductType) => {
    const cartItems = cart.products;

    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.id === product.id,
    );

    const totalQuantity = cartItems.reduce(
      (sum, product) => (sum += product.quantity),
      0,
    );

    if (isItemInCart?.quantity === 1) {
      setCart((previous) => ({
        ...previous,
        products: cartItems.filter((cartItem) => cartItem.id !== product.id),
        totalQuantity: totalQuantity - 1,
      }));
    } else {
      setCart((previous) => ({
        ...previous,
        products: cartItems.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        ),
        totalQuantity: totalQuantity - 1,
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
