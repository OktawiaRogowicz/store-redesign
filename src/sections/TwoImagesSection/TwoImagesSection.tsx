import React from "react";
import Image from "next/image";

import SectionWrapper from "@/components/SectionWrapper";
import StyledParagraph from "@/components/StyledParagraph";
import StyledTitle from "@/components/StyledTitle";
import { AboutUsContentType } from "@/sanity/schemas/documents/about-us";

import classes from "./TwoImagesSection.module.css";
import { ROUTES } from "@/config";
import { useRouter } from "next/navigation";

type TwoImagesSectionType = {
  content: AboutUsContentType["twoImagesSection"];
};

const ProductPreview = ({ product }: { product: any }) => {
  const router = useRouter();

  const handleClick = ({
    e,
    path,
  }: {
    e: React.MouseEvent<HTMLDivElement>;
    path: string;
  }) => {
    e?.preventDefault();
    router.push(path);
  };
  return (
    <div
      onClick={(e) =>
        handleClick({
          e,
          path: `${ROUTES.products.href}/${product.slug.current}`,
        })
      }
      className={classes["two-image-section__image-container"]}
    >
      <div className={classes["two-image-section__image-wrapper"]}>
        <Image
          src={product.previewImageUrl}
          alt={product.title}
          fill
          className={classes["two-image-section__image"]}
          priority
        />
      </div>
      <div className={classes["two-image-section__image-description"]}>
        <div
          className={classes["two-image-section__image-description--sticky"]}
        >
          <StyledTitle order={5} color="white">
            {product.title}
          </StyledTitle>
          <StyledParagraph type="size-M-light" color="white">
            bep bep
          </StyledParagraph>
        </div>
      </div>
    </div>
  );
};

const TwoImagesSection: React.FunctionComponent<TwoImagesSectionType> = ({
  content,
}) => {
  if (!content?.productLeft || !content?.productRight) return;

  return (
    <SectionWrapper>
      <div className={classes["two-image-section"]}>
        <ProductPreview product={content.productLeft} />
        <ProductPreview product={content.productRight} />
      </div>
    </SectionWrapper>
  );
};

export default TwoImagesSection;
