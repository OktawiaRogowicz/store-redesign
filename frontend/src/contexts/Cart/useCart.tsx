import { useContext } from "react";

import { CartContext, CartContextType } from "./CartProvider";

export const useCartContext = (): CartContextType => {
  return useContext(CartContext);
};
