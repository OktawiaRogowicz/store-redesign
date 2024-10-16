import React from "react";
import Link from "next/link";

import { CartContextType } from "@/contexts/Cart/CartProvider";
import StyledButton from "@/components/StyledButton";
import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import { ROUTES } from "@/config";
import { LogoIcon, SearchIcon } from "@/icons";

import classes from "./HeaderDesktop.module.css";
import { useTranslations } from "next-intl";
import { useFavouritesContext } from "@/contexts/Favourites/useFavourites";

type HeaderDesktopType = {
  variant: "black" | "yellow";
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
  const t = useTranslations("components");
  const favouritesContext = useFavouritesContext();

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
          {t("header.menu")}
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
          {`${t("header.favourites")} (${favouritesContext.quantity})`}
        </StyledParagraph>
        <StyledButton
          onClick={cartContext.openCartMenu}
          fullWidth={false}
          variant="text"
          size="no-padding"
        >
          <StyledParagraph
            type="size-M-light"
            color={isNonBlackFontColorApplied ? variant : "black"}
          >
            {t("header.cart")}
            <span>
              (
              <span
                className={classes["header__animated-quantity"]}
                key={cartContext.cart?.totalQuantity}
              >
                {cartContext.cart?.totalQuantity}
              </span>
              )
            </span>
          </StyledParagraph>
        </StyledButton>
      </div>
    </div>
  );
};

export default HeaderDesktop;
