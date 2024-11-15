import React from "react";
import cx from "classnames";
import { TextInput, TextInputProps } from "@mantine/core";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./StyledTextInput.module.css";

type StyledTextInputType = TextInputProps;

const StyledTextInput: React.FunctionComponent<StyledTextInputType> = ({
  leftSection,
  error,
  ...props
}) => {
  return (
    <div className={classes["styled-text-input__container"]}>
      <TextInput
        {...props}
        classNames={{
          wrapper: classes["styled-text-input__wrapper"],
          root: classes["styled-text-input__root"],
          input: cx(classes["styled-text-input__input"], {
            [classes["styled-text-input__input--error"]]: error,
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
      {error && (
        <StyledParagraph type="size-S-light" color="red">
          {error}
        </StyledParagraph>
      )}
    </div>
  );
};

export default StyledTextInput;
