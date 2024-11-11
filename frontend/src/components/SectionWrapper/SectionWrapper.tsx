import React from "react";

import classes from "./SectionWrapper.module.css";

type SectionWrapperType = {
  children: React.ReactNode;
};

const SectionWrapper: React.FunctionComponent<SectionWrapperType> = ({
  children,
}) => {
  return <div className={classes["section-wrapper"]}>{children}</div>;
};

export default SectionWrapper;
