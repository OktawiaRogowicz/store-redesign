import React from "react";
import { Modal } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

import StyledIconButton from "@/components/StyledIconButton";
import StyledParagraph from "@/components/StyledParagraph";
import { ROUTES } from "@/config";
import { HeaderContentType } from "@/sanity/schemas/documents/header";

import classes from "./Menu.module.css";

type MenuType = {
  isOpen: boolean;
  handleClose: () => void;
  menuContent: HeaderContentType["menu"];
};

const Menu: React.FunctionComponent<MenuType> = ({
  isOpen,
  handleClose,
  menuContent,
}) => {
  return (
    <Modal.Root
      opened={isOpen}
      onClose={handleClose}
      lockScroll
      zIndex={9999}
      yOffset={0}
      xOffset={0}
      radius={0}
      className={classes["menu__root"]}
    >
      <Modal.Overlay transitionProps={{ transition: "slide-right" }} />
      <Modal.Content
        className={classes["menu__content"]}
        radius={0}
        transitionProps={{ transition: "slide-right" }}
      >
        <Modal.Body className={classes["menu__body"]}>
          <div className={classes["menu__header"]}>
            <StyledIconButton
              icon={<IconX stroke="1px" />}
              onClick={handleClose}
            />
          </div>
          {menuContent?.selected?.length > 0 && (
            <div className={classes["menu__items"]}>
              {menuContent.selected.map((item) => {
                return (
                  <StyledParagraph
                    type="size-S-semi-bold"
                    key={item.slug}
                    color={item.isColored ? "red" : "black"}
                  >
                    <a
                      className={classes["menu__item-link"]}
                      href={`${ROUTES.category.href}/${item.route}`}
                    >
                      {item.title}
                    </a>
                  </StyledParagraph>
                );
              })}
            </div>
          )}
          {menuContent?.collections?.length > 0 && (
            <div className={classes["menu__items"]}>
              {menuContent.collections.map((item) => {
                return (
                  <StyledParagraph type="size-L-light--italic" key={item.slug}>
                    <a
                      className={classes["menu__item-link"]}
                      href={`${ROUTES.category.href}/${item.route}`}
                    >
                      {item.title}
                    </a>
                  </StyledParagraph>
                );
              })}
            </div>
          )}
          {menuContent?.categories?.length > 0 && (
            <div className={classes["menu__items"]}>
              {menuContent.categories.map((item) => {
                return (
                  <StyledParagraph type="size-M-light" key={item.slug}>
                    <a
                      className={classes["menu__item-link"]}
                      href={`${ROUTES.category.href}/${item.route}`}
                    >
                      {item.title}
                    </a>
                  </StyledParagraph>
                );
              })}
            </div>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default Menu;
