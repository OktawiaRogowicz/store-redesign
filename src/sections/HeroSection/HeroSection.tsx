"use client";

import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { StaticImageData } from "next/image";

import StyledButton from "@/components/StyledButton";
import StyledTitle from "@/components/StyledTitle";
import BackgroundImage from "@/sections/HeroSection/components/BackgroundImage";

import classes from "./HeroSection.module.css";
import SectionContainer from "@/components/SectionContainer";

type HeroSectionType = {
  title: string;
  button: {
    text: string;
    href: string;
  };
  images: {
    left: (StaticImageData | string)[];
    right: (StaticImageData | string)[];
  };
};

// const setIndex = (array, currentIndex, onIndexChange) => {
//   if (currentIndex === array.length - 1) {
//     onIndexChange(0);
//   } else {
//     onIndexChange(currentIndex + 1);
//   }
// };

const HeroSection: React.FunctionComponent<HeroSectionType> = ({
  title,
  button,
  images,
}) => {
  // const isMobile = useMediaQuery("(max-width: 992px)");
  const [currentIndexLeft, setCurrentIndexLeft] = useState(0);
  const [currentIndexRight, setCurrentIndexRight] = useState(0);

  // const [animation, setAnimation] = useState(false);

  // useEffect(() => {
  //   const changeImageIndexInterval = setInterval(() => {
  //     setAnimation(true);
  //     setTimeout(() => {
  //       setAnimation(false);
  //       setIndex(images.left, currentIndexLeft, setCurrentIndexLeft);
  //       setIndex(images.right, currentIndexRight, setCurrentIndexRight);
  //     }, 2000);
  //   }, 5000);

  //   return () => {
  //     clearInterval(changeImageIndexInterval);
  //   };
  // }, [currentIndexLeft, currentIndexRight]);

  return (
    <div className={classes["hero-section"]}>
      <BackgroundImage
        images={images.left}
        currentIndex={currentIndexLeft}
        animationOn={false}
        variant="top-to-bottom"
      />
      <BackgroundImage
        images={images.right}
        currentIndex={currentIndexRight}
        animationOn={false}
        variant="bottom-to-top"
      />
      <div className={classes["hero-section__title"]}>
        <SectionContainer padding="XL">
          <div className={classes["hero-section__title-content"]}>
            <StyledTitle order={1} color="yellow" textWrap="wrap">
              {title}
            </StyledTitle>
            <StyledButton
              variant="transparent"
              color="yellow"
              href={button.href}
            >
              {button.text}
            </StyledButton>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

export default HeroSection;
