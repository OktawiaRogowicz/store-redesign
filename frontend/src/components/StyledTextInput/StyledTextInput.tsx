import React from "react";
import cx from "classnames";
import { TextInput, TextInputProps } from "@mantine/core";

import classes from "./StyledTextInput.module.css";

type StyledTextInputType = TextInputProps;

const StyledTextInput: React.FunctionComponent<StyledTextInputType> = ({
  leftSection,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      classNames={{
        wrapper: classes["styled-text-input__wrapper"],
        root: classes["styled-text-input__root"],
        input: cx(classes["styled-text-input__input"], {
          [classes["styled-text-input__input--with-left-section"]]:
            !!leftSection,
        }),
        section: classes["styled-text-input__section"],
        required: classes["styled-text-input__required"],
        label: classes["styled-text-input__label"],
        description: classes["styled-text-input__description"],
        error: classes["styled-text-input__error"],
      }}
    />
  );
};

export default StyledTextInput;
