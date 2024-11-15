"use client";

import React, { useEffect, useState } from "react";
import cx from "classnames";

import SectionContainer from "@/components/SectionContainer";
import { CartContextType } from "@/contexts/Cart/CartProvider";
import { HeaderContentType } from "@/sanity/types/documents/HeaderContentType";

import classes from "./Header.module.css";
import Cart from "./components/Cart";
import HeaderDesktop from "./components/HeaderDesktop";
import HeaderMobile from "./components/HeaderMobile";
import Menu from "./components/Menu";
import Search from "./components/Search";
import { usePathname } from "@/i18n/routing";

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

  const pathname = usePathname();
  const isSearchPage = pathname.startsWith("/search");

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

  const handleSearchIconClick = (value: boolean) => {
    if (!isSearchPage) setIsSearchOpen(value);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className={classes["header-wrapper"]}>
        <div
          className={cx(classes["header--color-off"], {
            [classes["header--colored-on-mobile"]]: coloredOnMobile,
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
              handleSearchClick={(value) => handleSearchIconClick(value)}
              isNonBlackFontColorApplied={isNonBlackFontColorApplied}
            />
            <HeaderMobile
              cartContext={cartContext}
              variant={variant}
              isMenuOpen={isMenuOpen}
              isSearchOpen={isSearchOpen}
              handleMenuClick={(value) => setIsMenuOpen(value)}
              handleSearchClick={(value) => handleSearchIconClick(value)}
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
