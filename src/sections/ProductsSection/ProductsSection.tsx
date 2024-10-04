import React from "react";

import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import StyledTitle from "@/components/StyledTitle";
import ProductCard from "@/sections/ProductsSliderSection/components/ProductCard";

import classes from "./ProductsSection.module.css";
import StyledButton from "@/components/StyledButton";

type ProductsSliderSectionType = {
  title: string;
  products: any[];
};

const ProductsSection: React.FunctionComponent<ProductsSliderSectionType> = ({
  title,
  products,
}) => {
  return (
    <SectionWrapper>
      <SectionContainer>
        <div className={classes["products-section"]}>
          <div className={classes["products-section__header"]}>
            <div className={classes["products-section__title"]}>
              <StyledTitle order={2}>Sukienki</StyledTitle>
              <StyledTitle order={3}>({products?.length ?? 0})</StyledTitle>
            </div>
            <StyledButton variant="underline">Filtruj</StyledButton>
          </div>
          {products?.length > 0 && (
            <div className={classes["products-section__products"]}>
              {products.map((product) => {
                return <ProductCard key={product.id} product={product} fill />;
              })}
            </div>
          )}
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default ProductsSection;
