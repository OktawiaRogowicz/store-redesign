import React from "react";
import Link from "next/link";

import { CartContextType } from "@/contexts/Cart/CartProvider";
import StyledButton from "@/components/StyledButton";
import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import { ROUTES } from "@/config";
import { LogoIcon, SearchIcon } from "@/icons";

import classes from "./HeaderDesktop.module.css";

type HeaderDesktopType = {
  variant?: "black" | "yellow";
  cartContext: CartContextType;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  handleMenuClick: (value: boolean) => void;
  handleSearchClick: (value: boolean) => void;
  isNonBlackFontColorApplied: boolean;
};

const HeaderDesktop: React.FunctionComponent<HeaderDesktopType> = ({
  variant = "black",
  cartContext,
  isMenuOpen,
  isSearchOpen,
  handleMenuClick,
  handleSearchClick,
  isNonBlackFontColorApplied,
}) => {
  return (
    <div className={classes["header-desktop"]}>
      <div className={classes["header__left-column"]}>
        <StyledButton
          onClick={() => handleMenuClick(!isMenuOpen)}
          fullWidth={false}
          variant="transparent"
          size="no-padding"
          color={isNonBlackFontColorApplied ? variant : "black"}
        >
          Menu
        </StyledButton>
      </div>
      <Link href={ROUTES.home.href}>
        <div className={classes["header__logo"]}>
          <LogoIcon />
        </div>
      </Link>

      <div className={classes["header__right-column"]}>
        <StyledIconButton
          color={isNonBlackFontColorApplied ? variant : "black"}
          icon={<SearchIcon />}
          onClick={() => handleSearchClick(!isSearchOpen)}
        />
        <StyledParagraph type="size-M-light" color="inherit">
          ulubione (0)
        </StyledParagraph>
        <div onClick={cartContext.openCartMenu}>
          <StyledParagraph type="size-M-light" color="inherit">
            koszyk (0)
          </StyledParagraph>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
