import React from "react";

import SectionContainer from "../../components/SectionContainer";
import SectionWrapper from "../../components/SectionWrapper";
import StyledTitle from "../../components/StyledTitle";
import ProductCard from "../ProductsSliderSection/components/ProductCard";

import classes from "./ProductsSection.module.css";
import StyledButton from "../../components/StyledButton";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ROUTES } from "../../config";
import StyledParagraph from "../../components/StyledParagraph";

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
          <Breadcrumbs
            items={[
              {
                href: ROUTES.home.href,
                title: "WRÓĆ DO STRONY GŁÓWNEJ",
                id: "miió",
              },
            ]}
            withIcon
          />
          <div className={classes["products-section__header"]}>
            <div className={classes["products-section__title"]}>
              <StyledTitle order={2}>{title}</StyledTitle>
              <StyledTitle order={3}>({products?.length ?? 0})</StyledTitle>
            </div>
            <StyledButton variant="underline" size="no-padding">
              Filtruj
            </StyledButton>
          </div>
          {products?.length > 0 ? (
            <div className={classes["products-section__products"]}>
              {products.map((product) => {
                return <ProductCard key={product.id} product={product} fill />;
              })}
            </div>
          ) : (
            <StyledParagraph type="size-M-light" alignment="center">
              Kategoria jest pusta.
            </StyledParagraph>
          )}
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default ProductsSection;
