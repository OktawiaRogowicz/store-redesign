import React from "react";
import { IconArrowLeft } from "@tabler/icons-react";

import StyledButton from "@/components/StyledButton";

import classes from "./Breadcrumbs.module.css";

type SectionWrapperType = {
  items: {
    id: string;
    href: string;
    title: string;
  }[];
  withIcon?: boolean;
};

const Breadcrumbs: React.FunctionComponent<SectionWrapperType> = ({
  items,
  withIcon = false,
}) => {
  return (
    <div className={classes["breadcrumbs"]}>
      {withIcon && <IconArrowLeft stroke="1px" width={16} height={16} />}
      {items.map((item, index) => (
        <StyledButton
          key={item.id}
          variant="text"
          size="no-padding"
          href={item.href}
        >
          {item.title} {index !== items.length - 1 && "/"}
        </StyledButton>
      ))}
    </div>
  );
};

export default Breadcrumbs;
