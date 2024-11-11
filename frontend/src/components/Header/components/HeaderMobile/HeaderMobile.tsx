import React from "react";
import { Indicator } from "@mantine/core";
import Link from "next/link";
import { IconMenu2, IconSearch, IconShoppingCart } from "@tabler/icons-react";

import { CartContextType } from "@/contexts/Cart/CartProvider";
import StyledIconButton from "@/components/StyledIconButton";
import { ROUTES } from "@/config";
import LogoIconMobile from "@/icons/LogoIconMobile";

import classes from "./HeaderMobile.module.css";

type HeaderMobileType = {
  variant: "black" | "yellow";
  cartContext: CartContextType;
  isMenuOpen: boolean;
  isSearchOpen: boolean;
  handleMenuClick: (value: boolean) => void;
  handleSearchClick: (value: boolean) => void;
  isNonBlackFontColorApplied: boolean;
};

const HeaderMobile: React.FunctionComponent<HeaderMobileType> = ({
  variant = "black",
  cartContext,
  isMenuOpen,
  isSearchOpen,
  handleMenuClick,
  handleSearchClick,
  isNonBlackFontColorApplied,
}) => {
  return (
    <div className={classes["header-mobile"]}>
      <div className={classes["header__left-column"]}>
        <StyledIconButton
          color={isNonBlackFontColorApplied ? variant : "black"}
          icon={<IconMenu2 stroke="1px" width={24} height={24} />}
          onClick={() => handleMenuClick(!isMenuOpen)}
        />
      </div>

      <Link href={ROUTES.home.href}>
        <div className={classes["header__logo"]}>
          <LogoIconMobile />
        </div>
      </Link>

      <div className={classes["header__right-column"]}>
        <StyledIconButton
          color={isNonBlackFontColorApplied ? variant : "black"}
          icon={<IconSearch stroke="1px" width={24} height={24} />}
          onClick={() => handleSearchClick(!isSearchOpen)}
        />
        <Indicator
          color="rgba(47, 36, 14, 1)"
          position="bottom-end"
          offset={7}
          label={cartContext.cart?.totalQuantity ?? 0}
          size={16}
          className={classes["header-mobile__indicator"]}
        >
          <StyledIconButton
            color={isNonBlackFontColorApplied ? variant : "black"}
            icon={<IconShoppingCart stroke="1px" width={24} height={24} />}
            onClick={() => cartContext.openCartMenu()}
          />
        </Indicator>
      </div>
    </div>
  );
};

export default HeaderMobile;
