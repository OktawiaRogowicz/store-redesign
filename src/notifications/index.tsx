import React from "react";
import { notifications } from "@mantine/notifications";

import StyledButton from "@/components/StyledButton";
import StyledImage from "@/components/StyledImage";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { useCartContext } from "@/contexts/Cart/useCart";

import classes from "./styles.module.css";

export const useNotifications = () => {
  const cartContext = useCartContext();

  const showErrorNotification = ({ message }: { message: string }) =>
    notifications.show({
      message: (
        <div className={classes["notifications__message-"]}>
          <div className={classes["notifications__item-description"]}>
            <StyledParagraph type="size-S-semi-bold" color="red">
              Error!
            </StyledParagraph>
            <StyledParagraph type="size-M-light" color="black">
              {message}
            </StyledParagraph>
          </div>
        </div>
      ),
      icon: false,
      autoClose: 1000,
      transitionDuration: 500,
      classNames: {
        root: classes["notification__root--error"],
        icon: classes["notification__icon--error"],
      },
    });

  const showNotification = ({
    title,
    message,
    image,
  }: {
    title: string;
    message: string;
    image?: {
      src: string;
      alt: string;
    };
  }) =>
    notifications.show({
      message: (
        <div className={classes["notifications__message"]}>
          <StyledParagraph type="size-S-semi-bold">
            Dodano do koszyka:
          </StyledParagraph>

          <div className={classes["notifications__item-description"]}>
            <StyledTitle order={5}>{title}</StyledTitle>
            <StyledParagraph type="size-M-light">
              Rozmiar: {message}
            </StyledParagraph>
          </div>

          {/*<StyledButton*/}
          {/*  variant="underline"*/}
          {/*  size="no-padding"*/}
          {/*  onClick={cartContext.openCartMenu}*/}
          {/*>*/}
          {/*  Pokaż koszyk*/}
          {/*</StyledButton>*/}
        </div>
      ),
      autoClose: 1000,
      transitionDuration: 500,
      icon: image && (
        <StyledImage
          src={image.src}
          alt={image.alt}
          height="100%"
          width="100%"
        />
      ),
      classNames: {
        root: classes["notification__root"],
        icon: classes["notification__icon"],
        body: classes["notification__body"],
        title: classes["notification__title"],
        description: classes["notification__description"],
      },
    });

  return {
    showNotification,
    showErrorNotification,
  };
};
