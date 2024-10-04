import React from "react";
import cx from "classnames";

import classes from "./SectionContainer.module.css";

type SectionContainerType = {
  padding?: "S" | "M" | "L" | "XL";
  children: React.ReactNode;
};

const SectionContainer: React.FunctionComponent<SectionContainerType> = ({
  children,
  padding = "M",
}) => {
  return (
    <div className={cx(classes[`section-container--size-${padding}`])}>
      {children}
    </div>
  );
};

export default SectionContainer;
