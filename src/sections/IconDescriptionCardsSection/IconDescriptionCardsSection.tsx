import React from "react";
import { StaticImageData } from "next/image";

import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import IconDescriptionCard from "@/sections/IconDescriptionCardsSection/components/IconDescriptionCard";

import classes from "./IconDescriptionCardsSection.module.css";
import StyledParagraph from "@/components/StyledParagraph";

type IconDescriptionCardsSectionType = {
  items: {
    id: string;
    icon: StaticImageData | string;
    title: string;
    description: string;
  }[];
};

const IconDescriptionCardsSection: React.FunctionComponent<
  IconDescriptionCardsSectionType
> = ({ items }) => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <div className={classes["icon-description-cards-section"]}>
          <StyledParagraph type="size-S-semi-bold">•</StyledParagraph>
          <div className={classes["icon-description-cards-section__products"]}>
            {items?.map((item) => {
              return <IconDescriptionCard key={item.id} item={item} />;
            })}
          </div>
          <StyledParagraph type="size-S-semi-bold">•</StyledParagraph>
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default IconDescriptionCardsSection;
