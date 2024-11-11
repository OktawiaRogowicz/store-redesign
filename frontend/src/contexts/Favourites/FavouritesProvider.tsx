"use client";

import React, { useState, createContext } from "react";

export type FavouritesContextType = {
  quantity: number;
  handleFavouriteClick: (id: number) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  quantity: 0,
  handleFavouriteClick: (id) => undefined,
});

const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favourites, setFavourites] = useState([]);

  const handleFavouriteClick = (id: number) => {
    const isItemInFavourites = favourites.find((favourite) => favourite === id);

    if (isItemInFavourites) {
      setFavourites((previous) => [...previous, id]);
    } else {
      const array = favourites.filter((favourite) => favourite !== id);
      setFavourites(array);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        quantity: favourites.length,
        handleFavouriteClick,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
