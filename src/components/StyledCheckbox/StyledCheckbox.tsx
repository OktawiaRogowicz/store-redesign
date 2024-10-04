import React from "react";
import { Checkbox, CheckboxProps } from "@mantine/core";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./StyledCheckbox.module.css";
import { IconX } from "@tabler/icons-react";

type StyledTextInputType = {
  children: React.ReactNode;
} & CheckboxProps;

const StyledCheckbox: React.FunctionComponent<StyledTextInputType> = ({
  label,
  description,
  ...props
}) => {
  const CheckboxIcon: CheckboxProps["icon"] = ({ ...others }) => (
    <IconX height="24px" width="24px" {...others} />
  );

  return (
    <Checkbox
      icon={CheckboxIcon}
      iconColor="#2F240E"
      label={<StyledParagraph type="size-M-light">{label}</StyledParagraph>}
      description={
        <StyledParagraph type="size-S-light">{description}</StyledParagraph>
      }
      {...props}
      classNames={{
        root: classes["styled-checkbox__root"],
        input: classes["styled-checkbox__input"],
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
