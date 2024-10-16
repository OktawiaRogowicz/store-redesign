import { useContext } from "react";

import { FavouritesContext, FavouritesContextType } from "./FavouritesProvider";

export const useFavouritesContext = (): FavouritesContextType => {
  return useContext(FavouritesContext);
};
