import React from "react";
import cx from "classnames";

import classes from "./SectionContainer.module.css";

type SectionContainerType = {
  padding?: "S" | "M" | "L" | "XL";
  children: React.ReactNode;
  border?: {
    top?: boolean;
    bottom?: boolean;
  };
};

const SectionContainer: React.FunctionComponent<SectionContainerType> = ({
  children,
  padding = "M",
  border,
}) => {
  return (
    <div
      className={cx(classes[`section-container--size-${padding}`], {
        [classes["section-container--border-top"]]: border?.top,
        [classes["section-container--border-bottom"]]: border?.bottom,
      })}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
