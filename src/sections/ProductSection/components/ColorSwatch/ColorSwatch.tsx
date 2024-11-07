import React from "react";
import cx from "classnames";
import { Tooltip } from "@mantine/core";

import classes from "./ColorSwatch.module.css";

type ColorSwatchType = {
  colors: any[];
};

const ColorSwatch: React.FunctionComponent<ColorSwatchType> = ({ colors }) => {
  return (
    <div className={classes["color-swatch"]}>
      {colors?.map((color) => {
        return (
          <Tooltip key={color?.id} label={color.name} position="bottom">
            <div
              className={cx(classes["color-swatch"], {
                [classes["color-swatch--is-picked"]]: color.isPicked,
              })}
              style={{ backgroundColor: color.hex }}
            />
          </Tooltip>
        );
      })}
    </div>
  );
};

export default ColorSwatch;
