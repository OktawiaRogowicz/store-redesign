import React from "react";
import {
  Accordion,
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from "@mantine/core";

import StyledParagraph from "@/components/StyledParagraph";

import classes from "./StyledAccordion.module.css";

type StyledTextInputType = {
  items: {
    item: AccordionItemProps;
    control: { text: string } & AccordionControlProps;
    panel: { text: string } & AccordionPanelProps;
  }[];
} & AccordionProps;

const StyledAccordion: React.FunctionComponent<StyledTextInputType> = ({
  items,
  ...props
}) => {
  return (
    <Accordion
      {...props}
      classNames={{
        root: classes["styled-accordion__root"],
        item: classes["styled-accordion__item"],
        control: classes["styled-accordion__control"],
        chevron: classes["styled-accordion__chevron"],
        label: classes["styled-accordion__label"],
        icon: classes["styled-accordion__icon"],
        itemTitle: classes["styled-accordion__item-title"],
        panel: classes["styled-accordion__panel"],
        content: classes["styled-accordion__content"],
      }}
    >
      {items.map((item) => {
        return (
          <Accordion.Item {...item.item}>
            <Accordion.Control {...item.control}>
              <StyledParagraph type="size-M-regular">
                {item.control.text}
              </StyledParagraph>
            </Accordion.Control>
            <Accordion.Panel {...item.panel}>
              <StyledParagraph type="size-M-light">
                {item.panel.text}
              </StyledParagraph>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default StyledAccordion;
