"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";

import SectionContainer from "@/components/SectionContainer";
import Cart from "@/components/Header/components/Cart";
import HeaderDesktop from "@/components/Header/components/HeaderDesktop";
import HeaderMobile from "@/components/Header/components/HeaderMobile";
import Menu from "@/components/Header/components/Menu";
import Search from "@/components/Header/components/Search";
import { CartContextType } from "@/contexts/Cart/CartProvider";

import classes from "./Header.module.css";
import { HeaderContentType } from "@/sanity/schemas/documents/header";

type HeaderPropsType = {
  header: HeaderContentType;
  variant?: "black" | "yellow";
  colored?: boolean;
  coloredOnMobile?: boolean;
  cartContext: CartContextType;
};

const Header: React.FunctionComponent<HeaderPropsType> = ({
  variant = "black",
  colored = true,
  coloredOnMobile,
  header,
  cartContext,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const isNonBlackFontColorApplied = !isScrolled && !isSearchOpen;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolled(window.pageYOffset > 1),
      );
    }
  }, []);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className={classes["header-wrapper"]}>
        <div
          className={cx(classes["header--color-off"], {
            [classes["header--colored-on-mobile"]]:
              colored && isScrolled && coloredOnMobile,
            [classes["header--color-on"]]: colored && isScrolled,
          })}
        />
        <SectionContainer>
          <div
            className={cx({
              [classes[`header--${variant}-variant`]]:
                isNonBlackFontColorApplied && variant,
            })}
          >
            <HeaderDesktop
              cartContext={cartContext}
              variant={variant}
              isMenuOpen={isMenuOpen}
              isSearchOpen={isSearchOpen}
              handleMenuClick={(value) => setIsMenuOpen(value)}
              handleSearchClick={(value) => setIsSearchOpen(value)}
              isNonBlackFontColorApplied={isNonBlackFontColorApplied}
            />
            <HeaderMobile
              cartContext={cartContext}
              variant={variant}
              isMenuOpen={isMenuOpen}
              isSearchOpen={isSearchOpen}
              handleMenuClick={(value) => setIsMenuOpen(value)}
              handleSearchClick={(value) => setIsSearchOpen(value)}
              isNonBlackFontColorApplied={isNonBlackFontColorApplied}
            />
          </div>
        </SectionContainer>
      </div>

      <Menu
        isOpen={isMenuOpen}
        handleClose={handleMenuClose}
        menuContent={header?.menu}
      />
      <Search isOpen={isSearchOpen} handleClose={handleSearchClose} />
      <Cart cartContext={cartContext} />
    </>
  );
};

export default Header;
