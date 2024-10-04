import React from "react";
import Image, { StaticImageData } from "next/image";

import AnimatedImage from "@/sections/HeroSection/components/AnimatedImage";

import classes from "./BackgroundImage.module.css";

type HeroSectionType = {
  images: (StaticImageData | string)[];
  currentIndex: number;
  animationOn: boolean;
  variant: "top-to-bottom" | "bottom-to-top";
};

const BackgroundImage: React.FunctionComponent<HeroSectionType> = ({
  images,
  currentIndex,
  animationOn,
  variant,
}) => {
  return (
    <div className={classes["background-image__image-wrapper"]}>
      <Image
        src={images[currentIndex]}
        alt="Picture of the author"
        fill
        className={classes["background-image__image"]}
        priority
      />
      {animationOn && (
        <AnimatedImage
          image={images[(currentIndex + 1) % images.length]}
          animationOn={animationOn}
          variant={variant}
        />
      )}
    </div>
  );
};

export default BackgroundImage;
