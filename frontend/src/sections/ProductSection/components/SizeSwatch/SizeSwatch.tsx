import React from "react";
import { useTranslations } from "next-intl";

import StyledButton from "../../../../components/StyledButton";
import StyledParagraph from "../../../../components/StyledParagraph";

import classes from "./SizeSwatch.module.css";

type SizeSwatchType = {
  sizes: {
    name: string;
    isAvailable: boolean;
  }[];
  handleSizeClick: (value: string) => void;
  chosenSize: string;
};

const getOrder = (size: string) => {
  switch (size) {
    case "XXS":
      return 1;
    case "XS":
      return 2;
    case "S":
      return 3;
    case "M":
      return 4;
    case "L":
      return 5;
    case "XL":
      return 6;
    case "XXL":
      return 7;
  }
};

const SizeSwatch: React.FunctionComponent<SizeSwatchType> = ({
  sizes,
  handleSizeClick,
  chosenSize,
}) => {
  const t = useTranslations("components");
  return (
    <div className={classes["size-swatch"]}>
      <StyledParagraph type="size-M-light">
        {t("size-swatch.title")}
      </StyledParagraph>
      <div className={classes["size-swatch__sizes"]}>
        {sizes?.map((size) => {
          return (
            <StyledButton
              key={size.name}
              variant="text"
              size="no-padding"
              onClick={() => handleSizeClick(size.name)}
              style={{ order: getOrder(size.name) }}
            >
              <StyledParagraph
                type="size-M-light"
                textDecoration={{ underline: size.name === chosenSize }}
              >
                {size.name}
              </StyledParagraph>
            </StyledButton>
          );
        })}
      </div>
      <StyledButton
        variant="underline"
        className={classes["size-swatch__guide-button"]}
        fullWidth={false}
        size="no-padding"
      >
        {t("size-swatch.guide")}
      </StyledButton>
    </div>
  );
};

export default SizeSwatch;
