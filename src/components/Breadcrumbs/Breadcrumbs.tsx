import React from "react";

import StyledButton from "@/components/StyledButton";

import classes from "./Breadcrumbs.module.css";

type SectionWrapperType = {
  items: {
    id: string;
    href: string;
    title: string;
  }[];
};

const Breadcrumbs: React.FunctionComponent<SectionWrapperType> = ({
  items,
}) => {
  return (
    <div className={classes["breadcrumbs"]}>
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
