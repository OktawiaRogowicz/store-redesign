import React from "react";
import cx from "classnames";
import { useRouter } from "next/navigation";

import SectionContainer from "@/components/SectionContainer";
import SectionWrapper from "@/components/SectionWrapper";
import StyledTitle from "@/components/StyledTitle";
import { ArrowRightIcon } from "@/icons";
import ProductCard from "@/sections/ProductsSliderSection/components/ProductCard";

import classes from "./ProductsSliderSection.module.css";
import { ShopifyCollectionProductType } from "@/shopify/helpers/getCollectionById";

type ProductsSliderSectionType = {
  title: string;
  products: ShopifyCollectionProductType[];
  href?: string;
};

const ProductsSliderSection: React.FunctionComponent<
  ProductsSliderSectionType
> = ({ title, products, href }) => {
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

  if (!products || products?.length === 0) return;

  return (
    <SectionWrapper>
      <div className={classes["products-slider-section"]}>
        <SectionContainer>
          <div
            className={cx(classes["products-slider-section__header"], {
              [classes["products-slider-section__header--linked"]]: href,
            })}
            onClick={(e) => {
              if (href) handleClick({ e, path: href });
            }}
          >
            <StyledTitle order={2}>{title}</StyledTitle>
            {href && <ArrowRightIcon />}
          </div>
        </SectionContainer>
        <div className={classes["products-slider-section__products"]}>
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductsSliderSection;
