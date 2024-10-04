import React from "react";
import cx from "classnames";
import Image, { StaticImageData } from "next/image";

import classes from "./AnimatedImage.module.css";

type AnimatedImageType = {
  image: StaticImageData | string;
  variant: "top-to-bottom" | "bottom-to-top";
};

const AnimatedImage: React.FunctionComponent<AnimatedImageType> = ({
  image,
  variant,
}) => {
  return (
    <Image
      src={image}
      alt="Picture of the author"
      fill
      className={cx({
        [classes[`animated-image--${variant}`]]: variant,
      })}
      priority
    />
  );
};

export default AnimatedImage;
