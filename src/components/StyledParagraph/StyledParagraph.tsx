import React from "react";
import cx from "classnames";
import { Text, TextProps } from "@mantine/core";

import classes from "./StyledParagraph.module.css";

type StyledParagraphPropsType = {
  type:
    | "size-L-light--italic"
    | "size-XL-semi-bold"
    | "size-L-semi-bold"
    | "size-M-semi-bold"
    | "size-S-semi-bold"
    | "size-L-light"
    | "size-M-light"
    | "size-S-light"
    | "size-M-regular";
  color?: "black" | "beige" | "yellow" | "white" | "inherit";
  alignment?: "left" | "center" | "right";
  textDecoration?: {
    underline?: boolean;
    lineThrough?: boolean;
  };
  children: React.ReactNode;
} & TextProps;

const StyledParagraph: React.FunctionComponent<StyledParagraphPropsType> = ({
  type,
  color = "black",
  alignment,
  textDecoration,
  ...props
}) => {
  return (
    <Text
      component="span"
      {...props}
      className={cx(classes["styled-paragraph"], {
        [classes[`styled-paragraph--${color}-color`]]: color,
        [classes[`styled-paragraph--${type}`]]: type,
        [classes[`styled-paragraph--${alignment}-alignment`]]: alignment,
        [classes["styled-paragraph--underline"]]:
          textDecoration && textDecoration?.underline,
        [classes["styled-paragraph--line-through"]]:
          textDecoration && textDecoration?.lineThrough,
      })}
    />
  );
};

export default StyledParagraph;
