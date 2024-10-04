import React from "react";
import cx from "classnames";

import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import StyledTitle from "@/components/StyledTitle";
import { ArrowRightIcon } from "@/icons";
import ProductCard from "@/sections/ProductsSliderSection/components/ProductCard";

import classes from "./ProductsSliderSection.module.css";

type ProductsSliderSectionType = {
  title: string;
  products: any[];
  href?: string;
};

const ProductsSliderSection: React.FunctionComponent<
  ProductsSliderSectionType
> = ({ title, products, href }) => {
  return (
    <SectionWrapper>
      <div className={classes["products-slider-section"]}>
        <SectionContainer>
          <div
            className={cx(classes["products-slider-section__header"], {
              [classes["products-slider-section__header--linked"]]: href,
            })}
          >
            <StyledTitle order={2}>{title}</StyledTitle>
            {href && <ArrowRightIcon />}
          </div>
        </SectionContainer>
        {products?.length > 0 && (
          <div className={classes["products-slider-section__products"]}>
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ProductsSliderSection;
