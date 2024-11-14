import React from "react";
import cx from "classnames";
import { Checkbox, CheckboxProps } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./StyledCheckbox.module.css";

type StyledTextInputType = CheckboxProps;

const StyledCheckbox: React.FunctionComponent<StyledTextInputType> = ({
  label,
  description,
  error,
  ...props
}) => {
  console.log("error: ", error);

  const CheckboxIcon: CheckboxProps["icon"] = ({ ...others }) => (
    <IconX height="24px" width="24px" {...others} />
  );

  return (
    <Checkbox
      icon={CheckboxIcon}
      iconColor="#2F240E"
      label={
        <StyledParagraph type="size-M-light" color={error ? "red" : "black"}>
          {label}
        </StyledParagraph>
      }
      description={
        <StyledParagraph type="size-S-light" color={error ? "red" : "black"}>
          {description}
        </StyledParagraph>
      }
      error={error}
      {...props}
      classNames={{
        root: classes["styled-checkbox__root"],
        input: cx(classes["styled-checkbox__input"], {
          [classes["styled-checkbox__input--error"]]: error,
        }),
        icon: classes["styled-checkbox__icon"],
        inner: classes["styled-checkbox__inner"],
        body: classes["styled-checkbox__body"],
        labelWrapper: classes["styled-checkbox__label-wrapper"],
        label: classes["styled-checkbox__label"],
        description: classes["styled-checkbox__description"],
        error: classes["styled-checkbox__error"],
      }}
    />
  );
};

export default StyledCheckbox;
