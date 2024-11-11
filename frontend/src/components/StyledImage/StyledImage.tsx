import React from "react";
import Image, { ImageProps } from "next/image";

import classes from "./StyledImage.module.css";

type StyledImageType = {
  width?: string | number;
  height?: string | number;
  aspectRatio?: number;
  children?: React.ReactNode;
} & Omit<ImageProps, "width" | "height">;

const StyledImage: React.FunctionComponent<StyledImageType> = ({
  aspectRatio,
  width = "100%",
  height = "100%",
  src,
  alt,
  fill = true,
  priority,
  children,
  ...props
}) => {
  return (
    <div className={classes["styled-image__wrapper"]} style={{ width, height }}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        style={{ aspectRatio }}
        className={classes["styled-image__image"]}
        {...props}
      />
      {children}
    </div>
  );
};

export default StyledImage;
