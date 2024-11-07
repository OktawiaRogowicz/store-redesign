import React from "react";
import Image, { StaticImageData } from "next/image";

import StyledParagraph from "@/components/StyledParagraph";
import { urlFor } from "@/sanity/lib/image";

import classes from "./IconDescriptionCard.module.css";

type IconDescriptionCardsSectionType = {
  item: {
    id: string;
    icon: StaticImageData | string;
    title: string;
    description: string;
  };
};

const IconDescriptionCard: React.FunctionComponent<
  IconDescriptionCardsSectionType
> = ({ item }) => {
  const imageSrc = urlFor(item.icon).width(64).height(64).url();

  return (
    <div className={classes["icon-description-card"]}>
      <div className={classes["icon-description-card__header"]}>
        <div className={classes["icon-description-card__image-wrapper"]}>
          <Image
            src={imageSrc}
            alt="to do"
            width={64}
            height={64}
            className={classes["icon-description-card__image"]}
          />
        </div>
        <StyledParagraph type="size-S-semi-bold">{item.title}</StyledParagraph>
      </div>
      <StyledParagraph type="size-M-light">{item.description}</StyledParagraph>
    </div>
  );
};

export default IconDescriptionCard;
