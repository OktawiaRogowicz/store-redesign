import React from "react";
import cx from "classnames";

import classes from "./Divider.module.css";

type DividerType = {
  color?: "black" | "beige" | "yellow" | "white";
};

const Divider: React.FunctionComponent<DividerType> = ({ color = "black" }) => {
  return (
    <hr
      className={cx(classes["divider"], {
        [classes[`divider--${color}-color`]]: color,
      })}
    />
  );
};

export default Divider;
