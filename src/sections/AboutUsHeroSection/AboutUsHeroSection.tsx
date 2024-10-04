"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import StyledTitle from "@/components/StyledTitle";
import StyledParagraph from "@/components/StyledParagraph";
import { urlFor } from "@/sanity/lib/image";

import classes from "./AboutUsHeroSection.module.css";

type AboutUsHeroSectionType = {
  title: string;
  description: string;
  image: StaticImageData | string;
};

const AboutUsHeroSection: React.FunctionComponent<AboutUsHeroSectionType> = ({
  title,
  description,
  image,
}) => {
  const src = urlFor(image).url();

  return (
    <div className={classes["about-us-hero-section"]}>
      <div className={classes["about-us-hero-section__image-wrapper"]}>
        <Image
          src={src}
          alt="Picture of the author"
          fill
          className={classes["about-us-hero-section__image"]}
          priority
        />
      </div>
      <div className={classes["about-us-hero-section__content"]}>
        <StyledTitle order={1}>{title}</StyledTitle>
        <StyledParagraph type="size-M-light">{description}</StyledParagraph>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
