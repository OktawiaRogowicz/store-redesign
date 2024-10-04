import React from "react";

import classes from "./ProductCard.module.css";

type SectionContainerType = {
  children: React.ReactNode;
};

const ProductCard: React.FunctionComponent<SectionContainerType> = ({
  children,
}) => {
  return <div className={classes["section-container"]}>{children}</div>;
};

export default ProductCard;
