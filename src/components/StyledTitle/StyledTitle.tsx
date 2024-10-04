import React from "react";
import cx from "classnames";
import { Title, TitleProps } from "@mantine/core";

import classes from "./StyledTitle.module.css";

type StyledTitleType = { color?: "yellow" | "black" | "white" } & TitleProps;

const StyledTitle: React.FunctionComponent<StyledTitleType> = ({
  color = "black",
  order,
  ...props
}) => {
  return (
    <Title
      className={cx(classes["styled-title"], {
        [classes[`styled-title--h${order}`]]: order,
        [classes[`styled-title--color-${color}`]]: color,
      })}
      {...props}
    />
  );
};

export default StyledTitle;
