import React from "react";
import cx from "classnames";
import { Button, ButtonProps } from "@mantine/core";
import Image, { StaticImageData } from "next/image";

import classes from "./StyledIconButton.module.css";

type StyledIconButtonType = {
  image?: StaticImageData | string;
  icon?: React.ReactNode;
  color?: "red" | "black" | "beige" | "yellow" | "white" | "inherit";
  onClick?: () => void;
  autoFocus?: boolean;
  type?: "submit";
} & Omit<ButtonProps, "color">;

const StyledIconButton: React.FunctionComponent<StyledIconButtonType> = ({
  image,
  icon,
  color,
  type,
  autoFocus,
  ...props
}) => {
  return (
    <Button
      type={type}
      autoFocus={autoFocus}
      {...props}
      className={cx(classes["styled-icon-button"], {
        [classes[`styled-icon-button--${color}`]]: color,
      })}
    >
      {image && (
        <div className={classes["styled-icon-button__image-wrapper"]}>
          <Image
            src={image}
            alt="to do"
            width={24}
            height={24}
            className={classes["styled-icon-button__image"]}
          />
        </div>
      )}
      {icon}
    </Button>
  );
};

export default StyledIconButton;
