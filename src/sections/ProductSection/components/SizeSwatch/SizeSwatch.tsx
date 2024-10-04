import React from "react";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./SizeSwatch.module.css";
import StyledButton from "@/components/StyledButton";

type SizeSwatchType = {
  sizes: {
    name: string;
    isAvailable: boolean;
    isChosen: boolean;
  }[];
};

const SizeSwatch: React.FunctionComponent<SizeSwatchType> = ({ sizes }) => {
  return (
    <div className={classes["size-swatch"]}>
      <StyledParagraph type="size-M-light">Rozmiar </StyledParagraph>
      <div className={classes["size-swatch__sizes"]}>
        {sizes?.map((size) => {
          return (
            <StyledParagraph
              type="size-M-light"
              textDecoration={{ underline: size.isChosen }}
            >
              {size.name}
            </StyledParagraph>
          );
        })}
      </div>
      <StyledButton variant="underline">Przewodnik po rozmiarach</StyledButton>
    </div>
  );
};

export default SizeSwatch;
