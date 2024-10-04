import React from "react";
import cx from "classnames";
import { Button, ButtonProps } from "@mantine/core";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./StyledButton.module.css";
import Link from "next/link";

type StyledButtonPropsType = {
  children: React.ReactNode;
  color?: "black" | "yellow" | "white" | "inherit";
  size?: "no-padding" | "S" | "M" | "L";
  href?: string;
  onClick: () => void;
} & ButtonProps;

const StyledButton: React.FunctionComponent<StyledButtonPropsType> = ({
  children,
  color,
  size = "M",
  href,
  ...props
}) => {
  if (href)
    return (
      <Link
        href={href}
        {...props}
        className={cx(classes["styled-button"], {
          [classes["styled-button--transparent"]]:
            props.variant === "transparent",
          [classes[`styled-button--${color}`]]: color,
          [classes[`styled-button--size-${size}`]]: size,
        })}
      >
        <StyledParagraph
          type={
            props.variant === "underline"
              ? "size-M-light"
              : props.variant === "text"
                ? "size-S-light"
                : "size-M-semi-bold"
          }
          color={props.variant === "transparent" ? color : "inherit"}
        >
          {children}
        </StyledParagraph>
      </Link>
    );

  return (
    <Button
      {...props}
      className={cx(classes["styled-button"], {
        [classes["styled-button--transparent"]]:
          props.variant === "transparent",
        [classes[`styled-button--${color}`]]: color,
        [classes[`styled-button--size-${size}`]]: size,
      })}
    >
      <StyledParagraph
        type={
          props.variant === "underline"
            ? "size-M-light"
            : props.variant === "text"
              ? "size-S-light"
              : "size-M-semi-bold"
        }
        color={props.variant === "transparent" ? color : "inherit"}
      >
        {children}
      </StyledParagraph>
    </Button>
  );
};

export default StyledButton;
