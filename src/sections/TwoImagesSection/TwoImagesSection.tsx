import React from "react";
import Image, { StaticImageData } from "next/image";

import SectionWrapper from "@/components/SectionWrapper";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";

import classes from "./TwoImagesSection.module.css";
import Image1 from "../../../public/image1.png";

type TwoImagesSectionType = {
  items: {
    image: StaticImageData | string;
    title: string;
    description: string;
  }[];
};

const TwoImagesSection: React.FunctionComponent<TwoImagesSectionType> = ({
  items,
}) => {
  return (
    <SectionWrapper>
      <div className={classes["two-image-section"]}>
        <div className={classes["two-image-section__image-container"]}>
          <div className={classes["two-image-section__image-wrapper"]}>
            <Image
              src={Image1}
              alt="Picture of the author"
              fill
              className={classes["two-image-section__image"]}
              priority
            />
          </div>
          <div className={classes["two-image-section__image-description"]}>
            <div
              className={
                classes["two-image-section__image-description--sticky"]
              }
            >
              <StyledTitle order={5} color="white">
                bep, bepbep
              </StyledTitle>
              <StyledParagraph type="size-M-light" color="white">
                bep bep
              </StyledParagraph>
            </div>
          </div>
        </div>
        <div className={classes["two-image-section__image-container"]}>
          <div className={classes["two-image-section__image-wrapper"]}>
            <Image
              src={Image1}
              alt="Picture of the author"
              fill
              className={classes["two-image-section__image"]}
              priority
            />
          </div>
          <div className={classes["two-image-section__image-description"]}>
            <div
              className={
                classes["two-image-section__image-description--sticky"]
              }
            >
              <StyledTitle order={5} color="white">
                bep, bepbep
              </StyledTitle>
              <StyledParagraph type="size-M-light" color="white">
                bep bep
              </StyledParagraph>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TwoImagesSection;
